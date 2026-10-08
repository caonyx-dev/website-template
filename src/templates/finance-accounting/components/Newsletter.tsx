"use client";
// Footer newsletter: underline email field with an arrow button and a privacy consent checkbox (the policy
// link sits beside the label, not inside it). Submits nowhere yet: inline confirmation only.
import { useState } from "react";
import { ArrowRightIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react";
import type { FinanceContent } from "../content";

export default function Newsletter({ n }: { n: FinanceContent["footer"]["newsletter"] }) {
  const [done, setDone] = useState(false);
  if (done) return <p role="status" className="mt-5 text-[16px] text-white/80">Thanks. We will confirm your address by email.</p>;
  return (
    <form onSubmit={(e) => { e.preventDefault(); if ((e.currentTarget as HTMLFormElement).reportValidity()) setDone(true); }} className="mt-5">
      <div className="relative">
        <label htmlFor="nl-email" className="sr-only">Email address</label>
        <EnvelopeSimpleIcon size={20} weight="light" className="pointer-events-none absolute left-0 top-4 text-white/80" aria-hidden="true" />
        <input id="nl-email" name="email" type="email" required placeholder={n.placeholder} autoComplete="email" spellCheck={false} className="h-13 w-full border-0 border-b border-white/30 bg-transparent pl-8 pr-12 text-[16px] text-white placeholder:text-white/60 focus-visible:border-b-2 focus-visible:border-accent focus-visible:outline-none" />
        <button type="submit" aria-label="Subscribe" className="absolute right-0 top-1 inline-flex h-11 w-11 items-center justify-center text-white hover:text-accent"><ArrowRightIcon size={22} weight="bold" aria-hidden="true" /></button>
      </div>
      <div className="mt-3 flex min-h-11 flex-wrap items-center gap-x-1.5 gap-y-1 text-[14px] text-white/70">
        <input id="nl-consent" name="consent" type="checkbox" required className="mr-1.5 h-[18px] w-[18px] accent-(--t-accent)" />
        <label htmlFor="nl-consent">{n.consent}</label>
        <a href={n.privacy.href} className="text-white underline underline-offset-4 hover:text-accent">{n.privacy.label}</a>.
      </div>
    </form>
  );
}
