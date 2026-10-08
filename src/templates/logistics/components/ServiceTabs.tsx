"use client";
// 09 The reference's tabbed service panel: the mode names across a hairline rail with a brand-coloured segment
// under the active one, then the photograph and the copy for that mode. Arrow, Home and End keys move and select.
import Image from "next/image";
import { useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import type { LogisticsContent } from "../content";
import { Btn, Container, Title } from "./ui";

export default function ServiceTabs({ t }: { t: LogisticsContent["tabs"] }) {
  const [id, setId] = useState(t.items[0]?.id ?? "");
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const i = t.items.findIndex((x) => x.id === id);
  const active = t.items[i] ?? t.items[0];
  if (!active) return null;

  function key(e: React.KeyboardEvent) {
    const map: Record<string, number> = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: t.items.length - 1 };
    const next = map[e.key];
    if (next === undefined) return;
    e.preventDefault();
    const n = (next + t.items.length) % t.items.length;
    setId(t.items[n].id); refs.current[n]?.focus();
  }

  return (
    <section className="bg-canvas pb-16 lg:pb-24" aria-labelledby="tabs-title">
      <h2 id="tabs-title" className="sr-only">Services by mode</h2>
      <Container>
        <div role="tablist" aria-label="Services by mode" onKeyDown={key} className="grid grid-cols-2 gap-x-6 border-b border-hairline sm:grid-cols-3 lg:flex lg:justify-between">
          {t.items.map((it, n) => {
            const on = it.id === id;
            return (
              <button key={it.id} ref={(el) => { refs.current[n] = el; }} type="button" role="tab" id={`${it.id}-tab`} aria-selected={on} aria-controls={`${it.id}-panel`} tabIndex={on ? 0 : -1} onClick={() => setId(it.id)}
                className={`relative -mb-px py-5 text-left text-[17px] transition-colors lg:text-center ${on ? "font-semibold text-primary" : "text-ink hover:text-(--t-ink-muted)"}`}>
                {it.tab}
                <span aria-hidden="true" className={`absolute inset-x-0 bottom-0 h-[3px] rounded-full transition-opacity duration-200 ${on ? "bg-primary opacity-100" : "opacity-0"}`} />
              </button>
            );
          })}
        </div>

        {t.items.map((it) => (
          <div key={it.id} role="tabpanel" id={`${it.id}-panel`} aria-labelledby={`${it.id}-tab`} hidden={it.id !== id} className="menu-in">
            <div className="grid items-center gap-10 pt-14 lg:grid-cols-2 lg:gap-16">
              <span className="relative block overflow-hidden rounded-[25px] bg-soft" style={{ aspectRatio: "4 / 3" }}>
                <Image src={it.image.src} alt={it.image.alt} fill placeholder="blur" sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              </span>
              <div>
                <Title className="max-w-[16ch] !text-[30px] sm:!text-[40px] lg:!text-[48px]">{it.title}</Title>
                <p className="mt-7 max-w-[52ch] text-[17px] font-semibold leading-[1.75] text-ink text-pretty">{it.leadBold}</p>
                <p className="mt-5 max-w-[56ch] text-[16px] leading-[1.75] text-(--t-ink-muted) text-pretty">{it.text}</p>
                <Reveal delay={0.1} className="mt-9"><Btn href={it.cta.href} tone="dark">{it.cta.label}</Btn></Reveal>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
