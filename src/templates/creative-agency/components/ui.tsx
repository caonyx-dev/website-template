// Primitives for the creative agency: 1280px container, square black buttons with a lime hover fill,
// uppercase underlined text links with ↗, and the centred section title.
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

export const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 ${className}`}>{children}</div>;

/** Square button: black with white uppercase text; a lime fill slides up on hover (the reference's "creative hover"). */
export function Btn({ href, children, className = "", type = "button", variant = "dark" }: { href?: string; children: ReactNode; className?: string; type?: "button" | "submit"; variant?: "dark" | "outline" }) {
  const base = `group relative inline-flex h-14 items-center justify-center overflow-hidden px-7 text-[13px] font-bold uppercase tracking-[.08em] no-underline transition-colors duration-300 ${variant === "dark" ? "bg-ink text-white hover:text-ink" : "border border-ink bg-transparent text-ink hover:text-ink"} ${className}`;
  const inner = <><span className="absolute inset-0 translate-y-full bg-accent transition-transform duration-300 ease-out group-hover:translate-y-0" aria-hidden="true" /><span className="relative">{children}</span></>;
  if (href) return <Link href={href} className={base}>{inner}</Link>;
  return <button type={type} className={base}>{inner}</button>;
}

/** Uppercase text link with an underline rule and the ↗ glyph. */
export const TextLink = ({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) => (
  <Link href={href} className={`inline-flex items-center gap-2 border-b-2 border-ink pb-1 text-[13px] font-bold uppercase tracking-[.08em] text-ink no-underline transition-colors hover:border-accent ${className}`}>{children}<ArrowUpRightIcon size={14} weight="bold" aria-hidden="true" /></Link>
);

export const H2 = ({ children, center = false, className = "", id }: { children: ReactNode; center?: boolean; className?: string; id?: string }) => (
  <h2 id={id} className={`font-display text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[48px] lg:text-[64px] text-balance ${center ? "mx-auto max-w-[16ch] text-center" : ""} ${className}`}>{children}</h2>
);
