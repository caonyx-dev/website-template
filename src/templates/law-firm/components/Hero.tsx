// 02 The reference's split hero: a brass panel on the left carrying the standing portrait, which bleeds into a
// dark photographic right side holding the headline, the two-part rule, the lead and the brass pill. On phones
// the portrait drops and the copy centres over the photograph, exactly as the reference does.
import Image from "next/image";
import type { LawContent } from "../content";
import { Btn, Container } from "./ui";

export default function Hero({ h }: { h: LawContent["hero"] }) {
  return (
    <section id="top" className="law-on-dark relative isolate overflow-hidden bg-dark" aria-labelledby="hero-title">
      {/* The dark photograph fills the band; the panel and portrait sit over its left third from lg up. */}
      <div className="absolute inset-0 -z-10">
        <Image src={h.background.src} alt="" aria-hidden="true" fill priority placeholder="blur" sizes="100vw" className="object-cover" />
        <span className="absolute inset-0 bg-(--t-dark)/75" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1480px] lg:min-h-[840px] lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)]">
        <div className="hidden self-end lg:block">
          {/* The portrait was shot on a flat ochre ground, so the photograph is the panel. */}
          <Image src={h.portrait.src} alt={h.portrait.alt} placeholder="blur" sizes="(min-width: 1024px) 42vw, 0px" className="law-up block h-auto w-full object-contain object-bottom" />
        </div>

        <Container className="flex items-center py-20 lg:py-28 lg:pl-0">
          <div className="max-w-[560px] max-lg:mx-auto max-lg:text-center">
            <h1 id="hero-title" className="font-display text-[40px] font-semibold leading-[1.1] text-white sm:text-[52px] lg:text-[60px]">
              {h.titleLines.map((line, i) => (
                <span key={line} className="law-line">
                  <span style={{ animationDelay: `${0.1 + i * 0.1}s` }}>{line}{i < h.titleLines.length - 1 ? " " : ""}</span>
                </span>
              ))}
            </h1>
            {/* The reference's two-part rule: a short brass segment running on as a pale hairline. */}
            <span aria-hidden="true" className="law-rule mt-8 flex items-center max-lg:justify-center" style={{ animationDelay: ".4s" }}>
              <span className="block h-0.5 w-16 bg-accent" />
              <span className="block h-px w-full max-w-[280px] bg-white/25" />
            </span>
            <p className="law-up mt-8 text-[17px] leading-[1.75] text-white/80" style={{ animationDelay: ".48s" }}>{h.lead}</p>
            <div className="law-up mt-10" style={{ animationDelay: ".58s" }}><Btn href={h.cta.href}>{h.cta.label}</Btn></div>
          </div>
        </Container>
      </div>
    </section>
  );
}
