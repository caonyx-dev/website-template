// Primitives matched to the Nimo home-04 reference's measured values: fully round pills carrying a circular
// arrow disc, the bracketed mono eyebrow, the poster display tier (140px / weight 600 / line-height 1 /
// tracking −2% in the reference, rendered here in Syne 800), and the count-up the stats cards run on.
// Palette and typefaces stay this template's own: violet is the action colour, acid yellow stays a pen.
"use client";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRightIcon, ArrowUpRightIcon } from "@phosphor-icons/react";
import { useReducedMotionSafe } from "@/components/Reveal";

export const Container = ({ children, className = "", style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) => <div style={style} className={`mx-auto w-full max-w-[1360px] px-4 sm:px-6 ${className}`}>{children}</div>;

type Tone = "primary" | "ink" | "paper" | "on-dark";

/**
 * The reference's call to action: a fully round pill with a circular arrow disc fused at its left edge.
 * `primary` is violet because this file makes violet the only action colour; the reference's own pills are black,
 * which is what `ink` renders.
 */
export function Pill({ href, children, tone = "primary", className = "", type = "button", onClick }: { href?: string; children: ReactNode; tone?: Tone; className?: string; type?: "button" | "submit"; onClick?: () => void }) {
  const t = {
    primary: { shell: "bg-primary text-(--t-on-primary) hover:bg-(--t-primary-pressed) active:bg-(--t-primary-active)", disc: "bg-(--t-on-primary) text-primary" },
    ink: { shell: "bg-ink text-(--t-on-dark) hover:bg-primary active:bg-(--t-primary-active)", disc: "bg-(--t-on-dark) text-ink" },
    paper: { shell: "bg-canvas text-ink hover:bg-(--t-accent)", disc: "bg-ink text-(--t-on-dark)" },
    "on-dark": { shell: "bg-(--t-on-dark) text-ink hover:bg-(--t-accent)", disc: "bg-ink text-(--t-on-dark)" },
  }[tone];
  const inner = (
    <>
      <span aria-hidden="true" className={`flex size-11 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 ${t.disc}`}><ArrowRightIcon size={18} weight="bold" /></span>
      <span className="pr-6 text-[16px] font-semibold">{children}</span>
    </>
  );
  const cls = `group inline-flex min-h-[60px] items-center gap-3 rounded-full p-2 no-underline transition-colors duration-200 ${t.shell} ${className}`;
  if (href) return <Link href={href} className={cls}>{inner}</Link>;
  return <button type={type} onClick={onClick} className={cls}>{inner}</button>;
}

/** A plain round pill with no disc, for the nav. */
export function Plain({ href, children, tone = "ink", className = "" }: { href?: string; children: ReactNode; tone?: "ink" | "primary" | "ghost"; className?: string }) {
  const t = {
    ink: "bg-ink text-(--t-on-dark) hover:bg-primary",
    primary: "bg-primary text-(--t-on-primary) hover:bg-(--t-primary-pressed) active:bg-(--t-primary-active)",
    ghost: "text-(--t-on-dark) hover:bg-white/15",
  }[tone];
  const cls = `inline-flex min-h-12 items-center justify-center rounded-full px-6 text-[16px] font-semibold no-underline transition-colors duration-200 ${t} ${className}`;
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <span className={cls}>{children}</span>;
}

/** The reference's section label, bracketed either side, set in the mono labelling voice this file requires. */
export const Eyebrow = ({ children, onDark = false, className = "" }: { children: ReactNode; onDark?: boolean; className?: string }) => (
  <span className={`inline-flex items-center gap-2.5 font-(family-name:--t-font-mono) text-[13px] uppercase tracking-[0.08em] ${onDark ? "text-(--t-on-dark)" : "text-ink"} ${className}`}>
    <span aria-hidden="true" className="block size-2.5 bg-primary" />{children}<span aria-hidden="true" className="block size-2.5 bg-primary" />
  </span>
);

/** The poster display tier. */
export function Title({ id, children, onDark = false, className = "", as: Tag = "h2" }: { id?: string; children: ReactNode; onDark?: boolean; className?: string; as?: "h1" | "h2" | "h3" }) {
  return <Tag id={id} className={`font-display text-[34px] font-extrabold leading-[1.02] tracking-[-0.03em] text-balance sm:text-[48px] lg:text-[60px] ${onDark ? "text-(--t-on-dark)" : "text-ink"} ${className}`}>{children}</Tag>;
}

/** Eyebrow on the left, the headline in the middle, an optional pill on the right — the reference's head row. */
export function SectionHead({ id, eyebrow, title, action, onDark = false, className = "" }: { id: string; eyebrow: string; title: ReactNode; action?: ReactNode; onDark?: boolean; className?: string }) {
  return (
    <div className={`grid gap-8 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1.3fr)_auto] lg:items-start lg:gap-10 ${className}`}>
      <Eyebrow onDark={onDark} className="pt-2">{eyebrow}</Eyebrow>
      <Title id={id} onDark={onDark} className="max-w-[20ch]">{title}</Title>
      {action && <div className="xl:justify-self-end xl:pt-2">{action}</div>}
    </div>
  );
}

/** Tags, captions and stat labels, in the mono labelling voice. */
export const Label = ({ children, className = "" }: { children: ReactNode; className?: string }) => <span className={`font-(family-name:--t-font-mono) text-[13px] uppercase tracking-[0.08em] ${className}`}>{children}</span>;

/** The small circular arrow button the reference puts at the end of its card rows. */
export const Disc = ({ className = "" }: { className?: string }) => (
  <span aria-hidden="true" className={`flex size-11 shrink-0 items-center justify-center rounded-full bg-ink text-(--t-on-dark) transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 ${className}`}><ArrowUpRightIcon size={17} weight="bold" /></span>
);

/**
 * Counts from zero the first time the figure scrolls into view, which is what the reference's stat cards do.
 * Under reduced motion the final value renders with no animation. The ticking value is hidden from assistive
 * tech and the real figure sits beside it, so a screen reader hears the number once.
 */
export function CountUp({ value, decimals = 0, suffix = "", className = "", duration = 2000, locale = "en-GB" }: { value: number; decimals?: number; suffix?: string; className?: string; duration?: number; locale?: string }) {
  const reduce = useReducedMotionSafe();
  const ref = useRef<HTMLSpanElement>(null);
  const [animated, setAnimated] = useState(0);
  const done = useRef(false);
  const shown = reduce ? value : animated;

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce || done.current) return;
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting || done.current) return;
      done.current = true;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        setAnimated(value * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration, reduce]);

  const fmt = (n: number) => new Intl.NumberFormat(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(n);
  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      <span aria-hidden="true">{fmt(shown)}{suffix}</span>
      <span className="sr-only">{fmt(value)}{suffix}</span>
    </span>
  );
}
