// Upcoming filing dates: the hairline table (mono dates, status chips) that becomes a stacked list on phones,
// beside the green-black "next three deadlines" box with a lime link.
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import type { FinanceContent } from "../content";
import { Chip, Container, Num, SectionHead } from "./ui";

export default function Deadlines({ d }: { d: FinanceContent["deadlines"] }) {
  const cell = "px-4 py-4 text-left align-top text-[15px] leading-[1.5] first:pl-6 last:pr-6";
  return (
    <section id="resources" className="scroll-mt-20 py-20 lg:py-28" aria-labelledby="resources-title">
      <Container>
        <SectionHead id="resources-title" eyebrow={d.eyebrow} title={d.title} lead={d.lead} />
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <div className="overflow-hidden border border-hairline bg-white">
              <table role="table" className="w-full border-collapse max-md:block max-md:[&_tbody]:grid max-md:[&_thead]:sr-only max-md:[&_tr]:grid max-md:[&_tr]:grid-cols-[auto_1fr] max-md:[&_tr]:gap-x-4 max-md:[&_tr]:gap-y-1 max-md:[&_tr]:p-5 max-md:[&_td]:col-start-2 max-md:[&_td]:block max-md:[&_td]:p-0 max-md:[&_td:first-child]:col-start-1 max-md:[&_td:first-child]:row-span-3 max-md:[&_tbody]:divide-y max-md:[&_tbody]:divide-hairline">
                <thead role="rowgroup"><tr role="row" className="border-b border-hairline bg-soft">{d.columns.map((c) => <th key={c} role="columnheader" scope="col" className={`${cell} font-display text-[12px] font-bold uppercase tracking-[.12em] text-ink`}>{c}</th>)}</tr></thead>
                <tbody role="rowgroup" className="md:divide-y md:divide-hairline">
                  {d.rows.map((row, i) => (
                    <tr key={i} role="row">
                      <td role="cell" className={cell}><Num className="text-[14px] text-ink">{row.date}</Num></td>
                      <td role="cell" className={`${cell} font-display font-bold text-ink`}>{row.obligation}</td>
                      <td role="cell" className={`${cell} text-body`}>{row.applies}</td>
                      <td role="cell" className={cell}><Chip tone={row.status}>{row.statusLabel}</Chip></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[12px] leading-[1.5] text-mute">{d.note}</p>
          </Reveal>
          <Reveal from="right" delay={0.1}>
            <div className="bg-dark p-9 text-white">
              <h3 className="font-display text-[24px] font-bold text-pretty">{d.next.title}</h3>
              <ul className="mt-6 grid divide-y divide-white/10">{d.next.items.map((it, i) => <li key={i} className="flex items-baseline gap-4 py-3.5 text-[16px]"><Num className="w-[7ch] shrink-0 text-[14px] text-accent">{it.date}</Num><span>{it.label}</span></li>)}</ul>
              <Link href={d.next.link.href} className="mt-6 inline-flex items-center gap-2 font-display text-[15px] font-bold text-accent no-underline hover:underline">{d.next.link.label}<ArrowRightIcon size={16} weight="bold" aria-hidden="true" /></Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
