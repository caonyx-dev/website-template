// Latest clinic news on the grey band: two image cards and a ruled list of three more with teal arrows.
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup } from "@/components/Reveal";
import type { DentalContent } from "../content";
import { Container, SectionHead } from "./ui";

export default function News({ n }: { n: DentalContent["news"] }) {
  return (
    <section id="news" className="scroll-mt-20 bg-soft py-24 lg:py-32" aria-labelledby="news-title">
      <Container>
        <SectionHead id="news-title" title={n.title} lead={n.lead} />
        <div className="grid gap-7 lg:grid-cols-3">
          {n.cards.map((c, i) => (
            <Reveal key={c.href} from="clip" delay={i * 0.12}>
              <article className="h-full bg-white shadow-soft">
                <Link href={c.href} className="block no-underline">
                  <div className="relative aspect-[4/3] overflow-hidden"><Image src={c.image.src} alt={c.image.alt} fill placeholder="blur" sizes="(min-width: 1024px) 370px, 100vw" className="object-cover transition-transform duration-700 hover:scale-105" /></div>
                  <div className="p-7"><h3 className="font-display text-[19px] font-bold leading-[1.35] text-ink">{c.title}</h3><p className="mt-3 text-[14px] text-body">{c.date}</p></div>
                </Link>
              </article>
            </Reveal>
          ))}
          <RevealGroup as="ul" className="grid content-start divide-y divide-hairline" itemClassName="py-6 first:pt-0 last:pb-0" from="right" stagger={0.12}>
            {n.list.map((l) => (
              <Link key={l.href} href={l.href} className="grid grid-cols-[auto_1fr] gap-4 no-underline">
                <ArrowRightIcon size={22} weight="bold" className="mt-0.5 text-primary" aria-hidden="true" />
                <span><span className="block font-display text-[18px] font-bold leading-[1.35] text-ink">{l.title}</span><span className="mt-2 block text-[14px] text-body">{l.date}</span></span>
              </Link>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
