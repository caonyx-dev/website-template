// The reference's second screen: a bracketed label, a statement headline with one phrase struck through with the
// highlighter, the office photograph beside it, then a narrow tile running the disciplines vertically next to the
// years counter, with Mission / Vision / Goal set out as three ruled rows. This is the page's only marquee; it
// pauses on hover, on focus and by its own button, and stands still entirely under reduced motion.
"use client";
import Image from "next/image";
import { useState } from "react";
import { PauseIcon, PlayIcon } from "@phosphor-icons/react";
import { Reveal, RevealGroup, useReducedMotionSafe } from "@/components/Reveal";
import type { MarketingContent } from "../content";
import { Container, CountUp, Eyebrow, Label, Pill, Title } from "./ui";

export default function About({ a }: { a: MarketingContent["about"] }) {
  const reduce = useReducedMotionSafe();
  const [paused, setPaused] = useState(false);

  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-28 bg-canvas py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-14">
          <div>
            <Reveal><Eyebrow>{a.eyebrow}</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <Title id="about-title" className="mt-6">
                {a.title}<span className="nim-mark">{a.mark}</span>{a.titleTail}
              </Title>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-[52ch] text-[17px] leading-[1.6] text-(--t-body) sm:text-[18px]">{a.lead}</p>
            </Reveal>
            <Reveal delay={0.22}><Pill href={a.cta.href} className="mt-8">{a.cta.label}</Pill></Reveal>
          </div>

          <Reveal from="scale" delay={0.1}>
            <Image src={a.image.src} alt={a.image.alt} placeholder="blur" sizes="(min-width: 1024px) 40vw, 100vw" className="h-auto w-full rounded-[24px] object-cover" />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-14">
          {/* The years counter, with the discipline list running beneath it. */}
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-[24px] bg-ink p-7 text-(--t-on-dark) nim-on-dark">
              <CountUp value={a.years.value} suffix={a.years.suffix} className="block font-display text-[72px] font-extrabold leading-none tracking-[-0.04em] sm:text-[88px]" />
              <p className="mt-3 max-w-[22ch] text-[15px] leading-[1.5] text-(--t-on-dark)/75">{a.years.label}</p>

              <div className="mt-7 flex items-center justify-between gap-3 border-t border-white/15 pt-5">
                <Label className="text-(--t-on-dark)/70">{a.marqueeLabel}</Label>
                {!reduce && (
                  <button
                    type="button"
                    onClick={() => setPaused((v) => !v)}
                    aria-pressed={paused}
                    className="inline-flex size-11 items-center justify-center rounded-full bg-white/15 text-(--t-on-dark) transition-colors duration-200 hover:bg-white/25"
                  >
                    {paused ? <PlayIcon size={14} weight="fill" /> : <PauseIcon size={14} weight="fill" />}
                    {/* A constant name beside `aria-pressed`: a name that flipped too would announce the state twice. */}
                    <span className="sr-only">Pause the discipline list</span>
                  </button>
                )}
              </div>

              <h3 className="sr-only">{a.marqueeLabel}</h3>
              <ul className="sr-only">{a.marquee.map((m) => <li key={m}>{m}</li>)}</ul>
              <div aria-hidden="true" className="mt-4 h-[132px] grow overflow-hidden">
                <div className="nim-marquee" data-paused={paused}>
                  {[0, 1].map((copy) => (
                    <ul key={copy} className="m-0 list-none p-0">
                      {a.marquee.map((m) => (
                        <li key={m} className="py-1.5 font-display text-[20px] font-bold tracking-[-0.02em]">{m}</li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <RevealGroup as="ul" className="m-0 list-none p-0" itemClassName="border-t border-(--t-hairline) first:border-t-0">
            {a.pillars.map((p) => (
              <div key={p.n} className="grid gap-3 py-7 sm:grid-cols-[minmax(0,180px)_minmax(0,1fr)] sm:gap-10">
                <Label className="pt-1 text-(--t-mute)">{p.n}</Label>
                <div>
                  <h3 className="font-display text-[22px] font-bold tracking-[-0.02em] text-ink sm:text-[26px]">{p.title}</h3>
                  <p className="mt-2 max-w-[56ch] text-[16px] leading-[1.6] text-(--t-body)">{p.text}</p>
                </div>
              </div>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
