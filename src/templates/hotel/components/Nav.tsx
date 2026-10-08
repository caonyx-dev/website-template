"use client";
// Navy nav over the hero like the reference: wordmark with five gold stars at the left, uppercase letterspaced
// links in the centre, the phone and the gold-outlined "Reservation" button at the right. Transparent over the
// hero, it becomes a solid navy bar with a gold hairline once the hero scrolls away. The link for the section
// in view is marked current and turns gold. Phones: wordmark and a hamburger opening a full-screen navy menu.
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ListIcon, StarIcon, XIcon } from "@phosphor-icons/react";
import type { HotelContent } from "../content";
import { Btn, Container } from "./ui";

export function Mark({ brand, size = 24 }: { brand: string; size?: number }) {
  return (
    <Link href="#top" className="grid justify-items-center gap-1 text-on-dark no-underline" translate="no">
      <span className="font-display uppercase tracking-[.2em]" style={{ fontSize: size }}>{brand}</span>
      <span className="flex gap-0.5 text-accent" aria-hidden="true">{[0, 1, 2, 3, 4].map((i) => <StarIcon key={i} size={7} weight="fill" />)}</span>
    </Link>
  );
}

export default function Nav({ brand, nav }: { brand: string; nav: HotelContent["nav"] }) {
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState("top");
  const menu = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const hero = document.getElementById("top"); if (!hero) return;
    const io = new IntersectionObserver(([e]) => setSolid(!e.isIntersecting), { rootMargin: "-80px 0px 0px 0px" }); io.observe(hero); return () => io.disconnect();
  }, []);
  useEffect(() => {
    const ids = nav.links.map((l) => l.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver((es) => { es.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }); }, { rootMargin: "-45% 0px -50% 0px" });
    els.forEach((el) => io.observe(el)); return () => io.disconnect();
  }, [nav.links]);
  const tel = `tel:${nav.phone.replace(/[^\d+]/g, "")}`;
  return (
    <header className={`hotel-in fixed inset-x-0 top-0 z-40 text-on-dark transition-colors duration-500 ${solid ? "border-b border-accent/50 bg-dark" : "bg-gradient-to-b from-ink/50 to-transparent"}`} style={{ animationDelay: ".9s" }}>
      <Container className="flex h-[76px] items-center justify-between">
        <Mark brand={brand} />
        <nav aria-label="Main" className="hidden lg:block"><ul className="flex items-center gap-9">{nav.links.map((l) => <li key={l.href}><a href={l.href} aria-current={active === l.href.slice(1) ? "true" : undefined} className={`text-[13px] uppercase tracking-[1.8px] no-underline transition-colors hover:text-accent ${active === l.href.slice(1) ? "text-accent" : "text-on-dark"}`}>{l.label}</a></li>)}</ul></nav>
        <div className="hidden items-center gap-6 lg:flex"><a href={tel} className="text-[13px] tracking-[1px] text-on-dark no-underline hover:text-accent"><span className="tabular-nums">{nav.phone}</span></a><Btn href={nav.cta.href} tone="ghost-gold" className="h-11">{nav.cta.label}</Btn></div>
        <button type="button" onClick={() => menu.current?.showModal()} aria-label="Open menu" className="inline-flex h-11 w-11 items-center justify-center text-on-dark lg:hidden"><ListIcon size={26} aria-hidden="true" /></button>
      </Container>
      <dialog ref={menu} aria-label="Menu" className="m-0 h-full max-h-none w-full max-w-none bg-dark p-0 text-on-dark backdrop:bg-transparent [overscroll-behavior:contain]">
        <Container className="flex h-full flex-col py-4">
          <div className="flex items-center justify-between"><Mark brand={brand} /><button type="button" onClick={() => menu.current?.close()} aria-label="Close menu" className="inline-flex h-11 w-11 items-center justify-center text-on-dark"><XIcon size={26} aria-hidden="true" /></button></div>
          <nav aria-label="Menu" className="my-auto"><ul className="grid gap-5 text-center">{nav.links.map((l, i) => <li key={l.href} className="menu-in" style={{ animationDelay: `${i * 0.05}s` }}><a href={l.href} onClick={() => menu.current?.close()} aria-current={active === l.href.slice(1) ? "true" : undefined} className={`font-display text-[34px] no-underline hover:text-accent ${active === l.href.slice(1) ? "text-accent" : "text-on-dark"}`}>{l.label}</a></li>)}</ul></nav>
          <div className="grid justify-items-center gap-4 border-t border-accent/30 pt-6"><a href={tel} className="text-[14px] tracking-[1px] text-on-dark no-underline"><span className="tabular-nums">{nav.phone}</span></a><Btn href={nav.cta.href} tone="ghost-gold">{nav.cta.label}</Btn></div>
        </Container>
      </dialog>
    </header>
  );
}
