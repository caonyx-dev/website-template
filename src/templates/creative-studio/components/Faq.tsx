// 08 FAQ: header, then full-width rows with a round plus button; native <details> so it works without JS.
import { PlusIcon } from "@phosphor-icons/react/dist/ssr";
import type { StudioContent } from "../content";
import { RevealGroup } from "@/components/Reveal";
import { Container, SectionHead } from "./ui";

export default function Faq({ f }: { f: StudioContent["faq"] }) {
  return (
    <section className="py-24 lg:py-32" aria-labelledby="faq-title">
      <Container>
        <SectionHead n={f.n} label={f.label} title={f.title} text={f.text} id="faq-title" />
        <RevealGroup className="mt-16 border-t border-hairline" stagger={0.07}>
          {f.items.map((it) => (
            <details key={it.q} className="faq group border-b border-hairline">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 [&::-webkit-details-marker]:hidden"><span className="font-display text-[22px] font-bold tracking-[-0.4px] text-ink sm:text-[28px]">{it.q}</span><span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-soft2 text-ink transition-transform group-open:rotate-45"><PlusIcon size={18} weight="bold" aria-hidden="true" /></span></summary>
              <p className="max-w-[70ch] pb-7 text-[17px] leading-[1.6] text-body">{it.a}</p>
            </details>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
