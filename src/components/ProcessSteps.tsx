"use client";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animate, stagger } from "animejs";

gsap.registerPlugin(ScrollTrigger);

export type Step = { n: string; title: string; text: string; image: { src: StaticImageData; alt: string } };

/** Four staggered cards over a faint blueprint. The cards shift against each other as you scroll (GSAP);
 *  the ghost numerals rise in with anime.js the first time the list is seen. */
export default function ProcessSteps({ steps, blueprint }: { steps: Step[]; blueprint: string }) {
  const root = useRef<HTMLOListElement>(null);
  const bp = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".step", root.current!);
      if (matchMedia("(min-width: 1024px)").matches) {
        cards.forEach((s, i) => gsap.to(s, { y: -i * 36, ease: "none", scrollTrigger: { trigger: root.current, start: "top 80%", end: "bottom 30%", scrub: .6 } }));
      }
      gsap.fromTo(bp.current, { yPercent: -8 }, { yPercent: 8, ease: "none", scrollTrigger: { trigger: root.current!.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
      const ghosts = root.current!.querySelectorAll<HTMLElement>(".ghost");
      ghosts.forEach((g) => { g.style.transform = "translateY(40px)"; g.style.opacity = "0"; });
      const io = new IntersectionObserver(([e]) => {
        if (!e.isIntersecting) return;
        animate(ghosts, { translateY: [40, 0], opacity: [0, 1], duration: 900, delay: stagger(120), ease: "outExpo" });
        io.disconnect();
      }, { threshold: 0.2 });
      io.observe(root.current!);
      return () => io.disconnect();
    });
    return () => mm.revert();
  }, []);

  return (
    <div className="relative">
      <div ref={bp} aria-hidden="true" className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[.07] invert grayscale mix-blend-multiply" style={{ backgroundImage: `url(${blueprint})` }} />
      <ol ref={root} className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
        {steps.map((s, i) => (
          <li key={s.n} className="step relative isolate grid gap-3.5 overflow-hidden rounded-lg border-2 border-card bg-surface p-5 pb-7 shadow-soft" style={{ marginTop: `var(--step-${i}, 0px)` }}>
            <div className="aspect-[4/3] overflow-hidden rounded-md"><Image src={s.image.src} alt={s.image.alt} placeholder="blur" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="h-full w-full object-cover" /></div>
            <h3 className="font-display text-[20px] font-medium leading-tight"><span className="mr-1.5 text-accent tabular-nums">{s.n}.</span>{s.title}</h3>
            <p className="relative text-[14px] leading-[1.55] text-body">{s.text}</p>
            <span className="ghost pointer-events-none absolute -bottom-3.5 right-3 -z-10 font-display text-[88px] font-medium leading-none tracking-[-0.02em] text-soft tabular-nums" aria-hidden="true">{s.n}</span>
          </li>
        ))}
      </ol>
      <style>{`@media (min-width:1024px){ .step:nth-child(2){--step-1:48px} .step:nth-child(3){--step-2:96px} .step:nth-child(4){--step-3:144px} }`}</style>
    </div>
  );
}
