// The reference's news row: three cards, photograph above a short title. Dates are ISO strings formatted
// with an explicit UTC zone, so the server and every reader agree on the day. One link per card.
import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { LOCALE, type SmallBusinessContent } from "../content";
import { Container, Lead, TextLink, Title } from "./ui";

const fmt = new Intl.DateTimeFormat(LOCALE, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const showDate = (iso: string) => fmt.format(new Date(`${iso}T00:00:00Z`));

export default function News({ n }: { n: SmallBusinessContent["news"] }) {
  if (!n.items.length) return null;
  return (
    <section id="news" aria-labelledby="news-title" className="scroll-mt-24 bg-canvas pb-16 sm:pb-20">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[30ch] text-center">
            <Title id="news-title">{n.title}</Title>
            <Lead className="mx-auto mt-4 max-w-[46ch]">{n.lead}</Lead>
          </div>
        </Reveal>

        <RevealGroup as="ul" role="list" className="m-0 mt-12 grid list-none gap-6 p-0 lg:grid-cols-3" stagger={0.08}>
          {n.items.map((item) => (
            <article key={item.title} className="sb-lift group relative h-full overflow-hidden rounded-2xl bg-canvas">
              {/* Not a link: the title carries the only one, stretched over the card by its `::before`. */}
              <Image
                src={item.image.src}
                alt={item.image.alt}
                placeholder="blur"
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="aspect-[3/2] w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <div className="px-1 pb-1 pt-5">
                <time dateTime={item.date} className="text-[13px] font-semibold text-(--t-muted)">{showDate(item.date)}</time>
                <h3 className="mt-2 font-display text-[19px] font-semibold leading-[1.25] tracking-[-0.01em] text-balance sm:text-[21px]">
                  <Link href={item.href} className="text-ink no-underline transition-colors duration-200 before:absolute before:inset-0 before:content-[''] group-hover:text-primary">{item.title}</Link>
                </h3>
              </div>
            </article>
          ))}
        </RevealGroup>

        <div className="mt-10 text-center"><TextLink href={n.cta.href}>{n.cta.label}<span className="sr-only"> from the van</span> →</TextLink></div>
      </Container>
    </section>
  );
}
