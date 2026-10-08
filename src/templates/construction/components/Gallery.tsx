"use client";
// project-card gallery with category-tab filters. Tiles are 4:3 photographs flush to the edge with a
// graphite caption bar (name, trade badge, place). The active filter is mirrored into ?type= so it can
// be linked to; tiles re-flow with Motion layout animation.
import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { useReducedMotionSafe } from "@/components/Reveal";
import type { ConstructionContent } from "../content";
import { Badge, Btn, Container, Headline } from "./ui";

const ALL = "All";
const EVT = "gallery-type";
// The URL is the source of truth for the active filter, so a filtered gallery can be linked to.
const subscribe = (cb: () => void) => { window.addEventListener("popstate", cb); window.addEventListener(EVT, cb); return () => { window.removeEventListener("popstate", cb); window.removeEventListener(EVT, cb); }; };
const readType = () => new URLSearchParams(window.location.search).get("type") ?? ALL;

export default function Gallery({ g }: { g: ConstructionContent["gallery"] }) {
  const reduce = useReducedMotionSafe();
  const raw = useSyncExternalStore(subscribe, readType, () => ALL);
  const type = g.types.includes(raw) ? raw : ALL;
  const pick = (t: string) => {
    const u = new URL(window.location.href);
    if (t === ALL) u.searchParams.delete("type"); else u.searchParams.set("type", t);
    window.history.replaceState(null, "", u);
    window.dispatchEvent(new Event(EVT));
  };
  const shown = g.projects.filter((p) => type === ALL || p.type === type);
  const tabs = [ALL, ...g.types];

  return (
    <section id={g.id} className="bg-soft py-20 lg:py-24" aria-labelledby={`${g.id}-title`}>
      <Container wide>
        <Headline id={`${g.id}-title`} title={g.title} lead={g.lead} />
        <div role="tablist" aria-label="Project type" className="mb-6 flex flex-wrap gap-1">
          {tabs.map((t) => (
            <button key={t} role="tab" type="button" aria-selected={type === t} onClick={() => pick(t)} className={`rounded-sm px-3.5 py-2.5 text-[12px] font-medium uppercase tracking-[.08em] transition-colors ${type === t ? "bg-ink text-on-dark" : "text-mute hover:text-ink"}`}>{t}</button>
          ))}
        </div>
        <LayoutGroup>
          <motion.ul layout={!reduce} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
            <AnimatePresence initial={false}>
              {shown.map((p, i) => (
                <motion.li key={p.href} layout={!reduce} initial={reduce ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={reduce ? undefined : { opacity: 0, scale: 0.96 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className={`min-w-0 ${type === ALL && i === 0 ? "sm:col-span-2" : ""}`}>
                  <Link href={p.href} className="group grid overflow-hidden rounded-sm bg-surface no-underline">
                    <div className={`relative overflow-hidden ${type === ALL && i === 0 ? "aspect-[4/3] sm:aspect-[2/1]" : "aspect-[4/3]"}`}>
                      <Image src={p.image.src} alt={p.image.alt} placeholder="blur" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                    </div>
                    <div className="flex items-center justify-between gap-3 bg-dark px-4 py-3 text-on-dark">
                      <span className="grid min-w-0 gap-0.5">
                        <span className="truncate text-[15px] font-medium">{p.title}</span>
                        <span className="text-[13px] tabular-nums text-on-dark-muted">{p.place}</span>
                      </span>
                      <Badge>{p.type}</Badge>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </LayoutGroup>
        {shown.length === 0 && <p className="py-10 text-center text-body">No projects of this type yet.</p>}
        <p className="mt-10"><Btn href={g.all.href} variant="secondary">{g.all.label} <ArrowRightIcon size={18} weight="light" aria-hidden="true" /></Btn></p>
      </Container>
    </section>
  );
}
