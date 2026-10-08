// The reference's "News & Articles": three cards, each a photograph above a white caption plate. Dates are ISO
// strings in the content module and are formatted with an explicit UTC time zone, so the server and the client
// never disagree about which day it is.
import Image from "next/image";
import Link from "next/link";
import { RevealGroup } from "@/components/Reveal";
import { LOCALE, type RetailContent } from "../content";
import { Btn, Container, SectionHead } from "./ui";

const fmt = new Intl.DateTimeFormat(LOCALE, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const showDate = (iso: string) => fmt.format(new Date(`${iso}T00:00:00Z`));

export default function Journal({ j }: { j: RetailContent["journal"] }) {
  if (!j.items.length) return null;
  return (
    <section id="journal" aria-labelledby="journal-title" className="scroll-mt-32 bg-canvas py-12 sm:py-16">
      <Container>
        <SectionHead id="journal-title" title={j.title} lead={j.lead} />
        <RevealGroup as="ul" className="m-0 mt-10 grid list-none gap-5 p-0 lg:grid-cols-3" stagger={0.07}>
          {j.items.map((item) => (
            <article className="rst-card group relative flex h-full flex-col overflow-hidden rounded-xl border border-(--t-hairline) bg-canvas" key={item.title}>
              {/* Not a link: the title carries the only one, stretched over the card, so the post is
                  announced once and the photograph keeps its description. */}
              <div className="overflow-hidden">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>
              <div className="flex flex-1 flex-col px-6 py-5 text-center">
                <time dateTime={item.date} className="text-[12px] font-semibold uppercase tracking-[0.08em] text-(--t-muted)">{showDate(item.date)}</time>
                <h3 className="mt-2 font-display text-[17px] font-semibold leading-[1.35] text-ink text-balance">
                  <Link href={item.href} className="text-ink no-underline transition-colors duration-200 before:absolute before:inset-0 before:content-[''] group-hover:text-primary">{item.title}</Link>
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-(--t-muted)">{item.excerpt}</p>
              </div>
            </article>
          ))}
        </RevealGroup>
        <div className="mt-10 text-center">
          <Btn href={j.cta.href} tone="outline" size="lg">{j.cta.label}</Btn>
        </div>
      </Container>
    </section>
  );
}
