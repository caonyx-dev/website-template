"use client";
// hero-quote-card from DESIGN.md, placed in the quote band at the foot of the page. White card, 2px ink border, hard offset.
// Fields per DESIGN.md: name, phone, project type, postcode, short description. Validates inline, focuses
// the first error, posts nowhere until a handler is wired, and confirms in place.
import { useRef, useState } from "react";
import { animate } from "animejs";
import { ArrowRightIcon } from "@phosphor-icons/react";
import type { ConstructionContent } from "../content";
import { Btn } from "./ui";

const input = "h-12 w-full rounded-sm border border-hairline bg-surface px-3.5 text-[16px] leading-normal text-ink placeholder:text-mute focus:border-2 focus:border-ink focus:outline-none data-[invalid=true]:border-2 data-[invalid=true]:border-[#C62828]";
const label = "text-[12px] font-medium uppercase tracking-[.06em] text-body";

const Err = ({ id, text, show }: { id: string; text: string; show: boolean }) => <span id={`${id}-err`} className={`text-[12px] text-[#C62828] ${show ? "block" : "hidden"}`}>{text}</span>;

export default function QuoteCard({ q }: { q: ConstructionContent["quoteBand"]["form"] }) {
  const form = useRef<HTMLFormElement>(null);
  const done = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);
  const [bad, setBad] = useState<Record<string, boolean>>({});

  const check = (el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
    const ok = el.validity.valid;
    setBad((s) => ({ ...s, [el.id]: !ok }));
    el.setAttribute("aria-invalid", String(!ok));
    return ok;
  };
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const els = Array.from(form.current!.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("[required]"));
    const first = els.filter((el) => !check(el))[0];
    if (first) { first.focus(); return; }
    setSent(true);
    requestAnimationFrame(() => { if (done.current) { animate(done.current, { opacity: [0, 1], translateY: [10, 0], duration: 400, ease: "outExpo" }); done.current.focus(); } });
  };
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => { if (e.target.value) check(e.target); };

  return (
    <div id="quote" className="rounded-md border-2 border-ink bg-surface p-6 text-ink shadow-[3px_3px_0_var(--t-ink)] sm:p-7">
      <h2 className="font-display text-[26px] font-bold leading-none">{q.title}</h2>
      <p className="mt-2 text-[14px] text-body">{q.note}</p>
      {sent ? (
        <div ref={done} role="status" aria-live="polite" tabIndex={-1} className="mt-5 rounded-sm bg-soft p-4">
          <p className="font-medium text-[#2E7D32]">Request sent.</p>
          <p className="mt-1 text-[15px] leading-[1.55] text-body">{q.reply}</p>
        </div>
      ) : (
        <form ref={form} onSubmit={submit} noValidate className="mt-5 grid gap-3.5">
          <div className="grid gap-3.5 sm:grid-cols-2">
            <div className="grid gap-1.5"><label htmlFor="q-name" className={label}>Name</label><input id="q-name" name="name" type="text" autoComplete="name" required onBlur={blur} className={input} aria-describedby="q-name-err" /><Err id="q-name" text="Enter your name." show={!!bad["q-name"]} /></div>
            <div className="grid gap-1.5"><label htmlFor="q-phone" className={label}>Phone</label><input id="q-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required onBlur={blur} className={input} aria-describedby="q-phone-err" /><Err id="q-phone" text="Enter a number we can call." show={!!bad["q-phone"]} /></div>
          </div>
          <div className="grid gap-3.5 sm:grid-cols-2">
            <div className="grid gap-1.5"><label htmlFor="q-type" className={label}>Project type</label><select id="q-type" name="type" required onBlur={blur} defaultValue="" className={input} aria-describedby="q-type-err"><option value="">Choose one</option>{q.types.map((t) => <option key={t}>{t}</option>)}</select><Err id="q-type" text="Choose the closest type." show={!!bad["q-type"]} /></div>
            <div className="grid gap-1.5"><label htmlFor="q-postcode" className={label}>Postcode</label><input id="q-postcode" name="postcode" type="text" autoComplete="postal-code" required onBlur={blur} placeholder="[AB1 2CD]…" className={input} aria-describedby="q-postcode-err" /><Err id="q-postcode" text="Enter the site postcode." show={!!bad["q-postcode"]} /></div>
          </div>
          <div className="grid gap-1.5"><label htmlFor="q-desc" className={label}>What needs doing</label><textarea id="q-desc" name="description" required onBlur={blur} rows={3} placeholder="Rear extension, roughly [00] m², start in spring…" className={`${input} h-auto min-h-[88px] resize-y py-3`} aria-describedby="q-desc-err" /><Err id="q-desc" text="One sentence is enough." show={!!bad["q-desc"]} /></div>
          <Btn type="submit" full>{q.submit} <ArrowRightIcon size={18} weight="light" aria-hidden="true" /></Btn>
          <p className="text-[12px] leading-[1.5] text-mute">By sending you agree we may store this request to reply to it. See the <a href="privacy/" className="text-ink underline underline-offset-2">privacy policy</a>.</p>
        </form>
      )}
    </div>
  );
}
