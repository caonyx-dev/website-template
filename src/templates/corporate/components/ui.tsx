// Primitives for the corporate template in the reference's language: a 1600px outer frame with a
// 1280px inner container, 6px electric-blue buttons with the ↗ arrow, diamond eyebrows, vertical
// ghost watermarks and the word-by-word blur reveal. Everything reads the template tokens.
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import AnimatedText from "./AnimatedText";

export const Frame = ({ children, className = "" }: { children: ReactNode; className?: string }) => <div className={`mx-auto w-full max-w-[1600px] ${className}`}>{children}</div>;
export const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => <div className={`mx-auto w-full max-w-[1280px] px-4 sm:px-6 ${className}`}>{children}</div>;

const BTN = "inline-flex items-center gap-3 whitespace-nowrap rounded-sm text-[15px] font-normal leading-tight no-underline transition-colors duration-300";
export function Btn({ href, children, variant = "primary", className = "", type = "button", arrow = true }: { href?: string; children: ReactNode; variant?: "primary" | "outline" | "dark" | "white"; className?: string; type?: "button" | "submit"; arrow?: boolean }) {
  const v = { primary: "bg-primary px-5 py-3.5 text-white hover:bg-[#1d4fd8]", outline: "border border-ink/15 bg-transparent px-5 py-3.5 text-ink hover:bg-soft", dark: "bg-ink px-5 py-3.5 text-white hover:bg-black", white: "bg-white px-5 py-3.5 text-ink hover:bg-soft" }[variant];
  const inner = <>{arrow && <ArrowUpRightIcon size={14} weight="bold" aria-hidden="true" />}{children}</>;
  if (href) return <Link href={href} className={`${BTN} ${v} ${className}`}>{inner}</Link>;
  return <button type={type} className={`${BTN} ${v} ${className}`}>{inner}</button>;
}

/** Diamond eyebrow: an outlined rotated square and uppercase label. */
export const Eyebrow = ({ children, onDark = false, className = "" }: { children: ReactNode; onDark?: boolean; className?: string }) => (
  <span className={`inline-flex items-center gap-3 text-[14px] font-semibold uppercase tracking-[.02em] ${onDark ? "text-white" : "text-ink"} ${className}`}>
    <span className="inline-block h-3 w-3 rotate-45 border-[1.5px] border-current" aria-hidden="true" />{children}
  </span>
);

/** Section heading with the word-by-word blur reveal. */
export const H2 = ({ children, onDark = false, className = "", center = false, id }: { children: string; onDark?: boolean; className?: string; center?: boolean; id?: string }) => (
  <h2 id={id} className={`font-display text-[32px] font-semibold leading-[1.15] tracking-[-0.01em] sm:text-[40px] lg:text-[48px] ${center ? "text-center" : ""} ${onDark ? "text-white" : "text-ink"} ${className}`}>
    <AnimatedText stagger={0.06}>{children}</AnimatedText>
  </h2>
);

/** Vertical ghost watermark hugging a section's edge. */
export const Watermark = ({ children, side = "left", onDark = false }: { children: string; side?: "left" | "right"; onDark?: boolean }) => (
  <span aria-hidden="true" className={`pointer-events-none absolute top-1/2 hidden -translate-y-1/2 select-none whitespace-nowrap font-display text-[110px] font-semibold uppercase leading-none xl:block ${onDark ? "text-white/5" : "text-ink/5"} ${side === "left" ? "left-8 [writing-mode:vertical-rl] rotate-180" : "right-8 [writing-mode:vertical-rl]"}`}>{children}</span>
);

/** Round outlined arrow buttons used by the sliders and the blog rows. */
export const RoundBtn = ({ children, className = "", onDark = false, ...rest }: { children: ReactNode; className?: string; onDark?: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...rest} className={`inline-flex h-14 w-14 items-center justify-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-30 ${onDark ? "border-white text-white hover:bg-white hover:text-ink" : "border-ink/20 text-ink hover:bg-ink hover:text-white"} ${className}`}>{children}</button>
);
