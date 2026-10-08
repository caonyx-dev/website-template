"use client";
// 07 Pricing on the off-white band: three white cards (the middle one lifted with a "Most popular" pill and
// a struck former price), each with a checklist and the lime pill; then the partners line and a logo
// marquee that pauses on hover and has a Pause/Play button.
import { useState } from "react";
import { CheckIcon, FireIcon, PauseIcon, PlayIcon } from "@phosphor-icons/react";
import { RevealGroup, useReducedMotionSafe } from "@/components/Reveal";
import type { StudioContent } from "../content";
import { Container, Pill, SectionHead } from "./ui";

export default function Pricing({ p }: { p: StudioContent["pricing"] }) {
  const reduce = useReducedMotionSafe(); const [paused, setPaused] = useState(false);
  return (
    <section id="pricing" className="bg-soft py-24 lg:py-32" aria-labelledby="pricing-title">
      <Container>
        <SectionHead n={p.n} label={p.label} title={p.title} text={p.text} id="pricing-title" />
        <RevealGroup className="mt-16 grid gap-5 md:grid-cols-3 md:items-start" stagger={0.12}>
          {p.plans.map((pl) => (
            <article key={pl.name} className={`grid gap-8 rounded-md bg-white p-8 sm:p-12 ${pl.popular ? "md:-mt-2" : ""}`}>
              <div className="grid gap-6">
                <span className="flex items-center gap-3 text-[18px] font-medium text-ink">{pl.name}{pl.popular && <span className="inline-flex h-9 items-center gap-1.5 rounded-full bg-dark px-4 text-[15px] text-white"><FireIcon size={14} aria-hidden="true" />Most popular</span>}</span>
                <span className="flex items-baseline gap-3">{pl.was && <span className="font-display text-[32px] font-bold text-mute line-through">{pl.was}</span>}<span className="font-display text-[40px] font-bold tracking-[-1px] text-ink">{pl.price}</span><span className="text-[16px] text-body">{pl.per}</span></span>
                <p className="text-[16px] leading-[1.6] text-body">{pl.text}</p>
              </div>
              <div className="grid gap-5 border-t border-hairline pt-8"><span className="text-[16px] text-ink">What&rsquo;s included:</span><ul className="grid gap-4">{pl.features.map((f) => <li key={f} className="flex items-start gap-4 text-[16px] text-ink"><span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary"><CheckIcon size={14} weight="bold" aria-hidden="true" /></span>{f}</li>)}</ul></div>
              <Pill href={pl.cta.href} className="justify-between"><span className="flex-1 text-center">{pl.cta.label}</span></Pill>
            </article>
          ))}
        </RevealGroup>
        <p className="mt-16 text-center text-[17px] text-ink">{p.partners}</p>
        <div className="relative mt-8 overflow-hidden" aria-label="Partner logos">
          <div className="flex w-max gap-16 whitespace-nowrap" style={{ animation: !reduce && !paused ? "studio-marquee 30s linear infinite" : "none" }}>{[...p.logos, ...p.logos, ...p.logos].map((l, i) => <span key={i} className="inline-flex h-10 items-center text-[20px] font-bold text-mute" aria-hidden={i >= p.logos.length}>{l}</span>)}</div>
          <button type="button" onClick={() => setPaused((v) => !v)} aria-pressed={paused} aria-label={paused ? "Play logos" : "Pause logos"} className="absolute right-0 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink">{paused ? <PlayIcon size={14} weight="fill" /> : <PauseIcon size={14} weight="fill" />}</button>
          <style>{`@keyframes studio-marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`}</style>
        </div>
      </Container>
    </section>
  );
}
