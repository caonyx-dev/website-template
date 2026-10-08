"use client";
// Guest words like the reference: a full-bleed photograph with a tall arch-topped frosted panel in the centre
// holding a gold quote mark, the quote in Marcellus, the name and dot pagination (Embla, crossfade only).
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import { useCallback, useSyncExternalStore } from "react";
import { QuotesIcon } from "@phosphor-icons/react";
import { useReducedMotionSafe } from "@/components/Reveal";
import type { HotelContent } from "../content";

export default function Testimonials({ t }: { t: HotelContent["testimonials"] }) {
  const reduce = useReducedMotionSafe();
  const [ref, api] = useEmblaCarousel({ loop: true, duration: reduce ? 0 : 40 }, [Fade()]);
  const subscribe = useCallback((cb: () => void) => { if (!api) return () => {}; api.on("select", cb).on("reInit", cb); return () => { api.off("select", cb).off("reInit", cb); }; }, [api]);
  const read = useCallback(() => (api ? String(api.selectedScrollSnap()) : "0"), [api]);
  const index = Number(useSyncExternalStore(subscribe, read, () => "0"));
  return (
    <section className="relative z-[1] overflow-hidden bg-dark py-20 text-on-dark lg:py-28" aria-label="Guest words">
      <Image src={t.image.src} alt={t.image.alt} fill placeholder="blur" sizes="100vw" className="object-cover opacity-80" />
      <div className="absolute inset-0 bg-ink/30" aria-hidden="true" />
      <div className="relative mx-auto w-[min(92vw,620px)] min-w-0 rounded-t-[999px] border border-accent/40 bg-dark/30 px-8 pb-10 pt-28 text-center backdrop-blur-md sm:px-12 sm:pt-36">
        <QuotesIcon size={40} weight="fill" className="mx-auto text-accent" aria-hidden="true" />
        <div ref={ref} className="mt-6 overflow-hidden" aria-live="polite">
          <ul className="flex" style={{ marginLeft: 0 }}>
            {t.items.map((it, i) => (
              <li key={i} className="min-w-0 shrink-0 grow-0 basis-full" aria-hidden={i !== index}>
                <blockquote className="m-0 font-display text-[24px] leading-[1.4] text-on-dark sm:text-[30px]">{it.text}</blockquote>
                <p className="mt-8 text-[14px] tracking-[1px] text-(--t-body-muted)">{it.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex justify-center">{t.items.map((it, i) => <button key={i} type="button" aria-current={i === index ? "true" : undefined} onClick={() => api?.scrollTo(i)} className="inline-flex h-11 w-11 items-center justify-center"><span className={`block h-2 w-2 rounded-full ${i === index ? "bg-accent" : "bg-on-dark/50"}`} aria-hidden="true" /><span className="sr-only">Show the words from {it.name}</span></button>)}</div>
      </div>
    </section>
  );
}
