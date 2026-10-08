"use client";
// Hero: a full-screen photograph on black that scales up gently with scroll (GSAP ScrollTrigger); at the
// bottom-left an asterisk mark, the intro line with its lime word and the studio name at 160px with the
// lime arrow pill beside it. The name's letters rise through a mask on load.
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AsteriskIcon } from "@phosphor-icons/react";
import type { StudioContent } from "../content";
import Magnetic from "@/components/Magnetic";
import { Container, Pill } from "./ui";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ h }: { h: StudioContent["hero"] }) {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.to(root.current!.querySelector(".hero-img"), { scale: 1.18, ease: "none", scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true } });
    });
    return () => mm.revert();
  }, []);
  return (
    <section ref={root} id="top" className="relative flex min-h-svh items-end overflow-hidden bg-black text-white" aria-labelledby="hero-title">
      <div className="hero-img absolute inset-0 will-change-transform"><Image src={h.image.src} alt={h.image.alt} fill priority placeholder="blur" sizes="100vw" className="settle object-cover object-[60%_30%]" /></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" aria-hidden="true" />
      <Container className="relative z-[1] pb-10 pt-40">
        <div className={`flex max-w-[520px] items-start gap-6 studio-rise`}><AsteriskIcon size={44} weight="bold" className="shrink-0 text-primary" aria-hidden="true" /><p className="text-[18px] leading-[1.6] text-white/80">{h.intro}</p></div>
        <div className="mt-6 flex flex-wrap items-center gap-6">
          <h1 id="hero-title" className="font-display text-[clamp(72px,11vw,160px)] font-bold leading-[.95] tracking-[-0.03em]">
            {h.name.split("").map((ch, i) => <span key={i} className="inline-block overflow-hidden align-bottom"><span className={`inline-block studio-letter`} style={{ animationDelay: `${0.2 + i * 0.05}s` }}>{ch === " " ? " " : ch}</span></span>)}
          </h1>
          <Magnetic strength={0.3} className={"studio-rise"}><Pill href={h.href} className="pl-7"><span className="sr-only">Explore the studio</span></Pill></Magnetic>
        </div>
      </Container>
    </section>
  );
}
