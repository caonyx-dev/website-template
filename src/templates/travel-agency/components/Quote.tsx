// The reference's testimonial: a tall photograph at the left, a large italic quotation beside it, and a pair
// of arrows stepping between comments. Both quotations are written placeholders, which the note says plainly.
"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpIcon, ArrowDownIcon, QuotesIcon } from "@phosphor-icons/react";
import type { TravelContent } from "../content";
import { Container } from "./ui";

export default function Quote({ q }: { q: TravelContent["quote"] }) {
  const [i, setI] = useState(0);
  const empty = q.items.length === 0;
  const n = q.items.length;
  const item = q.items[i];
  if (empty) return null;

  return (
    <section aria-labelledby="quote-title" className="bg-(--t-soft) pb-16 sm:pb-24">
      <Container>
        <h2 id="quote-title" className="sr-only">{q.label}</h2>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1.45fr)] lg:items-center lg:gap-16">
          <Image
            src={q.image.src}
            alt={q.image.alt}
            placeholder="blur"
            sizes="(min-width: 1024px) 32vw, 100vw"
            className="h-auto w-full rounded-[20px] object-cover"
          />

          <div className="flex gap-6">
            <blockquote className="m-0 min-w-0 flex-1">
              <QuotesIcon size={34} weight="fill" aria-hidden="true" className="text-(--t-primary)" />
              {/* A live region, because the arrows swap the text in place. */}
              <div aria-live="polite">
                <p className="mt-5 text-[21px] italic leading-[1.5] text-ink sm:text-[26px]">{item.text}</p>
                <footer className="mt-7">
                  <p className="text-[17px] font-bold text-ink">{item.name}</p>
                  <p className="mt-0.5 text-[15px] text-(--t-muted)">{item.role}</p>
                </footer>
              </div>
            </blockquote>

            {n > 1 && (
              <div className="flex shrink-0 flex-col justify-center gap-3 border-l border-(--t-hairline) pl-6">
                <button type="button" onClick={() => setI((v) => (v - 1 + n) % n)} className="inline-flex size-11 items-center justify-center rounded-full border border-(--t-control) text-ink transition-colors duration-200 hover:border-ink">
                  <ArrowUpIcon size={15} weight="bold" aria-hidden="true" /><span className="sr-only">{q.prev}</span>
                </button>
                <button type="button" onClick={() => setI((v) => (v + 1) % n)} className="inline-flex size-11 items-center justify-center rounded-full border border-(--t-control) text-ink transition-colors duration-200 hover:border-ink">
                  <ArrowDownIcon size={15} weight="bold" aria-hidden="true" /><span className="sr-only">{q.next}</span>
                </button>
              </div>
            )}
          </div>
        </div>

        <p className="mt-8 max-w-[90ch] text-[12px] leading-[1.6] text-(--t-muted)">
          <span className="font-semibold uppercase tracking-[0.08em] text-ink">Placeholder</span>{" "}{q.note}
        </p>
      </Container>
    </section>
  );
}
