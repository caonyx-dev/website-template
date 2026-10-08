"use client";
// 13 The reference's contact band: eyebrow and two-tone headline on the left, the address and the phone and email
// beside brass glyph discs on the right, then a three-across field row, the message, and a full-width brass
// submit. The parchment disclaimer sits beneath, and the map follows. Nothing posts anywhere.
import { useState } from "react";
import { MapPinIcon, PhoneIcon, ChatCircleTextIcon } from "@phosphor-icons/react";
import { Reveal } from "@/components/Reveal";
import type { LawContent } from "../content";
import { Btn, Container, Eyebrow, Num, Title } from "./ui";

type Errors = Partial<Record<"firstName" | "lastName" | "email" | "matter" | "message", string>>;
const ORDER: (keyof Errors)[] = ["firstName", "lastName", "email", "matter", "message"];
const field = "w-full rounded-sm border border-(--t-field-border) bg-soft px-4 py-3 text-[16px] text-ink transition-colors hover:border-(--t-accent-deep) focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--t-primary-subdued) aria-[invalid=true]:border-(--t-error)";
const label = "text-[14px] font-semibold text-ink";

function validate(d: FormData): Errors {
  const next: Errors = {};
  if (!String(d.get("firstName") ?? "").trim()) next.firstName = "Tell us your first name.";
  if (!String(d.get("lastName") ?? "").trim()) next.lastName = "Tell us your last name.";
  const email = String(d.get("email") ?? "").trim();
  if (!email) next.email = "We reply by email, so we need an address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "That address is missing an @ or a domain.";
  if (!d.get("matter")) next.matter = "Choose the area the matter falls under.";
  if (String(d.get("message") ?? "").trim().length < 10) next.message = "A sentence or two is enough to route your enquiry.";
  return next;
}

export default function Contact({ c }: { c: LawContent["contact"] }) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate(new FormData(e.currentTarget));
    setErrors(next);
    const first = ORDER.find((k) => next[k]);
    if (first) { requestAnimationFrame(() => document.getElementById(first)?.focus()); setSent(false); return; }
    setSent(true);
    e.currentTarget.reset();
  }

  /** Clear a field's error as soon as it becomes valid, rather than leaving it red until the next submit. */
  function recheck(e: React.FocusEvent<HTMLFormElement> | React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget as HTMLFormElement;
    setErrors((prev) => {
      if (Object.keys(prev).length === 0) return prev;
      const fresh = validate(new FormData(form));
      const next: Errors = {};
      (Object.keys(prev) as (keyof Errors)[]).forEach((k) => { if (fresh[k]) next[k] = fresh[k]; });
      return next;
    });
  }

  const err = (k: keyof Errors) => ({ "aria-invalid": errors[k] ? true : undefined, "aria-describedby": errors[k] ? `${k}-error` : undefined });
  const msg = (k: keyof Errors) => errors[k] ? <span id={`${k}-error`} role="alert" className="mt-1 block text-[14px] text-(--t-error)">{errors[k]}</span> : null;

  return (
    <section id="contact" className="scroll-mt-[112px] bg-canvas pt-20 lg:pt-28" aria-labelledby="contact-title">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
          <div>
            <Reveal><Eyebrow>{c.eyebrow}</Eyebrow></Reveal>
            <Reveal delay={0.08}><Title id="contact-title" lead={c.titleLead} em={c.titleEm} className="mt-7 max-w-[14ch]" /></Reveal>
          </div>
          <Reveal delay={0.16}>
            <dl className="m-0 grid items-start gap-6 sm:grid-cols-2">
              <div className="flex gap-4">
                <dt className="shrink-0"><span className="sr-only">Office</span><span aria-hidden="true" className="inline-flex size-12 items-center justify-center rounded-full bg-(--t-accent-soft) text-(--t-accent-deep)"><MapPinIcon size={22} weight="light" /></span></dt>
                <dd className="m-0 grid content-start gap-1 text-[16px] leading-[1.6] text-(--t-ink-secondary)">{c.address.map((l) => <span key={l}>{l}</span>)}</dd>
              </div>
              <div className="grid gap-5">
                <div className="flex items-center gap-4">
                  <dt className="shrink-0"><span className="sr-only">Telephone</span><span aria-hidden="true" className="inline-flex size-12 items-center justify-center rounded-full bg-(--t-accent-soft) text-(--t-accent-deep)"><PhoneIcon size={22} weight="light" /></span></dt>
                  <dd className="m-0 text-[16px]"><a href={`tel:${c.phone.replace(/[^\d+]/g, "")}`} className="text-(--t-ink-secondary) no-underline transition-colors hover:text-primary hover:underline"><Num>{c.phone}</Num></a></dd>
                </div>
                <div className="flex items-center gap-4">
                  <dt className="shrink-0"><span className="sr-only">Email</span><span aria-hidden="true" className="inline-flex size-12 items-center justify-center rounded-full bg-(--t-accent-soft) text-(--t-accent-deep)"><ChatCircleTextIcon size={22} weight="light" /></span></dt>
                  <dd className="m-0 min-w-0 break-words text-[16px]"><a href={`mailto:${c.email.replace(/[[\]]/g, "")}`} className="text-(--t-ink-secondary) no-underline transition-colors hover:text-primary hover:underline">{c.email}</a></dd>
                </div>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={submit} onBlur={recheck} onInput={recheck} noValidate className="mt-12">
            <div className="grid gap-5 md:grid-cols-3">
              <div className="grid gap-1.5"><label htmlFor="firstName" className={label}>{c.form.firstName}</label><input id="firstName" name="firstName" required autoComplete="given-name" spellCheck={false} className={field} {...err("firstName")} />{msg("firstName")}</div>
              <div className="grid gap-1.5"><label htmlFor="lastName" className={label}>{c.form.lastName}</label><input id="lastName" name="lastName" required autoComplete="family-name" spellCheck={false} className={field} {...err("lastName")} />{msg("lastName")}</div>
              <div className="grid gap-1.5"><label htmlFor="email" className={label}>{c.form.email}</label><input id="email" name="email" type="email" required autoComplete="email" spellCheck={false} className={field} {...err("email")} />{msg("email")}</div>
            </div>
            <div className="mt-5 grid gap-1.5"><label htmlFor="matter" className={label}>{c.form.matter}</label><select id="matter" name="matter" required defaultValue="" autoComplete="off" className={`${field} h-[50px]`} {...err("matter")}><option value="" disabled>Select…</option>{c.form.matters.map((m) => <option key={m}>{m}</option>)}</select>{msg("matter")}</div>
            <div className="mt-5 grid gap-1.5"><label htmlFor="message" className={label}>{c.form.message}</label><textarea id="message" name="message" rows={6} required className={field} {...err("message")} />{msg("message")}</div>
            <div className="mt-7"><Btn type="submit" className="w-full">{c.form.submit}</Btn></div>
            <p role="status" aria-live="polite" className="mt-3 min-h-5 text-center text-[15px] text-(--t-success)">{sent ? c.form.confirm : ""}</p>
            <p className="mt-6 rounded-lg bg-soft2 p-5 text-[13px] leading-[1.6] text-(--t-ink-secondary)">{c.disclaimer}</p>
          </form>
        </Reveal>
      </Container>

      <Reveal delay={0.1} className="mt-16 lg:mt-20">
        <h2 className="sr-only">Where to find us</h2>
        <iframe title={c.map.title} src={c.map.src} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block h-[360px] w-full border-0 grayscale-[0.4] lg:h-[420px]" />
        <Container><p className="mt-4 text-[14px] text-mute"><a href={c.map.href} target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-accent underline-offset-[3px] transition-colors hover:text-(--t-primary-deep)">{c.map.linkLabel}</a></p></Container>
      </Reveal>
    </section>
  );
}
