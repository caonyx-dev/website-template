# Caonyx website templates

One Next.js app. The gallery at `/` lists every template; each template is a route at `/<slug>`.

```
npm install
npm run dev        # http://localhost:3000
npm run lint
npx tsc --noEmit
```

## Layout

| Path | What it is |
|---|---|
| `templates/<slug>/DESIGN.md` | The template's design system: tokens in YAML frontmatter plus prose. Source of truth for colours, type, radii, shadows. |
| `templates/<slug>/PRODUCT.md` | Who the business serves and what the site must do. |
| `templates/<slug>/assets/` | Images, imported statically by the template's content module. |
| `templates/<slug>/content/home.md` | The approved copy draft for the homepage. |
| `src/lib/templates.ts` | Reads the DESIGN.md files and derives tokens for the gallery and the template layouts. `BUILT` is the registry of built slugs. |
| `src/lib/content.ts` | The `SiteContent` type every homepage content module follows. |
| `src/templates/<slug>/content.tsx` | The template's homepage content: copy, links, static image imports, icons. |
| `src/app/<slug>/layout.tsx` | Loads the template's fonts with `next/font` and sets its tokens as CSS variables. |
| `src/app/<slug>/page.tsx` | Composes the shared sections with the template's content. |
| `public/previews/<slug>.jpg` | The gallery card's snapshot of that template's homepage. Regenerate with `npm run previews`. |
| `src/components/` | Shared components: `Nav`, `Hero`, `Reveal`, `Watermark`, `ModelBand` + `MassingModel`, `ProcessSteps`, `Enquiry`, `SmoothScroll`, `ui.tsx` and `sections/`. |
| `src/app/globals.css` | Tailwind theme that maps `--t-*` template tokens to utilities such as `bg-canvas`, `text-accent`, `font-display`. |

## Adding a template page

1. Approve the copy in `templates/<slug>/content/home.md`.
2. Create `src/templates/<slug>/content.tsx` following `SiteContent`, importing images from `templates/<slug>/assets/`.
3. Create `src/app/<slug>/layout.tsx` (fonts + tokens) and `page.tsx` (compose sections).
4. Add the slug to `BUILT` in `src/lib/templates.ts` so the gallery lists it as built.
5. Run `npm run previews` with `npm run dev -- -p 3100` running, so the gallery card gets its snapshot.
6. Run the checks in CLAUDE.md before calling it done.

## Gallery snapshots

Each card on `/` leads with a real screenshot of the page behind it, framed in that template's own palette and
typefaces. `scripts/previews.mjs` drives headless Chrome at 1440×900 with reduced motion forced, hides the dev
badge, and writes `public/previews/<slug>.jpg` at 1120px wide:

```
npm run dev -- -p 3100     # one terminal
npm run previews           # another; pass slugs to redo only some
```
