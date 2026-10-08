"use client";
// 07 The reference's full-bleed photographic band with the headline over it and the slate watch card in the
// lower right, which the stats card then overlaps. Nothing autoplays.
import Image from "next/image";
import { useRef } from "react";
import { PlayIcon, XIcon } from "@phosphor-icons/react";
import type { LogisticsContent } from "../content";
import { Btn, Container } from "./ui";

export default function TrackBand({ t }: { t: LogisticsContent["track"] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <section className="log-on-dark bg-canvas" aria-labelledby="trackband-title">
      <Container>
        <div className="relative overflow-hidden rounded-[25px] bg-dark">
          <Image src={t.image.src} alt={t.image.alt} fill placeholder="blur" sizes="(min-width: 1380px) 1340px, 100vw" className="object-cover" />
          <span aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--t-dark)_72%,transparent)_0%,color-mix(in_srgb,var(--t-dark)_40%,transparent)_55%,transparent_90%)]" />
          <div className="relative flex min-h-[420px] flex-col justify-end px-5 py-12 sm:px-10 lg:min-h-[620px] lg:px-16 lg:py-20">
            <h2 id="trackband-title" className="max-w-[14ch] font-display text-[32px] font-bold uppercase leading-[1.05] tracking-[-0.03em] text-white text-balance sm:text-[48px] lg:text-[64px]">
              {t.titleLines.map((l) => <span key={l} className="block">{l}</span>)}
            </h2>
            <p className="mt-6 max-w-[46ch] text-[17px] leading-[1.75] text-white/90 text-pretty">{t.lead}</p>
            <div className="mt-9"><Btn href={t.cta.href} tone="outline-dark">{t.cta.label}</Btn></div>
          </div>
          <button type="button" onClick={() => dialog.current?.showModal()} className="absolute bottom-24 right-6 hidden items-center gap-4 rounded-[25px] bg-dark/90 px-8 py-7 text-[17px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-primary hover:text-(--t-on-primary) lg:inline-flex">
            <PlayIcon size={26} weight="fill" aria-hidden="true" />Watch video<span className="sr-only">: {t.video.label}</span>
          </button>
        </div>
        {/* The trigger the reference hides on small screens; kept reachable here. */}
        <button type="button" onClick={() => dialog.current?.showModal()} className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-[25px] bg-dark px-8 py-5 text-[16px] font-semibold text-white transition-colors hover:bg-primary hover:text-(--t-on-primary) lg:hidden">
          <PlayIcon size={22} weight="fill" aria-hidden="true" />Watch video<span className="sr-only">: {t.video.label}</span>
        </button>
      </Container>

      <dialog ref={dialog} aria-labelledby="track-film" className="m-auto w-[min(92vw,820px)] rounded-[25px] bg-canvas p-0 text-ink backdrop:bg-(--t-dark)/70 [overscroll-behavior:contain]">
        <div className="flex items-center justify-between gap-6 border-b border-hairline p-5">
          <h2 id="track-film" className="font-display text-[20px] font-bold uppercase">{t.video.dialogTitle}</h2>
          <button type="button" onClick={() => dialog.current?.close()} aria-label="Close" className="inline-flex size-11 items-center justify-center rounded-[14px] bg-soft transition-colors hover:bg-soft2"><XIcon size={20} weight="bold" aria-hidden="true" /></button>
        </div>
        <p className="p-6 text-[16px] leading-[1.7] text-(--t-ink-muted)">{t.video.dialogText}</p>
      </dialog>
    </section>
  );
}
