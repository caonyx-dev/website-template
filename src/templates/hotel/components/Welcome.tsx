"use client";
// The Carmelina welcome section: a tall section pins the centred eyebrow, the uppercase Marcellus statement, the
// paragraph and the button in the viewport. As the page scrolls the statement's words brighten from faint to
// full, one after another, and then two offset columns of photographs scroll up over the pinned text and carry
// the page on. Reduced motion shows every word at full strength; the photographs still scroll in normal flow.
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useReducedMotionSafe } from "@/components/Reveal";
import type { HotelContent } from "../content";
import { Btn, Container, Eyebrow } from "./ui";

function Word({ word, progress, from, to, reduce }: { word: string; progress: MotionValue<number>; from: number; to: number; reduce: boolean }) {
  const opacity = useTransform(progress, [from, to], [0.22, 1]);
  return <motion.span className="inline-block" style={reduce ? undefined : { opacity }}>{word}&nbsp;</motion.span>;
}

// Two offset columns that scroll up over the pinned statement. Phones use wider, alternating placements.
const SLOTS = [
  { top: 108, left: "0%", w: "31%", ar: "3 / 4", tm: 104, lm: "0%", wm: "62%" },
  { top: 124, left: "62%", w: "38%", ar: "3 / 4", tm: 134, lm: "34%", wm: "66%" },
  { top: 158, left: "8%", w: "46%", ar: "3 / 2", tm: 168, lm: "4%", wm: "72%" },
  { top: 182, left: "60%", w: "40%", ar: "3 / 4", tm: 196, lm: "28%", wm: "70%" },
  { top: 214, left: "2%", w: "34%", ar: "3 / 4", tm: 228, lm: "8%", wm: "64%" },
];

export default function Welcome({ w }: { w: HotelContent["welcome"] }) {
  const reduce = useReducedMotionSafe();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const words = w.statement.split(" ");
  return (
    <section ref={ref} id="about" className="relative scroll-mt-20 bg-canvas" style={{ height: "300vh" }} aria-labelledby="welcome-title">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <Container className="max-w-[1000px] text-center">
          <Eyebrow>{w.eyebrow}</Eyebrow>
          <h2 id="welcome-title" className="mt-8 font-display text-[26px] uppercase leading-[1.25] tracking-[.02em] text-ink sm:text-[36px] lg:text-[46px]">
            {words.map((word, k) => <Word key={k} word={word} progress={scrollYProgress} from={0.1 + (k / words.length) * 0.3} to={0.14 + (k / words.length) * 0.3} reduce={reduce} />)}
          </h2>
          <p className="mx-auto mt-8 max-w-[620px] text-[16px] font-light leading-[1.7] text-(--t-ink-80)">{w.text}</p>
          <div className="mt-9"><Btn href={w.cta.href}>{w.cta.label}</Btn></div>
        </Container>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full" aria-hidden="true">
        <div className="relative mx-auto h-full max-w-[1180px] px-5 sm:px-8">
          {w.images.map((img, k) => {
            const s = SLOTS[k % SLOTS.length];
            return <div key={k} className="hotel-slot overflow-hidden" style={{ "--top": `${s.top}vh`, "--left": s.left, "--w": s.w, "--ar": s.ar, "--tm": `${s.tm}vh`, "--lm": s.lm, "--wm": s.wm } as React.CSSProperties}><Image src={img.src} alt="" fill placeholder="blur" sizes="(min-width: 768px) 42vw, 70vw" className="object-cover" /></div>;
          })}
        </div>
      </div>
    </section>
  );
}
