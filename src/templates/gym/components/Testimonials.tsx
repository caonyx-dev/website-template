"use client";
// Member story over a full-bleed photograph: a centred card on surface-card with a volt quote mark, the quote in
// uppercase Oswald, avatar, name and role; Embla slides between members with volt-dot pagination.
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useSyncExternalStore } from "react";
import { QuotesIcon } from "@phosphor-icons/react";
import { useReducedMotionSafe } from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import type { GymContent } from "../content";

export default function Testimonials({ t }: { t: GymContent["testimonials"] }) {
  const reduce = useReducedMotionSafe();
  const [ref, api] = useEmblaCarousel({ loop: true, duration: reduce ? 0 : 26 });
  const subscribe = useCallback((cb: () => void) => { if (!api) return () => {}; api.on("select", cb).on("reInit", cb); return () => { api.off("select", cb).off("reInit", cb); }; }, [api]);
  const read = useCallback(() => (api ? String(api.selectedScrollSnap()) : "0"), [api]);
  const index = Number(useSyncExternalStore(subscribe, read, () => "0"));
  return (
    <section className="relative overflow-hidden py-24 lg:py-40" aria-label="Member stories">
      <Parallax speed={0.2} className="absolute inset-x-0 -inset-y-[15%]"><Image src={t.image.src} alt={t.image.alt} fill placeholder="blur" sizes="100vw" className="object-cover object-top grayscale" /></Parallax>
      <div className="absolute inset-0 bg-canvas/40" aria-hidden="true" />
      <div className="relative mx-auto w-[min(92vw,600px)] min-w-0 rounded-lg border border-hairline bg-(--t-surface-card)/88 p-8 backdrop-blur-md sm:p-12">
        <QuotesIcon size={44} weight="fill" className="text-primary" aria-hidden="true" />
        <div ref={ref} className="mt-8 overflow-hidden" aria-live="polite">
          <ul className="flex touch-pan-y" style={{ marginLeft: 0 }}>
            {t.items.map((it, i) => (
              <li key={i} className="min-w-0 shrink-0 grow-0 basis-full" aria-hidden={i !== index}>
                <blockquote className="m-0 font-display text-[22px] font-semibold leading-[1.25] text-ink sm:text-[26px]">{it.text}</blockquote>
                <p className="mt-8 flex items-center gap-4"><span className="relative h-14 w-14 overflow-hidden rounded-full"><Image src={it.avatar.src} alt="" fill placeholder="blur" sizes="56px" className="object-cover" /></span><span><span className="block text-[16px] font-semibold text-ink">{it.name}</span><span className="block text-[13px] uppercase tracking-[.06em] text-body">{it.role}</span></span></p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex">{t.items.map((it, i) => <button key={i} type="button" aria-pressed={i === index} onClick={() => api?.scrollTo(i)} className="inline-flex h-11 w-11 items-center justify-center"><span className={`block h-2.5 w-2.5 rounded-full border ${i === index ? "border-primary bg-primary" : "border-body"}`} aria-hidden="true" /><span className="sr-only">Show the story from {it.name}</span></button>)}</div>
      </div>
    </section>
  );
}
