// The reference's footer: the wordmark and a blurb beside link columns and the sign-up. Here it sits on the
// blush surface the DESIGN.md names, and the `newsletter-band` that file defines is folded into the fourth
// column rather than given its own band, which is how the reference arranges it.
"use client";
import Link from "next/link";
import { useId, useState } from "react";
import { WarningCircleIcon } from "@phosphor-icons/react";
import type { RetailContent } from "../content";
import { Btn, Container } from "./ui";

export default function Footer({ brand, f, n }: { brand: string; f: RetailContent["footer"]; n: RetailContent["newsletter"] }) {
  const fieldId = useId();
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
      setError(n.error);
      setSent(false);
      document.getElementById(fieldId)?.focus();
      return;
    }
    setError(null);
    setSent(true);
  };

  return (
    <footer className="bg-(--t-soft)">
      <Container className="py-14 sm:py-16">
        <h2 className="sr-only">{brand} — site information</h2>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)] lg:gap-14">
          <div>
            <p translate="no" className="font-display text-[26px] font-bold lowercase tracking-[-0.03em] text-ink">{brand}</p>
            <p className="mt-4 max-w-[42ch] text-[14px] leading-[1.7] text-(--t-body)">{f.blurb}</p>

            <h3 className="mt-7 text-[12px] font-bold uppercase tracking-[0.08em] text-ink">{f.socialTitle}</h3>
            <ul className="m-0 mt-2 flex list-none flex-wrap gap-x-5 p-0">
              {f.socials.map((s) => (
                <li key={s.href + s.label}>
                  <Link href={s.href} className="inline-flex min-h-10 items-center text-[14px] text-(--t-body) no-underline transition-colors duration-200 hover:text-primary">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {f.columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="text-[12px] font-bold uppercase tracking-[0.08em] text-ink">{col.title}</h3>
                <ul className="m-0 mt-3 grid list-none gap-1 p-0">
                  {col.links.map((l) => (
                    <li key={col.title + l.label}>
                      <Link href={l.href} className="inline-flex min-h-9 items-center text-[14px] text-(--t-body) no-underline transition-colors duration-200 hover:text-primary">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div>
              <h3 className="text-[12px] font-bold uppercase tracking-[0.08em] text-ink">{n.title}</h3>
              <p className="mt-3 text-[14px] leading-[1.6] text-(--t-body)">{n.text}</p>

              <form noValidate onSubmit={submit} className="mt-4">
                <label htmlFor={fieldId} className="block text-[12px] font-semibold text-ink">{n.label}</label>
                <input
                  id={fieldId}
                  type="email"
                  name="email"
                  autoComplete="email"
                  inputMode="email"
                  spellCheck={false}
                  value={value}
                  onChange={(e) => { setValue(e.target.value); if (error) setError(null); }}
                  placeholder={n.placeholder}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? `${fieldId}-err ${fieldId}-consent` : `${fieldId}-consent`}
                  className="mt-1.5 min-h-12 w-full rounded-lg border border-(--t-hairline) bg-canvas px-3.5 text-[15px] text-ink placeholder:text-(--t-muted) focus-visible:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-(--t-focus)"
                />
                {error && (
                  <p id={`${fieldId}-err`} className="mt-2 flex items-center gap-1.5 text-[13px] font-semibold text-(--t-error)">
                    <WarningCircleIcon size={15} weight="fill" aria-hidden="true" />{error}
                  </p>
                )}
                <Btn type="submit" className="mt-3 w-full">{n.submit}</Btn>
                <p role="status" className="mt-2 text-[13px] font-semibold text-ink">{sent ? n.confirm : ""}</p>
                <p id={`${fieldId}-consent`} className="mt-2 text-[12px] leading-[1.5] text-(--t-muted)">
                  {n.consent}{" "}
                  <Link href={n.privacy.href} className="text-ink underline decoration-(--t-accent) decoration-[3px] underline-offset-2">{n.privacy.label}</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-(--t-hairline)">
        <Container className="flex flex-col gap-4 py-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[13px] text-(--t-muted)">©&nbsp;{f.copyrightYear} {f.copyrightName}. All rights reserved.</p>

          <ul className="m-0 flex list-none flex-wrap gap-x-5 p-0">
            {f.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-9 items-center text-[13px] text-(--t-muted) no-underline transition-colors duration-200 hover:text-ink">{l.label}</Link>
              </li>
            ))}
          </ul>

          {/* Bracketed rather than drawn: this template's DESIGN.md forbids showing a payment provider's mark
              the shop has not been licensed to show. */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-(--t-muted)">{f.paymentsTitle}</span>
            <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
              {f.payments.map((p) => (
                <li key={p} className="rounded-xs border border-(--t-hairline) bg-canvas px-2 py-1 text-[11px] font-semibold text-(--t-muted)">{p}</li>
              ))}
            </ul>
          </div>
        </Container>
        <Container className="pb-6">
          <p className="text-[12px] leading-[1.6] text-(--t-muted)">{f.paymentsNote}</p>
        </Container>
      </div>
    </footer>
  );
}
