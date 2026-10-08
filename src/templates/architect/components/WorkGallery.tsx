// Architect project gallery: three portrait columns, the middle one dropped a step,
// sharp frames, a round arrow in the photograph's corner and a two-row title block
// (index, title, year / place, category). Reference-led (owner's screenshot, 2026-10-07).
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import type { SiteContent } from "@/lib/content";
import { Wrap, SectionHead } from "@/components/ui";
import { RevealGroup, Words } from "@/components/Reveal";

export default function WorkGallery({ c }: { c: SiteContent["work"] }) {
  return (
    <section id={c.id} className="py-20 lg:py-28" aria-labelledby={`${c.id}-title`}>
      <Wrap>
        <SectionHead id={`${c.id}-title`} eyebrow={c.eyebrow} title={<Words>{c.title}</Words>} lead={c.lead} />
        <RevealGroup as="ul" className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:pb-32" stagger={0.1}>
          {c.projects.map((p, i) => (
            <Link key={p.href} href={p.href} className={`group grid gap-6 text-inherit no-underline ${i === 1 ? "lg:translate-y-32" : ""}`}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={p.image.src} alt={p.image.alt} placeholder="blur" sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" className="h-full w-full object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]" />
                <span className="absolute bottom-6 right-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-surface text-ink transition-[background-color,color,transform] duration-300 group-hover:bg-dark group-hover:text-on-dark group-focus-visible:bg-dark group-focus-visible:text-on-dark" aria-hidden="true">
                  <ArrowUpRightIcon size={22} weight="regular" />
                </span>
              </div>
              <div className="grid gap-3">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="flex min-w-0 items-baseline gap-5">
                    <span className="shrink-0 text-[13px] tabular-nums text-mute">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="min-w-0 font-display text-[22px] font-medium leading-tight text-pretty">{p.title}</h3>
                  </span>
                  {p.year && <span className="shrink-0 text-[14px] tabular-nums text-body">{p.year}</span>}
                </div>
                <div className="flex items-baseline justify-between gap-4 text-[13px] uppercase tracking-[.04em] text-body">
                  <span className="min-w-0">{p.place}</span>
                  <span className="shrink-0 text-right">{p.tag}</span>
                </div>
              </div>
            </Link>
          ))}
        </RevealGroup>
      </Wrap>
    </section>
  );
}
