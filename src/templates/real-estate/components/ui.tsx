// Shared primitives for the real-estate template. Every control is a pill; every accent fill is lime
// with black text on it (templates/real-estate/DESIGN.md — lime is a surface colour, never a text colour).
import type { ReactNode } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Words } from "@/components/Reveal";

export function Wrap({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-10 ${className}`}>{children}</div>;
}

/** The uppercase label above a section heading: pill, hairline-lime border, trailing lime dot. */
export function Badge({ children, onDark = false, className = "" }: { children: ReactNode; onDark?: boolean; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full border px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.08em] ${
        onDark ? "border-white/25 text-on-dark" : "border-primary text-ink"
      } ${className}`}
    >
      {children}
      <span aria-hidden className="size-1.5 rounded-full bg-primary" />
    </span>
  );
}

/**
 * Display heading built from authored lines, so breaks happen on meaning rather than wherever the
 * column ends (DESIGN.md: "Headlines break on meaning, as authored lines"). Each line is its own
 * block; words inside rise through masks when the heading scrolls into view.
 */
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
  variant?: "lime" | "outline" | "dark";
  arrow?: boolean;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({ href, children, variant = "lime", arrow = false, className = "", type = "button", onClick }: BtnProps) {
  const base =
    "group/btn inline-flex items-center gap-3 rounded-full font-body text-[16px] font-semibold transition-[transform,background-color,box-shadow] duration-300 active:scale-[0.98] " +
    (arrow ? "py-2 pl-7 pr-2" : "px-8 py-[18px]");
  const tone =
    variant === "lime"
      ? "bg-primary text-on-primary hover:bg-[var(--t-primary-deep)]"
      : variant === "dark"
        ? "bg-ink text-on-dark hover:bg-[var(--t-dark-2)]"
        : "border border-ink/20 text-ink hover:border-ink";
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span
          aria-hidden
          className={`grid size-11 shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover/btn:rotate-45 ${
            variant === "lime" ? "bg-ink text-primary" : "bg-primary text-on-primary"
          }`}
        >
          <ArrowUpRightIcon size={18} weight="light" />
        </span>
      )}
    </>
  );
  if (href) {
    return (
      <a href={href} className={`${base} ${tone} ${className}`}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={`${base} ${tone} ${className}`}>
      {content}
    </button>
  );
}

/**
 * The circle that floats in a card's notched corner. It must be a SIBLING of the `.re-notch`
 * element, never a child — the notch mask would clip it. Decorative: the card itself is the link.
 */
export function ArrowDisc({
  className = "",
  size = 56,
  tone = "white",
}: {
  className?: string;
  size?: number;
  tone?: "white" | "lime";
}) {
  return (
    <span
      aria-hidden
      style={{ width: size, height: size }}
      className={`pointer-events-none z-10 grid shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-45 ${
        tone === "lime" ? "bg-primary text-on-primary" : "bg-canvas text-ink"
      } ${className}`}
    >
      <ArrowUpRightIcon size={Math.round(size * 0.36)} weight="light" />
    </span>
  );
}
