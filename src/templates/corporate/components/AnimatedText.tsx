"use client";
// Word-by-word reveal exactly as the reference does it: each word starts blurred, 10px low and
// transparent, and animates in with the Web Animations API once the heading is in view. Reduced
// motion shows the text at rest. Content is complete in the server HTML; start states are set on the client.
import { useEffect, useRef } from "react";

export default function AnimatedText({ children, duration = 0.7, delay = 0.1, stagger = 0.06 }: { children: string; duration?: number; delay?: number; stagger?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const words = Array.from(el.querySelectorAll<HTMLElement>("[data-word]"));
    words.forEach((w) => { w.style.opacity = "0"; w.style.transform = "translateY(10px)"; w.style.filter = "blur(10px)"; });
    let done = false;
    const run = () => {
      if (done) return; done = true;
      words.forEach((w, i) => {
        const a = w.animate([{ opacity: 0, transform: "translateY(10px)", filter: "blur(10px)" }, { opacity: 1, transform: "translateY(0)", filter: "blur(0)" }], { duration: duration * 1000, delay: (delay + i * stagger) * 1000, easing: "cubic-bezier(.16,1,.3,1)", fill: "forwards" });
        a.onfinish = () => { w.style.opacity = ""; w.style.transform = ""; w.style.filter = ""; };
      });
    };
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { run(); io.disconnect(); } }, { threshold: 0.2 });
    io.observe(el);
    const t = setTimeout(run, 3500); // never leave words hidden
    return () => { io.disconnect(); clearTimeout(t); };
  }, [duration, delay, stagger]);
  return (
    <span ref={ref}>
      {children.split(/\s+/).map((w, i) => <span key={i}><span data-word className="inline-block will-change-[opacity,transform,filter]">{w}</span>{" "}</span>)}
    </span>
  );
}
