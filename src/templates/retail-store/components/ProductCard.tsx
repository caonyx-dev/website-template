// The DESIGN.md's `product-card`: a square photograph on a 20px plate (the radius measured off the reference),
// a badge stack top-left capped at two, a save control top-right, the quick-add sliding up over the foot of the
// photograph on hover — and always present where there is no pointer — then the name, the price row and the
// colour swatches. Choosing a swatch sets which variant quick-add puts in the bag, so the control is never a lie.
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HeartIcon, HeartStraightIcon } from "@phosphor-icons/react";
import { CURRENCY, LOCALE } from "../content";
import { useShop, type Product } from "./shop";
import { Badge, StockPill, money } from "./ui";

export default function ProductCard({ p, sizes = "(min-width: 1024px) 24vw, 50vw" }: { p: Product; sizes?: string }) {
  const { add, setOpen, saved, toggleSaved } = useShop();
  const [variant, setVariant] = useState(p.variants[0]?.label ?? "One colour");
  const isSaved = saved.includes(p.id);

  return (
    <article className="rst-card group relative flex h-full flex-col rounded-xl bg-canvas">
      <div className="relative overflow-hidden rounded-xl bg-(--t-soft)">
        {/* Not a link: the title below carries the only one, stretched across the whole card by its
            `::after`. That keeps one link per product — a second one here would announce the product
            twice — while the photograph keeps its own description. */}
        <Image
          src={p.image.src}
          alt={p.image.alt}
          placeholder="blur"
          sizes={sizes}
          className="aspect-square size-full object-cover"
        />

        {/* Never more than two badges, which is the rule in this template's DESIGN.md. */}
        {p.badge && (
          <div className="pointer-events-none absolute left-3 top-3 flex flex-col items-start gap-1.5">
            <Badge kind={p.badge}>{p.badgeLabel}</Badge>
          </div>
        )}

        <button
          type="button"
          onClick={() => toggleSaved(p.id)}
          aria-pressed={isSaved}
          className="absolute right-2.5 top-2.5 z-20 inline-flex size-10 items-center justify-center rounded-full bg-canvas/90 text-ink transition-colors duration-200 hover:bg-canvas"
        >
          {isSaved
            ? <HeartStraightIcon size={17} weight="fill" aria-hidden="true" className="text-primary" />
            : <HeartIcon size={17} aria-hidden="true" />}
          <span className="sr-only">Save {p.name}</span>
        </button>

        <div className="rst-quickadd absolute inset-x-2.5 bottom-2.5 z-20">
          <button
            type="button"
            onClick={() => { add(p, variant); setOpen(true); }}
            className="inline-flex min-h-10 w-full items-center justify-center rounded-lg bg-ink px-4 text-[13px] font-semibold uppercase tracking-[0.04em] text-(--t-on-dark) transition-colors duration-200 hover:bg-primary"
          >
            Quick add
            <span className="sr-only"> {p.name}, {variant}, to your bag</span>
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-1 pb-1 pt-4 text-center">
        <h3 className="font-display text-[15px] font-semibold leading-[1.35] text-ink">
          <Link href={p.href} className="inline-block py-0.5 text-ink no-underline transition-colors duration-200 before:absolute before:inset-0 before:z-10 before:content-[''] hover:text-primary">{p.name}</Link>
        </h3>

        <p className="mt-2 flex items-baseline justify-center gap-2">
          <span className="font-display text-[15px] font-semibold tabular-nums text-ink">{money(p.price, LOCALE, CURRENCY)}</span>
          {p.was && (
            <span className="text-[13px] tabular-nums text-(--t-price-was) line-through">
              <span className="sr-only">Was </span>{money(p.was, LOCALE, CURRENCY)}
            </span>
          )}
        </p>

        {p.variants.length > 0 && (
          <fieldset className="relative z-20 m-0 mt-3 border-0 p-0">
            <legend className="sr-only">Colour — {p.name}</legend>
            <div className="flex flex-wrap items-center justify-center gap-1">
              {p.variants.map((v) => (
                <label
                  key={v.label}
                  className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-1 has-[:focus-visible]:outline-(--t-focus)"
                >
                  <input
                    type="radio"
                    name={`variant-${p.id}`}
                    className="sr-only"
                    checked={variant === v.label}
                    onChange={() => setVariant(v.label)}
                  />
                  <span
                    aria-hidden="true"
                    style={{ backgroundColor: v.swatch }}
                    className={`block size-4 rounded-full ring-1 ring-inset ring-black/15 ${variant === v.label ? "outline outline-1 outline-offset-[3px] outline-ink" : ""}`}
                  />
                  <span className="sr-only">{v.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        )}

        {p.stock && <p className="mt-3"><StockPill>{p.stock}</StockPill></p>}
      </div>
    </article>
  );
}
