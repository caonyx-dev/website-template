"use client";
// The DESIGN.md sticky-trial-cta: on phones a full-width volt bar fixed above the safe area, "Start free trial"
// at the left and the phone glyph at the right, shown once the hero has scrolled away.
import { useEffect, useState } from "react";
import { ArrowUpRightIcon, PhoneIcon } from "@phosphor-icons/react";
import type { LinkItem } from "@/lib/content";

export default function MobileBar({ cta, phone }: { cta: LinkItem; phone: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("top"); if (!hero) return;
    const io = new IntersectionObserver(([e]) => setShow(!e.isIntersecting)); io.observe(hero); return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (!show || !window.matchMedia("(max-width: 767px)").matches) return;
    document.documentElement.style.scrollPaddingBottom = "4.5rem";
    return () => { document.documentElement.style.scrollPaddingBottom = ""; };
  }, [show]);
  return (
    <div className={`fixed inset-x-0 bottom-0 z-30 flex items-stretch border-t border-hairline-strong bg-primary text-on-primary transition-transform duration-300 motion-reduce:transition-none md:hidden ${show ? "translate-y-0" : "translate-y-full"}`} inert={!show}>
      <a href={cta.href} className="flex min-h-14 flex-1 items-center justify-between px-5 pb-[env(safe-area-inset-bottom)] font-button text-[14px] font-medium text-on-primary no-underline">{cta.label}<ArrowUpRightIcon size={18} weight="bold" aria-hidden="true" /></a>
      <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} aria-label="Call the gym" className="flex w-16 items-center justify-center border-l border-canvas/20 pb-[env(safe-area-inset-bottom)] text-on-primary"><PhoneIcon size={22} weight="bold" aria-hidden="true" /></a>
    </div>
  );
}
