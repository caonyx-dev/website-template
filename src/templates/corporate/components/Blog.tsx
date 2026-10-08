// Recent insights: vertical watermark, eyebrow and headline, then three rows: category and date, title,
// read time, a thumbnail and a black round arrow button.
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { RevealGroup } from "@/components/Reveal";
import type { CorporateContent } from "../content";
import { Container, Eyebrow, Frame, H2, Watermark } from "./ui";

export default function Blog({ b }: { b: CorporateContent["blog"] }) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28" aria-labelledby="blog-title">
      <Frame className="relative">
        <Watermark>{b.watermark}</Watermark>
        <Container>
          <Eyebrow>{b.eyebrow}</Eyebrow>
          <H2 id="blog-title" className="mt-6 max-w-[760px]">{b.title}</H2>
          <RevealGroup className="mt-14 border-t border-ink/15" stagger={0.08}>
            {b.items.map((it) => (
              <Link key={it.href} href={it.href} className="group grid items-center gap-6 border-b border-ink/15 py-8 no-underline lg:grid-cols-[1fr_380px_120px_56px] lg:gap-10">
                <div className="grid gap-3">
                  <span className="text-[12px] font-semibold uppercase tracking-[.08em] text-body">{it.category} <span className="mx-2">.</span> {it.date}</span>
                  <h3 className="max-w-[26ch] font-display text-[24px] font-semibold leading-tight text-ink group-hover:text-primary sm:text-[28px]">{it.title}</h3>
                </div>
                <span className="block aspect-[2/1] overflow-hidden"><Image src={it.image.src} alt={it.image.alt} placeholder="blur" sizes="380px" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></span>
                <span className="text-[15px] text-body">{it.read}</span>
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white transition-colors group-hover:bg-primary"><ArrowRightIcon size={20} aria-hidden="true" /></span>
              </Link>
            ))}
          </RevealGroup>
        </Container>
      </Frame>
    </section>
  );
}
