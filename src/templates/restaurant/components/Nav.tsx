"use client";
// 01 A dark contact strip over a sticky cream nav: links either side of a centred Playfair wordmark on wide
// screens, wordmark and a menu button below that. The menu is a full-height panel with the links and contact.
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ListIcon, XIcon, PhoneIcon, EnvelopeSimpleIcon, MapPinIcon } from "@phosphor-icons/react";
import type { RestaurantContent } from "../content";
import { Btn, Container } from "./ui";

export default function Nav({ brand, top, nav, hours }: { brand: string; top: RestaurantContent["topbar"]; nav: RestaurantContent["nav"]; hours: RestaurantContent["hoursStrip"] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => { if (!open) dialog.current?.close(); }, [open]);
  const all = [...nav.left, ...nav.right];
  const wordmark = <span className="font-display text-[26px] font-semibold tracking-[0.5px] text-ink" translate="no">{brand}</span>;

  return (
    <header className="sticky top-0 z-40">
      <div className="rest-on-dark bg-dark text-on-dark">
        <Container className="flex min-h-10 flex-wrap items-center justify-between gap-x-6 py-1.5 text-[12px]">
          <p className="flex items-center gap-5 text-on-dark/75">
            <span className="inline-flex min-w-0 items-center gap-1.5"><MapPinIcon size={14} weight="light" aria-hidden="true" className="shrink-0" /><span className="truncate">{top.address}</span></span>
            <a href={`tel:${top.phone.replace(/[^\d+]/g, "")}`} className="hidden items-center gap-1.5 text-on-dark/75 no-underline hover:text-accent sm:inline-flex"><PhoneIcon size={14} weight="light" aria-hidden="true" />{top.phone}</a>
          </p>
          <p className="hidden items-center gap-5 md:flex">
            <a href={`mailto:${top.email.replace(/[[\]]/g, "")}`} className="inline-flex items-center gap-1.5 text-on-dark/75 no-underline hover:text-accent"><EnvelopeSimpleIcon size={14} weight="light" aria-hidden="true" />{top.email}</a>
            <span className="flex gap-4">{top.socials.map((s) => <a key={s.label} href={s.href} className="text-on-dark/75 no-underline hover:text-accent">{s.label}</a>)}</span>
          </p>
        </Container>
      </div>

      <div className="border-b border-hairline bg-canvas/95 backdrop-blur-sm">
        <Container className="flex h-[76px] items-center justify-between gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-5 xl:gap-7">{nav.left.map((l) => <li key={l.href}><a href={l.href} className="whitespace-nowrap text-[13px] font-medium uppercase tracking-[0.8px] text-ink no-underline transition-colors hover:text-primary xl:text-[14px]">{l.label}</a></li>)}</ul>
          </nav>
          <Link href="/" className="no-underline lg:justify-self-center">{wordmark}</Link>
          <div className="hidden items-center justify-end gap-5 lg:flex xl:gap-7">
            <nav aria-label="Secondary"><ul className="flex items-center gap-5 xl:gap-7">{nav.right.map((l) => <li key={l.href}><a href={l.href} className="whitespace-nowrap text-[13px] font-medium uppercase tracking-[0.8px] text-ink no-underline transition-colors hover:text-primary xl:text-[14px]">{l.label}</a></li>)}</ul></nav>
            <Btn href={nav.cta.href} className="h-10 whitespace-nowrap px-5 text-[13px]">{nav.cta.label}</Btn>
          </div>
          <button type="button" onClick={() => { setOpen(true); dialog.current?.showModal(); }} aria-label="Open menu" aria-haspopup="dialog" aria-expanded={open} className="inline-flex h-11 w-11 items-center justify-center rounded-xs border border-(--t-field-border) text-ink transition-colors hover:border-primary hover:text-primary active:bg-soft lg:hidden"><ListIcon size={22} weight="light" aria-hidden="true" /></button>
        </Container>
      </div>

      <dialog ref={dialog} onClose={() => setOpen(false)} onClick={(e) => { if (e.target === dialog.current) setOpen(false); }} aria-label="Site menu" className="m-0 h-full max-h-none w-full max-w-none bg-canvas p-0 text-ink backdrop:bg-(--t-dark)/60 [overscroll-behavior:contain]">
        <Container className="flex h-full flex-col py-5">
          <div className="flex items-center justify-between">{wordmark}<button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="inline-flex h-11 w-11 items-center justify-center rounded-xs border border-(--t-field-border) transition-colors hover:border-primary hover:text-primary active:bg-soft"><XIcon size={22} weight="light" aria-hidden="true" /></button></div>
          <nav aria-label="Mobile primary" className="my-auto"><ul className="grid gap-1">{all.map((l) => <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block py-2 font-display text-[32px] font-medium text-ink no-underline hover:text-primary active:text-primary">{l.label}</a></li>)}</ul></nav>
          <div className="grid gap-4 border-t border-hairline pt-5">
            <Btn href={nav.cta.href} className="w-full">{nav.cta.label}</Btn>
            <p className="grid gap-1 text-[14px] text-body">
              <a href={`tel:${top.phone.replace(/[^\d+]/g, "")}`} className="text-body no-underline">{top.phone}</a>
              <a href={`mailto:${top.email.replace(/[[\]]/g, "")}`} className="text-body no-underline">{top.email}</a>
              <span className="text-mute">{hours.items[0].day}, {hours.items[0].time}</span>
            </p>
          </div>
        </Container>
      </dialog>

      <noscript>
        <nav aria-label="Primary" className="border-b border-hairline bg-soft lg:hidden">
          <Container>
            <ul className="flex flex-wrap gap-x-5 gap-y-1 py-3">{all.concat(nav.cta).map((l) => <li key={l.href + l.label}><a href={l.href} className="text-[13px] font-medium uppercase tracking-[0.8px] text-ink no-underline">{l.label}</a></li>)}</ul>
          </Container>
        </nav>
      </noscript>
    </header>
  );
}
