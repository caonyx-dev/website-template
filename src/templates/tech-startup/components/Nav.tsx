"use client";
// A plain white 96px bar with a single hairline under it — no pill, no shadow. Wordmark left,
// links centred and uppercase, orange CTA right. Below lg it collapses to a sheet.
import { useEffect, useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { Button, Wrap } from "./ui";
import type { TechStartupContent } from "../content";

export default function Nav({ brand, nav }: { brand: string; nav: TechStartupContent["nav"] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas">
      <Wrap>
        <nav aria-label="Primary" className="flex h-20 items-center gap-6 lg:h-24">
          <a href="#main" className="flex items-center gap-2.5 font-display text-[26px] font-semibold tracking-[-0.02em] text-ink">
            <span aria-hidden className="grid size-7 place-items-center rounded-[5px] bg-primary">
              <span className="size-2.5 rotate-45 bg-canvas" />
            </span>
            {brand}
          </a>

          <ul className="mx-auto hidden items-center gap-9 lg:flex">
            {nav.links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="font-display text-[14px] font-semibold uppercase tracking-[0.06em] text-ink transition-colors duration-200 hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-3 lg:ml-0">
            <div className="hidden sm:block">
              <Button href={nav.cta.href}>{nav.cta.label}</Button>
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="ts-menu"
              className="grid size-11 place-items-center rounded-full border border-hairline-strong text-ink lg:hidden"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              {open ? <XIcon size={20} weight="light" /> : <ListIcon size={20} weight="light" />}
            </button>
          </div>
        </nav>
      </Wrap>

      {open && (
        <div id="ts-menu" className="menu-in border-t border-hairline bg-canvas lg:hidden">
          <Wrap className="py-4">
            <ul className="divide-y divide-hairline">
              {nav.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex h-14 items-center font-display text-[16px] font-semibold uppercase tracking-[0.06em] text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Button href={nav.cta.href} className="w-full justify-center">
                {nav.cta.label}
              </Button>
            </div>
          </Wrap>
        </div>
      )}
    </header>
  );
}
