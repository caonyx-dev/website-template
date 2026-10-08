// Guides and articles like the reference blog block: centred header on the grey band, three flat white cards
// (category · date, title, one line, arrow) rising in turn, then the lime "View more guides" button.
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup } from "@/components/Reveal";
import type { FinanceContent } from "../content";
import { Btn, Container, Num, SectionHead } from "./ui";

export default function Guides({ g }: { g: FinanceContent["guides"] }) {
  return (
    <section className="bg-soft py-20 lg:py-28" aria-labelledby="guides-title">
      <Container>
        <SectionHead id="guides-title" eyebrow={g.eyebrow} title={g.title} center />
        <RevealGroup as="ul" className="grid gap-7 md:grid-cols-3" stagger={0.1}>
          {g.items.map((it) => (
            <article key={it.href} className="h-full bg-white p-10 lg:p-14">
              <Link href={it.href} className="group grid h-full content-start gap-4 no-underline">
                <p className="flex items-center gap-3 text-[13px]"><span className="font-display font-bold uppercase tracking-[.12em] text-ink">{it.category}</span><span className="text-mute" aria-hidden="true">•</span><Num className="text-mute">{it.date}</Num></p>
                <h3 className="font-display text-[26px] font-bold leading-[1.2] text-ink text-pretty transition-colors group-hover:text-primary">{it.title}</h3>
                <p className="text-[17px] leading-[1.6] text-body">{it.text}</p>
                <ArrowRightIcon size={22} weight="bold" className="mt-2 text-ink transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </RevealGroup>
        <Reveal className="mt-14 text-center"><Btn href={g.cta.href} tone="lime">{g.cta.label}</Btn></Reveal>
      </Container>
    </section>
  );
}
