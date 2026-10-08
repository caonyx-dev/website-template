// Primitives for the accounting practice in the Consultor language: 1290px container, square DM Sans 700
// buttons (teal with white text, lime with ink text, outlined white for dark surfaces), the tracked eyebrow,
// centred and left section headers, status chips, mono tabular figures and the social icon lookup.
import Link from "next/link";
import type { ReactNode } from "react";
import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon, XLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal, Words } from "@/components/Reveal";

export const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => <div className={`mx-auto w-full max-w-[1290px] px-5 sm:px-8 ${className}`}>{children}</div>;

type Tone = "teal" | "lime" | "outline-white" | "outline";
export function Btn({ href, children, tone = "teal", className = "", type = "button" }: { href?: string; children: ReactNode; tone?: Tone; className?: string; type?: "button" | "submit" }) {
  const t = {
    teal: "bg-primary text-white hover:bg-(--t-primary-deep)",
    lime: "bg-accent text-ink hover:bg-primary hover:text-white",
    "outline-white": "border border-white/40 text-white hover:bg-white hover:text-ink",
    outline: "border border-hairline-strong text-ink hover:border-ink",
  }[tone];
  const cls = `inline-flex h-[60px] items-center justify-center gap-2.5 px-9 font-display text-[15px] font-bold no-underline transition-colors duration-200 ${t} ${className}`;
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button type={type} className={cls}>{children}</button>;
}

export const Eyebrow = ({ children, onDark = false, className = "" }: { children: ReactNode; onDark?: boolean; className?: string }) => <span className={`block font-display text-[13px] font-bold uppercase tracking-[.16em] ${onDark ? "text-white/70" : "text-ink"} ${className}`}>{children}</span>;

export function SectionHead({ id, eyebrow, title, lead, center = false, onDark = false }: { id: string; eyebrow: string; title: string; lead?: string; center?: boolean; onDark?: boolean }) {
  return (
    <div className={`${center ? "mx-auto max-w-[760px] text-center" : "max-w-[640px]"} mb-12`}>
      <Reveal><Eyebrow onDark={onDark}>{eyebrow}</Eyebrow></Reveal>
      <h2 id={id} className={`mt-4 font-display text-[36px] font-bold leading-[1.05] sm:text-[48px] lg:text-[57px] ${onDark ? "text-white" : "text-ink"} text-balance`}><Words>{title}</Words></h2>
      {lead && <Reveal delay={0.2}><p className={`mt-5 max-w-[58ch] text-[17px] leading-[1.65] ${center ? "mx-auto" : ""} ${onDark ? "text-white/70" : "text-body"}`}>{lead}</p></Reveal>}
    </div>
  );
}

export function Chip({ tone, children }: { tone: "positive" | "warning" | "error"; children: ReactNode }) {
  const t = { positive: "bg-accent-soft text-accent-deep", warning: "bg-(--t-warning)/10 text-(--t-warning)", error: "bg-(--t-error)/10 text-(--t-error)" }[tone];
  return <span className={`inline-flex h-6 items-center px-2.5 font-display text-[11px] font-bold uppercase tracking-[.1em] whitespace-nowrap ${t}`}>{children}</span>;
}

/** Any money, date, percentage or count: IBM Plex Mono with tabular figures. */
export const Num = ({ children, className = "" }: { children: ReactNode; className?: string }) => <span className={`font-mono tabular-nums ${className}`}>{children}</span>;

export function SocialIcon({ label, size = 18 }: { label: string; size?: number }) {
  const p = { size, weight: "fill" as const, "aria-hidden": true };
  if (/facebook/i.test(label)) return <FacebookLogoIcon {...p} />;
  if (/instagram/i.test(label)) return <InstagramLogoIcon {...p} />;
  if (/linkedin/i.test(label)) return <LinkedinLogoIcon {...p} />;
  return <XLogoIcon {...p} />;
}
