// Shared primitives. Buttons are pills with an uppercase tracked label and a small triangle glyph,
// matching the reference. Orange is ~3.4:1 on white, so it only ever appears on 56px+ controls
// (templates/tech-startup/DESIGN.md — large text and controls only, never body copy).
import type { ReactNode } from "react";
import { Words } from "@/components/Reveal";

export function Wrap({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1290px] px-5 sm:px-6 lg:px-10 ${className}`}>{children}</div>;
}

/** Display heading from authored lines — breaks happen on meaning, not on column width. */
export function Headline({ lines, animate = true }: { lines: string[]; animate?: boolean }) {
  return (
    <>
      {lines.map((l, i) => (
        <span key={i} className="block">
          {animate ? <Words>{l}</Words> : l}
        </span>
      ))}
    </>
  );
}

type BtnProps = {
  href?: string;
  children: ReactNode;
  tone?: "orange" | "dark" | "outline" | "light";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({ href, children, tone = "orange", className = "", type = "button", onClick }: BtnProps) {
  const base =
    "group/btn inline-flex min-h-14 items-center gap-5 rounded-full px-8 py-4 font-display text-[14px] font-semibold uppercase tracking-[0.06em] transition-colors duration-300";
  const tones = {
    orange: "bg-primary text-on-primary hover:bg-[var(--t-primary-hover)]",
    dark: "bg-ink text-on-dark hover:bg-[var(--t-dark-2)]",
    outline: "border border-hairline-strong text-ink hover:border-ink",
    light: "bg-canvas text-ink hover:bg-soft",
  }[tone];
  const inner = (
    <>
      <span>{children}</span>
      <span
        aria-hidden
        className={`grid size-6 shrink-0 place-items-center rounded-full text-[9px] transition-transform duration-300 group-hover/btn:translate-x-0.5 ${
          tone === "orange" || tone === "dark" ? "bg-white/20" : "bg-ink/10"
        }`}
      >
        ▶
      </span>
    </>
  );
  if (href) {
    return (
      <a href={href} className={`${base} ${tones} ${className}`}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={`${base} ${tones} ${className}`}>
      {inner}
    </button>
  );
}

/** A frosted caption floating over a render. */
export function Chip({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-3 rounded-[12px] border border-white/20 bg-white/15 px-4 py-3 font-body text-[15px] leading-[1.3] text-on-dark backdrop-blur-[14px] ${className}`}
    >
      {children}
    </span>
  );
}
