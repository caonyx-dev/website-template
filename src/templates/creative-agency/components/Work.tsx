// Portfolio on a warm off-white band: two columns, the right one offset downward so the tiles stagger,
// each with tags separated by slashes, a display title and an underlined "View project"; a round black
// "View all" button at the end.
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Magnetic from "@/components/Magnetic";
import type { AgencyContent } from "../content";
import { Container, TextLink } from "./ui";

export default function Work({ w }: { w: AgencyContent["work"] }) {
  return (
    <section id="work" className="bg-soft py-20 lg:py-32" aria-label="Selected work">
      <Container>
        <div className="grid gap-x-20 gap-y-16 lg:grid-cols-2">
          {w.items.map((it, i) => (
            <Parallax key={it.href} speed={i % 2 ? -0.18 : 0.06} className={i % 2 ? "lg:mt-40" : ""}><article className="grid gap-5">
              <Reveal from="clip" className={`overflow-hidden ${i % 2 ? "aspect-[3/2]" : "aspect-[4/5]"}`}><Link href={it.href} className="block h-full"><Image src={it.image.src} alt={it.image.alt} placeholder="blur" sizes="(min-width: 1024px) 45vw, 100vw" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" /></Link></Reveal>
              <p className="flex flex-wrap gap-x-3 text-[15px] text-body">{it.tags.map((t, k) => <span key={t}>{k > 0 && <span className="mr-3 text-ink/40">/</span>}{t}</span>)}</p>
              <h3 className="font-display text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[44px]"><Link href={it.href} className="no-underline hover:text-ink/70">{it.title}</Link></h3>
              <TextLink href={it.href} className="w-max">View project</TextLink>
            </article></Parallax>
          ))}
        </div>
        <div className="mt-20 flex justify-center lg:justify-end lg:pr-24">
          <Magnetic strength={0.3}><Link href={w.all.href} className="inline-flex h-44 w-44 items-center justify-center rounded-full bg-ink text-[13px] font-bold uppercase tracking-[.08em] text-white no-underline transition-colors hover:bg-accent hover:text-ink">{w.all.label}</Link></Magnetic>
        </div>
      </Container>
    </section>
  );
}
