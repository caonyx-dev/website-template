"use client";
// Blue marquee strip with ✳ separators. Pauses on hover and focus and has a visible Pause/Play button.
import { useState } from "react";
import { PauseIcon, PlayIcon } from "@phosphor-icons/react";
import { useReducedMotionSafe } from "@/components/Reveal";

export default function Marquee({ items }: { items: string[] }) {
  const reduce = useReducedMotionSafe();
  const [paused, setPaused] = useState(false);
  const run = !reduce && !paused;
  const row = [...items, ...items, ...items];
  return (
    <section className="relative overflow-hidden bg-primary py-5 text-white" aria-label="Capabilities">
      <div className="flex w-max gap-12 whitespace-nowrap" style={{ animation: run ? "marquee 40s linear infinite" : "none" }} onMouseEnter={(e) => { e.currentTarget.style.animationPlayState = "paused"; }} onMouseLeave={(e) => { e.currentTarget.style.animationPlayState = "running"; }}>
        {row.map((t, i) => <span key={i} className="inline-flex items-center gap-12 font-display text-[32px] font-medium uppercase leading-none sm:text-[44px]" aria-hidden={i >= items.length}><span className="text-[28px]" aria-hidden="true">✳</span>{t}</span>)}
      </div>
      <button type="button" onClick={() => setPaused((p) => !p)} aria-pressed={paused} aria-label={paused ? "Play marquee" : "Pause marquee"} className="absolute right-4 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 text-white hover:bg-white hover:text-primary">{paused ? <PlayIcon size={14} weight="fill" /> : <PauseIcon size={14} weight="fill" />}</button>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`}</style>
    </section>
  );
}
