"use client";
// Enquiry: a white card inset over a full-width photograph. Labels are visible (not placeholder-only),
// errors are tied to their field, and the form posts nowhere — it validates and shows a success state.
import Image from "next/image";
import { useId, useState } from "react";
import { CaretDownIcon, CheckCircleIcon } from "@phosphor-icons/react";
import { Badge, Button, Wrap } from "./ui";
import type { RealEstateContent } from "../content";

type Errors = Partial<Record<"name" | "email" | "phone", string>>;

export default function EnquiryBand({ e }: { e: RealEstateContent["enquiry"] }) {
  const uid = useId().replace(/:/g, "");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const fd = new FormData(ev.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const next: Errors = {};
    if (!name) next.name = "Please tell us your name.";
    if (!email) next.email = "Please add an email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "That email address does not look right.";
    if (!phone) next.phone = "Please add a phone number so we can call you back.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  const field =
    "h-[60px] w-full rounded-full bg-soft2 px-7 font-body text-[16px] text-ink placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-ink";

  return (
    <section id={e.id} className="bg-canvas pb-20 sm:pb-24 lg:pb-32">
      <Wrap>
        <div className="relative overflow-hidden rounded-[32px] sm:rounded-[50px]">
          <Image
            src={e.image.src}
            alt={e.image.alt}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            placeholder="blur"
            className="object-cover"
            style={{ objectPosition: e.image.position }}
          />
          <div aria-hidden className="absolute inset-0 bg-ink/25" />

          <div className="relative p-4 sm:p-8 lg:p-12">
            <div className="rounded-[26px] bg-canvas p-6 sm:rounded-[30px] sm:p-10 lg:p-14">
              <div className="flex justify-center">
                <Badge>{e.badge}</Badge>
              </div>
              <h2 className="mx-auto mt-6 max-w-[760px] text-center font-display text-[clamp(1.625rem,3.6vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.02em] text-ink">
                {e.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </h2>

              {sent ? (
                <p
                  role="status"
                  className="mx-auto mt-10 flex max-w-[560px] items-start gap-3 rounded-[20px] bg-[var(--t-accent-soft)] p-6 font-body text-[16px] leading-[1.5] text-ink"
                >
                  <CheckCircleIcon size={22} weight="light" className="mt-0.5 shrink-0" aria-hidden />
                  {e.success}
                </p>
              ) : (
                <form noValidate onSubmit={onSubmit} className="mx-auto mt-10 max-w-[840px]">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {([
                      ["name", e.fields.name, "text", "name"],
                      ["email", e.fields.email, "email", "email"],
                      ["phone", e.fields.phone, "tel", "tel"],
                    ] as const).map(([key, label, type, ac]) => (
                      <div key={key} className={key === "phone" ? "" : undefined}>
                        <label htmlFor={`${uid}-${key}`} className="mb-2 block font-body text-[14px] font-semibold text-ink">
                          {label} <span aria-hidden>*</span>
                          <span className="sr-only">(required)</span>
                        </label>
                        <input
                          id={`${uid}-${key}`}
                          name={key}
                          type={type}
                          autoComplete={ac}
                          aria-invalid={Boolean(errors[key])}
                          aria-describedby={errors[key] ? `${uid}-${key}-err` : undefined}
                          className={field}
                        />
                        {errors[key] && (
                          <p id={`${uid}-${key}-err`} className="mt-2 px-2 font-body text-[13px] text-[var(--t-error)]">
                            {errors[key]}
                          </p>
                        )}
                      </div>
                    ))}

                    <div>
                      <label htmlFor={`${uid}-subject`} className="mb-2 block font-body text-[14px] font-semibold text-ink">
                        {e.fields.subject}
                      </label>
                      <div className="relative">
                        <select id={`${uid}-subject`} name="subject" className={`${field} appearance-none pr-14`}>
                          {e.subjects.map((s) => (
                            <option key={s}>{s}</option>
                          ))}
                        </select>
                        <CaretDownIcon
                          size={18}
                          weight="light"
                          aria-hidden
                          className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-ink"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-[360px] font-body text-[15px] leading-[1.5] text-body">{e.helper}</p>
                    <Button type="submit" arrow className="shrink-0">
                      {e.submit}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
