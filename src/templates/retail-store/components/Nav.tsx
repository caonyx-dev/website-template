// The reference's header: wordmark flush left, the tabs centred with a mega-menu under "Shop", and the search,
// account, saved and bag utilities flush right with a count bubble on the bag. The DESIGN.md adds the detail the
// reference has not got — "Sale" stays mulberry whether or not it is the current section — and makes the header
// sticky. Below `lg` the tabs move into a full-height sheet.
"use client";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { CaretDownIcon, HandbagIcon, HeartIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import type { RetailContent } from "../content";
import { useShop } from "./shop";
import { Container } from "./ui";

export default function Nav({ brand, nav }: { brand: string; nav: RetailContent["nav"] }) {
  const { count, setOpen: setBagOpen, saved } = useShop();
  const [menu, setMenu] = useState(false);
  const [mega, setMega] = useState(false);
  const sheetId = useId();
  const megaId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const sheetCloseRef = useRef<HTMLButtonElement>(null);
  const megaWrap = useRef<HTMLLIElement>(null);

  // The sheet is modal while it is open: Escape closes it, Tab stays inside it, the page beneath does not scroll.
  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const panel = sheetRef.current;
      if (!panel) return;
      const stops = [...panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), input")];
      if (!stops.length) return;
      const first = stops[0];
      const last = stops[stops.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    sheetCloseRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [menu]);

  // The mega-menu closes on Escape and when focus or the pointer leaves it entirely.
  useEffect(() => {
    if (!mega) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMega(false); };
    const onFocus = (e: FocusEvent) => {
      if (megaWrap.current && !megaWrap.current.contains(e.target as Node)) setMega(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("focusin", onFocus);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("focusin", onFocus); };
  }, [mega]);

  const utils = (
    <>
      {/* The reference's header also carries search and account icons. Neither exists here — this template
          ships the homepage only — and an icon promising search that lands on a category grid is a control
          that lies, so both are left out until there are pages behind them. */}
      <Link href="#new-in" className="relative hidden size-11 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-(--t-soft) sm:inline-flex">
        <HeartIcon size={20} aria-hidden="true" />
        <span className="sr-only">{nav.utilities.saved}{saved.length ? `, ${saved.length} saved` : ""}</span>
        {saved.length > 0 && <span aria-hidden="true" className="absolute right-1 top-1 size-2 rounded-full bg-primary" />}
      </Link>
      <button
        type="button"
        onClick={() => setBagOpen(true)}
        className="relative inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-(--t-soft)"
      >
        <HandbagIcon size={20} aria-hidden="true" />
        <span className="sr-only">{nav.utilities.bag}, {count} {count === 1 ? "item" : "items"}</span>
        {count > 0 && <span aria-hidden="true" className="absolute right-0.5 top-0.5 flex min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-bold leading-5 text-(--t-on-primary)">{count}</span>}
      </button>
    </>
  );

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-(--t-hairline) bg-canvas">
        <Container>
          <nav aria-label="Primary" className="flex min-h-[72px] items-center justify-between gap-3">
            <div className="flex items-center gap-1">
              <button
                ref={toggleRef}
                type="button"
                onClick={() => setMenu(true)}
                aria-expanded={menu}
                aria-controls={sheetId}
                className="inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-(--t-soft) lg:hidden"
              >
                <ListIcon size={22} aria-hidden="true" /><span className="sr-only">Open menu</span>
              </button>
              <Link href="#main" translate="no" className="inline-flex min-h-11 items-center font-display text-[24px] font-bold lowercase tracking-[-0.03em] text-ink no-underline">
                {brand}
              </Link>
            </div>

            <ul className="hidden list-none items-center gap-1 p-0 lg:flex">
              {nav.links.map((l) =>
                l.label === "Shop" ? (
                  <li key={l.label} ref={megaWrap} className="relative" onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
                    <button
                      type="button"
                      onClick={() => setMega((v) => !v)}
                      aria-expanded={mega}
                      aria-controls={megaId}
                      className="inline-flex min-h-11 items-center gap-1.5 rounded-lg px-3.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-ink transition-colors duration-200 hover:text-primary"
                    >
                      {l.label}
                      <CaretDownIcon size={11} weight="bold" aria-hidden="true" className={mega ? "rotate-180 transition-transform duration-200 motion-reduce:transition-none" : "transition-transform duration-200 motion-reduce:transition-none"} />
                    </button>

                    <div
                      id={megaId}
                      hidden={!mega}
                      className="absolute left-1/2 top-full z-10 w-[min(720px,calc(100vw-3rem))] -translate-x-1/2 rounded-lg border border-(--t-hairline) bg-canvas p-7 shadow-(--t-shadow-lift)"
                    >
                      <div className="grid grid-cols-4 gap-6">
                        {nav.mega.map((col) => (
                          <div key={col.title}>
                            <p className="font-display text-[14px] font-semibold text-ink">{col.title}</p>
                            <ul aria-label={col.title} className="m-0 mt-3 grid list-none gap-1 p-0">
                              {col.links.map((ml) => (
                                <li key={col.title + ml.label}>
                                  <Link href={ml.href} onClick={() => setMega(false)} className="inline-flex min-h-8 items-center text-[14px] text-(--t-body) no-underline transition-colors duration-200 hover:text-primary">
                                    {ml.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className={`inline-flex min-h-11 items-center rounded-lg px-3.5 text-[13px] font-semibold uppercase tracking-[0.06em] no-underline transition-colors duration-200 hover:text-primary ${l.sale ? "text-primary" : "text-ink"}`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>

            <div className="flex items-center">{utils}</div>
          </nav>
        </Container>
      </header>

      {/* The phone sheet. */}
      <div
        ref={sheetRef}
        id={sheetId}
        hidden={!menu}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-canvas px-5 pb-12 pt-[max(1rem,env(safe-area-inset-top))] lg:hidden"
      >
        <div className="flex items-center justify-between">
          <span translate="no" className="font-display text-[22px] font-bold lowercase tracking-[-0.03em] text-ink">{brand}</span>
          <button
            ref={sheetCloseRef}
            type="button"
            onClick={() => { setMenu(false); toggleRef.current?.focus(); }}
            className="inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-(--t-soft)"
          >
            <XIcon size={20} aria-hidden="true" /><span className="sr-only">Close menu</span>
          </button>
        </div>

        <ul className="m-0 mt-5 list-none p-0">
          {nav.links.map((l) => (
            <li key={l.label} className="border-b border-(--t-hairline)">
              <Link
                href={l.href}
                onClick={() => setMenu(false)}
                className={`block py-4 font-display text-[20px] font-semibold no-underline ${l.sale ? "text-primary" : "text-ink"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 grid gap-7 sm:grid-cols-2">
          {nav.mega.map((col) => (
            <div key={col.title}>
              <p className="font-display text-[13px] font-semibold uppercase tracking-[0.06em] text-(--t-muted)">{col.title}</p>
              <ul aria-label={col.title} className="m-0 mt-2 grid list-none gap-1 p-0">
                {col.links.map((ml) => (
                  <li key={col.title + ml.label}>
                    <Link href={ml.href} onClick={() => setMenu(false)} className="inline-flex min-h-9 items-center text-[15px] text-(--t-body) no-underline">{ml.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
