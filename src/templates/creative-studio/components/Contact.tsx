"use client";
// 10 Contact: header, the text with lime check marks and the contact person on the left; underline-only
// fields (name, email, project) and the full-width lime pill on the right. Inline validation.
import Image from "next/image";
import { useRef, useState } from "react";
import { animate } from "animejs";
import { CheckIcon } from "@phosphor-icons/react";
import type { StudioContent } from "../content";
import { Reveal } from "@/components/Reveal";
import { Container, Pill, SectionHead } from "./ui";

const field = "h-14 w-full border-b border-hairline-strong bg-transparent px-0 text-[17px] text-ink placeholder:text-mute focus:border-ink focus:outline-none data-[invalid=true]:border-[#DF2225]";

export default function Contact({ c }: { c: StudioContent["contact"] }) {
  const form = useRef<HTMLFormElement>(null); const done = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false); const [bad, setBad] = useState<Record<string, boolean>>({});
  const check = (el: HTMLInputElement | HTMLTextAreaElement) => { const ok = el.validity.valid; setBad((s) => ({ ...s, [el.id]: !ok })); el.setAttribute("aria-invalid", String(!ok)); return ok; };
  const submit = (e: React.FormEvent) => { e.preventDefault(); const els = Array.from(form.current!.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[required]")); const first = els.filter((el) => !check(el))[0]; if (first) { first.focus(); return; } setSent(true); requestAnimationFrame(() => { if (done.current) { animate(done.current, { opacity: [0, 1], translateY: [10, 0], duration: 400, ease: "outExpo" }); done.current.focus(); } }); };
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => { if (e.target.value) check(e.target); };
  return (
    <section id="contact" className="py-24 lg:py-32" aria-labelledby="contact-title">
      <Container>
        <SectionHead n={c.n} label={c.label} title={c.title} text="" id="contact-title" />
        <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-10">
          <Reveal from="left" className="grid content-start gap-8">
            <p className="max-w-[36ch] text-[17px] leading-[1.6] text-body">{c.text}</p>
            <ul className="grid gap-4">{c.checks.map((k) => <li key={k} className="flex items-center gap-4 text-[16px] text-ink"><span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary"><CheckIcon size={14} weight="bold" aria-hidden="true" /></span>{k}</li>)}</ul>
            <div className="flex items-center gap-5"><span className="h-16 w-16 overflow-hidden rounded-full"><Image src={c.person.avatar.src} alt={c.person.avatar.alt} placeholder="blur" sizes="64px" className="h-full w-full object-cover" /></span><span className="grid"><span className="text-[18px] font-semibold text-ink">{c.person.name}</span><span className="text-[15px] text-body">{c.person.role}</span></span></div>
          </Reveal>
          {sent ? <div ref={done} role="status" aria-live="polite" tabIndex={-1} className="rounded-md bg-soft p-6"><p className="font-semibold text-[#2E7D32]">Message sent.</p><p className="mt-1 text-[16px] text-body">{c.reply}</p></div> : (
            <Reveal from="right" delay={0.15}><form ref={form} onSubmit={submit} noValidate className="grid gap-6">
              <div><label htmlFor="s-name" className="sr-only">Name</label><input id="s-name" name="name" type="text" autoComplete="name" required placeholder="Name" onBlur={blur} className={field} aria-describedby="s-name-err" /><span id="s-name-err" className={`mt-1 text-[13px] text-[#DF2225] ${bad["s-name"] ? "block" : "hidden"}`}>Enter your name.</span></div>
              <div><label htmlFor="s-email" className="sr-only">Email</label><input id="s-email" name="email" type="email" autoComplete="email" spellCheck={false} required placeholder="Email" onBlur={blur} className={field} aria-describedby="s-email-err" /><span id="s-email-err" className={`mt-1 text-[13px] text-[#DF2225] ${bad["s-email"] ? "block" : "hidden"}`}>Enter an email we can reply to.</span></div>
              <div><label htmlFor="s-project" className="sr-only">Tell us about your project</label><textarea id="s-project" name="project" required rows={3} placeholder="Tell us about your project…" onBlur={blur} className={`${field} h-auto min-h-[96px] resize-y pt-4`} aria-describedby="s-project-err" /><span id="s-project-err" className={`mt-1 text-[13px] text-[#DF2225] ${bad["s-project"] ? "block" : "hidden"}`}>A sentence is enough.</span></div>
              <Pill type="submit" className="justify-between"><span className="flex-1 text-center">{c.submit}</span></Pill>
            </form></Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
