"use client";
// top-nav from DESIGN.md: utility bar with hours and an "Open now" pill, a 72px canvas bar with a 2px ink
// rule, wordmark left, menu centre, phone text link and the amber quote button right. Below lg the menu
// becomes a hamburger that opens a full-screen graphite sheet with the phone and quote at the bottom.
// Below md a sticky bottom bar keeps Call and Request a quote within one tap.
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { PhoneIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import type { ConstructionContent } from "../content";
import { Btn } from "./ui";

type Props = { brand: string; utility: ConstructionContent["utility"]; nav: ConstructionContent["nav"] };

export default function TopNav({ brand, utility, nav }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const tel = `tel:${nav.phone.replace(/[^+\d]/g, "")}`;
  const show = () => { dialog.current?.showModal(); setOpen(true); };
  const hide = () => { dialog.current?.close(); };
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  return (
    <>
      <div className="hidden border-b border-hairline bg-soft text-[13px] text-body md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-1.5 sm:px-8">
          <span>{utility.hours}</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-hairline-strong bg-surface px-2.5 py-0.5 text-[12px] font-medium text-ink"><span className="h-2 w-2 rounded-full bg-[#2E7D32]" aria-hidden="true" />{utility.open}</span>
        </div>
      </div>
      <header className="sticky top-0 z-30 border-b-2 border-ink bg-canvas">
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-5 sm:px-8">
          <Link href="#top" className="whitespace-nowrap font-display text-[20px] font-bold text-ink no-underline sm:text-[24px]" translate="no">{brand}</Link>
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex gap-7">
              {nav.links.map((l) => <li key={l.href}><a href={l.href} className="py-2 text-[14px] font-medium tracking-[.02em] text-ink no-underline underline-offset-[6px] decoration-2 hover:underline">{l.label}</a></li>)}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <a href={tel} className="hidden items-center gap-2 font-button text-[14px] font-medium text-ink no-underline underline-offset-[3px] hover:underline md:inline-flex"><PhoneIcon size={20} weight="light" aria-hidden="true" />{nav.phone}</a>
            <span className="hidden md:block"><Btn href={nav.cta.href}>{nav.cta.label}</Btn></span>
            <button type="button" onClick={show} aria-label="Open menu" className="inline-flex h-11 w-11 items-center justify-center rounded-md border-2 border-ink bg-canvas text-ink hover:bg-soft lg:hidden"><ListIcon size={24} weight="light" aria-hidden="true" /></button>
          </div>
        </div>
      </header>

      <dialog ref={dialog} onClose={() => setOpen(false)} aria-label="Menu" className="m-0 h-full max-h-none w-full max-w-none bg-dark p-0 text-on-dark backdrop:bg-transparent [overscroll-behavior:contain]">
        <div className="flex h-full flex-col px-5 py-5 sm:px-8">
          <div className="flex items-center justify-between">
            <span className="font-display text-[24px] font-bold" translate="no">{brand}</span>
            <button type="button" onClick={hide} aria-label="Close menu" className="inline-flex h-11 w-11 items-center justify-center rounded-md border-2 border-white/70 text-on-dark hover:bg-white/10"><XIcon size={24} weight="light" aria-hidden="true" /></button>
          </div>
          <ul className="mt-10 grid gap-1">
            {nav.links.map((l) => <li key={l.href} className="border-t border-white/10"><a href={l.href} onClick={hide} className="block py-4 font-display text-[40px] font-bold leading-none text-on-dark no-underline hover:text-accent">{l.label}</a></li>)}
          </ul>
          <div className="mt-auto grid gap-3 border-t border-white/10 pt-5">
            <a href={tel} className="inline-flex items-center gap-2 text-[18px] font-medium text-on-dark no-underline"><PhoneIcon size={22} weight="light" aria-hidden="true" />{nav.phone}</a>
            <span className="text-[13px] text-on-dark-muted">{utility.hours}</span>
            <Btn href={nav.cta.href} full>{nav.cta.label}</Btn>
          </div>
        </div>
      </dialog>

      {/* Sticky mobile bar: 56px Call + Request a quote, per DESIGN.md Responsive Behavior */}
      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t-2 border-ink bg-canvas md:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        <a href={tel} className="inline-flex h-14 items-center justify-center gap-2 bg-dark font-button text-[14px] font-medium text-on-dark no-underline"><PhoneIcon size={20} weight="light" aria-hidden="true" />{nav.call}</a>
        <Link href={nav.cta.href} className="inline-flex h-14 items-center justify-center bg-accent font-button text-[14px] font-medium text-on-primary no-underline">{nav.cta.label}</Link>
      </div>
    </>
  );
}
