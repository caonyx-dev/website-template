// 06 Team: four square portraits with name and role.
import Image from "next/image";
import { RevealGroup } from "@/components/Reveal";
import type { StudioContent } from "../content";
import { Container, SectionHead } from "./ui";

export default function Team({ t }: { t: StudioContent["team"] }) {
  return (
    <section className="py-24 lg:py-32" aria-labelledby="team-title">
      <Container>
        <SectionHead n={t.n} label={t.label} title={t.title} text={t.text} id="team-title" />
        <RevealGroup as="ul" className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4" stagger={0.1} from="clip">
          {t.people.map((p) => <div key={p.name + p.role} className="group grid gap-4"><span className="block aspect-square overflow-hidden rounded-sm bg-soft2"><Image src={p.image.src} alt={p.image.alt} placeholder="blur" sizes="(min-width: 1024px) 25vw, 50vw" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></span><span className="grid gap-1"><span className="font-display text-[26px] font-bold tracking-[-0.5px] text-ink">{p.name}</span><span className="text-[15px] text-body">{p.role}</span></span></div>)}
        </RevealGroup>
      </Container>
    </section>
  );
}
