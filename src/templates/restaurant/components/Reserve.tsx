"use client";
// 12 The reservation band: the request form in the one card on the page that carries a shadow, with the
// location card and a photograph of the room beside it. Nothing posts anywhere until a handler is wired.
import { useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { ArrowSquareOutIcon, EnvelopeSimpleIcon, PhoneIcon, TrainIcon } from "@phosphor-icons/react";
import { Reveal } from "@/components/Reveal";
import type { RestaurantContent } from "../content";
import { Btn, Container, Eyebrow, Flourish } from "./ui";

type Errors = Partial<Record<"date" | "time" | "guests" | "name" | "phone", string>>;
const ORDER: (keyof Errors)[] = ["date", "time", "guests", "name", "phone"];
const subscribeNoop = () => () => {};
const field = "h-12 w-full rounded-xs border border-(--t-field-border) bg-canvas px-3 text-[15px] text-ink transition-colors hover:border-primary focus:border-primary aria-[invalid=true]:border-(--t-primary-error-text)";

export default function Reserve({ r }: { r: RestaurantContent["reserve"] }) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  // Today's date only exists once the client is running; before that the floor is simply absent, so the
  // server and client markup agree. `subscribeNoop` never fires, so the flag flips once and stays.
  const mounted = useSyncExternalStore(subscribeNoop, () => true, () => false);
  const today = mounted ? new Date().toISOString().slice(0, 10) : "";

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const next: Errors = {};
    const date = String(d.get("date") ?? "");
    if (!date) next.date = "Choose a date.";
    else if (today && date < today) next.date = "Pick a date from today onwards.";
    if (!d.get("time")) next.time = "Choose a time.";
    if (!d.get("guests")) next.guests = "Choose a party size.";
    if (!String(d.get("name") ?? "").trim()) next.name = "Tell us the name for the booking.";
    const phone = String(d.get("phone") ?? "").trim();
    if (!phone) next.phone = "We confirm by text, so we need a number.";
    else if (phone.replace(/[^\d]/g, "").length < 7) next.phone = "That number looks too short.";
    setErrors(next);
    // Focus the first field that failed. The id is used rather than [aria-invalid], which is not in the DOM
    // until React has re-rendered, and the frame is waited out so the error text exists to be announced.
    const first = ORDER.find((k) => next[k]);
    if (first) {
      requestAnimationFrame(() => document.getElementById(first)?.focus());
      setSent(false);
      return;
    }
    setSent(true);
  }

  const err = (k: keyof Errors) => ({ "aria-invalid": errors[k] ? true : undefined, "aria-describedby": errors[k] ? `${k}-error` : undefined });
  const msg = (k: keyof Errors) => errors[k] ? <span id={`${k}-error`} role="alert" className="mt-1 block text-[13px] text-(--t-primary-error-text)">{errors[k]}</span> : null;

  return (
    <section id="reserve" className="scroll-mt-[124px] bg-soft py-20 lg:py-28" aria-labelledby="reserve-title">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <Reveal><Eyebrow>{r.eyebrow}</Eyebrow></Reveal>
            <Reveal delay={0.07}><h2 id="reserve-title" className="mt-4 font-display text-[30px] font-semibold leading-[1.15] text-ink sm:text-[40px]">{r.title}</h2></Reveal>
            <Reveal delay={0.12}><Flourish className="mt-5 justify-start [&>span:first-child]:w-8" /></Reveal>
            <Reveal delay={0.16}><p className="mt-5 max-w-[520px] text-[16px] leading-[1.7] text-body">{r.lead}</p></Reveal>
            <Reveal delay={0.2}>
              <form ref={form} onSubmit={submit} noValidate className="mt-8 grid gap-4 border border-hairline bg-surface p-6 shadow-lift sm:p-8">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="grid gap-1.5"><label htmlFor="date" className="text-[13px] font-medium text-ink">{r.form.date}</label><input id="date" name="date" type="date" required min={today || undefined} autoComplete="off" className={field} {...err("date")} />{msg("date")}</div>
                  <div className="grid gap-1.5"><label htmlFor="time" className="text-[13px] font-medium text-ink">{r.form.time}</label><select id="time" name="time" required defaultValue="" autoComplete="off" className={field} {...err("time")}><option value="" disabled>Select…</option>{r.times.map((t) => <option key={t}>{t}</option>)}</select>{msg("time")}</div>
                  <div className="grid gap-1.5"><label htmlFor="guests" className="text-[13px] font-medium text-ink">{r.form.guests}</label><select id="guests" name="guests" required defaultValue="" autoComplete="off" className={field} {...err("guests")}><option value="" disabled>Select…</option>{r.sizes.map((t) => <option key={t}>{t}</option>)}</select>{msg("guests")}</div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-1.5"><label htmlFor="name" className="text-[13px] font-medium text-ink">{r.form.name}</label><input id="name" name="name" required autoComplete="name" className={field} {...err("name")} />{msg("name")}</div>
                  <div className="grid gap-1.5"><label htmlFor="phone" className="text-[13px] font-medium text-ink">{r.form.phone}</label><input id="phone" name="phone" type="tel" required inputMode="tel" autoComplete="tel" className={field} {...err("phone")} />{msg("phone")}</div>
                </div>
                <div className="grid gap-1.5"><label htmlFor="notes" className="text-[13px] font-medium text-ink">{r.form.notes} <span className="font-normal text-mute">(optional)</span></label><textarea id="notes" name="notes" rows={3} autoComplete="off" className="w-full rounded-xs border border-(--t-field-border) bg-canvas p-3 text-[15px] text-ink transition-colors hover:border-primary focus:border-primary" /></div>
                <div className="mt-1"><Btn type="submit">{r.form.submit}</Btn></div>
                <p role="status" aria-live="polite" className="min-h-5 text-[14px] text-primary">{sent ? r.form.confirm : ""}</p>
              </form>
            </Reveal>
          </div>

          <div className="grid content-start gap-6">
            <Reveal from="clip">
              <span className="relative block overflow-hidden" style={{ aspectRatio: "3 / 2" }}>
                <Image src={r.image.src} alt={r.image.alt} placeholder="blur" sizes="(min-width: 1024px) 40vw, 100vw" className="h-full w-full object-cover" />
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <div id="find-us" className="scroll-mt-[124px] border border-hairline bg-surface p-6 sm:p-8">
                <h3 className="font-display text-[22px] font-semibold text-ink">{r.location.title}</h3>
                <address className="mt-4 grid gap-1 not-italic text-[15px] leading-[1.6] text-body">{r.location.lines.map((l) => <span key={l}>{l}</span>)}</address>
                <p className="mt-4 grid gap-2 text-[15px]">
                  <a href={`tel:${r.location.phone.replace(/[^\d+]/g, "")}`} className="inline-flex items-center gap-2 text-body no-underline hover:text-primary active:text-primary"><PhoneIcon size={16} weight="light" aria-hidden="true" />{r.location.phone}</a>
                  <a href={`mailto:${r.location.email.replace(/[[\]]/g, "")}`} className="inline-flex items-center gap-2 text-body no-underline hover:text-primary active:text-primary"><EnvelopeSimpleIcon size={16} weight="light" aria-hidden="true" />{r.location.email}</a>
                </p>
                <p className="mt-4 flex gap-2 border-t border-(--t-hairline-soft) pt-4 text-[14px] leading-[1.6] text-mute"><TrainIcon size={18} weight="light" aria-hidden="true" className="mt-0.5 shrink-0" />{r.location.transport}</p>
                <p className="mt-5"><a href={r.location.mapHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[1.2px] text-primary underline-offset-4 hover:underline active:underline">{r.location.mapLabel}<span className="sr-only"> (opens in a new tab)</span><ArrowSquareOutIcon size={14} weight="light" aria-hidden="true" /></a></p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
