// The reference's "travel tips": a serif heading and lead sitting left of centre, then cards whose white
// caption plate is inset over the lower part of the photograph, closed by a rule and a pill. Dates are ISO
// strings formatted with an explicit UTC zone, so the server and every reader agree on the day.
import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { LOCALE, type TravelContent } from "../content";
import { Btn, Container, Title } from "./ui";

const fmt = new Intl.DateTimeFormat(LOCALE, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const showDate = (iso: string) => fmt.format(new Date(`${iso}T00:00:00Z`));

export default function Journal({ j }: { j: TravelContent["journal"] }) {
  if (!j.items.length) return null;
  return (
    <section id="journal" aria-labelledby="journal-title" className="scroll-mt-28 bg-(--t-soft) pb-16 sm:pb-24">
      <Container>
        <Reveal>
          <div className="lg:pl-[38%]">
            <Title id="journal-title" className="max-w-[9ch]">{j.title}</Title>
            <p className="mt-5 max-w-[44ch] text-[16px] leading-[1.65] text-(--t-body)">{j.lead}</p>
          </div>
        </Reveal>

        <RevealGroup as="ul" className="m-0 mt-12 grid list-none gap-8 p-0 lg:grid-cols-3" stagger={0.08}>
          {j.items.map((item) => (
            <article key={item.title} className="group relative">
              <div className="overflow-hidden">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>
              {/* The caption plate is inset over the photograph's lower edge, as the reference sets it. */}
              <div className="relative mx-5 -mt-16 bg-canvas px-6 py-6">
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-(--t-muted)">
                  <time dateTime={item.date}>{showDate(item.date)}</time>
                  <span aria-hidden="true">|</span>
                  <span>{item.comments}</span>
                </p>
                <h3 className="mt-2.5 font-display text-[23px] uppercase leading-[1.2] text-balance">
                  <Link href={item.href} className="text-ink no-underline transition-colors duration-200 before:absolute before:inset-0 before:content-[''] group-hover:text-(--t-primary-deep)">{item.title}</Link>
                </h3>
              </div>
            </article>
          ))}
        </RevealGroup>

        <div className="mt-12 flex items-center gap-8">
          <span aria-hidden="true" className="h-px flex-1 bg-(--t-hairline)" />
          <Btn href={j.cta.href} tone="outline" size="lg">{j.cta.label}</Btn>
        </div>
      </Container>
    </section>
  );
}
