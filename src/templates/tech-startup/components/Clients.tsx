// Clients: a small grey card of checks sitting above the row, the clients line, and four client
// blocks. Logos are bracketed wordmarks — DESIGN.md and PRODUCT.md both forbid drawing a mark the
// company has not been given written permission to show.
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Headline, Wrap } from "./ui";
import type { TechStartupContent } from "../content";

export default function Clients({ c }: { c: TechStartupContent["clients"] }) {
  return (
    <section id={c.id} className="bg-canvas pb-24 sm:pb-28 lg:pb-36">
      <Wrap>
        <Reveal className="flex lg:justify-end">
          <ul className="w-full rounded-[20px] bg-soft p-8 lg:w-[480px]">
            {c.checks.map((check) => (
              <li key={check} className="flex items-baseline gap-3 py-1.5 font-body text-[17px] text-ink">
                <span aria-hidden className="text-mute">
                  +
                </span>
                {check}
              </li>
            ))}
          </ul>
        </Reveal>

        <h2 className="mt-16 max-w-[560px] font-display text-[clamp(1.5rem,2.6vw,2rem)] font-medium leading-[1.15] text-ink">
          <Headline lines={c.lines} />
        </h2>

        <RevealGroup className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {c.items.map((it) => (
            <div key={it.name}>
              <p className="font-display text-[clamp(1.25rem,2vw,1.625rem)] font-semibold tracking-[-0.01em] text-ink">{it.name}</p>
              <hr className="my-4 border-0 border-t border-hairline" />
              <p className="font-body text-[15px] leading-[1.5] text-body">{it.text}</p>
            </div>
          ))}
        </RevealGroup>
      </Wrap>
    </section>
  );
}
