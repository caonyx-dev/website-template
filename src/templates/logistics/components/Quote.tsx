"use client";
// 12 The reference's quote band: the yard photograph behind a white rounded form card carrying the two cities,
// the freight type, the incoterm, the dimensions and the option toggles, with the orange "any questions?" card
// beside it. Nothing posts anywhere until a handler is wired.
import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import type { LogisticsContent } from "../content";
import { Btn, Container, Eyebrow, Mono, Title } from "./ui";

type Errors = Partial<Record<"from" | "to" | "mode" | "weight", string>>;
const ORDER: (keyof Errors)[] = ["from", "to", "mode", "weight"];
const field = "h-[52px] w-full rounded-[14px] border border-(--t-control) bg-canvas px-4 text-[15px] text-ink transition-colors hover:border-primary focus-visible:border-primary aria-[invalid=true]:border-(--t-error)";
const label = "text-[13px] font-semibold text-ink";

function validate(d: FormData): Errors {
  const next: Errors = {};
  if (!String(d.get("from") ?? "").trim()) next.from = "Where is it collected from?";
  if (!String(d.get("to") ?? "").trim()) next.to = "Where is it going?";
  if (!d.get("mode")) next.mode = "Choose a freight type.";
  const w = String(d.get("weight") ?? "").trim();
  if (!w) next.weight = "We need a weight to price it.";
  else if (!/^\d+(\.\d+)?$/.test(w) || Number(w) <= 0) next.weight = "Enter the weight in kilograms, as a number.";
  return next;
}

export default function Quote({ q }: { q: LogisticsContent["quote"] }) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate(new FormData(e.currentTarget));
    setErrors(next);
    const first = ORDER.find((k) => next[k]);
    if (first) { requestAnimationFrame(() => document.getElementById(first)?.focus()); setSent(false); return; }
    // The form posts nowhere yet, so a typed enquiry is never thrown away on "success".
    setSent(true);
  }

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
  const msg = (k: keyof Errors) => errors[k] ? <span id={`${k}-error`} className="mt-1 block text-[13px] text-(--t-error)">{errors[k]}</span> : null;

  return (
    <section id="quote" className="log-on-dark relative scroll-mt-[104px] isolate overflow-hidden bg-dark py-16 lg:py-24" aria-labelledby="quote-title">
      <div className="absolute inset-0 -z-10">
        <Image src={q.background.src} alt="" aria-hidden="true" fill placeholder="blur" sizes="100vw" className="object-cover" />
        <span className="absolute inset-0 bg-(--t-dark)/80" />
      </div>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          <Reveal>
            <form onSubmit={submit} onBlur={recheck} noValidate className="rounded-[25px] bg-canvas p-7 text-ink sm:p-10">
              <h3 className="font-display text-[26px] font-bold uppercase">{q.form.heading}</h3>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div className="grid gap-1.5"><label htmlFor="from" className={label}>{q.form.from}</label><input id="from" name="from" required autoComplete="address-level2" className={field} {...err("from")} />{msg("from")}</div>
                <div className="grid gap-1.5"><label htmlFor="to" className={label}>{q.form.to}</label><input id="to" name="to" required autoComplete="off" className={field} {...err("to")} />{msg("to")}</div>
                <div className="grid gap-1.5"><label htmlFor="mode" className={label}>{q.form.mode}</label><select id="mode" name="mode" required defaultValue="" autoComplete="off" className={field} {...err("mode")}><option value="" disabled>Select…</option>{q.form.modes.map((m) => <option key={m}>{m}</option>)}</select>{msg("mode")}</div>
                <div className="grid gap-1.5"><label htmlFor="incoterm" className={label}>{q.form.incoterm}</label><select id="incoterm" name="incoterm" defaultValue="EXW" autoComplete="off" className={field}>{q.form.incoterms.map((m) => <option key={m}>{m}</option>)}</select></div>
                <div className="grid gap-1.5"><label htmlFor="weight" className={label}>{q.form.weight}</label><input id="weight" name="weight" type="number" min="0" step="0.1" inputMode="decimal" required autoComplete="off" className={`${field} font-(family-name:--t-font-mono)`} {...err("weight")} />{msg("weight")}</div>
                <div className="grid gap-1.5"><label htmlFor="volume" className={label}>{q.form.volume} <span className="font-normal text-mute">(optional)</span></label><input id="volume" name="volume" type="number" min="0" step="0.1" inputMode="decimal" autoComplete="off" className={`${field} font-(family-name:--t-font-mono)`} /></div>
              </div>

              <fieldset className="mt-6 border-0 p-0">
                <legend className={label}>{q.form.options}</legend>
                <div className="mt-3 flex flex-wrap gap-x-7 gap-y-3">
                  {q.form.toggles.map((t) => (
                    <label key={t} className="inline-flex min-h-11 cursor-pointer items-center gap-2.5 text-[15px] text-ink">
                      <input type="checkbox" name="options" value={t} className="size-5 rounded-[6px] border-hairline-strong accent-[var(--t-primary)]" />{t}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-8"><Btn type="submit">{q.form.submit}</Btn></div>
              <p role="status" aria-live="polite" className="mt-3 min-h-5 text-[15px] text-(--t-success)">{sent ? q.form.confirm : ""}</p>
              <p className="mt-5 border-t border-hairline pt-4 text-[13px] leading-[1.6] text-(--t-ink-muted)">{q.disclaimer}</p>
            </form>
          </Reveal>

          <div className="grid content-start gap-8">
            <Reveal delay={0.1}>
              <Eyebrow onDark>{q.eyebrow}</Eyebrow>
              <Title id="quote-title" onDark className="mt-5 max-w-[16ch]">{q.title}</Title>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="log-on-primary rounded-[25px] bg-primary p-8 text-(--t-on-primary) lg:p-10">
                <p className="font-display text-[26px] font-bold uppercase leading-[1.15] lg:text-[30px]">{q.call.title}</p>
                <p className="mt-5 text-[15px] font-semibold">{q.call.label}</p>
                <a href={`tel:${q.call.phone.replace(/[^\d+]/g, "")}`} className="mt-1 inline-block text-(--t-on-primary) underline-offset-4 no-underline transition-all hover:underline">
                  <Mono className="text-[28px] font-medium lg:text-[34px]">{q.call.phone}</Mono>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
