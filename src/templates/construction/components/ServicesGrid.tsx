// service-card grid: 3-up white cards with 2px ink borders and the hard offset, line icon, uppercase
// title, description and a "Request a quote" text link; the last tile is the hairline service-icon-card.
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { RevealGroup } from "@/components/Reveal";
import type { ConstructionContent } from "../content";
import { Container, Headline, TextLink } from "./ui";

export default function ServicesGrid({ s }: { s: ConstructionContent["services"] }) {
  return (
    <section id={s.id} className="py-20 lg:py-24" aria-labelledby={`${s.id}-title`}>
      <Container>
        <Headline id={`${s.id}-title`} title={s.title} lead={s.lead} link={<TextLink href={s.all.href}>{s.all.label} <ArrowRightIcon size={16} weight="light" aria-hidden="true" /></TextLink>} />
        <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {s.items.map((it) => (
            <article key={it.title} className="grid h-full content-start gap-4 rounded-md border-2 border-ink bg-surface p-8 shadow-[3px_3px_0_var(--t-ink)]">
              <span className="text-ink">{it.icon}</span>
              <h3 className="font-display text-[22px] font-semibold leading-tight">{it.title}</h3>
              <p className="text-[15px] leading-[1.55] text-body">{it.text}</p>
              <TextLink href={it.href} className="mt-auto pt-2">Request a quote <ArrowRightIcon size={16} weight="light" aria-hidden="true" /></TextLink>
            </article>
          ))}
          <article className="grid h-full content-start gap-3 rounded-md border border-hairline bg-canvas p-6">
            <h3 className="font-display text-[20px] font-semibold leading-tight">{s.other.title}</h3>
            <p className="text-[15px] leading-[1.55] text-body">{s.other.text}</p>
            <TextLink href={s.other.href} className="mt-auto pt-2">Ask us <ArrowRightIcon size={16} weight="light" aria-hidden="true" /></TextLink>
          </article>
        </RevealGroup>
      </Container>
    </section>
  );
}
