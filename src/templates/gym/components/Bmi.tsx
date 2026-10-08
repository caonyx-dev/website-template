"use client";
// BMI calculator like the reference: giant three-line title beside a surface card with underline fields (height,
// weight, age, sex) and the volt button. Each required field reports its own error and the first invalid one is
// focused; the result counts up with anime.js (the count is decorative, the live region reads the final value)
// and names the WHO category; the health disclaimer sits beneath. Nothing is sent anywhere.
import { useRef, useState } from "react";
import { animate } from "animejs";
import { useReducedMotionSafe } from "@/components/Reveal";
import type { GymContent } from "../content";
import { Btn, Container, Giant, Num } from "./ui";

const field = "h-12 w-full border-0 border-b border-hairline-strong bg-transparent px-0 text-[16px] text-ink placeholder:text-mute focus-visible:border-b-2 focus-visible:border-primary focus-visible:outline-none aria-[invalid=true]:border-accent";
const category = (b: number) => (b < 18.5 ? "Underweight" : b < 25 ? "Healthy range" : b < 30 ? "Overweight" : "Obese");

export default function Bmi({ b }: { b: GymContent["bmi"] }) {
  const reduce = useReducedMotionSafe();
  const [result, setResult] = useState<number | null>(null);
  const [errs, setErrs] = useState<{ height?: string; weight?: string }>({});
  const out = useRef<HTMLSpanElement>(null);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; const f = new FormData(form);
    const h = Number(f.get("height")) / 100, w = Number(f.get("weight"));
    const next: typeof errs = {};
    if (!(h > 0.5 && h < 2.6)) next.height = "Enter a height between 50 and 260 cm.";
    if (!(w > 20 && w < 400)) next.weight = "Enter a weight between 20 and 400 kg.";
    setErrs(next);
    if (next.height || next.weight) { setResult(null); (form.elements.namedItem(next.height ? "height" : "weight") as HTMLInputElement)?.focus(); return; }
    const v = w / (h * h); setResult(v);
    requestAnimationFrame(() => { const el = out.current; if (!el || reduce) return; const o = { v: 0 }; animate(o, { v, duration: 1200, ease: "outExpo", onUpdate: () => { el.textContent = o.v.toFixed(1); } }); });
  };
  const input = (id: string, name: "height" | "weight" | "age", label: string, ph: string, min: number, max: number, err?: string) => (
    <div className="grid gap-1">
      <label htmlFor={id} className="text-[14px] font-medium text-ink">{label}{name !== "age" && " *"}</label>
      <input id={id} name={name} type="number" inputMode="decimal" min={min} max={max} placeholder={ph} autoComplete="off" required={name !== "age"} aria-invalid={err ? true : undefined} aria-describedby={err ? `${id}-err` : undefined} className={`${field} tabular-nums`} />
      {err && <span id={`${id}-err`} className="text-[13px] text-accent">{err}</span>}
    </div>
  );
  return (
    <section className="py-24 lg:py-32" aria-labelledby="bmi-title">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Giant lines={b.title} id="bmi-title" size="text-[clamp(56px,9vw,136px)]" />
        <form onSubmit={onSubmit} noValidate className="rounded-lg border border-hairline bg-(--t-surface-elevated) p-8 lg:p-12">
          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {input("bmi-h", "height", b.fields.height, "170…", 50, 260, errs.height)}
            {input("bmi-w", "weight", b.fields.weight, "72…", 20, 400, errs.weight)}
            {input("bmi-a", "age", b.fields.age, "30…", 14, 100)}
            <div className="grid gap-1"><label htmlFor="bmi-s" className="text-[14px] font-medium text-ink">{b.fields.sex}</label><select id="bmi-s" name="sex" defaultValue="" autoComplete="off" className={`${field} bg-(--t-surface-elevated)`}><option value="">Prefer not to say</option>{b.sexes.map((s) => <option key={s}>{s}</option>)}</select></div>
          </div>
          <div className="mt-8"><Btn type="submit">{b.submit}</Btn></div>
          <div role="status" aria-live="polite" className="mt-6 min-h-[64px]">
            {result !== null && <p className="flex items-baseline gap-3"><Num className="font-display text-[56px] font-bold leading-none text-ink"><span ref={out} aria-hidden="true">{reduce ? result.toFixed(1) : "0.0"}</span><span className="sr-only">{result.toFixed(1)}</span></Num><span className="text-[15px] text-body">BMI · {category(result)}</span></p>}
          </div>
          <p className="mt-4 text-[12px] leading-[1.5] text-mute">{b.disclaimer}</p>
        </form>
      </Container>
    </section>
  );
}
