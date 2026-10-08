"use client";
// 04 The reference's about band: eyebrow and two-tone headline, two paragraphs, a 2x2 arrow list, the "call to
// ask" line with both numbers set large, a dotted rule and the partner's name. Beside it the film still with a
// brass play button opening a dialog, then the three counters. Nothing autoplays.
import { useRef } from "react";
import Image from "next/image";
import { ArrowRightIcon, PlayIcon, XIcon } from "@phosphor-icons/react";
import { Reveal } from "@/components/Reveal";
import type { LawContent } from "../content";
import { Container, Eyebrow, Num, Title } from "./ui";

export default function About({ a }: { a: LawContent["about"] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <section id="approach" className="scroll-mt-[112px] bg-canvas py-20 lg:py-28" aria-labelledby="about-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-16">
          <div>
            <Reveal><Eyebrow>{a.eyebrow}</Eyebrow></Reveal>
            <Reveal delay={0.08}><Title id="about-title" lead={a.titleLead} em={a.titleEm} className="mt-7 max-w-[15ch]" /></Reveal>
            {a.paras.map((p, i) => <Reveal key={i} delay={0.16 + i * 0.07} className="mt-6"><p className="max-w-[56ch] text-[16px] leading-[1.75] text-(--t-ink-secondary)">{p}</p></Reveal>)}

            <Reveal delay={0.3}>
              <ul role="list" className="mt-9 grid list-none gap-x-8 gap-y-4 p-0 sm:grid-cols-2">
                {a.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-[16px] text-ink">
                    <ArrowRightIcon size={17} weight="light" aria-hidden="true" className="shrink-0 text-(--t-accent-deep)" />{p}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.38}>
              <p className="mt-10 flex flex-wrap items-baseline gap-x-5 gap-y-2 text-[16px] text-(--t-ink-secondary)">
                {a.callLabel}
                {a.phones.map((n) => (
                  <a key={n} href={`tel:${n.replace(/[^\d+]/g, "")}`} className="font-display text-[28px] font-semibold text-ink no-underline transition-colors hover:text-(--t-accent-deep)"><Num>{n}</Num></a>
                ))}
              </p>
            </Reveal>

            <Reveal delay={0.44}>
              <div className="mt-7 border-t border-dashed border-hairline pt-5">
                <p className="font-display text-[24px] font-semibold text-ink">{a.signature}</p>
                <p className="text-[15px] text-mute">{a.signatureRole}</p>
              </div>
            </Reveal>
          </div>

          <div className="grid content-start gap-10">
            <Reveal from="clip">
              <div className="relative">
                <span className="relative block overflow-hidden rounded-lg" style={{ aspectRatio: "4 / 3" }}>
                  <Image src={a.video.image.src} alt={a.video.image.alt} fill placeholder="blur" sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                </span>
                <button type="button" onClick={() => dialog.current?.showModal()} className="absolute left-1/2 top-1/2 inline-flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[linear-gradient(100deg,var(--t-accent),var(--t-accent-deep))] text-white shadow-lift transition-[filter] duration-200 hover:brightness-110 active:brightness-95">
                  <PlayIcon size={26} weight="fill" aria-hidden="true" /><span className="sr-only">{a.video.buttonLabel}</span>
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <dl className="m-0 grid grid-cols-1 gap-y-6 border-t border-hairline pt-8 sm:grid-cols-3 sm:gap-0">
                {a.counters.map((c) => (
                  <div key={c.label} className="flex flex-col sm:border-r sm:border-hairline sm:px-5 sm:first:pl-0 sm:last:border-r-0">
                    <dt className="order-2 mt-2 text-[15px] text-mute">{c.label}</dt>
                    <dd className="order-1 m-0 font-display text-[40px] font-semibold leading-none text-(--t-accent-deep)"><Num>{c.value}</Num></dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </Container>

      <dialog ref={dialog} aria-labelledby="film-title" className="m-auto w-[min(92vw,820px)] rounded-lg bg-canvas p-0 text-ink shadow-lift backdrop:bg-(--t-dark)/70">
        <div className="flex items-center justify-between gap-6 border-b border-hairline p-5">
          <h2 id="film-title" className="font-display text-[22px] font-semibold">{a.video.dialogTitle}</h2>
          <button type="button" onClick={() => dialog.current?.close()} aria-label="Close" className="inline-flex size-10 items-center justify-center rounded-sm border border-hairline-strong transition-colors hover:border-accent hover:text-(--t-accent-deep) active:bg-soft"><XIcon size={20} weight="light" aria-hidden="true" /></button>
        </div>
        <p className="p-6 text-[16px] leading-[1.7] text-(--t-ink-secondary)">{a.video.dialogText}</p>
      </dialog>
    </section>
  );
}
