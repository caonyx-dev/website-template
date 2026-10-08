// The reference's opening: a slideshow on a pale band, the photograph holding the left of the frame and the copy
// block set against the empty right half, with dot controls beneath. It advances on a timer that stops on hover,
// on focus and under reduced motion, and every slide is in the DOM so the page is complete with JavaScript off.
"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { CaretLeftIcon, CaretRightIcon, PauseIcon, PlayIcon } from "@phosphor-icons/react";
import { useReducedMotionSafe } from "@/components/Reveal";
import type { RetailContent } from "../content";
import { Btn, Container } from "./ui";

export default function Hero({ h }: { h: RetailContent["hero"] }) {
  const reduce = useReducedMotionSafe();
  const [i, setI] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [stopped, setStopped] = useState(false);
  const paused = hovered || stopped;
  const n = h.slides.length;

  const go = useCallback((next: number) => setI(((next % n) + n) % n), [n]);

  useEffect(() => {
    if (reduce || paused || n < 2) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 7000);
    return () => clearInterval(t);
  }, [reduce, paused, n]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label={h.label}
      className="relative overflow-hidden bg-(--t-soft)"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setHovered(true)}
      onBlurCapture={() => setHovered(false)}
    >
      <div aria-live={paused ? "polite" : "off"}>
      {h.slides.map((s, idx) => (
        <div
          key={s.lines.join(" ")}
          role="group"
          aria-roledescription="slide"
          aria-label={`${idx + 1} of ${n}: ${s.lines.join(" ")}`}
          hidden={idx !== i}
          className="relative"
        >
          <div className="relative min-h-[460px] sm:min-h-[560px] lg:min-h-[640px]">
            <Image
              src={s.image.src}
              alt={s.image.alt}
              priority={idx === 0}
              placeholder="blur"
              sizes="100vw"
              className={`absolute inset-0 size-full object-cover object-top ${idx === i ? "rst-pan" : ""}`}
            />
            {/* Each photograph was shot with one half deliberately empty, so at desktop the copy simply sits in
                that half and the image is never washed out. Below `lg` the copy overlays the foot of the frame,
                where it does need a scrim to stay readable. */}
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/45 to-transparent lg:hidden" />

            <Container className="relative flex min-h-[460px] items-end pb-14 sm:min-h-[560px] sm:pb-16 lg:min-h-[640px] lg:items-center lg:pb-0">
              <div className={`rst-rise w-full lg:w-[44%] ${s.side === "right" ? "lg:ml-auto" : "lg:mr-auto"}`}>
                {s.eyebrow && (
                  <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary">{s.eyebrow}</p>
                )}
                {idx === i ? (
                  <h1 className="mt-3 font-display text-[clamp(34px,6.4vw,70px)] font-bold leading-[1.08] tracking-[-0.03em] text-ink">
                    {s.lines.map((line) => <span key={line} className="block">{line}</span>)}
                  </h1>
                ) : (
                  <p className="mt-3 font-display text-[clamp(34px,6.4vw,70px)] font-bold leading-[1.08] tracking-[-0.03em] text-ink">
                    {s.lines.map((line) => <span key={line} className="block">{line}</span>)}
                  </p>
                )}
                {s.lead && <p className="mt-4 max-w-[46ch] text-[16px] leading-[1.6] text-(--t-body) sm:text-[17px]">{s.lead}</p>}
                <div className="mt-7 flex flex-wrap gap-3">
                  {s.ctas.map((c, ci) => (
                    <Btn key={c.label} href={c.href} tone={ci === 0 ? "primary" : "outline"} size="lg">{c.label}</Btn>
                  ))}
                </div>
              </div>
            </Container>
          </div>
        </div>
      ))}
      </div>

      {n > 1 && (
        <Container className="pointer-events-none absolute inset-x-0 bottom-5 flex items-center justify-center gap-3 sm:bottom-7">
          <button
            type="button"
            onClick={() => go(i - 1)}
            className="pointer-events-auto inline-flex size-11 items-center justify-center rounded-full bg-canvas/90 text-ink transition-colors duration-200 hover:bg-canvas"
          >
            <CaretLeftIcon size={16} weight="bold" aria-hidden="true" /><span className="sr-only">{h.prev}</span>
          </button>
          <div className="pointer-events-auto flex items-center gap-2">
            {h.slides.map((s, idx) => (
              <button
                key={s.lines.join(" ")}
                type="button"
                onClick={() => go(idx)}
                aria-current={idx === i}
                className="group/dot inline-flex size-11 items-center justify-center"
              >
                <span
                  aria-hidden="true"
                  className={`block h-1.5 w-7 origin-center rounded-full transition-[transform,opacity] duration-200 group-hover/dot:opacity-100 motion-reduce:transition-none ${idx === i ? "scale-x-100 bg-primary" : "scale-x-[0.214] bg-ink/40 opacity-70"}`}
                />
                <span className="sr-only">Show slide {idx + 1}: {s.lines.join(" ")}</span>
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(i + 1)}
            className="pointer-events-auto inline-flex size-11 items-center justify-center rounded-full bg-canvas/90 text-ink transition-colors duration-200 hover:bg-canvas"
          >
            <CaretRightIcon size={16} weight="bold" aria-hidden="true" /><span className="sr-only">{h.next}</span>
          </button>
          {/* Hover and focus pause it, but neither is a control anyone can find; moving content that
              runs longer than five seconds needs this. Hidden under reduced motion, where it never moves. */}
          {!reduce && (
            <button
              type="button"
              onClick={() => setStopped((v) => !v)}
              aria-pressed={stopped}
              className="pointer-events-auto inline-flex size-11 items-center justify-center rounded-full bg-canvas/90 text-ink transition-colors duration-200 hover:bg-canvas"
            >
              {stopped ? <PlayIcon size={14} weight="fill" aria-hidden="true" /> : <PauseIcon size={14} weight="fill" aria-hidden="true" />}
              <span className="sr-only">{h.pause}</span>
            </button>
          )}
        </Container>
      )}
    </section>
  );
}
