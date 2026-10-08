// Insights: eyebrow, giant title and two wide surface cards (3:4 photograph, date · category, title, text,
// "Learn more") wiping up in turn.
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { RevealGroup } from "@/components/Reveal";
import type { GymContent } from "../content";
import { Container, Num, SectionHead } from "./ui";

export default function Insights({ i }: { i: GymContent["insights"] }) {
  return (
    <section id="insights" className="scroll-mt-20 py-24 lg:py-32" aria-labelledby="insights-title">
      <Container>
        <SectionHead n={i.n} label={i.label} lines={i.title} id="insights-title" />
        <RevealGroup as="ul" className="grid gap-6 lg:grid-cols-2" from="clip" stagger={0.12}>
          {i.items.map((it) => (
            <article key={it.href} className="grid gap-6 rounded-lg border border-hairline bg-(--t-surface-elevated) p-3 sm:grid-cols-[0.9fr_1fr]">
              <div className="relative aspect-[3/4] overflow-hidden rounded-md"><Image src={it.image.src} alt={it.image.alt} fill placeholder="blur" sizes="(min-width: 1024px) 300px, 100vw" className="object-cover grayscale" /></div>
              <div className="grid content-between gap-6 p-3 sm:py-8 sm:pr-6">
                <div>
                  <p className="flex items-center gap-3 text-[13px] uppercase tracking-[.06em] text-body"><Num>{it.date}</Num><span aria-hidden="true">•</span><span>{it.category}</span></p>
                  <h3 className="mt-5 font-display text-[30px] font-semibold leading-[1.05] text-ink">{it.title}</h3>
                  <p className="mt-5 text-[15px] leading-[1.6] text-body">{it.text}</p>
                </div>
                <Link href={it.href} className="inline-flex items-center gap-2 text-[14px] font-medium uppercase tracking-[.04em] text-ink no-underline hover:text-primary">{i.more}<span className="sr-only">: {it.title}</span><ArrowUpRightIcon size={16} weight="bold" aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
