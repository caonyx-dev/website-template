"use client";
// A button that leans towards the pointer and springs back when it leaves. Wrap a single control.
import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useReducedMotionSafe } from "./Reveal";

export default function Magnetic({ children, strength = 0.35, className = "", style }: { children: ReactNode; strength?: number; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18 }), sy = useSpring(y, { stiffness: 220, damping: 18 });
  const move = (e: React.PointerEvent) => { if (reduce || e.pointerType !== "mouse") return; const r = ref.current!.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * strength); y.set((e.clientY - r.top - r.height / 2) * strength); };
  return <motion.div ref={ref} className={`inline-block ${className}`} style={{ ...style, x: sx, y: sy }} onPointerMove={move} onPointerLeave={() => { x.set(0); y.set(0); }}>{children}</motion.div>;
}
