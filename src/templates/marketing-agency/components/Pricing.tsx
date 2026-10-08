// The reference's pricing screen: a Monthly / Yearly segmented switch under the heading and three plan cards, the
// middle one inverted. The switch is a real radio group, so arrow keys move between the two periods and a screen
// reader hears it as one control rather than two buttons. Figures are formatted from numbers, never written out.
"use client";
import { useId, useState } from "react";
import { CheckIcon } from "@phosphor-icons/react";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { CURRENCY, LOCALE, type MarketingContent } from "../content";
import { Container, Eyebrow, Label, Pill, Title } from "./ui";

const money = (n: number) => new Intl.NumberFormat(LOCALE, { style: "currency", currency: CURRENCY, maximumFractionDigits: 0 }).format(n);

export default function Pricing({ p }: { p: MarketingContent["pricing"] }) {
  const [yearly, setYearly] = useState(false);
  const groupId = useId();

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="scroll-mt-28 bg-(--t-soft) py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)_auto] xl:items-start xl:gap-12">
          <Reveal><Eyebrow className="xl:pt-2">{p.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.08}><Title id="pricing-title" className="max-w-[16ch]">{p.title}</Title></Reveal>

          <Reveal delay={0.14}>
            <fieldset className="m-0 border-0 p-0 xl:justify-self-end">
              <legend className="sr-only">{p.toggleLabel}</legend>
              <div className="inline-flex items-center gap-1 rounded-full bg-canvas p-1.5">
                {([["monthly", p.periods.monthly, false], ["yearly", p.periods.yearly, true]] as const).map(([key, label, isYearly]) => {
                  const active = yearly === isYearly;
                  return (
                    <label
                      key={key}
                      className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full px-5 text-[15px] font-semibold transition-colors duration-200 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-(--t-focus) ${active ? "bg-ink text-(--t-on-dark)" : "text-(--t-body) hover:text-ink"}`}
                    >
                      <input
                        type="radio"
                        name={groupId}
                        className="sr-only"
                        checked={active}
                        onChange={() => setYearly(isYearly)}
                      />
                      {label}
                      {isYearly && <span className="rounded-full bg-(--t-accent) px-2 py-0.5 text-[11px] font-semibold text-ink">{p.yearlyNote}</span>}
                    </label>
                  );
                })}
              </div>
            </fieldset>
          </Reveal>
        </div>

        <RevealGroup as="ul" className="m-0 mt-12 grid list-none gap-5 p-0 lg:grid-cols-3" stagger={0.1}>
          {p.plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex h-full flex-col rounded-[24px] p-7 sm:p-8 ${plan.featured ? "bg-ink text-(--t-on-dark) nim-on-dark" : "bg-canvas text-ink"}`}
            >
              <h3 className="font-display text-[24px] font-bold tracking-[-0.02em]">{plan.name}</h3>
              <p className={`mt-2 text-[15px] leading-[1.6] ${plan.featured ? "text-(--t-on-dark)/75" : "text-(--t-body)"}`}>{plan.blurb}</p>

              <p className="mt-7 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="font-display text-[clamp(30px,3.5vw,50px)] font-extrabold leading-none tracking-[-0.04em] tabular-nums">
                  {money(yearly ? plan.yearly : plan.monthly)}
                </span>
                <span className={`text-[14px] ${plan.featured ? "text-(--t-on-dark)/70" : "text-(--t-mute)"}`}>
                  {yearly ? "per year" : plan.unit}
                </span>
              </p>

              <ul className="m-0 mt-7 grid list-none gap-3 p-0">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-[15px] leading-[1.5] ${plan.featured ? "text-(--t-on-dark)/85" : "text-(--t-body)"}`}>
                    <CheckIcon size={15} weight="bold" className={`mt-1 shrink-0 ${plan.featured ? "text-(--t-accent)" : "text-primary"}`} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <Pill href={plan.cta.href} tone={plan.featured ? "on-dark" : "primary"}>
                  {plan.cta.label}<span className="sr-only"> — {plan.name}</span>
                </Pill>
              </div>
            </article>
          ))}
        </RevealGroup>

        <p className="mt-8 max-w-[80ch] text-[13px] leading-[1.6] text-(--t-mute)">
          <Label className="mr-2 text-ink">Placeholder</Label>{p.disclaimer}
        </p>
      </Container>
    </section>
  );
}
