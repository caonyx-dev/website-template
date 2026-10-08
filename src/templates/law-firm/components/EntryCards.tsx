// 03 The three cards that overlap the hero's lower edge, middle one dark: a brass icon tile, a light kicker, the
// large serif title and a line of copy. Each whole card is the link.
import Link from "next/link";
import { CalendarBlankIcon, PhoneCallIcon, ScalesIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { RevealGroup } from "@/components/Reveal";
import type { CardIcon, LawContent } from "../content";
import { Container } from "./ui";

const ICONS: Record<CardIcon, typeof CalendarBlankIcon> = { calendar: CalendarBlankIcon, phone: PhoneCallIcon, scales: ScalesIcon };

export default function EntryCards({ cards }: { cards: LawContent["entryCards"] }) {
  return (
    <section className="relative z-10 bg-canvas" aria-labelledby="entry-title">
      <h2 id="entry-title" className="sr-only">Where to start</h2>
      <Container>
        <RevealGroup className="-mt-16 grid gap-0 shadow-lift md:grid-cols-3 lg:-mt-24" stagger={0.09}>
          {cards.map((c) => {
            const Icon = ICONS[c.icon];
            return (
              <Link key={c.title} href={c.href} className={`group flex h-full flex-col p-8 no-underline lg:p-10 ${c.featured ? "law-on-dark bg-dark" : "bg-canvas"}`}>
                <span aria-hidden="true" className={`inline-flex size-12 items-center justify-center rounded-sm ${c.featured ? "bg-accent text-(--t-dark)" : "bg-(--t-accent-soft) text-(--t-accent-deep)"}`}><Icon size={24} weight="light" /></span>
                <span className={`mt-6 block text-[16px] ${c.featured ? "text-(--t-on-dark-muted)" : "text-mute"}`}>{c.kicker}</span>
                <h3 className={`mt-1 font-display text-[28px] font-semibold leading-[1.2] ${c.featured ? "text-white" : "text-ink"}`}>{c.title}</h3>
                <span className={`mt-4 flex-1 text-[15px] leading-[1.65] ${c.featured ? "text-(--t-on-dark-muted)" : "text-(--t-ink-secondary)"}`}>{c.text}</span>
                <span aria-hidden="true" className={`mt-6 inline-flex size-10 items-center justify-center rounded-full border transition-colors ${c.featured ? "border-white/30 text-accent group-hover:border-accent" : "border-hairline-strong text-(--t-accent-deep) group-hover:border-accent"}`}>
                  <ArrowRightIcon size={17} weight="light" className="transition-transform duration-300 group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
                </span>
              </Link>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
