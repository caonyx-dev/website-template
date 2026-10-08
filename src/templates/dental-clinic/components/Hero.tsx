"use client";
// Hero: a full-bleed clinic photograph under a navy multiply overlay, wiped in from the left on load while
// the two headline lines rise through masks; the second line then cycles through three promises (Motion
// AnimatePresence; it pauses under the pointer and rests after two cycles). The photograph drifts with scroll (Parallax), the teal button is magnetic and the play
// button opens a dialog with the video placeholder (nothing autoplays).
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PlayIcon, XIcon } from "@phosphor-icons/react";
import { useReducedMotionSafe } from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import Parallax from "@/components/Parallax";
import type { DentalContent } from "../content";
import { Btn, Container } from "./ui";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero({ h }: { h: DentalContent["hero"] }) {
  const reduce = useReducedMotionSafe();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const ticks = useRef(0);
  const dialog = useRef<HTMLDialogElement>(null);
  // Cycles through the promises twice, pausing under the pointer, then rests on the first one.
  useEffect(() => {
    if (reduce || paused || ticks.current >= h.rotating.length * 2) return;
    const t = setInterval(() => { ticks.current += 1; setI((n) => (n + 1) % h.rotating.length); if (ticks.current >= h.rotating.length * 2) clearInterval(t); }, 3200);
    return () => clearInterval(t);
  }, [reduce, paused, h.rotating.length]);

  return (
    <section id="top" className="relative flex min-h-[640px] items-center overflow-hidden bg-dark text-white lg:min-h-[720px]" aria-labelledby="hero-title" onPointerEnter={() => setPaused(true)} onPointerLeave={() => setPaused(false)}>
      <div className={`absolute inset-0 dent-curtain`}>
        <Parallax speed={0.3} className="absolute inset-x-0 -inset-y-[12%]">
          <Image src={h.image.src} alt={h.image.alt} fill priority placeholder="blur" sizes="100vw" className="settle object-cover object-[70%_center]" />
        </Parallax>
        <div className="absolute inset-0 bg-dark/75 mix-blend-multiply" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/70 via-dark/20 to-transparent" aria-hidden="true" />
      </div>
      <Container className="relative z-[1] py-28 lg:py-32">
        <h1 id="hero-title" className="font-display text-[clamp(40px,5.6vw,64px)] font-medium leading-[1.12]">
          <span className="sr-only">{h.fixed} {h.rotating[0]}</span>
          <span className="block overflow-hidden pb-[.08em]" aria-hidden="true"><span className={`block dent-line`}>{h.fixed}</span></span>
          <span className="block overflow-hidden pb-[.08em]" aria-hidden="true">
            <span className={`relative block dent-line`} style={{ animationDelay: ".12s" }}>
              {reduce ? <span className="block">{h.rotating[0]}</span> : (
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span key={i} className="block" initial={{ y: "110%" }} animate={{ y: "0%" }} exit={{ y: "-110%" }} transition={{ duration: 0.55, ease: EASE }}>{h.rotating[i]}</motion.span>
                </AnimatePresence>
              )}
            </span>
          </span>
        </h1>
        <p className={`mt-7 max-w-[540px] text-[17px] leading-[1.7] text-white/80 sm:text-[18px] dent-rise`} style={{ animationDelay: ".5s" }}>{h.lead}</p>
        <div className={`mt-12 flex flex-wrap items-center gap-8 dent-rise`} style={{ animationDelay: ".65s" }}>
          <Magnetic strength={0.3}><Btn href={h.primary.href}>{h.primary.label}</Btn></Magnetic>
          <button type="button" onClick={() => dialog.current?.showModal()} className="group inline-flex items-center gap-4 font-display text-[13px] font-bold uppercase tracking-[.1em] text-white">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/70 transition-colors group-hover:bg-white group-hover:text-ink"><PlayIcon size={14} weight="fill" aria-hidden="true" /></span>
            {h.video.label}
          </button>
        </div>
      </Container>
      <dialog ref={dialog} aria-label={h.video.title} className="m-auto w-[min(92vw,960px)] bg-dark p-0 text-white shadow-lift backdrop:bg-ink/80">
        <div className="flex items-center justify-between gap-4 px-6 py-4">
          <h2 className="font-display text-[18px] font-bold">{h.video.title}</h2>
          <button type="button" onClick={() => dialog.current?.close()} aria-label="Close video" className="inline-flex h-10 w-10 items-center justify-center text-white"><XIcon size={22} aria-hidden="true" /></button>
        </div>
        <div className="grid aspect-video place-items-center bg-black/40 text-[15px] text-white/60">[Clinic video]</div>
        <p className="px-6 py-4 text-[14px] text-on-dark-muted">{h.video.note}</p>
      </dialog>
    </section>
  );
}
