"use client";
import { useRef, useState } from "react";
import { animate } from "animejs";
import { ArrowRightIcon } from "@phosphor-icons/react";

type FieldProps = { id: string; label: string; error: string; full?: boolean; hint?: string; children: React.ReactNode; invalid: boolean };
function Field({ id, label, error, full, hint, children, invalid }: FieldProps) {
  return (
    <div className={`grid gap-1.5 ${full ? "sm:col-span-2" : ""}`} data-invalid={invalid}>
      <label htmlFor={id} className="text-[14px] font-medium">{label}</label>
      {hint && <span className="text-[12px] text-on-dark-muted">{hint}</span>}
      {children}
      <span id={`${id}-err`} className={`text-[12px] text-[#F0B8AA] ${invalid ? "block" : "hidden"}`}>{error}</span>
    </div>
  );
}

const input = "w-full rounded-md border border-transparent bg-canvas px-4 py-3.5 text-[16px] leading-normal text-ink placeholder:text-body/75 focus:outline-2 focus:outline-accent focus:outline-offset-2 data-[invalid=true]:outline-2";

export type EnquiryCopy = {
  typeOptions: string[];
  budgetOptions: string[];
  /** When set, adds a "Preferred start" select. */
  timelineOptions?: string[];
  /** Adds a required phone field. */
  phoneField?: boolean;
  locationLabel: string;
  locationPlaceholder: string;
  messageLabel: string;
  messageError: string;
  submit: string;
  note: string;
};
export const DEFAULT_ENQUIRY: EnquiryCopy = {
  typeOptions: ["New house", "Extension or renovation", "Workplace or commercial", "Public or cultural", "Not sure yet"],
  budgetOptions: ["Under [amount]", "[amount] to [amount]", "[amount] to [amount]", "Over [amount]", "Not decided"],
  locationLabel: "Site location",
  locationPlaceholder: "14 Mill Lane, [Town], or just the area…",
  messageLabel: "What you hope to build",
  messageError: "Tell us, in a sentence, what you hope to build.",
  submit: "Start a project",
  note: "No commitment. We will suggest a first conversation.",
};

export default function Enquiry({ partner = "[Partner name]", days = "[number]", phone = "[+00 000 000 000]", copy }: { partner?: string; days?: string; phone?: string; copy?: Partial<EnquiryCopy> }) {
  const t: EnquiryCopy = { ...DEFAULT_ENQUIRY, ...copy };
  const form = useRef<HTMLFormElement>(null);
  const success = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);
  const [invalid, setInvalid] = useState<Record<string, boolean>>({});

  const check = (el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
    const ok = el.type === "checkbox" ? (el as HTMLInputElement).checked : el.validity.valid;
    setInvalid((s) => ({ ...s, [el.id]: !ok }));
    el.setAttribute("aria-invalid", String(!ok));
    return ok;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const els = Array.from(form.current!.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("[required]"));
    const bad = els.filter((el) => !check(el));
    if (bad.length) { bad[0].focus(); return; }
    setSent(true);
    requestAnimationFrame(() => { if (success.current) { animate(success.current, { opacity: [0, 1], translateY: [12, 0], duration: 500, ease: "outExpo" }); success.current.focus(); } });
  };

  if (sent) {
    return (
      <div ref={success} role="status" aria-live="polite" tabIndex={-1} className="grid gap-3 rounded-md bg-white/[.06] p-6">
        <p className="font-medium text-[#9FC7A2]">Enquiry sent.</p>
        <p className="text-[18px] leading-[1.6] text-on-dark-muted">Thank you. {partner} will reply within {days} working days. If it is urgent, call {phone}.</p>
      </div>
    );
  }

  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => { if (e.target.value || (e.target as HTMLInputElement).checked) check(e.target); };

  return (
    <form ref={form} onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
      <Field id="f-name" label="Name" error="Enter your name." invalid={!!invalid["f-name"]}><input id="f-name" name="name" type="text" autoComplete="name" required onBlur={onBlur} className={input} aria-describedby="f-name-err" /></Field>
      <Field id="f-email" label="Email" error="Enter an email address we can reply to." invalid={!!invalid["f-email"]}><input id="f-email" name="email" type="email" autoComplete="email" spellCheck={false} required onBlur={onBlur} className={input} aria-describedby="f-email-err" /></Field>
      <Field id="f-type" label="Project type" error="Choose the closest project type." invalid={!!invalid["f-type"]}>
        <select id="f-type" name="type" required onBlur={onBlur} className={input} defaultValue="" aria-describedby="f-type-err"><option value="">Choose one</option>{t.typeOptions.map((o) => <option key={o}>{o}</option>)}</select>
      </Field>
      {t.phoneField && <Field id="f-phone" label="Phone" error="Enter a phone number we can call." invalid={!!invalid["f-phone"]}><input id="f-phone" name="phone" type="tel" autoComplete="tel" required onBlur={onBlur} className={input} aria-describedby="f-phone-err" /></Field>}
      <Field id="f-budget" label="Budget band" error="Pick a band, or “Not decided”." invalid={!!invalid["f-budget"]}>
        <select id="f-budget" name="budget" required onBlur={onBlur} className={input} defaultValue="" aria-describedby="f-budget-err"><option value="">Choose one</option>{t.budgetOptions.map((o, i) => <option key={i}>{o}</option>)}</select>
      </Field>
      {t.timelineOptions && (
        <Field id="f-start" label="Preferred start" error="" invalid={false}>
          <select id="f-start" name="start" className={input} defaultValue=""><option value="">Choose one</option>{t.timelineOptions.map((o) => <option key={o}>{o}</option>)}</select>
        </Field>
      )}
      <Field id="f-location" label={t.locationLabel} error="" full invalid={false}><input id="f-location" name="location" type="text" autoComplete="street-address" placeholder={t.locationPlaceholder} className={input} /></Field>
      <Field id="f-message" label={t.messageLabel} error={t.messageError} full invalid={!!invalid["f-message"]}><textarea id="f-message" name="message" required onBlur={onBlur} className={`${input} min-h-32 resize-y`} aria-describedby="f-message-err" /></Field>
      <div className="grid grid-cols-[auto_1fr] items-start gap-3 text-[14px] text-on-dark-muted sm:col-span-2">
        <input id="f-consent" name="consent" type="checkbox" required onBlur={onBlur} className="mt-0.5 h-[18px] w-[18px] accent-accent" aria-describedby="f-consent-err" />
        <label htmlFor="f-consent">You may store this enquiry and contact me about it. See the <a href="privacy/" className="underline">privacy policy</a>.</label>
        <span id="f-consent-err" className={`col-span-2 text-[12px] text-[#F0B8AA] ${invalid["f-consent"] ? "block" : "hidden"}`}>Tick the box so we can reply.</span>
      </div>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" className="inline-flex h-14 items-center gap-2.5 rounded-(--t-radius-button) border border-accent bg-accent px-7 font-button text-[15px] font-medium text-on-primary hover:bg-accent-deep hover:border-accent-deep">{t.submit} <ArrowRightIcon size={18} weight="light" aria-hidden="true" /></button>
        <span className="text-[14px] text-on-dark-muted">{t.note}</span>
      </div>
    </form>
  );
}
