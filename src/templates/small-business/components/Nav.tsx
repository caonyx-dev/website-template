// The reference's header sits transparent over the hero photograph and picks up a white ground on scroll.
// This template's DESIGN.md adds what the reference has not got: the phone number as a text link and an
// "Open now" chip worked out from the opening hours, because the question a local customer asks first is
// whether anyone will answer. Below `lg` the links move into a modal sheet.
"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ListIcon, PhoneIcon, XIcon } from "@phosphor-icons/react";
import type { SmallBusinessContent } from "../content";
import { useLocalTime } from "./localtime";
import { Btn, Container } from "./ui";

export default function Nav({ brand, nav }: { brand: string; nav: SmallBusinessContent["nav"] }) {
  const { openNow } = useLocalTime();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const sentinel = useRef<HTMLDivElement>(null);

  // An observer on a sentinel at the top of the page rather than a scroll listener.
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setSolid(!e.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); toggleRef.current?.focus(); return; }
      if (e.key !== "Tab") return;
      const panel = sheetRef.current;
      if (!panel) return;
      const stops = panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      if (!stops.length) return;
      const first = stops[0];
      const last = stops[stops.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [open]);

  const tel = `tel:${nav.phone.replace(/[^+\d]/g, "")}`;

  return (
    <>
      <div ref={sentinel} aria-hidden="true" className="absolute left-0 top-0 h-px w-px" />
      <header
        className={`sticky top-0 z-40 transition-colors duration-300 ${solid ? "border-b border-(--t-hairline) bg-canvas/95 backdrop-blur-md" : ""}`}
      >
        <Container>
          <nav aria-label="Primary" className={`flex min-h-[72px] items-center justify-between gap-4 ${solid ? "text-ink" : "text-(--t-on-dark) sb-on-dark"}`}>
            <Link href="#main" translate="no" className="inline-flex min-h-11 items-center font-display text-[21px] font-bold tracking-[-0.02em] no-underline sm:text-[23px]">
              {brand}
            </Link>

            <ul className="hidden list-none items-center gap-1 p-0 lg:flex">
              {nav.links.map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className={`inline-flex min-h-11 items-center rounded-full px-3.5 text-[15px] font-semibold no-underline transition-colors duration-200 ${solid ? "text-ink hover:text-primary" : "text-(--t-on-dark) hover:text-(--t-accent)"}`}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* The chip the DESIGN.md asks for beside the phone number, worked out from the hours table. */}
              {openNow !== null && (
                <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-semibold sm:px-3 sm:text-[13px] ${openNow ? "bg-(--t-badge-mint) text-ink" : "bg-(--t-strong) text-(--t-body)"}`}>
                  <span aria-hidden="true" className={`block size-2 rounded-full ${openNow ? "bg-primary" : "bg-(--t-muted-soft)"}`} />
                  {openNow ? nav.status.open : nav.status.closed}
                </span>
              )}

              <Link href={tel} className={`hidden min-h-11 items-center gap-2 rounded-full px-3 text-[15px] font-semibold no-underline transition-colors duration-200 sm:inline-flex ${solid ? "text-primary hover:bg-(--t-soft)" : "text-(--t-on-dark) hover:bg-white/15"}`}>
                <PhoneIcon size={17} weight="fill" aria-hidden="true" />
                <span className="sr-only">{nav.phoneLabel} </span>{nav.phone}
              </Link>

              <span className="hidden sm:block"><Btn href={nav.cta.href}>{nav.cta.label}</Btn></span>

              <button
                ref={toggleRef}
                type="button"
                onClick={() => setOpen(true)}
                aria-expanded={open}
                className={`inline-flex size-11 items-center justify-center rounded-full transition-colors duration-200 lg:hidden ${solid ? "text-ink hover:bg-(--t-soft)" : "text-(--t-on-dark) hover:bg-white/15"}`}
              >
                <ListIcon size={22} aria-hidden="true" /><span className="sr-only">{nav.menu}</span>
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {open && (
        <>
          <button type="button" aria-hidden="true" tabIndex={-1} onClick={() => setOpen(false)} className="fixed inset-0 z-50 bg-ink/50" />
          <div
            ref={sheetRef}
            role="dialog"
            aria-modal="true"
            aria-label={brand}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-[400px] flex-col overflow-y-auto overscroll-contain bg-canvas px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(1.25rem,env(safe-area-inset-top))]"
          >
            <div className="flex items-center justify-between">
              <span translate="no" className="font-display text-[21px] font-bold text-ink">{brand}</span>
              <button
                ref={closeRef}
                type="button"
                onClick={() => { setOpen(false); toggleRef.current?.focus(); }}
                className="inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-(--t-soft)"
              >
                <XIcon size={20} aria-hidden="true" /><span className="sr-only">{nav.close}</span>
              </button>
            </div>

            <ul className="m-0 mt-6 list-none p-0">
              {nav.links.map((l) => (
                <li key={l.href + l.label} className="border-b border-(--t-hairline)">
                  <Link href={l.href} onClick={() => setOpen(false)} className="block py-4 font-display text-[20px] font-semibold text-ink no-underline">{l.label}</Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-3">
              <Btn href={tel} tone="call" size="lg"><PhoneIcon size={17} weight="fill" aria-hidden="true" />{nav.phoneLabel} {nav.phone}</Btn>
              <Btn href={nav.cta.href} onClick={() => setOpen(false)} size="lg">{nav.cta.label}</Btn>
            </div>
          </div>
        </>
      )}
    </>
  );
}
