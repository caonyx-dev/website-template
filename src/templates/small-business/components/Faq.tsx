// The reference's accordion on a tinted band: white rounded cards with a plus that becomes a minus. Built on
// native <details>, so the rows open with JavaScript off, work from the keyboard for free, and can be left
// open side by side — a customer comparing two answers should not have to close the first.
import { Reveal, RevealGroup } from "@/components/Reveal";
import type { SmallBusinessContent } from "../content";
import { Container, Lead, Title } from "./ui";

export default function Faq({ f }: { f: SmallBusinessContent["faq"] }) {
  if (!f.items.length) return null;
  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24 bg-(--t-soft) py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[34ch] text-center">
            <Title id="faq-title">{f.title}</Title>
            <Lead className="mx-auto mt-4 max-w-[46ch]">{f.lead}</Lead>
          </div>
        </Reveal>

        <RevealGroup as="ul" role="list" className="m-0 mx-auto mt-12 grid max-w-[860px] list-none gap-3 p-0" stagger={0.05}>
          {f.items.map((item) => (
            <details key={item.q} className="group rounded-2xl bg-canvas px-6 py-1 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-display text-[18px] font-semibold text-ink marker:content-none sm:text-[20px]">
                {item.q}
                <span aria-hidden="true" className="relative inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-(--t-soft) text-primary">
                  <span className="block h-0.5 w-3.5 rounded-full bg-current" />
                  <span className="absolute block h-3.5 w-0.5 rounded-full bg-current transition-opacity duration-200 group-open:opacity-0 motion-reduce:transition-none" />
                </span>
              </summary>
              <p className="pb-6 pr-12 text-[15px] leading-[1.7] text-(--t-body)">{item.a}</p>
            </details>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
