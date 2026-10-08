// Statement block like the reference: the one-sentence promise set large in Oswald, then a photo card, the
// surface card with the "watch the tour" play disc and a photograph, and the rating and figures column.
import Image from "next/image";
import { PlayIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup, Words } from "@/components/Reveal";
import type { GymContent } from "../content";
import { Container, Num } from "./ui";

export default function About({ a }: { a: GymContent["about"] }) {
  return (
    <section id="about" className="scroll-mt-20 py-24 lg:py-32" aria-labelledby="about-title">
      <Container>
        <h2 id="about-title" className="max-w-[1000px] font-display text-[34px] font-semibold leading-[1.05] text-ink text-pretty sm:text-[48px] lg:text-[64px]"><Words>{a.statement}</Words></h2>
        <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.6fr_1fr]">
          <Reveal from="clip" className="relative aspect-[3/4] overflow-hidden rounded-lg"><Image src={a.runner.src} alt={a.runner.alt} fill placeholder="blur" sizes="(min-width: 1024px) 320px, 100vw" className="object-cover" /></Reveal>
          <Reveal delay={0.1}>
            <div className="grid h-full gap-6 rounded-lg border border-hairline bg-(--t-surface-elevated) p-6 sm:grid-cols-[1fr_1.2fr]">
              <div className="flex flex-col justify-between gap-6">
                <h3 className="font-display text-[26px] font-semibold leading-[1.1] text-ink">{a.card.title}</h3>
                <a href="tour/" className="group inline-flex items-center gap-3 text-[14px] font-medium uppercase tracking-[.04em] text-ink no-underline"><span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-on-primary transition-transform group-hover:scale-110"><PlayIcon size={18} weight="fill" aria-hidden="true" /></span>{a.card.video}</a>
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-md"><Image src={a.card.image.src} alt={a.card.image.alt} fill placeholder="blur" sizes="(min-width: 1024px) 320px, 100vw" className="object-cover" /></div>
            </div>
          </Reveal>
          <div className="grid content-center gap-8 lg:pl-6">
            <Reveal from="right" delay={0.15} className="flex items-center gap-4 border-b border-hairline pb-8">
              <ul className="flex -space-x-3">{a.rated.avatars.map((av, i) => <li key={i} className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-canvas"><Image src={av.src} alt="" fill placeholder="blur" sizes="48px" className="object-cover" /></li>)}</ul>
              <span><Num className="block font-display text-[26px] font-semibold text-ink">{a.rated.value}</Num><span className="text-[14px] text-body">{a.rated.label}</span></span>
            </Reveal>
            <RevealGroup className="grid grid-cols-2 gap-6" from="up" stagger={0.1}>
              {a.stats.map((s) => <div key={s.label}><Num className="block font-display text-[56px] font-bold leading-none text-ink">{s.value}</Num><span className="mt-2 block text-[14px] text-body">{s.label}</span></div>)}
            </RevealGroup>
          </div>
        </div>
      </Container>
    </section>
  );
}
