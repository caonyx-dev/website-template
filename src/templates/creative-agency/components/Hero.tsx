// Hero in the Folex language: two oversized display lines, the first flush left and the second flush
// right, then a row with the award line on the left and the lead plus square button on the right.
// Signature moment: each line is revealed by a clip-path wipe from its own side, the row fades up after.
import { Fragment } from "react";
import { GlobeHemisphereWestIcon } from "@phosphor-icons/react/dist/ssr";
import type { AgencyContent } from "../content";
import Magnetic from "@/components/Magnetic";
import { Btn, Container } from "./ui";

const words = (t: string, delay: number) => t.split(" ").map((w, i) => <Fragment key={i}><span className="inline-block overflow-hidden align-bottom pb-[.08em] -mb-[.08em]"><span className="rise-in" style={{ animationDelay: `${delay + i * 0.12}s` }}>{w}</span></span>{" "}</Fragment>);

export default function Hero({ h }: { h: AgencyContent["hero"] }) {
  return (
    <section id="top" className="pt-12 pb-20 lg:pt-20 lg:pb-28" aria-labelledby="hero-title">
      <Container>
        <h1 id="hero-title" className="font-display font-bold leading-[1.02] tracking-[-0.04em] text-ink">
          <span className="block text-[clamp(44px,7.4vw,108px)] lg:whitespace-nowrap">{words(h.line1, 0.1)}</span>
          <span className="block text-[clamp(44px,7.4vw,108px)] lg:text-right">{words(h.line2, 0.5)}</span>
        </h1>
        <div className="mt-12 grid items-end gap-10 lg:grid-cols-[1fr_1fr]">
          <p className="fade-up order-2 inline-flex items-center gap-4 text-[13px] font-bold uppercase tracking-[.08em] text-ink lg:order-1 lg:ml-28" style={{ animationDelay: "1.1s" }}><GlobeHemisphereWestIcon size={32} weight="fill" aria-hidden="true" className="pop-in" style={{ animationDelay: "1.2s" }} /><span className="max-w-[20ch] leading-snug">{h.award}</span></p>
          <div className="order-1 grid max-w-[560px] gap-8 lg:order-2 lg:mr-12">
            <p className="fade-up text-[17px] font-medium leading-[1.6] text-ink" style={{ animationDelay: ".85s" }}>{h.lead}</p>
            <Magnetic strength={0.25} className="fade-up" style={{ animationDelay: "1s" }}><Btn href={h.cta.href} className="w-max">{h.cta.label}</Btn></Magnetic>
          </div>
        </div>
      </Container>
    </section>
  );
}
