// The reference's services row: a centred head, then four columns separated by vertical hairlines rather
// than boxed into cards, each with a line icon, a two-line title and a "View details" link. This template's
// DESIGN.md adds the "from" price slot — and insists it ships as a labelled placeholder, which the note does.
import Link from "next/link";
import { ArrowRightIcon, SparkleIcon, HouseLineIcon, BuildingsIcon, BroomIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { CURRENCY, LOCALE, money, type SmallBusinessContent } from "../content";
import { Container, IconTile, Lead, Title } from "./ui";

const ICONS = { sparkle: SparkleIcon, house: HouseLineIcon, building: BuildingsIcon, broom: BroomIcon };

export default function Services({ s }: { s: SmallBusinessContent["services"] }) {
  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-24 bg-canvas py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[36ch] text-center">
            <Title id="services-title">{s.title}</Title>
            <Lead className="mx-auto mt-4 max-w-[48ch]">{s.lead}</Lead>
          </div>
        </Reveal>

        <RevealGroup
          as="ul"
          role="list"
          className="m-0 mt-12 grid list-none p-0 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.07}
          itemClassName="border-t border-(--t-hairline) sm:border-t-0 sm:border-l sm:first:border-l-0 sm:[&:nth-child(3)]:border-l-0 lg:[&:nth-child(3)]:border-l"
        >
          {s.items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <article key={item.title} className="group flex h-full flex-col px-0 py-8 sm:px-7">
                <IconTile><Icon size={26} weight="light" aria-hidden="true" /></IconTile>
                <h3 className="mt-6 font-display text-[24px] font-semibold leading-[1.1] tracking-[-0.015em] text-ink sm:text-[28px]">{item.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-[1.6] text-(--t-body)">{item.text}</p>
                <p className="mt-5 text-[15px] font-semibold text-ink">
                  {s.fromLabel}&nbsp;{money(item.from, LOCALE, CURRENCY)}<span className="font-normal text-(--t-muted)"> · placeholder</span>
                </p>
                <Link href={item.href} className="mt-4 inline-flex min-h-10 items-center gap-2 text-[15px] font-semibold text-primary underline-offset-4 hover:underline">
                  {s.detailsLabel}<span className="sr-only"> — {item.title}</span> <ArrowRightIcon size={15} weight="bold" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
                </Link>
              </article>
            );
          })}
        </RevealGroup>

        <p className="mx-auto mt-10 max-w-[86ch] text-center text-[13px] leading-[1.6] text-(--t-muted)">
          <span className="font-semibold text-ink">Placeholder</span>{" "}{s.priceNote}
        </p>
      </Container>
    </section>
  );
}
