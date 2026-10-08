// Primitives rebuilt against the Lawsight reference (see the DESIGN.md revision): pill buttons with a brass
// gradient on the two large calls to action, the eyebrow as a dark label over a short brass rule that runs on as
// a hairline, the two-tone headline whose last words turn brass, and the counter. Palette and typefaces stay ours.
import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => <div className={`mx-auto w-full max-w-[1180px] px-5 sm:px-8 ${className}`}>{children}</div>;

type Tone = "brass" | "dark" | "outline" | "on-dark";
export function Btn({ href, children, tone = "brass", className = "", type = "button" }: { href?: string; children: ReactNode; tone?: Tone; className?: string; type?: "button" | "submit" }) {
  const t = {
    // The reference's signature CTA: a warm gradient pill. Ours runs between brass and brass-deep.
    brass: "bg-[linear-gradient(100deg,var(--t-accent),var(--t-accent-deep))] text-white hover:brightness-110 active:brightness-95",
    dark: "bg-dark text-white hover:bg-primary active:bg-(--t-primary-press)",
    outline: "border border-hairline-strong text-ink hover:border-accent hover:text-(--t-accent-deep) active:bg-soft",
    "on-dark": "border border-white/30 text-white hover:border-accent hover:text-accent active:bg-white/10",
  }[tone];
  const cls = `inline-flex min-h-12 items-center justify-center rounded-full px-8 py-3.5 text-[15px] font-semibold uppercase tracking-[0.6px] no-underline transition-[filter,background-color,border-color,color] duration-200 ${t} ${className}`;
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button type={type} className={cls}>{children}</button>;
}

/** The reference's section label: the words, then a short brass rule that continues as a long hairline. */
export function Eyebrow({ children, onDark = false, className = "" }: { children: ReactNode; onDark?: boolean; className?: string }) {
  return (
    <span className={`block ${className}`}>
      <span className={`block text-[14px] font-semibold tracking-[2px] ${onDark ? "text-accent" : "text-ink"}`}>{children}</span>
      <span aria-hidden="true" className="mt-2.5 flex items-center">
        <span className="block h-0.5 w-7 bg-accent" />
        <span className={`block h-px flex-1 max-w-[260px] ${onDark ? "bg-white/20" : "bg-hairline"}`} />
      </span>
    </span>
  );
}

/**
 * The reference's headline device: a heavy two-line title whose final word or two turn gold. Ours keeps
 * Cormorant Garamond and turns them text-safe brass, since raw brass fails contrast on the ivory.
 */
export function Title({ id, lead, em, onDark = false, className = "", as: Tag = "h2" }: { id?: string; lead: string; em?: string; onDark?: boolean; className?: string; as?: "h1" | "h2" }) {
  return (
    <Tag id={id} className={`font-display text-[34px] font-semibold leading-[1.18] text-balance sm:text-[42px] lg:text-[48px] ${onDark ? "text-white" : "text-ink"} ${className}`}>
      {lead}{em && <> <span className={onDark ? "text-accent" : "text-(--t-accent-deep)"}>{em}</span></>}
    </Tag>
  );
}

/** Eyebrow and two-tone title on the left, an optional paragraph sitting on the baseline to the right. */
export function SectionHead({ id, eyebrow, lead, em, text, onDark = false }: { id: string; eyebrow: string; lead: string; em?: string; text?: string; onDark?: boolean }) {
  return (
    <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-14">
      <div>
        <Reveal><Eyebrow onDark={onDark}>{eyebrow}</Eyebrow></Reveal>
        <Reveal delay={0.08}><Title id={id} lead={lead} em={em} onDark={onDark} className="mt-6 max-w-[18ch]" /></Reveal>
      </div>
      {text && <Reveal delay={0.16}><p className={`text-[16px] leading-[1.7] ${onDark ? "text-(--t-on-dark-muted)" : "text-(--t-ink-secondary)"}`}>{text}</p></Reveal>}
    </div>
  );
}

/** Any year, count or fee. `tnum` keeps credentials and fee columns aligned, as the DESIGN.md requires. */
export const Num = ({ children, className = "" }: { children: ReactNode; className?: string }) => <span className={`[font-feature-settings:'tnum'] tabular-nums ${className}`}>{children}</span>;

/** The reference's counter: a brass icon above a large brass numeral and a quiet label. */
export function Counter({ icon, value, label, onDark = false }: { icon: ReactNode; value: string; label: string; onDark?: boolean }) {
  return (
    <div className="text-center">
      <span aria-hidden="true" className="mx-auto mb-4 flex size-12 items-center justify-center text-(--t-accent-deep)">{icon}</span>
      <p className={`font-display text-[40px] font-semibold leading-none ${onDark ? "text-accent" : "text-ink"}`}><Num>{value}</Num></p>
      <p className={`mt-2 text-[15px] ${onDark ? "text-(--t-on-dark-muted)" : "text-mute"}`}>{label}</p>
    </div>
  );
}

export const Tag = ({ children }: { children: string }) => <span className="inline-flex items-center rounded-xs bg-(--t-primary-subdued) px-2 py-1 text-[12px] font-semibold uppercase tracking-[1.4px] text-(--t-primary-deep)">{children}</span>;
