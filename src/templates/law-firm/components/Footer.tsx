// 14 The reference's four-column dark footer: the wordmark with a line about the firm and the contact block, the
// Links and Support columns, and a six-tile gallery. A brass rule closes it over the notice and the legal row.
import Link from "next/link";
import Image from "next/image";
import { PhoneIcon, EnvelopeSimpleIcon, HouseLineIcon } from "@phosphor-icons/react/dist/ssr";
import type { LawContent } from "../content";
import { Container, Num } from "./ui";

const slug = (s: string) => `foot-${s.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

export default function Footer({ brand, f }: { brand: string; f: LawContent["footer"] }) {
  return (
    <footer className="law-on-dark bg-dark text-(--t-on-dark-muted)">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_repeat(2,minmax(0,0.8fr))_minmax(0,1fr)] lg:gap-10">
          <div>
            <p className="font-display text-[30px] font-semibold text-white" translate="no">{brand}</p>
            <p className="mt-5 max-w-[34ch] text-[15px] leading-[1.7]">{f.blurb}</p>
            <ul role="list" className="mt-7 grid list-none gap-3 p-0 text-[15px]">
              <li><a href={`tel:${f.phone.replace(/[^\d+]/g, "")}`} className="inline-flex min-h-11 items-center gap-3 no-underline transition-colors hover:text-white hover:underline active:text-white"><PhoneIcon size={18} weight="light" aria-hidden="true" className="text-accent" /><Num>{f.phone}</Num></a></li>
              <li><a href={`mailto:${f.email.replace(/[[\]]/g, "")}`} className="inline-flex min-h-11 items-center gap-3 break-all no-underline transition-colors hover:text-white hover:underline active:text-white"><EnvelopeSimpleIcon size={18} weight="light" aria-hidden="true" className="text-accent" />{f.email}</a></li>
              <li className="flex gap-3"><HouseLineIcon size={18} weight="light" aria-hidden="true" className="mt-1 shrink-0 text-accent" /><span className="grid">{f.address.map((l) => <span key={l}>{l}</span>)}</span></li>
            </ul>
          </div>

          {f.links.map((col) => (
            <nav key={col.title} aria-labelledby={slug(col.title)}>
              <h2 id={slug(col.title)} className="font-display text-[22px] font-semibold uppercase tracking-[1px] text-white">{col.title}</h2>
              <ul role="list" className="mt-5 grid list-none gap-1 p-0 text-[15px]">
                {col.items.map((l) => <li key={l.label}><Link href={l.href} className="inline-flex min-h-11 items-center no-underline transition-colors hover:text-white hover:underline active:text-white">{l.label}</Link></li>)}
              </ul>
            </nav>
          ))}

          <div>
            <h2 id="foot-gallery" className="font-display text-[22px] font-semibold uppercase tracking-[1px] text-white">{f.gallery.title}</h2>
            <ul role="list" aria-labelledby="foot-gallery" className="mt-5 grid list-none grid-cols-3 gap-2 p-0">
              {f.gallery.items.map((img, i) => (
                <li key={i}>
                  <span className="relative block overflow-hidden rounded-xs" style={{ aspectRatio: "1 / 1" }}>
                    <Image src={img.src} alt={img.alt} fill placeholder="blur" sizes="90px" className="object-cover" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-accent">
        <Container className="py-7">
          <p className="max-w-[90ch] text-[12px] leading-[1.6]">{f.notice}</p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-5 text-[13px]">
            <p>{f.copyright}</p>
            <ul role="list" className="flex list-none flex-wrap gap-5 p-0">
              {f.legal.map((l) => <li key={l.label}><Link href={l.href} className="inline-flex min-h-11 items-center no-underline transition-colors hover:text-white hover:underline active:text-white">{l.label}</Link></li>)}
            </ul>
            <ul role="list" className="flex list-none flex-wrap gap-5 p-0">
              {f.socials.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center no-underline transition-colors hover:text-white hover:underline active:text-white">{s.label}</a></li>)}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
}
