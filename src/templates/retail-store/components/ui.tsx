// Primitives matched to the Vogal reference's measured values: a 1300px container, uppercase buttons at 14px/500
// with a 6–8px radius and 16×40px padding, 20px-radius product plates, and a centred section head with the title
// over a quiet subline. Palette and typefaces stay this template's own — mulberry is the one action colour,
// yellow stays on the promo strip and badges, Poppins carries headlines and prices over Mulish everywhere else.
"use client";
import Link from "next/link";
import type { ReactNode } from "react";

export const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-[1300px] px-4 sm:px-6 ${className}`}>{children}</div>
);

type Tone = "primary" | "ink" | "outline" | "on-dark";

/** The reference's call to action: uppercase, tracked, 8px corners — the DESIGN.md's `button-primary` geometry. */
export function Btn({
  href, children, tone = "primary", className = "", type = "button", onClick, disabled, size = "md",
}: {
  href?: string; children: ReactNode; tone?: Tone; className?: string;
  type?: "button" | "submit"; onClick?: () => void; disabled?: boolean; size?: "md" | "lg";
}) {
  const t = {
    primary: "bg-primary text-(--t-on-primary) hover:bg-(--t-primary-active)",
    ink: "bg-ink text-(--t-on-dark) hover:bg-primary",
    outline: "border border-(--t-control) bg-canvas text-ink hover:border-ink",
    "on-dark": "bg-canvas text-ink hover:bg-(--t-strong)",
  }[tone];
  const dims = size === "lg" ? "min-h-12 px-10 text-[14px]" : "min-h-11 px-6 text-[13px]";
  const cls = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold uppercase tracking-[0.04em] no-underline transition-colors duration-200 disabled:cursor-not-allowed disabled:bg-(--t-primary-disabled) disabled:text-(--t-on-primary) ${dims} ${t} ${className}`;
  if (href) return <Link href={href} onClick={onClick} className={cls}>{children}</Link>;
  return <button type={type} onClick={onClick} disabled={disabled} className={cls}>{children}</button>;
}

/** The reference's centred section head: the title, then one quiet line beneath it. */
export function SectionHead({
  id, title, lead, className = "", align = "center", action,
}: {
  id: string; title: string; lead?: string; className?: string; align?: "center" | "start"; action?: ReactNode;
}) {
  if (align === "start") {
    return (
      <div className={`flex flex-wrap items-end justify-between gap-4 ${className}`}>
        <div>
          <h2 id={id} className="font-display text-[26px] font-bold leading-[1.2] tracking-[-0.02em] text-ink text-balance sm:text-[32px]">{title}</h2>
          {lead && <p className="mt-2 max-w-[60ch] text-[14px] leading-[1.6] text-(--t-muted)">{lead}</p>}
        </div>
        {action}
      </div>
    );
  }
  return (
    <div className={`text-center ${className}`}>
      <h2 id={id} className="font-display text-[26px] font-bold leading-[1.2] tracking-[-0.02em] text-ink text-balance sm:text-[32px]">{title}</h2>
      {lead && <p className="mx-auto mt-2 max-w-[60ch] text-[14px] leading-[1.6] text-(--t-muted)">{lead}</p>}
    </div>
  );
}

/** The two badges the DESIGN.md defines: yellow/ink for New, mulberry/white for Sale. Never more than two. */
export const Badge = ({ kind, children }: { kind: "new" | "sale"; children: ReactNode }) => (
  <span className={`inline-flex items-center rounded-xs px-2 py-1 text-[11px] font-bold uppercase leading-none tracking-[0.06em] ${kind === "new" ? "bg-(--t-accent) text-(--t-on-accent)" : "bg-primary text-(--t-on-primary)"}`}>
    {children}
  </span>
);

/** "Low stock", "In store only" — a blush pill in muted type, per the DESIGN.md. */
export const StockPill = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center rounded-full bg-(--t-soft) px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-(--t-muted)">{children}</span>
);

/** Prices are formatted from numbers so one locale change re-denominates the whole catalogue. */
export const money = (n: number, locale: string, currency: string) =>
  new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: 2 }).format(n);
