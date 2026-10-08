---
version: alpha
name: Logistics-Template
description: "A light, operational marketing and service site for a freight, courier, or logistics company: white canvas (#FFFFFF) with a soft gray working surface (#F4F6F8), deep slate ink (#0F172A) that also forms the header and footer bands, and signal orange (#EA580C) as the single action colour on quote and tracking buttons, carrying dark slate labels for contrast. Display type is Archivo at 600–700 with uppercase eyebrows and a slightly extended feel; body is Public Sans at 400–500; JetBrains Mono carries tracking numbers, reference codes, and timetables. Everything is flat and dense: 4px corners, 1px hairline borders, a strong 12-column grid, a tracking-number input in the hero, service tiles, a coverage map panel, a quote form, industry cards, a stats band, and certification placeholders."

colors:
  primary: "#EA580C"
  on-primary: "#0F172A"
  primary-hover: "#F97316"
  primary-focus: "#C2410C"
  primary-soft: "#FFEDD5"
  accent: "#0F172A"
  accent-deep: "#080F1E"
  accent-mid: "#1E293B"
  ink: "#0F172A"
  ink-muted: "#334155"
  ink-subtle: "#64748B"
  ink-tertiary: "#94A3B8"
  canvas: "#FFFFFF"
  surface-1: "#F4F6F8"
  surface-2: "#EAEEF2"
  surface-3: "#E1E6EC"
  surface-4: "#DDE2E8"
  hairline: "#D9DEE5"
  hairline-strong: "#B9C2CD"
  hairline-tertiary: "#94A3B8"
  inverse-canvas: "#0F172A"
  inverse-surface-1: "#1E293B"
  inverse-surface-2: "#273449"
  inverse-ink: "#FFFFFF"
  inverse-ink-muted: "#B8C2D0"
  brand-secure: "#475569"
  semantic-success: "#15803D"
  semantic-warning: "#B45309"
  semantic-error: "#B91C1C"
  semantic-overlay: "#0F172A"

typography:
  display-xl:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, system-ui, -apple-system, sans-serif"
    fontSize: 72px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -1.6px
  display-lg:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, system-ui, -apple-system, sans-serif"
    fontSize: 52px
    fontWeight: 700
    lineHeight: 1.10
    letterSpacing: -1.0px
  display-md:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, system-ui, -apple-system, sans-serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.6px
  headline:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, system-ui, -apple-system, sans-serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: -0.4px
  card-title:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, system-ui, -apple-system, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.2px
  subhead:
    fontFamily: "'Public Sans', 'Helvetica Neue', Arial, system-ui, -apple-system, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  body-lg:
    fontFamily: "'Public Sans', 'Helvetica Neue', Arial, system-ui, -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  body:
    fontFamily: "'Public Sans', 'Helvetica Neue', Arial, system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-sm:
    fontFamily: "'Public Sans', 'Helvetica Neue', Arial, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  caption:
    fontFamily: "'Public Sans', 'Helvetica Neue', Arial, system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  button:
    fontFamily: "'Public Sans', 'Helvetica Neue', Arial, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0.2px
  eyebrow:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.30
    letterSpacing: 1.4px
    textTransform: uppercase
  mono:
    fontFamily: "'JetBrains Mono', ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: 0.3px

rounded:
  xs: 2px
  sm: 3px
  md: 4px
  lg: 4px
  xl: 6px
  xxl: 8px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
  button-primary-pressed:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    border: "2px solid {colors.accent}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
  button-tertiary:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
  button-inverse:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
  service-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 24px
  service-tile-featured:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 24px
    border: "1px solid {colors.accent}"
  industry-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 24px
  coverage-map-panel:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 0
  quote-form-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 32px
  testimonial-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.md}"
    padding: 32px
  certification-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 16px
  tracking-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.md}"
    padding: 14px 16px
  tracking-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.md}"
    padding: 14px 16px
    border: "2px solid {colors.primary-focus}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 12px 14px
  tracking-tab-default:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 8px 14px
  tracking-tab-selected:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 8px 14px
  stats-band:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.display-md}"
    rounded: "0"
    padding: 48px 32px
  quote-cta-band:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.md}"
    padding: 48px
  timetable-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "0"
    padding: 12px 16px
    border: "0 0 1px {colors.hairline} solid"
  shipment-status-badge:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 2px 8px
  shipment-status-badge-transit:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-focus}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 2px 8px
  utility-bar:
    backgroundColor: "{colors.accent-deep}"
    textColor: "{colors.inverse-ink-muted}"
    typography: "{typography.caption}"
    rounded: "0"
    height: 36px
  top-nav:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.body-sm}"
    rounded: "0"
    height: 64px
  footer:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink-muted}"
    typography: "{typography.caption}"
    rounded: "0"
    padding: 64px 32px
---

## Overview

This template is the public site of a freight, courier, or third-party logistics company: services, shipment tracking, quote request, coverage, industries served, fleet and certifications, careers, and contact. The polarity is **light** — `{colors.canvas}` is pure white (#FFFFFF), with a soft gray working surface (`{colors.surface-1}` #F4F6F8) for alternating sections and form panels. Deep slate (`{colors.ink}` #0F172A) carries all text and, as `{colors.inverse-canvas}`, forms the header band, the stats band, and the footer — the dark bands bracket the white page like a dispatch board.

The single action colour is **signal orange** `{colors.primary}` (#EA580C) — reserved for the primary buttons ("Get a quote", "Track shipment"), the in-transit status badge, and the active step marker on the tracking timeline. Orange is a light colour, so primary buttons carry **dark slate labels** (`{colors.on-primary}` #0F172A, 4.9:1) rather than white. A brighter hover (`{colors.primary-hover}` #F97316) and a deeper focus ring (`{colors.primary-focus}` #C2410C) extend the hue; a pale tint (`{colors.primary-soft}` #FFEDD5) backs transit badges and highlighted table cells.

Display type runs **Archivo** at 600–700 — a slightly extended grotesque that reads like signage — with mild negative tracking (-1.6px at 72px) and **uppercase eyebrows** at +1.4px. Body is **Public Sans** at 400–500, chosen for dense tabular and form-heavy pages. **JetBrains Mono** carries tracking numbers, reference codes, timetables, and rate tables.

The page rhythm is **operational**: a hero with a tracking-number input and a quote button, a 3-up or 4-up service tile grid, a coverage map panel, a stats band on slate, an industries grid, a quote form, and a certification row. Flat cards with 1px borders sit on a strong 12-column grid. There are no glows, no gradients, and no soft shadows — depth comes from borders and the alternation of white, soft gray, and slate bands.

**Key Characteristics:**
- **Light, dense, dependable** — white canvas, slate bands top and bottom, soft gray section alternation.
- **Signal orange with dark labels** (`{colors.primary}` #EA580C on `{colors.on-primary}` #0F172A) — used only on primary actions and transit status.
- Flat elevation: 1px `{colors.hairline}` (#D9DEE5) borders everywhere; no drop shadows below the modal level.
- 4px corners on everything except status pills and avatars — the geometry is square and workmanlike.
- Archivo uppercase eyebrows ("SERVICES", "COVERAGE", "INDUSTRIES") label every section.
- Mono for every number a dispatcher would read: tracking IDs, PRO numbers, ETAs, cut-off times.

## Colors

> Template pages: home, /services, /track, /quote, /coverage, /industries, /fleet, /careers, /contact.

### Brand & Accent
- **Signal Orange** ({colors.primary}): The action colour — primary buttons, in-transit markers, active timeline step, the one highlighted cell in a rate table.
- **Orange Hover** ({colors.primary-hover}): Brighter orange (#F97316) — hovered state of the primary button; dark label holds 6:1.
- **Orange Focus** ({colors.primary-focus}): Deeper orange (#C2410C) — the 2px focus ring on inputs and buttons, and text colour inside the transit badge (4.5:1 on its pale tint).
- **Orange Soft** ({colors.primary-soft}): Pale tint (#FFEDD5) — background of the transit badge and highlighted table rows.
- **Deep Slate** ({colors.accent}): The second brand colour (#0F172A) — header and footer bands, stats band, headings, selected tabs. Structural, not decorative.
- **Slate Mid** ({colors.accent-mid}): Lifted panels inside dark bands (#1E293B).

### Surface
- **Canvas** ({colors.canvas}): Default page background — pure white.
- **Surface 1** ({colors.surface-1}): Soft gray (#F4F6F8) — alternating sections, coverage map panel, quote CTA band, testimonial cards.
- **Surface 2** ({colors.surface-2}): Table header rows, neutral status badge, hovered tiles.
- **Surface 4** ({colors.surface-4}): Deepest light surface — map placeholder fill.
- **Hairline** ({colors.hairline}): 1px borders on every card, tile, and table row (#D9DEE5).
- **Hairline Strong** ({colors.hairline-strong}): Input borders, secondary button border.
- **Inverse Canvas** ({colors.inverse-canvas}): Deep slate band — header, stats band, footer.

### Text
- **Ink** ({colors.ink}): All headlines and body type — deep slate #0F172A (17:1 on white).
- **Ink Muted** ({colors.ink-muted}): Secondary type at #334155 — card bodies, table cells.
- **Ink Subtle** ({colors.ink-subtle}): Tertiary type at #64748B — captions, deselected tabs, footer meta (4.8:1 on white).
- **Ink Tertiary** ({colors.ink-tertiary}): Quaternary at #94A3B8 — disabled labels and decorative rules only (below 4.5:1; never for body).
- **Inverse Ink** ({colors.inverse-ink}): White text on slate bands.
- **Inverse Ink Muted** ({colors.inverse-ink-muted}): Muted text on slate bands (#B8C2D0, 10:1 on slate).

### Semantic
- **Success Green** ({colors.semantic-success}): "Delivered" status, form success (#15803D — 5.1:1 on white).
- **Warning Amber** ({colors.semantic-warning}): "Delayed" / "Exception" status (#B45309 — kept apart from brand orange by being browner and darker).
- **Error Red** ({colors.semantic-error}): Form validation, "Failed delivery" (#B91C1C).
- **Overlay** ({colors.semantic-overlay}): Slate scrim at 60% for modals and the mobile nav.

## Typography

### Font Family

- **Archivo** — Slightly extended grotesque with a signage feel; fallback `'Helvetica Neue', Arial, system-ui, -apple-system, sans-serif`. Carries display-xl through card-title at 600–700, and the uppercase eyebrow at 600.
- **Public Sans** — Neutral, open sans designed for forms and dense text; same fallback stack. Carries subhead, body sizes, button labels, captions.
- **JetBrains Mono** — Monospace for tracking numbers, PRO/reference codes, timetables, rate tables, cut-off times; fallback `ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace`.

Display and body are different families on purpose: Archivo's width gives headings a stencilled, industrial presence while Public Sans stays quiet in tables and forms. Mono is set at 500 and 14px so a tracking number reads at a glance on a phone.

### Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700&family=Public+Sans:wght@400;500&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: "Archivo", "Helvetica Neue", Arial, system-ui, -apple-system, sans-serif;
  --font-body: "Public Sans", "Helvetica Neue", Arial, system-ui, -apple-system, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
}
```

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 72px | 700 | 1.05 | -1.6px | Hero headline ("Freight that arrives on time.") |
| `{typography.display-lg}` | 52px | 700 | 1.10 | -1.0px | Section opener headlines |
| `{typography.display-md}` | 36px | 600 | 1.15 | -0.6px | Sub-section headlines, stats band figures |
| `{typography.headline}` | 28px | 600 | 1.20 | -0.4px | Service tile titles (featured), quote CTA heading |
| `{typography.card-title}` | 20px | 600 | 1.25 | -0.2px | Service tile and industry card titles |
| `{typography.subhead}` | 20px | 400 | 1.45 | 0 | Lead body, intro paragraphs |
| `{typography.body-lg}` | 18px | 400 | 1.50 | 0 | Hero subhead |
| `{typography.body}` | 16px | 400 | 1.55 | 0 | Default body, form labels |
| `{typography.body-sm}` | 14px | 400 | 1.50 | 0 | Card body, table cells, footer columns |
| `{typography.caption}` | 12px | 400 | 1.40 | 0 | Captions, meta, status |
| `{typography.button}` | 14px | 500 | 1.20 | 0.2px | All button labels |
| `{typography.eyebrow}` | 12px | 600 | 1.30 | 1.4px | Uppercase section eyebrow in Archivo |
| `{typography.mono}` | 14px | 500 | 1.45 | 0.3px | Tracking numbers, reference codes, timetables |

### Principles

- **Mild negative tracking on display** (-1.6px at 72px ≈ 2% of size) — Archivo is already wide; over-tightening makes it clog.
- **Uppercase eyebrows in the display face** at +1.4px — the only place letter-spacing opens up; it labels sections like a crate stencil.
- **Numbers are mono.** Any value a customer might read back over the phone (tracking ID, quote reference, ETA, cut-off time) is set in JetBrains Mono so digits align and zeros and O's are unambiguous.

### Note on Weights

Archivo ships 100–900; 600 and 700 are loaded. Public Sans ships 100–900; 400 and 500 are loaded. JetBrains Mono ships 100–800; 500 is loaded for the tracking input and tables. Do not load lighter display weights — the operational mood depends on headings holding ink.

## Layout

### Spacing System

- **Base unit**: 4px.
- **Tokens (front matter)**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 80px.
- Card interior padding: `{spacing.lg}` 24px on service tiles and industry cards; `{spacing.xl}` 32px on quote form and testimonial cards; `{spacing.xxl}` 48px on the quote CTA band and stats band.
- Button padding: 12px vertical · 20px horizontal — 44px minimum height, because quote and track buttons are tapped on the move.
- Form input padding: 12px vertical · 14px horizontal; tracking input 14px vertical · 16px horizontal (48px tall).

### Grid & Container

- Max content width sits around 1280px on a 12-column grid with 24px gutters.
- Service tiles are 4-up at desktop, 2-up at tablet, 1-up at mobile.
- Industry cards are 3-up; the coverage section is a 5/7 split (text / map panel).
- The quote form is a 2-column field grid (origin / destination, weight / dimensions, pickup date / service level) inside a single `quote-form-card`.
- The hero is a 7/5 split: headline and tracking input left, a fleet or facility photograph right.

### Whitespace Philosophy

Sections alternate white → `{colors.surface-1}` → white, with a slate band for stats roughly mid-page. Density is a feature: tables and timetables are allowed to run tight at `{spacing.sm}` 12px row padding. `{spacing.section}` 80px between sections, 56px on mobile.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, 1px `{colors.hairline}` border | All cards, tiles, tables, inputs |
| 1 (soft lift) | `{colors.surface-1}` background, 1px `{colors.hairline}` | Featured service tile, testimonial cards, coverage map panel |
| 2 (band) | `{colors.inverse-canvas}` background, no border | Header, stats band, footer |
| 3 (dropdown) | `0 4px 12px rgba(15,23,42,0.10)`, 1px `{colors.hairline-strong}` | Service dropdown, date picker |
| 4 (modal) | `0 16px 40px rgba(15,23,42,0.18)` | Quote confirmation, tracking detail modal |
| 5 (focus ring) | 2px `{colors.primary-focus}` outline | Focused input, focused button |

Depth is carried by borders and band alternation. Shadows exist only for things that float above the page (dropdowns, modals).

### Decorative Depth

- **No gradients, no glows.** The page is flat by design.
- **Photography** is the only atmospheric element: fleet, warehouse, loading dock, or driver portraits, desaturated 10% and placed in `{rounded.md}` frames with a 1px border.
- **Diagonal hazard rule**: a 4px band of `{colors.primary}` may run along the top edge of the stats band or the featured service tile — the one place the orange is used as a line rather than a button.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 2px | Status badges, table chips, certification tiles |
| `{rounded.sm}` | 3px | Inline tags, keyboard hints |
| `{rounded.md}` | 4px | All buttons, inputs, cards, tiles, photo frames |
| `{rounded.lg}` | 4px | Alias of md — kept so card specs read consistently |
| `{rounded.xl}` | 6px | Modal panels |
| `{rounded.xxl}` | 8px | Mobile bottom sheet |
| `{rounded.pill}` | 9999px | Timeline step dots only |
| `{rounded.full}` | 9999px | Driver and staff avatar circles |

### Photography & Illustration Geometry

- Hero and section photographs sit in `{rounded.md}` 4px frames with a 1px `{colors.hairline}` border; aspect 4:3 on desktop, 16:10 on mobile.
- The coverage map is a placeholder panel (`coverage-map-panel`) with a `{colors.surface-4}` fill, region outlines in `{colors.hairline-tertiary}`, and depot markers as 10px `{colors.primary}` dots — replace with a live map embed when available.
- Certification tiles render at ~32px badge height on white with a 1px border; ship with labelled placeholder blocks until real certificates are supplied.

## Components

### Buttons

**`button-primary`** — Signal-orange action button with dark label. Used for "Get a quote", "Track shipment", and "Request pickup".
- Background `{colors.primary}`, text `{colors.on-primary}` (#0F172A — dark slate, because white on this orange falls to 3.5:1; dark holds 4.9:1), type `{typography.button}`, padding 12px 20px, rounded `{rounded.md}`.
- Hover state lives in `button-primary-hover` (background shifts to `{colors.primary-hover}`; label holds 6:1).
- Pressed state lives in `button-primary-pressed`: the fill stays `{colors.primary}` and a 2px `{colors.accent}` inset border plus a 1px downward translate signal the press. A darker fill was rejected because the dark label would drop below 4.5:1.

**`button-secondary`** — White outlined button. Used for secondary CTAs ("View services", "Call us").
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.button}`, padding 12px 20px, rounded `{rounded.md}`. 1px `{colors.hairline-strong}` border.

**`button-tertiary`** — Soft gray button for low-emphasis actions ("Clear form", "Back").
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.button}`, rounded `{rounded.md}`, padding 12px 20px.

**`button-inverse`** — Slate button on white, and the white-on-slate variant inside bands ("Apply now" in the careers band).
- Background `{colors.inverse-canvas}`, text `{colors.inverse-ink}`, type `{typography.button}`, rounded `{rounded.md}`, padding 12px 20px. Inside a slate band, swap to `{colors.canvas}` fill with `{colors.ink}` text.

### Tracking Tabs

**`tracking-tab-default`** + **`tracking-tab-selected`** — Square toggle above the tracking input ("Tracking number" / "Reference" / "PRO number").
- Default: `{colors.canvas}` background, `{colors.ink-subtle}` text, 1px `{colors.hairline}` border, rounded `{rounded.md}`, padding 8px 14px.
- Selected: `{colors.inverse-canvas}` background, `{colors.inverse-ink}` text — selected = slate fill.

### Cards & Containers

**`service-tile`** — Each service (LTL, FTL, same-day courier, warehousing, customs brokerage, last-mile — placeholder names).
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.md}`, padding 24px. 1px `{colors.hairline}` border. 24px icon top-left, `card-title`, two-line body, "Learn more" text link.

**`service-tile-featured`** — The flagship service — soft gray lift with a slate border and the 4px orange hazard rule on top.
- Background `{colors.surface-1}`, 1px `{colors.accent}` border, otherwise identical structure.

**`industry-card`** — Industries served (retail, manufacturing, healthcare, food & beverage, e-commerce — placeholders).
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.md}`, padding 24px. 1px `{colors.hairline}` border. Optional photo strip across the top at 3:2.

**`coverage-map-panel`** — Service area map placeholder with a region list beside it.
- Background `{colors.surface-1}`, rounded `{rounded.md}`, padding 0, 1px `{colors.hairline}` border. Region list in `{typography.body-sm}`; transit-day figures in `{typography.mono}`.

**`quote-form-card`** — The quote request form container on `/quote` and in the home-page CTA section.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.md}`, padding 32px. 1px `{colors.hairline-strong}` border. Field labels in `{typography.body-sm}` at 500.

**`testimonial-card`** — Customer quote with company, role, and lane. Ship empty — placeholder copy only until real quotes exist.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.body-lg}`, rounded `{rounded.md}`, padding 32px. 1px `{colors.hairline}` border.

**`certification-tile`** — Small tile for licences, insurance, and certifications (carrier authority, cargo insurance, ISO, hazmat — placeholders).
- Background `{colors.canvas}`, text `{colors.ink-subtle}`, type `{typography.caption}`, rounded `{rounded.xs}`, padding 16px. 1px `{colors.hairline}` border.

**`quote-cta-band`** — Closing CTA panel ("Need a rate today?") with a `button-primary` and a phone number in mono.
- Background `{colors.surface-1}`, text `{colors.ink}`, type `{typography.headline}`, rounded `{rounded.md}`, padding 48px. 1px `{colors.hairline}` border.

**`stats-band`** — Full-width slate band with 3–4 figures (on-time rate, lanes, fleet size — placeholders until measured).
- Background `{colors.inverse-canvas}`, text `{colors.inverse-ink}`, figures in `{typography.display-md}` with labels in `{typography.eyebrow}` at `{colors.inverse-ink-muted}`, padding 48px 32px. Optional 4px `{colors.primary}` top rule.

### Inputs & Forms

**`tracking-input`** + **`tracking-input-focused`** — The hero tracking field; also on `/track`.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.mono}`, rounded `{rounded.md}`, padding 14px 16px, 48px tall. 1px `{colors.hairline-strong}` border; a `button-primary` "Track" sits flush right.
- Focused state: border switches to 2px `{colors.primary-focus}`.
- Accepts multiple IDs separated by commas or line breaks; helper text in `{typography.caption}`.

**`text-input`** — Standard fields on the quote form, careers application, and contact page.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.md}`, padding 12px 14px, 44px tall. 1px `{colors.hairline-strong}` border; focus ring 2px `{colors.primary-focus}`.
- Error state: border `{colors.semantic-error}`, helper text in `{typography.caption}` `{colors.semantic-error}`.

### Status & Timetables

**`timetable-row`** — Row in a cut-off / transit-time table or a depot hours list.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-sm}`, padding 12px 16px. 1px `{colors.hairline}` bottom rule. Times and lane codes in `{typography.mono}`. Header row on `{colors.surface-2}`.

**`shipment-status-badge`** — Neutral status chip ("Label created", "Picked up").
- Background `{colors.surface-2}`, text `{colors.ink-muted}`, type `{typography.caption}`, rounded `{rounded.xs}`, padding 2px 8px.

**`shipment-status-badge-transit`** — Orange status chip ("In transit", "Out for delivery").
- Background `{colors.primary-soft}`, text `{colors.primary-focus}`, type `{typography.caption}`, rounded `{rounded.xs}`, padding 2px 8px. "Delivered" uses `{colors.semantic-success}` text on a pale green; "Exception" uses `{colors.semantic-warning}`.

### Navigation

**`utility-bar`** — Thin band above the header with the phone number (mono), hours, and a "Customer login" link.
- Background `{colors.accent-deep}`, text `{colors.inverse-ink-muted}`, type `{typography.caption}`, height 36px.

**`top-nav`** — Slate header band with the wordmark left, primary nav centered (Services / Tracking / Coverage / Industries / Careers / Contact), and a `button-secondary` ("Track") + `button-primary` ("Get a quote") pair right.
- Background `{colors.inverse-canvas}`, text `{colors.inverse-ink}`, type `{typography.body-sm}`, height 64px. Sticky; on scroll the height drops to 56px.

### Footer

**`footer`** — Slate band with a 4-column link grid, depot addresses, the phone number in mono, and a certification/insurance placeholder row.
- Background `{colors.inverse-canvas}`, text `{colors.inverse-ink-muted}`, type `{typography.caption}`, padding 64px 32px. Headings in `{typography.eyebrow}` at `{colors.inverse-ink}`.

## Do's and Don'ts

### Do

- Keep the canvas white and the bands slate — the alternation is the identity.
- Use `{colors.primary}` orange ONLY for: primary buttons, transit status, active timeline step, the single hazard rule.
- Put dark slate (`{colors.on-primary}`) on every orange fill — never white.
- Set every tracking number, reference code, ETA, and cut-off time in JetBrains Mono.
- Use uppercase Archivo eyebrows to label every section.
- Keep corners at 4px; square geometry is the mood.
- Put the tracking input and the quote button within the first viewport on every device.

### Don't

- Don't ship a dark-canvas page body; dark is for bands only.
- Don't use orange as a section background or card fill.
- Don't introduce a second chromatic colour (blue, green, purple) outside semantic status.
- Don't add gradients, glows, or soft shadows on cards.
- Don't fabricate on-time percentages, fleet counts, client logos, or certifications — use labelled placeholders.
- Don't hide the phone number; it must be visible in the utility bar and footer on every page.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Desktop-XL | 1440px | Default desktop layout |
| Desktop | 1280px | Service tiles 4-up maintained |
| Tablet | 1024px | Service tiles 4-up → 2-up; coverage split stacks |
| Mobile-Lg | 768px | Quote form single column; nav hamburger; utility bar shows phone only |
| Mobile | 480px | Single-column; display-xl scales 72px → ~34px; tracking input and button stack |

### Touch Targets

- Primary buttons hold ≥44px tap height across viewports; 48px on touch.
- Form inputs hold ≥44px tap target on touch; the tracking input stays 48px.
- The phone number in the utility bar is a tap-to-call link at ≥44px.

### Collapsing Strategy

- **Top nav**: links collapse to hamburger below 768px; "Get a quote" stays visible in the bar.
- **Service tiles**: 4-up → 2-up at 1024px → 1-up below 768px.
- **Quote form**: 2-column field grid → single column below 768px.
- **Timetables**: horizontal scroll inside the panel below 768px; first column sticky.
- **Display type**: `{typography.display-xl}` 72px scales toward `{typography.display-md}` 36px on mobile.
- **Mobile action bar**: a fixed bottom bar with "Track" and "Get a quote" appears below 768px.

### Image Behavior

- Hero photograph crops to 16:10 on mobile and moves below the tracking input.
- The coverage map panel keeps a 4:3 minimum and scrolls horizontally if the region list is wider.

## Iteration Guide

1. Focus on ONE component at a time and reference it by its `components:` token name.
2. When introducing a section, decide first whether it lives on white, soft gray, or the slate band.
3. Default body to `{typography.body}` at weight 400; default any number to `{typography.mono}`.
4. Run `npx @google/design.md lint DESIGN.md` after edits.
5. Add new variants as separate component entries.
6. Treat orange as scarce: primary buttons, transit status, one hazard rule.
7. Lead every section with an uppercase Archivo eyebrow.

## Known Gaps

- Tracking integration (carrier API vs. internal TMS) is undecided; `tracking-input` covers the UI only.
- The coverage map is a placeholder panel; the live map provider is undecided.
- Fleet photography, certification badges, licence numbers, and insurance figures are placeholders — none exist yet.
- Stats band figures are placeholders until the business supplies measured numbers.
- Quote form field set is a sensible default (origin, destination, weight, dimensions, pickup date, service level) — confirm with operations.
- Dark mode is not documented; the template is light-only with slate bands.

## Revision 2026-10-08: reference-led direction, Logico Rounded **home-3** (demo.artureanec.com/themes/logico-rounded/home-3)

Built at the owner's request after the Logico Rounded **home-3** demo, following its layout, devices and motion. A first pass had followed the home-2 demo and arrived without the animations and without the counting figures; the owner rejected it and named home-3 as the target. This revision replaces that one.

### Measured from the reference rather than estimated

Values were read from the live page's computed styles, not eyeballed from a screenshot:

| What | Reference | Here |
|---|---|---|
| Card and button radius | `25px` | `25px` |
| Inner tile radius | `15px` / `10px` | `18px` / `14px` |
| Display tier | 80px / 500 / lh 90px / tracking −2.4px / uppercase | `clamp` to 76px / 700 / lh 1.05 / tracking −0.03em / uppercase |
| Body | 16px / 28px | 16–17px / 1.75 |
| Primary CTA | 72px tall, 25px radius, 18px label | 56px pill, 25px radius, 17px label |
| Accent | teal `#1EAE98` | signal orange `{colors.primary}` |
| Dark ground | `#1F1F1F` | `{colors.inverse-canvas}` |

### What is still this file's own

The palette and the typefaces. Orange plays the exact role the reference gives its teal: the quote pill, the third service card, the stats figures, the marquee figure, the arrow tiles and the active tab. Dark slate sits on every orange fill, never white. Archivo carries the uppercase display tier, Public Sans the body, and **JetBrains Mono every tracking reference, time, phone number and counted figure**, as this file requires. The tracking field stays inside the first viewport at every width and the phone number appears in the utility bar, the menu sheet, the quote card, the footer and the phone action bar. No operational figure is a claim; each is a labelled placeholder.

### What this revision overrides

| Rule above | What is built | Why |
|---|---|---|
| "Keep corners at 4px; square geometry is the mood" | 25px on cards and buttons, 14–18px on tiles | The reference is a rounded theme; the radius is its identity |
| "Don't use orange as a section background or card fill" | The third service card is an orange fill | It is the reference's own three-tone card set. Dark slate on orange is 5:1, so the contrast rule the prohibition protects still holds |

### Devices taken from the reference

The dark utility bar above the nav; the centred nav links with a rule under the one in view; the hero as a 25px rounded carousel with edge arrows, a slide counter and progress rails; the tracking card and the watch card overlapping the hero's lower-left corner; the muted client strip; three service cards in light, slate and brand tones, each with its photograph masked into a rounded petal above a line icon and a hairline; the running band carrying the figure between the word and the unit; the "who we are" band with its outlined ribbon over a dotted ground and the ghost "Since [year]" outlined beneath; the full-bleed tracking band with its corner watch card; the stats card overlapping it; the tabbed mode panel with a brand-coloured segment under the active tab; the step row with big outlined numerals and rotated "step" labels; the photographic carousel with its caption and arrow pair; and the crew row with names set beside rounded portraits.

### Motion, which the previous pass was missing

- **The hero carousel** crossfades on a 7-second timer, pauses on hover and on focus anywhere inside it, and announces each slide through a live region. Edge arrows on desktop, a bottom arrow pair and progress rails on phones.
- **The stats figures count up from zero** the first time the card scrolls into view, easing out so each settles rather than stopping dead. The ticking value is `aria-hidden` and the final figure sits beside it, so assistive tech hears the number once rather than three hundred times.
- **The hero photograph settles out of a slow zoom** while the headline rises line by line through masks.
- **One marquee**, paused on hover, on focus and by its own button, with the control hidden under reduced motion because it would be inert.
- **The tab panel, the gallery carousel and the service cards** all animate on state change or hover.
- Under `prefers-reduced-motion: reduce` the zoom, the rises, the marquee and the count-up are all off, and every figure renders at its final value.
