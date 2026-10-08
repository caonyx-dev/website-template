"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HouseLineIcon, PhoneCallIcon, DotsNineIcon, XIcon } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

export type NavLink = { href: string; label: string };

export default function Nav({ brand, links, phone, phoneLabel = "Call us", cta, heroSelector = ".hero", menuExtra = [] }: { brand: string; links: NavLink[]; phone?: string; phoneLabel?: string; cta: NavLink; heroSelector?: string; menuExtra?: NavLink[] }) {
  const ref = useRef<HTMLElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(heroSelector);
    if (!hero) return;
    const io = new IntersectionObserver(([e]) => setSolid(!e.isIntersecting), { rootMargin: "-88px 0px 0px 0px", threshold: 0 });
    io.observe(hero);
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      ScrollTrigger.create({
        start: "top -40",
        onUpdate: (self) => {
          const hide = self.direction === 1 && self.scroll() > 320 && !dialog.current?.open;
          gsap.to(ref.current, { yPercent: hide ? -100 : 0, duration: .35, ease: "power2.out", overwrite: true });
        },
      });
    });
    return () => { io.disconnect(); mm.revert(); };
  }, [heroSelector]);

  const open = () => { dialog.current?.showModal(); document.documentElement.classList.add("lenis-stopped"); };
  const close = () => { dialog.current?.close(); document.documentElement.classList.remove("lenis-stopped"); };

  return (
    <header ref={ref} className={`fixed inset-x-0 top-0 z-20 h-[72px] sm:h-[88px] flex items-center transition-[background-color,color,box-shadow] duration-300 ${solid ? "bg-canvas/90 text-ink backdrop-blur-md shadow-[0_1px_0_var(--t-hairline)]" : "text-on-dark"}`}>
      <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between gap-3 px-5 sm:gap-6 sm:px-8">
        <Link href="#top" className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-[18px] font-medium no-underline sm:text-[22px]" translate="no">
          <HouseLineIcon size={26} weight="light" className="hidden text-accent sm:block" aria-hidden="true" />{brand}
        </Link>
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex gap-8">
            {links.map((l) => <li key={l.href}><a href={l.href} className="text-[15px] font-medium opacity-85 no-underline hover:opacity-100 hover:shadow-[inset_0_-1px_0_currentColor] py-2">{l.label}</a></li>)}
          </ul>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          {phone && (
            <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="mr-2 hidden items-center gap-2.5 no-underline xl:flex">
              <PhoneCallIcon size={26} weight="light" aria-hidden="true" />
              <span className="leading-tight"><span className="block text-[12px] opacity-80">{phoneLabel}</span><b className="block text-[15px] font-medium">{phone}</b></span>
            </a>
          )}
          <Link href={cta.href} className="inline-flex h-10 items-center whitespace-nowrap rounded-(--t-radius-button) bg-accent px-3 font-button text-[12px] font-medium text-on-primary no-underline hover:bg-accent-deep sm:h-11 sm:px-5 sm:text-[14px]">{cta.label}</Link>
          <button type="button" onClick={open} aria-label="Open menu" className={`inline-flex h-11 w-11 items-center justify-center rounded-full border text-[20px] sm:h-[52px] sm:w-[52px] transition-colors hover:bg-accent hover:text-on-primary hover:border-accent ${solid ? "border-hairline bg-surface" : "border-white/20 bg-white/10"}`}>
            <DotsNineIcon size={22} weight="light" aria-hidden="true" />
          </button>
        </div>
      </div>

      <dialog ref={dialog} onClose={close} aria-label="Menu" className="m-0 h-full max-h-none w-full max-w-none bg-[color-mix(in_srgb,var(--t-dark)_97%,transparent)] p-6 text-on-dark backdrop:bg-transparent [overscroll-behavior:contain]">
        <button type="button" onClick={close} aria-label="Close menu" className="absolute right-6 top-5 inline-flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/20 bg-white/10 hover:bg-surface hover:text-ink"><XIcon size={22} weight="light" aria-hidden="true" /></button>
        <div className="mx-auto flex h-full max-w-[1360px] flex-col justify-center px-2 sm:px-8">
          <ul className="grid gap-3">
            {[...links, ...menuExtra].map((l) => <li key={l.href}><a href={l.href} onClick={close} className="font-display text-[32px] font-medium no-underline hover:text-accent sm:text-[48px] lg:text-[56px]">{l.label}</a></li>)}
          </ul>
          <div className="mt-10 grid gap-1 text-on-dark-muted">{phone && <span>{phone}</span>}</div>
        </div>
      </dialog>
    </header>
  );
}
