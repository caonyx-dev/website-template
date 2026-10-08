"use client";
// hero-band: full-bleed site photograph under a 60% graphite overlay with the stamped headline,
// lead and buttons; hazard band along the bottom edge. The quote form lives in the quote band.
// Signature moment (the builder's, not the architect's): each headline line stamps down from
// 1.15 scale with a slight tilt, the quote card slides up, the hazard band draws in from the left.
// After load the photograph has scroll parallax. Reduced motion renders everything at rest.
import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { useReducedMotionSafe } from "@/components/Reveal";
import type { ConstructionContent } from "../content";
import { Btn, Container } from "./ui";

const STAMP = { type: "spring", stiffness: 420, damping: 26, mass: 0.9 } as const;
const EASE = [0.16, 1, 0.3, 1] as const;

/** One headline line stamped down into place. */
function Stamp({ i, reduce, children }: { i: number; reduce: boolean; children: ReactNode }) {
  if (reduce) return <span className="block">{children}</span>;
  return <motion.span className="block origin-left" initial={{ opacity: 0, scale: 1.15, rotate: -1.5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ ...STAMP, delay: 0.15 + i * 0.16 }}>{children}</motion.span>;
}
/** Lead and buttons fade up after the headline. */
function Bit({ delay, reduce, className = "", children }: { delay: number; reduce: boolean; className?: string; children: ReactNode }) {
  if (reduce) return <div className={className}>{children}</div>;
  return <motion.div className={className} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: EASE, delay }}>{children}</motion.div>;
}

export default function HeroBand({ h }: { h: ConstructionContent["hero"] }) {
  const root = useRef<HTMLElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({ target: root, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "14%"]);

  return (
    <section ref={root} id="top" className="relative overflow-hidden bg-dark text-on-dark" aria-labelledby="hero-title">
      <motion.div className="absolute inset-0 will-change-transform" style={{ y }}>
        <Image src={h.image.src} alt={h.image.alt} fill priority placeholder="blur" sizes="100vw" className="object-cover" style={{ objectPosition: h.image.position ?? "50% 50%" }} />
      </motion.div>
      <div className="absolute inset-0 bg-dark/60" aria-hidden="true" />
      <Container className="relative z-[1] grid min-h-[72svh] items-end py-20 lg:py-28">
        <div className="grid justify-items-start gap-6">
          <h1 id="hero-title" className="font-display text-[52px] font-bold leading-[.96] sm:text-[72px] lg:text-[104px]">
            {h.lines.map((l, i) => <Stamp key={i} i={i} reduce={reduce}>{l}</Stamp>)}
          </h1>
          <Bit delay={0.55} reduce={reduce}><p className="max-w-[52ch] text-[17px] leading-[1.55] text-on-dark-muted sm:text-[19px]">{h.lead}</p></Bit>
          <Bit delay={0.65} reduce={reduce} className="flex flex-wrap gap-3">
            <Btn href={h.primary.href}>{h.primary.label} <ArrowRightIcon size={18} weight="light" aria-hidden="true" /></Btn>
            <Btn href={h.secondary.href} variant="secondary-dark">{h.secondary.label}</Btn>
          </Bit>
        </div>
      </Container>
      {/* hazard-band: the one pattern in the system, once per page */}
      <motion.div
        className="relative z-[1] h-3 origin-left bg-[repeating-linear-gradient(45deg,var(--t-accent)_0_12px,var(--t-dark)_12px_24px)]"
        aria-hidden="true"
        initial={reduce ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
      />
    </section>
  );
}
