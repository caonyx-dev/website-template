"use client";
// 09 The food menu: text tabs over two ruled columns of dishes with dotted price leaders, a bordered card for
// the set menus beside them, two dish photographs and the allergen note. Changing a tab crossfades the panel.
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import type { RestaurantContent } from "../content";
import { Btn, Container, MenuRow, SectionHead } from "./ui";
import { TabList, TabPanel, useTabParam } from "./Tabs";

export default function FoodMenu({ m }: { m: RestaurantContent["food"] }) {
  const ids = m.panels.map((p) => p.id);
  const [tab, setTab] = useTabParam("menu", ids[0] ?? "", ids);
  if (m.panels.length === 0) return null;
  return (
    <section id="menu" className="scroll-mt-[124px] bg-soft py-20 lg:py-28" aria-labelledby="menu-title">
      <Container>
        <SectionHead id="menu-title" eyebrow={m.eyebrow} title={m.title} lead={m.lead} />
        <Reveal delay={0.1}><TabList label="Menu sections" tabs={m.panels.map((p) => ({ id: p.id, label: p.label }))} value={tab} onChange={setTab} /></Reveal>
        {m.panels.map((p) => (
          <TabPanel key={p.id} id={p.id} active={p.id === tab}>
            <p className="mt-8 text-center text-[13px] uppercase tracking-[1.4px] text-mute">{p.note}</p>
            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_320px] lg:gap-12">
              <ul className="m-0 grid list-none content-start p-0">{p.left.map((d) => <MenuRow key={d.name} {...d} />)}</ul>
              <ul className="m-0 grid list-none content-start p-0">{p.right.map((d) => <MenuRow key={d.name} {...d} />)}</ul>
              <div className="h-fit border border-hairline bg-surface p-7">
                <h3 className="font-display text-[22px] font-semibold text-ink">{p.card.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-mute">{p.card.text}</p>
                <ul className="m-0 mt-5 grid list-none p-0">{p.card.items.map((d) => <MenuRow key={d.name} {...d} />)}</ul>
                <div className="mt-6"><Btn href={m.cta.href} tone="outline" className="w-full">{m.cta.label}</Btn></div>
              </div>
            </div>
          </TabPanel>
        ))}
        <div className="mt-14 grid items-center gap-8 md:grid-cols-[180px_180px_1fr]">
          {m.photos.map((img, i) => (
            <Reveal key={i} from="clip" delay={i * 0.1}>
              <span className="relative block overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
                <Image src={img.src} alt={img.alt} placeholder="blur" sizes="(min-width: 768px) 180px, 90vw" className="h-full w-full object-cover" />
              </span>
            </Reveal>
          ))}
          <Reveal delay={0.2}><p className="text-[14px] leading-[1.7] text-mute">{m.allergen}</p></Reveal>
        </div>
      </Container>
    </section>
  );
}
