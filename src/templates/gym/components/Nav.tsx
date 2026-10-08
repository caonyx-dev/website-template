"use client";
// Primary nav over the hero: wordmark with a volt full stop and the address line, centred links, the volt
// "Start free trial" block and a hamburger opening a full-screen drawer (schedule link first, phone, hours).
// A fixed canvas bar with a hairline rule slides down once the hero scrolls away. Phones: hamburger left,
// wordmark right; the volt CTA moves to the sticky bottom bar.
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ListIcon, PhoneIcon, XIcon } from "@phosphor-icons/react";
import type { GymContent } from "../content";
import { Btn, Container } from "./ui";

const Mark = ({ brand, big = false }: { brand: string; big?: boolean }) => <Link href="#top" className={`font-display font-bold tracking-[.04em] text-ink no-underline ${big ? "text-[34px]" : "text-[26px]"}`} translate="no">{brand}<span className="text-primary">.</span></Link>;

export default function Nav({ brand, nav }: { brand: string; nav: GymContent["nav"] }) {
  const [solid, setSolid] = useState(false);
  const drawer = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const hero = document.getElementById("top"); if (!hero) return;
    const io = new IntersectionObserver(([e]) => setSolid(!e.isIntersecting), { rootMargin: "-120px 0px 0px 0px" }); io.observe(hero); return () => io.disconnect();
  }, []);
  const tel = `tel:${nav.phone.replace(/[^\d+]/g, "")}`;
  const links = (animate = false, onPick?: () => void) => (
    <ul className="flex items-center gap-8">{nav.links.map((l, i) => <li key={l.href} className={animate ? "fade-up" : ""} style={animate ? { animationDelay: `${0.3 + i * 0.05}s` } : undefined}><a href={l.href} onClick={onPick} className="text-[15px] font-medium text-ink no-underline transition-colors hover:text-primary">{l.label}</a></li>)}</ul>
  );
  const burger = (cls = "") => <button type="button" onClick={() => drawer.current?.showModal()} aria-label="Open menu" className={`inline-flex h-11 w-11 items-center justify-center rounded-md text-ink ${cls}`}><ListIcon size={26} aria-hidden="true" /></button>;
  return (
    <header className="relative z-30">
      <div className="absolute inset-x-0 top-0">
        <Container className="flex h-[76px] items-center justify-between lg:h-[90px]">
          <div className="lg:hidden">{burger("gym-rise")}</div>
          <div className="gym-rise flex items-center gap-4"><Mark brand={brand} /><span className="hidden max-w-[150px] text-[13px] leading-[1.3] text-mute lg:block">{nav.address}</span></div>
          <nav aria-label="Main" className="hidden lg:block">{links(true)}</nav>
          <div className="gym-rise hidden items-center gap-5 lg:flex" style={{ animationDelay: ".55s" }}><Btn href={nav.cta.href}>{nav.cta.label}</Btn>{burger()}</div>
        </Container>
      </div>
      <div className={`fixed inset-x-0 top-0 z-40 border-b border-hairline bg-canvas transition-transform duration-300 motion-reduce:transition-none ${solid ? "translate-y-0" : "-translate-y-full"}`} inert={!solid}>
        <Container className="flex h-16 items-center justify-between">
          <div className="lg:hidden">{burger()}</div>
          <Mark brand={brand} />
          <nav aria-label="Main, fixed" className="hidden lg:block">{links()}</nav>
          <div className="hidden lg:block"><Btn href={nav.cta.href} className="h-11">{nav.cta.label}</Btn></div>
        </Container>
      </div>
      <dialog ref={drawer} aria-label="Menu" className="m-0 h-full max-h-none w-full max-w-none bg-canvas p-0 text-ink backdrop:bg-transparent [overscroll-behavior:contain]">
        <Container className="flex h-full flex-col py-5">
          <div className="flex items-center justify-between"><Mark brand={brand} big /><button type="button" onClick={() => drawer.current?.close()} aria-label="Close menu" className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-hairline text-ink"><XIcon size={24} aria-hidden="true" /></button></div>
          <nav aria-label="Menu" className="my-auto"><ul className="grid gap-1">{[nav.links[1], ...nav.links.filter((_, i) => i !== 1)].map((l, i) => <li key={l.href} className="menu-in" style={{ animationDelay: `${i * 0.04}s` }}><a href={l.href} onClick={() => drawer.current?.close()} className="block py-1 font-display text-[48px] font-bold leading-[1.05] text-ink no-underline hover:text-primary sm:text-[64px]">{l.label}</a></li>)}</ul></nav>
          <div className="grid gap-3 border-t border-hairline pt-6 text-[15px] text-body">
            <a href={tel} className="inline-flex items-center gap-2 text-ink no-underline"><PhoneIcon size={18} weight="light" aria-hidden="true" /><span className="tabular-nums">{nav.phone}</span></a>
            <span>{nav.hours}</span><span>{nav.address}</span>
            <Btn href={nav.cta.href} className="mt-2 w-full justify-between">{nav.cta.label}</Btn>
          </div>
        </Container>
      </dialog>
    </header>
  );
}
