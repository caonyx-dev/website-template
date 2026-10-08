"use client";
// Accommodation like the reference: a parchment band with the eyebrow and Marcellus title over an Embla carousel
// of arch-topped room photographs (three in view on desktop), each carrying its name, occupancy and size on a
// navy gradient and "View details" beneath. The "From —" rate placeholder fades up over the photograph when the
// card is hovered or holds keyboard focus, and stays visible on touch devices. Arrows at the edges. Slides
// scrolled out of view are inert, so keyboard focus never lands on a card the visitor cannot see.
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useSyncExternalStore } from "react";
import { CaretLeftIcon, CaretRightIcon, UsersIcon, RulerIcon } from "@phosphor-icons/react";
import { useReducedMotionSafe } from "@/components/Reveal";
import type { HotelContent } from "../content";
import { Arch, Container, SectionHead } from "./ui";

export default function Rooms({ r }: { r: HotelContent["rooms"] }) {
  const reduce = useReducedMotionSafe();
  // inViewThreshold keeps a slide "in view" only while a real part of it shows, so the card peeking at the edge
  // by a few pixels counts as hidden and goes inert.
  const [ref, api] = useEmblaCarousel({ align: "start", loop: true, duration: reduce ? 0 : 30, inViewThreshold: 0.15 });
  const subscribe = useCallback((cb: () => void) => { if (!api) return () => {}; api.on("select", cb).on("reInit", cb).on("slidesInView", cb); return () => { api.off("select", cb).off("reInit", cb).off("slidesInView", cb); }; }, [api]);
  const read = useCallback(() => (api ? `${api.selectedScrollSnap()}|${api.slidesInView().join(",")}` : "0|0"), [api]);
  const state = useSyncExternalStore(subscribe, read, () => "0|0");
  const [sel, inViewList] = state.split("|");
  const index = Number(sel);
  const inView = new Set(inViewList.split(",").filter(Boolean).map(Number));
  const arrow = "absolute top-1/2 z-[1] inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-primary text-on-dark transition-colors hover:bg-(--t-primary-focus)";
  return (
    <section id="rooms" className="relative z-[1] scroll-mt-20 bg-soft py-24 lg:py-28" aria-labelledby="rooms-title">
      <Container>
        <SectionHead id="rooms-title" eyebrow={r.eyebrow} title={r.title} />
      </Container>
      <div className="relative">
        <button type="button" onClick={() => api?.scrollPrev()} aria-label="Previous rooms" className={`${arrow} left-0`}><CaretLeftIcon size={20} weight="light" aria-hidden="true" /></button>
        <button type="button" onClick={() => api?.scrollNext()} aria-label="Next rooms" className={`${arrow} right-0`}><CaretRightIcon size={20} weight="light" aria-hidden="true" /></button>
        <div ref={ref} className="overflow-hidden px-5 sm:px-12" role="group" aria-roledescription="carousel" aria-label="Rooms">
          <ul className="flex touch-pan-y gap-7" style={{ marginLeft: 0 }}>
            {r.items.map((it, i) => (
              <li key={it.href} className="min-w-0 shrink-0 grow-0 basis-full sm:basis-[calc(50%-14px)] lg:basis-[calc(33.333%-19px)]" aria-roledescription="slide" aria-label={`${i + 1} of ${r.items.length}`} inert={inView.size > 0 && !inView.has(i)}>
                <article className="group">
                  <Arch className="aspect-[4/5] bg-dark">
                    <Image src={it.image.src} alt={it.image.alt} fill placeholder="blur" sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" className="object-cover transition-opacity duration-700 group-hover:opacity-90" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-6 pb-7 pt-20 text-center text-on-dark">
                      <p className="mb-2 text-[15px] font-light tabular-nums text-(--t-body-muted) transition-[opacity,transform] duration-500 [@media(hover:hover)]:translate-y-2 [@media(hover:hover)]:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 motion-reduce:transition-none">{r.from} <span className="font-display text-[20px] text-on-dark">{it.rate}</span> {r.perNight}</p>
                      <h3 className="font-display text-[26px]">{it.name}</h3>
                      <p className="mt-2 flex justify-center gap-5 text-[13px] text-(--t-body-muted)"><span className="inline-flex items-center gap-1.5"><UsersIcon size={14} aria-hidden="true" />{it.guests}</span><span className="inline-flex items-center gap-1.5 tabular-nums"><RulerIcon size={14} aria-hidden="true" />{it.size}</span></p>
                    </div>
                  </Arch>
                  <div className="mt-5 text-center"><Link href={it.href} className="text-[12px] font-medium uppercase tracking-[2px] text-primary no-underline hover:underline">{r.view}<span className="sr-only">: {it.name}</span></Link></div>
                </article>
              </li>
            ))}
          </ul>
        </div>
        <p className="sr-only" aria-live="polite">Room {index + 1} of {r.items.length}</p>
      </div>
    </section>
  );
}
