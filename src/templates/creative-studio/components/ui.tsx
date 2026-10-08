// Primitives for the creative studio: 1384px container, the lime pill button with its white arrow disc,
// the numbered section header (lime circle, rule, graphite pill, headline column) and tag pills.
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal, Words } from "@/components/Reveal";

export const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => <div className={`mx-auto w-full max-w-[1440px] px-5 sm:px-7 ${className}`}>{children}</div>;

export function Pill({ href, children, className = "", type = "button", tone = "lime" }: { href?: string; children: ReactNode; className?: string; type?: "button" | "submit"; tone?: "lime" | "dark" | "white" }) {
  const t = { lime: "bg-primary text-ink", dark: "bg-dark text-white", white: "bg-white text-ink" }[tone];
  const cls = `group inline-flex h-14 items-center gap-4 rounded-full py-1.5 pl-6 pr-1.5 text-[17px] font-bold no-underline transition-transform active:scale-[.98] ${t} ${className}`;
  const inner = <>{children}<span className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${tone === "white" ? "bg-primary text-ink" : "bg-white text-ink"} transition-transform group-hover:rotate-45`}><ArrowUpRightIcon size={18} weight="bold" aria-hidden="true" /></span></>;
  if (href) return <Link href={href} className={cls}>{inner}</Link>;
  return <button type={type} className={cls}>{inner}</button>;
}

/** Numbered section header: lime circle, short rule, graphite pill; headline and text in the right column. */
export function SectionHead({ n, label, title, text, id, onDark = false, full = false }: { n: string; label: string; title: string; text: string; id: string; onDark?: boolean; full?: boolean }) {
  return (
    <div className={`grid gap-8 ${full ? "" : "lg:grid-cols-[1fr_1.3fr] lg:gap-10"}`}>
      <div className="flex items-center gap-8 self-start">
        <Reveal from="scale"><span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-[15px] font-bold text-ink" aria-hidden="true">{n}</span></Reveal>
        <Reveal from="left" delay={0.1}><span className={`block h-px w-16 ${onDark ? "bg-white/30" : "bg-hairline-strong"}`} aria-hidden="true" /></Reveal>
        <Reveal from="left" delay={0.2}><span className={`inline-flex h-10 items-center rounded-full px-4 text-[15px] font-semibold ${onDark ? "bg-white text-ink" : "bg-dark text-white"}`}>{label}</span></Reveal>
      </div>
      <div className="grid gap-5">
        <h2 id={id} className={`font-display text-[36px] font-bold leading-[1.08] tracking-[-1.2px] sm:text-[48px] lg:text-[56px] ${onDark ? "text-white" : "text-ink"} text-balance`}><Words>{title}</Words></h2>
        {text && <Reveal delay={0.25}><p className={`max-w-[60ch] text-[17px] leading-[1.6] ${onDark ? "text-white/70" : "text-body"}`}>{text}</p></Reveal>}
      </div>
    </div>
  );
}

export const Tag = ({ children }: { children: string }) => <span className="inline-flex h-9 items-center rounded-full border border-hairline bg-white px-3.5 text-[15px] text-ink">{children}</span>;
