// The reference runs a scrolling offer bar above the footer. This is the page's one marquee: it pauses on
// hover, on focus and by its own button, stands still under reduced motion, and the offer is repeated in a
// visually hidden heading so nothing depends on watching it move. Ink on orange, never white.
"use client";
import { useState } from "react";
import { PauseIcon, PlayIcon } from "@phosphor-icons/react";
import { useReducedMotionSafe } from "@/components/Reveal";
import type { SmallBusinessContent } from "../content";
import { Container } from "./ui";

export default function OfferBar({ o }: { o: SmallBusinessContent["offer"] }) {
  const reduce = useReducedMotionSafe();
  const [paused, setPaused] = useState(false);

  return (
    <section aria-labelledby="offer-title" className="overflow-hidden bg-(--t-accent) py-4">
      <h2 id="offer-title" className="sr-only">{o.label}: {o.text}. Call {o.phone}.</h2>
      <Container><p className="sr-only">{o.note}</p></Container>
      <div aria-hidden="true" className="select-none">
        <div className="sb-marquee" data-paused={paused}>
          {[0, 1].map((copy) => (
            <span key={copy} className="flex shrink-0">
              {Array.from({ length: 3 }).map((_, i) => (
                <span key={i} className="flex items-center whitespace-nowrap font-display text-[19px] font-bold tracking-[-0.01em] text-ink sm:text-[23px]">
                  <span className="px-6">{o.text}</span>
                  <span className="text-[14px]">✳</span>
                  <span className="px-6">Call {o.phone}</span>
                  <span className="text-[14px]">✳</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
      {!reduce && (
        <Container className="mt-2 flex justify-end">
          <button
            type="button"
            onClick={() => setPaused((v) => !v)}
            aria-pressed={paused}
            className="inline-flex size-10 items-center justify-center rounded-full bg-ink/10 text-ink transition-colors duration-200 hover:bg-ink/20"
          >
            {paused ? <PlayIcon size={13} weight="fill" aria-hidden="true" /> : <PauseIcon size={13} weight="fill" aria-hidden="true" />}
            <span className="sr-only">{o.pause}</span>
          </button>
        </Container>
      )}
    </section>
  );
}
