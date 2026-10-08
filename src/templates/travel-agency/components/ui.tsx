// Primitives matched to the Arolax reference's measured values: a 1320px container, fully round 40px-radius
// buttons at 50–60px tall, a 170px/100px poster display tier and a 70px section tier, both at weight 400.
// Palette and typefaces stay this template's own — DM Serif Display at 400 for every headline, DM Sans for
// everything else, azure-deep under solid buttons and orange kept to the "from" price badge.
"use client";
import Link from "next/link";
import type { ReactNode } from "react";

export const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-[1320px] px-5 sm:px-8 ${className}`}>{children}</div>
);

type Tone = "primary" | "outline" | "on-dark";

/** The reference's call to action: a fully round pill. 40px radius reads as a pill at these heights. */
export function Btn({
  href, children, tone = "primary", className = "", type = "button", onClick, size = "md",
}: {
  href?: string; children: ReactNode; tone?: Tone; className?: string;
  type?: "button" | "submit"; onClick?: () => void; size?: "md" | "lg";
}) {
  const t = {
    primary: "bg-(--t-primary-deep) text-(--t-on-primary) hover:bg-(--t-primary-active)",
    outline: "border border-(--t-control) text-ink hover:border-ink hover:bg-(--t-soft)",
    "on-dark": "border border-white/70 text-(--t-on-dark) hover:border-white hover:bg-white/15",
  }[tone];
  const dims = size === "lg" ? "min-h-[60px] px-9 text-[15px]" : "min-h-[50px] px-7 text-[14px]";
  const cls = `inline-flex items-center justify-center gap-2.5 rounded-full font-semibold no-underline transition-colors duration-200 ${dims} ${t} ${className}`;
  if (href) return <Link href={href} className={cls} onClick={onClick}>{children}</Link>;
  return <button type={type} onClick={onClick} className={cls}>{children}</button>;
}

/** The reference's quiet link: ink text over a rule that is part of the type, not a hover effect. */
export const RuleLink = ({ href, children, onDark = false, className = "" }: { href: string; children: ReactNode; onDark?: boolean; className?: string }) => (
  <Link
    href={href}
    className={`inline-flex min-h-9 items-center text-[13px] font-semibold uppercase tracking-[0.1em] underline underline-offset-[6px] transition-colors duration-200 ${onDark ? "text-(--t-on-dark) decoration-white/50 hover:decoration-white" : "text-ink decoration-(--t-control) hover:decoration-ink"} ${className}`}
  >
    {children}
  </Link>
);

/**
 * The poster display tier. The reference's face is capitals-only at 170px over a 100px line-height; DM Serif
 * Display is mixed-case, so the case and the tight leading are set here to get the same block of type.
 */
export function Poster({ children, className = "", as: Tag = "p", id }: { children: ReactNode; className?: string; as?: "h1" | "h2" | "p" | "span"; id?: string }) {
  return (
    <Tag id={id} className={`font-display text-[clamp(44px,9.4vw,150px)] font-normal uppercase leading-[0.92] tracking-[-0.01em] ${className}`}>
      {children}
    </Tag>
  );
}

/** The section tier — the reference's 70px heading, at weight 400 because this template lets size do the work. */
export function Title({ id, children, onDark = false, className = "", as: Tag = "h2" }: { id?: string; children: ReactNode; onDark?: boolean; className?: string; as?: "h2" | "h3" }) {
  return (
    <Tag id={id} className={`font-display text-[clamp(34px,5vw,70px)] font-normal uppercase leading-[1.0] tracking-[-0.01em] text-balance ${onDark ? "text-(--t-on-dark)" : "text-ink"} ${className}`}>
      {children}
    </Tag>
  );
}

/** The reference's eyebrow: a small pin glyph, a tracked label and a rule beneath the pair. */
export const Eyebrow = ({ children, onDark = false, className = "" }: { children: ReactNode; onDark?: boolean; className?: string }) => (
  <span className={`inline-flex items-center gap-2 border-b pb-1.5 text-[13px] font-semibold uppercase tracking-[0.12em] ${onDark ? "border-white/40 text-(--t-on-dark)" : "border-(--t-control) text-ink"} ${className}`}>
    {children}
  </span>
);

/** The DESIGN.md's `price-from-badge`: orange, navy text, and never without its footnote. */
export const PriceBadge = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center rounded-full bg-(--t-accent) px-3 py-1.5 text-[12px] font-bold text-(--t-on-accent)">{children}</span>
);

/** Prices are formatted from numbers so one locale change re-denominates every package. */
export const money = (n: number, locale: string, currency: string) =>
  new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: 0 }).format(n);
