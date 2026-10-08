"use client";
// Book appointment: name, phone, service and time fields on flat grey inputs with a navy submit, beside
// "Or call us now" with the phone number set large and the Google map link. A dotted world-map pattern
// fades in behind the right half. Inline validation on blur and submit; anime.js fades the confirmation in.
import { useRef, useState } from "react";
import { animate } from "animejs";
import { MapPinIcon } from "@phosphor-icons/react";
import { Reveal, Words, useReducedMotionSafe } from "@/components/Reveal";
import type { DentalContent } from "../content";
import { Btn, Container } from "./ui";

const input = "h-14 w-full border border-transparent bg-soft px-5 text-[16px] text-ink placeholder:text-mute aria-[invalid=true]:border-[#DC2626]";

function Field({ id, label, error, invalid, children }: { id: string; label: string; error?: string; invalid: boolean; children: React.ReactNode }) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="font-display text-[16px] font-bold text-ink">{label}</label>
      {children}
      {error && <span id={`${id}-err`} className={`text-[13px] text-[#DC2626] ${invalid ? "block" : "hidden"}`}>{error}</span>}
    </div>
  );
}

export default function Appointment({ a }: { a: DentalContent["appointment"] }) {
  const reduce = useReducedMotionSafe();
  const form = useRef<HTMLFormElement>(null);
  const done = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);
  const [invalid, setInvalid] = useState<Record<string, boolean>>({});
  const check = (el: HTMLInputElement | HTMLSelectElement) => { const ok = el.validity.valid; setInvalid((s) => ({ ...s, [el.id]: !ok })); el.setAttribute("aria-invalid", String(!ok)); return ok; };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => { if (e.target.value) check(e.target); };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bad = Array.from(form.current!.querySelectorAll<HTMLInputElement | HTMLSelectElement>("[required]")).filter((el) => !check(el));
    if (bad.length) { bad[0].focus(); return; }
    setSent(true);
    requestAnimationFrame(() => { if (done.current) { if (!reduce) animate(done.current, { opacity: [0, 1], translateY: [12, 0], duration: 500, ease: "outExpo" }); done.current.focus(); } });
  };
  const tel = `tel:${a.call.phone.replace(/[^\d+]/g, "")}`;

  return (
    <section id="appointment" className="relative scroll-mt-20 overflow-hidden py-24 lg:py-32" aria-labelledby="appointment-title">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] lg:block" style={{ backgroundImage: "radial-gradient(circle, var(--t-hairline-strong) 1.4px, transparent 1.6px)", backgroundSize: "14px 14px", maskImage: "radial-gradient(ellipse 60% 55% at 60% 45%, black 10%, transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 60% 55% at 60% 45%, black 10%, transparent 100%)" }} />
      <Container className="relative grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-24">
        <div>
          <h2 id="appointment-title" className="font-display text-[36px] font-bold leading-[1.15] text-ink sm:text-[44px]"><Words>{a.title}</Words></h2>
          <Reveal delay={0.2}><p className="mt-5 max-w-[56ch] text-[17px] leading-[1.75] text-body">{a.lead}</p></Reveal>
          {sent ? (
            <div ref={done} role="status" aria-live="polite" tabIndex={-1} className="mt-10 grid gap-2 bg-soft p-6">
              <p className="font-display text-[18px] font-bold text-ink">Request received.</p>
              <p className="text-[15px] leading-[1.7] text-body">Thank you. The front desk will call you back to confirm a time. If it is urgent, call {a.call.phone}.</p>
            </div>
          ) : (
            <Reveal delay={0.3}>
              <form ref={form} onSubmit={onSubmit} noValidate className="mt-10 grid gap-6 sm:grid-cols-2">
                <Field id="ap-name" label="Full name" error="Enter your name." invalid={!!invalid["ap-name"]}><input id="ap-name" name="name" type="text" autoComplete="name" placeholder="Jane Doe…" required onBlur={onBlur} className={input} aria-describedby={invalid["ap-name"] ? "ap-name-err" : undefined} /></Field>
                <Field id="ap-phone" label="Your phone" error="Enter a phone number we can call." invalid={!!invalid["ap-phone"]}><input id="ap-phone" name="phone" type="tel" autoComplete="tel" required onBlur={onBlur} className={input} aria-describedby={invalid["ap-phone"] ? "ap-phone-err" : undefined} /></Field>
                <Field id="ap-service" label="Type of service required" error="Choose the closest service." invalid={!!invalid["ap-service"]}>
                  <select id="ap-service" name="service" required defaultValue="" onBlur={onBlur} className={input} aria-describedby={invalid["ap-service"] ? "ap-service-err" : undefined}><option value="">Choose one</option>{a.services.map((o) => <option key={o}>{o}</option>)}</select>
                </Field>
                <Field id="ap-time" label="Select time" invalid={false}>
                  <select id="ap-time" name="time" defaultValue="" className={input}><option value="">Any time</option>{a.times.map((o) => <option key={o}>{o}</option>)}</select>
                </Field>
                <div className="sm:col-span-2"><Btn type="submit" tone="navy">{a.submit}</Btn></div>
              </form>
            </Reveal>
          )}
        </div>
        <Reveal from="right" delay={0.2} className="lg:pt-4">
          <p className="font-display text-[13px] font-bold uppercase tracking-[.14em] text-body">{a.call.label}</p>
          <a href={tel} className="mt-4 block font-display text-[clamp(34px,4vw,52px)] font-bold leading-tight text-ink no-underline hover:text-primary">{a.call.phone}</a>
          <p className="mt-4 max-w-[36ch] text-[15px] leading-[1.75] text-body">{a.call.text}</p>
          <a href={a.call.map.href} className="mt-8 inline-flex items-center gap-4 font-semibold text-ink underline underline-offset-4 hover:decoration-2"><span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-soft text-primary"><MapPinIcon size={24} weight="light" aria-hidden="true" /></span>{a.call.map.label}</a>
        </Reveal>
      </Container>
    </section>
  );
}
