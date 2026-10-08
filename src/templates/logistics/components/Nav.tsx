"use client";
// 01 The reference's two-row header: a dark utility bar carrying the location, phone, email and socials, then
// the white nav with the grid tile, the wordmark, the centred links with an underline under the section in view,
// the search and account glyphs and the big orange "Get a quote" pill.
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ListIcon, XIcon, PhoneIcon, EnvelopeSimpleIcon, MapPinIcon, SquaresFourIcon, MagnifyingGlassIcon, UserIcon } from "@phosphor-icons/react";
import type { LogisticsContent } from "../content";
import { Container, Mono, Pill } from "./ui";

const tel = (s: string) => `tel:${s.replace(/[^\d+]/g, "")}`;
const mail = (s: string) => `mailto:${s.replace(/[[\]]/g, "")}`;

export default function Nav({ brand, utility, nav }: { brand: string; utility: LogisticsContent["utility"]; nav: LogisticsContent["nav"] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => { if (!open) dialog.current?.close(); }, [open]);

  useEffect(() => {
    const ids = nav.links.map((l) => l.href).filter((h) => h.startsWith("#")).map((h) => h.slice(1));
    const seen = new Map<string, number>();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => seen.set(e.target.id, e.intersectionRatio));
      let best = ""; let top = 0;
      seen.forEach((r, id) => { if (r > top) { top = r; best = id; } });
      if (best) setActive(`#${best}`);
    }, { rootMargin: "-120px 0px -55% 0px", threshold: [0, 0.25, 0.6, 1] });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [nav.links]);

  function go(href: string) {
    setOpen(false);
    if (!href.startsWith("#")) return;
    requestAnimationFrame(() => {
      const el = document.getElementById(href.slice(1));
      if (!el) return;
      el.setAttribute("tabindex", "-1");
      el.addEventListener("blur", () => el.removeAttribute("tabindex"), { once: true });
      el.focus({ preventScroll: true });
      const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
    });
  }

  const wordmark = <span className="truncate font-display text-[26px] font-bold uppercase tracking-[-0.03em] text-ink sm:text-[28px]" translate="no">{brand}</span>;

  return (
    <header className="sticky top-0 z-40 bg-canvas">
      {/* Utility bar: the DESIGN.md requires the phone to be visible in it on every page. */}
      <div className="log-on-dark hidden bg-dark text-[14px] text-white/80 lg:block">
        <Container className="flex min-h-11 flex-wrap items-center justify-between gap-x-8 gap-y-1 py-1.5">
          <p className="inline-flex min-w-0 items-center gap-2"><MapPinIcon size={17} weight="light" aria-hidden="true" className="shrink-0" /><span className="truncate">{utility.location}</span></p>
          <p className="flex flex-wrap items-center gap-x-7 gap-y-1">
            <a href={tel(utility.phone)} className="inline-flex items-center gap-2 text-white/80 no-underline transition-colors hover:text-primary"><PhoneIcon size={17} weight="light" aria-hidden="true" />{utility.phoneLabel} <Mono>{utility.phone}</Mono></a>
            <a href={mail(utility.email)} className="inline-flex items-center gap-2 text-white/80 no-underline transition-colors hover:text-primary"><EnvelopeSimpleIcon size={17} weight="light" aria-hidden="true" />{utility.emailLabel} {utility.email}</a>
            <span className="flex gap-4">{utility.socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-white/80 no-underline transition-colors hover:text-primary">{s.label}<span className="sr-only"> (opens in a new tab)</span></a>)}</span>
          </p>
        </Container>
      </div>

      <div className="border-b border-hairline bg-canvas">
        <Container className="flex h-[92px] items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-5">
            <span aria-hidden="true" className="hidden size-11 items-center justify-center rounded-[14px] bg-soft text-ink xl:flex"><SquaresFourIcon size={22} weight="bold" /></span>
            <Link href="/" className="min-w-0 no-underline">{wordmark}</Link>
          </div>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul role="list" className="flex items-center gap-7">
              {nav.links.map((l) => {
                const on = active === l.href;
                return (
                  <li key={l.href}>
                    <a href={l.href} aria-current={on ? "location" : undefined} className={`relative block py-4 text-[17px] font-medium no-underline transition-colors ${on ? "text-mute" : "text-ink hover:text-(--t-ink-muted)"}`}>
                      {l.label}
                      <span aria-hidden="true" className={`absolute inset-x-0 bottom-2 h-[3px] rounded-full bg-ink transition-transform duration-200 motion-reduce:transition-none ${on ? "scale-x-100" : "scale-x-0"} [a:hover>&]:scale-x-100 [a:focus-visible>&]:scale-x-100`} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="hidden size-11 items-center justify-center rounded-full text-ink xl:flex"><MagnifyingGlassIcon size={21} weight="bold" /></span>
            <span aria-hidden="true" className="hidden size-11 items-center justify-center rounded-full text-ink xl:flex"><UserIcon size={21} weight="bold" /></span>
            <span className="hidden lg:block"><Pill href={nav.cta.href}>{nav.cta.label}</Pill></span>
            <button type="button" onClick={() => { setOpen(true); dialog.current?.showModal(); }} aria-label="Open menu" aria-haspopup="dialog" aria-expanded={open} className="inline-flex size-12 items-center justify-center rounded-[14px] bg-soft text-ink transition-colors hover:bg-soft2 active:bg-(--t-surface-3) lg:hidden"><ListIcon size={24} weight="bold" aria-hidden="true" /></button>
          </div>
        </Container>
      </div>

      <dialog ref={dialog} onClose={() => setOpen(false)} onClick={(e) => { if (e.target === dialog.current) setOpen(false); }} aria-label="Site menu" className="m-0 h-full max-h-none w-full max-w-none bg-canvas p-0 text-ink backdrop:bg-(--t-dark)/60 [overscroll-behavior:contain]">
        <Container className="flex h-full flex-col" style={{ paddingTop: "max(1.25rem, env(safe-area-inset-top))", paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))" }}>
          <div className="flex items-center justify-between gap-4">{wordmark}<button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="inline-flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-soft transition-colors hover:bg-soft2 active:bg-(--t-surface-3)"><XIcon size={22} weight="bold" aria-hidden="true" /></button></div>
          <nav aria-label="Mobile primary" className="my-auto">
            <ul role="list" className="grid gap-1">{nav.links.map((l) => <li key={l.href} className="border-b border-hairline last:border-b-0"><a href={l.href} onClick={(e) => { e.preventDefault(); go(l.href); }} className="block py-3 font-display text-[30px] font-bold uppercase text-ink no-underline hover:text-primary active:text-primary">{l.label}</a></li>)}</ul>
          </nav>
          <div className="grid gap-3">
            <Pill href={nav.cta.href} className="w-full">{nav.cta.label}</Pill>
            <a href={tel(utility.phone)} className="inline-flex min-h-11 items-center justify-center gap-2 text-[17px] font-semibold text-ink no-underline transition-colors hover:text-(--t-primary-focus) hover:underline"><PhoneIcon size={18} weight="bold" aria-hidden="true" /><Mono>{utility.phone}</Mono></a>
          </div>
        </Container>
      </dialog>

      <noscript>
        <nav aria-label="Primary" className="border-b border-hairline bg-soft lg:hidden">
          <Container><ul role="list" className="flex flex-wrap gap-x-5 gap-y-1 py-3">{nav.links.concat(nav.cta).map((l) => <li key={l.href + l.label}><a href={l.href} className="text-[15px] text-ink no-underline">{l.label}</a></li>)}</ul></Container>
        </nav>
      </noscript>
    </header>
  );
}
