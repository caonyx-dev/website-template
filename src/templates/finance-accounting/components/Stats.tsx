"use client";
// Ghost-number statistics like the reference: four huge pale mono figures with the label centred over each,
// divided by hairlines; the figures count up with anime.js when the row enters. Illustrative until the
// practice supplies its own, and labelled so.
import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { inView } from "motion/react";
import { useReducedMotionSafe } from "@/components/Reveal";
import type { FinanceContent } from "../content";
import { Container } from "./ui";

export default function Stats({ s }: { s: FinanceContent["stats"] }) {
  const reduce = useReducedMotionSafe();
  const root = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const el = root.current; if (!el || reduce) return;
    return inView(el, () => {
      el.querySelectorAll<HTMLElement>("[data-count]").forEach((n, i) => {
        const target = Number(n.dataset.count); const o = { v: 0 };
        animate(o, { v: target, duration: 1600, delay: i * 120, ease: "outExpo", onUpdate: () => { n.textContent = String(Math.round(o.v)); } });
      });
    }, { margin: "0px 0px -20% 0px" });
  }, [reduce]);
  return (
    <section className="overflow-x-clip py-16 lg:py-24" aria-label="Practice in numbers">
      <Container>
        <ul ref={root} className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-hairline">
          {s.items.map((it) => (
            <li key={it.label} className="relative grid place-items-center overflow-hidden py-6">
              <span className="pointer-events-none select-none font-mono text-[76px] font-medium leading-none tabular-nums text-soft sm:text-[120px] lg:text-[170px]" aria-hidden="true" data-count={it.value}>{it.value}</span>
              <span className="absolute font-display text-[24px] font-bold text-ink lg:text-[28px]">{it.label}</span>
              <span className="sr-only">{it.value} {it.label}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-[12px] text-mute">{s.note}</p>
      </Container>
    </section>
  );
}
