"use client";
// Services: centred headline and an accordion of six numbered rows. One row is open at a time, the open
// row shows its text beside the title, the chevron turns. Native buttons with aria-expanded.
import { useState } from "react";
import { CaretDownIcon } from "@phosphor-icons/react";
import type { AgencyContent } from "../content";
import { RevealGroup, Words } from "@/components/Reveal";
import { Container, H2 } from "./ui";

export default function Services({ s }: { s: AgencyContent["services"] }) {
  const [open, setOpen] = useState(0);
  return (
    <section id="services" className="py-20 lg:py-32" aria-labelledby="services-title">
      <Container>
        <H2 id="services-title" center><Words>{s.title}</Words></H2>
        <RevealGroup as="ul" className="mx-auto mt-16 max-w-[900px] border-t border-ink/20" itemClassName="border-b border-ink/20" stagger={0.07}>
          {s.items.map((it, i) => (
            <div key={it.href}>
              <button type="button" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} aria-controls={`svc-${i}`} className="grid w-full grid-cols-[48px_1fr_auto] items-center gap-6 py-7 text-left lg:grid-cols-[90px_1fr_1fr_auto]">
                <span className="text-[15px] font-bold text-ink">0{i + 1}</span>
                <span className="font-display text-[22px] font-bold leading-tight text-ink sm:text-[28px]">{it.title}</span>
                <span id={`svc-${i}`} className={`hidden text-[15px] leading-[1.55] text-body transition-[opacity,transform] duration-500 lg:block ${open === i ? "opacity-100" : "translate-y-2 opacity-0"}`}>{it.text}</span>
                <CaretDownIcon size={18} weight="bold" aria-hidden="true" className={`text-ink transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div className="grid transition-[grid-template-rows] duration-500 ease-out lg:hidden" style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}><p className="overflow-hidden pl-12 text-[15px] leading-[1.55] text-body"><span className="block pb-6">{it.text}</span></p></div>
            </div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
