"use client";
// The page's single marquee. It pauses on hover and on focus, and carries a visible Pause/Play button
// (CLAUDE.md motion rules). Names are placeholders until the group supplies real partner marks.
import { useState } from "react";
import { PauseIcon, PlayIcon } from "@phosphor-icons/react";
import { Wrap } from "./ui";
import type { RealEstateContent } from "../content";

export default function Partners({ p }: { p: RealEstateContent["partners"] }) {
  const [paused, setPaused] = useState(false);
  return (
    <section id="partners" className="bg-soft pb-20 sm:pb-24 lg:pb-28">
      <Wrap>
        <hr className="border-0 border-t border-hairline-strong" />
        <p className="mt-12 text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-mute">{p.title}</p>

        <div className="re-marquee relative mt-8 overflow-hidden" data-paused={paused}>
          <ul className="re-marquee-track flex w-max items-center gap-14 sm:gap-20">
            {[...p.items, ...p.items].map((name, i) => (
              <li
                key={`${name}-${i}`}
                aria-hidden={i >= p.items.length}
                className="font-display text-[22px] font-bold tracking-[-0.01em] text-ink/35 transition-colors duration-300 hover:text-ink sm:text-[26px]"
              >
                {name}
              </li>
            ))}
          </ul>
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-[linear-gradient(90deg,var(--t-soft),transparent)]" />
          <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-[linear-gradient(270deg,var(--t-soft),transparent)]" />
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setPaused((v) => !v)}
            aria-pressed={paused}
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 font-body text-[14px] font-medium text-body hover:border-ink hover:text-ink"
          >
            {paused ? <PlayIcon size={14} weight="light" aria-hidden /> : <PauseIcon size={14} weight="light" aria-hidden />}
            {paused ? "Play" : "Pause"}
            <span className="sr-only">partner marquee</span>
          </button>
        </div>
      </Wrap>
    </section>
  );
}
