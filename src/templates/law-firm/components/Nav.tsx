"use client";
// 01 The reference's nav: the serif wordmark, a rule, the phone pair stacked beside a brass phone glyph, then the
// section links with a brass underline under the one in view, and the booking pill. Phones get a sheet instead.
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ListIcon, XIcon, PhoneIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react";
import type { LawContent } from "../content";
import { Btn, Container, Num } from "./ui";

const tel = (s: string) => `tel:${s.replace(/[^\d+]/g, "")}`;
const mail = (s: string) => `mailto:${s.replace(/[[\]]/g, "")}`;

export default function Nav({ brand, top, nav }: { brand: string; top: LawContent["topbar"]; nav: LawContent["nav"] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => { if (!open) dialog.current?.close(); }, [open]);

  // Mark the section currently in view, which is what a one-page nav is for.
  useEffect(() => {
    const ids = nav.links.map((l) => l.href).filter((h) => h.startsWith("#")).map((h) => h.slice(1));
    const seen = new Map<string, number>();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => seen.set(e.target.id, e.intersectionRatio));
      let best = ""; let top = 0;
      seen.forEach((ratio, id) => { if (ratio > top) { top = ratio; best = id; } });
      if (best) setActive(`#${best}`);
    }, { rootMargin: "-120px 0px -55% 0px", threshold: [0, 0.25, 0.6, 1] });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [nav.links]);

  // Closing the sheet hands focus back to the button, so send it to the section the visitor actually chose.
  function go(href: string) {
    setOpen(false);
    if (!href.startsWith("#")) return;
    requestAnimationFrame(() => {
      const el = document.getElementById(href.slice(1));
      if (!el) return;
      el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  const wordmark = <span className="whitespace-nowrap font-display text-[24px] font-semibold leading-none text-ink sm:text-[28px]" translate="no">{brand}</span>;

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-canvas">
      <Container className="flex h-[88px] items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="no-underline">{wordmark}</Link>
          <span aria-hidden="true" className="hidden h-10 w-px bg-hairline xl:block" />
          <p className="hidden items-center gap-3 xl:flex">
            <PhoneIcon size={26} weight="light" aria-hidden="true" className="text-(--t-accent-deep)" />
            <span className="grid text-[15px] leading-tight">
              <a href={tel(top.phonePrimary)} className="text-ink no-underline transition-colors hover:text-primary"><Num>{top.phonePrimary}</Num></a>
              <a href={tel(top.phoneSecondary)} className="text-ink no-underline transition-colors hover:text-primary"><Num>{top.phoneSecondary}</Num></a>
            </span>
          </p>
        </div>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul role="list" className="flex items-center gap-7">
            {nav.links.map((l) => {
              const on = active === l.href;
              return (
                <li key={l.href}>
                  <a href={l.href} aria-current={on ? "true" : undefined} className={`relative block py-2 text-[16px] font-medium no-underline transition-colors ${on ? "text-ink" : "text-(--t-ink-secondary) hover:text-ink"}`}>
                    {l.label}
                    <span aria-hidden="true" className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-xs bg-accent transition-transform duration-200 motion-reduce:transition-none ${on ? "scale-x-100" : "scale-x-0"} [a:hover>&]:scale-x-100 [a:focus-visible>&]:scale-x-100`} />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden lg:block"><Btn href={nav.cta.href} className="px-6 text-[13px]">{nav.cta.label}</Btn></span>
          <button type="button" onClick={() => { setOpen(true); dialog.current?.showModal(); }} aria-label="Open menu" aria-haspopup="dialog" aria-expanded={open} className="inline-flex size-11 items-center justify-center rounded-sm border border-hairline-strong text-ink transition-colors hover:border-accent hover:text-(--t-accent-deep) active:bg-soft lg:hidden"><ListIcon size={24} weight="light" aria-hidden="true" /></button>
        </div>
      </Container>

      <dialog ref={dialog} onClose={() => setOpen(false)} onClick={(e) => { if (e.target === dialog.current) setOpen(false); }} aria-label="Site menu" className="m-0 h-full max-h-none w-full max-w-none bg-canvas p-0 text-ink shadow-lift backdrop:bg-(--t-dark)/50 [overscroll-behavior:contain]">
        <Container className="flex h-full flex-col py-5">
          <div className="flex items-center justify-between">{wordmark}<button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="inline-flex size-11 items-center justify-center rounded-sm border border-hairline-strong transition-colors hover:border-accent hover:text-(--t-accent-deep) active:bg-soft"><XIcon size={22} weight="light" aria-hidden="true" /></button></div>
          <nav aria-label="Mobile primary" className="my-auto">
            <ul role="list" className="grid gap-1">{nav.links.map((l) => <li key={l.href} className="border-b border-hairline last:border-b-0"><a href={l.href} onClick={(e) => { e.preventDefault(); go(l.href); }} className="block py-3 font-display text-[28px] font-semibold text-ink no-underline hover:text-(--t-accent-deep) active:text-(--t-accent-deep)">{l.label}</a></li>)}</ul>
          </nav>
          <div className="grid gap-3">
            <Btn href={nav.cta.href} className="w-full">{nav.cta.label}</Btn>
            <p className="grid gap-2 text-[16px]">
              <a href={tel(top.phonePrimary)} className="inline-flex items-center gap-2 py-1 text-(--t-ink-secondary) no-underline transition-colors hover:text-primary hover:underline active:text-primary"><PhoneIcon size={17} weight="light" aria-hidden="true" /><Num>{top.phonePrimary}</Num></a>
              <a href={mail(top.email)} className="inline-flex items-center gap-2 py-1 text-(--t-ink-secondary) no-underline transition-colors hover:text-primary hover:underline active:text-primary"><EnvelopeSimpleIcon size={17} weight="light" aria-hidden="true" />{top.email}</a>
            </p>
          </div>
        </Container>
      </dialog>

      <noscript>
        <nav aria-label="Primary" className="border-t border-hairline bg-soft lg:hidden">
          <Container><ul role="list" className="flex flex-wrap gap-x-5 gap-y-1 py-3">{nav.links.concat(nav.cta).map((l) => <li key={l.href + l.label}><a href={l.href} className="text-[15px] text-ink no-underline">{l.label}</a></li>)}</ul></Container>
        </nav>
      </noscript>
    </header>
  );
}
