"use client";
// Phone-only sticky bottom bar with "Request a quote" and a tel: "Book a call" once the hero has scrolled away.
import { useEffect, useState } from "react";
import { PhoneCallIcon } from "@phosphor-icons/react";
import type { LinkItem } from "@/lib/content";
import { Btn } from "./ui";

export default function MobileBar({ primary, phone }: { primary: LinkItem; phone: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("top"); if (!hero) return;
    const io = new IntersectionObserver(([e]) => setShow(!e.isIntersecting)); io.observe(hero); return () => io.disconnect();
  }, []);
  // Focused fields scroll clear of the bar while it is on screen.
  useEffect(() => {
    if (!show || !window.matchMedia("(max-width: 767px)").matches) return;
    document.documentElement.style.scrollPaddingBottom = "5.5rem";
    return () => { document.documentElement.style.scrollPaddingBottom = ""; };
  }, [show]);
  return (
    <div className={`fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-3 border-t border-hairline bg-white p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-lift transition-transform duration-300 motion-reduce:transition-none md:hidden ${show ? "translate-y-0" : "translate-y-full"}`} inert={!show}>
      <Btn href={primary.href} tone="lime" className="h-12 w-full whitespace-nowrap px-2 text-[13px]">{primary.label}</Btn>
      <Btn href={`tel:${phone.replace(/[^\d+]/g, "")}`} tone="outline" className="h-12 w-full whitespace-nowrap px-2 text-[13px]"><PhoneCallIcon size={18} weight="light" aria-hidden="true" />Book a call</Btn>
    </div>
  );
}
