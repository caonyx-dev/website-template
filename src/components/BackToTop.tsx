"use client";
// Appears once the hero (#top) has scrolled away; hidden until then.
import { useEffect, useState, type ReactNode } from "react";

export default function BackToTop({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("top"); if (!hero) return;
    const io = new IntersectionObserver(([e]) => setShow(!e.isIntersecting)); io.observe(hero); return () => io.disconnect();
  }, []);
  return <a href="#top" aria-label="Back to top" className={`${className} transition-[opacity,transform] duration-300 ${show ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}>{children}</a>;
}
