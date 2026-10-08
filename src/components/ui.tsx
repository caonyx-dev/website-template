import Link from "next/link";
import type { ReactNode } from "react";

export function Wrap({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1360px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, onDark = false, className = "" }: { children: ReactNode; onDark?: boolean; className?: string }) {
  return (
    <span className={`inline-flex h-[34px] items-center gap-2 rounded-full border px-[14px] text-[11px] font-medium uppercase tracking-[.12em] ${onDark ? "border-white/20 bg-white/10 text-on-dark" : "border-hairline bg-surface text-ink"} ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      {children}
    </span>
  );
}

type BtnProps = { href?: string; children: ReactNode; variant?: "accent" | "ink" | "ghost" | "ghost-dark"; size?: "md" | "sm"; className?: string; type?: "button" | "submit" };
export function Button({ href, children, variant = "accent", size = "md", className = "", type = "button" }: BtnProps) {
  const base = "inline-flex items-center justify-center gap-2.5 rounded-(--t-radius-button) font-button font-medium whitespace-nowrap border transition-[background-color,color,border-color,transform] duration-200 active:translate-y-px";
  const sz = size === "sm" ? "h-11 px-5 text-[14px]" : "h-14 px-7 text-[15px]";
  const v = {
    accent: "bg-accent border-accent text-on-primary hover:bg-accent-deep hover:border-accent-deep",
    ink: "bg-dark border-dark text-on-dark hover:opacity-90",
    ghost: "bg-transparent border-hairline-strong text-ink hover:border-ink",
    "ghost-dark": "bg-transparent border-white/35 text-on-dark hover:border-white",
  }[variant];
  const cls = `${base} ${sz} ${v} ${className}`;
  if (href) return <Link href={href} className={`${cls} no-underline`}>{children}</Link>;
  return <button type={type} className={cls}>{children}</button>;
}

export function SectionHead({ eyebrow, title, lead, center = false, onDark = false, id }: { eyebrow?: string; title: ReactNode; lead?: ReactNode; center?: boolean; onDark?: boolean; id?: string }) {
  return (
    <div className={`mb-14 grid gap-6 lg:gap-12 ${center ? "justify-items-center text-center" : "lg:grid-cols-[7fr_5fr] lg:items-end"}`}>
      <div className={`grid ${center ? "justify-items-center" : "justify-items-start"}`}>
        {eyebrow && <Eyebrow onDark={onDark} className="mb-5">{eyebrow}</Eyebrow>}
        <h2 id={id} className={`font-display font-medium text-[34px] leading-[1.12] sm:text-[44px] lg:text-[56px] text-balance ${onDark ? "text-on-dark" : "text-ink"}`}>{title}</h2>
      </div>
      {lead && <p className={`text-[18px] leading-[1.6] ${center ? "max-w-[56ch]" : "max-w-[44ch]"} ${onDark ? "text-on-dark-muted" : "text-body"}`}>{lead}</p>}
    </div>
  );
}

export const Accent = ({ children }: { children: ReactNode }) => <span className="text-accent">{children}</span>;
