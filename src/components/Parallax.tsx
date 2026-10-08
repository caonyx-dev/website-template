"use client";
// Moves (and optionally rotates) its children as the band scrolls through the viewport. Transform only.
import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useReducedMotionSafe } from "./Reveal";

export default function Parallax({ children, speed = 0.2, rotate = 0, className = "" }: { children: ReactNode; speed?: number; rotate?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 160, -speed * 160]);
  const r = useTransform(scrollYProgress, [0, 1], [-rotate, rotate]);
  return <motion.div ref={ref} className={`will-change-transform ${className}`} style={reduce ? undefined : { y, rotate: r }}>{children}</motion.div>;
}
