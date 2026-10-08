// The dark footer the DESIGN.md requires at the end of every page, and the only dark surface in the system.
// It repeats the address, the phone and the service area, because that is what a local customer scrolls to
// the bottom to find.
import Link from "next/link";
import { EnvelopeSimpleIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react/dist/ssr";
import type { SmallBusinessContent } from "../content";
import { Container } from "./ui";

export default function Footer({ brand, f }: { brand: string; f: SmallBusinessContent["footer"] }) {
  return (
    <footer className="bg-(--t-dark) text-(--t-on-dark-soft) sb-on-dark">
      <Container className="py-14">
        <h2 className="sr-only"><span translate="no">{brand}</span> — site information</h2>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.2fr)]">
          <div>
            <p translate="no" className="font-display text-[22px] font-bold text-(--t-on-dark)">{brand}</p>
            <p className="mt-4 max-w-[38ch] text-[14px] leading-[1.7]">{f.blurb}</p>
            <ul role="list" className="m-0 mt-5 flex list-none gap-x-5 p-0">
              {f.socials.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="inline-flex min-h-10 items-center text-[14px] text-(--t-on-dark-soft) no-underline transition-colors duration-200 hover:text-(--t-on-dark)">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {f.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-[15px] font-semibold text-(--t-on-dark)">{col.title}</h3>
              <ul role="list" className="m-0 mt-4 grid list-none gap-1 p-0">
                {col.links.map((l) => (
                  <li key={col.title + l.label}>
                    <Link href={l.href} className="inline-flex min-h-9 items-center text-[14px] text-(--t-on-dark-soft) no-underline transition-colors duration-200 hover:text-(--t-on-dark)">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="text-[15px] font-semibold text-(--t-on-dark)">{f.contact.title}</h3>
            <address className="mt-4 grid gap-3 not-italic">
              <span className="flex items-start gap-2.5 text-[14px] leading-[1.6]">
                <MapPinIcon size={16} aria-hidden="true" className="mt-0.5 shrink-0" />
                <span>{f.contact.address.map((a) => <span key={a} className="block">{a}</span>)}</span>
              </span>
              <Link href={`tel:${f.contact.phone.replace(/[^+\d]/g, "")}`} className="inline-flex min-h-10 items-center gap-2.5 text-[14px] text-(--t-on-dark) no-underline underline-offset-4 hover:underline">
                <PhoneIcon size={16} aria-hidden="true" />{f.contact.phone}
              </Link>
              <Link href={`mailto:${f.contact.email.replace(/[[\]]/g, "")}`} className="inline-flex min-h-10 items-center gap-2.5 text-[14px] text-(--t-on-dark) no-underline underline-offset-4 hover:underline">
                <EnvelopeSimpleIcon size={16} aria-hidden="true" />{f.contact.email}
              </Link>
            </address>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/15">
        <Container className="flex flex-col gap-4 py-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-[70ch] text-[12px] leading-[1.6]">
            {f.registration} © {f.copyrightYear} {f.copyrightName}.
          </p>
          <ul role="list" className="m-0 flex list-none flex-wrap gap-x-5 p-0">
            {f.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-9 items-center text-[13px] text-(--t-on-dark-soft) no-underline transition-colors duration-200 hover:text-(--t-on-dark)">{l.label}</Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
