// Services: vertical watermark, eyebrow, headline, a small photograph top-right, then numbered rows
// (001 to 005) with title, excerpt and a square arrow button, and a footer line with a text link.
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { RevealGroup } from "@/components/Reveal";
import type { CorporateContent } from "../content";
import { Container, Eyebrow, Frame, H2, Watermark } from "./ui";

export default function ServicesList({ s }: { s: CorporateContent["services"] }) {
  return (
    <section id={s.id} className="relative overflow-hidden py-20 lg:py-28" aria-labelledby={`${s.id}-title`}>
      <Frame className="relative">
        <Watermark>{s.watermark}</Watermark>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
            <div><Eyebrow>{s.eyebrow}</Eyebrow><H2 id={`${s.id}-title`} className="mt-6 max-w-[600px]">{s.title}</H2></div>
            <div className="aspect-[2.1/1] w-full overflow-hidden lg:w-[424px]"><Image src={s.image.src} alt={s.image.alt} placeholder="blur" sizes="424px" className="h-full w-full object-cover" /></div>
          </div>
          <RevealGroup as="ol" className="mt-16 border-t border-ink/15" stagger={0.06}>
            {s.items.map((it, i) => (
              <Link key={it.href} href={it.href} className="group grid grid-cols-[1fr_auto] items-center gap-4 border-b border-ink/15 py-8 no-underline lg:grid-cols-[88px_1fr_1fr_60px] lg:gap-10">
                <span className="text-[16px] text-body">00{i + 1}</span>
                <h3 className="font-display text-[26px] font-semibold text-ink group-hover:text-primary sm:text-[32px] lg:text-[36px]">{it.title}</h3>
                <p className="col-span-2 line-clamp-2 text-[16px] leading-[1.6] text-body lg:col-span-1">{it.text}</p>
                <span className="col-start-2 row-start-1 inline-flex h-10 w-[60px] items-center justify-center border border-ink/20 text-ink transition-colors group-hover:bg-primary group-hover:border-primary group-hover:text-white lg:col-start-4"><ArrowRightIcon size={18} aria-hidden="true" /></span>
              </Link>
            ))}
          </RevealGroup>
          <p className="mt-10 text-center text-[16px] text-ink">{s.foot} <Link href={s.footLink.href} className="font-semibold text-ink underline-offset-4 hover:underline">{s.footLink.label}</Link></p>
        </Container>
      </Frame>
    </section>
  );
}
