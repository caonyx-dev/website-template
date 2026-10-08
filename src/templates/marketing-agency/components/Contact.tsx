// The reference's closing split: a photograph on one side and a saturated panel on the other carrying the sign-up.
// The reference's panel is teal; this template has one action colour, so it is violet. The field validates in the
// browser and posts nowhere — it keeps what was typed on success, so a typed address is never thrown away.
"use client";
import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import { ArrowRightIcon, WarningCircleIcon } from "@phosphor-icons/react";
import { Reveal } from "@/components/Reveal";
import type { MarketingContent } from "../content";
import { Container, Eyebrow, Label } from "./ui";

export default function Contact({ c }: { c: MarketingContent["contact"] }) {
  const fieldId = useId();
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
    if (!ok) {
      setError(c.form.error);
      setSent(false);
      document.getElementById(fieldId)?.focus();
      return;
    }
    setError(null);
    setSent(true);
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-28 bg-(--t-soft) py-20 sm:py-28">
      <Container>
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          <Reveal from="scale">
            <Image src={c.image.src} alt={c.image.alt} placeholder="blur" sizes="(min-width: 1024px) 48vw, 100vw" className="size-full rounded-[24px] object-cover" />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-[24px] bg-primary p-8 text-(--t-on-primary) sm:p-10">
              <Eyebrow className="text-(--t-on-primary) [&>span]:bg-(--t-accent)">{c.eyebrow}</Eyebrow>
              <h2 id="contact-title" className="mt-5 font-display text-[32px] font-extrabold leading-[1.05] tracking-[-0.03em] text-balance sm:text-[42px]">{c.title}</h2>
              <p className="mt-4 max-w-[48ch] text-[16px] leading-[1.65] text-(--t-on-primary)/85">{c.text}</p>

              <form noValidate onSubmit={submit} className="mt-8">
                <label htmlFor={fieldId} className="block text-[14px] font-semibold">{c.form.label}</label>
                <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                  <input
                    id={fieldId}
                    type="email"
                    name="email"
                    autoComplete="email"
                    inputMode="email"
                    spellCheck={false}
                    value={value}
                    onChange={(e) => { setValue(e.target.value); if (error) setError(null); }}
                    placeholder={c.form.placeholder}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? `${fieldId}-err` : `${fieldId}-note`}
                    className="min-h-[56px] w-full rounded-full bg-canvas px-5 text-[16px] text-ink placeholder:text-(--t-mute) focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--t-accent)"
                  />
                  <button
                    type="submit"
                    className="group inline-flex min-h-[56px] shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-7 text-[16px] font-semibold text-(--t-on-dark) transition-colors duration-200 hover:bg-(--t-dark-2) focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--t-accent)"
                  >
                    {c.form.submit}
                    <ArrowRightIcon size={17} weight="bold" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
                  </button>
                </div>

                {error && (
                  <p id={`${fieldId}-err`} className="mt-3 flex items-center gap-2 rounded-[12px] bg-canvas px-4 py-2.5 text-[14px] font-medium text-(--t-error)">
                    <WarningCircleIcon size={16} weight="fill" aria-hidden="true" />{error}
                  </p>
                )}
                <p id={`${fieldId}-note`} className="mt-3 text-[13px] leading-[1.6] text-(--t-on-primary)/80">{c.form.note}</p>
                <p role="status" className="mt-3 text-[14px] font-medium">{sent ? c.form.confirm : ""}</p>
              </form>

              <dl className="m-0 mt-8 grid gap-4 border-t border-white/25 pt-7 sm:grid-cols-2">
                <div>
                  <dt><Label className="text-(--t-on-primary)/75">Email</Label></dt>
                  <dd className="m-0">
                    <Link href={`mailto:${c.email.replace(/[[\]]/g, "")}`} className="inline-flex min-h-11 items-center text-[16px] font-medium text-(--t-on-primary) underline decoration-(--t-accent) decoration-[3px] underline-offset-4 transition-colors duration-200 hover:text-(--t-accent)">{c.email}</Link>
                  </dd>
                </div>
                <div>
                  <dt><Label className="text-(--t-on-primary)/75">Phone</Label></dt>
                  <dd className="m-0">
                    <Link href={`tel:${c.phone.replace(/[^+\d]/g, "")}`} className="inline-flex min-h-11 items-center text-[16px] font-medium text-(--t-on-primary) underline decoration-(--t-accent) decoration-[3px] underline-offset-4 transition-colors duration-200 hover:text-(--t-accent)">{c.phone}</Link>
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
