---
version: beta
name: Tech-Startup-Template
description: "A bright, editorial canvas for an AI startup: white ground broken by one cool grey band and one near-black band, with a single burnt orange (#E85C30) carrying every call to action. Display type is Instrument Sans at 500 set enormous and very tight (100px over a 95px line), body is Kanit at 18px/25px in a soft grey. There are almost no shadows and almost no borders — the page is held together by scale, generous white space, asymmetric placement and full-bleed abstract renders, not by chrome."

colors:
  primary: "#E85C30"
  primary-hover: "#D14E24"
  primary-soft: "#FDEDE7"
  on-primary: "#FFFFFF"
  accent: "#E85C30"
  accent-deep: "#D14E24"
  accent-soft: "#FDEDE7"
  ink: "#121212"
  body: "#555555"
  mute: "#8A8A8A"
  canvas: "#FFFFFF"
  canvas-soft: "#F0F2F4"
  canvas-soft-2: "#F7F8F9"
  surface: "#FFFFFF"
  surface-dark: "#121212"
  surface-dark-2: "#1B1B1B"
  surface-dark-3: "#202020"
  on-dark: "#FFFFFF"
  on-dark-muted: "#A9A9A9"
  hairline: "#E4E7EA"
  hairline-strong: "#CBD0D6"
  hairline-on-dark: "#2A2A2A"
  semantic-success: "#2E9E5B"
  semantic-warning: "#D9821C"
  semantic-error: "#D1453B"

typography:
  display-xl:
    fontFamily: "'Instrument Sans', 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: 100px
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: 0
  display-lg:
    fontFamily: "'Instrument Sans', 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: 50px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  display-md:
    fontFamily: "'Instrument Sans', 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: 0
  headline:
    fontFamily: "'Instrument Sans', 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  lead:
    fontFamily: "Kanit, 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  body:
    fontFamily: "Kanit, 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.41
    letterSpacing: 0
  body-strong:
    fontFamily: "Kanit, 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.41
    letterSpacing: 0
  caption:
    fontFamily: "Kanit, 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  button:
    fontFamily: "'Instrument Sans', 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0.06em
    textTransform: uppercase
  nav-link:
    fontFamily: "'Instrument Sans', 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0.06em
    textTransform: uppercase
  index:
    fontFamily: "Kanit, 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0
  fine-print:
    fontFamily: "Kanit, 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  none: 0px
  xs: 5px
  sm: 12px
  md: 20px
  lg: 25px
  xl: 50px
  pill: 9999px
  full: 9999px

shadows:
  none: "none"
  card: "0 0 0 1px rgba(18, 18, 18, 0.06)"
  lift: "0 18px 44px rgba(18, 18, 18, 0.10)"

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 72px
  section: 140px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 22px 34px
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 22px 34px
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 22px 34px
  button-play:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    size: 84px
  chip-frosted:
    backgroundColor: "rgba(255, 255, 255, 0.16)"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 14px 18px
  global-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 96px
  band-soft:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  band-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.md}"
  media-frame:
    backgroundColor: "{colors.surface-dark}"
    rounded: "{rounded.md}"
  accordion-row:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
---

## Overview

This is the design system for an **AI startup** — a company selling AI capability as a service, not a self-serve SaaS product. The site's job is to make an abstract thing feel concrete and expensive: that the team can take a business problem, point a model at it, and ship something that works.

The mood is **bright, editorial and very large**. The page is white. Two bands interrupt it — one cool grey (`{colors.canvas-soft}` — #F0F2F4) and one near-black (`{colors.surface-dark}` — #121212) — and both have rounded corners so they read as panels laid on the page rather than full-bleed stripes. A single burnt orange (`{colors.primary}` — #E85C30) carries every call to action and nothing else.

What makes this template distinctive is **scale and emptiness**. Display type runs to 100px over a 95px line — tighter than its own point size — and sections are allowed to be mostly white space with content placed asymmetrically inside them. The capability section deliberately scatters three text blocks at different heights around a full-bleed image instead of putting them in a tidy row. The featured-services list sets five service names at 100px with nothing else on the line but a small index number.

There are **almost no shadows and almost no borders**. Panels are distinguished by background colour and radius; rows are separated by a single hairline. If a component needs a shadow to be legible, the layout is wrong.

Imagery is the other half of the system: full-bleed abstract 3D renders in orange, teal and deep blue, always inside a `{rounded.md}` frame, always allowed to be large. They carry all the colour the palette does not.

**Key characteristics:**
- White canvas, one grey panel, one black panel, all with 20px radii.
- One burnt orange, used only for actions.
- Instrument Sans 500 at 100 / 50 / 32 / 20px, leading tighter than the point size at display sizes.
- Kanit 400 at 18px/1.41 for all body copy, in a soft grey (#555555), never pure black.
- Asymmetric placement over grids; generous, deliberate emptiness.
- Abstract renders, not photographs of people, except in the news cards.

## Colors

### Brand
- **Burnt orange** (`{colors.primary}` — #E85C30): the primary button, the play button, the newsletter submit, the small line-art icons in the capability rows, and the active accordion marker. White on this orange measures about 3.4:1 — **large text and 44px+ controls only**, which is exactly how it is used; never set orange behind body copy, and never use orange as text on white for anything a visitor must read.
- **Orange pressed** (`{colors.primary-hover}` — #D14E24): the `:active` and `:hover` fill.
- **Orange tint** (`{colors.primary-soft}` — #FDEDE7): the only tinted background — form success states and inline highlights.

### Surfaces
- **White** (`{colors.canvas}`): the default.
- **Cool grey** (`{colors.canvas-soft}` — #F0F2F4): the "how it works" panel and the hero's left card. Rounded, inset from the page edge.
- **Near-black** (`{colors.surface-dark}` — #121212): the FAQ panel and the footer card. Rounded at the top so the white page shows above it.
- `{colors.surface-dark-2}` (#1B1B1B) and `{colors.surface-dark-3}` (#202020) are micro-steps for a card sitting on the black panel.

### Text
- **Ink** (`{colors.ink}` — #121212): all display type and headings. Not pure black.
- **Body** (`{colors.body}` — #555555): all body copy, about 7.5:1 on white.
- **Mute** (`{colors.mute}` — #8A8A8A): index numbers, dates and meta only — 3.5:1, so never anything essential.
- On black: `{colors.on-dark}` for copy, `{colors.on-dark-muted}` (#A9A9A9) for supporting lines.

## Typography

### Families
- **Display — Instrument Sans** at 500. A neo-grotesque that stays even at 100px and has the slightly squarish bowls this layout needs. Weight 500, never 700 — the size does the emphasis, not the weight.
- **Body — Kanit** at 400/500. A Thai-Latin sans with a faintly condensed, technical feel that keeps 18px body copy from reading like a default.

Both load through `next/font/google`, so this template matches the reference's type exactly rather than approximating it.

### Hierarchy
| Role | Size / weight | Line height | Use |
|---|---|---|---|
| `display-xl` | 100 / 500 | 0.95 | The hero statement and the featured-services list |
| `display-lg` | 50 / 500 | 1.0 | Section headings |
| `display-md` | 32 / 500 | 1.12 | Card headings, the clients line |
| `headline` | 20 / 500 | 1.3 | Accordion rows, capability titles |
| `lead` | 20 / 400 | 1.45 | The paragraph beside a section heading |
| `body` | 18 / 400 | 1.41 | Everything else |
| `button` | 14 / 600 | 1.0 | Uppercase, `0.06em` — buttons and nav links |
| `index` | 16 / 400 | 1.0 | The 01–05 numerals |

### Principles
- **Leading is tighter than the point size at display sizes.** 100px over 95px. This is the single most recognisable thing about the type here; loosen it and the page stops looking like this template.
- Display type is **sentence case**. Only buttons and nav links are uppercase, and they are the only things that carry positive tracking.
- Headlines break on meaning, as authored lines.
- Body copy never goes pure black and never goes above 18px except as `lead`.

## Layout

### Grid & container
A 1290px container with 40px gutters at desktop, 24px at tablet, 20px at phone. Bands are inset from the page edge by the gutter and rounded, rather than running full-bleed — except the hero media and the video panel, which do bleed.

### Vertical rhythm
`{spacing.section}` is 140px at desktop, 96px at tablet, 72px at phone. This is a large number on purpose; the emptiness is the design.

### Whitespace philosophy
Sections are allowed to be half empty. The capability section places three blocks at three different vertical offsets around an image and leaves the rest of the row blank. Do not "balance" these into a neat grid — the asymmetry is the point, and it collapses to a single ordered column below `lg` where asymmetry would just read as breakage.

## Elevation

Effectively flat. `{shadows.card}` is a 1px inset ring, not a drop shadow, and most cards use nothing at all. `{shadows.lift}` exists only for the news card on hover. Panels separate by colour and radius.

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 5px | Inline tags |
| `{rounded.sm}` | 12px | Frosted chips over imagery |
| `{rounded.md}` | 20px | Every image frame, the grey and black panels, news cards |
| `{rounded.lg}` | 25px | The hero's grey card |
| `{rounded.xl}` | 50px | The circle-masked capability image's outer frame |
| `{rounded.pill}` | 9999px | All buttons |

One shape is special: the **circle-masked image** in the capability section, a `border-radius: 50%` frame whose left half is clipped by the container so it reads as a half-disc entering from the page edge.

## Components

**`global-nav`** — White, 96px, a single hairline underneath. Wordmark left, links centred in `{typography.nav-link}` (uppercase, tracked), and `{component.button-primary}` right. Collapses to a wordmark plus hamburger below `lg`.

**`button-primary`** — Orange pill, white uppercase label, 22px × 34px. The variant used across the page pairs the label with a small `▶` glyph in a circle. Minimum height 56px, so the 3.4:1 contrast sits in the large-text exemption.

**`button-dark`** — Identical geometry on `{colors.ink}`. Used for the hero's "Get started", where orange would compete with the image beside it.

**`button-outline`** — A 1px `{colors.hairline-strong}` ring on transparent, ink label. The secondary action.

**`button-play`** — An 84px orange circle with a white triangle, centred on a light panel that overlaps the video image. No autoplaying video anywhere; this opens a dialog.

**`chip-frosted`** — `rgba(255,255,255,0.16)` with `backdrop-filter: blur(14px)`, `{rounded.sm}`, white caption. Floats over a render to label it.

**`media-frame`** — Any image: `{rounded.md}`, `object-fit: cover`, no shadow, no border. Renders are allowed to run to the page edge; photographs of people are not.

**`capability-scatter`** — The asymmetric block. A half-disc image at the left edge carrying a `+`-prefixed list, with three `{typography.headline}` + `{typography.body}` blocks placed at staggered vertical offsets across the remaining width. One ordered column below `lg`.

**`service-index-list`** — Five rows, each a small `{typography.index}` numeral and a `{typography.display-xl}` service name. Rows are separated by nothing at all; the leading does the work. On hover the name shifts 12px right and the numeral goes orange.

**`accordion-row`** — On the black panel. `{typography.headline}` in white, a thin `+` that becomes `−` when open, a hairline under each row. Built on native `<details>`, so it works without JavaScript.

**`news-card`** — A horizontal card at `{rounded.md}`: a 4:3 photograph on the left third, then category, title in `{typography.display-md}` underlined, a hairline, and "Read more" with an arrow.

**`footer`** — The black panel: wordmark and blurb with social icons, two link columns, and a newsletter field with an orange circular submit. The field validates in the browser and posts nowhere.

## Do's and Don'ts

### Do
- Let display type be enormous and let its leading be tighter than its size.
- Let sections be half empty.
- Keep orange for actions only.
- Put every image in a 20px frame.
- Place the capability blocks asymmetrically.

### Don't
- Don't set orange as text on white, or behind body copy — it is a 3.4:1 colour and belongs on large controls.
- Don't add shadows to make a card read; fix the spacing instead.
- Don't set display type at 700. The size is the emphasis.
- Don't tidy the capability scatter into an even row.
- Don't use pure black for text, or pure white for body copy on the dark panel.

## Responsive Behavior

### Breakpoints
- `≥1280px` full layout: scattered capability blocks, two-up news, 100px display.
- `1024–1279px` display drops to ~72px; capability goes to two columns, still offset.
- `768–1023px` nav collapses; capability becomes one ordered column; news stacks.
- `<768px` one column. Display drops to 40px (hero) and 34px (sections) — the 0.95 leading stays. Band radii halve.

### Touch targets
44px minimum; buttons are 56px tall at every size. The play button stays 84px.

### Image behaviour
Every frame is `object-fit: cover` with a fixed aspect ratio. Renders carry the colour, so they must never be scrimmed down to grey.

## Iteration Guide

Change the orange and the page changes personality — it is the only saturated colour in the chrome. Change the display leading and you lose the template's signature; keep it below 1.0 at `display-xl`. The grey and black panels should stay exactly two: adding a third band colour turns a confident page into a busy one.

## Known Gaps

- No pricing table, docs entry, changelog or sign-up flow. This template now serves an AI **services** company, not a self-serve SaaS product; those surfaces were removed with the previous design system and would each be a new component set.
- No dashboard or product-screenshot frame — the reference sells capability through abstract renders, not UI shots.
- The capability scatter's asymmetry is authored, not derived. Adding a fourth block means re-authoring the offsets by hand.

---

## Revision — 2026-10-08 · rebuilt against the Arolax AI-startup reference

This file previously described a **developer-facing SaaS product**: a near-black #07090C canvas with a four-step raised-surface ladder, cool light-grey text, an emerald #10B981 signal with a sky-cyan #38BDF8 glow, Sora + Hanken Grotesk + JetBrains Mono, glass charcoal cards with luminous 1px borders, and a section set built around feature grids, pricing tables, a logo wall, a changelog list and framed product screenshots.

It was rebuilt on 2026-10-08 against **Arolax — AI Startup** (`arolax.crowdytheme-demo.com/ai-startup`), captured at 1440px and 390px, at the owner's instruction to match that reference. What changed:

| | Before | After |
|---|---|---|
| Business | Self-serve SaaS product (docs, pricing, sign-up) | AI startup selling AI services |
| Canvas | Near-black #07090C | White, with one grey and one black panel |
| Display | Sora 80px / 700, -2.8px tracking | Instrument Sans 100px / 500, 0.95 leading, no tracking |
| Body | Hanken Grotesk | Kanit 18px / 1.41, #555555 |
| Mono | JetBrains Mono for code samples | — removed; there is no code on this site |
| Brand colour | Emerald #10B981 + cyan #38BDF8 glow | Burnt orange #E85C30, actions only |
| Cards | Glass charcoal, 1px luminous borders | Flat; colour and radius only |
| Elevation | Four-step raised-surface ladder | Effectively none |
| Radii | 10px buttons | Pill buttons, 20px frames |

Both reference faces (Instrument Sans, Kanit) are on Google Fonts, so unlike the real-estate rebuild this template matches the reference's type exactly rather than substituting lookalikes.

`PRODUCT.md` was rewritten in the same change, because the previous one described the SaaS product this file no longer serves.
