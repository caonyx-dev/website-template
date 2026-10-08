// 09 The reference's blog row: three cards, each a photograph over the dated meta line, the serif title and a
// dark "View more" pill. The whole card is the link and the pill is the affordance inside it.
import Image from "next/image";
import Link from "next/link";
import { CalendarBlankIcon, UserIcon } from "@phosphor-icons/react/dist/ssr";
import { RevealGroup } from "@/components/Reveal";
import { longDate, type LawContent } from "../content";
import { Container, SectionHead } from "./ui";

export default function Insights({ i }: { i: LawContent["insights"] }) {
  return (
    <section id="insights" className="scroll-mt-[112px] bg-soft py-20 lg:py-28" aria-labelledby="insights-title">
      <Container>
        <SectionHead id="insights-title" eyebrow={i.eyebrow} lead={i.titleLead} em={i.titleEm} text={i.text} />
        <RevealGroup className="mt-14 grid gap-7 md:grid-cols-3" stagger={0.09}>
          {i.items.map((it) => (
            <Link key={it.title} href={it.href} className="group flex h-full flex-col overflow-hidden rounded-lg bg-canvas no-underline">
              <span className="relative block overflow-hidden" style={{ aspectRatio: "3 / 2" }}>
                <Image src={it.image.src} alt={it.image.alt} fill placeholder="blur" sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </span>
              <span className="flex flex-1 flex-col p-7">
                <span className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[14px] text-mute">
                  <span className="inline-flex items-center gap-1.5"><CalendarBlankIcon size={15} weight="light" aria-hidden="true" className="text-(--t-accent-deep)" /><time dateTime={it.date}>{longDate(it.date)}</time></span>
                  <span className="inline-flex items-center gap-1.5"><UserIcon size={15} weight="light" aria-hidden="true" className="text-(--t-accent-deep)" />{it.author}</span>
                </span>
                <h3 className="mt-4 flex-1 font-display text-[23px] font-semibold leading-[1.3] text-ink">{it.title}</h3>
                <span aria-hidden="true" className="mt-6 inline-flex min-h-11 w-fit items-center rounded-full bg-dark px-6 text-[14px] font-semibold text-white transition-colors duration-200 group-hover:bg-primary group-focus-visible:bg-primary">View more</span>
              </span>
            </Link>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
