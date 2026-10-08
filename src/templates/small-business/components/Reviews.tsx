// The reference's testimonial row, alternating a tinted fill across three cards. This template's DESIGN.md
// requires the review card to ship as a labelled placeholder and forbids any star rating until a real feed
// is connected, so there are no stars here and the note says exactly what has to happen next.
import { QuotesIcon } from "@phosphor-icons/react/dist/ssr";
import { RevealGroup } from "@/components/Reveal";
import { Reveal } from "@/components/Reveal";
import type { SmallBusinessContent } from "../content";
import { Badge, Container, Lead, Title } from "./ui";

export default function Reviews({ r }: { r: SmallBusinessContent["reviews"] }) {
  if (!r.items.length) return null;
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="scroll-mt-24 bg-canvas pb-16 sm:pb-20">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[32ch] text-center">
            <Title id="reviews-title">{r.title}</Title>
            <Lead className="mx-auto mt-4">{r.lead}</Lead>
          </div>
        </Reveal>

        <RevealGroup as="ul" role="list" className="m-0 mt-12 grid list-none gap-5 p-0 lg:grid-cols-3" stagger={0.08}>
          {r.items.map((item, i) => (
            <figure key={i} className={`m-0 flex h-full flex-col rounded-2xl p-7 ${item.tone === "peach" ? "bg-(--t-badge-peach)" : "bg-(--t-soft)"}`}>
              <QuotesIcon size={30} weight="fill" aria-hidden="true" className="text-primary" />
              <blockquote className="mt-5 flex-1 text-[15px] leading-[1.65] text-(--t-body)">{item.text}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                {/* The DESIGN.md's `avatar-circle` in its initials form — a placeholder review has no photograph. */}
                <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-canvas text-[14px] font-bold text-primary">?</span>
                <span>
                  <span className="block text-[15px] font-semibold text-ink">{item.name}</span>
                  <span className="block text-[13px] text-(--t-muted)">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </RevealGroup>

        <p className="mx-auto mt-10 max-w-[86ch] text-center text-[13px] leading-[1.6] text-(--t-muted)">
          <span className="font-semibold text-ink">Placeholder</span>{" "}{r.note}
        </p>
        <p className="mt-4 text-center"><Badge tone="sky">No star rating shown until a real review feed is connected</Badge></p>
      </Container>
    </section>
  );
}
