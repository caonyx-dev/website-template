"use client";
// Split testimonial band like the reference: the green-black half carries the quote mark, the quote, a round
// avatar, name and role with lime-dot pagination (Embla); the other half is a full-bleed photograph.
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useSyncExternalStore } from "react";
import { QuotesIcon } from "@phosphor-icons/react";
import { useReducedMotionSafe } from "@/components/Reveal";
import type { FinanceContent } from "../content";

export default function Testimonials({ t }: { t: FinanceContent["testimonials"] }) {
  const reduce = useReducedMotionSafe();
  const [ref, api] = useEmblaCarousel({ loop: true, duration: reduce ? 0 : 26 });
  const subscribe = useCallback((cb: () => void) => { if (!api) return () => {}; api.on("select", cb).on("reInit", cb); return () => { api.off("select", cb).off("reInit", cb); }; }, [api]);
  const read = useCallback(() => (api ? String(api.selectedScrollSnap()) : "0"), [api]);
  const index = Number(useSyncExternalStore(subscribe, read, () => "0"));
  return (
    <section className="grid lg:grid-cols-2" aria-label="What clients say">
      <div className="flex min-w-0 items-center justify-center overflow-hidden bg-dark px-6 py-20 text-center text-white lg:min-h-[760px] lg:px-16">
        <div className="w-full min-w-0 max-w-[560px]">
          <QuotesIcon size={40} weight="fill" className="mx-auto" aria-hidden="true" />
          <div ref={ref} className="mt-8 overflow-hidden" aria-live="polite">
            <ul className="flex touch-pan-y" style={{ marginLeft: 0 }}>
              {t.items.map((it, i) => (
                <li key={i} className="min-w-0 shrink-0 grow-0 basis-full px-2" aria-hidden={i !== index}>
                  <blockquote className="m-0 text-[20px] leading-[1.6] text-white/90 sm:text-[22px]">{it.text}</blockquote>
                  <span className="relative mx-auto mt-10 block h-20 w-20 overflow-hidden rounded-full"><Image src={it.avatar.src} alt="" fill placeholder="blur" sizes="80px" className="object-cover" /></span>
                  <p className="mt-5 font-display text-[20px] font-bold">{it.name}</p>
                  <p className="mt-1 text-[15px] text-white/70">{it.role}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 flex justify-center">
            {t.items.map((it, i) => <button key={i} type="button" aria-pressed={i === index} onClick={() => api?.scrollTo(i)} className="inline-flex h-11 w-11 items-center justify-center"><span className={`block h-2.5 w-2.5 rounded-full border transition-colors ${i === index ? "border-accent bg-accent" : "border-white/70"}`} aria-hidden="true" /><span className="sr-only">Show the testimonial from {it.name}</span></button>)}
          </div>
        </div>
      </div>
      <div className="relative min-h-[360px] lg:min-h-[760px]"><Image src={t.image.src} alt={t.image.alt} fill placeholder="blur" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div>
    </section>
  );
}
