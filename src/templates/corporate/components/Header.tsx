"use client";
// Header in the reference's language: a 1600px frame split into bordered cells. Logo left, centre links
// with "Home" as a ghost pill, "Solutions" opening a four-column mega-menu with a dark promo panel, "Pages"
// opening a grouped dropdown, a "New" badge, then a language pill and the blue ↗ Get started button.
// Below lg: hamburger to a full white overlay. Escape and outside clicks close the menus.
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CaretDownIcon, ListIcon, XIcon, TranslateIcon, ArrowUpRightIcon } from "@phosphor-icons/react";
import type { CorporateContent } from "../content";
import { Btn, Frame } from "./ui";

export default function Header({ brand, nav }: { brand: string; nav: CorporateContent["nav"] }) {
  const [open, setOpen] = useState<"mega" | "pages" | null>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!open) return;
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(null); };
    const down = (e: PointerEvent) => { if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(null); };
    document.addEventListener("keydown", key); document.addEventListener("pointerdown", down);
    return () => { document.removeEventListener("keydown", key); document.removeEventListener("pointerdown", down); };
  }, [open]);
  const link = "inline-flex h-10 items-center gap-1.5 rounded-sm px-3 text-[15px] font-medium text-ink no-underline hover:bg-soft";

  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-white">
      <Frame className="flex items-stretch">
        <Link href="#top" className="flex items-center gap-2 border-r border-ink/10 px-5 py-5 font-display text-[22px] font-medium text-ink no-underline sm:px-8" translate="no">
          <span className="inline-block h-6 w-6 rotate-45 rounded-[6px] bg-primary" aria-hidden="true" />{brand}
        </Link>
        <div ref={wrap} className="hidden flex-1 items-center justify-center lg:flex">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-1">
              <li><a href={nav.home.href} className={`${link} bg-[#EEF3FF] text-primary`}>{nav.home.label}</a></li>
              <li>
                <button type="button" onClick={() => setOpen(open === "mega" ? null : "mega")} aria-expanded={open === "mega"} aria-controls="mega-menu" className={link}>{nav.mega.label} <CaretDownIcon size={14} aria-hidden="true" /></button>
              </li>
              <li>
                <button type="button" onClick={() => setOpen(open === "pages" ? null : "pages")} aria-expanded={open === "pages"} aria-controls="pages-menu" className={link}>{nav.pages.label} <CaretDownIcon size={14} aria-hidden="true" /></button>
              </li>
              {nav.links.map((l) => <li key={l.href}><a href={l.href} className={link}>{l.label}{l.badge && <span className="ml-1 rounded-full bg-primary px-2 py-0.5 text-[11px] font-medium text-white">{l.badge}</span>}</a></li>)}
            </ul>
          </nav>
          {/* mega menu */}
          <div id="mega-menu" hidden={open !== "mega"} className="absolute inset-x-0 top-full border-b border-ink/10 bg-white shadow-[0_24px_48px_-24px_rgba(0,0,0,.25)]">
            <Frame className="grid grid-cols-[1fr_1fr_1fr_1.1fr]">
              {nav.mega.columns.map((col) => (
                <div key={col.title} className="border-r border-ink/10 px-8 py-8">
                  <h3 className="font-display text-[18px] font-semibold text-ink">{col.title}</h3>
                  <p className="mt-1 text-[13px] text-mute">{col.lead}</p>
                  <ul className="mt-5 grid gap-1">
                    {col.items.map((it) => (
                      <li key={it.href}><Link href={it.href} onClick={() => setOpen(null)} className="block rounded-md px-3 py-2.5 no-underline hover:bg-soft"><span className="flex items-center gap-2 text-[15px] font-medium text-ink">{it.label}{it.badge && <span className="rounded-full bg-primary px-2 py-0.5 text-[11px] text-white">{it.badge}</span>}</span><span className="block text-[13px] leading-[1.45] text-mute">{it.text}</span></Link></li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="m-6 grid content-between gap-6 rounded-md bg-dark p-7 text-white">
                <div className="grid gap-3">
                  <span className="text-[12px] font-semibold uppercase tracking-[.08em] text-white/60">{nav.mega.panel.eyebrow}</span>
                  <p className="font-display text-[20px] font-semibold leading-snug">{nav.mega.panel.title}</p>
                  <p className="text-[14px] leading-[1.55] text-white/70">{nav.mega.panel.text}</p>
                </div>
                <Btn href={nav.mega.panel.cta.href}>{nav.mega.panel.cta.label}</Btn>
              </div>
            </Frame>
          </div>
          {/* pages dropdown */}
          <div id="pages-menu" hidden={open !== "pages"} className="absolute left-1/2 top-full mt-0 w-[560px] -translate-x-1/2 rounded-b-lg border border-t-0 border-ink/10 bg-white p-6 shadow-[0_24px_48px_-24px_rgba(0,0,0,.25)]">
            <div className="grid grid-cols-3 gap-6">
              {nav.pages.groups.map((g) => (
                <div key={g.label}>
                  <span className="text-[12px] font-semibold uppercase tracking-[.08em] text-mute">{g.label}</span>
                  <ul className="mt-2 grid gap-1">{g.items.map((l) => <li key={l.href}><Link href={l.href} onClick={() => setOpen(null)} className="block rounded-sm px-2 py-1.5 text-[15px] text-ink no-underline hover:bg-soft">{l.label}</Link></li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-3 border-l border-ink/10 px-4 py-3 sm:px-6">
          <button type="button" className="hidden h-12 items-center gap-2 rounded-sm border border-ink/15 px-4 text-[15px] text-ink hover:bg-soft md:inline-flex" aria-label={`Language: ${nav.lang}`}><TranslateIcon size={18} aria-hidden="true" className="text-primary" />{nav.lang} <CaretDownIcon size={14} aria-hidden="true" /></button>
          <Btn href={nav.cta.href} className="h-12">{nav.cta.label}</Btn>
          <button type="button" onClick={() => dialog.current?.showModal()} aria-label="Open menu" className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-ink/15 text-ink hover:bg-soft lg:hidden"><ListIcon size={24} aria-hidden="true" /></button>
        </div>
      </Frame>

      <dialog ref={dialog} aria-label="Menu" className="m-0 h-full max-h-none w-full max-w-none bg-white p-0 text-ink backdrop:bg-transparent [overscroll-behavior:contain]">
        <div className="flex h-full flex-col px-5 py-5">
          <div className="flex items-center justify-between"><span className="font-display text-[22px] font-medium" translate="no">{brand}</span><button type="button" onClick={() => dialog.current?.close()} aria-label="Close menu" className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-ink/15"><XIcon size={24} aria-hidden="true" /></button></div>
          <nav aria-label="Menu" className="mt-8 overflow-y-auto">
            <ul className="grid">
              {[nav.home, ...nav.links].map((l) => <li key={l.href} className="border-b border-ink/10"><a href={l.href} onClick={() => dialog.current?.close()} className="block py-4 font-display text-[24px] font-medium text-ink no-underline">{l.label}</a></li>)}
            </ul>
            <span className="mt-6 block text-[12px] font-semibold uppercase tracking-[.08em] text-mute">{nav.mega.label}</span>
            <ul className="grid">{nav.mega.columns[0].items.map((it) => <li key={it.href} className="border-b border-ink/10"><Link href={it.href} onClick={() => dialog.current?.close()} className="flex items-center justify-between py-3.5 text-[18px] font-medium text-ink no-underline">{it.label} <ArrowUpRightIcon size={16} aria-hidden="true" className="text-primary" /></Link></li>)}</ul>
          </nav>
          <div className="mt-auto pt-5"><Btn href={nav.cta.href} className="w-full justify-center">{nav.cta.label}</Btn></div>
        </div>
      </dialog>
    </header>
  );
}
