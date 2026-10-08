// The reference's footer is near-black with the agency's name set across the full width at the foot of the page,
// clipped by the bottom edge. Above it sit the blurb, the contact block and three link columns.
import Link from "next/link";
import type { MarketingContent } from "../content";
import { Container, Label } from "./ui";

export default function Footer({ brand, f }: { brand: string; f: MarketingContent["footer"] }) {
  return (
    <footer className="overflow-hidden bg-ink pt-20 text-(--t-on-dark) nim-on-dark sm:pt-24">
      <Container>
        <h2 className="sr-only">{brand} — site information</h2>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:gap-16">
          <div>
            <p className="font-display text-[24px] font-extrabold tracking-[-0.03em]">{brand}</p>
            <p className="mt-4 max-w-[42ch] text-[16px] leading-[1.65] text-(--t-on-dark)/70">{f.blurb}</p>

            <address className="mt-7 not-italic">
              <ul className="m-0 grid list-none gap-2 p-0 text-[15px] text-(--t-on-dark)/80">
                {f.address.map((line) => <li key={line}>{line}</li>)}
                <li>
                  <Link href={`mailto:${f.email.replace(/[[\]]/g, "")}`} className="inline-flex min-h-[26px] items-center text-(--t-on-dark) underline decoration-(--t-accent) decoration-[3px] underline-offset-4 transition-colors duration-200 hover:text-(--t-accent)">{f.email}</Link>
                </li>
                <li>
                  <Link href={`tel:${f.phone.replace(/[^+\d]/g, "")}`} className="inline-flex min-h-[26px] items-center text-(--t-on-dark) underline decoration-(--t-accent) decoration-[3px] underline-offset-4 transition-colors duration-200 hover:text-(--t-accent)">{f.phone}</Link>
                </li>
              </ul>
            </address>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {f.columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3><Label className="text-(--t-on-dark)/60">{col.title}</Label></h3>
                <ul className="m-0 mt-4 grid list-none gap-2.5 p-0">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link href={l.href} className="inline-flex min-h-[26px] items-center text-[15px] text-(--t-on-dark)/80 no-underline transition-colors duration-200 hover:text-(--t-accent)">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[14px] text-(--t-on-dark)/60">© {f.copyrightYear} {f.copyrightName}. All rights reserved.</p>
          <ul className="m-0 flex list-none flex-wrap gap-x-6 gap-y-2 p-0">
            {f.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-[26px] items-center text-[14px] text-(--t-on-dark)/70 no-underline transition-colors duration-200 hover:text-(--t-accent)">{l.label}</Link>
              </li>
            ))}
          </ul>
          <ul className="m-0 flex list-none flex-wrap gap-x-6 gap-y-2 p-0">
            {f.socials.map((s) => (
              <li key={s.href + s.label}>
                <Link href={s.href} className="inline-flex min-h-[26px] items-center text-[14px] text-(--t-on-dark)/70 no-underline transition-colors duration-200 hover:text-(--t-accent)">{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* The wordmark runs the full width and is cropped by the page edge — decoration, not a heading. */}
      <div aria-hidden="true" className="mt-10 select-none px-4 sm:px-6">
        <p className="mx-auto max-w-[1360px] text-center font-display text-[clamp(56px,15vw,210px)] font-extrabold leading-[0.78] tracking-[-0.05em] text-(--t-on-dark)/[0.08]">
          {f.wordmark}
        </p>
      </div>
    </footer>
  );
}
