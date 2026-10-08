"use client";
// Testimonials: a lime block with the heading, quote mark, text, name and role and a dot pager (Embla);
// a photograph overlaps the block's top-right corner.
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useSyncExternalStore } from "react";
import { QuotesIcon } from "@phosphor-icons/react";
import { Reveal, useReducedMotionSafe } from "@/components/Reveal";
import type { AgencyContent } from "../content";

export default function Testimonials({ t }: { t: AgencyContent["testimonials"] }) {
  const reduce = useReducedMotionSafe();
  const [ref, api] = useEmblaCarousel({ loop: true, duration: reduce ? 0 : 24 });
  const subscribe = useCallback((cb: () => void) => { if (!api) return () => {}; api.on("select", cb).on("reInit", cb); return () => { api.off("select", cb).off("reInit", cb); }; }, [api]);
  const index = useSyncExternalStore(subscribe, () => api?.selectedScrollSnap() ?? 0, () => 0);
  return (
    <section className="relative pt-16 lg:pt-20" aria-labelledby="testimonials-title">
      <div className="relative mx-auto max-w-[1440px]">
        <Reveal from="clip" className="relative aspect-[4/5] max-h-[640px] w-full overflow-hidden lg:absolute lg:right-0 lg:top-0 lg:z-[1] lg:w-[512px]"><Image src={t.image.src} alt={t.image.alt} placeholder="blur" sizes="(min-width: 1024px) 512px, 100vw" className="h-full w-full object-cover" /></Reveal>
        <Reveal from="left" className="bg-accent px-6 py-16 text-ink lg:mr-[512px] lg:mt-16 lg:px-[84px] lg:py-28">
          <h2 id="testimonials-title" className="font-display text-[44px] font-bold leading-none tracking-[-0.02em] sm:text-[64px]">{t.title}</h2>
          <div ref={ref} className="mt-10 overflow-hidden" aria-roledescription="carousel" aria-label="Client testimonials">
            <ul className="flex">
              {t.items.map((it, i) => (
                <li key={i} className="min-w-0 shrink-0 grow-0 basis-full" aria-roledescription="slide" aria-label={`${i + 1} of ${t.items.length}`} aria-hidden={index !== i}>
                  <figure className="m-0 grid max-w-[720px] gap-6">
                    <QuotesIcon size={44} weight="fill" aria-hidden="true" />
                    <blockquote className="m-0 text-[18px] leading-[1.6]">{it.text}</blockquote>
                    <figcaption><span className="block font-display text-[26px] font-bold">{it.name}</span><span className="block text-[16px] font-bold">{it.role}</span></figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 flex gap-3" role="tablist" aria-label="Choose testimonial">
            {t.items.map((_, i) => <button key={i} type="button" role="tab" aria-selected={index === i} aria-label={`Testimonial ${i + 1}`} onClick={() => api?.scrollTo(i)} className={`h-2.5 w-2.5 rounded-full border border-ink transition-colors ${index === i ? "bg-ink" : "bg-transparent"}`} />)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
