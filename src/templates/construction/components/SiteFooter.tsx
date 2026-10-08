// Graphite footer: wordmark and blurb, Services / Projects / Company / Contact columns, then a bottom bar
// with licence, registration and service-area placeholders, legal links and copyright.
import type { ConstructionContent } from "../content";
import { Container } from "./ui";

export default function SiteFooter({ brand, f }: { brand: string; f: ConstructionContent["footer"] }) {
  return (
    <footer className="bg-dark pb-24 pt-16 text-on-dark-muted md:pb-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
          <div className="grid content-start gap-3">
            <span className="font-display text-[24px] font-bold text-on-dark" translate="no">{brand}</span>
            <p className="max-w-[32ch] text-[15px] leading-[1.55]">{f.blurb}</p>
          </div>
          {f.columns.map((col) => (
            <div key={col.label} className="grid content-start gap-2.5">
              <span className="text-[12px] font-medium uppercase tracking-[.08em] text-on-dark">{col.label}</span>
              <ul className="grid gap-2 text-[15px]">{col.items.map((l) => <li key={l.href}><a href={l.href} className="text-on-dark-muted no-underline hover:text-on-dark hover:underline">{l.label}</a></li>)}</ul>
            </div>
          ))}
          <div className="grid content-start gap-2.5 text-[15px]">
            <span className="text-[12px] font-medium uppercase tracking-[.08em] text-on-dark">Contact</span>
            <span>{f.contact.address}</span>
            <a href={`tel:${f.contact.phone.replace(/[^+\d]/g, "")}`} className="text-on-dark no-underline hover:underline">{f.contact.phone}</a>
            <a href={`mailto:${f.contact.email.replace(/[\[\]]/g, "")}`} className="text-on-dark no-underline hover:underline">{f.contact.email}</a>
            <span>{f.contact.hours}</span>
          </div>
        </div>
        <div className="mt-12 grid gap-3 border-t border-white/10 pt-6 text-[13px]">
          <p>{f.registration}</p>
          <p>{f.area}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>{f.legal}</span>
            {f.links.map((l) => <a key={l.href} href={l.href} className="text-on-dark-muted underline underline-offset-2 hover:text-on-dark">{l.label}</a>)}
          </div>
        </div>
      </Container>
    </footer>
  );
}
