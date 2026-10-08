"use client";
// Reservation bar after the Almaris reference: a navy row with the title, check-in and check-out dates, adults
// and children steppers in gold-outlined discs and the gold-outlined "Check availability" button. Unlike the
// DESIGN.md booking-bar-pinned (see the dated revision), it
// sits in the flow directly beneath the hero; nothing pins to the top of the viewport. Errors are tied to the
// field that caused them and the first one takes focus; the confirmation is visible as well as announced. The
// booking engine's URL takes over once it is wired.
import { useState } from "react";
import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import type { HotelContent } from "../content";
import { Btn, Container } from "./ui";

function Stepper({ id, label, value, min, onChange }: { id: string; label: string; value: number; min: number; onChange: (v: number) => void }) {
  const btn = "inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent text-accent transition-colors hover:bg-accent hover:text-ink disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-accent";
  return (
    <div className="grid justify-items-center gap-1.5">
      <span id={`${id}-label`} className="text-[11px] uppercase tracking-[2px] text-accent">{label}</span>
      <div className="flex items-center gap-3" role="group" aria-labelledby={`${id}-label`}>
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min} aria-label={`Fewer ${label.toLowerCase()}`} className={btn}><MinusIcon size={13} weight="bold" aria-hidden="true" /></button>
        <output aria-live="polite" className="w-4 text-center font-display text-[19px] tabular-nums text-on-dark">{value}</output>
        <button type="button" onClick={() => onChange(Math.min(9, value + 1))} aria-label={`More ${label.toLowerCase()}`} className={btn}><PlusIcon size={13} weight="bold" aria-hidden="true" /></button>
        <input type="hidden" name={id} value={value} />
      </div>
    </div>
  );
}

export default function Booking({ b }: { b: HotelContent["booking"] }) {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [errors, setErrors] = useState<{ checkin?: string; checkout?: string }>({});
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); const form = e.currentTarget; const f = new FormData(form);
    const a = String(f.get("checkin")), d = String(f.get("checkout"));
    const next: typeof errors = {};
    if (!a) next.checkin = "Choose a check-in date.";
    if (!d) next.checkout = "Choose a check-out date."; else if (a && d <= a) next.checkout = "Check-out must be after check-in.";
    setErrors(next); setSent(false);
    const bad = next.checkin ? "checkin" : next.checkout ? "checkout" : null;
    if (bad) { (form.elements.namedItem(bad) as HTMLInputElement)?.focus(); return; }
    setSent(true);
  };
  const date = "h-9 w-[150px] bg-transparent text-[16px] text-on-dark tabular-nums [color-scheme:dark] focus-visible:outline-2 focus-visible:outline-accent aria-[invalid=true]:outline aria-[invalid=true]:outline-1 aria-[invalid=true]:outline-accent";
  const field = (name: "checkin" | "checkout", label: string) => (
    <label className="grid gap-1">
      <span className="text-[11px] uppercase tracking-[2px] text-accent">{label}</span>
      <input name={name} type="date" required autoComplete="off" aria-invalid={errors[name] ? true : undefined} aria-describedby={errors[name] ? `${name}-err` : undefined} className={date} />
      {errors[name] && <span id={`${name}-err`} className="text-[12px] text-accent">{errors[name]}</span>}
    </label>
  );
  return (
    <section id="reservation" className="relative z-20 scroll-mt-20 bg-dark text-on-dark" aria-labelledby="booking-title">
        <Container>
          <form onSubmit={onSubmit} noValidate className="grid gap-6 py-7 lg:grid-cols-[auto_auto_auto_auto_1fr] lg:items-center lg:gap-10 lg:py-4">
            <h2 id="booking-title" className="font-display text-[24px] text-on-dark">{b.title}</h2>
            {field("checkin", b.checkIn)}
            {field("checkout", b.checkOut)}
            <div className="flex gap-8"><Stepper id="adults" label={b.adults} value={adults} min={1} onChange={setAdults} /><Stepper id="children" label={b.children} value={children} min={0} onChange={setChildren} /></div>
            <div className="grid gap-2 lg:justify-items-end"><Btn type="submit" tone="ghost-gold" className="h-11">{b.submit}</Btn></div>
            <p role="status" className="text-[13px] font-light text-(--t-body-muted) lg:col-span-5">{sent ? b.note : ""}</p>
          </form>
      </Container>
    </section>
  );
}
