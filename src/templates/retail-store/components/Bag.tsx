// The DESIGN.md's `cart-drawer`: a right-anchored panel with the line items, a subtotal and a checkout button
// that is the hand-off point to a platform this template does not have — so the button says so rather than
// pretending. The drawer is modal: Escape closes it, Tab stays inside, the page beneath does not scroll.
"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef } from "react";
import { MinusIcon, PlusIcon, TrashIcon, XIcon } from "@phosphor-icons/react";
import { CURRENCY, LOCALE, type RetailContent } from "../content";
import { useShop } from "./shop";
import { Btn, money } from "./ui";

export default function Bag({ b }: { b: RetailContent["bag"] }) {
  const { lines, subtotal, count, open, setOpen, setQty, remove, announcement } = useShop();
  const panelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnTo = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    returnTo.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); return; }
      if (e.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const stops = panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), input");
      if (!stops.length) return;
      const first = stops[0];
      const last = stops[stops.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      returnTo.current?.focus?.();
    };
  }, [open, setOpen]);

  return (
    <>
      {open && (
        <>
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="rst-scrim fixed inset-0 z-50 bg-ink/50"
          />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="rst-drawer fixed inset-y-0 right-0 z-50 flex w-full max-w-[420px] flex-col overscroll-contain rounded-l-xl bg-canvas"
          >
            {/* Inside the dialog, because `aria-modal` hides everything outside it. */}
            <p role="status" className="sr-only">{announcement.text}</p>

            <div className="flex items-center justify-between border-b border-(--t-hairline) px-6 py-4 pt-[max(1rem,env(safe-area-inset-top))]">
              <h2 id={titleId} ref={titleRef} tabIndex={-1} className="font-display text-[18px] font-bold text-ink outline-none">
                {b.title} <span className="text-(--t-muted)">({count})</span>
              </h2>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-(--t-soft)"
              >
                <XIcon size={19} aria-hidden="true" /><span className="sr-only">{b.close}</span>
              </button>
            </div>

            {lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
                <p className="text-[15px] leading-[1.6] text-(--t-muted)">{b.empty}</p>
                <Btn href={b.emptyCta.href} onClick={() => setOpen(false)}>{b.emptyCta.label}</Btn>
              </div>
            ) : (
              <ul className="m-0 flex-1 list-none overflow-y-auto overscroll-contain p-0">
                {lines.map((l) => (
                  <li key={`${l.product.id}-${l.variant}`} className="flex gap-4 border-b border-(--t-hairline-soft) px-6 py-5">
                    <Image src={l.product.image.src} alt="" aria-hidden="true" placeholder="blur" sizes="80px" className="size-20 shrink-0 rounded-md object-cover" />
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-[15px] font-semibold text-ink">{l.product.name}</p>
                      <p className="mt-0.5 text-[13px] text-(--t-muted)">{l.variant}</p>
                      <div className="mt-3 flex items-center justify-between gap-3">
                        <div className="inline-flex items-center rounded-lg border border-(--t-hairline)">
                          <button
                            type="button"
                            disabled={l.qty <= 1}
                            onClick={() => setQty(l.product.id, l.variant, l.qty - 1)}
                            className="inline-flex size-9 items-center justify-center rounded-l-lg text-ink transition-colors duration-200 hover:bg-(--t-soft) disabled:cursor-not-allowed disabled:text-(--t-muted-soft) disabled:hover:bg-transparent"
                          >
                            <MinusIcon size={13} weight="bold" aria-hidden="true" />
                            {/* Disabled at one rather than deleting the line: a control labelled "decrease"
                                must not remove things. Remove is the button beside it. */}
                            <span className="sr-only">Decrease {b.qty.toLowerCase()} of {l.product.name}, {l.variant}</span>
                          </button>
                          <span className="min-w-8 text-center text-[14px] font-semibold tabular-nums text-ink">
                            {l.qty}<span className="sr-only"> {l.product.name}, {l.variant}, in your bag</span>
                          </span>
                          <button
                            type="button"
                            onClick={() => setQty(l.product.id, l.variant, l.qty + 1)}
                            className="inline-flex size-9 items-center justify-center rounded-r-lg text-ink transition-colors duration-200 hover:bg-(--t-soft)"
                          >
                            <PlusIcon size={13} weight="bold" aria-hidden="true" />
                            <span className="sr-only">Increase {b.qty.toLowerCase()} of {l.product.name}, {l.variant}</span>
                          </button>
                        </div>
                        <p className="font-display text-[15px] font-semibold tabular-nums text-ink">
                          {money(l.product.price * l.qty, LOCALE, CURRENCY)}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => { remove(l.product.id, l.variant); titleRef.current?.focus(); }}
                      className="inline-flex size-9 shrink-0 items-center justify-center self-start rounded-full text-(--t-muted) transition-colors duration-200 hover:bg-(--t-soft) hover:text-ink"
                    >
                      <TrashIcon size={16} aria-hidden="true" />
                      <span className="sr-only">{b.remove} {l.product.name}, {l.variant}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {lines.length > 0 && (
              <div className="border-t border-(--t-hairline) px-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-5">
                <div className="flex items-baseline justify-between">
                  <p className="font-display text-[16px] font-semibold text-ink">{b.subtotal}</p>
                  <p className="font-display text-[20px] font-bold tabular-nums text-ink">{money(subtotal, LOCALE, CURRENCY)}</p>
                </div>
                <p className="mt-1 text-[12px] text-(--t-muted)">{b.delivery}</p>
                <Btn type="button" disabled className="mt-4 w-full" size="lg">{b.checkout}</Btn>
                <p className="mt-3 text-[12px] leading-[1.5] text-(--t-muted)">{b.checkoutNote}</p>
                <Link href={b.emptyCta.href} onClick={() => setOpen(false)} className="mt-3 inline-flex min-h-9 items-center text-[13px] font-semibold text-primary underline underline-offset-4">
                  {b.continue}
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
