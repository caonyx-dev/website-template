// The reference sets an enormous ghost word behind this band — the section's own name, drawn at a tenth of the
// ink's opacity and clipped by the band. It is decoration, so it is hidden from assistive tech and the real
// heading carries the label. The quotations themselves are written placeholders, flagged as such beneath.
import { QuotesIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup } from "@/components/Reveal";
import type { MarketingContent } from "../content";
import { Container, Eyebrow, Label } from "./ui";

export default function Testimonial({ t }: { t: MarketingContent["testimonial"] }) {
  return (
    <section aria-labelledby="testimonial-title" className="relative isolate overflow-hidden bg-(--t-soft) py-20 sm:py-28">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-8 -z-10 select-none text-center font-display text-[clamp(72px,20vw,280px)] font-extrabold leading-none tracking-[-0.05em] text-ink/[0.06]"
      >
        {t.ghost}
      </span>

      <Container>
        <h2 id="testimonial-title" className="text-center"><Eyebrow>{t.eyebrow}</Eyebrow></h2>

        <RevealGroup as="ul" className="m-0 mt-12 grid list-none gap-5 p-0 lg:mt-20 lg:grid-cols-2 lg:gap-6" stagger={0.1}>
          {t.items.map((item, i) => (
            <figure key={`${item.name}-${i}`} className="m-0 flex h-full flex-col rounded-[24px] bg-canvas p-7 sm:p-8">
              <QuotesIcon size={30} weight="fill" className="text-(--t-accent)" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 text-[17px] leading-[1.65] text-(--t-body) sm:text-[18px]">{item.quote}</blockquote>
              <figcaption className="mt-7 border-t border-(--t-hairline) pt-5">
                <p className="font-display text-[18px] font-bold tracking-[-0.02em] text-ink">{item.name}</p>
                <p className="mt-0.5 font-(family-name:--t-font-mono) text-[12px] uppercase tracking-[0.08em] text-(--t-mute)">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </RevealGroup>

        <Reveal>
          <p className="mx-auto mt-8 max-w-[76ch] text-center text-[13px] leading-[1.6] text-(--t-mute)">
            <Label className="mr-2 text-ink">Placeholder</Label>{t.note}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
