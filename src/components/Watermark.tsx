"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useReducedMotionSafe } from "./Reveal";

/** Giant ghost text behind a band; drifts sideways with scroll. Place inside a `relative overflow-hidden` parent. */
export default function Watermark({ text, onLight = false, center = false }: { text: string; onLight?: boolean; center?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe(); // false until hydrated, so the server transform matches
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      style={{ x: reduce ? 0 : x }}
      className={`pointer-events-none absolute select-none whitespace-nowrap font-display font-medium leading-none tracking-[-0.02em] text-[clamp(120px,22vw,320px)] ${onLight ? "text-ink/5" : "text-white/[.04]"} ${center ? "left-1/2 top-[10%] -translate-x-1/2" : "-left-[2%] -bottom-[.25em]"}`}
    >
      {text}
    </motion.div>
  );
}
