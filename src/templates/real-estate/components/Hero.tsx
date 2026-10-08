"use client";
// Hero signature moment (unique to this template): the photograph un-zooms from 1.14 while the two
// headline lines rise through masks, the hairline rule draws left-to-right, and the three glass cards
// deal in from below. Then on scroll the plate parallaxes down and the cards drift up past it.
// The whole opening is CSS-driven so it still plays with JavaScript off; only the parallax needs JS.
import Image from "next/image";
import { useEffect, useRef } from "react";
import { StackIcon, HardHatIcon, KeyIcon, ArrowUpRightIcon } from "@phosphor-icons/react";
import { Wrap } from "./ui";
import type { GlassIcon, RealEstateContent } from "../content";

const ICONS: Record<GlassIcon, typeof StackIcon> = { stack: StackIcon, crew: HardHatIcon, keys: KeyIcon };

export default function Hero({ h }: { h: RealEstateContent["hero"] }) {
  const root = useRef<HTMLElement>(null);
  const plate = useRef<HTMLDivElement>(null);
  const cards = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    let kill = () => {};
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: 0.6 },
        });
        tl.to(plate.current, { yPercent: 14, ease: "none" }, 0);
        tl.to(cards.current, { yPercent: -16, ease: "none" }, 0);
        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });
      kill = () => mm.revert();
    })();
    return () => kill();
  }, []);

  return (
    <section ref={root} className="relative isolate overflow-hidden bg-ink pb-px">
      {/* Photographic plate + scrim. The scrim is what makes white type legible at every crop. */}
      <div ref={plate} className="absolute inset-0 -z-10">
        <div className="re-plate absolute inset-0">
          <Image
            src={h.image.src}
            alt={h.image.alt}
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            className="object-cover"
            style={{ objectPosition: h.image.position }}
          />
        </div>
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.58)_0%,rgba(0,0,0,.34)_38%,rgba(0,0,0,.62)_100%)]" />
      </div>

      <Wrap className="pt-[168px] pb-0 sm:pt-[200px] lg:pt-[240px]">
        <h1 className="text-center font-display text-[clamp(2.75rem,8.2vw,5.625rem)] font-bold leading-[1.02] tracking-[-0.02em] text-on-dark">
          {h.lines.map((line, i) => (
            <span key={i} className="mask-line">
              <span className="re-line" style={{ animationDelay: `${0.1 + i * 0.12}s` }}>
                {line}
              </span>
            </span>
          ))}
        </h1>

        <p
          className="re-lift mx-auto mt-7 max-w-[680px] text-center font-body text-[17px] leading-[1.55] text-white/80 sm:text-[19px]"
          style={{ animationDelay: "0.45s" }}
        >
          {h.lead}
        </p>

        <hr className="re-rule mt-14 border-0 border-t border-white/25 sm:mt-20" />

        <div className="mt-8 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <p
            className="re-lift max-w-[620px] font-display text-[clamp(1.375rem,2.6vw,2rem)] font-bold leading-[1.18] tracking-[-0.02em] text-on-dark"
            style={{ animationDelay: "0.7s" }}
          >
            {h.subStatement}
          </p>
          <a
            href={h.cta.href}
            className="re-lift group/cta inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-canvas py-2 pl-7 pr-2 font-body text-[16px] font-semibold text-ink lg:self-auto"
            style={{ animationDelay: "0.82s" }}
          >
            {h.cta.label}
            <span
              aria-hidden
              className="grid size-11 place-items-center rounded-full bg-primary text-on-primary transition-transform duration-300 group-hover/cta:rotate-45"
            >
              <ArrowUpRightIcon size={18} weight="light" />
            </span>
          </a>
        </div>

        {/* Glass cards sit over the photograph and overlap the band below it. */}
        <ul ref={cards} className="mt-12 grid gap-4 pb-[120px] sm:grid-cols-2 lg:grid-cols-3 lg:pb-[160px]">
          {h.cards.map((c, i) => {
            const Icon = ICONS[c.icon];
            return (
              <li
                key={c.title}
                className="re-lift rounded-[30px] border border-white/15 bg-white/10 p-7 backdrop-blur-[20px] sm:p-8"
                style={{ animationDelay: `${0.95 + i * 0.12}s` }}
              >
                <Icon size={32} weight="light" className="text-primary" aria-hidden />
                <hr className="my-6 border-0 border-t border-white/20" />
                <h2 className="font-display text-[22px] font-bold tracking-[-0.01em] text-on-dark">{c.title}</h2>
                <p className="mt-3 font-body text-[16px] leading-[1.5] text-white/75">{c.text}</p>
              </li>
            );
          })}
        </ul>
      </Wrap>
    </section>
  );
}
