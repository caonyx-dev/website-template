// The reference's opening: one full-bleed photograph held for the whole viewport, the lead and its pill floating
// over the right of it, and the poster headline anchored to the very foot of the frame — "Agency" with a rule
// running off to the edge, then the second line with one word set in italic grey. The photograph settles out of a
// slow zoom and each headline line rises through its own mask; reduced motion skips all of it.
import Image from "next/image";
import type { MarketingContent } from "../content";
import { Container, Pill } from "./ui";

export default function Hero({ h }: { h: MarketingContent["hero"] }) {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink text-(--t-on-dark) nim-on-dark">
      <Image
        src={h.image.src}
        alt={h.image.alt}
        priority
        placeholder="blur"
        sizes="100vw"
        className="nim-zoom absolute inset-0 -z-10 size-full object-cover"
      />
      {/* Two washes rather than one: the foot of the frame carries the headline, the head carries the nav. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/75 via-ink/45 to-ink/85" />

      <Container className="pb-10 pt-32 sm:pb-14 sm:pt-40">
        <div className="flex justify-end">
          <div className="nim-up max-w-[46ch] lg:text-right" style={{ animationDelay: "0.35s" }}>
            <p className="font-(family-name:--t-font-mono) text-[12px] uppercase tracking-[0.14em] text-(--t-on-dark)/90">{h.kicker}</p>
            <p className="mt-4 text-[17px] leading-[1.6] text-(--t-on-dark) sm:text-[18px]">{h.lead}</p>
            <Pill href={h.cta.href} tone="paper" className="mt-7">{h.cta.label}</Pill>
          </div>
        </div>

        {/* Three lines, as the reference sets them: the name with a rule running to the edge, then the claim. The
            rule sits outside the mask so the masked span can keep the block display the animation needs. */}
        <h1 className="mt-12 font-display text-[clamp(40px,7.9vw,116px)] font-extrabold leading-[0.95] tracking-[-0.04em] sm:mt-16">
          <span className="flex items-center gap-5 sm:gap-8">
            <span className="nim-line"><span style={{ animationDelay: "0.1s" }}>{h.lineOne}</span></span>
            <span aria-hidden="true" className="h-[3px] min-w-10 flex-1 bg-(--t-on-dark)/45" />
          </span>
          <span className="nim-line"><span style={{ animationDelay: "0.22s" }}>{h.lineTwo}</span></span>
          <span className="nim-line">
            <span style={{ animationDelay: "0.34s" }}>
              <em className="font-normal italic text-(--t-on-dark)/65">{h.lineTwoItalic}</em> {h.lineThree}
            </span>
          </span>
        </h1>

        <p className="nim-up mt-8 font-(family-name:--t-font-mono) text-[12px] uppercase tracking-[0.14em] text-(--t-on-dark)/85" style={{ animationDelay: "0.5s" }}>
          {h.scroll}
        </p>
      </Container>
    </section>
  );
}
