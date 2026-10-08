// The reference's figures band: four numbers on a tinted ground, each over a rule with a caption beneath.
// Each counts up the first time it scrolls into view, and renders its real value on the server and with
// JavaScript off — a figure that reads zero is worse than no figure at all.
"use client";
import { useEffect, useRef, useState } from "react";
import { useReducedMotionSafe } from "@/components/Reveal";
import { LOCALE, type SmallBusinessContent } from "../content";
import { Container } from "./ui";

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const reduce = useReducedMotionSafe();
  const ref = useRef<HTMLSpanElement>(null);
  const [animated, setAnimated] = useState<number | null>(null);
  const done = useRef(false);
  // `null` until the count starts, so the server render and a JavaScript-off page show the real figure.
  const shown = animated ?? value;

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce || done.current) return;
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting || done.current) return;
      done.current = true;
      io.disconnect();
      const start = performance.now();
      setAnimated(0);
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / 1800);
        setAnimated(value * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value, reduce]);

  const fmt = (n: number) => new Intl.NumberFormat(LOCALE, { maximumFractionDigits: 0 }).format(n);
  return (
    <span ref={ref} className="block font-display text-[clamp(44px,5.6vw,72px)] font-bold leading-[1] tracking-[-0.03em] tabular-nums text-ink">
      <span aria-hidden="true">{fmt(shown)}{suffix}</span>
      <span className="sr-only">{fmt(value)}{suffix}</span>
    </span>
  );
}

export default function Stats({ s }: { s: SmallBusinessContent["stats"] }) {
  if (!s.items.length) return null;
  return (
    <section aria-labelledby="stats-title" className="bg-(--t-soft) py-14 sm:py-16">
      <Container>
        <h2 id="stats-title" className="sr-only">By the numbers</h2>
        <ul role="list" className="m-0 grid list-none gap-8 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {s.items.map((item) => (
            <li key={item.label}>
              <CountUp value={item.value} suffix={item.suffix} />
              <p className="mt-4 border-t border-(--t-control) pt-4 text-[15px] leading-[1.55] text-(--t-body)">{item.label}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-[86ch] text-[13px] leading-[1.6] text-(--t-muted)">
          <span className="font-semibold text-ink">Placeholder</span>{" "}{s.note}
        </p>
      </Container>
    </section>
  );
}
