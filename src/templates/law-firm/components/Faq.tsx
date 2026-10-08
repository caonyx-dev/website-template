// 11 Hairline FAQ rows: native <details> with a brass plus that becomes a minus. Rows open independently so two
// answers can be compared, and it works with JavaScript switched off.
import { PlusIcon, MinusIcon } from "@phosphor-icons/react/dist/ssr";
import type { LawContent } from "../content";
import { Container, SectionHead } from "./ui";

export default function Faq({ f }: { f: LawContent["faq"] }) {
  return (
    <section id="faq" className="scroll-mt-[112px] bg-canvas py-20 lg:py-28" aria-labelledby="faq-title">
      <Container>
        <SectionHead id="faq-title" eyebrow={f.eyebrow} lead={f.titleLead} em={f.titleEm} text={f.text} />
        <div className="mx-auto mt-14 max-w-[760px]">
          {f.items.map((it, n) => (
            <details key={it.q} className="group border-b border-hairline [&[open]_.faq-plus]:hidden [&:not([open])_.faq-minus]:hidden" open={n === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left font-display text-[21px] font-semibold leading-[1.3] text-ink transition-colors hover:text-(--t-accent-deep) [&::-webkit-details-marker]:hidden">
                {it.q}
                <span aria-hidden="true" className="mt-1 shrink-0 text-(--t-accent-deep)">
                  <PlusIcon size={19} weight="light" className="faq-plus" /><MinusIcon size={19} weight="light" className="faq-minus" />
                </span>
              </summary>
              <p className="max-w-[64ch] pb-6 text-[16px] leading-[1.7] text-(--t-ink-secondary)">{it.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
