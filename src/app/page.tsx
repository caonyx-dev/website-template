import Image from "next/image";
import Link from "next/link";
import { existsSync } from "node:fs";
import path from "node:path";
import { getTemplates, tokenStyle, BUILT } from "@/lib/templates";

// Gallery: one card per template. The card leads with a real snapshot of the page behind it, taken from
// `public/previews/<slug>.jpg`, and wraps it in that template's own palette and typefaces so the chrome
// still reads as the template. Regenerate the snapshots with `npm run previews`.
export default function GalleryPage() {
  const templates = getTemplates();
  const fontHrefs = Array.from(new Set(templates.map((t) => t.fontLink).filter((h): h is string => !!h)));
  const built = templates.filter((t) => t.built);
  const specOnly = templates.filter((t) => !t.built);
  return (
    <main className="mx-auto w-full max-w-[1360px] px-5 py-10 sm:px-8 sm:py-14">
      {fontHrefs.map((h) => <link key={h} rel="stylesheet" href={h} />)}
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-[28px] font-semibold tracking-tight sm:text-[34px]">Caonyx templates</h1>
        </div>
        <p className="text-sm tabular-nums text-mute">{built.length} built · {specOnly.length} spec only</p>
      </header>

      <section aria-labelledby="built-title" className="mb-12">
        <h2 id="built-title" className="mb-4 text-xs font-medium uppercase tracking-[.14em] text-mute">Built pages</h2>
        <ul className="m-0 grid list-none gap-5 p-0 [grid-template-columns:repeat(auto-fill,minmax(min(100%,400px),1fr))]">
          {built.map((t) => <li key={t.slug}><Card t={t} href={`/${t.slug}`} badge={BUILT[t.slug].label} /></li>)}
        </ul>
      </section>

      {/* Every template now has a real page, so this section is empty and the `[slug]` style-sheet route it
          linked to has been removed. It comes back on its own if a new, unbuilt DESIGN.md is added. */}
      {specOnly.length > 0 && (
        <section aria-labelledby="spec-title">
          <h2 id="spec-title" className="mb-4 text-xs font-medium uppercase tracking-[.14em] text-mute">Design systems, page not built yet</h2>
          <ul className="m-0 grid list-none gap-5 p-0 [grid-template-columns:repeat(auto-fill,minmax(min(100%,300px),1fr))]">
            {specOnly.map((t) => <li key={t.slug}><Card t={t} href={`/${t.slug}`} badge="Style sheet" compact /></li>)}
          </ul>
        </section>
      )}
    </main>
  );
}

function Card({ t, href, badge, compact = false }: { t: ReturnType<typeof getTemplates>[number]; href: string; badge: string; compact?: boolean }) {
  const k = t.tokens;
  // Read at build time: a template without a snapshot yet falls back to a token swatch rather than a gap.
  const preview = `/previews/${t.slug}.jpg`;
  const hasPreview = existsSync(path.join(process.cwd(), "public", "previews", `${t.slug}.jpg`));

  return (
    <Link
      href={href}
      style={tokenStyle(k) as React.CSSProperties}
      className="group block h-full overflow-hidden rounded-[14px] border border-hairline bg-surface text-inherit no-underline shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:outline-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {/* The snapshot. The page itself is the picture; the card only frames it. */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-hairline bg-canvas">
        {hasPreview ? (
          <Image
            src={preview}
            alt={`The ${t.title} homepage, as it renders at desktop width`}
            width={1120}
            height={700}
            sizes="(min-width: 1360px) 420px, (min-width: 640px) 45vw, 92vw"
            className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        ) : (
          <div className="flex size-full items-center justify-center" style={{ background: k.soft }}>
            <span className="text-[12px] uppercase tracking-[.12em]" style={{ color: k.accentDeep }}>No snapshot yet</span>
          </div>
        )}
      </div>

      {/* The branded chrome: the template's own canvas, ink, display face and palette. */}
      <div className="flex flex-col gap-1.5 bg-canvas p-5 text-ink" style={{ fontFamily: k.bodyFamily }}>
        {/* The badge sits here rather than over the snapshot, where it covered each site's own logo. */}
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-[11px] font-medium uppercase tracking-[.12em]" style={{ color: k.accentDeep }}>{badge}</span>
          <span className="shrink-0 text-[11px] text-mute">{t.fm.name ?? t.slug}</span>
        </div>
        <h3
          className={`${compact ? "text-[20px]" : "text-[26px]"} leading-[1.1] tracking-tight`}
          style={{ fontFamily: k.displayFamily, fontWeight: k.displayWeight }}
        >
          {t.title}
        </h3>

        {!compact && (
          <p className="line-clamp-2 max-w-[48ch] text-[13px] text-body">
            {t.fm.description?.replace(/\{[^}]+\}/g, "").slice(0, 150)}
          </p>
        )}

        <div className="mt-2 flex items-center justify-between gap-3">
          <span className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-4 rounded-full" style={{ background: k.primary }} />
            <span className="size-4 rounded-full" style={{ background: k.accent }} />
            <span className="size-4 rounded-full border border-hairline" style={{ background: k.soft }} />
          </span>
          <span className="font-mono text-[12px] text-mute">{k.primary}</span>
        </div>
      </div>
    </Link>
  );
}
