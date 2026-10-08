// The reference's dark services band: full-width rows, each opened by a "Service : 01" label, carrying the title,
// a short line, a plus-marked list of what is included, and a photograph pushed to the right of the row. A hairline
// separates one row from the next; the image lifts a little on hover.
import Image from "next/image";
import Link from "next/link";
import { PlusIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup } from "@/components/Reveal";
import type { MarketingContent } from "../content";
import { Container, Eyebrow, Label, Pill, Title } from "./ui";

export default function Services({ s }: { s: MarketingContent["services"] }) {
  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-28 bg-ink py-20 text-(--t-on-dark) nim-on-dark sm:py-28">
      <Container>
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.45fr)_minmax(0,1fr)_auto] xl:items-start xl:gap-12">
          <Reveal><Eyebrow onDark className="xl:pt-2">{s.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.08}>
            <div>
              <Title id="services-title" onDark className="max-w-[16ch]">{s.title}</Title>
              <p className="mt-5 max-w-[48ch] text-[17px] leading-[1.6] text-(--t-on-dark)/75">{s.lead}</p>
            </div>
          </Reveal>
          <Reveal delay={0.14}><div className="xl:justify-self-end xl:pt-2"><Pill href={s.cta.href} tone="on-dark">{s.cta.label}</Pill></div></Reveal>
        </div>

        <RevealGroup as="ul" className="m-0 mt-14 list-none p-0 sm:mt-18" itemClassName="border-t border-white/15 last:border-b last:border-white/15">
          {s.items.map((item) => (
            <article key={item.n} className="group grid gap-7 py-9 lg:grid-cols-[minmax(0,140px)_minmax(0,1fr)_minmax(0,300px)] lg:items-center lg:gap-10 lg:py-11">
              <Label className="text-(--t-on-dark)/60">Service : {item.n}</Label>

              <div>
                <h3 className="font-display text-[28px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[36px]">
                  <Link href={item.href} className="text-(--t-on-dark) no-underline transition-colors duration-200 group-hover:text-(--t-accent)">
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-3 max-w-[52ch] text-[16px] leading-[1.6] text-(--t-on-dark)/75">{item.text}</p>
                <ul className="m-0 mt-5 grid list-none gap-x-8 gap-y-2.5 p-0 sm:grid-cols-2">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-[15px] leading-[1.5] text-(--t-on-dark)/85">
                      <PlusIcon size={14} weight="bold" className="mt-1 shrink-0 text-(--t-accent)" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              <Image
                src={item.image.src}
                alt={item.image.alt}
                placeholder="blur"
                sizes="(min-width: 1024px) 300px, 100vw"
                className="h-auto w-full rounded-[20px] object-cover transition-transform duration-500 group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
              />
            </article>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
