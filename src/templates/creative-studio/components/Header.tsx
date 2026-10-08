"use client";
// Header: transparent over the black hero (white wordmark with a lime dot, round white menu button), then a
// sticky lime bar once the hero scrolls away. The menu is a full graphite overlay with the links, email
// and socials. (The reference also has a dark-mode toggle; this template ships light only.)
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import type { StudioContent } from "../content";
import Letters from "@/components/Letters";
import { Container } from "./ui";

export default function Header({ brand, nav }: { brand: string; nav: StudioContent["nav"] }) {
  const [solid, setSolid] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const hero = document.getElementById("top"); if (!hero) return;
    const io = new IntersectionObserver(([e]) => setSolid(!e.isIntersecting), { rootMargin: "-80px 0px 0px 0px" });
    io.observe(hero); return () => io.disconnect();
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-30 transition-colors duration-300 ${solid ? "bg-primary text-ink" : "bg-transparent text-white"}`}>
      <Container className="flex h-[100px] items-center justify-between">
        <Link href="#top" className="font-display text-[34px] font-bold tracking-[-1px] no-underline" translate="no"><Letters text={brand} step={0.04} /><span className="pop-in inline-block text-primary" style={{ animationDelay: ".5s", ...(solid ? { color: "var(--t-ink)" } : {}) }}>.</span></Link>
        <button type="button" onClick={() => dialog.current?.showModal()} aria-label="Open menu" className={`pop-in inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors ${solid ? "bg-dark text-white" : "bg-white text-ink"}`} style={{ animationDelay: ".6s" }}><ListIcon size={22} weight="bold" aria-hidden="true" /></button>
      </Container>
      <dialog ref={dialog} aria-label="Menu" className="m-0 h-full max-h-none w-full max-w-none bg-dark p-0 text-white backdrop:bg-transparent [overscroll-behavior:contain]">
        <Container className="flex h-full flex-col py-7">
          <div className="flex items-center justify-between"><span className="font-display text-[34px] font-bold" translate="no">{brand}<span className="text-primary">.</span></span><button type="button" onClick={() => dialog.current?.close()} aria-label="Close menu" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink"><XIcon size={22} weight="bold" aria-hidden="true" /></button></div>
          <nav aria-label="Menu" className="my-auto"><ul className="grid gap-2">{nav.links.map((l) => <li key={l.href}><a href={l.href} onClick={() => dialog.current?.close()} className="font-display text-[44px] font-bold leading-tight text-white no-underline hover:text-primary sm:text-[64px]">{l.label}</a></li>)}</ul></nav>
          <div className="flex flex-wrap items-center justify-between gap-4 text-[16px] text-white/70"><a href={`mailto:${nav.email.replace(/[\[\]]/g, "")}`} className="text-white no-underline">{nav.email}</a><ul className="flex gap-6">{nav.socials.map((s) => <li key={s.href}><a href={s.href} className="no-underline hover:text-primary">{s.label}</a></li>)}</ul></div>
        </Container>
      </dialog>
    </header>
  );
}
