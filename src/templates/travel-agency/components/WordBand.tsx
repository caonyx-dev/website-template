// The reference's giant scrolling word. This is the page's one marquee: it pauses on hover, on focus and by
// its own button, stands still under reduced motion, and the word itself is repeated in a visually hidden
// heading so nothing depends on watching it move.
"use client";
import { useState } from "react";
import { PauseIcon, PlayIcon } from "@phosphor-icons/react";
import { useReducedMotionSafe } from "@/components/Reveal";
import type { TravelContent } from "../content";
import { Container } from "./ui";

export default function WordBand({ b }: { b: TravelContent["band"] }) {
  const reduce = useReducedMotionSafe();
  const [paused, setPaused] = useState(false);

  return (
    <section aria-labelledby="band-title" className="overflow-hidden bg-(--t-soft) py-6 sm:py-10">
      <h2 id="band-title" className="sr-only">{b.label}</h2>
      <div aria-hidden="true" className="select-none">
        <div className="tv-marquee" data-paused={paused}>
          {[0, 1].map((copy) => (
            <span key={copy} className="flex shrink-0">
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="whitespace-nowrap px-6 font-display text-[clamp(64px,13vw,190px)] uppercase leading-[1] tracking-[-0.01em] text-ink">
                  {b.word}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
      {!reduce && (
        <Container className="mt-3 flex justify-end">
          <button
            type="button"
            onClick={() => setPaused((v) => !v)}
            aria-pressed={paused}
            className="inline-flex size-11 items-center justify-center rounded-full border border-(--t-control) text-ink transition-colors duration-200 hover:border-ink"
          >
            {paused ? <PlayIcon size={14} weight="fill" aria-hidden="true" /> : <PauseIcon size={14} weight="fill" aria-hidden="true" />}
            <span className="sr-only">{paused ? b.play : b.pause}</span>
          </button>
        </Container>
      )}
    </section>
  );
}
