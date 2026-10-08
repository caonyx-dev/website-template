"use client";
// Two dark rows like the reference: a top bar (hours, phone, address, socials) and a menu bar that sits
// transparent over the hero photograph with the mark, links, "Client portal ↗" and the lime quote button.
// Once the hero scrolls away a fixed green-black bar with the same links slides down. Phones: mark + hamburger
// opening a full-screen dark menu with the links, portal link and phone.
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowSquareOutIcon, ClockIcon, ListIcon, MapPinIcon, PhoneCallIcon, XIcon } from "@phosphor-icons/react";
import type { FinanceContent } from "../content";
import { Btn, Container, SocialIcon } from "./ui";

function Mark({ brand, className = "" }: { brand: string; className?: string }) {
  return (
    <Link href="#top" className={`flex items-center gap-3 text-white no-underline ${className}`} translate="no">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border-[5px] border-white border-r-transparent" aria-hidden="true" />
      <span className="font-display text-[22px] font-bold tracking-[-0.02em]">{brand}</span>
    </Link>
  );
}

function Links({ links, onPick, animate = false }: { links: FinanceContent["nav"]["links"]; onPick?: () => void; animate?: boolean }) {
  return (
    <ul className="flex items-center gap-7">
      {links.map((l, i) => (
        <li key={l.href} className={animate ? "fade-up" : ""} style={animate ? { animationDelay: `${0.25 + i * 0.05}s` } : undefined}>
          <a href={l.href} onClick={onPick} aria-current={i === 0 ? "page" : undefined} className={`inline-flex h-10 items-center border-b-2 font-display text-[16px] font-medium no-underline transition-colors hover:text-accent ${i === 0 ? "border-accent text-accent" : "border-transparent text-white"}`}>{l.label}</a>
        </li>
      ))}
    </ul>
  );
}

export default function Nav({ brand, topbar, nav }: { brand: string; topbar: FinanceContent["topbar"]; nav: FinanceContent["nav"] }) {
  const [solid, setSolid] = useState(false);
  const menu = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const el = document.getElementById("nav-sentinel"); if (!el) return;
    const io = new IntersectionObserver(([e]) => setSolid(!e.isIntersecting)); io.observe(el); return () => io.disconnect();
  }, []);
  const tel = `tel:${topbar.phone.replace(/[^\d+]/g, "")}`;
  const right = (
    <div className="flex items-center gap-6">
      <a href={nav.portal.href} className="inline-flex items-center gap-1.5 font-display text-[15px] font-medium text-white no-underline hover:text-accent">{nav.portal.label}<ArrowSquareOutIcon size={16} weight="bold" aria-hidden="true" /></a>
      <Btn href={nav.cta.href} tone="lime" className="h-12 px-6">{nav.cta.label}</Btn>
    </div>
  );
  return (
    <header className="relative z-30">
      <div id="nav-sentinel" className="absolute left-0 top-[140px] h-px w-px" aria-hidden="true" />
      {/* Top bar */}
      <div className="hidden bg-dark text-white/80 lg:block">
        <Container className="flex h-[50px] items-center justify-between text-[14px]">
          <ul className="flex items-center gap-8">
            <li className="flex items-center gap-2"><ClockIcon size={18} weight="light" aria-hidden="true" /><span className="font-mono tabular-nums">{topbar.hours}</span></li>
            <li className="flex items-center gap-2"><PhoneCallIcon size={18} weight="light" aria-hidden="true" /><a href={tel} className="font-mono tabular-nums text-white/80 no-underline hover:text-accent">{topbar.phone}</a></li>
            <li className="flex items-center gap-2"><MapPinIcon size={18} weight="light" aria-hidden="true" />{topbar.address}</li>
          </ul>
          <ul className="flex items-center gap-2">{topbar.socials.map((s) => <li key={s.href}><a href={s.href} aria-label={s.label} className="inline-flex h-9 w-9 items-center justify-center text-white/80 no-underline hover:text-accent"><SocialIcon label={s.label} size={16} /></a></li>)}</ul>
        </Container>
      </div>
      {/* Menu bar over the hero */}
      <div className="absolute inset-x-0 top-0 lg:top-[50px]">
        <Container className="flex h-[70px] items-center justify-between lg:h-[90px]">
          <Mark brand={brand} className="fade-up" />
          <nav aria-label="Main" className="hidden lg:block"><Links links={nav.links} animate /></nav>
          <div className="fade-up hidden lg:block" style={{ animationDelay: ".55s" }}>{right}</div>
          <button type="button" onClick={() => menu.current?.showModal()} aria-label="Open menu" className="inline-flex h-11 w-11 items-center justify-center text-white lg:hidden"><ListIcon size={28} aria-hidden="true" /></button>
        </Container>
      </div>
      {/* Fixed bar after the hero */}
      <div className={`fixed inset-x-0 top-0 z-40 bg-dark shadow-lift transition-transform duration-300 motion-reduce:transition-none ${solid ? "translate-y-0" : "-translate-y-full"}`} inert={!solid}>
        <Container className="flex h-[70px] items-center justify-between">
          <Mark brand={brand} />
          <nav aria-label="Main, fixed" className="hidden lg:block"><Links links={nav.links} /></nav>
          <div className="hidden lg:block">{right}</div>
          <button type="button" onClick={() => menu.current?.showModal()} aria-label="Open menu" className="inline-flex h-11 w-11 items-center justify-center text-white lg:hidden"><ListIcon size={28} aria-hidden="true" /></button>
        </Container>
      </div>
      {/* Phone menu */}
      <dialog ref={menu} aria-label="Menu" className="m-0 h-full max-h-none w-full max-w-none bg-dark p-0 text-white backdrop:bg-transparent [overscroll-behavior:contain]">
        <Container className="flex h-full flex-col py-4">
          <div className="flex items-center justify-between"><Mark brand={brand} /><button type="button" onClick={() => menu.current?.close()} aria-label="Close menu" className="inline-flex h-11 w-11 items-center justify-center text-white"><XIcon size={26} aria-hidden="true" /></button></div>
          <nav aria-label="Menu" className="my-auto"><ul className="grid gap-2">{nav.links.map((l, i) => <li key={l.href} className="menu-in" style={{ animationDelay: `${i * 0.04}s` }}><a href={l.href} onClick={() => menu.current?.close()} className="block py-1 font-display text-[34px] font-bold text-white no-underline hover:text-accent">{l.label}</a></li>)}</ul></nav>
          <div className="grid gap-4 border-t border-white/10 pt-6 text-[15px]">
            <a href={nav.portal.href} className="inline-flex items-center gap-1.5 font-medium text-accent no-underline">{nav.portal.label}<ArrowSquareOutIcon size={16} weight="bold" aria-hidden="true" /></a>
            <a href={tel} className="inline-flex items-center gap-2 font-mono text-white no-underline"><PhoneCallIcon size={18} weight="light" aria-hidden="true" />{topbar.phone}</a>
            <span className="text-white/70">{topbar.hours}</span>
            <ul className="flex gap-2">{topbar.socials.map((s) => <li key={s.href}><a href={s.href} aria-label={s.label} className="inline-flex h-11 w-11 items-center justify-center text-white no-underline"><SocialIcon label={s.label} size={18} /></a></li>)}</ul>
          </div>
        </Container>
      </dialog>
    </header>
  );
}
