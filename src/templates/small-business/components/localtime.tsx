// "Open now" and today's row depend on a clock, and getting either wrong is worse than not showing it:
// a customer who reads "Open now" and rings out of hours does not ring twice. So this module refuses to
// answer unless it can. It shows nothing while the hours are still the shipped placeholders, nothing when
// a row cannot be parsed, and it reads the clock in the *business's* time zone rather than the reader's.
"use client";
import { createContext, useContext, useMemo, useSyncExternalStore, type ReactNode } from "react";

export type HourRow = { day: string; hours: string };

type LocalState = { todayIndex: number; openNow: boolean | null };

const Ctx = createContext<LocalState>({ todayIndex: -1, openNow: null });

export const useLocalTime = () => useContext(Ctx);

/** The chip would otherwise go stale on a page left open across closing time. */
const subscribe = (onChange: () => void) => {
  const t = setInterval(onChange, 60_000);
  return () => clearInterval(t);
};
/** Whole minutes, so the snapshot is stable between ticks and React does not re-render on every read. */
const clientSnapshot = () => Math.floor(Date.now() / 60_000);
const serverSnapshot = () => null;

/** "08:00 – 18:00" → [480, 1080]. Returns null for "Closed" and for anything it cannot read. */
function parseRow(hours: string): [number, number] | null {
  const m = hours.match(/(\d{1,2}):(\d{2})\s*[–—-]\s*(\d{1,2}):(\d{2})/);
  if (!m) return null;
  const open = Number(m[1]) * 60 + Number(m[2]);
  const close = Number(m[3]) * 60 + Number(m[4]);
  if ([open, close].some((n) => Number.isNaN(n) || n < 0 || n > 24 * 60)) return null;
  return [open, close];
}

/** The reader's clock, read in the business's zone. An invalid zone falls back to the reader's own. */
function inZone(ms: number, timeZone: string) {
  try {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone, weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false,
    }).formatToParts(new Date(ms));
    const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const day = days.indexOf(get("weekday"));
    const minutes = Number(get("hour")) * 60 + Number(get("minute"));
    if (day === -1 || Number.isNaN(minutes)) return null;
    return { day, minutes };
  } catch {
    return null;
  }
}

export function LocalTimeProvider({ rows, timeZone, children }: { rows: HourRow[]; timeZone: string; children: ReactNode }) {
  const minute = useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot);

  const value = useMemo<LocalState>(() => {
    if (minute === null) return { todayIndex: -1, openNow: null };
    const now = inZone(minute * 60_000, timeZone);
    if (!now) return { todayIndex: -1, openNow: null };

    // The hours ship as bracketed placeholders. Until they are replaced, the chip would be asserting
    // someone else's opening times, so there is no chip at all.
    const unedited = rows.some((r) => /[[\]]/.test(r.hours));
    if (unedited) return { todayIndex: now.day, openNow: null };

    const today = rows[now.day];
    if (!today) return { todayIndex: now.day, openNow: null };
    if (/closed/i.test(today.hours)) return { todayIndex: now.day, openNow: false };

    const span = parseRow(today.hours);
    // A row this cannot read must not be reported as "Closed" — it is simply unknown.
    if (!span) return { todayIndex: now.day, openNow: null };

    const [open, close] = span;
    // A span that closes after midnight ("22:00 – 02:00") wraps rather than being empty.
    const isOpen = close > open
      ? now.minutes >= open && now.minutes < close
      : now.minutes >= open || now.minutes < close;
    return { todayIndex: now.day, openNow: isOpen };
  }, [minute, rows, timeZone]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
