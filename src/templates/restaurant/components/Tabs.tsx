"use client";
// The text tab strip used by both menus: buttons under a hairline, the selected one marked by an olive rule and
// a heavier weight so the state is never carried by colour alone. Arrow keys, Home and End move between tabs and
// select as they go, which is what a short, cheap tab list wants. Every panel stays in the DOM and is toggled
// with `hidden`, so each tab's `aria-controls` always resolves and the global `.menu-in` rise replays on show.
import { useRef, useState, useSyncExternalStore, type ReactNode } from "react";

/** False on the server and through hydration, true afterwards, so server and client markup always agree. */
const subscribeNoop = () => () => {};
const useMounted = () => useSyncExternalStore(subscribeNoop, () => true, () => false);

/**
 * Which tab is open, mirrored into a query parameter so a menu section can be linked and shared.
 * The first render always uses `fallback` so the server and client markup match; the URL is read after mount.
 */
export function useTabParam(key: string, fallback: string, valid: string[]) {
  const mounted = useMounted();
  const [picked, setPicked] = useState<string | null>(null);
  // Read after hydration only: the first client render must match the server's, which knows no URL.
  const fromUrl = mounted ? new URLSearchParams(window.location.search).get(key) : null;
  const tab = picked ?? (fromUrl && valid.includes(fromUrl) ? fromUrl : fallback);
  function choose(next: string) {
    setPicked(next);
    const url = new URL(window.location.href);
    if (next === fallback) url.searchParams.delete(key); else url.searchParams.set(key, next);
    // Replace rather than push: the section is linkable without burying the page under history entries.
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  }
  return [tab, choose] as const;
}

export function TabList({ tabs, value, onChange, label }: { tabs: { id: string; label: string }[]; value: string; onChange: (id: string) => void; label: string }) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const i = tabs.findIndex((t) => t.id === value);
  function key(e: React.KeyboardEvent) {
    const map: Record<string, number> = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 };
    const next = map[e.key];
    if (next === undefined) return;
    e.preventDefault();
    const n = (next + tabs.length) % tabs.length;
    onChange(tabs[n].id); refs.current[n]?.focus();
  }
  return (
    <div role="tablist" aria-label={label} onKeyDown={key} className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 border-b border-hairline pb-4">
      {tabs.map((t, n) => {
        const on = t.id === value;
        return (
          <button key={t.id} ref={(el) => { refs.current[n] = el; }} type="button" role="tab" id={`${t.id}-tab`} aria-selected={on} aria-controls={`${t.id}-panel`} tabIndex={on ? 0 : -1} onClick={() => onChange(t.id)}
            className={`relative -mb-4 pb-4 font-display text-[20px] transition-colors duration-200 sm:text-[24px] ${on ? "font-semibold text-ink" : "text-mute hover:text-ink active:text-ink"}`}>
            {t.label}
            <span aria-hidden="true" className={`absolute inset-x-0 bottom-0 h-0.5 transition-opacity duration-200 ${on ? "bg-primary opacity-100" : "opacity-0"}`} />
          </button>
        );
      })}
    </div>
  );
}

export function TabPanel({ id, active, children }: { id: string; active: boolean; children: ReactNode }) {
  return <div role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab`} hidden={!active} className="menu-in">{children}</div>;
}
