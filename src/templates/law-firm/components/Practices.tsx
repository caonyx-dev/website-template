// 06 The reference's dark services band: six bordered cards, each with a filled brass icon tile beside the title,
// laid two across with the tall stairwell photograph filling the right column.
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, UsersThreeIcon, BriefcaseIcon, HouseLineIcon, BuildingsIcon, ScrollIcon, GlobeHemisphereWestIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup } from "@/components/Reveal";
import type { LawContent, PracticeIcon } from "../content";
import { Btn, Container, SectionHead } from "./ui";

const ICONS: Record<PracticeIcon, typeof UsersThreeIcon> = {
  family: UsersThreeIcon, employment: BriefcaseIcon, property: HouseLineIcon,
  commercial: BuildingsIcon, estates: ScrollIcon, immigration: GlobeHemisphereWestIcon,
};

export default function Practices({ p }: { p: LawContent["practices"] }) {
  return (
    <section id="practices" className="law-on-dark scroll-mt-[112px] bg-dark py-20 lg:py-28" aria-labelledby="practices-title">
      <Container>
        <SectionHead id="practices-title" eyebrow={p.eyebrow} lead={p.titleLead} em={p.titleEm} text={p.text} onDark />
        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1.62fr)_minmax(0,1fr)]">
          <RevealGroup className="grid gap-5 sm:grid-cols-2" stagger={0.07}>
            {p.items.map((it) => {
              const Icon = ICONS[it.icon];
              return (
                <Link key={it.title} href="#consultation" className="group flex h-full gap-4 border border-white/15 p-6 no-underline transition-colors duration-200 hover:border-accent/70">
                  <span aria-hidden="true" className="inline-flex size-11 shrink-0 items-center justify-center rounded-sm bg-accent text-(--t-dark)"><Icon size={22} weight="light" /></span>
                  <span className="min-w-0">
                    <h3 className="font-display text-[21px] font-semibold leading-[1.3] text-white">{it.title}</h3>
                    <span className="mt-2 block text-[15px] leading-[1.65] text-(--t-on-dark-muted)">{it.text}</span>
                    <span className="mt-3 inline-flex items-center gap-2 text-[14px] font-semibold text-accent">
                      <span className="sr-only">Discuss a {it.title.toLowerCase()} matter</span><span aria-hidden="true">Discuss this</span>
                      <ArrowRightIcon size={15} weight="light" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
                    </span>
                  </span>
                </Link>
              );
            })}
          </RevealGroup>

          <div className="grid content-start gap-6">
            <Reveal from="clip" className="max-lg:hidden">
              <span className="relative block h-full overflow-hidden" style={{ aspectRatio: "3 / 4" }}>
                <Image src={p.image.src} alt={p.image.alt} fill placeholder="blur" sizes="(min-width: 1024px) 33vw, 0px" className="object-cover saturate-[0.3]" />
              </span>
            </Reveal>
            <Reveal delay={0.1}><Btn href={p.cta.href} tone="on-dark" className="w-full">{p.cta.label}</Btn></Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
