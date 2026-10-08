// The reference's "New Arrivals": a centred head over a four-up grid, then one centred button. Two up on phones,
// which is what this template's DESIGN.md asks for. The placeholder note sits under the grid, because the prices
// and stock labels on these cards are template data and nothing on the page should imply otherwise.
import { RevealGroup } from "@/components/Reveal";
import type { RetailContent } from "../content";
import ProductCard from "./ProductCard";
import { Btn, Container, SectionHead } from "./ui";

export default function Arrivals({ a }: { a: RetailContent["arrivals"] }) {
  return (
    <section id="new-in" aria-labelledby="arrivals-title" className="scroll-mt-32 bg-canvas py-12 sm:py-16">
      <Container>
        <SectionHead id="arrivals-title" title={a.title} lead={a.lead} />
        <RevealGroup as="ul" className="m-0 mt-10 grid list-none grid-cols-2 gap-x-4 gap-y-10 p-0 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-6" stagger={0.05}>
          {a.products.map((p) => <ProductCard key={p.id} p={p} />)}
        </RevealGroup>
        <div className="mt-12 text-center">
          <Btn href={a.cta.href} tone="ink" size="lg">{a.cta.label}</Btn>
        </div>
        <p className="mx-auto mt-8 max-w-[76ch] text-center text-[12px] leading-[1.6] text-(--t-muted)">
          <span className="font-semibold uppercase tracking-[0.06em] text-ink">Placeholder</span>{" "}{a.note}
        </p>
      </Container>
    </section>
  );
}
