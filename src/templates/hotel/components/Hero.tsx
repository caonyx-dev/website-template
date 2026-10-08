"use client";
// Hero like the reference: two full-bleed photographs crossfading on a slow timer, each with its copy inside a
// tall arch-topped frosted panel at the left: five gold stars, the Marcellus headline, a lead and the navy
// button. Arrows, a pause control and a "1 / 2" counter at the right. The rotation stops on hover, on focus
// inside the hero and whenever the visitor pauses or steps through it; announcements start only once the
// visitor takes over, so a screen reader is not interrupted every seven seconds. Fades only.
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CaretLeftIcon, CaretRightIcon, PauseIcon, PlayIcon, StarIcon } from "@phosphor-icons/react";
import { useReducedMotionSafe } from "@/components/Reveal";
import type { HotelContent } from "../content";
import { Btn, Container } from "./ui";

export default function Hero({ h }: { h: HotelContent["hero"] }) {
  const reduce = useReducedMotionSafe();
  const [i, setI] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [stopped, setStopped] = useState(false);
  const [manual, setManual] = useState(false);
  const n = h.slides.length;
  const running = !reduce && !stopped && !hovered && !focused;
  useEffect(() => { if (!running) return; const t = setInterval(() => setI((k) => (k + 1) % n), 7000); return () => clearInterval(t); }, [running, n]);
  const s = h.slides[i];
  const go = (d: number) => { setManual(true); setI((k) => (k + d + n) % n); };
  const ctrl = "inline-flex h-11 w-11 items-center justify-center text-on-dark hover:text-accent";
  return (
    <section id="top" className="relative flex min-h-[720px] items-center overflow-hidden bg-dark text-on-dark lg:min-h-[860px]" aria-roledescription="carousel" aria-label="Welcome" onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>
      <div className="hotel-fade absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div key={i} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduce ? 0 : 1.6, ease: "easeInOut" }}>
            <Image src={s.image.src} alt={s.image.alt} fill priority={i === 0} placeholder="blur" sizes="100vw" className="object-cover" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-ink/35" aria-hidden="true" />
      </div>
      <Container className="relative z-[1] py-28 lg:py-36">
        <div className="hotel-up relative max-w-[560px] rounded-t-[999px] border border-accent/40 bg-dark/35 px-8 pb-12 pt-32 text-center backdrop-blur-md sm:px-14 sm:pt-40" aria-live={manual ? "polite" : "off"}>
          <span className="flex justify-center gap-1.5 text-accent" aria-hidden="true">{Array.from({ length: h.stars }).map((_, k) => <StarIcon key={k} size={14} weight="fill" />)}</span>
          <span className="sr-only">{h.stars} stars</span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduce ? 0 : 0.9 }}>
              <h1 className="mt-6 font-display text-[40px] leading-[1.12] text-on-dark sm:text-[52px] lg:text-[60px] text-balance">{s.title}</h1>
              <p className="mt-6 text-[17px] font-light leading-[1.65] text-(--t-body-muted)">{s.text}</p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-9"><Btn href={h.cta.href}>{h.cta.label}</Btn></div>
        </div>
      </Container>
      <div className="absolute bottom-8 right-6 z-[1] flex items-center gap-3 font-display text-[18px] sm:bottom-10 sm:right-10">
        {!reduce && <button type="button" onClick={() => { setStopped((v) => !v); setManual(true); }} aria-pressed={stopped} className={ctrl} aria-label={stopped ? "Play the slideshow" : "Pause the slideshow"}>{stopped ? <PlayIcon size={18} weight="fill" aria-hidden="true" /> : <PauseIcon size={18} weight="fill" aria-hidden="true" />}</button>}
        <button type="button" onClick={() => go(-1)} aria-label="Previous slide" className={ctrl}><CaretLeftIcon size={22} weight="light" aria-hidden="true" /></button>
        <span className="tabular-nums">{i + 1} <span className="text-(--t-body-muted)">/ {n}</span></span>
        <button type="button" onClick={() => go(1)} aria-label="Next slide" className={ctrl}><CaretRightIcon size={22} weight="light" aria-hidden="true" /></button>
      </div>
    </section>
  );
}
