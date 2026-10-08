"use client";
// Custom cursor like the reference: a small grey dot sits on the pointer and a thin volt ring follows it on a
// spring, swelling over links and buttons and shrinking while the mouse button is down. Mouse only: touch
// devices, keyboard users and reduced motion keep the native cursor (the native cursor is hidden only once
// the custom one is live).
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useReducedMotionSafe } from "@/components/Reveal";

export default function Cursor() {
  const reduce = useReducedMotionSafe();
  const [on, setOn] = useState(false);
  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 160, damping: 22, mass: 0.5 }), ry = useSpring(y, { stiffness: 160, damping: 22, mass: 0.5 });
  useEffect(() => {
    if (reduce || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const move = (e: PointerEvent) => { if (e.pointerType !== "mouse") return; x.set(e.clientX); y.set(e.clientY); setOn(true); setHover(!!(e.target as Element | null)?.closest?.("a, button, [role=button], input, select, textarea, label")); };
    const leave = () => setOn(false);
    const press = () => setDown(true), release = () => setDown(false);
    window.addEventListener("pointermove", move, { passive: true }); document.documentElement.addEventListener("mouseleave", leave);
    window.addEventListener("pointerdown", press); window.addEventListener("pointerup", release);
    return () => { window.removeEventListener("pointermove", move); document.documentElement.removeEventListener("mouseleave", leave); window.removeEventListener("pointerdown", press); window.removeEventListener("pointerup", release); };
  }, [reduce, x, y]);
  useEffect(() => { document.documentElement.classList.toggle("gym-cursor", on); return () => document.documentElement.classList.remove("gym-cursor"); }, [on]);
  if (reduce) return null;
  return (
    <div aria-hidden="true" className={`pointer-events-none fixed inset-0 z-[60] transition-opacity duration-200 ${on ? "opacity-100" : "opacity-0"}`}>
      <motion.span className="absolute left-0 top-0 h-16 w-16 rounded-full border-[1.5px] border-primary" style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%", scale: down ? 0.7 : hover ? 1.35 : 1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} />
      <motion.span className="absolute left-0 top-0 h-5 w-5 rounded-full bg-(--t-stone)" style={{ x, y, translateX: "-50%", translateY: "-50%" }} />
    </div>
  );
}
