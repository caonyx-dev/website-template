// Process split like the reference "corporate service" block: photograph with a green-black caption box
// overlapping its lower-right corner, beside the eyebrow, headline, text, numbered ruled rows (mono number
// and "when") and the teal button. The rows slide in from the left.
import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealGroup, Words } from "@/components/Reveal";
import type { FinanceContent } from "../content";
import { Btn, Container, Eyebrow, Num } from "./ui";

export default function Process({ p }: { p: FinanceContent["process"] }) {
  return (
    <section id="process" className="scroll-mt-20 py-20 lg:py-28" aria-labelledby="process-title">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <div className="relative mx-auto w-full max-w-[560px] pb-24 pr-16 sm:pr-24">
          <Reveal from="clip" className="relative aspect-[4/5]"><Image src={p.image.src} alt={p.image.alt} fill placeholder="blur" sizes="(min-width: 1024px) 520px, 90vw" className="object-cover" /></Reveal>
          <Reveal from="up" delay={0.3} className="absolute bottom-0 right-0 w-[70%] bg-dark p-8 text-white sm:p-10"><p className="font-display text-[26px] font-bold leading-[1.15] sm:text-[30px]">{p.caption}</p></Reveal>
        </div>
        <div>
          <Reveal><Eyebrow>{p.eyebrow}</Eyebrow></Reveal>
          <h2 id="process-title" className="mt-4 font-display text-[36px] font-bold leading-[1.05] text-ink text-balance sm:text-[48px] lg:text-[57px]"><Words>{p.title}</Words></h2>
          <Reveal delay={0.2}><p className="mt-6 max-w-[52ch] text-[17px] leading-[1.65] text-body">{p.text}</p></Reveal>
          <RevealGroup as="ol" className="mt-8 grid divide-y divide-hairline border-y border-hairline" from="left" stagger={0.1}>
            {p.steps.map((st, i) => (
              <Link key={st.href} href={st.href} className="group flex items-center gap-5 py-4 no-underline">
                <Num className="w-[3ch] shrink-0 text-[20px] text-mute">{String(i + 1).padStart(2, "0")}.</Num>
                <span className="font-display text-[22px] font-bold text-ink transition-colors group-hover:text-primary">{st.title}</span>
                <Num className="ml-auto shrink-0 text-[13px] uppercase tracking-[.1em] text-mute">{st.when}</Num>
              </Link>
            ))}
          </RevealGroup>
          <Reveal delay={0.1}><Btn href={p.cta.href} className="mt-9">{p.cta.label}</Btn></Reveal>
        </div>
      </Container>
    </section>
  );
}
