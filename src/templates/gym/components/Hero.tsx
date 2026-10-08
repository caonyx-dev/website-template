"use client";
// Hero: full-bleed black-and-white photograph rising and settling into place on load, two thin red slashes
// sliding in across the top-left (the DESIGN.md hazard band), the giant two-line headline slamming in letter
// by letter at the bottom-left and the member / trainer figures rising at the bottom-right. Afterwards the
// photograph tilts with the mouse pointer and drifts with scroll. Reduced motion renders everything at rest.
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useReducedMotionSafe } from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import type { GymContent } from "../content";
import { Container, Num } from "./ui";

export default function Hero({ h }: { h: GymContent["hero"] }) {
  const reduce = useReducedMotionSafe();
  const x = useMotionValue(0), y = useMotionValue(0);
  const tx = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), { stiffness: 60, damping: 20 });
  const ty = useSpring(useTransform(y, [-0.5, 0.5], [-10, 10]), { stiffness: 60, damping: 20 });
  const move = (e: React.PointerEvent<HTMLElement>) => { if (reduce || e.pointerType !== "mouse") return; const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left) / r.width - 0.5); y.set((e.clientY - r.top) / r.height - 0.5); };
  let k = 0;
  return (
    <section id="top" className="relative flex min-h-[640px] items-end overflow-hidden bg-canvas lg:min-h-[900px]" aria-labelledby="hero-title" onPointerMove={move} onPointerLeave={() => { x.set(0); y.set(0); }}>
      <div className="gym-photo absolute inset-0">
        <Parallax speed={0.25} className="absolute inset-x-0 -inset-y-[12%]">
          <motion.div className="absolute -inset-[3%]" style={reduce ? undefined : { x: tx, y: ty }}><Image src={h.image.src} alt={h.image.alt} fill priority placeholder="blur" sizes="100vw" className="object-cover object-[60%_20%] grayscale" /></motion.div>
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/20 to-canvas/40" aria-hidden="true" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute left-0 top-[18%] w-[46%] overflow-hidden lg:top-[20%]">
        <span className="gym-slash block h-2 w-full origin-left bg-gradient-to-r from-(--t-slash-start) to-(--t-slash-end) opacity-80" />
        <span className="gym-slash mt-3 block h-1 w-[70%] origin-left bg-gradient-to-r from-(--t-slash-start) to-(--t-slash-end) opacity-60" style={{ animationDelay: ".35s" }} />
      </div>
      <Container className="relative z-[1] flex flex-col gap-8 pb-12 pt-40 lg:flex-row lg:items-end lg:justify-between lg:pb-16">
        <h1 id="hero-title" className="font-display text-[clamp(72px,16vw,190px)] font-bold leading-[.86] text-ink">
          <span className="sr-only">{h.title.join(" ")}</span>
          {h.title.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-[.04em]" aria-hidden="true">
              {line.split("").map((ch, j) => { const d = 0.5 + (k++) * 0.05; return <span key={j} className="gym-letter" style={{ animationDelay: `${d}s` }}>{ch}</span>; })}
            </span>
          ))}
        </h1>
        <ul className="gym-rise flex gap-12 lg:pb-3" style={{ animationDelay: "1.1s" }}>
          {h.stats.map((s) => <li key={s.label}><Num className="block font-display text-[48px] font-bold leading-none text-ink">{s.value}</Num><span className="mt-1 block text-[15px] text-body">{s.label}</span></li>)}
        </ul>
      </Container>
    </section>
  );
}
