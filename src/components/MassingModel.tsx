"use client";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Edges, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef } from "react";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { useReducedMotion, type MotionValue } from "motion/react";
import { buildSteelFrame } from "./models/steelFrame";

type Colors = { ink: string; accent: string; face: string; plate: string };
type Props = {
  colors: Colors; progress: MotionValue<number>; pointer: React.RefObject<{ x: number; y: number }>; active: boolean;
  url: string; mtl?: string; materials?: "own" | "massing";
};

const FIT = 4.0;    // longest side of the model after normalisation, in scene units
const REST_Y = 0.35; // resting height of the model group; raise to lift the building in the band
const START_ROT = -43.3; // yaw in radians when the band enters; more negative starts further to the left
const SWEEP_ROT = 2.6;  // how far it turns across the band's scroll, in radians

type MeshEntry = { geometry: THREE.BufferGeometry; material: THREE.Material };

/**
 * Exported GLBs from 3ds Max often arrive with material names and base colours but no texture images.
 * This maps each material to a believable surface from its name, keeping the exported base colour.
 */
export type TextureSet = Record<string, { map?: string; normal?: string; repeat?: number; color?: string }>;

/** Which material names get which maps. Keys are regexes tested against the lower-cased material name. */
const TEXTURES: TextureSet = {
  "concrete.*plate|cast": { map: "concrete-plates.jpg", repeat: 1 },
  "concrete.*floor|polished": { map: "concrete-polished.jpg", repeat: 2 },
  "sidewalk|tile|pav": { map: "sidewalk-tiles.jpg", normal: "sidewalk-tiles-normal.jpg", repeat: 3 },
  "plaster|render": { map: "plaster.jpg", repeat: 2, color: "#C9A08E" },
  "alumin|anodi": { map: "aluminium-brushed.jpg", normal: "aluminium-brushed-normal.jpg", repeat: 2, color: "#5a5c60" },
  "sandblast": { normal: "metal-sandblasted-normal.jpg", repeat: 4, color: "#1b1d20" },
};
/** Texture maps live in a tex/ folder beside the model file. */
const texBaseFor = (url: string) => url.replace(/[^/]*$/, "tex/");

function loadTex(base: string, file: string, repeat: number, srgb: boolean) {
  const t = new THREE.TextureLoader().load(base + file);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat, repeat); t.anisotropy = 8;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function surfaceFor(source: THREE.Material, texBase: string): THREE.Material {
  const name = (source.name || "").toLowerCase();
  const base = (source as THREE.MeshStandardMaterial).color?.clone() ?? new THREE.Color("#9a9a9a");
  if (/glass|mirror|glazing|window/.test(name)) {
    return new THREE.MeshPhysicalMaterial({ color: new THREE.Color("#9fb3bd"), metalness: 0.1, roughness: 0.05, transparent: true, opacity: 0.55, envMapIntensity: 1.2, depthWrite: false });
  }
  const hit = Object.entries(TEXTURES).find(([re]) => new RegExp(re).test(name))?.[1];
  const metal = /alumin|steel|metal|anodi|iron|chrome/.test(name);
  const m = new THREE.MeshStandardMaterial({
    color: hit?.color ? new THREE.Color(hit.color) : hit?.map ? new THREE.Color("#ffffff") : base,
    metalness: metal ? 0.8 : 0,
    roughness: metal ? 0.4 : /plaster|render|paint/.test(name) ? 0.9 : 0.95,
    envMapIntensity: metal ? 1.0 : 0.4,
  });
  if (hit?.map) m.map = loadTex(texBase, hit.map, hit.repeat ?? 1, true);
  if (hit?.normal) { m.normalMap = loadTex(texBase, hit.normal, hit.repeat ?? 1, false); m.normalScale.set(0.6, 0.6); }
  return m;
}

/** Procedural studio environment for reflections: no network fetch, so nothing can block the model. */
function StudioEnvironment() {
  const gl = useThree((s) => s.gl);
  const env = useMemo(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const texture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();
    return texture;
  }, [gl]);
  useEffect(() => () => env.dispose(), [env]);
  return <primitive object={env} attach="environment" />;
}

/** Hooks cannot be conditional, so each loader path is its own small component. */
function FromGltf(props: Omit<Props, "active">) {
  const { scene } = useGLTF(props.url);
  return <Building {...props} obj={scene} />;
}
function FromObjWithMtl(props: Omit<Props, "active"> & { mtl: string }) {
  const mats = useLoader(MTLLoader, props.mtl);
  const obj = useLoader(OBJLoader, props.url, (loader) => { mats.preload(); loader.setMaterials(mats); });
  return <Building {...props} obj={obj} />;
}
function FromObj(props: Omit<Props, "active">) {
  const obj = useLoader(OBJLoader, props.url);
  return <Building {...props} obj={obj} />;
}
/** url "procedural:<name>" builds the object in code from the template colours (see ./models). */
function FromProcedural(props: Omit<Props, "active">) {
  const obj = useMemo(() => buildSteelFrame({ ink: props.colors.ink, accent: props.colors.accent, plate: props.colors.plate }), [props.colors.ink, props.colors.accent, props.colors.plate]);
  return <Building {...props} obj={obj} />;
}

/** Centres a loaded model on the ground plate and scales it to FIT.
 *  materials="own" keeps the model's materials (upgraded by name); "massing" renders plaster faces with ink edges in the template tokens. */
function Building({ colors, progress, pointer, materials = "massing", obj, url }: Omit<Props, "active"> & { obj: THREE.Object3D }) {
  const reduce = useReducedMotion();
  const group = useRef<THREE.Group>(null);
  const pivot = useRef<THREE.Group>(null);
  const tilt = useRef({ x: 0, y: 0 });

  const { meshes, scale, offset } = useMemo(() => {
    obj.updateMatrixWorld(true);
    const meshes: (MeshEntry & { matrix: THREE.Matrix4 })[] = [];
    const cache = new Map<THREE.Material, THREE.Material>();
    obj.traverse((o) => {
      const m = o as THREE.Mesh;
      if (!m.isMesh) return;
      const src = Array.isArray(m.material) ? m.material[0] : m.material;
      if (!cache.has(src)) cache.set(src, materials === "own" ? surfaceFor(src, texBaseFor(url)) : new THREE.MeshStandardMaterial({ color: colors.face, roughness: 0.95, metalness: 0 }));
      meshes.push({ geometry: m.geometry, material: cache.get(src)!, matrix: m.matrixWorld.clone() });
    });
    const box = new THREE.Box3().setFromObject(obj);
    const size = box.getSize(new THREE.Vector3());
    const scale = FIT / Math.max(size.x, size.y, size.z);
    const center = box.getCenter(new THREE.Vector3());
    return { meshes, scale, offset: new THREE.Vector3(-center.x, -box.min.y + 0.02 / scale, -center.z) };
  }, [obj, materials, colors.face, url]);

  useFrame(() => {
    if (!group.current || !pivot.current) return;
    tilt.current.x += (pointer.current.x - tilt.current.x) * 0.06;
    tilt.current.y += (pointer.current.y - tilt.current.y) * 0.06;
    pivot.current.rotation.y = tilt.current.x;
    pivot.current.rotation.x = tilt.current.y;
    // Reduced motion: one still frame a third of the way through the sweep.
    const p = reduce ? 0.35 : progress.get();
    group.current.rotation.y = START_ROT + p * SWEEP_ROT;
    // Rotation only: the building stays at REST_Y and full size throughout the band.
  });

  return (
    <group ref={pivot}>
      <group ref={group} rotation={[0, START_ROT, 0]} position={[0, REST_Y, 0]}>
        <group scale={scale} position={offset.clone().multiplyScalar(scale)}>
          {meshes.map((m, i) => (
            <mesh key={i} geometry={m.geometry} material={m.material} matrixAutoUpdate={false} matrix={m.matrix} renderOrder={m.material.transparent ? 10 : 0}>
              {materials !== "own" && <Edges color={colors.ink} threshold={25} />}
            </mesh>
          ))}
        </group>
        <mesh position={[0, -0.07, 0]}><boxGeometry args={[FIT * 1.25, 0.06, FIT * 0.9]} /><meshBasicMaterial color={colors.plate} polygonOffset polygonOffsetFactor={1} polygonOffsetUnits={1} /><Edges color={colors.accent} /></mesh>
      </group>
    </group>
  );
}

export default function MassingModel(props: Props) {
  const reduce = useReducedMotion();
  const isGltf = /\.gl(b|tf)(\?|$)/i.test(props.url);
  const isProcedural = props.url.startsWith("procedural:");
  return (
    <Canvas
      dpr={[1, 2]}
      frameloop={reduce ? "demand" : props.active ? "always" : "never"}
      camera={{ position: [6.6, 4.6, 9.2], fov: 24, near: 0.1, far: 100 }}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      onCreated={({ camera }) => camera.lookAt(0, 1.6, 0)}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 8, 6]} intensity={1.6} />
      <directionalLight position={[-6, 3, -4]} intensity={0.5} />
      <Suspense fallback={null}>
        {props.materials === "own" && <StudioEnvironment />}
        {isProcedural ? <FromProcedural {...props} /> : isGltf ? <FromGltf {...props} /> : props.mtl ? <FromObjWithMtl {...props} mtl={props.mtl} /> : <FromObj {...props} />}
      </Suspense>
    </Canvas>
  );
}
