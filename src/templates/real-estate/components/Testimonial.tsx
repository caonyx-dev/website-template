"use client";
// Testimonial on the beige band. The circular badge above the quote has its label set around the
// circumference and rotates slowly; the quote itself steps with prev/next buttons.
import Image from "next/image";
import { useId, useState } from "react";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { Wrap } from "./ui";
import type { RealEstateContent } from "../content";

export default function Testimonial({ t }: { t: RealEstateContent["testimonial"] }) {
  const [i, setI] = useState(0);
  const pathId = useId().replace(/:/g, "");
  const item = t.items[i];
  const go = (d: number) => setI((v) => (v + d + t.items.length) % t.items.length);
  const ring = `${t.badgeText} · `.repeat(3);

  return (
    <section className="relative bg-soft pb-20 pt-28 sm:pb-24 sm:pt-32">
      {/* Rotating badge, straddling the top edge of the band. The label runs around the circumference
          OUTSIDE the photograph, so the image must sit inside the text ring's radius. */}
      <div className="absolute inset-x-0 -top-[76px] flex justify-center">
        <div className="relative size-[152px] rounded-full bg-soft sm:size-[172px]">
          <svg viewBox="0 0 172 172" className="re-spin absolute inset-0 size-full" aria-hidden>
            <defs>
              <path id={pathId} d="M86,86 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" fill="none" />
            </defs>
            <text className="fill-ink font-body text-[10px] font-semibold uppercase tracking-[0.16em]">
              <textPath href={`#${pathId}`}>{ring}</textPath>
            </text>
          </svg>
          <div className="absolute inset-[26px] overflow-hidden rounded-full">
            <Image src={t.image.src} alt={t.image.alt} fill sizes="128px" placeholder="blur" className="object-cover" />
          </div>
        </div>
      </div>

      <Wrap>
        <div className="relative mx-auto max-w-[1000px] px-0 sm:px-16">
          <blockquote className="text-center">
            <p className="font-display text-[clamp(1.5rem,3.4vw,2.75rem)] font-bold leading-[1.18] tracking-[-0.02em] text-ink">
              “{item.quote}”
            </p>
            <footer className="mt-10">
              <p className="font-body text-[17px] font-semibold text-ink decoration-primary decoration-2 underline underline-offset-4">
                {item.name}
              </p>
              <p className="mt-1.5 font-body text-[15px] text-mute">{item.role}</p>
            </footer>
          </blockquote>

          {t.items.length > 1 && (
            <div className="mt-10 flex items-center justify-center gap-4 sm:mt-0">
              <button
                type="button"
                onClick={() => go(-1)}
                className="grid size-12 place-items-center rounded-full bg-canvas text-ink transition-transform duration-300 hover:-translate-x-0.5 sm:absolute sm:left-0 sm:top-1/2 sm:-translate-y-1/2 sm:hover:-translate-y-1/2"
              >
                <span className="sr-only">Previous testimonial</span>
                <CaretLeftIcon size={18} weight="light" />
              </button>
              <p className="font-body text-[14px] tabular-nums text-mute sm:hidden">
                {i + 1} / {t.items.length}
              </p>
              <button
                type="button"
                onClick={() => go(1)}
                className="grid size-12 place-items-center rounded-full bg-canvas text-ink transition-transform duration-300 hover:translate-x-0.5 sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 sm:hover:-translate-y-1/2"
              >
                <span className="sr-only">Next testimonial</span>
                <CaretRightIcon size={18} weight="light" />
              </button>
            </div>
          )}
        </div>
      </Wrap>
    </section>
  );
}
