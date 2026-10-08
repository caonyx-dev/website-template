// Procedural 3D object for the construction template: a three-storey steel frame under
// construction with a ground slab, a half-laid first floor and an amber tower crane.
// Materials are named so MassingModel's surfaceFor() treats them as steel, concrete and painted metal.
import * as THREE from "three";

export type FrameColors = { ink: string; accent: string; plate: string };

const BAY_X = 2.0, BAY_Z = 1.8, BAYS_X = 3, BAYS_Z = 2, STOREY = 1.1, STOREYS = 3;

function box(w: number, h: number, d: number, m: THREE.Material, x: number, y: number, z: number, ry = 0, rz = 0) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  mesh.position.set(x, y, z);
  mesh.rotation.set(0, ry, rz);
  return mesh;
}

export function buildSteelFrame(c: FrameColors): THREE.Group {
  const g = new THREE.Group();
  const steel = new THREE.MeshStandardMaterial({ name: "Steel frame", color: new THREE.Color(c.ink).lerp(new THREE.Color("#7a7d82"), 0.35) });
  const deck = new THREE.MeshStandardMaterial({ name: "Steel deck", color: new THREE.Color("#9a9ea3") });
  const slab = new THREE.MeshStandardMaterial({ name: "Concrete slab", color: new THREE.Color("#c9c7bf") });
  const crane = new THREE.MeshStandardMaterial({ name: "Crane steel amber", color: new THREE.Color(c.accent) });
  const cable = new THREE.MeshStandardMaterial({ name: "Cable steel", color: new THREE.Color("#2a2a2a") });

  const W = BAY_X * BAYS_X, D = BAY_Z * BAYS_Z, H = STOREY * STOREYS;
  const x0 = -W / 2, z0 = -D / 2;

  // Ground slab and a thin blinding layer
  g.add(box(W + 0.6, 0.12, D + 0.6, slab, 0, 0.06, 0));

  // Columns on the grid, the last line one storey short (still going up)
  for (let i = 0; i <= BAYS_X; i++) for (let j = 0; j <= BAYS_Z; j++) {
    const short = i === BAYS_X;
    const h = short ? STOREY * 2 : H;
    g.add(box(0.1, h, 0.1, steel, x0 + i * BAY_X, 0.12 + h / 2, z0 + j * BAY_Z));
  }
  // Beams per level; level 3 only over the first two bays
  for (let lvl = 1; lvl <= STOREYS; lvl++) {
    const y = 0.12 + lvl * STOREY;
    const nx = lvl === STOREYS ? BAYS_X - 1 : BAYS_X;
    for (let j = 0; j <= BAYS_Z; j++) for (let i = 0; i < nx; i++) g.add(box(BAY_X, 0.14, 0.08, steel, x0 + i * BAY_X + BAY_X / 2, y, z0 + j * BAY_Z));
    for (let i = 0; i <= nx; i++) for (let j = 0; j < BAYS_Z; j++) g.add(box(0.08, 0.14, BAY_Z, steel, x0 + i * BAY_X, y, z0 + j * BAY_Z + BAY_Z / 2));
    // Secondary joists across the first bay only
    if (lvl < STOREYS) for (let k = 1; k < 4; k++) for (let j = 0; j < BAYS_Z; j++) g.add(box(0.05, 0.1, BAY_Z, steel, x0 + (k * BAY_X) / 4, y + 0.02, z0 + j * BAY_Z + BAY_Z / 2));
  }
  // First floor: concrete over two bays, metal decking over the third (half laid)
  g.add(box(BAY_X * 2, 0.08, D, slab, x0 + BAY_X, 0.12 + STOREY + 0.11, 0));
  g.add(box(BAY_X * 0.55, 0.04, D, deck, x0 + BAY_X * 2 + BAY_X * 0.275, 0.12 + STOREY + 0.09, 0));
  // Second floor: decking over the first bay only
  g.add(box(BAY_X, 0.04, D, deck, x0 + BAY_X / 2, 0.12 + STOREY * 2 + 0.09, 0));
  // Diagonal bracing on the back face of the first bay
  const diag = Math.hypot(BAY_X, STOREY);
  for (let lvl = 0; lvl < 2; lvl++) {
    const y = 0.12 + lvl * STOREY + STOREY / 2;
    g.add(box(diag, 0.05, 0.05, steel, x0 + BAY_X / 2, y, z0, 0, Math.atan2(STOREY, BAY_X)));
    g.add(box(diag, 0.05, 0.05, steel, x0 + BAY_X / 2, y, z0, 0, -Math.atan2(STOREY, BAY_X)));
  }

  // Tower crane beside the frame
  const cx = x0 - 1.6, cz = z0 + 0.6, mastH = H + 2.4;
  g.add(box(0.9, 0.16, 0.9, slab, cx, 0.08, cz));
  for (const [dx, dz] of [[-0.14, -0.14], [0.14, -0.14], [-0.14, 0.14], [0.14, 0.14]]) g.add(box(0.05, mastH, 0.05, crane, cx + dx, mastH / 2 + 0.16, cz + dz));
  for (let y = 0.5; y < mastH; y += 0.45) {
    g.add(box(0.33, 0.03, 0.03, crane, cx, y, cz - 0.14)); g.add(box(0.33, 0.03, 0.03, crane, cx, y, cz + 0.14));
    g.add(box(0.03, 0.03, 0.33, crane, cx - 0.14, y, cz)); g.add(box(0.03, 0.03, 0.33, crane, cx + 0.14, y, cz));
  }
  const jy = mastH + 0.3;
  g.add(box(0.5, 0.4, 0.5, crane, cx, jy - 0.1, cz));                         // slewing unit
  g.add(box(6.2, 0.1, 0.1, crane, cx + 3.1, jy + 0.05, cz));                   // jib
  g.add(box(6.2, 0.06, 0.06, crane, cx + 3.1, jy + 0.35, cz));                 // jib top chord
  g.add(box(1.8, 0.1, 0.1, crane, cx - 0.9, jy + 0.05, cz));                   // counter-jib
  g.add(box(0.5, 0.5, 0.6, slab, cx - 1.6, jy - 0.2, cz));                     // counterweight
  g.add(box(0.05, 1.2, 0.05, crane, cx, jy + 0.9, cz));                        // apex
  // Hook line to a beam being set over the unfinished bay
  const hx = x0 + BAY_X * 2.5, hookTop = jy, hookY = 0.12 + STOREY * 2 + 0.9;
  g.add(box(0.02, hookTop - hookY, 0.02, cable, hx, (hookTop + hookY) / 2, cz));
  g.add(box(0.02, 0.5, 0.02, cable, hx, hookY - 0.25, cz));
  g.add(box(BAY_X, 0.14, 0.08, steel, hx, hookY - 0.5, cz));

  // Stacked beams on the ground, waiting
  for (let k = 0; k < 3; k++) g.add(box(BAY_Z, 0.12, 0.08, steel, x0 + W + 0.9, 0.18 + k * 0.13, z0 + 0.5 + k * 0.02, Math.PI / 2));
  return g;
}
