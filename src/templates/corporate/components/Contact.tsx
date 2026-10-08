"use client";
// Contact: a tall portrait on the left third and a near-black panel with the headline, underline-style
// fields (name, email, phone, company, subject, department, question), "How did you hear about us?" radios,
// the terms checkbox and the blue button. Inline validation; posts nowhere until a handler is wired.
import Image from "next/image";
import { useRef, useState } from "react";
import { animate } from "animejs";
import type { CorporateContent } from "../content";
import { Btn, Watermark } from "./ui";

const field = "h-12 w-full border-b border-white/25 bg-transparent px-0 text-[16px] text-white placeholder:text-white/60 focus:border-white focus:outline-none data-[invalid=true]:border-[#F87171]";
const Err = ({ id, text, show }: { id: string; text: string; show: boolean }) => <span id={`${id}-err`} className={`mt-1 text-[12px] text-[#F87171] ${show ? "block" : "hidden"}`}>{text}</span>;

export default function Contact({ c }: { c: CorporateContent["contact"] }) {
  const form = useRef<HTMLFormElement>(null);
  const done = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);
  const [bad, setBad] = useState<Record<string, boolean>>({});
  const check = (el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => { const ok = el.type === "checkbox" ? (el as HTMLInputElement).checked : el.validity.valid; setBad((s) => ({ ...s, [el.id]: !ok })); el.setAttribute("aria-invalid", String(!ok)); return ok; };
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const els = Array.from(form.current!.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("[required]"));
    const first = els.filter((el) => !check(el))[0];
    if (first) { first.focus(); return; }
    setSent(true);
    requestAnimationFrame(() => { if (done.current) { animate(done.current, { opacity: [0, 1], translateY: [10, 0], duration: 400, ease: "outExpo" }); done.current.focus(); } });
  };
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => { if (e.target.value || (e.target as HTMLInputElement).checked) check(e.target); };

  return (
    <section id={c.id} className="grid lg:grid-cols-[1fr_2fr]" aria-labelledby={`${c.id}-title`}>
      <div className="relative min-h-[420px] lg:min-h-[980px]"><Image src={c.image.src} alt={c.image.alt} fill placeholder="blur" sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" /></div>
      <div className="relative overflow-hidden bg-dark px-6 py-16 text-white lg:px-28 lg:py-28">
        <Watermark side="right" onDark>{c.watermark}</Watermark>
        <span className="text-[14px] font-semibold uppercase tracking-[.02em] text-white/70">{c.eyebrow}</span>
        <h2 id={`${c.id}-title`} className="mt-4 font-display text-[36px] font-semibold leading-[1.15] sm:text-[44px] lg:text-[52px]">{c.title}</h2>
        {sent ? (
          <div ref={done} role="status" aria-live="polite" tabIndex={-1} className="mt-12 max-w-[600px] rounded-md bg-white/10 p-6"><p className="font-medium text-[#86EFAC]">Message sent.</p><p className="mt-1 text-[15px] leading-[1.6] text-white/80">{c.reply}</p></div>
        ) : (
          <form ref={form} onSubmit={submit} noValidate className="mt-12 grid max-w-[600px] gap-6 sm:grid-cols-2">
            <div><label htmlFor="k-name" className="sr-only">Full name</label><input id="k-name" name="name" type="text" autoComplete="name" required placeholder="Full name *" onBlur={blur} className={field} aria-describedby="k-name-err" /><Err id="k-name" text="Enter your name." show={!!bad["k-name"]} /></div>
            <div><label htmlFor="k-email" className="sr-only">Email address</label><input id="k-email" name="email" type="email" autoComplete="email" spellCheck={false} required placeholder="Email address *" onBlur={blur} className={field} aria-describedby="k-email-err" /><Err id="k-email" text="Enter an email we can reply to." show={!!bad["k-email"]} /></div>
            <div><label htmlFor="k-phone" className="sr-only">Phone number</label><input id="k-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="Phone number" className={field} /></div>
            <div><label htmlFor="k-company" className="sr-only">Company</label><input id="k-company" name="organization" type="text" autoComplete="organization" placeholder="Company" className={field} /></div>
            <div><label htmlFor="k-subject" className="sr-only">Subject</label><select id="k-subject" name="subject" required defaultValue="" onBlur={blur} className={`${field} bg-dark`} aria-describedby="k-subject-err"><option value="">Subject *</option>{c.subjects.map((o) => <option key={o}>{o}</option>)}</select><Err id="k-subject" text="Choose a subject." show={!!bad["k-subject"]} /></div>
            <div><label htmlFor="k-dept" className="sr-only">Department</label><select id="k-dept" name="department" required defaultValue="" onBlur={blur} className={`${field} bg-dark`} aria-describedby="k-dept-err"><option value="">Select department *</option>{c.departments.map((o) => <option key={o}>{o}</option>)}</select><Err id="k-dept" text="Choose a department." show={!!bad["k-dept"]} /></div>
            <div className="sm:col-span-2"><label htmlFor="k-q" className="sr-only">Your question</label><textarea id="k-q" name="message" required rows={3} placeholder="Ask your question *" onBlur={blur} className={`${field} h-auto min-h-[110px] resize-y pt-3`} aria-describedby="k-q-err" /><Err id="k-q" text="A sentence is enough." show={!!bad["k-q"]} /></div>
            <fieldset className="sm:col-span-2"><legend className="text-[15px] font-medium">How did you hear about us?</legend><div className="mt-3 grid gap-2">{c.sources.map((s) => <label key={s} className="inline-flex items-center gap-3 text-[14px] text-white/90"><input type="radio" name="source" value={s} className="h-4 w-4 accent-[#2563ff]" />{s}</label>)}</div></fieldset>
            <div className="sm:col-span-2"><label className="inline-flex items-center gap-3 text-[14px]"><input id="k-terms" type="checkbox" name="terms" required onBlur={blur} className="h-5 w-5 rounded-xs accent-[#2563ff]" aria-describedby="k-terms-err" />I agree to the <a href="terms/" className="underline underline-offset-2">Terms and Conditions</a></label><Err id="k-terms" text="Tick the box so we can reply." show={!!bad["k-terms"]} /></div>
            <div className="sm:col-span-2"><Btn type="submit">{c.submit}</Btn></div>
          </form>
        )}
      </div>
    </section>
  );
}
