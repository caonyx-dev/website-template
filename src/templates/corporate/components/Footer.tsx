"use client";
// Footer: a black band with the "Let's talk ○" marquee alternating solid and outlined words, then a dark
// rounded card with About us + newsletter, Office, Links, Services and Social columns and the copyright.
import { useState } from "react";
import { PaperPlaneTiltIcon, PauseIcon, PlayIcon } from "@phosphor-icons/react";
import { useReducedMotionSafe } from "@/components/Reveal";
import type { CorporateContent } from "../content";
import { Frame } from "./ui";

export default function Footer({ f }: { f: CorporateContent["footer"] }) {
  const reduce = useReducedMotionSafe();
  const [paused, setPaused] = useState(false);
  const run = !reduce && !paused;
  return (
    <footer className="bg-black pb-8 text-white">
      <div className="relative overflow-hidden py-14" aria-hidden="true">
        <div className="flex w-max items-center gap-16 whitespace-nowrap font-display text-[64px] font-bold uppercase leading-none sm:text-[80px]" style={{ animation: run ? "marquee-talk 30s linear infinite" : "none" }}>
          {Array.from({ length: 8 }).map((_, i) => <span key={i} className="inline-flex items-center gap-16"><span className={i % 2 ? "text-white" : "text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,.9)]"}>{f.talk}</span><span className="inline-block h-6 w-6 rounded-full border-2 border-white" /></span>)}
        </div>
        <button type="button" onClick={() => setPaused((p) => !p)} aria-pressed={paused} aria-label={paused ? "Play" : "Pause"} className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/50 text-white hover:bg-white hover:text-black">{paused ? <PlayIcon size={14} weight="fill" /> : <PauseIcon size={14} weight="fill" />}</button>
        <style>{`@keyframes marquee-talk { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </div>
      <Frame className="px-4">
        <div className="rounded-xl bg-dark px-6 py-14 sm:px-14 lg:px-16 lg:py-24">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1.2fr_.8fr_.9fr_.7fr]">
            <div className="grid content-start gap-6">
              <h3 className="font-display text-[24px] font-semibold">{f.about.title}</h3>
              <p className="max-w-[36ch] text-[15px] leading-[1.6] text-white/70">{f.about.text}</p>
              <form className="flex max-w-[300px] rounded-sm border border-white/15 p-1" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="nl" className="sr-only">{f.about.newsletter}</label>
                <input id="nl" name="email" type="email" autoComplete="email" spellCheck={false} placeholder={`${f.about.newsletter}…`} className="min-w-0 flex-1 bg-transparent px-3 text-[14px] text-white placeholder:text-white/50 focus:outline-none" />
                <button type="submit" aria-label="Subscribe" className="inline-flex h-11 w-12 items-center justify-center rounded-sm bg-white text-primary hover:bg-soft"><PaperPlaneTiltIcon size={20} aria-hidden="true" /></button>
              </form>
            </div>
            <div className="grid content-start gap-5">
              <h3 className="font-display text-[24px] font-semibold">{f.office.title}</h3>
              <p className="max-w-[26ch] text-[15px] leading-[1.6] text-white/70">{f.office.address}</p>
              <a href={`mailto:${f.office.email.replace(/[\[\]]/g, "")}`} className="text-[15px] text-white/70 no-underline hover:text-white">{f.office.email}</a>
              <a href={`tel:${f.office.phone.replace(/[^+\d]/g, "")}`} className="font-display text-[26px] font-medium text-white no-underline hover:text-primary">{f.office.phone}</a>
            </div>
            {f.columns.map((col) => (
              <div key={col.title} className="grid content-start gap-5">
                <h3 className="font-display text-[24px] font-semibold">{col.title}</h3>
                <ul className="grid gap-3 text-[15px] text-white/70">{col.items.map((l) => <li key={l.href}><a href={l.href} className="no-underline hover:text-white">{l.label}</a></li>)}</ul>
              </div>
            ))}
          </div>
          <p className="mt-20 border-t border-white/15 pt-8 text-center text-[15px] text-white/70">{f.copyright}</p>
        </div>
      </Frame>
    </footer>
  );
}
