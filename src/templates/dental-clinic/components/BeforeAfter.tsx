"use client";
// Before/after whitening slider: the same smile twice, the "before" side tinted with a CSS filter and the
// "after" side clipped by a range input the visitor drags (keyboard arrows work too).
import Image from "next/image";
import { useState } from "react";
import { ArrowsOutLineHorizontalIcon } from "@phosphor-icons/react";
import type { DentalContent } from "../content";

export default function BeforeAfter({ g }: { g: DentalContent["gallery"] }) {
  const [v, setV] = useState(50);
  const [focus, setFocus] = useState(false);
  const label = "px-3 py-1 font-display text-[12px] font-bold uppercase tracking-[.1em]";
  return (
    <div className="relative aspect-[4/3] select-none overflow-hidden bg-soft">
      <Image src={g.slider.src} alt={g.slider.alt} fill placeholder="blur" sizes="(min-width: 768px) 560px, 100vw" className="object-cover" style={{ filter: "sepia(.5) saturate(.85) brightness(.9)" }} draggable={false} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${v}%)` }} aria-hidden="true">
        <Image src={g.slider.src} alt="" fill placeholder="blur" sizes="(min-width: 768px) 560px, 100vw" className="object-cover" draggable={false} />
      </div>
      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white" style={{ left: `${v}%` }} aria-hidden="true">
        <span className={`absolute left-1/2 top-1/2 inline-flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-ink shadow-lift ${focus ? "ring-4 ring-white" : ""}`}><ArrowsOutLineHorizontalIcon size={20} weight="bold" /></span>
      </div>
      <span className={`absolute left-4 top-4 bg-dark/80 text-white ${label}`}>{g.before}</span>
      <span className={`absolute right-4 top-4 bg-primary text-ink ${label}`}>{g.after}</span>
      <input type="range" min={0} max={100} value={v} onChange={(e) => setV(Number(e.target.value))} onFocus={(e) => setFocus(e.target.matches(":focus-visible"))} onBlur={() => setFocus(false)} aria-label="Compare the smile before and after whitening" className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0 [touch-action:pan-y]" />
    </div>
  );
}
