// Primitives for the hotel: 1180px container, 2px square buttons with uppercase letterspaced Jost labels (navy
// filled, gold-outlined on navy, navy-outlined on ivory), the letterspaced eyebrow with its gold rule, the
// centred Marcellus section header and the arch frame.
import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal, Words } from "@/components/Reveal";

export const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => <div className={`mx-auto w-full max-w-[1180px] px-5 sm:px-8 ${className}`}>{children}</div>;

type Tone = "primary" | "ghost-gold" | "outline";
export function Btn({ href, children, tone = "primary", className = "", type = "button" }: { href?: string; children: ReactNode; tone?: Tone; className?: string; type?: "button" | "submit" }) {
  const t = {
    primary: "bg-primary text-white outline outline-1 outline-offset-[-1px] outline-accent/60 hover:bg-(--t-primary-focus)",
    "ghost-gold": "border border-accent text-on-dark hover:bg-accent hover:text-ink",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white",
  }[tone];
  const cls = `inline-flex h-12 items-center justify-center rounded-(--t-radius-button) px-7 text-[12px] font-medium uppercase tracking-[2px] no-underline transition-colors duration-300 ${t} ${className}`;
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button type={type} className={cls}>{children}</button>;
}

export const Eyebrow = ({ children, onDark = false, center = true }: { children: ReactNode; onDark?: boolean; center?: boolean }) => (
  <span className={`flex flex-col gap-3 text-[12px] font-medium uppercase tracking-[2.4px] ${center ? "items-center" : "items-start"} ${onDark ? "text-accent" : "text-accent-deep"}`}>{children}<span className="block h-px w-12 bg-accent" aria-hidden="true" /></span>
);

export function SectionHead({ id, eyebrow, title, lead, onDark = false }: { id: string; eyebrow: string; title: string; lead?: string; onDark?: boolean }) {
  return (
    <div className="mx-auto mb-14 max-w-[720px] text-center">
      <Reveal><Eyebrow onDark={onDark}>{eyebrow}</Eyebrow></Reveal>
      <h2 id={id} className={`mt-6 font-display text-[34px] leading-[1.15] sm:text-[44px] lg:text-[52px] ${onDark ? "text-on-dark" : "text-ink"} text-balance`}><Words>{title}</Words></h2>
      {lead && <Reveal delay={0.2}><p className={`mt-5 text-[17px] font-light leading-[1.6] ${onDark ? "text-(--t-body-muted)" : "text-(--t-ink-80)"}`}>{lead}</p></Reveal>}
    </div>
  );
}

/** Arch-topped frame (the Almaris signature): a full radius on the top corners, square at the bottom. */
export const Arch = ({ children, className = "" }: { children: ReactNode; className?: string }) => <div className={`relative overflow-hidden rounded-t-[999px] ${className}`}>{children}</div>;
