"use client";
// Header in two rows like the reference: a white info bar (tooth mark and clinic name, then phone, brochure
// and opening hours with teal outline icons) over a navy menu bar with the links, a search button and
// socials. Once both rows scroll away a white bar with the same links slides down and stays fixed. On
// phones the info bar is sticky with a hamburger that opens a full-screen menu.
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ClockIcon, DownloadSimpleIcon, ListIcon, MagnifyingGlassIcon, PhoneCallIcon, ToothIcon, XIcon } from "@phosphor-icons/react";
import Letters from "@/components/Letters";
import Magnetic from "@/components/Magnetic";
import type { DentalContent, InfoKind } from "../content";
import { Container, SocialIcon } from "./ui";

function InfoIcon({ kind }: { kind: InfoKind }) {
  const p = { size: 44, weight: "light" as const, className: "shrink-0 text-primary", "aria-hidden": true };
  if (kind === "phone") return <PhoneCallIcon {...p} />;
  if (kind === "brochure") return <DownloadSimpleIcon {...p} />;
  return <ClockIcon {...p} />;
}

function Brand({ brand, size = 28, animate = false }: { brand: string; size?: number; animate?: boolean }) {
  return (
    <Link href="#top" className="flex items-center gap-2 text-ink no-underline" translate="no">
      <ToothIcon size={size * 1.3} weight="fill" className={`text-primary ${animate ? "pop-in" : ""}`} aria-hidden="true" />
      <span className="font-display font-extrabold" style={{ fontSize: size }}>{animate ? <Letters text={brand} step={0.04} delay={0.1} /> : brand}</span>
    </Link>
  );
}

function Links({ links, onDark = false, onClick, animate = false }: { links: DentalContent["nav"]["links"]; onDark?: boolean; onClick?: () => void; animate?: boolean }) {
  return (
    <ul className="flex items-center gap-8">
      {links.map((l, i) => (
        <li key={l.href} className={animate ? "fade-up" : ""} style={animate ? { animationDelay: `${0.35 + i * 0.06}s` } : undefined}>
          <a href={l.href} onClick={onClick} className={`font-display text-[16px] font-medium no-underline transition-colors hover:text-primary ${i === 0 ? "text-primary" : onDark ? "text-white" : "text-ink"}`} aria-current={i === 0 ? "page" : undefined}>{l.label}</a>
        </li>
      ))}
    </ul>
  );
}

export default function Header({ brand, topbar, nav }: { brand: string; topbar: DentalContent["topbar"]; nav: DentalContent["nav"] }) {
  const [solid, setSolid] = useState(false);
  const menu = useRef<HTMLDialogElement>(null);
  const search = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const el = document.getElementById("header-sentinel"); if (!el) return;
    const io = new IntersectionObserver(([e]) => setSolid(!e.isIntersecting)); io.observe(el); return () => io.disconnect();
  }, []);
  const socials = (dark: boolean, big = false) => (
    <ul className="flex items-center gap-4">
      {nav.socials.map((s) => <li key={s.href}><a href={s.href} aria-label={s.label} className={`inline-flex ${big ? "h-11 w-11" : "h-9 w-9"} items-center justify-center no-underline transition-colors hover:text-primary ${dark ? "text-white" : "text-ink"}`}><SocialIcon label={s.label} size={18} /></a></li>)}
    </ul>
  );
  const searchBtn = (dark: boolean) => <button type="button" onClick={() => search.current?.showModal()} aria-label={nav.searchLabel} className={`inline-flex h-9 w-9 items-center justify-center transition-colors hover:text-primary ${dark ? "text-white" : "text-ink"}`}><MagnifyingGlassIcon size={20} weight="bold" aria-hidden="true" /></button>;

  return (
    <header className="sticky top-0 z-30 lg:relative">
      <div id="header-sentinel" className="absolute left-0 top-[184px] h-px w-px" aria-hidden="true" />
      {/* Info bar */}
      <div className="bg-white shadow-soft lg:shadow-none">
        <Container className="flex h-[76px] items-center justify-between gap-8 lg:h-[124px]">
          <Brand brand={brand} animate />
          <ul className="hidden items-center gap-12 lg:flex">
            {topbar.map((it, i) => (
              <li key={i} className="fade-up flex items-center gap-4" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                <InfoIcon kind={it.kind} />
                <span className="grid">
                  <span className="text-[15px] text-body">{it.label}</span>
                  {it.href ? <a href={it.href} className="font-display text-[18px] font-bold text-ink no-underline hover:text-primary">{it.value}</a> : <span className="font-display text-[18px] font-bold text-ink">{it.value}</span>}
                </span>
              </li>
            ))}
          </ul>
          <Magnetic className="lg:hidden"><button type="button" onClick={() => menu.current?.showModal()} aria-label="Open menu" className="inline-flex h-11 w-11 items-center justify-center text-ink"><ListIcon size={28} aria-hidden="true" /></button></Magnetic>
        </Container>
      </div>
      {/* Navy menu bar */}
      <div className="hidden bg-dark text-white lg:block">
        <Container className="flex h-[60px] items-center justify-between">
          <nav aria-label="Main"><Links links={nav.links} onDark animate /></nav>
          <div className="fade-up flex items-center gap-4" style={{ animationDelay: ".7s" }}>{searchBtn(true)}<span className="h-6 w-px bg-white/20" aria-hidden="true" />{socials(true)}</div>
        </Container>
      </div>
      {/* Sticky white bar once the header has scrolled away */}
      <div className={`fixed inset-x-0 top-0 z-40 hidden bg-white shadow-soft transition-transform duration-300 lg:block ${solid ? "translate-y-0" : "-translate-y-full"}`} inert={!solid}>
        <Container className="flex h-[70px] items-center justify-between">
          <Brand brand={brand} size={22} />
          <nav aria-label="Main, sticky"><Links links={nav.links} /></nav>
          <div className="flex items-center gap-4">{searchBtn(false)}<span className="h-6 w-px bg-hairline" aria-hidden="true" />{socials(false)}</div>
        </Container>
      </div>
      {/* Phone menu */}
      <dialog ref={menu} aria-label="Menu" className="m-0 h-full max-h-none w-full max-w-none bg-dark p-0 text-white backdrop:bg-transparent [overscroll-behavior:contain]">
        <Container className="flex h-full flex-col py-5">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-display text-[26px] font-extrabold" translate="no"><ToothIcon size={34} weight="fill" className="text-primary" aria-hidden="true" />{brand}</span>
            <button type="button" onClick={() => menu.current?.close()} aria-label="Close menu" className="inline-flex h-11 w-11 items-center justify-center text-white"><XIcon size={26} aria-hidden="true" /></button>
          </div>
          <nav aria-label="Menu" className="my-auto">
            <ul className="grid gap-3">{nav.links.map((l, i) => <li key={l.href} className="menu-in" style={{ animationDelay: `${i * 0.05}s` }}><a href={l.href} onClick={() => menu.current?.close()} className="font-display text-[36px] font-bold text-white no-underline hover:text-primary">{l.label}</a></li>)}</ul>
          </nav>
          <ul className="grid gap-4 border-t border-white/10 pt-6">
            {topbar.map((it, i) => <li key={i} className="flex items-center gap-4 text-[15px]"><InfoIcon kind={it.kind} /><span className="grid"><span className="text-on-dark-muted">{it.label}</span>{it.href ? <a href={it.href} className="font-display font-bold text-white no-underline">{it.value}</a> : <span className="font-display font-bold">{it.value}</span>}</span></li>)}
          </ul>
          <div className="mt-6">{socials(true, true)}</div>
        </Container>
      </dialog>
      {/* Search */}
      <dialog ref={search} aria-label={nav.searchLabel} className="m-auto w-[min(92vw,640px)] bg-white p-6 text-ink shadow-lift backdrop:bg-ink/70">
        <form action="search/" method="get" className="flex items-center gap-3" onSubmit={() => search.current?.close()}>
          <label htmlFor="site-search" className="sr-only">{nav.searchLabel}</label>
          <input id="site-search" name="q" type="search" placeholder="Search treatments, doctors, news…" autoComplete="off" spellCheck={false} enterKeyHint="search" className="h-14 min-w-0 flex-1 bg-soft px-5 text-[16px] text-ink placeholder:text-mute" />
          <button type="submit" className="inline-flex h-14 w-14 shrink-0 items-center justify-center bg-dark text-white hover:bg-primary hover:text-ink" aria-label="Search"><MagnifyingGlassIcon size={22} weight="bold" aria-hidden="true" /></button>
          <button type="button" onClick={() => search.current?.close()} aria-label="Close search" className="inline-flex h-14 w-14 shrink-0 items-center justify-center text-ink"><XIcon size={22} aria-hidden="true" /></button>
        </form>
      </dialog>
    </header>
  );
}
