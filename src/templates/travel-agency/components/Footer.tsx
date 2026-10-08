// The reference's footer is a single thin row: copyright at the left, socials in the middle, a "go top" link
// at the right. The legal links this template needs sit beside the copyright.
import Link from "next/link";
import { ArrowUpIcon } from "@phosphor-icons/react/dist/ssr";
import type { TravelContent } from "../content";
import { Container } from "./ui";

export default function Footer({ brand, f }: { brand: string; f: TravelContent["footer"] }) {
  return (
    <footer className="border-t border-(--t-hairline) bg-canvas">
      <Container className="flex flex-col items-center gap-6 py-8 lg:flex-row lg:justify-between">
        <h2 className="sr-only"><span translate="no">{brand}</span> — site information</h2>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <p className="text-[13px] text-(--t-muted)">©&nbsp;{f.copyrightYear} {f.copyrightName}</p>
          <ul className="m-0 flex list-none flex-wrap gap-x-5 p-0">
            {f.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-9 items-center text-[13px] text-(--t-muted) no-underline transition-colors duration-200 hover:text-ink">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Social">
          <ul className="m-0 flex list-none items-center gap-x-6 p-0">
            {f.socials.map((s) => (
              <li key={s.label}>
                <Link href={s.href} className="inline-flex min-h-9 items-center text-[12px] font-semibold uppercase tracking-[0.12em] text-ink no-underline transition-colors duration-200 hover:text-(--t-primary-deep)">{s.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="#main" className="inline-flex min-h-9 items-center gap-2 text-[13px] font-semibold text-ink no-underline transition-colors duration-200 hover:text-(--t-primary-deep)">
          {f.top}<ArrowUpIcon size={14} weight="bold" aria-hidden="true" />
        </Link>
      </Container>
    </footer>
  );
}
