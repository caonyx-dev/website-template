"use client";
// quote-band-dark: the pre-footer graphite band with the headline, a large tel: link and three stat tiles
// (figures count up when they are real numbers; placeholders stay as written) beside the quote card.
import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { PhoneIcon } from "@phosphor-icons/react";
import { useReducedMotionSafe } from "@/components/Reveal";
import type { ConstructionContent } from "../content";
import { Container } from "./ui";
import QuoteCard from "./QuoteCard";

function Stat({ big, label, reduce }: { big: string; label: string; reduce: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const m = big.match(/^(\d+)(.*)$/);
  useEffect(() => {
    if (!m || reduce || !ref.current) return;
    const el = ref.current, target = Number(m[1]), suffix = m[2];
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const o = { v: 0 };
      animate(o, { v: target, duration: 1200, ease: "outExpo", onUpdate: () => { el.textContent = Math.round(o.v) + suffix; } });
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [m, reduce]);
  return (
    <div className="grid gap-1 rounded-md bg-[#222220] p-5">
      <span ref={ref} className="font-display text-[32px] font-bold leading-none text-accent tabular-nums">{big}</span>
      <span className="text-[12px] font-medium uppercase tracking-[.06em] text-on-dark-muted">{label}</span>
    </div>
  );
}

export default function QuoteBand({ q }: { q: ConstructionContent["quoteBand"] }) {
  const reduce = useReducedMotionSafe();
  return (
    <section id="contact" className="pb-20 lg:pb-24" aria-labelledby="quote-band-title">
      <Container>
        <div className="grid gap-10 rounded-md bg-dark p-6 text-on-dark sm:p-12 lg:grid-cols-[6fr_5fr] lg:items-start lg:gap-14">
          <div className="grid justify-items-start gap-5">
            <h2 id="quote-band-title" className="font-display text-[36px] font-bold leading-[1.05] sm:text-[44px] text-balance">{q.title}</h2>
            <p className="max-w-[44ch] text-[16px] leading-[1.55] text-on-dark-muted">{q.text}</p>
            <a href={`tel:${q.phone.replace(/[^+\d]/g, "")}`} className="inline-flex items-center gap-3 font-display text-[32px] font-bold text-on-dark no-underline hover:text-accent sm:text-[40px]"><PhoneIcon size={30} weight="light" aria-hidden="true" />{q.phone}</a>
            <div className="mt-2 grid w-full gap-3 sm:grid-cols-3">
              {q.stats.map((s) => <Stat key={s.label} big={s.big} label={s.label} reduce={reduce} />)}
            </div>
          </div>
          <QuoteCard q={q.form} />
        </div>
      </Container>
    </section>
  );
}
