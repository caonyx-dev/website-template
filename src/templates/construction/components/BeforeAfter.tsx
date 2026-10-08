"use client";
// Before/after pair for renovations: the "after" photograph is clipped by a range input the visitor drags
// (keyboard arrows work too), with a 2px graphite divider and the round icon button as the handle.
import Image from "next/image";
import { useState } from "react";
import { ArrowsOutLineHorizontalIcon } from "@phosphor-icons/react";
import type { ConstructionContent } from "../content";
import { Badge, Container, Headline } from "./ui";

export default function BeforeAfter({ b }: { b: ConstructionContent["beforeAfter"] }) {
  const [v, setV] = useState(50);
  return (
    <section className="py-20 lg:py-24" aria-labelledby="ba-title">
      <Container>
        <Headline id="ba-title" title={b.title} lead={b.lead} />
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm border-2 border-ink bg-dark select-none sm:aspect-[16/9]">
          <Image src={b.before.src} alt={b.before.alt} fill placeholder="blur" sizes="(min-width: 1200px) 1200px, 100vw" className="object-cover" draggable={false} />
          <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${v}%)` }}>
            <Image src={b.after.src} alt={b.after.alt} fill placeholder="blur" sizes="(min-width: 1200px) 1200px, 100vw" className="object-cover" draggable={false} />
          </div>
          <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-ink" style={{ left: `${v}%` }} aria-hidden="true">
            <span className="absolute left-1/2 top-1/2 inline-flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink bg-canvas text-ink"><ArrowsOutLineHorizontalIcon size={20} weight="light" /></span>
          </div>
          <span className="absolute left-3 top-3"><Badge neutral>Before</Badge></span>
          <span className="absolute right-3 top-3"><Badge neutral>After</Badge></span>
          <input type="range" min={0} max={100} value={v} onChange={(e) => setV(Number(e.target.value))} aria-label="Reveal the finished kitchen" className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0 [touch-action:pan-y]" />
        </div>
        <p className="mt-3 text-[13px] text-body">{b.caption}</p>
      </Container>
    </section>
  );
}
