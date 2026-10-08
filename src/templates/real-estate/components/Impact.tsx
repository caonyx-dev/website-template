"use client";
// Impact bento: a tall photograph beside three grey statistic tiles. The figures count up once on first
// view using anime.js, but render their final value on the server so the band is complete without JS.
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Wrap } from "./ui";
import type { RealEstateContent } from "../content";

function Figure({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || done) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        setDone(true);
        (async () => {
          const { animate } = await import("animejs");
          const obj = { n: 0 };
          animate(obj, {
            n: value,
            duration: 1600,
            ease: "outExpo",
            onUpdate: () => {
              el.textContent = Math.round(obj.n).toLocaleString();
            },
          });
        })();
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, done]);

  return (
    <span className="font-display text-[clamp(2.5rem,5.5vw,4.25rem)] font-bold leading-none tracking-[-0.02em] text-ink tabular-nums">
      <span ref={ref}>{value.toLocaleString()}</span>
      <span className="text-primary" aria-hidden>
        {suffix}
      </span>
    </span>
  );
}

export default function Impact({ i }: { i: RealEstateContent["impact"] }) {
  return (
    <section className="bg-canvas py-20 sm:py-24 lg:py-28">
      <Wrap>
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)]">
          <Reveal from="clip" className="overflow-hidden rounded-[30px]">
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[520px]">
              <Image
                src={i.image.src}
                alt={i.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                placeholder="blur"
                className="object-cover"
                style={{ objectPosition: i.image.position }}
              />
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {i.stats.slice(0, 2).map((s) => (
              <Reveal key={s.label} className="rounded-[20px] bg-soft2 p-8 sm:p-9">
                <Figure value={s.value} suffix={s.suffix} />
                <p className="mt-4 font-body text-[16px] text-body">{s.label}</p>
              </Reveal>
            ))}

            <Reveal className="flex flex-col rounded-[20px] bg-soft2 p-8 sm:p-9">
              <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-mute">{i.tileLabel}</p>
              <hr className="mt-4 border-0 border-t border-hairline" />
              <div className="mt-auto pt-12">
                <Figure value={i.stats[2].value} suffix={i.stats[2].suffix} />
                <p className="mt-4 font-body text-[16px] text-body">{i.stats[2].label}</p>
              </div>
            </Reveal>

            <Reveal from="clip" className="relative hidden overflow-hidden rounded-[20px] sm:block">
              <div className="relative h-full min-h-[200px]">
                <Image
                  src={i.tile.src}
                  alt={i.tile.alt}
                  fill
                  sizes="(max-width: 640px) 0px, 24vw"
                  placeholder="blur"
                  className="object-cover opacity-90"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <p className="mt-6 font-body text-[13px] leading-[1.5] text-mute">{i.note}</p>
      </Wrap>
    </section>
  );
}
