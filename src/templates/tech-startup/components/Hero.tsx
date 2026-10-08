"use client";
// Hero signature moment, unique to this template: the three statement lines rise through masks at
// 100px, then the grey card and the wide render slide in from opposite edges and meet — a split
// reveal. On scroll the render parallaxes down while the card drifts up past it.
// The opening is CSS keyframes so it plays with JavaScript off; only the parallax needs JS.
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button, Chip, Wrap } from "./ui";
import type { TechStartupContent } from "../content";

export default function Hero({ h }: { h: TechStartupContent["hero"] }) {
  const root = useRef<HTMLElement>(null);
  const plate = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    let kill = () => {};
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: el, start: "bottom bottom", end: "bottom top", scrub: 0.6 },
        });
        tl.to(plate.current, { yPercent: 10, ease: "none" }, 0);
        tl.to(card.current, { yPercent: -12, ease: "none" }, 0);
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
    <section ref={root} className="overflow-hidden bg-canvas pt-14 sm:pt-20 lg:pt-24">
      <Wrap>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.26fr)_minmax(0,1fr)] lg:items-start lg:gap-12">
          {/* Social proof */}
          <div className="ts-fade" style={{ animationDelay: "0.55s" }}>
            <div className="flex items-center">
              {/* One group photograph, cropped to three different faces — the cluster is decorative,
                  so it carries a single alt on the group and the rest are hidden. */}
              {["22% 35%", "50% 32%", "78% 38%"].map((pos, i) => (
                <span
                  key={pos}
                  className="relative size-14 shrink-0 overflow-hidden rounded-full border-2 border-canvas"
                  style={{ marginLeft: i === 0 ? 0 : -16, zIndex: 3 - i }}
                >
                  <Image
                    src={h.proofImage.src}
                    alt={i === 0 ? h.proofImage.alt : ""}
                    aria-hidden={i !== 0}
                    fill
                    sizes="56px"
                    placeholder="blur"
                    className="object-cover"
                    style={{ objectPosition: pos }}
                  />
                </span>
              ))}
              <span
                aria-hidden
                className="relative grid size-14 shrink-0 place-items-center rounded-full border-2 border-canvas bg-ink text-[18px] text-on-dark"
                style={{ marginLeft: -16 }}
              >
                +
              </span>
            </div>
            <p className="mt-4 max-w-[240px] font-body text-[17px] leading-[1.35] text-ink">{h.proof}</p>
          </div>

          {/* The statement */}
          <h1 className="font-display text-[clamp(2.5rem,7.4vw,6.25rem)] font-medium leading-[0.95] text-ink">
            {h.lines.map((line, i) => (
              <span key={i} className="mask-line">
                <span className="ts-rise" style={{ animationDelay: `${0.08 + i * 0.1}s` }}>
                  {line}
                </span>
              </span>
            ))}
          </h1>
        </div>

        {/* Split reveal: card from the left, render from the right. */}
        <div className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-[minmax(290px,0.3fr)_minmax(0,1fr)]">
          <div
            ref={card}
            className="ts-fade flex flex-col rounded-[25px] bg-soft p-8 lg:p-9"
            style={{ animationDelay: "0.75s" }}
          >
            <p aria-hidden className="font-display text-[72px] font-medium leading-none text-ink">
              {h.mark}
            </p>
            <p className="mt-6 font-body text-[17px] leading-[1.45] text-body">{h.blurb}</p>
            <div className="mt-8">
              <Button href={h.cta.href} tone="dark" className="whitespace-nowrap">
                {h.cta.label}
              </Button>
            </div>
          </div>

          <div ref={plate} className="ts-plate relative min-h-[300px] overflow-hidden rounded-[20px] sm:min-h-[420px] lg:min-h-[480px]" style={{ animationDelay: "0.75s" }}>
            <Image
              src={h.image.src}
              alt={h.image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 70vw"
              placeholder="blur"
              className="object-cover"
            />
            <Chip className="absolute left-5 top-5 sm:left-7 sm:top-7">{h.chip}</Chip>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
