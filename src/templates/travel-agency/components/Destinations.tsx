// The reference's destination rail: the head block on the left and tall cards running off the right edge.
// Built on a scroll-snap row rather than a carousel library — it is already swipeable, already keyboard
// reachable, and the arrows simply scroll it. Each card carries one orange "from" badge, which this
// template's DESIGN.md allows exactly once per card and never without the footnote beneath the rail.
"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon, MapPinIcon } from "@phosphor-icons/react";
import { Reveal, useReducedMotionSafe } from "@/components/Reveal";
import { CURRENCY, LOCALE, type TravelContent } from "../content";
import { Btn, Container, Eyebrow, PriceBadge, Title, money } from "./ui";

export default function Destinations({ d }: { d: TravelContent["destinations"] }) {
  const reduce = useReducedMotionSafe();
  const rail = useRef<HTMLUListElement>(null);
  const nudge = (dir: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 640), behavior: reduce ? "auto" : "smooth" });
  };

  if (!d.items.length) return null;
  return (
    <section id="destinations" aria-labelledby="dest-title" className="scroll-mt-28 overflow-hidden bg-(--t-soft) pb-16 sm:pb-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.6fr)] lg:items-center lg:gap-14">
          <Reveal>
            <div>
              <Eyebrow><MapPinIcon size={14} weight="fill" aria-hidden="true" />{d.eyebrow}</Eyebrow>
              <Title id="dest-title" className="mt-7 max-w-[10ch]">{d.title}</Title>
              <p className="mt-5 max-w-[42ch] text-[16px] leading-[1.65] text-(--t-body)">{d.lead}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Btn href={d.cta.href} tone="outline" size="lg">{d.cta.label}</Btn>
                <span className="flex gap-2">
                  <button type="button" onClick={() => nudge(-1)} className="inline-flex size-12 items-center justify-center rounded-full border border-(--t-control) text-ink transition-colors duration-200 hover:border-ink">
                    <ArrowLeftIcon size={16} weight="bold" aria-hidden="true" /><span className="sr-only">{d.prev}</span>
                  </button>
                  <button type="button" onClick={() => nudge(1)} className="inline-flex size-12 items-center justify-center rounded-full border border-(--t-control) text-ink transition-colors duration-200 hover:border-ink">
                    <ArrowRightIcon size={16} weight="bold" aria-hidden="true" /><span className="sr-only">{d.next}</span>
                  </button>
                </span>
              </div>
            </div>
          </Reveal>

          {/* The rail bleeds past the container on the right, as the reference's does. */}
          <ul
            ref={rail}
            tabIndex={0}
            aria-label={d.title}
            className="m-0 -mr-5 flex list-none snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain p-0 pb-2 sm:-mr-8 lg:-mr-[max(0px,calc((100vw-1320px)/2+2rem))]"
          >
            {d.items.map((item) => (
              <li key={item.name} className="w-[76vw] max-w-[330px] shrink-0 snap-start sm:w-[330px]">
                <article className="tv-lift group relative isolate flex h-full min-h-[460px] flex-col justify-end overflow-hidden rounded-[20px] p-6 text-(--t-on-dark) tv-on-dark sm:min-h-[520px]">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    placeholder="blur"
                    sizes="330px"
                    className="absolute inset-0 -z-10 size-full object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/10" />

                  <p className="absolute left-5 top-5 flex flex-wrap items-center gap-2">
                    <PriceBadge>from {money(item.from, LOCALE, CURRENCY)} pp</PriceBadge>
                    <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1.5 text-[12px] font-semibold text-ink">{item.nights}</span>
                  </p>

                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-(--t-on-dark)/80">{item.region}</p>
                  <h3 className="mt-2 font-display text-[28px] uppercase leading-[1.1]">
                    <Link href={item.href} className="text-(--t-on-dark) no-underline before:absolute before:inset-0 before:content-['']">{item.name}</Link>
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-[1.6] text-(--t-on-dark)/90">{item.text}</p>
                  <span aria-hidden="true" className="mt-5 inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-white/70 px-6 text-[14px] font-semibold transition-colors duration-200 group-hover:bg-white/15">
                    Details <ArrowRightIcon size={15} weight="bold" />
                  </span>
                </article>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 max-w-[90ch] text-[12px] leading-[1.6] text-(--t-muted)">
          <span className="font-semibold uppercase tracking-[0.08em] text-ink">Placeholder</span>{" "}{d.footnote}
        </p>
      </Container>
    </section>
  );
}
