"use client";
// 11 The drink list on the dark band's cream counterpart: its own tabs, then two columns where each row carries
// a name, a short note and two prices under the glass and bottle headings.
import { Reveal } from "@/components/Reveal";
import type { RestaurantContent } from "../content";
import { Container, SectionHead } from "./ui";
import { TabList, TabPanel, useTabParam } from "./Tabs";

export default function DrinkMenu({ m }: { m: RestaurantContent["drinks"] }) {
  const ids = m.panels.map((p) => p.id);
  const [tab, setTab] = useTabParam("drinks", ids[0] ?? "", ids);
  if (m.panels.length === 0) return null;
  return (
    <section id="drinks" className="scroll-mt-[124px] bg-canvas pb-20 lg:pb-28" aria-labelledby="drinks-title">
      <Container>
        <SectionHead id="drinks-title" eyebrow={m.eyebrow} title={m.title} lead={m.lead} />
        <Reveal delay={0.1}><TabList label="Drink lists" tabs={m.panels.map((p) => ({ id: p.id, label: p.label }))} value={tab} onChange={setTab} /></Reveal>
        {m.panels.map((p) => (
          <TabPanel key={p.id} id={p.id} active={p.id === tab}>
            <p className="mt-8 text-center text-[13px] uppercase tracking-[1.4px] text-mute">{p.note}</p>
            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
              {p.columns.map((col) => (
                <table key={col.heading} className="w-full border-collapse text-left">
                  <caption className="sr-only">{col.heading}</caption>
                  <thead>
                    <tr className="border-b border-hairline">
                      <th scope="col" className="pb-2 font-display text-[20px] font-semibold text-ink">{col.heading}</th>
                      <th scope="col" className="w-16 pb-2 text-right text-[11px] font-medium uppercase tracking-[1.2px] text-mute">{col.unitA}</th>
                      <th scope="col" className="w-16 pb-2 text-right text-[11px] font-medium uppercase tracking-[1.2px] text-mute">{col.unitB}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {col.rows.map((r, ri) => (
                      <tr key={ri} className="border-b border-(--t-hairline-soft) last:border-b-0">
                        <th scope="row" className="py-3 pr-4 font-normal">
                          <span className="block font-display text-[17px] font-medium italic text-ink">{r.name}</span>
                          <span className="block text-[13px] text-mute">{r.detail}</span>
                        </th>
                        <td className="py-3 text-right align-top text-[14px] tabular-nums text-ink">{r.a}</td>
                        <td className="py-3 text-right align-top text-[14px] tabular-nums text-ink">{r.b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}
            </div>
          </TabPanel>
        ))}
        <Reveal delay={0.2}><p className="mt-10 text-center text-[14px] leading-[1.7] text-mute">{m.note}</p></Reveal>
      </Container>
    </section>
  );
}
