// 03 The reference's client strip: six wordmarks in muted grey. Placeholders, labelled as such in the content
// file, because this template's DESIGN.md forbids fabricating client logos.
import { RevealGroup } from "@/components/Reveal";
import type { LogisticsContent } from "../content";
import { Container } from "./ui";

export default function Logos({ l }: { l: LogisticsContent["logos"] }) {
  return (
    <section className="bg-canvas py-14 lg:py-20" aria-labelledby="logos-title">
      <h2 id="logos-title" className="sr-only">{l.title}</h2>
      <Container>
        <RevealGroup as="ul" className="grid list-none grid-cols-2 items-center gap-8 p-0 sm:grid-cols-3 lg:grid-cols-6" stagger={0.06}>
          {l.items.map((name) => (
            <span key={name} className="block text-center font-display text-[17px] font-bold uppercase tracking-[0.06em] text-(--t-ink-tertiary)">{name}</span>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
