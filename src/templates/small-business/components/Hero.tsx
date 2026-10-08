// The reference's opening: a full-bleed photograph under a scrim with the headline at the lower left and a
// white quote card floating at the right. The card is this template's `hero-booking-card` — service, name,
// contact and the reference's area slider — and it posts nowhere, which it says rather than thanking anyone.
"use client";
import Image from "next/image";
import { useId, useState } from "react";
import { PhoneIcon, WarningCircleIcon } from "@phosphor-icons/react";
import type { SmallBusinessContent } from "../content";
import { Btn, Container, Title } from "./ui";

export default function Hero({ h }: { h: SmallBusinessContent["hero"] }) {
  const base = useId();
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [area, setArea] = useState(80);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.trim()) {
      setError(h.form.error);
      setSent(false);
      // On the next frame: `aria-describedby` is not on the field until React has rendered the message.
      requestAnimationFrame(() => document.getElementById(`${base}-contact`)?.focus());
      return;
    }
    setError(null);
    setSent(true);
  };

  // `--t-control-strong` on the border and `--t-muted` on the placeholder: the file's hairline is 1.2:1
  // and its muted-soft is 4.0:1, both under the bar for a control edge and for placeholder text.
  const field = "mt-1.5 min-h-12 w-full rounded-xl border border-(--t-control-strong) bg-canvas px-4 text-[16px] text-ink placeholder:text-(--t-muted) focus-visible:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-(--t-focus)";
  const label = "block text-[13px] font-semibold text-ink";

  return (
    <section aria-labelledby="hero-title" className="relative isolate -mt-[72px] overflow-hidden bg-ink pt-[72px] sb-on-dark">
      <Image
        src={h.image.src}
        alt={h.image.alt}
        priority
        placeholder="blur"
        sizes="100vw"
        className="sb-zoom absolute inset-0 -z-10 size-full object-cover"
      />
      {/* Two washes: the foot carries the headline, the head carries the nav. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/55 to-ink/65" />

      <Container className="grid gap-10 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center lg:gap-16 lg:py-20">
        <div className="sb-up">
          <Title id="hero-title" as="h1" size="hero" onDark>
            {h.titleLines.map((line) => <span key={line} className="block">{line}</span>)}
          </Title>
          <p className="mt-6 max-w-[48ch] text-[17px] leading-[1.65] text-(--t-on-dark) sm:text-[18px]">{h.lead}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Btn href={h.ctas.explore.href} size="lg">{h.ctas.explore.label}</Btn>
            <Btn href={`tel:${h.ctas.call.replace(/[^+\d]/g, "")}`} tone="call" size="lg">
              <PhoneIcon size={17} weight="fill" aria-hidden="true" />{h.ctas.call}
            </Btn>
          </div>

          <ul role="list" className="m-0 mt-7 flex list-none flex-wrap gap-x-6 gap-y-1.5 p-0">
            {h.trust.map((t) => (
              <li key={t} className="text-[14px] text-(--t-on-dark-soft)">{t}</li>
            ))}
          </ul>
        </div>

        <div className="sb-up rounded-[20px] bg-canvas p-6 text-ink shadow-(--t-shadow-lift) sm:p-7" style={{ animationDelay: "0.12s" }}>
          <h2 className="font-display text-[24px] font-bold tracking-[-0.02em] text-ink sm:text-[28px]">{h.form.title}</h2>
          <p className="mt-1.5 text-[14px] leading-[1.55] text-(--t-muted)">{h.form.lead}</p>

          <form noValidate onSubmit={submit} className="mt-5 grid gap-4">
            <div>
              <label htmlFor={`${base}-name`} className={label}>{h.form.name} <span className="font-normal text-(--t-muted)">({h.form.optional})</span></label>
              <input id={`${base}-name`} name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} placeholder={h.form.namePlaceholder} className={field} />
            </div>

            <div>
              <label htmlFor={`${base}-contact`} className={label}>{h.form.contact}</label>
              <input
                id={`${base}-contact`}
                name="contact"
                autoComplete="off"
                spellCheck={false}
                required
                aria-required="true"
                value={contact}
                onChange={(e) => { setContact(e.target.value); if (error) setError(null); }}
                placeholder={h.form.contactPlaceholder}
                aria-invalid={error ? true : undefined}
                aria-describedby={`${base}-note`}
                className={field}
              />
            </div>

            <div>
              <label htmlFor={`${base}-service`} className={label}>{h.form.service}</label>
              <select id={`${base}-service`} name="service" value={service} onChange={(e) => setService(e.target.value)} className={field}>
                <option value="">{h.form.servicePlaceholder}</option>
                {h.form.services.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            {/* The reference's area slider. A real range input, so it works from the keyboard and announces
                its own value; `aria-valuetext` gives the unit rather than a bare number. */}
            <div>
              <span className="flex items-baseline justify-between gap-3">
                <label htmlFor={`${base}-area`} className={label}>{h.form.area}</label>
                <output htmlFor={`${base}-area`} aria-hidden="true" className="text-[15px] font-bold tabular-nums text-primary">{area}&nbsp;{h.form.areaUnit}</output>
              </span>
              <input
                id={`${base}-area`}
                name="area"
                type="range"
                min={20}
                max={400}
                step={10}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                aria-valuetext={`${area} ${h.form.areaUnit}${area >= 400 ? " or more" : ""}`}
                className="sb-range mt-1"
              />
              {/* The bounds, shown as well as announced — the input's own min and max carry them to AT. */}
              <span aria-hidden="true" className="flex justify-between text-[12px] text-(--t-muted)">
                <span>20&nbsp;{h.form.areaUnit}</span>
                <span>400&nbsp;{h.form.areaUnit}+</span>
              </span>
            </div>

            {error && (
              <p id={`${base}-err`} role="alert" className="flex items-center gap-2 text-[14px] font-semibold text-(--t-error)">
                <WarningCircleIcon size={16} weight="fill" aria-hidden="true" />{error}
              </p>
            )}

            <Btn type="submit" size="lg" className="w-full">{h.form.submit}</Btn>
            <p role="status" className="text-[14px] font-semibold text-ink">
              {sent ? `${h.form.confirm}${service ? ` (${service}, ${area} ${h.form.areaUnit}.)` : ""}` : ""}
            </p>
            <p id={`${base}-note`} className="text-[13px] leading-[1.55] text-(--t-muted)">{h.form.note}</p>
          </form>
        </div>
      </Container>
    </section>
  );
}
