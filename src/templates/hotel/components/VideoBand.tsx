"use client";
// Full-bleed photograph with a round gold-outlined play button opening a dialog with the video placeholder
// (nothing autoplays).
import Image from "next/image";
import { useRef } from "react";
import { PlayIcon, XIcon } from "@phosphor-icons/react";
import type { HotelContent } from "../content";

export default function VideoBand({ v }: { v: HotelContent["video"] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <section className="relative z-[1] flex min-h-[520px] items-center justify-center overflow-hidden bg-dark" aria-label={v.label}>
      <Image src={v.image.src} alt={v.image.alt} fill placeholder="blur" sizes="100vw" className="object-cover" />
      <button type="button" onClick={() => dialog.current?.showModal()} className="group relative inline-flex h-28 w-28 items-center justify-center rounded-full border border-on-dark/80 text-on-dark transition-colors hover:border-accent hover:text-accent" aria-label={v.label}><PlayIcon size={28} weight="fill" aria-hidden="true" /></button>
      <dialog ref={dialog} aria-label={v.title} className="m-auto w-[min(92vw,960px)] bg-dark p-0 text-on-dark backdrop:bg-ink/80 [overscroll-behavior:contain]">
        <div className="flex items-center justify-between gap-4 px-6 py-4"><h2 className="font-display text-[20px]">{v.title}</h2><button type="button" onClick={() => dialog.current?.close()} aria-label="Close video" className="inline-flex h-10 w-10 items-center justify-center text-on-dark"><XIcon size={22} aria-hidden="true" /></button></div>
        <div className="grid aspect-video place-items-center bg-(--t-dark-3) text-[15px] text-(--t-body-muted)">[Hotel film]</div>
        <p className="px-6 py-4 text-[14px] text-(--t-body-muted)">{v.note}</p>
      </dialog>
    </section>
  );
}
