"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useReducedMotionSafe } from "./Reveal";
import Watermark from "./Watermark";
import type { SiteContent } from "@/lib/content";

const MassingModel = dynamic(() => import("./MassingModel"), { ssr: false, loading: () => null });

type Props = SiteContent["model"];

/**
 * The page's one 3D object as a scroll-driven walkthrough. The band is tall; its inner frame pins
 * while the model turns and the chapters on the left step through with a chapter index and facts.
 * Reduced motion: no pinning, the chapters render as a list beside a still model.
 */
export default function ModelBand({ url, mtl, materials = "massing", watermark, label, caption, title, steps = [] }: Props) {
  const band = useRef<HTMLElement>(null);
  const pointer = useRef({ x: 0, y: 0 });
  // False until hydrated, so server and client markup match.
  const reduce = useReducedMotionSafe();
  const [active, setActive] = useState(true);
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const [step, setStep] = useState(0);
  const [colors, setColors] = useState({ ink: "#1C1C1A", accent: "#B45A2E", face: "#FFFFFF", plate: "#E6E1D6" });
  const { scrollYProgress } = useScroll({ target: band, offset: ["start start", "end end"] });
  const n = Math.max(1, steps.length);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const i = Math.min(n - 1, Math.max(0, Math.floor(p * n + 0.0001)));
    setStep((s) => (s === i ? s : i));
  });

  useEffect(() => {
    const cs = getComputedStyle(band.current!);
    const v = (k: string, d: string) => cs.getPropertyValue(k).trim() || d;
    setColors({ ink: v("--t-ink", "#1C1C1A"), accent: v("--t-accent", "#B45A2E"), face: v("--t-surface", "#FFFFFF"), plate: v("--t-soft2", "#E6E1D6") });
    setWebgl(() => { try { const c = document.createElement("canvas"); return !!(c.getContext("webgl2") || c.getContext("webgl")); } catch { return false; } });
    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), { rootMargin: "200px" });
    io.observe(band.current!);
    return () => io.disconnect();
  }, []);

  const current = steps[step];
  const pinned = !reduce && steps.length > 0;

  return (
    <section
      ref={band}
      id="model"
      aria-label={label}
      className="relative bg-soft"
      style={pinned ? { height: `${Math.max(2, n) * 100}svh` } : undefined}
      onPointerMove={(e) => { const r = band.current!.getBoundingClientRect(); pointer.current = { x: ((e.clientX - r.left) / r.width - 0.5) * 0.5, y: ((e.clientY - r.top) / r.height - 0.5) * 0.2 }; }}
      onPointerLeave={() => { pointer.current = { x: 0, y: 0 }; }}
    >
      <div className={`${pinned ? "sticky top-0 h-svh" : "py-20"} overflow-hidden`}>
        <Watermark text={watermark} onLight center />
        <div className={`relative z-[1] mx-auto grid h-full w-full max-w-[1360px] grid-rows-[auto_1fr] gap-6 px-5 pt-[88px] pb-8 sm:px-8 lg:grid-cols-[5fr_7fr] lg:grid-rows-1 lg:gap-12 lg:pt-[104px] ${reduce ? "lg:items-start" : "lg:items-center"}`}>
          {/* Chapters */}
          <div className="order-2 grid content-center gap-6 lg:order-1">
            {title && <h2 className="font-display text-[30px] font-medium leading-[1.12] sm:text-[40px] lg:text-[52px] text-balance">{title}</h2>}

            {steps.length > 0 && (
              <ol className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Chapters">
                {steps.map((s, i) => (
                  <li key={s.label} className={`flex items-center gap-2 text-[12px] font-medium uppercase tracking-[.12em] transition-colors ${i === step || reduce ? "text-ink" : "text-mute"}`}>
                    <span className={`h-1.5 w-1.5 rounded-full transition-colors ${i === step || reduce ? "bg-accent" : "bg-hairline-strong"}`} aria-hidden="true" />
                    <span className="tabular-nums">0{i + 1}</span> {s.label}
                  </li>
                ))}
              </ol>
            )}

            {reduce ? (
              <div className="grid gap-6">
                {steps.map((s) => <Chapter key={s.label} s={s} />)}
              </div>
            ) : (
              <div className="relative min-h-[170px]">
                {/* Keyed so each chapter re-enters with the CSS keyframe; no exit animation to stall. */}
                {current && <div key={current.label} className="chapter-in"><Chapter s={current} /></div>}
              </div>
            )}

          </div>

          {/* Model */}
          <div className={`order-1 relative h-[36svh] min-h-[240px] lg:order-2 lg:h-[min(68svh,640px)] ${reduce ? "lg:sticky lg:top-24" : ""}`} role="img" aria-label={label}>
            {webgl && <MassingModel colors={colors} progress={scrollYProgress} pointer={pointer} active={active} url={url} mtl={mtl} materials={materials} />}
            {webgl === false && <div className="flex h-full items-center justify-center text-[14px] text-mute">3D model needs WebGL, which this browser has disabled.</div>}
            {caption && <p className="absolute inset-x-0 bottom-0 text-center text-[13px] text-body">{caption}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

function Chapter({ s }: { s: NonNullable<Props["steps"]>[number] }) {
  return (
    <div className="grid gap-4">
      <h3 className="font-display text-[24px] font-medium leading-tight sm:text-[28px]">{s.title}</h3>
      {s.text && <p className="max-w-[46ch] text-[16px] leading-[1.65] text-body sm:text-[17px]">{s.text}</p>}
      {s.facts && s.facts.length > 0 && (
        <dl className="grid grid-cols-2 gap-5 border-t border-hairline pt-5 sm:max-w-[460px]">
          {s.facts.map((f) => (
            <div key={f.k} className="grid gap-0.5">
              <dt className="text-[12px] font-medium uppercase tracking-[.12em] text-mute">{f.k}</dt>
              <dd className="font-display text-[22px] font-medium leading-tight tabular-nums sm:text-[26px]">{f.v}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
