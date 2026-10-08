// Primitives for the restaurant: 1200px container, nearly square buttons (olive filled, olive outline, outlined
// on dark), the letterspaced eyebrow, the centred Playfair section header with its gold flourish, the rotated
// vertical label used beside the hero and chef photographs, dietary tags and the dotted price leader.
import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal, Words } from "@/components/Reveal";

export const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>;

type Tone = "primary" | "outline" | "on-dark";
export function Btn({ href, children, tone = "primary", className = "", type = "button" }: { href?: string; children: ReactNode; tone?: Tone; className?: string; type?: "button" | "submit" }) {
  const t = {
    primary: "bg-primary text-white hover:bg-(--t-primary-active) active:bg-(--t-primary-active)",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white active:bg-(--t-primary-active) active:text-white",
    "on-dark": "border border-on-dark/60 text-on-dark hover:border-accent hover:text-accent active:border-accent active:bg-accent/15",
  }[tone];
  const cls = `inline-flex h-12 items-center justify-center rounded-(--t-radius-button) px-7 text-[15px] font-medium uppercase tracking-[1.4px] no-underline transition-colors duration-200 active:translate-y-px motion-reduce:active:translate-y-0 ${t} ${className}`;
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button type={type} className={cls}>{children}</button>;
}

export const Eyebrow = ({ children, onDark = false, className = "" }: { children: ReactNode; onDark?: boolean; className?: string }) => <span className={`block text-[12px] font-medium uppercase tracking-[2px] ${onDark ? "text-accent" : "text-(--t-accent-deep)"} ${className}`}>{children}</span>;

/** The gold flourish beneath a centred headline: a short rule with a diamond at its centre. */
export const Flourish = ({ className = "" }: { className?: string }) => (
  <span className={`flex items-center justify-center gap-2 ${className}`} aria-hidden="true">
    <span className="block h-px w-12 bg-accent/60" /><span className="block h-1.5 w-1.5 rotate-45 bg-accent" /><span className="block h-px w-12 bg-accent/60" />
  </span>
);

export function SectionHead({ id, eyebrow, title, lead, onDark = false, center = true }: { id: string; eyebrow?: string; title: string; lead?: string; onDark?: boolean; center?: boolean }) {
  return (
    <div className={`mb-12 ${center ? "mx-auto max-w-[680px] text-center" : "max-w-[620px]"}`}>
      {eyebrow && <Reveal><Eyebrow onDark={onDark}>{eyebrow}</Eyebrow></Reveal>}
      <h2 id={id} className={`mt-4 font-display text-[30px] font-semibold leading-[1.15] sm:text-[40px] lg:text-[48px] ${onDark ? "text-on-dark" : "text-ink"} text-balance`}><Words>{title}</Words></h2>
      <Reveal delay={0.15}><Flourish className="mt-6" /></Reveal>
      {lead && <Reveal delay={0.2}><p className={`mt-6 text-[16px] leading-[1.65] ${onDark ? "text-on-dark/75" : "text-body"}`}>{lead}</p></Reveal>}
    </div>
  );
}

/** The rotated label running down the edge of the hero and chef photographs. */
export const SideLabel = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <span className={`hidden text-[12px] font-medium uppercase tracking-[4px] text-on-dark/70 [writing-mode:vertical-rl] lg:block ${className}`} style={{ transform: "rotate(180deg)" }}>{children}</span>
);

export const Tag = ({ children }: { children: string }) => <span className="inline-flex h-[22px] items-center rounded-xs bg-soft px-1.5 text-[11px] font-medium uppercase tracking-[0.8px] text-mute">{children}</span>;

/** One dish: italic Playfair name, a dotted leader to the right-aligned price, description and tags beneath. */
export function MenuRow({ name, price, text, tags, badge }: { name: string; price: string; text?: string; tags?: string[]; badge?: string }) {
  return (
    <li className="grid gap-1.5 border-b border-(--t-hairline-soft) py-3 last:border-b-0">
      <p className="flex items-baseline gap-2">
        <span className="font-display text-[18px] font-medium italic text-ink">{name}</span>
        {badge && <span className="inline-flex h-5 shrink-0 items-center rounded-xs bg-surface px-1.5 text-[11px] font-medium tracking-[.4px] text-primary">{badge}</span>}
        <span className="min-w-6 flex-1 translate-y-[-4px] border-b border-dotted border-hairline" aria-hidden="true" />
        <span className="shrink-0 text-[14px] tabular-nums text-ink"><span className="sr-only">Price </span>{price}</span>
      </p>
      {text && <p className="text-[14px] leading-[1.5] text-mute">{text}</p>}
      {tags && tags.length > 0 && <p className="flex flex-wrap gap-1.5">{tags.map((t) => <Tag key={t}>{t}</Tag>)}</p>}
    </li>
  );
}
