"use client";
// Full-bleed photographic hero like the reference: the photograph wipes down and settles from a zoom under a
// green-black overlay while the tracked eyebrow, the two centred headline lines and the lime button rise.
// The photograph drifts with scroll afterwards. Reduced motion renders everything at rest.
import Image from "next/image";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";
import Parallax from "@/components/Parallax";
import type { FinanceContent } from "../content";
import { Btn, Container } from "./ui";

export default function Hero({ h }: { h: FinanceContent["hero"] }) {
  return (
    <section id="top" className="relative flex min-h-[640px] items-center overflow-hidden bg-dark pt-[70px] text-white lg:min-h-[860px] lg:pt-[140px]" aria-labelledby="hero-title">
      <div className="fin-curtain absolute inset-0">
        <Parallax speed={0.3} className="absolute inset-x-0 -inset-y-[12%]"><Image src={h.image.src} alt={h.image.alt} fill priority placeholder="blur" sizes="100vw" className="settle object-cover object-[50%_20%]" /></Parallax>
        <div className="absolute inset-0 bg-dark/55" aria-hidden="true" />
      </div>
      <Container className="relative z-[1] py-24 text-center">
        <p className="fin-rise font-display text-[13px] font-bold uppercase tracking-[.2em] text-white/90" style={{ animationDelay: ".3s" }}>{h.eyebrow}</p>
        <h1 id="hero-title" className="mx-auto mt-5 max-w-[14ch] font-display text-[44px] font-bold leading-[1.02] sm:text-[64px] lg:text-[80px]">
          {h.title.map((line, i) => <span key={i} className="block overflow-hidden pb-[.06em]"><span className="fin-line block" style={{ animationDelay: `${0.35 + i * 0.12}s` }}>{line}</span></span>)}
        </h1>
        <div className="fin-rise mt-10 flex flex-col items-center gap-5" style={{ animationDelay: ".75s" }}>
          <Magnetic strength={0.3}><Btn href={h.cta.href} tone="lime">{h.cta.label}</Btn></Magnetic>
          <p className="text-[15px] text-white/80">{h.alt.text} <Link href={h.alt.link.href} className="font-medium text-white underline underline-offset-4 hover:text-accent">{h.alt.link.label}</Link></p>
        </div>
      </Container>
    </section>
  );
}
