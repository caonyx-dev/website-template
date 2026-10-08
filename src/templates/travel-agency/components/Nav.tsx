// The reference's header floats over the sky rather than sitting on a surface: wordmark left, links centred, a
// menu button right that opens a contact panel. It picks up a white ground once the hero is behind it. The
// panel is modal — Escape closes it, Tab stays inside, focus returns to the button that opened it.
"use client";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRightIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import type { TravelContent } from "../content";
import { Btn, Container } from "./ui";

export default function Nav({ brand, nav }: { brand: string; nav: TravelContent["nav"] }) {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const sentinel = useRef<HTMLDivElement>(null);

  // An observer on a sentinel at the top of the page, never a scroll listener.
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
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const panel = panelRef.current;
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

  return (
    <>
      <div ref={sentinel} aria-hidden="true" className="absolute left-0 top-0 h-px w-px" />
      <header className={`sticky top-0 z-40 transition-colors duration-300 ${solid ? "bg-canvas/92 backdrop-blur-md" : ""}`}>
        <Container>
          <nav aria-label="Primary" className="flex min-h-[88px] items-center justify-between gap-5">
            <Link href="#main" translate="no" className="inline-flex min-h-11 items-center font-display text-[19px] uppercase leading-none tracking-[-0.01em] text-ink no-underline sm:text-[24px] lg:text-[27px]">
              {brand}
            </Link>

            <ul className="hidden list-none items-center gap-1 p-0 lg:flex">
              {nav.links.map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className="inline-flex min-h-11 items-center rounded-full px-4 text-[14px] font-semibold text-ink no-underline transition-colors duration-200 hover:text-(--t-primary-deep)">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2.5">
              <span className="hidden sm:block"><Btn href={nav.cta.href}>{nav.cta.label}</Btn></span>
              <button
                ref={toggleRef}
                type="button"
                onClick={() => setOpen(true)}
                aria-expanded={open}
                aria-controls={panelId}
                className="inline-flex size-12 items-center justify-center rounded-full border border-(--t-control) text-ink transition-colors duration-200 hover:border-ink hover:bg-(--t-soft)"
              >
                <ListIcon size={20} aria-hidden="true" /><span className="sr-only">{nav.menu}</span>
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* The contact panel the reference's hamburger opens. */}
      {open && (
        <>
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 bg-ink/50"
          />
          <div
            ref={panelRef}
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label={nav.panel.title}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-[460px] flex-col overflow-y-auto overscroll-contain bg-canvas px-7 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(1.5rem,env(safe-area-inset-top))] sm:px-10"
          >
            <div className="flex items-center justify-between">
              <span translate="no" className="font-display text-[22px] uppercase text-ink">{brand}</span>
              <button
                ref={closeRef}
                type="button"
                onClick={() => { setOpen(false); toggleRef.current?.focus(); }}
                className="inline-flex size-12 items-center justify-center rounded-full border border-(--t-control) text-ink transition-colors duration-200 hover:border-ink"
              >
                <XIcon size={19} aria-hidden="true" /><span className="sr-only">{nav.close}</span>
              </button>
            </div>

            <ul className="m-0 mt-10 list-none p-0">
              {nav.links.map((l) => (
                <li key={l.href + l.label} className="border-b border-(--t-hairline)">
                  <Link href={l.href} onClick={() => setOpen(false)} className="flex items-center justify-between gap-4 py-4 font-display text-[26px] uppercase text-ink no-underline">
                    {l.label}
                    <ArrowUpRightIcon size={18} aria-hidden="true" className="text-(--t-primary)" />
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.12em] text-(--t-muted)">{nav.panel.title}</h2>
            <dl className="m-0 mt-4 grid gap-4">
              <div>
                <dt className="text-[13px] text-(--t-muted)">Email</dt>
                <dd className="m-0">
                  <Link href={`mailto:${nav.panel.email.replace(/[[\]]/g, "")}`} className="inline-flex min-h-9 items-center text-[17px] text-ink underline underline-offset-4 transition-colors duration-200 hover:text-(--t-primary-deep)">{nav.panel.email}</Link>
                </dd>
              </div>
              <div>
                <dt className="text-[13px] text-(--t-muted)">Phone</dt>
                <dd className="m-0">
                  <Link href={`tel:${nav.panel.phone.replace(/[^+\d]/g, "")}`} className="inline-flex min-h-9 items-center text-[17px] text-ink underline underline-offset-4 transition-colors duration-200 hover:text-(--t-primary-deep)">{nav.panel.phone}</Link>
                </dd>
              </div>
              <div>
                <dt className="text-[13px] text-(--t-muted)">Address</dt>
                <dd className="m-0 mt-1">
                  <address className="not-italic text-[17px] leading-[1.6] text-(--t-body)">
                    {nav.panel.address.map((a) => <span key={a} className="block">{a}</span>)}
                  </address>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-[14px] leading-[1.65] text-(--t-muted)">{nav.panel.note}</p>
          </div>
        </>
      )}
    </>
  );
}
