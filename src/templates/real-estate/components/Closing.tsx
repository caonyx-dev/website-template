// Closing band: grey ground, an oversized wordmark watermark behind the statement, and a round
// three-line button. The white footer card lifts over the bottom of this band.
import { Reveal } from "@/components/Reveal";
import { Wrap } from "./ui";
import type { RealEstateContent } from "../content";

export default function Closing({ c, brand }: { c: RealEstateContent["closing"]; brand: string }) {
  return (
    <section className="relative isolate overflow-hidden rounded-t-[32px] bg-[var(--t-grey-band)] pb-[120px] pt-20 sm:rounded-t-[50px] sm:pb-[140px] sm:pt-24 lg:pt-28">
      <Wrap className="relative">
        <h2 className="text-center font-display text-[clamp(2rem,5vw,4.25rem)] font-bold leading-[1.07] tracking-[-0.02em] text-on-dark">
          {c.lines.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </h2>
        <p className="mx-auto mt-5 max-w-[560px] text-center font-body text-[17px] leading-[1.55] text-white/80">{c.lead}</p>

        <Reveal className="mt-12 flex justify-center">
          <a
            href={c.cta.href}
            className="grid size-[168px] place-items-center rounded-full border border-white/35 p-6 text-center font-body text-[16px] font-semibold leading-[1.25] text-on-dark transition-colors duration-300 hover:bg-primary hover:text-on-primary hover:border-primary"
          >
            {c.cta.label}
          </a>
        </Reveal>
      </Wrap>

      {/* Watermark: decorative, clipped by the band, and hidden from assistive technology. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 select-none text-center font-display text-[clamp(5rem,19vw,17rem)] font-bold leading-[0.78] tracking-[-0.04em] text-white/10"
      >
        {brand}
      </span>
    </section>
  );
}
