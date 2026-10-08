// About: diamond eyebrow, the long headline revealed word by word, a tall photograph with a topographic
// line drawing behind it, a paragraph, a divider, the rating tile and a second photograph; "Since, [year]"
// as a vertical watermark on the right.
import Image from "next/image";
import { StarIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import type { CorporateContent } from "../content";
import { Container, Eyebrow, Frame, H2, Watermark } from "./ui";

export default function About({ a }: { a: CorporateContent["about"] }) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28" aria-labelledby="about-title">
      <Frame className="relative">
        <Watermark side="right">{a.watermark}</Watermark>
        <svg className="pointer-events-none absolute -left-24 top-1/2 hidden h-[560px] w-[560px] -translate-y-1/2 text-ink/10 xl:block" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">{[40, 70, 100, 130, 160, 190].map((r) => <ellipse key={r} cx="120" cy="200" rx={r * 1.4} ry={r} />)}</svg>
        <Container className="relative">
          <Eyebrow>{a.eyebrow}</Eyebrow>
          <H2 id="about-title" className="mt-6 max-w-[1100px]">{a.title}</H2>
          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
            <Reveal className="aspect-[4/5] max-h-[680px] overflow-hidden lg:-ml-4"><Image src={a.image1.src} alt={a.image1.alt} placeholder="blur" sizes="(min-width: 1024px) 40vw, 100vw" className="h-full w-full object-cover" /></Reveal>
            <div className="grid content-start gap-8">
              <p className="text-[16px] leading-[1.7] text-body">{a.text}</p>
              <span className="block h-px w-full bg-ink/15 before:block before:h-px before:w-1/3 before:bg-ink" aria-hidden="true" />
              <div className="flex items-center gap-7">
                <span className="inline-flex h-14 w-14 items-center justify-center bg-ink text-white"><StarIcon size={26} weight="fill" aria-hidden="true" /></span>
                <span className="font-display text-[22px] font-semibold leading-tight text-ink sm:text-[24px]">{a.rating.big}<br />{a.rating.small}</span>
              </div>
              <Reveal className="mt-4 aspect-[3/2] overflow-hidden"><Image src={a.image2.src} alt={a.image2.alt} placeholder="blur" sizes="(min-width: 1024px) 45vw, 100vw" className="h-full w-full object-cover" /></Reveal>
            </div>
          </div>
        </Container>
      </Frame>
    </section>
  );
}
