"use client";
// A full-bleed render with a light panel overlapping it carrying an 84px orange play button.
// Nothing autoplays: the button opens a dialog that traps focus and closes on Escape.
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { XIcon } from "@phosphor-icons/react";
import type { TechStartupContent } from "../content";

export default function Explainer({ e }: { e: TechStartupContent["explainer"] }) {
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    // Captured now: by cleanup time the ref may point elsewhere, and focus must return
    // to the button that opened the dialog.
    const toRefocus = opener.current;
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") setOpen(false);
      if (ev.key !== "Tab" || !panel.current) return;
      const f = panel.current.querySelectorAll<HTMLElement>('button, [href], input, [tabindex]:not([tabindex="-1"])');
      if (!f.length) return;
      const [first, last] = [f[0], f[f.length - 1]];
      if (ev.shiftKey && document.activeElement === first) {
        ev.preventDefault();
        last.focus();
      } else if (!ev.shiftKey && document.activeElement === last) {
        ev.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    panel.current?.querySelector<HTMLElement>("button")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
      toRefocus?.focus();
    };
  }, [open]);

  return (
    <section className="bg-canvas pb-24 sm:pb-28 lg:pb-36">
      <div className="relative">
        <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
          <Image
            src={e.image.src}
            alt={e.image.alt}
            fill
            sizes="100vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>

        {/* Light panel overlapping the render's lower-right, as in the reference. */}
        <div className="absolute inset-x-5 bottom-5 sm:inset-x-auto sm:bottom-8 sm:right-10 sm:w-[400px] lg:right-20 lg:w-[460px]">
          <div className="flex items-center justify-center rounded-[20px] bg-soft px-8 py-10 sm:py-14">
            <button
              ref={opener}
              type="button"
              onClick={() => setOpen(true)}
              className="group grid size-[84px] place-items-center rounded-full bg-primary text-on-primary transition-transform duration-300 hover:scale-105"
            >
              <span className="sr-only">{e.cta}</span>
              <span aria-hidden className="ml-1 text-[22px] leading-none">
                ▶
              </span>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="ts-explainer-title"
          className="fixed inset-0 z-[60] grid place-items-center bg-ink/70 p-5 backdrop-blur-sm"
          onClick={(ev) => ev.target === ev.currentTarget && setOpen(false)}
        >
          <div ref={panel} className="menu-in w-full max-w-[560px] rounded-[20px] bg-canvas p-8 sm:p-10">
            <div className="flex items-start justify-between gap-6">
              <h2 id="ts-explainer-title" className="font-display text-[clamp(1.375rem,2.4vw,1.75rem)] font-medium leading-[1.15] text-ink">
                {e.dialogTitle}
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid size-10 shrink-0 place-items-center rounded-full border border-hairline-strong text-ink"
              >
                <span className="sr-only">Close</span>
                <XIcon size={18} weight="light" />
              </button>
            </div>
            <p className="mt-5 font-body text-[17px] leading-[1.5] text-body">{e.dialogText}</p>
          </div>
        </div>
      )}
    </section>
  );
}
