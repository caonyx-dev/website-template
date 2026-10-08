// The reference's three enormous serif figures with their labels beneath. Each counts up the first time it
// scrolls into view; the ticking value is hidden from assistive tech and the final figure sits beside it.
"use client";
import { useEffect, useRef, useState } from "react";
import { useReducedMotionSafe } from "@/components/Reveal";
import { LOCALE, type TravelContent } from "../content";
import { Container } from "./ui";

function CountUp({ value, decimals = 0, suffix = "", className = "" }: { value: number; decimals?: number; suffix?: string; className?: string }) {
  const reduce = useReducedMotionSafe();
  const ref = useRef<HTMLSpanElement>(null);
  const [animated, setAnimated] = useState<number | null>(null);
  const done = useRef(false);
  // `null` until the count actually starts, so the server render and a JavaScript-off page show the real
  // figure rather than zero. Only once the observer fires does the number drop to 0 and climb.
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
        const p = Math.min(1, (now - start) / 2000);
        setAnimated(value * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value, reduce]);

  const fmt = (x: number) => new Intl.NumberFormat(LOCALE, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(x);
  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      <span aria-hidden="true">{fmt(shown)}{suffix}</span>
      <span className="sr-only">{fmt(value)}{suffix}</span>
    </span>
  );
}

export default function Stats({ s }: { s: TravelContent["stats"] }) {
  if (!s.items.length) return null;
  return (
    <section aria-labelledby="stats-title" className="bg-(--t-soft) pb-16 sm:pb-24">
      <Container>
        <h2 id="stats-title" className="sr-only">{s.title}</h2>
        <ul className="m-0 grid list-none gap-10 p-0 sm:grid-cols-3">
          {s.items.map((item) => (
            <li key={item.label}>
              <CountUp
                value={item.value}
                decimals={item.decimals}
                suffix={item.suffix}
                className="block font-display text-[clamp(64px,10vw,150px)] leading-[0.95] text-ink"
              />
              <p className="mt-3 max-w-[12ch] font-display text-[clamp(20px,2.4vw,30px)] uppercase leading-[1.15] text-ink">{item.label}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-[90ch] text-[12px] leading-[1.6] text-(--t-muted)">
          <span className="font-semibold uppercase tracking-[0.08em] text-ink">Placeholder</span>{" "}{s.note}
        </p>
      </Container>
    </section>
  );
}
