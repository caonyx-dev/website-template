// The reference's opening, and the one place this template is bold: a drawn sky rather than a photograph, a
// poster headline running the full width with a pill-shaped photograph set into the last line, a slowly
// turning "watch" disc, a flight path that draws itself under the type, and the social column down the left
// edge. Every line rises through its own mask; reduced motion skips all of it and nothing autoplays.
"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRightIcon, XIcon } from "@phosphor-icons/react";
import type { TravelContent } from "../content";
import { Container, Poster, RuleLink } from "./ui";

export default function Hero({ h }: { h: TravelContent["hero"] }) {
  const [film, setFilm] = useState(false);
  const filmRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!film) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setFilm(false); openerRef.current?.focus(); return; }
      if (e.key !== "Tab") return;
      const stops = filmRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      if (!stops?.length) return;
      const first = stops[0];
      const last = stops[stops.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [film]);

  const ring = h.watch.ring;

  return (
    <section aria-labelledby="hero-title" className="tv-sky relative -mt-[88px] overflow-hidden pb-10 pt-[88px] sm:pb-14">
      {/* Two soft forms drifting behind the type. Decoration, drawn rather than fetched. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="tv-cloud absolute left-[4%] top-[12%] size-[38vw] max-w-[520px] rounded-full bg-white/55 blur-3xl" />
        <div className="tv-cloud-2 absolute right-[6%] top-[4%] size-[30vw] max-w-[420px] rounded-full bg-white/50 blur-3xl" />
      </div>

      {/* The reference runs its social links vertically down the left edge. This column is decoration —
          the real, clickable list is rendered at the foot of the section at every width. */}
      <ul aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 m-0 hidden w-5 -translate-y-1/2 list-none flex-col items-center gap-7 p-0 2xl:flex">
        {h.socials.map((s, i) => (
          <li key={s.label} className="flex flex-col items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/70">
            {i > 0 && <span aria-hidden="true" className="block h-10 w-px bg-ink/25" />}
            <span className="[writing-mode:vertical-rl]">{s.label}</span>
          </li>
        ))}
      </ul>

      <Container className="relative pt-6 sm:pt-10">
        <p translate="no" className="tv-up text-right font-display text-[clamp(22px,3vw,40px)] uppercase leading-[1.1] text-ink sm:max-w-[42%]">
          <span className="inline-block border-b border-ink/40 pb-2">
            {h.eyebrow.map((line) => <span key={line} className="block">{line}</span>)}
          </span>
        </p>

        <h1 id="hero-title" aria-label={h.lines.join(" ")} className="mt-8 sm:mt-10">
          <Poster as="span" className="block text-ink">
            <span className="tv-line"><span style={{ animationDelay: "0.05s" }}>{h.lines[0]}</span></span>
            <span className="tv-line"><span style={{ animationDelay: "0.18s" }}>{h.lines[1]}</span></span>
            {/* The flex row sits outside the mask: `.tv-line > span` is `display: block`, and a layout set on
                the masked span itself would simply lose to it. */}
            <span className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="tv-line"><span style={{ animationDelay: "0.31s" }}>{h.lines[2]}</span></span>
              {/* The reference sets a pill-shaped photograph into the last line of the headline. */}
              {/* Decorative in this position: the headline already carries the meaning, and a described
                  photograph inside an `h1` lands in the middle of the page's own name. */}
              <Image
                src={h.image.src}
                alt=""
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 230px, 150px"
                className="tv-up h-[max(0.56em,46px)] w-[150px] shrink-0 rounded-full object-cover sm:w-[190px] lg:w-[230px]"
                style={{ animationDelay: "0.44s" }}
              />
            </span>
          </Poster>
        </h1>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:items-start lg:gap-16">
          {/* The flight path, drawn once under the headline. */}
          <div className="tv-up order-2 lg:order-1" style={{ animationDelay: "0.5s" }}>
            <svg viewBox="0 0 420 120" aria-hidden="true" className="h-auto w-full max-w-[420px]">
              <path
                className="tv-path"
                d="M8 10 C 60 118, 320 132, 412 34"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="1"
                pathLength={1}
                strokeLinecap="round"
                opacity="0.6"
              />
              <path d="M2 2 L26 12 L10 14 L6 26 Z" fill="currentColor" transform="translate(2,0) rotate(18)" />
            </svg>
            {/* Real text rather than an SVG label, so it reflows, translates and follows the reader's
                text-size setting. */}
            <p className="-mt-3 pl-[32%] text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/70">{h.scroll}</p>
          </div>

          <div className="tv-up order-1 lg:order-2" style={{ animationDelay: "0.42s" }}>
            <p className="max-w-[46ch] text-[17px] leading-[1.65] text-(--t-body) sm:text-[19px]">{h.lead}</p>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <RuleLink href={h.cta.href}>{h.cta.label}</RuleLink>

              <button
                ref={openerRef}
                type="button"
                onClick={() => setFilm(true)}
                className="tv-disc group relative inline-flex size-[104px] shrink-0 items-center justify-center rounded-full bg-(--t-primary-deep) text-(--t-on-primary) transition-colors duration-200 hover:bg-(--t-primary-active)"
              >
                <span aria-hidden="true" className="tv-spin absolute inset-0">
                  <svg viewBox="0 0 100 100" className="size-full">
                    <defs><path id="tv-ring" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" /></defs>
                    <text className="fill-current" style={{ fontSize: 10.5, letterSpacing: 1.4 }}>
                      <textPath href="#tv-ring">{ring}</textPath>
                    </text>
                  </svg>
                </span>
                <ArrowUpRightIcon size={22} weight="bold" aria-hidden="true" />
                <span className="sr-only">{h.watch.label}</span>
              </button>
            </div>
          </div>
        </div>
      </Container>

      {film && (
        <>
          <button type="button" aria-hidden="true" tabIndex={-1} onClick={() => setFilm(false)} className="fixed inset-0 z-50 bg-ink/60" />
          <div
            ref={filmRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="film-title"
            className="fixed left-1/2 top-1/2 z-50 max-h-[88vh] w-[min(92vw,620px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto overscroll-contain rounded-2xl bg-canvas p-7 sm:p-9"
          >
            <div className="flex items-start justify-between gap-5">
              <h2 id="film-title" className="font-display text-[26px] uppercase text-ink">{h.watch.dialogTitle}</h2>
              <button
                ref={closeRef}
                type="button"
                onClick={() => { setFilm(false); openerRef.current?.focus(); }}
                className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-(--t-control) text-ink transition-colors duration-200 hover:border-ink"
              >
                <XIcon size={18} aria-hidden="true" /><span className="sr-only">{h.watch.close}</span>
              </button>
            </div>
            <p className="mt-4 text-[16px] leading-[1.65] text-(--t-body)">{h.watch.dialogText}</p>
            <div aria-hidden="true" className="mt-6 flex aspect-video items-center justify-center rounded-xl bg-(--t-soft) text-[13px] font-semibold uppercase tracking-[0.12em] text-(--t-muted)">
              Film goes here
            </div>
          </div>
        </>
      )}

      {/* The social column is decorative above; these are the real links, available to everyone. */}
      <Container className="relative mt-8">
        <ul className="m-0 flex list-none flex-wrap gap-x-6 gap-y-2 p-0">
          {h.socials.map((s) => (
            <li key={s.label}>
              <Link href={s.href} className="inline-flex min-h-9 items-center text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/70 no-underline transition-colors duration-200 hover:text-(--t-primary-deep)">{s.label}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
