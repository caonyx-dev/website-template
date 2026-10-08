// Primitives for the construction template: 1200px container, hard-offset buttons, uppercase
// headline row, badge pills. Everything reads from the template tokens set in the layout.
import Link from "next/link";
import type { ReactNode } from "react";

export const Container = ({ children, className = "", wide = false }: { children: ReactNode; className?: string; wide?: boolean }) => (
  <div className={`mx-auto w-full ${wide ? "max-w-[1400px]" : "max-w-[1200px]"} px-5 sm:px-8 ${className}`}>{children}</div>
);

/** button-primary: amber, dark text, 2px ink border and a hard 3px offset that collapses when pressed. */
const BTN = "inline-flex h-12 items-center justify-center gap-2 rounded-md border-2 border-ink px-6 font-button text-[14px] font-medium no-underline transition-[transform,box-shadow,background-color] duration-150";
const VARIANTS = {
  primary: "bg-accent text-on-primary shadow-[3px_3px_0_var(--t-ink)] hover:bg-accent-deep active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_var(--t-ink)]",
  secondary: "bg-canvas text-ink hover:bg-soft",
  "secondary-dark": "border-white/80 bg-transparent text-on-dark hover:bg-white/10",
};
export function Btn({ href, children, variant = "primary", className = "", type = "button", full = false }: { href?: string; children: ReactNode; variant?: keyof typeof VARIANTS; className?: string; type?: "button" | "submit"; full?: boolean }) {
  const cls = `${BTN} ${VARIANTS[variant]} ${full ? "w-full" : ""} ${className}`;
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button type={type} className={cls}>{children}</button>;
}

/** Uppercase text button used for the phone number and "See all" links. */
export const TextLink = ({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) => (
  <Link href={href} className={`inline-flex items-center gap-2 font-button text-[14px] font-medium text-ink no-underline underline-offset-[3px] hover:underline ${className}`}>{children}</Link>
);

/** Section headline row: uppercase h2 left, one supporting line right, optional text link. */
export function Headline({ id, title, lead, link, onDark = false }: { id?: string; title: ReactNode; lead?: string; link?: ReactNode; onDark?: boolean }) {
  return (
    <div className="mb-10 grid gap-5 lg:mb-12 lg:grid-cols-[7fr_5fr] lg:items-end lg:gap-10">
      <h2 id={id} className={`font-display text-[36px] font-bold leading-[1.05] sm:text-[44px] lg:text-[52px] text-balance ${onDark ? "text-on-dark" : "text-ink"}`}>{title}</h2>
      <div className="grid justify-items-start gap-4">
        {lead && <p className={`max-w-[46ch] text-[16px] leading-[1.55] ${onDark ? "text-on-dark-muted" : "text-body"}`}>{lead}</p>}
        {link}
      </div>
    </div>
  );
}

const TRADE: Record<string, string> = { Residential: "bg-[#4A6FA5]", Commercial: "bg-[#5B6B4A]", Renovation: "bg-[#B5651D]", Industrial: "bg-[#6B6A64]" };
/** badge-pill: square-cornered trade tag in the DESIGN.md badge colours, white text. */
export const Badge = ({ children, neutral = false }: { children: string; neutral?: boolean }) => (
  <span className={`inline-flex h-[22px] items-center rounded-sm px-2.5 text-[11px] font-medium uppercase tracking-[.08em] ${neutral ? "bg-soft text-ink" : `${TRADE[children] ?? "bg-ink"} text-white`}`}>{children}</span>
);
