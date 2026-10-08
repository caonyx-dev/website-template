// Not in the reference: this template's DESIGN.md makes the opening-hours card and the service-area card
// first-class, because the two things a local customer checks before calling are "are you open" and "do you
// come here". Today's row is highlighted, and the hours drive the chip in the header.
"use client";
import Link from "next/link";
import { ClockIcon, EnvelopeSimpleIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react";
import { Reveal } from "@/components/Reveal";
import type { SmallBusinessContent } from "../content";
import { useLocalTime } from "./localtime";
import { Badge, Container, Title } from "./ui";

export default function Visit({ h }: { h: SmallBusinessContent["hours"] }) {
  const { todayIndex } = useLocalTime();
  return (
    <section id="contact" aria-labelledby="hours-title" className="scroll-mt-24 bg-canvas pb-16 sm:pb-20">
      <Container>
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-(--t-hairline) bg-canvas p-7 shadow-(--t-shadow-soft)">
              <ClockIcon size={28} weight="light" aria-hidden="true" className="text-primary" />
              <Title id="hours-title" size="card" as="h2" className="mt-4">{h.title}</Title>
              <ul role="list" className="m-0 mt-5 grid list-none gap-0 p-0">
                {h.rows.map((row, i) => (
                  <li
                    key={row.day}
                    className={`flex items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-[15px] ${i === todayIndex ? "bg-(--t-soft) font-semibold text-ink" : "text-(--t-body)"}`}
                  >
                    <span>{row.day}{i === todayIndex && <span className="sr-only"> (today)</span>}</span>
                    <span className="tabular-nums">{row.hours}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[13px] leading-[1.6] text-(--t-muted)">
                <span className="font-semibold text-ink">Placeholder</span>{" "}{h.note}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl bg-(--t-soft) p-7">
              <MapPinIcon size={28} weight="light" aria-hidden="true" className="text-primary" />
              <Title size="card" as="h2" className="mt-4">{h.area.title}</Title>
              <ul role="list" className="m-0 mt-5 flex list-none flex-wrap gap-2 p-0">
                {h.area.towns.map((t) => <li key={t}><Badge>{t}</Badge></li>)}
              </ul>
              <p className="mt-5 text-[15px] leading-[1.6] text-(--t-body)">{h.area.note}</p>
              <div className="mt-6 grid gap-1 border-t border-(--t-control) pt-5">
                <Link href={`tel:${h.phone.replace(/[^+\d]/g, "")}`} className="inline-flex min-h-10 items-center gap-2 text-[16px] font-semibold text-primary underline-offset-4 hover:underline">
                  <PhoneIcon size={16} weight="fill" aria-hidden="true" />{h.phone}
                </Link>
                <Link href={`mailto:${h.email.replace(/[[\]]/g, "")}`} className="inline-flex min-h-10 items-center gap-2 text-[16px] font-semibold text-primary underline-offset-4 hover:underline">
                  <EnvelopeSimpleIcon size={16} aria-hidden="true" />{h.email}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
