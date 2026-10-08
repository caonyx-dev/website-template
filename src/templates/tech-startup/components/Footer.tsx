"use client";
// The near-black footer card: wordmark, blurb and socials, two link columns, and the newsletter with
// an orange circular submit. The field has a real visible label (PRODUCT.md) and posts nowhere.
import { useId, useState } from "react";
import { PaperPlaneRightIcon } from "@phosphor-icons/react";
import { Wrap } from "./ui";
import type { TechStartupContent } from "../content";

export default function Footer({ brand, f, id }: { brand: string; f: TechStartupContent["footer"]; id: string }) {
  const uid = useId().replace(/:/g, "");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const email = String(new FormData(ev.currentTarget).get("email") ?? "").trim();
    if (!email) return setError("Please add an email address.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("That email address does not look right.");
    setError("");
    setSent(true);
  }

  return (
    <footer id={id} className="bg-canvas pb-5 sm:pb-6">
      <Wrap>
        <div className="rounded-[20px] bg-dark px-5 py-16 text-on-dark sm:px-10 sm:py-20 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.7fr)_minmax(0,0.7fr)_minmax(0,1.1fr)] lg:gap-10">
            <div>
              <p className="flex items-center gap-2.5 font-display text-[26px] font-semibold tracking-[-0.02em] text-on-dark">
                <span aria-hidden className="grid size-7 place-items-center rounded-[5px] bg-primary">
                  <span className="size-2.5 rotate-45 bg-dark" />
                </span>
                {brand}
              </p>
              <p className="mt-6 max-w-[300px] font-body text-[16px] leading-[1.5] text-on-dark-muted">{f.blurb}</p>
              <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                {f.socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} className="font-body text-[15px] text-on-dark-muted hover:text-on-dark">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {f.columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="font-display text-[20px] font-medium text-on-dark">{col.title}</h2>
                <ul className="mt-6 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="font-body text-[16px] text-on-dark-muted hover:text-on-dark">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div>
              <h2 className="font-display text-[20px] font-medium text-on-dark">{f.newsletter.title}</h2>
              <p className="mt-6 font-body text-[16px] leading-[1.5] text-on-dark-muted">{f.newsletter.blurb}</p>

              {sent ? (
                <p role="status" className="mt-6 rounded-[12px] bg-white/10 p-5 font-body text-[15px] leading-[1.5] text-on-dark">
                  {f.newsletter.success}
                </p>
              ) : (
                <form noValidate onSubmit={onSubmit} className="mt-6">
                  <label htmlFor={`${uid}-email`} className="mb-2.5 block font-body text-[14px] text-on-dark-muted">
                    {f.newsletter.label}
                  </label>
                  <div className="flex items-center gap-2 rounded-full border border-[var(--t-hairline-dark)] bg-white/5 p-1.5 pl-5 focus-within:border-on-dark">
                    <input
                      id={`${uid}-email`}
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder={f.newsletter.placeholder}
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? `${uid}-err` : undefined}
                      className="min-w-0 flex-1 bg-transparent py-3 font-body text-[16px] text-on-dark placeholder:text-on-dark-muted/70 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="grid size-12 shrink-0 place-items-center rounded-full bg-primary text-on-primary transition-colors duration-300 hover:bg-[var(--t-primary-hover)]"
                    >
                      <span className="sr-only">{f.newsletter.submit}</span>
                      <PaperPlaneRightIcon size={18} weight="light" aria-hidden />
                    </button>
                  </div>
                  {error && (
                    <p id={`${uid}-err`} className="mt-2.5 px-2 font-body text-[13px] text-[var(--t-error)]">
                      {error}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>

          <hr className="mt-14 border-0 border-t border-[var(--t-hairline-dark)]" />

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-body text-[14px] text-on-dark-muted">
              © {f.copyrightYear} {brand}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {f.legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="font-body text-[14px] text-on-dark-muted hover:text-on-dark">
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
