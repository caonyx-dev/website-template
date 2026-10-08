// The reference's navigation is a floating rounded bar that sits *over* the hero photograph rather than above it:
// wordmark at the left, links in the middle, one pill at the right. It keeps floating as the page scrolls, picking
// up an opaque ground once the hero is behind it. On phones the links move into a full-height panel.
"use client";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import type { LinkItem } from "@/lib/content";
import { Container, Plain } from "./ui";

export default function Nav({ brand, nav }: { brand: string; nav: { links: LinkItem[]; cta: LinkItem } }) {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const sentinel = useRef<HTMLDivElement>(null);

  // An observer on a sentinel at the top of the page rather than a scroll listener.
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setSolid(!e.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // While the panel is open it behaves as a modal: Escape closes it and returns focus to the toggle, Tab is
  // kept inside the toggle and the panel (otherwise it walks into the page hidden behind the overlay), and the
  // page beneath does not scroll.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const panel = panelRef.current;
      const toggle = toggleRef.current;
      if (!panel || !toggle) return;
      const stops = [toggle, ...panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")];
      const first = stops[0];
      const last = stops[stops.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <div ref={sentinel} aria-hidden="true" className="absolute left-0 top-0 h-px w-px" />
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
        <Container className="pointer-events-auto pt-3 sm:pt-5">
          <nav
            aria-label="Primary"
            className={`flex items-center justify-between gap-4 rounded-full p-2 pl-5 transition-colors duration-300 sm:pl-7 ${solid ? "bg-ink/95 text-(--t-on-dark) backdrop-blur-md nim-on-dark" : "bg-white/10 text-(--t-on-dark) backdrop-blur-md nim-on-dark"}`}
          >
            <Link href="#main" className="inline-flex min-h-11 items-center font-display text-[20px] font-extrabold tracking-[-0.03em] text-(--t-on-dark) no-underline sm:text-[22px]">
              {brand}
            </Link>

            <ul className="hidden list-none items-center gap-1 p-0 lg:flex">
              {nav.links.map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className="inline-flex min-h-11 items-center rounded-full px-4 text-[15px] font-medium text-(--t-on-dark) no-underline transition-colors duration-200 hover:bg-white/15">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              {/* Wrapped rather than hidden through `className`: the utility would land beside the pill's own
                  `inline-flex` and lose. Below `sm` the action bar at the foot of the screen carries this. */}
              <span className="hidden sm:block"><Plain href={nav.cta.href} tone="primary">{nav.cta.label}</Plain></span>
              <button
                ref={toggleRef}
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls={panelId}
                className="inline-flex size-12 items-center justify-center rounded-full bg-white/15 text-(--t-on-dark) transition-colors duration-200 hover:bg-white/25 lg:hidden"
              >
                {open ? <XIcon size={20} weight="bold" /> : <ListIcon size={20} weight="bold" />}
                <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* The phone panel. Rendered beneath the bar so the close button stays reachable. */}
      <div
        ref={panelRef}
        id={panelId}
        hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className="fixed inset-0 z-30 overflow-y-auto overscroll-contain bg-ink px-6 pb-12 pt-28 text-(--t-on-dark) nim-on-dark lg:hidden"
      >
        <ul className="m-0 list-none p-0">
          {nav.links.map((l) => (
            <li key={l.href + l.label} className="border-b border-white/15">
              <Link href={l.href} onClick={() => setOpen(false)} className="block py-4 font-display text-[28px] font-bold tracking-[-0.03em] text-(--t-on-dark) no-underline">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Plain href={nav.cta.href} tone="primary" className="mt-8 w-full">{nav.cta.label}</Plain>
      </div>
    </>
  );
}
