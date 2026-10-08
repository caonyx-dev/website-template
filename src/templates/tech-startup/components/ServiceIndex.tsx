// Five rows, each a small index numeral and a service name set at display scale. Nothing separates
// the rows but the leading — that emptiness is the design (DESIGN.md). On hover the name shifts
// right and the numeral goes orange.
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Wrap } from "./ui";
import type { TechStartupContent } from "../content";

export default function ServiceIndex({ s }: { s: TechStartupContent["services"] }) {
  return (
    <section id={s.id} className="bg-canvas pb-24 sm:pb-28 lg:pb-36">
      <Wrap>
        <Reveal>
          <p className="max-w-[320px] font-display text-[clamp(1.375rem,2.4vw,1.75rem)] font-medium leading-[1.15] text-ink">
            {s.label}
          </p>
        </Reveal>

        <RevealGroup as="ol" className="mt-12" stagger={0.07}>
          {s.items.map((it) => (
            <a
              key={it.n}
              href={it.href}
              className="ts-index-row group flex items-baseline gap-6 py-1.5 sm:gap-10"
            >
              <span
                aria-hidden
                className="shrink-0 font-body text-[15px] tabular-nums text-mute transition-colors duration-300 group-hover:text-primary"
              >
                {it.n}
              </span>
              <span className="ts-index-name block font-display text-[clamp(2rem,7.2vw,6.25rem)] font-medium leading-[0.95] text-ink">
                {it.title}
              </span>
            </a>
          ))}
        </RevealGroup>
      </Wrap>
    </section>
  );
}
