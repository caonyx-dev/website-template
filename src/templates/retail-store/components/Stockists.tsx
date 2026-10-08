// The reference's logo strip. The DESIGN.md forbids inventing brand marks, so these are bracketed wordmarks on
// plain cards with a note beneath saying exactly that.
import { RevealGroup } from "@/components/Reveal";
import type { RetailContent } from "../content";
import { Container } from "./ui";

export default function Stockists({ s }: { s: RetailContent["stockists"] }) {
  return (
    <section aria-labelledby="stockists-title" className="bg-(--t-soft) pb-14 sm:pb-20">
      <Container>
        <h2 id="stockists-title" className="text-center text-[12px] font-bold uppercase tracking-[0.1em] text-(--t-muted)">{s.title}</h2>
        <RevealGroup as="ul" className="m-0 mt-6 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 lg:grid-cols-6" stagger={0.05}>
          {s.items.map((item) => (
            <span key={item} className="flex min-h-[72px] items-center justify-center rounded-lg bg-canvas px-4 text-center font-display text-[14px] font-semibold text-(--t-muted)">{item}</span>
          ))}
        </RevealGroup>
        <p className="mx-auto mt-6 max-w-[76ch] text-center text-[12px] leading-[1.6] text-(--t-muted)">
          <span className="font-semibold uppercase tracking-[0.06em] text-ink">Placeholder</span>{" "}{s.note}
        </p>
      </Container>
    </section>
  );
}
