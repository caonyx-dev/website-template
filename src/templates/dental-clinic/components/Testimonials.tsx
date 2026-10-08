"use client";
// "Happy clients say": a teal quote mark, the label, a row of round avatar tabs (the active one scales up)
// and an Embla carousel of quotes with stars (decorative until real ratings exist), name and role. Avatars and
// slides stay in sync through Embla.
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useSyncExternalStore } from "react";
import { QuotesIcon, StarIcon } from "@phosphor-icons/react";
import { Reveal, useReducedMotionSafe } from "@/components/Reveal";
import type { DentalContent } from "../content";
import { Container } from "./ui";

export default function Testimonials({ t }: { t: DentalContent["testimonials"] }) {
  const reduce = useReducedMotionSafe();
  const [ref, api] = useEmblaCarousel({ loop: true, duration: reduce ? 0 : 26 });
  const subscribe = useCallback((cb: () => void) => {
    if (!api) return () => {};
    api.on("select", cb).on("reInit", cb);
    return () => { api.off("select", cb).off("reInit", cb); };
  }, [api]);
  const read = useCallback(() => (api ? String(api.selectedScrollSnap()) : "0"), [api]);
  const index = Number(useSyncExternalStore(subscribe, read, () => "0"));

  return (
    <section className="py-24 lg:py-32" aria-labelledby="testimonials-title">
      <Container className="max-w-[860px] text-center">
        <Reveal from="scale"><QuotesIcon size={56} weight="fill" className="mx-auto text-primary" aria-hidden="true" /></Reveal>
        <Reveal delay={0.1}><h2 id="testimonials-title" className="mt-4 font-display text-[13px] font-bold uppercase tracking-[.14em] text-body">{t.label}</h2></Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex items-center justify-center gap-6">
            {t.items.map((it, i) => (
              <button key={i} type="button" aria-pressed={i === index} onClick={() => api?.scrollTo(i)} className={`relative h-16 w-16 overflow-hidden rounded-full transition-[transform,opacity] duration-500 ${i === index ? "scale-125 opacity-100 ring-4 ring-primary/40" : "opacity-55 hover:opacity-100"}`}>
                <Image src={it.avatar.src} alt="" fill placeholder="blur" sizes="80px" className="object-cover" />
                <span className="sr-only">Show the testimonial from {it.name}</span>
              </button>
            ))}
          </div>
        </Reveal>
        <div ref={ref} className="mt-12 overflow-hidden" aria-live="polite">
          <ul className="flex touch-pan-y" style={{ marginLeft: 0 }}>
            {t.items.map((it, i) => (
              <li key={i} className="min-w-0 shrink-0 grow-0 basis-full px-2" aria-hidden={i !== index}>
                <blockquote className="m-0 text-[21px] leading-[1.6] text-ink sm:text-[24px]">“{it.text}”</blockquote>
                <span className="mt-6 flex justify-center gap-1 text-primary" aria-hidden="true">{[0, 1, 2, 3, 4].map((k) => <StarIcon key={k} size={18} weight="fill" aria-hidden="true" />)}</span>
                <p className="mt-5 text-[15px]"><span className="font-display font-bold text-ink">{it.name}</span> <span className="italic text-body">– {it.role}</span></p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
