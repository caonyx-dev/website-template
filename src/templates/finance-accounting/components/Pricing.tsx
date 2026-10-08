"use client";
// Pricing approach on the grey band: centred header, a square Monthly / Annual toggle, three flat white tiers
// (the middle one green-black with a lime "Most chosen" chip and a lime button); "from" figures are mono
// placeholders that swap with the period. Cards rise in turn.
import { useState } from "react";
import { CheckIcon } from "@phosphor-icons/react";
import { Reveal, RevealGroup } from "@/components/Reveal";
import type { FinanceContent } from "../content";
import { Btn, Container, Num, SectionHead } from "./ui";

export default function Pricing({ p }: { p: FinanceContent["pricing"] }) {
  const [period, setPeriod] = useState<0 | 1>(0);
  return (
    <section id="pricing" className="scroll-mt-20 bg-soft py-20 lg:py-28" aria-labelledby="pricing-title">
      <Container>
        <SectionHead id="pricing-title" eyebrow={p.eyebrow} title={p.title} center />
        <Reveal delay={0.2} className="mb-12 text-center">
          <div role="group" aria-label="Billing period" className="inline-flex border border-hairline bg-white p-1">
            {p.periods.map((label, i) => <button key={label} type="button" aria-pressed={period === i} onClick={() => setPeriod(i as 0 | 1)} className={`h-11 px-6 font-display text-[15px] font-bold transition-colors ${period === i ? "bg-primary text-white" : "text-body hover:text-ink"}`}>{label}</button>)}
          </div>
          <p role="status" className="sr-only">Showing {p.periods[period].toLowerCase()} prices</p>
        </Reveal>
        <RevealGroup as="ul" className="grid gap-7 lg:grid-cols-3" stagger={0.1}>
          {p.tiers.map((t) => (
            <article key={t.name} className={`flex h-full flex-col gap-5 p-9 ${t.featured ? "bg-dark text-white" : "bg-white text-ink"}`}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-[24px] font-bold text-pretty">{t.name}</h3>
                {t.chip && <span className="inline-flex h-6 items-center bg-accent px-2.5 font-display text-[11px] font-bold uppercase tracking-[.1em] text-ink">{t.chip}</span>}
              </div>
              <p className="flex items-baseline gap-2">
                <span className={`text-[14px] ${t.featured ? "text-white/60" : "text-mute"}`}>{t.from}</span>
                <Num className="text-[44px] font-medium leading-[1.1] tracking-[-0.02em]">{t.prices[period]}</Num>
                <Num className={`text-[14px] ${t.featured ? "text-white/60" : "text-mute"}`}>{t.per[period]}</Num>
              </p>
              <p className={`text-[16px] leading-[1.6] ${t.featured ? "text-white/70" : "text-body"}`}>{t.text}</p>
              <ul className={`grid gap-2.5 border-t pt-5 text-[16px] leading-[1.5] ${t.featured ? "border-white/15" : "border-hairline"}`}>
                {t.includes.map((inc) => <li key={inc} className="flex items-start gap-2.5"><CheckIcon size={18} weight="bold" className="mt-1 shrink-0 text-accent" aria-hidden="true" />{inc}</li>)}
              </ul>
              <div className="mt-auto pt-2"><Btn href={t.cta.href} tone={t.featured ? "lime" : "teal"} className="w-full">{t.cta.label}</Btn></div>
            </article>
          ))}
        </RevealGroup>
        <Reveal><p className="mt-6 text-center text-[12px] leading-[1.5] text-mute">{p.note}</p></Reveal>
      </Container>
    </section>
  );
}
