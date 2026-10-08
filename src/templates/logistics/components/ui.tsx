// Primitives matched to the Logico Rounded home-3 reference's measured values: 25px card and button radii, the
// split button (a 72px-tall bordered shell carrying the label with a filled square arrow tile fused to its right),
// the slash eyebrow, the 80px uppercase display tier, and the count-up figure the stats band runs on.
// Palette and typefaces stay this template's own: signal orange plays the role the reference gives its teal.
"use client";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { useReducedMotionSafe } from "@/components/Reveal";

export const Container = ({ children, className = "", style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) => <div style={style} className={`mx-auto w-full max-w-[1340px] px-4 sm:px-6 ${className}`}>{children}</div>;

type Tone = "primary" | "dark" | "outline" | "outline-dark";

/** The reference's call to action: a 25px shell with the label, and a square arrow tile joined to its right. */
export function Btn({ href, children, tone = "primary", className = "", type = "button", onClick }: { href?: string; children: ReactNode; tone?: Tone; className?: string; type?: "button" | "submit"; onClick?: () => void }) {
  const t = {
    primary: { shell: "border-transparent bg-primary text-(--t-on-primary) hover:bg-(--t-primary-hover)", tile: "bg-(--t-on-primary) text-primary" },
    dark: { shell: "border-transparent bg-dark text-white hover:bg-(--t-dark-2)", tile: "bg-primary text-(--t-on-primary)" },
    outline: { shell: "border-(--t-control) text-ink hover:border-ink", tile: "bg-dark text-white" },
    "outline-dark": { shell: "border-white/40 text-white hover:border-white", tile: "bg-primary text-(--t-on-primary)" },
  }[tone];
  const inner = (
    <>
      <span className="px-7 text-[16px] font-semibold">{children}</span>
      <span aria-hidden="true" className={`flex size-[52px] shrink-0 items-center justify-center rounded-[18px] transition-transform duration-300 group-hover:rotate-45 motion-reduce:transition-none motion-reduce:group-hover:rotate-0 ${t.tile}`}><ArrowUpRightIcon size={20} weight="bold" /></span>
    </>
  );
  const cls = `group inline-flex h-[64px] items-center gap-1 rounded-[25px] border p-1.5 pl-0 no-underline transition-colors duration-200 ${t.shell} ${className}`;
  if (href) return <Link href={href} className={cls}>{inner}</Link>;
  return <button type={type} onClick={onClick} className={cls}>{inner}</button>;
}

/** The plain pill, used by the nav. 25px radius and a 72px height, as the reference measures. */
export function Pill({ href, children, tone = "primary", className = "", type = "button" }: { href?: string; children: ReactNode; tone?: "primary" | "outline"; className?: string; type?: "button" | "submit" }) {
  const t = {
    primary: "bg-primary text-(--t-on-primary) hover:bg-(--t-primary-hover) active:bg-(--t-primary-focus) active:text-white",
    outline: "border border-(--t-control) text-ink hover:border-ink active:bg-soft",
  }[tone];
  const cls = `inline-flex min-h-[56px] items-center justify-center rounded-[25px] px-8 text-[17px] font-semibold no-underline transition-colors duration-200 ${t} ${className}`;
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button type={type} className={cls}>{children}</button>;
}

/** The reference's section label, set between slashes. */
export const Eyebrow = ({ children, onDark = false, className = "" }: { children: ReactNode; onDark?: boolean; className?: string }) => (
  <span className={`block text-[15px] ${onDark ? "text-white/70" : "text-(--t-ink-muted)"} ${className}`}>/ {children} /</span>
);

/** The 80px uppercase display tier. Archivo at 700 stands in for the reference's Space Grotesk 500. */
export function Title({ id, children, onDark = false, className = "", as: Tag = "h2" }: { id?: string; children: ReactNode; onDark?: boolean; className?: string; as?: "h1" | "h2" | "h3" }) {
  return <Tag id={id} className={`font-display text-[34px] font-bold uppercase leading-[1.08] tracking-[-0.03em] text-balance sm:text-[52px] lg:text-[68px] xl:text-[76px] ${onDark ? "text-white" : "text-ink"} ${className}`}>{children}</Tag>;
}

export function SectionHead({ id, eyebrow, title, action, onDark = false, className = "", center = false }: { id: string; eyebrow: string; title: ReactNode; action?: ReactNode; onDark?: boolean; className?: string; center?: boolean }) {
  if (center) {
    return (
      <div className={`text-center ${className}`}>
        <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
        <Title id={id} onDark={onDark} className="mx-auto mt-5 max-w-[18ch]">{title}</Title>
      </div>
    );
  }
  return (
    <div className={`grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end ${className}`}>
      <div>
        <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
        <Title id={id} onDark={onDark} className="mt-5 max-w-[20ch]">{title}</Title>
      </div>
      {action}
    </div>
  );
}

/** Tracking numbers, codes, times and reference figures. Required by this template's DESIGN.md. */
export const Mono = ({ children, className = "" }: { children: ReactNode; className?: string }) => <span className={`font-(family-name:--t-font-mono) tabular-nums ${className}`}>{children}</span>;

/**
 * Counts from zero to `value` the first time the figure scrolls into view, which is the animation the reference
 * runs on its stats band. Under reduced motion the final value renders immediately and nothing animates.
 * The live value is `aria-hidden`; the real figure sits beside it so assistive tech never hears the ticking.
 */
export function CountUp({ value, decimals = 0, suffix = "", prefix = "", className = "", duration = 1800, locale = "en-GB" }: { value: number; decimals?: number; suffix?: string; prefix?: string; className?: string; duration?: number; locale?: string }) {
  const reduce = useReducedMotionSafe();
  const ref = useRef<HTMLSpanElement>(null);
  const [animated, setAnimated] = useState(0);
  const done = useRef(false);
  // Under reduced motion the final value is simply what renders; no effect and no state change.
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
        // Ease out so the figure settles rather than stopping dead.
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
    <span ref={ref} className={className}>
      <span aria-hidden="true">{prefix}{fmt(shown)}{suffix}</span>
      <span className="sr-only">{prefix}{fmt(value)}{suffix}</span>
    </span>
  );
}

/**
 * The reference's headline device: one enormous stroke-only figure that counts up, with its label set on its
 * side beside it. The fill stays transparent only where `-webkit-text-stroke` is actually supported, so engines
 * without it render a solid figure rather than nothing at all. The stroke scales with the type size.
 */
export function GiantCount({ value, label, locale = "en-GB", className = "" }: { value: number; label: string; locale?: string; className?: string }) {
  return (
    <figure className={`m-0 ${className}`}>
      <div className="flex items-end justify-between gap-5">
        <CountUp
          value={value}
          locale={locale}
          duration={2400}
          className="log-outline min-w-0 flex-1 break-words font-(family-name:--t-font-mono) text-[clamp(40px,11vw,152px)] font-medium leading-[1.05] tracking-[-0.02em] text-primary"
        />
        {/* On its side beside the figure where there is room; a plain line beneath it where there is not. */}
        <figcaption className="hidden shrink-0 text-[13px] font-semibold uppercase leading-tight tracking-[0.1em] text-white [writing-mode:vertical-rl] sm:block" style={{ transform: "rotate(180deg)" }}>{label}</figcaption>
      </div>
      <figcaption className="mt-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-white sm:hidden">{label}</figcaption>
    </figure>
  );
}
