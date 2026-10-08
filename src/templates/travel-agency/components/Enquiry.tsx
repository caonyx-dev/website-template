// This band is not in the reference. It is the DESIGN.md's `enquiry-bar-pill` — the file calls it "the
// signature homepage element" — a fully round white bar divided by vertical rules into Where / When /
// Travellers, closing on the azure orb. Real selects and a real stepper, so it works with a keyboard and
// announces itself; it posts nowhere and says so.
"use client";
import { useId, useState } from "react";
import { ArrowRightIcon, MinusIcon, PlusIcon, WarningCircleIcon } from "@phosphor-icons/react";
import type { TravelContent } from "../content";
import { Container } from "./ui";

/** Adults / children counter, as the DESIGN.md's `travellers-stepper` sets it out. */
function Stepper({ label, one, value, min, max = 12, set }: { label: string; one: string; value: number; min: number; max?: number; set: (n: number) => void }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-[14px] text-(--t-body)">{label}</span>
      <span className="inline-flex items-center gap-1">
        {/* `aria-disabled` rather than `disabled`: a control that goes flat while it holds focus drops the
            reader onto the body. It stays focusable and simply refuses to go below the floor. */}
        <button
          type="button"
          aria-disabled={value <= min}
          onClick={() => value > min && set(value - 1)}
          className={`inline-flex size-9 items-center justify-center rounded-full border border-(--t-control) text-ink transition-colors duration-200 ${value <= min ? "cursor-not-allowed text-(--t-muted-soft)" : "hover:border-ink"}`}
        >
          <MinusIcon size={12} weight="bold" aria-hidden="true" />
          <span className="sr-only">One fewer {one}</span>
        </button>
        <span aria-live="polite" className="min-w-7 text-center text-[15px] font-semibold tabular-nums text-ink">
          {value}<span className="sr-only"> {value === 1 ? one : label.toLowerCase()}</span>
        </span>
        <button
          type="button"
          aria-disabled={value >= max}
          onClick={() => value < max && set(value + 1)}
          className={`inline-flex size-9 items-center justify-center rounded-full border border-(--t-control) text-ink transition-colors duration-200 ${value >= max ? "cursor-not-allowed text-(--t-muted-soft)" : "hover:border-ink"}`}
        >
          <PlusIcon size={12} weight="bold" aria-hidden="true" />
          <span className="sr-only">One more {one}</span>
        </button>
      </span>
    </div>
  );
}

export default function Enquiry({ e }: { e: TravelContent["enquiry"] }) {
  const base = useId();
  const [where, setWhere] = useState("");
  const [when, setWhen] = useState(e.when.options[0]);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!where) {
      setError(e.error);
      setSent(false);
      // On the next frame: `aria-describedby` is not on the field until React has rendered the message.
      requestAnimationFrame(() => document.getElementById(`${base}-where`)?.focus());
      return;
    }
    setError(null);
    setSent(true);
  };

  return (
    <section id="enquiry" aria-labelledby="enquiry-title" className="scroll-mt-28 bg-canvas pb-14 pt-4 sm:pb-20">
      <Container>
        <h2 id="enquiry-title" className="sr-only">{e.title}</h2>
        <form noValidate onSubmit={submit}>
          <div className="grid overflow-hidden rounded-[32px] border border-(--t-hairline) bg-canvas shadow-(--t-shadow-lift) lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.1fr)_auto] lg:rounded-full">
            <div className="flex flex-col justify-center border-b border-(--t-hairline) px-6 py-5 lg:border-b-0 lg:border-r lg:pl-9">
              <label htmlFor={`${base}-where`} className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-(--t-muted)">{e.where.label}</label>
              <select
                id={`${base}-where`}
                name="where"
                value={where}
                onChange={(ev) => { setWhere(ev.target.value); if (error) setError(null); }}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? `${base}-err` : undefined}
                className="mt-1 min-h-11 w-full bg-canvas text-[16px] text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--t-focus)"
              >
                <option value="">{e.where.placeholder}</option>
                {e.where.options.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            <div className="flex flex-col justify-center border-b border-(--t-hairline) px-6 py-5 lg:border-b-0 lg:border-r">
              <label htmlFor={`${base}-when`} className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-(--t-muted)">{e.when.label}</label>
              <select
                id={`${base}-when`}
                name="when"
                value={when}
                onChange={(ev) => setWhen(ev.target.value)}
                className="mt-1 min-h-11 w-full bg-canvas text-[16px] text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--t-focus)"
              >
                {e.when.options.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            <fieldset className="m-0 flex flex-col justify-center border-0 border-b border-(--t-hairline) px-6 py-5 lg:border-b-0 lg:border-r">
              <legend className="text-[12px] font-semibold uppercase tracking-[0.1em] text-(--t-muted)">{e.who.label}</legend>
              <div className="mt-1.5 grid gap-1.5">
                <Stepper label={e.who.adults} one={e.who.adultOne} value={adults} min={1} set={setAdults} />
                <Stepper label={e.who.children} one={e.who.childOne} value={children} min={0} set={setChildren} />
              </div>
            </fieldset>

            <div className="flex items-center justify-center gap-4 px-6 py-5 lg:px-5">
              <button
                type="submit"
                className="group inline-flex min-h-[56px] items-center justify-center gap-2.5 rounded-full bg-(--t-primary-deep) px-7 text-[15px] font-semibold text-(--t-on-primary) transition-colors duration-200 hover:bg-(--t-primary-active) lg:size-[56px] lg:px-0"
              >
                <span className="lg:sr-only">{e.submit}</span>
                <ArrowRightIcon size={18} weight="bold" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
              </button>
            </div>
          </div>

          {error && (
            <p id={`${base}-err`} role="alert" className="mt-4 flex items-center gap-2 text-[14px] font-semibold text-(--t-error)">
              <WarningCircleIcon size={16} weight="fill" aria-hidden="true" />{error}
            </p>
          )}
          <p role="status" className="mt-4 text-[15px] font-semibold text-ink">
            {sent ? `${e.confirm} (${where}, ${when}, ${adults} ${e.who.adults.toLowerCase()}, ${children} ${e.who.children.toLowerCase()}.)` : ""}
          </p>
          <p className="mt-3 text-[13px] leading-[1.6] text-(--t-muted)">{e.note}</p>
        </form>
      </Container>
    </section>
  );
}
