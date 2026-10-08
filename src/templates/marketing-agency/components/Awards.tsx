// The reference sets its recognition list as a ruled table beside a tall portrait. Four columns at desktop —
// year, award, awarding body, result — collapsing to a stacked definition row on phones so nothing is squeezed
// into a column two words wide. Every row is a bracketed placeholder and the note beneath says so.
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import type { MarketingContent } from "../content";
import { Container, Eyebrow, Label, Title } from "./ui";

export default function Awards({ a }: { a: MarketingContent["awards"] }) {
  return (
    <section aria-labelledby="awards-title" className="bg-(--t-soft) py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
          <Reveal from="scale">
            <Image src={a.image.src} alt={a.image.alt} placeholder="blur" sizes="(min-width: 1024px) 34vw, 100vw" className="h-auto w-full rounded-[24px] object-cover" />
          </Reveal>

          <div>
            <Reveal><Eyebrow>{a.eyebrow}</Eyebrow></Reveal>
            <Reveal delay={0.08}><Title id="awards-title" className="mt-6 max-w-[16ch]">{a.title}</Title></Reveal>

            {/* A real table: four columns of tabular data read as a list leave a screen reader with four
                unlabelled strings. The header row is visually hidden because the columns are self-evident on
                screen, and the cells stack to one block per row below `sm`. */}
            <Reveal delay={0.14}>
              <table className="mt-10 block w-full text-left sm:table sm:border-collapse">
                <caption className="sr-only">{a.title}</caption>
                <thead className="sr-only">
                  <tr>
                    <th scope="col">Year</th>
                    <th scope="col">Award</th>
                    <th scope="col">Awarding body</th>
                    <th scope="col">Result</th>
                  </tr>
                </thead>
                <tbody className="block sm:table-row-group">
                  {a.rows.map((r, i) => (
                    <tr key={`${r.year}-${r.title}-${i}`} className="block sm:table-row">
                      <td className="block border-t border-(--t-hairline) pt-5 align-baseline sm:table-cell sm:w-[88px] sm:py-5">
                        <Label className="text-(--t-mute) tabular-nums">{r.year}</Label>
                      </td>
                      <td className="block pt-1.5 align-baseline font-display text-[19px] font-bold tracking-[-0.02em] text-ink sm:table-cell sm:border-t sm:border-(--t-hairline) sm:py-5 sm:pr-6">{r.title}</td>
                      <td className="block pt-1.5 align-baseline text-[15px] text-(--t-body) sm:table-cell sm:border-t sm:border-(--t-hairline) sm:py-5 sm:pr-6">{r.org}</td>
                      <td className="block pb-5 pt-1.5 align-baseline text-[13px] font-semibold uppercase tracking-[0.06em] text-primary sm:table-cell sm:w-[110px] sm:border-t sm:border-(--t-hairline) sm:py-5 sm:text-right">{r.place}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div aria-hidden="true" className="border-t border-(--t-hairline)" />
            </Reveal>

            <p className="mt-6 max-w-[70ch] text-[13px] leading-[1.6] text-(--t-mute)">
              <Label className="mr-2 text-ink">Placeholder</Label>{a.note}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
