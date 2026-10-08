// The reference's "Top Seller" rail. The DESIGN.md forbids inventing bestseller counts, so this is framed as a
// hand-picked selection rather than a sales claim, and the head says who picked it.
import { RevealGroup } from "@/components/Reveal";
import type { RetailContent } from "../content";
import ProductCard from "./ProductCard";
import { Btn, Container, SectionHead } from "./ui";

export default function Picks({ p }: { p: RetailContent["picks"] }) {
  return (
    <section id="picks" aria-labelledby="picks-title" className="scroll-mt-32 bg-canvas py-12 sm:py-16">
      <Container>
        <SectionHead
          id="picks-title"
          title={p.title}
          lead={p.lead}
          align="start"
          action={<Btn href={p.cta.href} tone="outline">{p.cta.label}</Btn>}
        />
        <RevealGroup as="ul" className="m-0 mt-10 grid list-none grid-cols-2 gap-x-4 gap-y-10 p-0 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-6" stagger={0.05}>
          {p.products.map((item) => <ProductCard key={item.id} p={item} />)}
        </RevealGroup>
      </Container>
    </section>
  );
}
