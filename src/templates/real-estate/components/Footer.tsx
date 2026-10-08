// Footer: a white rounded card lifted over the grey closing band, with the contact details set large
// and underlined in lime — the one place the accent touches type without filling behind it.
import { Wrap } from "./ui";
import type { RealEstateContent } from "../content";

export default function Footer({ brand, f }: { brand: string; f: RealEstateContent["footer"] }) {
  return (
    <footer className="bg-[var(--t-grey-band)] pb-5 sm:pb-6">
      <Wrap>
        <div className="rounded-[32px] bg-canvas p-7 sm:rounded-[50px] sm:p-12 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.7fr)_minmax(0,0.7fr)_minmax(0,1.2fr)] lg:gap-12">
            <div>
              <p className="flex items-center gap-2.5 font-display text-[26px] font-bold tracking-[-0.02em] text-ink">
                <span aria-hidden className="grid size-8 place-items-center rounded-[10px] bg-primary">
                  <span className="size-3 rounded-[3px] bg-ink" />
                </span>
                {brand}
              </p>
              <p className="mt-6 max-w-[320px] font-body text-[16px] leading-[1.55] text-body">{f.blurb}</p>
            </div>

            {f.columns.map((col, i) => (
              <nav key={i} aria-label={i === 0 ? "Company" : "Resources"} className="lg:border-l lg:border-hairline lg:pl-10">
                <ul className="space-y-3.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="font-body text-[16px] font-medium text-ink hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div className="lg:border-l lg:border-hairline lg:pl-10">
              <a
                href={`tel:${f.phone.replace(/[^\d+]/g, "")}`}
                className="block font-display text-[clamp(1.25rem,2.2vw,1.75rem)] font-bold tracking-[-0.02em] text-ink decoration-primary decoration-[3px] underline underline-offset-[6px]"
              >
                {f.phone}
              </a>
              <a
                href={`mailto:${f.email.replace(/[[\]]/g, "")}`}
                className="mt-5 block break-all font-display text-[clamp(1.25rem,2.2vw,1.75rem)] font-bold tracking-[-0.02em] text-ink decoration-primary decoration-[3px] underline underline-offset-[6px]"
              >
                {f.email}
              </a>
              <ul className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
                {f.socials.map((s, i) => (
                  <li key={s.label} className="flex items-center gap-4">
                    {i > 0 && <span aria-hidden className="size-1 rounded-full bg-hairline-strong" />}
                    <a href={s.href} className="font-body text-[15px] text-body hover:text-ink">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="mt-12 border-0 border-t border-hairline" />

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-body text-[13px] text-mute">
              © {f.copyrightYear} <span className="font-semibold text-body">{brand}</span>. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {f.legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="font-body text-[13px] text-mute hover:text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrap>
    </footer>
  );
}
