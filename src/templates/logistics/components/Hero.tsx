"use client";
// 02 The reference's hero: a 25px rounded photographic card that crossfades between slides, with the uppercase
// headline rising line by line, prev/next arrow buttons on the edges, a slide counter with progress rails, and
// the tracking card and watch card overlapping the card's lower-left corner.
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon, PlayIcon, XIcon, MagnifyingGlassIcon, PackageIcon, ArrowUpRightIcon } from "@phosphor-icons/react";
import { useReducedMotionSafe } from "@/components/Reveal";
import type { LogisticsContent } from "../content";
import { Btn, Container, Mono } from "./ui";

export default function Hero({ h }: { h: LogisticsContent["hero"] }) {
  const [i, setI] = useState(0);
  const n = h.slides.length;
  const go = useCallback((next: number) => setI(((next % n) + n) % n), [n]);
  const reduce = useReducedMotionSafe();
  const [paused, setPaused] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const live = useRef<HTMLParagraphElement>(null);

  // The reference advances on a timer. It stops under reduced motion, on hover and on focus inside the hero.
  useEffect(() => {
    if (reduce || paused) return;
    const t = setInterval(() => go(i + 1), 7000);
    return () => clearInterval(t);
  }, [i, go, reduce, paused]);

  const slide = h.slides[i];

  // Tracking, uncontrolled: the value is only read on submit.
  const [result, setResult] = useState<null | "none" | "empty" | { code: string; label: string; stage: string }>(null);
  function track(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const code = String(new FormData(e.currentTarget).get("tracking") ?? "").trim().toUpperCase();
    if (!code) { setResult("empty"); document.getElementById("tracking")?.focus(); return; }
    setResult(h.track.statuses.find((s) => s.code === code) ?? "none");
  }

  return (
    <section id="top" className="log-on-dark scroll-mt-[112px] bg-canvas pb-6" aria-labelledby="hero-title" aria-roledescription="carousel" aria-label="Featured services"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
      <Container>
        <div className="relative overflow-hidden rounded-[25px] bg-dark">
          {h.slides.map((s, k) => (
            <div key={k} aria-hidden={k !== i} className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${k === i ? "opacity-100" : "opacity-0"}`}>
              <Image src={s.image.src} alt={k === i ? s.image.alt : ""} fill priority={k === 0} placeholder="blur" sizes="(min-width: 1380px) 1340px, 100vw" className={`object-cover ${k === i ? "log-zoom" : ""}`} />
            </div>
          ))}
          <span aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--t-dark)_78%,transparent)_0%,color-mix(in_srgb,var(--t-dark)_62%,transparent)_42%,color-mix(in_srgb,var(--t-dark)_18%,transparent)_80%)]" />

          <div className="relative flex min-h-[520px] flex-col justify-center px-5 pb-28 pt-16 sm:px-10 lg:min-h-[720px] lg:px-16 lg:py-24">
            <div key={i} className="max-w-[min(100%,920px)]">
              <h1 id="hero-title" className="font-display text-[38px] font-bold uppercase leading-[1.05] tracking-[-0.03em] text-white sm:text-[58px] lg:text-[76px]">
                {slide.titleLines.map((line, k) => <span key={line} className="log-line"><span style={{ animationDelay: `${0.1 + k * 0.1}s` }}>{line}{k < slide.titleLines.length - 1 ? " " : ""}</span></span>)}
              </h1>
              <p className="log-up mt-7 max-w-[46ch] text-[17px] leading-[1.75] text-white/90 text-pretty" style={{ animationDelay: ".34s" }}>{slide.lead}</p>
              <div className="log-up mt-9" style={{ animationDelay: ".44s" }}><Btn href={slide.cta.href} tone="outline-dark">{slide.cta.label}</Btn></div>
            </div>
          </div>

          {/* Edge arrows, as the reference places them. */}
          <button type="button" onClick={() => go(i - 1)} aria-label="Previous slide" className="absolute left-0 top-1/2 hidden size-14 -translate-y-1/2 items-center justify-center rounded-r-[25px] bg-canvas text-ink transition-colors hover:bg-primary hover:text-(--t-on-primary) lg:inline-flex lg:size-[72px]"><ArrowLeftIcon size={22} weight="bold" aria-hidden="true" /></button>
          <button type="button" onClick={() => go(i + 1)} aria-label="Next slide" className="absolute right-0 top-1/2 hidden size-14 -translate-y-1/2 items-center justify-center rounded-l-[25px] bg-canvas text-ink transition-colors hover:bg-primary hover:text-(--t-on-primary) lg:inline-flex lg:size-[72px]"><ArrowRightIcon size={22} weight="bold" aria-hidden="true" /></button>

          {/* Counter and progress rails. */}
          <div className="absolute bottom-6 right-5 flex items-center gap-3 sm:right-6 sm:gap-4 lg:bottom-8">
            <Mono className="text-[15px] text-white">{String(i + 1).padStart(2, "0")} <span className="text-white/50">/ {String(n).padStart(2, "0")}</span></Mono>
            <span className="flex gap-2">{h.slides.map((_, k) => <button key={k} type="button" onClick={() => go(k)} aria-label={`Go to slide ${k + 1}`} className="group py-3"><span aria-hidden="true" className={`block h-[3px] w-8 rounded-full transition-colors sm:w-10 ${k === i ? "bg-primary" : "bg-white/40 group-hover:bg-white"}`} /></button>)}</span>
            <span className="flex overflow-hidden rounded-[14px] bg-canvas lg:hidden">
              <button type="button" onClick={() => go(i - 1)} aria-label="Previous slide" className="inline-flex size-11 items-center justify-center text-ink transition-colors hover:bg-primary hover:text-(--t-on-primary)"><ArrowLeftIcon size={17} weight="bold" aria-hidden="true" /></button>
              <button type="button" onClick={() => go(i + 1)} aria-label="Next slide" className="inline-flex size-11 items-center justify-center text-ink transition-colors hover:bg-primary hover:text-(--t-on-primary)"><ArrowRightIcon size={17} weight="bold" aria-hidden="true" /></button>
            </span>
          </div>
          <p ref={live} role="status" aria-live="polite" className="sr-only">Slide {i + 1} of {n}: {slide.titleLines.join(" ")}</p>
        </div>

        {/* The two cards overlapping the hero's lower-left corner. */}
        <div className="relative z-10 -mt-6 grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] lg:-mt-20 lg:ml-10 lg:w-[min(820px,80%)]">
          <div className="rounded-[25px] bg-soft p-7 lg:p-8">
            <h2 className="font-display text-[20px] font-bold text-ink">{h.track.title}</h2>
            <form onSubmit={track} className="mt-5">
              <label htmlFor="tracking" className="sr-only">{h.track.label}</label>
              <div className="flex items-center gap-2 rounded-[18px] border border-(--t-control) bg-canvas p-1.5 pl-4 transition-colors focus-within:border-primary">
                <MagnifyingGlassIcon size={19} weight="bold" aria-hidden="true" className="shrink-0 text-mute" />
                <input id="tracking" name="tracking" required spellCheck={false} autoComplete="off" placeholder={h.track.placeholder} aria-describedby="tracking-help"
                  aria-invalid={result === "none" || result === "empty" ? true : undefined}
                  className="h-11 min-w-0 flex-1 bg-transparent font-(family-name:--t-font-mono) text-[15px] uppercase tracking-[0.04em] text-ink placeholder:normal-case placeholder:tracking-normal placeholder:text-mute focus:outline-none" />
                <button type="submit" aria-label={h.track.submit} className="inline-flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-dark text-white transition-colors hover:bg-primary hover:text-(--t-on-primary)"><ArrowUpRightIcon size={19} weight="bold" aria-hidden="true" /></button>
              </div>
              <p id="tracking-help" className="mt-2 text-[13px] text-(--t-ink-muted)">{h.track.help}</p>
            </form>
            <div role="status" aria-live="polite" className="mt-4 empty:mt-0">
              {result && result !== "none" && result !== "empty" && (
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-[14px] bg-canvas p-4 text-[14px]">
                  <PackageIcon size={20} weight="bold" aria-hidden="true" className="shrink-0 text-primary" />
                  <Mono className="font-medium text-ink">{result.code}</Mono>
                  <span className="rounded-full bg-(--t-primary-soft) px-2.5 py-0.5 text-[13px] font-semibold text-(--t-warning-strong)">{result.label}</span>
                  <Mono className="w-full text-(--t-ink-muted)">{result.stage}</Mono>
                </p>
              )}
              {result === "none" && <p className="rounded-[14px] bg-canvas p-4 text-[14px] text-(--t-ink-muted)">No consignment matches that reference. Check it against your booking confirmation, or call the operations desk.</p>}
              {result === "empty" && <p className="rounded-[14px] bg-canvas p-4 text-[14px] text-(--t-error)">Enter a consignment reference.</p>}
            </div>
          </div>

          <button type="button" onClick={() => dialog.current?.showModal()} className="log-on-dark flex min-h-[112px] items-center justify-center gap-4 rounded-[25px] bg-dark px-8 text-[17px] font-semibold text-white transition-colors hover:bg-primary hover:text-(--t-on-primary) sm:min-w-[230px]">
            <PlayIcon size={26} weight="fill" aria-hidden="true" />Watch video<span className="sr-only">: {h.video.label}</span>
          </button>
        </div>
      </Container>

      <dialog ref={dialog} aria-labelledby="hero-film" className="m-auto w-[min(92vw,820px)] rounded-[25px] bg-canvas p-0 text-ink backdrop:bg-(--t-dark)/70 [overscroll-behavior:contain]">
        <div className="flex items-center justify-between gap-6 border-b border-hairline p-5">
          <h2 id="hero-film" className="font-display text-[20px] font-bold uppercase">{h.video.dialogTitle}</h2>
          <button type="button" onClick={() => dialog.current?.close()} aria-label="Close" className="inline-flex size-11 items-center justify-center rounded-[14px] bg-soft transition-colors hover:bg-soft2"><XIcon size={20} weight="bold" aria-hidden="true" /></button>
        </div>
        <p className="p-6 text-[16px] leading-[1.7] text-(--t-ink-muted)">{h.video.dialogText}</p>
      </dialog>
    </section>
  );
}
