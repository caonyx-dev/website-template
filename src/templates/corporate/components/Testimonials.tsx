"use client";
// Blue testimonial band: centred white headline, a single warm card per view with the index, an arched
// portrait, the quote mark, text, name and role; round outlined arrows either side (Embla).
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useSyncExternalStore } from "react";
import { ArrowLeftIcon, ArrowRightIcon, QuotesIcon } from "@phosphor-icons/react";
import { useReducedMotionSafe } from "@/components/Reveal";
import type { CorporateContent } from "../content";
import { Container, H2, RoundBtn } from "./ui";

export default function Testimonials({ t }: { t: CorporateContent["testimonials"] }) {
  const reduce = useReducedMotionSafe();
  const [ref, api] = useEmblaCarousel({ loop: true, duration: reduce ? 0 : 24 });
  const subscribe = useCallback((cb: () => void) => { if (!api) return () => {}; api.on("select", cb).on("reInit", cb); return () => { api.off("select", cb).off("reInit", cb); }; }, [api]);
  const index = useSyncExternalStore(subscribe, () => api?.selectedScrollSnap() ?? 0, () => 0);
  return (
    <section className="bg-primary py-20 text-white lg:py-28" aria-labelledby="testimonials-title">
      <Container>
        <H2 id="testimonials-title" center onDark className="mx-auto max-w-[1100px]">{t.title}</H2>
        <div className="relative mt-14">
          <div ref={ref} className="mx-auto max-w-[890px] overflow-hidden" aria-roledescription="carousel" aria-label="Client testimonials">
            <ul className="flex">
              {t.items.map((it, i) => (
                <li key={i} className="min-w-0 shrink-0 grow-0 basis-full" aria-roledescription="slide" aria-label={`${i + 1} of ${t.items.length}`} aria-hidden={index !== i}>
                  <figure className="m-0 grid gap-8 rounded-md bg-soft p-8 text-ink sm:grid-cols-[auto_150px_1fr] sm:gap-12 sm:p-12">
                    <span className="text-[15px] text-body">00{i + 1}</span>
                    <span className="block h-[190px] w-[150px] overflow-hidden rounded-t-full rounded-b-[36px] bg-soft2"><Image src={it.image.src} alt={it.image.alt} placeholder="blur" sizes="150px" className="h-full w-full object-cover" /></span>
                    <div className="grid content-start gap-5">
                      <QuotesIcon size={44} weight="fill" className="text-primary" aria-hidden="true" />
                      <blockquote className="m-0 font-display text-[20px] font-medium leading-[1.4] sm:text-[22px]">{it.text}</blockquote>
                      <figcaption><span className="block font-display text-[26px] font-semibold">{it.name}</span><span className="block text-[15px] text-body">{it.role}</span></figcaption>
                    </div>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
          <RoundBtn onDark onClick={() => api?.scrollPrev()} aria-label="Previous testimonial" className="absolute left-0 top-1/2 hidden -translate-y-1/2 lg:inline-flex xl:left-[8%]"><ArrowLeftIcon size={26} weight="light" aria-hidden="true" /></RoundBtn>
          <RoundBtn onDark onClick={() => api?.scrollNext()} aria-label="Next testimonial" className="absolute right-0 top-1/2 hidden -translate-y-1/2 lg:inline-flex xl:right-[8%]"><ArrowRightIcon size={26} weight="light" aria-hidden="true" /></RoundBtn>
          <div className="mt-6 flex justify-center gap-3 lg:hidden">
            <RoundBtn onDark onClick={() => api?.scrollPrev()} aria-label="Previous testimonial"><ArrowLeftIcon size={22} weight="light" aria-hidden="true" /></RoundBtn>
            <RoundBtn onDark onClick={() => api?.scrollNext()} aria-label="Next testimonial"><ArrowRightIcon size={22} weight="light" aria-hidden="true" /></RoundBtn>
          </div>
        </div>
      </Container>
    </section>
  );
}
