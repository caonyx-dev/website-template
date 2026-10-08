// The DESIGN.md's `promo-banner-strip`, in the position the reference gives its announcement bar: above the
// header, phone at the left, the message in the middle, a dismiss at the right. The reference's bar is black;
// this one is the template's bold yellow with ink on top, which is what that file reserves yellow for.
// Every message is also in a visually hidden list, so nothing depends on the rotation being seen.
"use client";
import { useEffect, useState } from "react";
import { PhoneIcon, XIcon } from "@phosphor-icons/react";
import { useReducedMotionSafe } from "@/components/Reveal";
import type { RetailContent } from "../content";
import { Container } from "./ui";

export default function PromoStrip({ p }: { p: RetailContent["promo"] }) {
  const reduce = useReducedMotionSafe();
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    if (reduce || p.messages.length < 2) return;
    const t = setInterval(() => setI((n) => (n + 1) % p.messages.length), 6000);
    return () => clearInterval(t);
  }, [reduce, p.messages.length]);

  if (!shown) return null;

  return (
    <aside aria-label={p.label} className="bg-(--t-accent) text-(--t-on-accent)">
      <Container className="flex min-h-10 items-center justify-between gap-4 py-1.5">
        <a
          href={`tel:${p.phone.replace(/[^+\d]/g, "")}`}
          className="hidden min-h-8 items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.06em] text-(--t-on-accent) no-underline hover:underline sm:inline-flex"
        >
          <PhoneIcon size={14} weight="bold" aria-hidden="true" />
          {p.phone}
        </a>

        {/* The rotation is decoration over a list that is always complete for assistive tech. */}
        <p key={i} className="rst-promo-msg min-w-0 flex-1 text-center text-[12px] font-semibold uppercase tracking-[0.06em] sm:flex-none" aria-hidden="true">
          {p.messages[i]}
        </p>
        <ul className="sr-only">
          {p.messages.map((m) => <li key={m}>{m}</li>)}
        </ul>

        <button
          type="button"
          onClick={() => setShown(false)}
          className="-mr-1 inline-flex size-8 shrink-0 items-center justify-center rounded-full transition-colors duration-200 hover:bg-black/10"
        >
          <XIcon size={15} weight="bold" aria-hidden="true" />
          <span className="sr-only">{p.dismiss}</span>
        </button>
      </Container>
    </aside>
  );
}
