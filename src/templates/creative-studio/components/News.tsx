// 09 News on the off-white band: a wide first card and two narrower ones, each with a photograph, date and title.
import Image from "next/image";
import Link from "next/link";
import { RevealGroup } from "@/components/Reveal";
import type { StudioContent } from "../content";
import { Container, SectionHead } from "./ui";

export default function News({ n }: { n: StudioContent["news"] }) {
  return (
    <section className="bg-soft py-24 lg:py-32" aria-labelledby="news-title">
      <Container>
        <SectionHead n={n.n} label={n.label} title={n.title} text={n.text} id="news-title" />
        <RevealGroup className="mt-16 grid gap-5 lg:grid-cols-[2fr_1fr_1fr]" stagger={0.1} from="clip">
          {n.items.map((it) => <Link key={it.href} href={it.href} className="group grid content-start gap-4 no-underline"><span className="block aspect-[4/3] overflow-hidden rounded-sm bg-soft2 lg:aspect-[5/4]"><Image src={it.image.src} alt={it.image.alt} placeholder="blur" sizes="(min-width: 1024px) 33vw, 100vw" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></span><span className="text-[16px] text-body">{it.date}</span><span className="font-display text-[26px] font-bold leading-[1.2] tracking-[-0.5px] text-ink">{it.title}</span></Link>)}
        </RevealGroup>
      </Container>
    </section>
  );
}
