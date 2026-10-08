"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import { useReducedMotion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Bridge() {
  // Keep ScrollTrigger in step with Lenis.
  useLenis(() => ScrollTrigger.update());
  useEffect(() => { ScrollTrigger.refresh(); }, []);
  return null;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <ReactLenis root options={{ lerp: 0.09, anchors: { offset: -96 } }}>
      <Bridge />
      {children}
    </ReactLenis>
  );
}
