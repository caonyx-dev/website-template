// Primitives for the gym: 1320px container, the volt block button with its trailing arrow disc (plus outline
// and surface variants, all 6px), volt numbered eyebrows "(Training — 02)", the giant two-line section title
// with an italic first letter, intensity chips with a category tint dot, badges and tabular figures.
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import type { Category, Intensity } from "../content";

export const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => <div className={`mx-auto w-full max-w-[1320px] px-5 sm:px-8 ${className}`}>{children}</div>;

type Tone = "primary" | "secondary" | "tertiary";
export function Btn({ href, children, tone = "primary", className = "", type = "button", arrow = true }: { href?: string; children: ReactNode; tone?: Tone; className?: string; type?: "button" | "submit"; arrow?: boolean }) {
  const t = { primary: "bg-primary text-on-primary hover:bg-(--t-primary-pressed)", secondary: "border border-hairline-strong text-ink hover:border-ink", tertiary: "bg-(--t-surface-elevated) text-ink hover:bg-dark" }[tone];
  const cls = `group inline-flex h-12 items-center justify-center gap-3 rounded-(--t-radius-button) py-1 pl-6 font-button text-[14px] font-medium no-underline transition-colors ${arrow ? "pr-1.5" : "pr-6"} ${t} ${className}`;
  const inner = <>{children}{arrow && <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition-transform group-hover:rotate-45 ${tone === "primary" ? "bg-canvas text-primary" : "bg-primary text-on-primary"}`}><ArrowUpRightIcon size={16} weight="bold" aria-hidden="true" /></span>}</>;
  if (href) return <Link href={href} className={cls}>{inner}</Link>;
  return <button type={type} className={cls}>{inner}</button>;
}

export const Eyebrow = ({ n, children }: { n?: string; children: ReactNode }) => <span className="block text-[15px] font-medium text-primary">({children}{n && <> — {n}</>})</span>;

/** Giant two-line Oswald title (the reference italicises the first letter; Oswald has no italic, so the lines stay upright). */
export function Giant({ lines, id, className = "", size = "text-[clamp(56px,10vw,150px)]" }: { lines: readonly string[]; id?: string; className?: string; size?: string }) {
  return (
    <h2 id={id} className={`font-display font-bold leading-[.92] text-ink ${size} ${className}`}>
      {lines.map((l, i) => <span key={i} className="block">{l}</span>)}
    </h2>
  );
}

export function SectionHead({ n, label, lines, id, center = true, cta }: { n: string; label: string; lines: readonly string[]; id: string; center?: boolean; cta?: ReactNode }) {
  return (
    <div className={`mb-14 ${center ? "flex flex-col items-center text-center" : ""}`}>
      <Reveal from="scale"><Eyebrow n={n}>{label}</Eyebrow></Reveal>
      <Reveal delay={0.1} className="mt-5"><Giant lines={lines} id={id} /></Reveal>
      {cta && <Reveal delay={0.25} className="mt-9">{cta}</Reveal>}
    </div>
  );
}

const TINT: Record<Category, string> = { strength: "var(--t-accent-yellow)", cardio: "var(--t-accent-green)", mobility: "var(--t-accent-blue)" };
export const Chip = ({ intensity, category }: { intensity: Intensity; category: Category }) => (
  <span className="inline-flex h-5 items-center gap-1.5 rounded-xs bg-dark px-1.5 text-[12px] font-medium uppercase tracking-[.04em] text-body"><span className="h-1.5 w-1.5 rounded-full" style={{ background: TINT[category] }} aria-hidden="true" />{intensity}<span className="sr-only"> intensity, {category}</span></span>
);

export const Badge = ({ tone = "new", children }: { tone?: "new" | "urgent" | "tier"; children: ReactNode }) => <span className={`inline-flex h-5 shrink-0 items-center whitespace-nowrap rounded-xs px-2 text-[12px] font-medium ${tone === "new" ? "bg-(--t-primary-soft) text-primary" : tone === "urgent" ? "bg-(--t-accent-soft) text-accent" : "bg-(--t-surface-elevated) text-(--t-on-dark-mute)"}`}>{children}</span>;

export const Num = ({ children, className = "" }: { children: ReactNode; className?: string }) => <span className={`tabular-nums ${className}`}>{children}</span>;
