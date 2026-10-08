"use client";
import { motion, useReducedMotion, inView, type Variants } from "motion/react";
import { Children, Fragment, isValidElement, useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;
const FALLBACK_MS = 3500;

const subscribeNoop = () => () => {};
/** Reduced-motion flag that is false on the server and during hydration, so server and client markup match. */
export function useReducedMotionSafe() {
  const mounted = useSyncExternalStore(subscribeNoop, () => true, () => false);
  return useReducedMotion() === true && mounted;
}

/**
 * Reveal state that never leaves content hidden:
 * - server render and first paint: visible ("show")
 * - after mount, if the element is below the fold: snap to "hidden" (0ms), then
 * - "show" when it enters the viewport, or after FALLBACK_MS whatever happens.
 */
function useRevealState(ref: React.RefObject<HTMLElement | null>, enabled: boolean) {
  const [phase, setPhase] = useState<"show" | "hidden">("show");
  useEffect(() => {
    const el = ref.current;
    if (!enabled || !el) return;
    const inFold = el.getBoundingClientRect().top < window.innerHeight * 0.9;
    setPhase("hidden");
    // Already on screen: play the entrance after a beat. Below the fold: wait for it to enter.
    const soon = inFold ? setTimeout(() => setPhase("show"), 120) : null;
    const stop = inFold ? () => {} : inView(el, () => { setPhase("show"); }, { margin: "0px 0px -12% 0px" });
    const t = setTimeout(() => setPhase("show"), FALLBACK_MS);
    return () => { stop(); clearTimeout(t); if (soon) clearTimeout(soon); };
  }, [ref, enabled]);
  return phase;
}

/** Where an element comes from: a short rise, a slide from either side, a scale-up, or a clip wipe from the bottom (for photographs). */
export type From = "up" | "left" | "right" | "scale" | "clip";
const HIDDEN: Record<From, Record<string, number | string>> = {
  up: { opacity: 0, y: 28 },
  left: { opacity: 0, x: -48 },
  right: { opacity: 0, x: 48 },
  scale: { opacity: 0, scale: 0.9 },
  clip: { clipPath: "inset(100% 0 0 0)", scale: 1.08 },
};
const SHOWN: Record<From, Record<string, number | string>> = {
  up: { opacity: 1, y: 0 }, left: { opacity: 1, x: 0 }, right: { opacity: 1, x: 0 }, scale: { opacity: 1, scale: 1 }, clip: { clipPath: "inset(0% 0 0 0)", scale: 1 },
};
const itemVariants = (from: From, delay = 0): Variants => ({
  hidden: { ...HIDDEN[from], transition: { duration: 0 } },
  show: { ...SHOWN[from], transition: { duration: from === "clip" ? 1.1 : 0.8, ease: EASE, delay } },
});

/** Staggers its direct children into view once. Lists get <li> items: pass their content, not <li>. */
/** `role` is passed through so a `list-none` list can keep its list semantics — Safari drops them when
 *  `list-style` is removed, which silently costs every item count on the page. */
export function RevealGroup({ children, className = "", itemClassName = "", stagger = 0.09, as: Tag = "div", from = "up", role }: { children: ReactNode; className?: string; itemClassName?: string; stagger?: number; as?: "div" | "ul" | "ol"; from?: From; role?: string }) {
  const reduce = useReducedMotionSafe();
  const ref = useRef<HTMLElement>(null);
  const phase = useRevealState(ref, !reduce);
  const M = motion[Tag];
  const Item = Tag === "div" ? motion.div : motion.li;
  const ItemStatic = Tag === "div" ? "div" : "li";
  if (reduce) return <Tag role={role} className={className}>{Children.map(children, (c, i) => <ItemStatic key={i} className={`min-w-0 ${itemClassName}`}>{c}</ItemStatic>)}</Tag>;
  const v = itemVariants(from);
  return (
    <M ref={ref as React.Ref<never>} role={role} className={className} initial={false} animate={phase} variants={{ hidden: { transition: { duration: 0 } }, show: { transition: { staggerChildren: stagger } } }}>
      {Children.map(children, (c, i) => <Item key={i} variants={v} className={`min-w-0 ${itemClassName}`}>{c}</Item>)}
    </M>
  );
}

export function Reveal({ children, className = "", delay = 0, from = "up" }: { children: ReactNode; className?: string; delay?: number; from?: From }) {
  const reduce = useReducedMotionSafe();
  const ref = useRef<HTMLDivElement>(null);
  const phase = useRevealState(ref, !reduce);
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div ref={ref} className={className} initial={false} animate={phase} variants={itemVariants(from, delay)}>
      {children}
    </motion.div>
  );
}

/** Flattens strings and fragments into words; other elements (an <Accent>, a <br>) stay whole. */
function toParts(node: ReactNode, parts: ReactNode[]) {
  Children.forEach(node, (c) => {
    if (typeof c === "string") c.split(/(\s+)/).forEach((w) => { if (w.trim()) parts.push(w); });
    else if (isValidElement(c) && c.type === Fragment) toParts((c.props as { children?: ReactNode }).children, parts);
    else if (c) parts.push(c);
  });
}

/** Headline whose words rise through masks when it scrolls into view. Pass text, fragments or <Accent> elements. */
export function Words({ children }: { children: ReactNode }) {
  const reduce = useReducedMotionSafe();
  const ref = useRef<HTMLSpanElement>(null);
  const phase = useRevealState(ref, !reduce);
  const raw: ReactNode[] = []; toParts(children, raw);
  // Punctuation that follows an element (e.g. "." after <Accent>) stays attached to it instead of becoming its own word.
  const parts: ReactNode[] = [];
  raw.forEach((w) => {
    const glue = typeof w === "string" && /^[^\p{L}\p{N}[\]]+$/u.test(w) && parts.length > 0;
    if (glue) { const prev = parts.pop(); parts.push(<>{prev}{w}</>); } else parts.push(w);
  });
  if (reduce) return <>{parts.map((p, i) => <span key={i}>{p} </span>)}</>;
  return (
    <motion.span ref={ref} initial={false} animate={phase} variants={{ hidden: { transition: { duration: 0 } }, show: { transition: { staggerChildren: 0.04 } } }}>
      {parts.map((p, i) => (
        <Fragment key={i}>
          <span className="mask-word"><motion.span variants={{ hidden: { y: "110%", transition: { duration: 0 } }, show: { y: "0%", transition: { duration: 0.9, ease: EASE } } }}>{p}</motion.span></span>{" "}
        </Fragment>
      ))}
    </motion.span>
  );
}
