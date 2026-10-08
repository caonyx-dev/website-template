"use client";
// 05 The reference's running band: the word, the brand-coloured figure and the unit, repeated across the page
// with an arrow glyph between runs. One marquee per page; it pauses on hover, on focus and by its own button,
// and stands still under reduced motion, where the control is hidden because it would be inert.
import { useState } from "react";
import { PauseIcon, PlayIcon, ArrowBendDownLeftIcon } from "@phosphor-icons/react";
import { useReducedMotionSafe } from "@/components/Reveal";
import type { LogisticsContent } from "../content";
import { Container, Mono } from "./ui";

export default function Marquee({ m }: { m: LogisticsContent["marquee"] }) {
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotionSafe();
  const run = [0, 1, 2, 3];
  return (
    <section className="overflow-hidden bg-canvas pb-16 lg:pb-24" aria-labelledby="marquee-title">
      <h2 id="marquee-title" className="sr-only">{m.lead} {m.figure} {m.unit}</h2>
      <div className="log-marquee" data-paused={paused} aria-hidden="true">
        {run.map((k) => (
          <span key={k} className="flex shrink-0 items-center gap-6 px-6 font-display text-[44px] font-bold uppercase leading-none tracking-[-0.03em] sm:text-[68px] lg:text-[96px]">
            <span className="text-ink">{m.lead}</span>
            <ArrowBendDownLeftIcon size={56} weight="fill" className="shrink-0 text-primary" />
            <Mono className="text-primary">{m.figure}</Mono>
            <span className="text-ink">{m.unit}</span>
          </span>
        ))}
      </div>
      {!reduce && (
        <Container className="mt-6 flex justify-end">
          <button type="button" onClick={() => setPaused((p) => !p)} aria-pressed={paused} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-(--t-control) px-5 text-[14px] font-semibold text-ink transition-colors hover:border-ink active:bg-soft">
            {paused ? <PlayIcon size={16} weight="bold" aria-hidden="true" /> : <PauseIcon size={16} weight="bold" aria-hidden="true" />}
            Pause the scrolling band
          </button>
        </Container>
      )}
    </section>
  );
}
