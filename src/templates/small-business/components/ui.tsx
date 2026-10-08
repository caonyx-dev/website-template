// Primitives matched to the cleaning-service reference's measured values: a 1280px container, a 115px hero
// display over a 0.9 line-height, a 72px section tier, 32px card titles and 60px-tall buttons.
// Palette and typefaces stay this template's own: Outfit at 700/600 over Open Sans, a green pill primary,
// and warm orange kept to the Call pill and small highlights. Buttons stay pills — the reference squares
// them off at 0px, and this file is explicit that a square button reads as a different kind of business.
"use client";
import Link from "next/link";
import type { ReactNode } from "react";

export const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 ${className}`}>{children}</div>
);

type Tone = "primary" | "secondary" | "call" | "on-dark";

/** The DESIGN.md's button family. Every one is a pill; the Call pill is the only place orange becomes a button. */
export function Btn({
  href, children, tone = "primary", className = "", type = "button", onClick, size = "md",
}: {
  href?: string; children: ReactNode; tone?: Tone; className?: string;
  type?: "button" | "submit"; onClick?: () => void; size?: "md" | "lg";
}) {
  const t = {
    primary: "bg-primary text-(--t-on-primary) hover:bg-(--t-primary-active)",
    secondary: "border-[1.5px] border-primary bg-canvas text-primary hover:bg-(--t-soft)",
    call: "bg-(--t-accent) text-ink hover:bg-(--t-accent-deep)",
    "on-dark": "bg-canvas text-primary hover:bg-(--t-soft)",
  }[tone];
  const dims = size === "lg" ? "min-h-[56px] px-8 text-[16px]" : "min-h-12 px-6 text-[15px]";
  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-semibold no-underline transition-colors duration-200 ${dims} ${t} ${className}`;
  if (href) return <Link href={href} className={cls} onClick={onClick}>{children}</Link>;
  return <button type={type} onClick={onClick} className={cls}>{children}</button>;
}

/** Green text link, used for the phone number in the nav and "See all →" under grids. */
export const TextLink = ({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) => (
  <Link href={href} className={`inline-flex min-h-10 items-center gap-1.5 text-[15px] font-semibold text-primary underline-offset-4 hover:underline ${className}`}>
    {children}
  </Link>
);

/**
 * The display tier. The reference sets 115px over a 0.9 line-height and 72px over 0.86; Outfit carries the
 * same scale at the weight 700 this file allows, never uppercase.
 */
export function Title({
  id, children, onDark = false, className = "", as: Tag = "h2", size = "section",
}: {
  id?: string; children: ReactNode; onDark?: boolean; className?: string; as?: "h1" | "h2" | "h3"; size?: "hero" | "section" | "card";
}) {
  const s = {
    hero: "text-[clamp(38px,6.6vw,92px)] leading-[0.95] tracking-[-0.03em]",
    section: "text-[clamp(30px,4.4vw,60px)] leading-[0.98] tracking-[-0.025em]",
    card: "text-[clamp(22px,2.2vw,30px)] leading-[1.08] tracking-[-0.015em]",
  }[size];
  return (
    <Tag id={id} className={`font-display font-bold text-balance ${s} ${onDark ? "text-(--t-on-dark)" : "text-ink"} ${className}`}>
      {children}
    </Tag>
  );
}

/** The quiet line under a section heading. The reference centres both. */
export const Lead = ({ children, onDark = false, className = "" }: { children: ReactNode; onDark?: boolean; className?: string }) => (
  <p className={`text-[16px] leading-[1.6] ${onDark ? "text-(--t-on-dark-soft)" : "text-(--t-muted)"} ${className}`}>{children}</p>
);

/** `badge-pill` — pastel fill, ink text, never orange text on white. */
export const Badge = ({ children, tone = "mint" }: { children: ReactNode; tone?: "mint" | "peach" | "sky" | "orange" }) => {
  const t = {
    mint: "bg-(--t-badge-mint)", peach: "bg-(--t-badge-peach)", sky: "bg-(--t-badge-sky)", orange: "bg-(--t-accent)",
  }[tone];
  return <span className={`inline-flex items-center rounded-full px-3 py-1 text-[13px] font-semibold text-ink ${t}`}>{children}</span>;
};

/** The 52px mint square behind each service icon. */
export const IconTile = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex size-13 items-center justify-center rounded-xl bg-(--t-soft) text-primary">{children}</span>
);
