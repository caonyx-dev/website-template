"use client";
// "Get in touch!" like the reference contact block: eyebrow, headline, text and the address, phone and email
// with teal icons (plus the client-portal line) on the left; on the right, underline-only fields with an icon
// with a small label above (name, email, phone, business type, turnover, message), the teal "Request a quote" button and the consent
// checkbox. Inline validation; anime.js fades the confirmation in (skipped under reduced motion).
import { useRef, useState } from "react";
import { animate } from "animejs";
import { ArrowSquareOutIcon, BriefcaseIcon, ChartBarIcon, EnvelopeSimpleIcon, MapPinIcon, PaperPlaneTiltIcon, PencilSimpleLineIcon, PhoneCallIcon, UserIcon } from "@phosphor-icons/react";
import { Reveal, Words, useReducedMotionSafe } from "@/components/Reveal";
import type { FinanceContent } from "../content";
import { Btn, Container, Eyebrow, Num } from "./ui";

const field = "h-14 w-full border-0 border-b border-hairline-strong bg-transparent px-0 text-[16px] text-ink placeholder:text-mute focus-visible:border-b-2 focus-visible:border-primary focus-visible:outline-none aria-[invalid=true]:border-(--t-error)";

type Props = { id: string; label: string; icon: React.ReactNode; error?: string; invalid: boolean; children: React.ReactNode; className?: string };
function Field({ id, label, icon, error, invalid, children, className = "" }: Props) {
  return (
    <div className={`relative grid gap-1 ${className}`}>
      <label htmlFor={id} className="font-display text-[11px] font-bold uppercase tracking-[.14em] text-mute">{label}</label>
      <span className="pointer-events-none absolute left-0 top-[38px] text-ink" aria-hidden="true">{icon}</span>
      <div className="[&>input]:pl-9 [&>select]:pl-9 [&>textarea]:pl-9">{children}</div>
      {error && <span id={`${id}-err`} className={`text-[12px] text-(--t-error) ${invalid ? "block" : "hidden"}`}>{error}</span>}
    </div>
  );
}

export default function Contact({ c }: { c: FinanceContent["contact"] }) {
  const reduce = useReducedMotionSafe();
  const form = useRef<HTMLFormElement>(null);
  const done = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);
  const [invalid, setInvalid] = useState<Record<string, boolean>>({});
  const check = (el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => { const ok = el.type === "checkbox" ? (el as HTMLInputElement).checked : el.validity.valid; setInvalid((s) => ({ ...s, [el.id]: !ok })); el.setAttribute("aria-invalid", String(!ok)); return ok; };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => { if (e.target.value) check(e.target); };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bad = Array.from(form.current!.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("[required]")).filter((el) => !check(el));
    if (bad.length) { bad[0].focus(); return; }
    setSent(true);
    requestAnimationFrame(() => { if (done.current) { if (!reduce) animate(done.current, { opacity: [0, 1], translateY: [12, 0], duration: 500, ease: "outExpo" }); done.current.focus(); } });
  };
  const tel = `tel:${c.phone.replace(/[^\d+]/g, "")}`;
  const ic = { size: 20, weight: "light" as const };

  return (
    <section id="contact" className="scroll-mt-20 py-20 lg:py-28" aria-labelledby="contact-title">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div>
          <Reveal><Eyebrow>{c.eyebrow}</Eyebrow></Reveal>
          <h2 id="contact-title" className="mt-4 font-display text-[40px] font-bold leading-[1.02] text-ink sm:text-[56px] lg:text-[66px]"><Words>{c.title}</Words></h2>
          <Reveal delay={0.2}><p className="mt-6 max-w-[46ch] text-[17px] leading-[1.65] text-body">{c.text}</p></Reveal>
          <Reveal delay={0.3}>
            <ul className="mt-10 grid gap-5 text-[17px]">
              <li className="flex items-center gap-4 text-body"><MapPinIcon {...ic} className="shrink-0 text-primary" aria-hidden="true" />{c.address}</li>
              <li className="flex items-center gap-4"><PhoneCallIcon {...ic} className="shrink-0 text-primary" aria-hidden="true" /><a href={tel} className="font-display text-[20px] font-bold text-ink no-underline hover:text-primary"><Num>{c.phone}</Num></a></li>
              <li className="flex items-center gap-4 text-body"><EnvelopeSimpleIcon {...ic} className="shrink-0 text-primary" aria-hidden="true" /><a href={`mailto:${c.email.replace(/[\[\]]/g, "")}`} className="text-body no-underline hover:text-primary">{c.email}</a></li>
            </ul>
            <p className="mt-8 text-[15px] text-mute">{c.portal.text} <a href={c.portal.link.href} className="inline-flex items-center gap-1 font-medium text-primary no-underline hover:underline">{c.portal.link.label}<ArrowSquareOutIcon size={14} weight="bold" aria-hidden="true" /></a>.</p>
          </Reveal>
        </div>
        {sent ? (
          <div ref={done} role="status" aria-live="polite" tabIndex={-1} className="grid content-start gap-2 bg-soft p-8 lg:mt-20">
            <p className="font-display text-[24px] font-bold text-ink">Request received.</p>
            <p className="text-[16px] leading-[1.6] text-body">Thank you. We will reply with a fixed-fee proposal within [N] working days. If it is quicker to talk, call {c.phone}.</p>
          </div>
        ) : (
          <Reveal delay={0.25} className="lg:mt-20">
            <form ref={form} onSubmit={onSubmit} noValidate className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              <Field id="c-name" label="Name" icon={<UserIcon {...ic} />} error="Enter your name." invalid={!!invalid["c-name"]}><input id="c-name" name="name" type="text" placeholder="Jane Doe…" autoComplete="name" required onBlur={onBlur} className={field} aria-describedby={invalid["c-name"] ? "c-name-err" : undefined} /></Field>
              <Field id="c-email" label="Email address" icon={<EnvelopeSimpleIcon {...ic} />} error="Enter an email address we can reply to." invalid={!!invalid["c-email"]}><input id="c-email" name="email" type="email" placeholder="name@company.example…" autoComplete="email" spellCheck={false} required onBlur={onBlur} className={field} aria-describedby={invalid["c-email"] ? "c-email-err" : undefined} /></Field>
              <Field id="c-phone" label="Phone" icon={<PhoneCallIcon {...ic} />} invalid={false}><input id="c-phone" name="phone" type="tel" placeholder="+00 000 000 000…" autoComplete="tel" className={`${field} font-mono`} /></Field>
              <Field id="c-type" label="Business type" icon={<BriefcaseIcon {...ic} />} error="Choose the closest business type." invalid={!!invalid["c-type"]}>
                <select id="c-type" name="type" required defaultValue="" onBlur={onBlur} className={`${field} bg-canvas`} aria-describedby={invalid["c-type"] ? "c-type-err" : undefined}><option value="">Choose one</option>{c.businessTypes.map((o) => <option key={o}>{o}</option>)}</select>
              </Field>
              <Field id="c-turnover" label="Turnover band" icon={<ChartBarIcon {...ic} />} invalid={false} className="sm:col-span-2">
                <select id="c-turnover" name="turnover" defaultValue="" className={`${field} bg-canvas`}><option value="">Choose one</option>{c.turnoverBands.map((o, i) => <option key={i}>{o}</option>)}</select>
              </Field>
              <Field id="c-message" label="How can we help?" icon={<PencilSimpleLineIcon {...ic} />} invalid={false} className="sm:col-span-2">
                <textarea id="c-message" name="message" placeholder="Services you need, software you use…" rows={3} className={`${field} h-auto resize-y py-4`} />
              </Field>
              <div className="flex flex-wrap items-center gap-6 sm:col-span-2">
                <Btn type="submit"><PaperPlaneTiltIcon size={18} weight="light" aria-hidden="true" />{c.submit}</Btn>
                <label className="inline-flex min-h-11 items-center gap-3 text-[14px] text-body"><input id="c-consent" name="consent" type="checkbox" required onBlur={onBlur} className="h-[18px] w-[18px] accent-(--t-primary)" aria-describedby={invalid["c-consent"] ? "c-consent-err" : undefined} />{c.consent}</label>
                <span id="c-consent-err" className={`w-full text-[12px] text-(--t-error) ${invalid["c-consent"] ? "block" : "hidden"}`}>Tick the box so we can reply.</span>
              </div>
              <p className="text-[12px] leading-[1.5] text-mute sm:col-span-2">{c.note}</p>
            </form>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
