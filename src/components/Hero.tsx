"use client";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownIcon } from "@phosphor-icons/react";
import { Eyebrow } from "./ui";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  image: { src: StaticImageData | string; alt: string; position?: string };
  eyebrow?: string;
  lines: ReactNode[];          // one entry per headline line; each may contain <Accent>
  lead?: string;
  actions: ReactNode;
  caption?: string;
  scrollTo: string;
  /** A 12px diagonal accent/dark hatch along the bottom edge (the builder's hazard band). */
  stripe?: boolean;
};

// Signature opening: curtain lifts, photograph settles, headline lines rise through masks,
// then eyebrow, lead, buttons and caption fade up. Afterwards the photo drifts with scroll.
export default function Hero({ image, eyebrow, lines, lead, actions, caption, scrollTo, stripe = false }: Props) {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const q = gsap.utils.selector(root);
      const curtain = q(".hero-curtain"), img = q(".hero-img"), ls = q(".mask-line > span"), bits = q(".hero-bit");
      gsap.set(curtain, { display: "block" });
      gsap.set(ls, { yPercent: 110 });
      gsap.set(bits, { opacity: 0, y: 18 });
      gsap.set(img, { scale: 1.18 });
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.to(curtain, { clipPath: "inset(0 0 100% 0)", duration: 1.1, ease: "expo.inOut", onComplete: () => gsap.set(curtain, { display: "none" }) }, 0.15)
        .to(img, { scale: 1, duration: 2.2, ease: "power2.out" }, 0.15)
        .to(ls, { yPercent: 0, duration: 1.1, stagger: 0.12 }, 0.7)
        .to(bits, { opacity: 1, y: 0, duration: .9, stagger: 0.08 }, 1.2);
      gsap.to(img, { yPercent: 12, ease: "none", scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true } });
      gsap.to(q(".hero-inner"), { yPercent: -10, opacity: 0.2, ease: "none", scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true } });
      // Safety: nothing stays hidden if the timeline is interrupted.
      const t = setTimeout(() => { gsap.set([ls, bits], { clearProps: "all" }); gsap.set(curtain, { display: "none" }); }, 3500);
      return () => clearTimeout(t);
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} id="top" className="hero relative grid min-h-svh items-end overflow-hidden bg-dark text-on-dark" aria-labelledby="hero-title">
      <div className="absolute inset-0">
        <Image src={image.src} alt={image.alt} fill priority placeholder={typeof image.src === "string" ? "empty" : "blur"} sizes="100vw" className="hero-img object-cover" style={{ objectPosition: image.position ?? "60% 60%" }} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,28,26,.42)_0%,rgba(28,28,26,.18)_40%,rgba(28,28,26,.72)_100%)]" aria-hidden="true" />
      </div>
      <div className="hero-curtain absolute inset-0 z-[3] hidden bg-canvas" aria-hidden="true" />
      <div className="hero-inner relative z-[2] mx-auto grid w-full max-w-[1360px] gap-7 px-5 pt-[136px] pb-10 sm:px-8 sm:pb-16 lg:max-w-[1360px]">
        {eyebrow && <div className="hero-bit"><Eyebrow onDark>{eyebrow}</Eyebrow></div>}
        <h1 id="hero-title" className="max-w-[980px] font-display text-[48px] font-medium leading-[1.04] sm:text-[72px] lg:text-[104px]">
          {lines.map((l, i) => <span key={i} className="mask-line"><span>{l}</span></span>)}
        </h1>
        {lead && <p className="hero-bit max-w-[52ch] text-[18px] leading-[1.6] text-on-dark-muted">{lead}</p>}
        <div className="hero-bit flex flex-wrap gap-3.5">{actions}</div>
      </div>
      <div className="hero-bit relative z-[2] mx-auto flex w-full max-w-[1360px] items-center justify-between gap-4 px-5 pb-6 sm:px-8 sm:pb-9">
        <p className="hidden text-[14px] text-on-dark-muted sm:block">{caption}</p>
        <a href={scrollTo} aria-label="Scroll to the next section" className="ml-auto inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-on-dark no-underline transition-colors hover:bg-surface hover:text-ink"><ArrowDownIcon size={22} weight="light" aria-hidden="true" /></a>
      </div>
      {stripe && <div className="absolute inset-x-0 bottom-0 z-[2] h-3 bg-[repeating-linear-gradient(-45deg,var(--t-accent)_0_16px,var(--t-dark)_16px_32px)]" aria-hidden="true" />}
    </section>
  );
}
