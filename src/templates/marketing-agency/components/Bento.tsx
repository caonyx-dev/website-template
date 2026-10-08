// The reference closes its middle third with a bento of unequal tiles: a tall portrait, three figures that count
// up from zero, a panel of percentage bars that sweep out, and one dark card carrying the call to action. The
// figures and the bars both wait until the panel scrolls into view; with JavaScript off both render at their
// final value, and under reduced motion nothing moves.
"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Reveal, useReducedMotionSafe } from "@/components/Reveal";
import type { MarketingContent } from "../content";
import { Container, CountUp, Eyebrow, Label, Pill, Title } from "./ui";

export default function Bento({ b }: { b: MarketingContent["bento"] }) {
  const reduce = useReducedMotionSafe();
  const barsRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = barsRef.current;
    if (!el || reduce) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      setInView(true);
      io.disconnect();
    }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <section aria-labelledby="bento-title" className="bg-canvas py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)] xl:items-start xl:gap-12">
          <Reveal><Eyebrow className="xl:pt-2">{b.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.08}><Title id="bento-title" className="max-w-[16ch]">{b.title}</Title></Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-4 lg:grid-rows-[auto_auto]">
          <Reveal from="scale" className="lg:row-span-2">
            <Image
              src={b.image.src}
              alt={b.image.alt}
              placeholder="blur"
              sizes="(min-width: 1024px) 24vw, 100vw"
              className="size-full rounded-[24px] object-cover"
            />
          </Reveal>

          {b.stats.map((s, i) => (
            <Reveal key={s.label} delay={0.06 * i}>
              <div className="flex h-full flex-col justify-between rounded-[24px] bg-(--t-soft) p-6 sm:p-7">
                <CountUp value={s.value} suffix={s.suffix} className="block font-display text-[56px] font-extrabold leading-none tracking-[-0.04em] text-ink sm:text-[64px]" />
                <p className="mt-6 text-[15px] leading-[1.5] text-(--t-body)">{s.label}</p>
              </div>
            </Reveal>
          ))}

          <Reveal className="lg:col-span-2">
            <div ref={barsRef} data-nim-bars={inView ? "in" : undefined} className="h-full rounded-[24px] bg-(--t-soft) p-6 sm:p-7">
              <h3><Label className="text-(--t-mute)">{b.barsTitle}</Label></h3>
              <ul className="m-0 mt-6 grid list-none gap-5 p-0">
                {b.bars.map((bar, i) => (
                  <li key={bar.label}>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-[15px] font-medium text-ink">{bar.label}</span>
                      <span className="font-(family-name:--t-font-mono) text-[13px] tabular-nums text-(--t-mute)">{bar.pct}%</span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-canvas">
                      <div
                        className="nim-bar h-full rounded-full bg-primary"
                        style={{ width: `${bar.pct}%`, animationDelay: `${i * 0.12}s` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-[24px] bg-ink p-6 text-(--t-on-dark) nim-on-dark sm:p-7">
              <div>
                <h3 className="font-display text-[22px] font-bold tracking-[-0.02em]">{b.card.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-(--t-on-dark)/75">{b.card.text}</p>
              </div>
              <Pill href={b.card.cta.href} tone="on-dark" className="mt-7">{b.card.cta.label}</Pill>
            </div>
          </Reveal>
        </div>

        <p className="mt-8 max-w-[80ch] text-[13px] leading-[1.6] text-(--t-mute)">
          <Label className="mr-2 text-ink">Placeholder</Label>{b.note}
        </p>
      </Container>
    </section>
  );
}
