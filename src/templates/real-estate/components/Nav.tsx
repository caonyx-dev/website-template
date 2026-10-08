"use client";
// Floating pill nav — inset from the top and sides rather than a full-width strip, per the reference.
// It hides on scroll down and returns on scroll up, and collapses to a white sheet below 1024px.
import { useEffect, useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { Button } from "./ui";
import type { RealEstateContent } from "../content";

export default function Nav({ brand, nav }: { brand: string; nav: RealEstateContent["nav"] }) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Hide on scroll down, return on scroll up — through ScrollTrigger, never a raw scroll listener.
  useEffect(() => {
    let kill = () => {};
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const st = ScrollTrigger.create({
          start: 160,
          end: "max",
          onUpdate: (self) => setHidden(self.direction === 1),
          onLeaveBack: () => setHidden(false),
        });
        return () => st.kill();
      });
      kill = () => mm.revert();
    })();
    return () => kill();
  }, []);

  // Close the sheet on Escape and lock the page behind it.
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ${hidden && !open ? "-translate-y-[140%]" : "translate-y-0"}`}
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-4 sm:px-6 sm:pt-6">
        <nav
          aria-label="Primary"
          className="flex items-center gap-4 rounded-full bg-canvas px-5 py-3 shadow-soft sm:px-6 lg:h-[84px] lg:py-0"
        >
          <a href="#main" className="flex items-center gap-2.5 font-display text-[24px] font-bold tracking-[-0.02em] text-ink">
            <span aria-hidden className="grid size-8 place-items-center rounded-[10px] bg-primary">
              <span className="size-3 rounded-[3px] bg-ink" />
            </span>
            {brand}
          </a>

          <ul className="ml-6 hidden items-center gap-8 lg:flex">
            {nav.links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="relative py-2 font-body text-[16px] font-medium text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-3 sm:gap-5">
            <p className="hidden items-baseline gap-2 xl:flex">
              <span className="font-body text-[15px] text-body">{nav.phoneLabel}</span>
              <a
                href={`tel:${nav.phone.replace(/[^\d+]/g, "")}`}
                className="font-body text-[16px] font-semibold text-ink decoration-primary decoration-2 underline-offset-4 hover:underline"
              >
                {nav.phone}
              </a>
            </p>
            {/* Wrapped rather than given `hidden sm:inline-flex`: Button's base `inline-flex` is the same
                Tailwind display group, so the two utilities fight and the button leaks onto phones. */}
            <div className="hidden sm:block">
              <Button href={nav.cta.href}>{nav.cta.label}</Button>
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="re-menu"
              className="grid size-11 place-items-center rounded-full bg-soft2 text-ink lg:hidden"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              {open ? <XIcon size={20} weight="light" /> : <ListIcon size={20} weight="light" />}
            </button>
          </div>
        </nav>

        {open && (
          <div id="re-menu" className="menu-in mt-3 rounded-[30px] bg-canvas p-4 shadow-soft lg:hidden">
            <ul className="divide-y divide-hairline">
              {nav.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex h-14 items-center font-body text-[18px] font-medium text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-3">
              <Button href={nav.cta.href} className="justify-center">
                {nav.cta.label}
              </Button>
              <a
                href={`tel:${nav.phone.replace(/[^\d+]/g, "")}`}
                className="text-center font-body text-[16px] font-semibold text-ink decoration-primary decoration-2 underline-offset-4"
              >
                {nav.phone}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
