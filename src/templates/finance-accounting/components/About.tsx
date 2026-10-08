// "The practice": eyebrow, headline, text, teal "Who we are" and the phone in a white circle beside two
// overlapping photographs (tall portrait top-right, team photograph overlapping bottom-left) that wipe in and
// drift against each other with scroll.
import Image from "next/image";
import { PhoneCallIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal, Words } from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import type { FinanceContent } from "../content";
import { Btn, Container, Eyebrow, Num } from "./ui";

export default function About({ a }: { a: FinanceContent["about"] }) {
  const tel = `tel:${a.phone.replace(/[^\d+]/g, "")}`;
  return (
    <section id="about" className="scroll-mt-20 bg-soft py-20 lg:py-28" aria-labelledby="about-title">
      <Container className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Reveal><Eyebrow>{a.eyebrow}</Eyebrow></Reveal>
          <h2 id="about-title" className="mt-4 font-display text-[36px] font-bold leading-[1.05] text-ink text-balance sm:text-[48px] lg:text-[57px]"><Words>{a.title}</Words></h2>
          <Reveal delay={0.2}><p className="mt-6 max-w-[52ch] text-[17px] leading-[1.65] text-body">{a.text}</p></Reveal>
          <Reveal delay={0.3} className="mt-9 flex flex-wrap items-center gap-8">
            <Btn href={a.cta.href}>{a.cta.label}</Btn>
            <a href={tel} className="group inline-flex items-center gap-4 no-underline"><span className="inline-flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white text-ink shadow-lift"><PhoneCallIcon size={22} weight="light" aria-hidden="true" /></span><Num className="font-display text-[21px] font-bold text-ink transition-colors group-hover:text-primary">{a.phone}</Num></a>
          </Reveal>
        </div>
        <div className="relative mx-auto w-full max-w-[640px]" style={{ aspectRatio: "640 / 620" }}>
          <Reveal from="clip" className="absolute right-0 top-0 h-[80%] w-[66%]"><Image src={a.large.src} alt={a.large.alt} fill placeholder="blur" sizes="(min-width: 1024px) 420px, 66vw" className="object-cover" /></Reveal>
          <Parallax speed={-0.15} className="absolute bottom-0 left-0 w-[62%]"><Reveal from="clip" delay={0.3} className="relative aspect-[4/5]"><Image src={a.small.src} alt={a.small.alt} fill placeholder="blur" sizes="(min-width: 1024px) 400px, 62vw" className="object-cover" /></Reveal></Parallax>
        </div>
      </Container>
    </section>
  );
}
