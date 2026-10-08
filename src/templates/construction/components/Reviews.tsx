"use client";
// review-card carousel: Embla (small, keyboard and touch friendly) moves one card at a time on phones,
// two on desktop. Round icon buttons from DESIGN.md step the strip; a counter reads the position.
// Cards are placeholders; no rating figure is shown until real reviews exist.
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useSyncExternalStore } from "react";
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from "@phosphor-icons/react";
import { useReducedMotionSafe } from "@/components/Reveal";
import type { ConstructionContent } from "../content";
import { Container, Headline } from "./ui";

const IDLE = "0|0|0|0";

export default function Reviews({ r }: { r: ConstructionContent["reviews"] }) {
  const reduce = useReducedMotionSafe();
  const [ref, api] = useEmblaCarousel({ align: "start", loop: false, duration: reduce ? 0 : 22, skipSnaps: false });
  // Embla is the store: position, count and the two "can scroll" flags come straight from it.
  const subscribe = useCallback((cb: () => void) => {
    if (!api) return () => {};
    api.on("select", cb).on("reInit", cb);
    return () => { api.off("select", cb).off("reInit", cb); };
  }, [api]);
  const read = useCallback(() => api ? `${api.selectedScrollSnap()}|${api.scrollSnapList().length}|${api.canScrollPrev() ? 1 : 0}|${api.canScrollNext() ? 1 : 0}` : IDLE, [api]);
  const [index, count, canPrev, canNext] = useSyncExternalStore(subscribe, read, () => IDLE).split("|").map(Number);

  const btn = "inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-canvas text-ink transition-colors hover:bg-soft disabled:cursor-not-allowed disabled:opacity-35";

  return (
    <section id={r.id} className="py-20 lg:py-24" aria-labelledby={`${r.id}-title`}>
      <Container>
        <Headline id={`${r.id}-title`} title={r.title} lead={r.lead} />
        <div className="overflow-hidden" ref={ref} aria-roledescription="carousel" aria-label="Client reviews">
          <ul className="flex touch-pan-y gap-6" style={{ marginLeft: 0 }}>
            {r.items.map((it, i) => (
              <li key={i} className="min-w-0 shrink-0 grow-0 basis-full md:basis-[calc(50%-12px)]" aria-roledescription="slide" aria-label={`${i + 1} of ${r.items.length}`}>
                <article className="grid h-full content-start gap-4 rounded-md bg-soft p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-[12px] font-medium uppercase text-ink" aria-hidden="true">{it.initials}</span>
                    <span className="grid min-w-0 gap-0.5"><span className="truncate text-[15px] font-medium">{it.name}</span><span className="text-[13px] text-mute">{it.project}</span></span>
                    <span className="ml-auto flex shrink-0 gap-0.5 text-accent" role="img" aria-label="Rating placeholder">{[0, 1, 2, 3, 4].map((k) => <StarIcon key={k} size={16} weight="fill" aria-hidden="true" />)}</span>
                  </div>
                  <p className="text-[15px] leading-[1.6] text-body">{it.text}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex items-center gap-3">
          <button type="button" onClick={() => api?.scrollPrev()} disabled={!canPrev} aria-label="Previous reviews" className={btn}><ArrowLeftIcon size={18} weight="light" aria-hidden="true" /></button>
          <button type="button" onClick={() => api?.scrollNext()} disabled={!canNext} aria-label="Next reviews" className={btn}><ArrowRightIcon size={18} weight="light" aria-hidden="true" /></button>
          <span className="ml-2 text-[13px] tabular-nums text-mute" aria-live="polite">{count ? `${index + 1} / ${count}` : ""}</span>
        </div>
      </Container>
    </section>
  );
}
