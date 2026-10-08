"use client";
// 01 Stats: a large outlined asterisk drawing behind the left column, headline and text right, three
// figures with top rules that count up when real (anime.js), and the "Who we are" pill.
import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { Reveal, useReducedMotionSafe } from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import type { StudioContent } from "../content";
import { Container, Pill, SectionHead } from "./ui";

function Big({ v, reduce }: { v: string; reduce: boolean }) {
  const ref = useRef<HTMLSpanElement>(null); const m = v.match(/^(\d+)(.*)$/);
  useEffect(() => { if (!m || reduce || !ref.current) return; const el = ref.current, t = Number(m[1]), sfx = m[2]; const io = new IntersectionObserver(([e]) => { if (!e.isIntersecting) return; io.disconnect(); const o = { n: 0 }; animate(o, { n: t, duration: 1400, ease: "outExpo", onUpdate: () => { el.textContent = Math.round(o.n) + sfx; } }); }, { threshold: 0.5 }); io.observe(el); return () => io.disconnect(); }, [m, reduce]);
  return <span ref={ref} className="font-display text-[56px] font-bold leading-none tracking-[-2px] text-ink tabular-nums sm:text-[64px]">{v}</span>;
}

export default function Stats({ st }: { st: StudioContent["stats"] }) {
  const reduce = useReducedMotionSafe();
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32" aria-labelledby="stats-title">
      <Parallax rotate={40} speed={0} className="pointer-events-none absolute -left-10 top-1/2 hidden h-[560px] w-[560px] -translate-y-1/3 lg:block"><svg className="h-full w-full text-hairline" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth=".6" aria-hidden="true">{[0, 60, 120].map((r) => <rect key={r} x="44" y="2" width="12" height="96" rx="3" transform={`rotate(${r} 50 50)`} />)}</svg></Parallax>
      <Container className="relative">
        <SectionHead n={st.n} label={st.label} title={st.title} text={st.text} id="stats-title" />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-10"><span className="hidden lg:block" aria-hidden="true" />
          <div className="grid gap-10">
            <dl className="mt-4 grid gap-8 sm:grid-cols-3">{st.items.map((it, i) => <Reveal key={it.text} delay={i * 0.12} className="grid gap-4 border-t border-hairline pt-6"><dt className="sr-only">Figure</dt><dd className="m-0"><Big v={it.big} reduce={reduce} /></dd><dd className="m-0 text-[16px] leading-[1.5] text-body">{it.text}</dd></Reveal>)}</dl>
            <Reveal delay={0.4}><Pill href={st.cta.href} className="w-max">{st.cta.label}</Pill></Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
