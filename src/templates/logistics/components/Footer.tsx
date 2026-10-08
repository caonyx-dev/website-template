// 15 The slate footer: the wordmark with a line about the company and the contact block, two link columns, and
// the accreditation placeholders, closed by the legal row. The phone is visible here as the DESIGN.md requires.
import Link from "next/link";
import { PhoneIcon, EnvelopeSimpleIcon, MapPinIcon } from "@phosphor-icons/react/dist/ssr";
import type { LogisticsContent } from "../content";
import { Container, Mono } from "./ui";

const slug = (s: string) => `foot-${s.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

export default function Footer({ brand, f }: { brand: string; f: LogisticsContent["footer"] }) {
  return (
    <footer className="log-on-dark bg-dark text-(--t-on-dark-muted)">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_repeat(2,minmax(0,0.8fr))_minmax(0,1fr)] lg:gap-10">
          <div>
            <p className="font-display text-[28px] font-bold uppercase tracking-[-0.02em] text-white" translate="no">{brand}</p>
            <p className="mt-5 max-w-[34ch] text-[15px] leading-[1.7]">{f.blurb}</p>
            <ul role="list" className="mt-7 grid list-none gap-2 p-0 text-[15px]">
              <li><a href={`tel:${f.phone.replace(/[^\d+]/g, "")}`} className="inline-flex min-h-11 items-center gap-3 no-underline transition-colors hover:text-white hover:underline"><PhoneIcon size={18} weight="bold" aria-hidden="true" className="text-primary" /><Mono>{f.phone}</Mono></a></li>
              <li><a href={`mailto:${f.email.replace(/[[\]]/g, "")}`} className="inline-flex min-h-11 items-center gap-3 break-all no-underline transition-colors hover:text-white hover:underline"><EnvelopeSimpleIcon size={18} weight="bold" aria-hidden="true" className="text-primary" />{f.email}</a></li>
              <li className="flex gap-3 py-1"><MapPinIcon size={18} weight="bold" aria-hidden="true" className="mt-1 shrink-0 text-primary" /><span className="grid">{f.address.map((l) => <span key={l}>{l}</span>)}</span></li>
            </ul>
          </div>

          {f.columns.map((col) => (
            <nav key={col.title} aria-labelledby={slug(col.title)}>
              <h2 id={slug(col.title)} className="font-display text-[18px] font-bold uppercase tracking-[0.04em] text-white">{col.title}</h2>
              <ul role="list" className="mt-5 grid list-none gap-1 p-0 text-[15px]">
                {col.links.map((l) => <li key={l.label}><Link href={l.href} className="inline-flex min-h-11 items-center no-underline transition-colors hover:text-white hover:underline">{l.label}</Link></li>)}
              </ul>
            </nav>
          ))}

          <div>
            <h2 id="foot-accreditations" className="font-display text-[18px] font-bold uppercase tracking-[0.04em] text-white">{f.certifications.title}</h2>
            <ul role="list" aria-labelledby="foot-accreditations" className="mt-5 grid list-none gap-2 p-0">
              {f.certifications.items.map((c) => (
                <li key={c} className="rounded-[12px] border border-white/35 px-3 py-2.5 text-[13px]"><Mono>{c}</Mono></li>
              ))}
            </ul>
            <p className="mt-3 text-[12px] leading-[1.5]">{f.certifications.note}</p>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/15">
        <Container className="flex flex-wrap items-center justify-between gap-5 py-7 text-[13px]">
          <p>© {f.copyrightYear} {f.copyrightName}. All rights reserved.</p>
          <ul role="list" className="flex list-none flex-wrap gap-5 p-0">
            {f.legal.map((l) => <li key={l.label}><Link href={l.href} className="inline-flex min-h-11 items-center no-underline transition-colors hover:text-white hover:underline">{l.label}</Link></li>)}
          </ul>
          <ul role="list" className="flex list-none flex-wrap gap-5 p-0">
            {f.socials.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center no-underline transition-colors hover:text-white hover:underline">{s.label}<span className="sr-only"> (opens in a new tab)</span></a></li>)}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
