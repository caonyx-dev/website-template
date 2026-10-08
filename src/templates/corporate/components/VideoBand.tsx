"use client";
// Video band: a full-width photograph under a dark overlay, the round PLAY button opening a dialog
// (no autoplay: the dialog holds a video placeholder until the company supplies a file), and a bottom row
// with two lines of copy and the blue button. The dialog closes with its button or Escape.
import Image from "next/image";
import { useRef } from "react";
import { XIcon } from "@phosphor-icons/react";
import type { CorporateContent } from "../content";
import { Btn, Frame } from "./ui";

export default function VideoBand({ v }: { v: CorporateContent["video"] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <section className="relative overflow-hidden" aria-label="Company video">
      <Image src={v.poster.src} alt={v.poster.alt} fill placeholder="blur" sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <Frame className="relative px-4 sm:px-8 lg:px-[120px]">
        <div className="flex min-h-[520px] items-center justify-center lg:min-h-[560px]">
          <button type="button" onClick={() => dialog.current?.showModal()} className="inline-flex h-[150px] w-[150px] items-center justify-center rounded-full bg-soft text-[18px] font-semibold uppercase tracking-[.1em] text-ink transition-transform hover:scale-105">{v.play}</button>
        </div>
        <div className="grid items-center gap-6 border-t border-white/30 py-10 text-white lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
          <p className="max-w-[34ch] text-[18px] leading-[1.5]">{v.left}</p>
          <Btn href={v.cta.href}>{v.cta.label}</Btn>
          <p className="max-w-[34ch] text-[18px] leading-[1.5] lg:justify-self-end">{v.right}</p>
        </div>
      </Frame>
      <dialog ref={dialog} aria-label="Company video" className="m-auto w-[min(1000px,92vw)] rounded-md bg-black p-0 backdrop:bg-black/80 [overscroll-behavior:contain]">
        <div className="relative aspect-video bg-ink">
          <p className="absolute inset-0 flex items-center justify-center px-6 text-center text-[16px] text-white/80">[Video placeholder. The company supplies an MP4 with captions; it plays only after this button is pressed.]</p>
          <button type="button" onClick={() => dialog.current?.close()} aria-label="Close video" className="absolute right-3 top-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white hover:text-ink"><XIcon size={20} aria-hidden="true" /></button>
        </div>
      </dialog>
    </section>
  );
}
