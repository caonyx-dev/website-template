// 08 The reference's slate stats card, overlapping the band above it. Each figure counts up from zero the first
// time it scrolls into view, which is the animation the page was missing; reduced motion renders the final value.
import { RevealGroup } from "@/components/Reveal";
import type { LogisticsContent } from "../content";
import { Container, CountUp } from "./ui";

export default function Stats({ s }: { s: LogisticsContent["stats"] }) {
  return (
    <section className="log-on-dark bg-canvas pb-16 lg:pb-24" aria-labelledby="stats-title">
      <h2 id="stats-title" className="sr-only">The operation in numbers</h2>
      <Container>
        <div className="relative z-10 -mt-10 rounded-[25px] bg-dark px-6 py-14 sm:px-10 lg:-mt-16 lg:px-16 lg:py-20">
          <RevealGroup as="ul" className="grid list-none gap-10 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8" stagger={0.09}>
            {s.items.map((it) => (
              <span key={it.label} className="block">
                <CountUp value={it.value} decimals={it.decimals} suffix={it.suffix} className="block font-display text-[48px] font-bold leading-none tracking-[-0.03em] text-primary lg:text-[64px]" />
                <span className="mt-4 block text-[17px] text-white">{it.label}</span>
              </span>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
