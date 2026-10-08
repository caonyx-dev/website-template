"use client";
// Numbers: a full-bleed portrait on the left third, headline and three oversized figures with a line of
// text each, "Numbers" as a vertical watermark. Figures count up when real; placeholders stay as written.
import Image from "next/image";
import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { useReducedMotionSafe } from "@/components/Reveal";
import type { CorporateContent } from "../content";
import { H2, Watermark } from "./ui";

function Big({ v, reduce }: { v: string; reduce: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const m = v.match(/^(\d+)(.*)$/);
  useEffect(() => {
    if (!m || reduce || !ref.current) return;
    const el = ref.current, target = Number(m[1]), suffix = m[2];
    const io = new IntersectionObserver(([e]) => { if (!e.isIntersecting) return; io.disconnect(); const o = { n: 0 }; animate(o, { n: target, duration: 1600, ease: "outExpo", onUpdate: () => { el.textContent = Math.round(o.n) + suffix; } }); }, { threshold: 0.5 });
    io.observe(el); return () => io.disconnect();
  }, [m, reduce]);
  return <span ref={ref} className="font-display text-[88px] font-semibold leading-none tracking-[-0.04em] text-ink tabular-nums sm:text-[120px] lg:text-[150px]">{v}</span>;
}

export default function Numbers({ n }: { n: CorporateContent["numbers"] }) {
  const reduce = useReducedMotionSafe();
  return (
    <section className="relative overflow-hidden" aria-labelledby="numbers-title">
      <div className="grid lg:grid-cols-[1fr_2fr]">
        <div className="relative min-h-[420px] lg:min-h-[900px]"><Image src={n.image.src} alt={n.image.alt} fill placeholder="blur" sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" /></div>
        <div className="relative px-6 py-16 lg:px-28 lg:py-24">
          <Watermark side="right">{n.watermark}</Watermark>
          <H2 id="numbers-title" className="max-w-[560px]">{n.title}</H2>
          <dl className="mt-14 grid gap-12 lg:mt-20 lg:gap-16">
            {n.items.map((it) => (
              <div key={it.text} className="grid items-center gap-6 sm:grid-cols-[auto_1fr] sm:gap-12"><dt className="sr-only">Figure</dt><dd className="m-0"><Big v={it.big} reduce={reduce} /></dd><dd className="m-0 max-w-[380px] text-[16px] font-medium leading-[1.6] text-ink">{it.text}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
