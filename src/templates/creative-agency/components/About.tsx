// About: a tall photograph on the left and a lime block on the right with the headline, two paragraphs
// and an underlined link. The photograph overlaps the block's top edge.
import Image from "next/image";
import { Reveal, Words } from "@/components/Reveal";
import type { AgencyContent } from "../content";
import { TextLink } from "./ui";

export default function About({ a }: { a: AgencyContent["about"] }) {
  return (
    <section className="relative" aria-labelledby="about-title">
      <div className="grid lg:grid-cols-[512px_1fr]">
        <Reveal from="clip" className="relative z-[1] aspect-[4/5] max-h-[620px] overflow-hidden lg:-mt-12"><Image src={a.image.src} alt={a.image.alt} placeholder="blur" sizes="(min-width: 1024px) 512px, 100vw" className="settle h-full w-full object-cover" /></Reveal>
        <div className="bg-accent px-6 py-16 text-ink lg:px-[140px] lg:py-28">
          <h2 id="about-title" className="max-w-[12ch] font-display text-[40px] font-bold leading-[1.08] tracking-[-0.02em] sm:text-[56px] lg:text-[72px]"><Words>{a.title}</Words></h2>
          <Reveal from="right" delay={0.15}><p className="mt-12 max-w-[64ch] text-[17px] leading-[1.6]">{a.p1}</p></Reveal>
          <Reveal from="right" delay={0.3}><p className="mt-6 max-w-[64ch] text-[17px] leading-[1.6]">{a.p2}</p></Reveal>
          <Reveal delay={0.45}><TextLink href={a.link.href} className="mt-10">{a.link.label}</TextLink></Reveal>
        </div>
      </div>
    </section>
  );
}
