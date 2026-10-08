"use client";
// Header in the Folex language: wordmark, uppercase centre links (Services opens a mega-menu with six
// services and a testimonial column; Pages a grouped dropdown; Work with a "New" badge), then a bordered
// language pill, the square black Get started button and a round hamburger that opens a dark offcanvas
// with the blurb, address, phone, email, socials and a lime "Let's talk" button.
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CaretDownIcon, ListIcon, XIcon, TranslateIcon } from "@phosphor-icons/react";
import type { AgencyContent } from "../content";
import Magnetic from "@/components/Magnetic";
import Letters from "@/components/Letters";
import { Btn, Container } from "./ui";

export default function Header({ brand, nav }: { brand: string; nav: AgencyContent["nav"] }) {
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
  const link = "inline-flex h-10 items-center gap-2 px-3 text-[14px] font-bold uppercase tracking-[.06em] text-ink no-underline hover:text-ink/60";

  return (
    <header className="sticky top-0 z-30 bg-canvas">
      <Container className="flex h-[88px] items-center justify-between gap-6">
        <Link href="#top" className="font-display text-[26px] font-bold tracking-[-0.03em] text-ink no-underline" translate="no"><Letters text={brand} step={0.035} /></Link>
        <div ref={wrap} className="relative hidden lg:block">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-4">
              <li className="fade-up" style={{ animationDelay: ".25s" }}><button type="button" onClick={() => setOpen(open === "mega" ? null : "mega")} aria-expanded={open === "mega"} aria-controls="mega" className={link}>{nav.mega.label} <CaretDownIcon size={14} weight="bold" aria-hidden="true" /></button></li>
              <li className="fade-up" style={{ animationDelay: ".35s" }}><button type="button" onClick={() => setOpen(open === "pages" ? null : "pages")} aria-expanded={open === "pages"} aria-controls="pages" className={link}>{nav.pages.label} <CaretDownIcon size={14} weight="bold" aria-hidden="true" /></button></li>
              <li className="fade-up" style={{ animationDelay: ".45s" }}><a href={nav.elements.href} className={link}>{nav.elements.label}<span className="rounded-sm bg-[#EBD9FF] px-2 py-0.5 text-[11px] text-[#5B2EA6]">{nav.elements.badge}</span></a></li>
            </ul>
          </nav>
          <div id="mega" hidden={open !== "mega"} className="menu-in absolute left-1/2 top-full mt-5 w-[960px] -translate-x-1/2 border border-ink/10 bg-canvas p-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,.35)]">
            <div className="grid grid-cols-[2fr_1fr] gap-10">
              <div>
                <span className="text-[12px] font-bold uppercase tracking-[.1em] text-ink/60">{nav.mega.label}</span>
                <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-5">
                  {nav.mega.services.map((s) => <li key={s.href}><Link href={s.href} onClick={() => setOpen(null)} className="block no-underline"><span className="block font-display text-[16px] font-bold text-ink">{s.title}</span><span className="mt-1 block text-[14px] leading-[1.5] text-body">{s.text}</span></Link></li>)}
                </ul>
              </div>
              <div className="bg-accent p-6">
                <span className="text-[12px] font-bold uppercase tracking-[.1em] text-ink">{nav.mega.quote.label}</span>
                <p className="mt-4 text-[15px] leading-[1.6] text-ink">{nav.mega.quote.text}</p>
              </div>
            </div>
          </div>
          <div id="pages" hidden={open !== "pages"} className="menu-in absolute left-1/2 top-full mt-5 w-[640px] -translate-x-1/2 border border-ink/10 bg-canvas p-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,.35)]">
            <div className="grid grid-cols-3 gap-8">
              {nav.pages.groups.map((g) => <div key={g.label}><span className="text-[12px] font-bold uppercase tracking-[.1em] text-ink/60">{g.label}</span><ul className="mt-3 grid gap-2">{g.items.map((l) => <li key={l.href}><Link href={l.href} onClick={() => setOpen(null)} className="text-[15px] text-ink no-underline hover:underline">{l.label}{l.badge && <span className="ml-2 rounded-sm bg-accent px-1.5 text-[10px] font-bold uppercase">{l.badge}</span>}</Link></li>)}</ul></div>)}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="fade-up hidden h-14 items-center gap-2 border border-ink px-4 text-[14px] font-bold uppercase text-ink sm:inline-flex" style={{ animationDelay: ".5s" }} aria-label={`Language: ${nav.lang}`}><TranslateIcon size={16} aria-hidden="true" />{nav.lang} <CaretDownIcon size={12} weight="bold" aria-hidden="true" /></span>
          <span className="fade-up hidden md:block" style={{ animationDelay: ".6s" }}><Btn href={nav.cta.href}>{nav.cta.label}</Btn></span>
          <Magnetic className="pop-in" style={{ animationDelay: ".7s" }}><button type="button" onClick={() => dialog.current?.showModal()} aria-label="Open menu" className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-ink text-ink transition-colors hover:bg-ink hover:text-white"><ListIcon size={22} aria-hidden="true" /></button></Magnetic>
        </div>
      </Container>

      <dialog ref={dialog} aria-label="Menu" className="m-0 ml-auto h-full max-h-none w-full max-w-[480px] bg-ink p-0 text-white backdrop:bg-black/50 [overscroll-behavior:contain]">
        <div className="flex h-full flex-col gap-8 overflow-y-auto px-8 py-8">
          <div className="flex items-center justify-between"><span className="font-display text-[26px] font-bold" translate="no">{brand}</span><button type="button" onClick={() => dialog.current?.close()} aria-label="Close menu" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/40 hover:bg-white hover:text-ink"><XIcon size={22} aria-hidden="true" /></button></div>
          <p className="text-[17px] leading-[1.6] text-white/80">{nav.offcanvas.blurb}</p>
          <nav aria-label="Menu"><ul className="grid gap-1">{[...nav.mega.services.slice(0, 4).map((s) => ({ href: s.href, label: s.title })), nav.elements, { href: "contact/", label: "Contact" }].map((l) => <li key={l.href} className="border-b border-white/10"><Link href={l.href} onClick={() => dialog.current?.close()} className="block py-3 font-display text-[22px] font-bold text-white no-underline">{l.label}</Link></li>)}</ul></nav>
          <div className="grid gap-2 text-[15px] text-white/80"><span>{nav.offcanvas.address}</span><a href={`tel:${nav.offcanvas.phone.replace(/[^+\d]/g, "")}`} className="text-white no-underline">{nav.offcanvas.phone}</a><a href={`mailto:${nav.offcanvas.email.replace(/[\[\]]/g, "")}`} className="text-white no-underline">{nav.offcanvas.email}</a></div>
          <ul className="flex gap-5 text-[13px] font-bold uppercase tracking-[.08em]">{nav.offcanvas.socials.map((s) => <li key={s.href}><a href={s.href} className="text-white/80 no-underline hover:text-accent">{s.label}</a></li>)}</ul>
          <div className="mt-auto"><Link href={nav.offcanvas.cta.href} className="inline-flex h-14 w-full items-center justify-center bg-accent px-7 text-[13px] font-bold uppercase tracking-[.08em] text-ink no-underline">{nav.offcanvas.cta.label}</Link></div>
        </div>
      </dialog>
    </header>
  );
}
