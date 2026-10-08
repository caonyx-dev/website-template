// Articles: centred headline, three cards with a photograph, date and tags, display title and "Read more".
import Image from "next/image";
import Link from "next/link";
import { RevealGroup, Words } from "@/components/Reveal";
import type { AgencyContent } from "../content";
import { Container, H2, TextLink } from "./ui";

export default function Blog({ b }: { b: AgencyContent["blog"] }) {
  return (
    <section className="py-20 lg:py-32" aria-labelledby="blog-title">
      <Container>
        <H2 id="blog-title" center><Words>{b.title}</Words></H2>
        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-3" stagger={0.1} from="clip">
          {b.items.map((it) => (
            <article key={it.href} className="grid gap-5">
              <Link href={it.href} className="block aspect-[7/6] overflow-hidden"><Image src={it.image.src} alt={it.image.alt} placeholder="blur" sizes="(min-width: 768px) 33vw, 100vw" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" /></Link>
              <p className="flex flex-wrap items-center gap-x-3 text-[15px] text-body">{it.date}{it.tags.map((t) => <span key={t} className="flex items-center gap-3"><span className="h-1 w-1 rounded-full bg-ink" aria-hidden="true" />{t}</span>)}</p>
              <h3 className="font-display text-[22px] font-bold leading-[1.25] tracking-[-0.01em] text-ink"><Link href={it.href} className="no-underline hover:text-ink/70">{it.title}</Link></h3>
              <TextLink href={it.href} className="w-max">Read more</TextLink>
            </article>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
