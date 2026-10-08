"use client";
// The weekly schedule (the DESIGN.md schedule-table-card): volt pill-tabs for the days and a hairline card of
// rows with the time in tabular figures, class name, intensity chip, coach, spots badge and the Book button.
// Arrow, Home and End keys move between days and carry focus; the chosen day is mirrored into `?day=` so a
// schedule link can be shared.
import { useCallback, useState, useSyncExternalStore } from "react";
import type { GymContent } from "../content";
import { Badge, Btn, Chip, Container, Num, SectionHead } from "./ui";

const subscribePop = (cb: () => void) => { window.addEventListener("popstate", cb); return () => window.removeEventListener("popstate", cb); };

export default function Schedule({ s }: { s: GymContent["schedule"] }) {
  const urlDay = useSyncExternalStore(subscribePop, () => new URLSearchParams(window.location.search).get("day"), () => null);
  const [picked, setPicked] = useState<number | null>(null);
  const fromUrl = urlDay ? s.days.findIndex((d) => d.toLowerCase() === urlDay.toLowerCase()) : -1;
  const day = picked ?? (fromUrl >= 0 ? fromUrl : 0);
  const go = useCallback((next: number) => {
    const n = (next + s.days.length) % s.days.length;
    setPicked(n);
    const u = new URL(window.location.href); u.searchParams.set("day", s.days[n].toLowerCase()); window.history.replaceState(null, "", u);
    document.getElementById(`day-${n}`)?.focus();
  }, [s.days]);
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(day + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(day - 1); }
    if (e.key === "Home") { e.preventDefault(); go(0); }
    if (e.key === "End") { e.preventDefault(); go(s.days.length - 1); }
  };
  const rows = s.rows[s.days[day]] ?? [];
  return (
    <section id="schedule" className="scroll-mt-20 border-y border-hairline bg-surface py-24 lg:py-32" aria-labelledby="schedule-title">
      <Container>
        <SectionHead n={s.n} label={s.label} lines={s.title} id="schedule-title" />
        <div role="tablist" aria-label="Day" onKeyDown={onKey} className="mb-6 flex flex-wrap justify-center gap-2">
          {s.days.map((d, i) => <button key={d} type="button" role="tab" id={`day-${i}`} aria-selected={i === day} aria-controls="schedule-panel" tabIndex={i === day ? 0 : -1} onClick={() => go(i)} className={`h-10 rounded-full px-4 text-[14px] font-medium transition-colors ${i === day ? "bg-primary text-on-primary" : "text-body hover:text-ink"}`}>{d}</button>)}
        </div>
        <div id="schedule-panel" role="tabpanel" aria-labelledby={`day-${day}`} className="overflow-hidden rounded-lg border border-hairline bg-canvas">
          <div className="hidden grid-cols-[88px_1.4fr_110px_1fr_140px_auto] gap-4 border-b border-hairline-strong px-4 py-3 text-[14px] font-medium text-body md:grid"><span>Time</span><span>Class</span><span>Intensity</span><span>Coach</span><span>Spots</span><span className="sr-only">Book</span></div>
          <ul className="divide-y divide-hairline">
            {rows.map((r) => {
              const spots = r.urgent ? <Badge tone="urgent">{r.spots}</Badge> : <span className="text-[14px] text-body">{r.spots}</span>;
              return (
                <li key={r.time + r.name} className="grid grid-cols-[72px_1fr_auto] items-center gap-x-4 gap-y-2 px-4 py-3 transition-colors hover:bg-(--t-surface-card) md:grid-cols-[88px_1.4fr_110px_1fr_140px_auto]">
                  <Num className="text-[16px] font-medium text-ink">{r.time}</Num>
                  <span className="text-[16px] text-ink">{r.name}</span>
                  <span className="order-last col-span-3 flex flex-wrap items-center gap-x-4 gap-y-1 md:order-none md:col-span-1"><Chip intensity={r.intensity} category={r.category} /><span className="text-[14px] text-body md:hidden">{r.trainer}</span><span className="md:hidden">{spots}</span></span>
                  <span className="hidden text-[15px] text-body md:block">{r.trainer}</span>
                  <span className="hidden md:block">{spots}</span>
                  <Btn href="book/" tone="secondary" arrow={false} className="h-11 px-4 text-[13px] md:h-9">{s.book}<span className="sr-only"> {r.name} at {r.time}</span></Btn>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="mt-4 text-[13px] text-mute">{s.note}</p>
      </Container>
    </section>
  );
}
