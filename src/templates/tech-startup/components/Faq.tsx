// The near-black panel, rounded at the top so the white page shows above it: a blurb and a button on
// the left, the accordion on the right. Built on native <details>, so it opens without JavaScript.
import { Reveal } from "@/components/Reveal";
import { Button, Headline, Wrap } from "./ui";
import type { TechStartupContent } from "../content";

export default function Faq({ f }: { f: TechStartupContent["faq"] }) {
  return (
    <section className="bg-canvas">
      <Wrap>
        <div className="rounded-[20px] bg-dark px-5 py-16 text-on-dark sm:px-10 sm:py-20 lg:px-14 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <h2 className="font-display text-[clamp(2.125rem,4.4vw,3.125rem)] font-medium leading-[1.0] text-on-dark">
                <Headline lines={f.lines} />
              </h2>
              <p className="mt-6 max-w-[380px] font-body text-[17px] leading-[1.5] text-on-dark-muted">{f.blurb}</p>
              <div className="mt-9">
                <Button href={f.cta.href}>{f.cta.label}</Button>
              </div>
            </div>

            <Reveal className="border-t border-[var(--t-hairline-dark)]">
              {f.items.map((item, i) => (
                <details key={item.q} className="ts-faq border-b border-[var(--t-hairline-dark)]" open={i === 0}>
                  <summary className="flex items-center justify-between gap-6 py-6">
                    <span className="font-display text-[clamp(1.0625rem,1.6vw,1.25rem)] font-medium text-on-dark">{item.q}</span>
                    <span
                      aria-hidden
                      className="relative grid size-6 shrink-0 place-items-center text-on-dark before:absolute before:h-px before:w-4 before:bg-current after:absolute after:h-4 after:w-px after:bg-current after:transition-transform after:duration-300 group-open:after:scale-y-0 [[open]_&]:after:scale-y-0"
                    />
                  </summary>
                  <div className="pb-7 pr-10">
                    <p className="font-body text-[16px] leading-[1.55] text-on-dark-muted">{item.a}</p>
                  </div>
                </details>
              ))}
            </Reveal>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
