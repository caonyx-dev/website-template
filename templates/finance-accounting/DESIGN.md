---
version: alpha
name: Finance-Accounting-Template
description: An accounting practice website in the language of the Consultor "Financial Advisor" demo (see the 2026-10-07 revision) — DM Sans throughout with IBM Plex Mono kept for every figure, deep green-black ink ({colors.ink}) for the top bar, navigation, testimonial band and footer, teal ({colors.primary}) for the filled buttons, lime ({colors.accent}) for the hero and article buttons and the service icons, a light grey ({colors.canvas-soft}) for alternating bands, square buttons and flat white cards, a full-bleed photographic hero, overlapping photographs, four photo tiles, ghost-number statistics, a split dark testimonial band and an underline-field contact form.

colors:
  primary: "#296D75"
  primary-deep: "#215A61"
  primary-press: "#1A474D"
  primary-soft: "#3F8A92"
  primary-bg-subdued-hover: "#DCEBEC"
  brand-dark-900: "#132629"
  ink: "#132629"
  ink-secondary: "#5E686B"
  ink-mute: "#8D8E90"
  ink-mute-2: "#AEAEB0"
  on-primary: "#FFFFFF"
  canvas: "#FFFFFF"
  canvas-soft: "#F5F5F5"
  canvas-tint: "#EEF5DC"
  hairline: "#E5E5E5"
  hairline-input: "#CFD2D3"
  accent: "#98CB2B"
  accent-deep: "#5D8A12"
  accent-soft: "#EEF5DC"
  shadow-tint: "#132629"
  success: "#5D8A12"
  error: "#C8403A"
  warning: "#B8860B"

typography:
  display-xxl:
    fontFamily: "'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -1.4px
    fontFeature: kern
  display-xl:
    fontFamily: "'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: -0.9px
    fontFeature: kern
  display-lg:
    fontFamily: "'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.5px
    fontFeature: kern
  display-md:
    fontFamily: "'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 26px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.3px
    fontFeature: kern
  heading-lg:
    fontFamily: "'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.2px
    fontFeature: kern
  heading-md:
    fontFamily: "'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.1px
    fontFeature: kern
  heading-sm:
    fontFamily: "'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: 0
    fontFeature: kern
  body-lg:
    fontFamily: "'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
    fontFeature: kern
  body-md:
    fontFamily: "'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
    fontFeature: kern
  body-tabular:
    fontFamily: "'IBM Plex Mono', ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
    fontFeature: tnum
  figure-callout:
    fontFamily: "'IBM Plex Mono', ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace"
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.8px
    fontFeature: tnum
  button-md:
    fontFamily: "'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
    fontFeature: kern
  button-sm:
    fontFamily: "'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
    fontFeature: kern
  caption:
    fontFamily: "'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
    fontFeature: tnum
  micro:
    fontFamily: "'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
    fontFeature: kern
  micro-cap:
    fontFamily: "'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.8px
    fontFeature: kern

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 10px
  xl: 12px
  pill: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  huge: 64px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: 10px 18px
  button-primary-pressed:
    backgroundColor: "{colors.primary-press}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: 10px 18px
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: 10px 18px
  button-on-dark:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.brand-dark-900}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: 10px 18px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 10px 12px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 10px 12px
  card-service:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-pricing-tier:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-pricing-tier-featured:
    backgroundColor: "{colors.brand-dark-900}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-tint-band:
    backgroundColor: "{colors.canvas-tint}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-figure-callout:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-tabular}"
    rounded: "{rounded.lg}"
    padding: 24px
  chip-status-positive:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent-deep}"
    typography: "{typography.micro-cap}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 16px 24px
  link-on-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 0px
  footer-light:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink-mute}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 64px 24px
---

## Overview

This design language is for an accounting and financial advisory practice: tax preparation and planning, bookkeeping, payroll, and advisory for small businesses and individuals. The mood is precise, modern, and trustworthy. The page opens on a **soft diagonal tint band** — `{colors.canvas-tint}` cut at roughly 6 degrees across the upper third of the page, with `{colors.canvas}` white above and below — rather than any gradient or atmospheric backdrop. A bold Manrope headline, a one-line lead, one filled petrol-blue button ("Request a quote") and a secondary "Book a call" sit on the band; to the right, a figure-callout card shows three numbers in IBM Plex Mono. The lower page returns to white, with services on `{colors.canvas-soft}` and the process, team, and resources sections alternating white and soft.

The color system has two primary roles. **Petrol blue** (`{colors.primary}` — `#0F3D5C`) is the practice's signature CTA color, used sparingly: one filled button per band, inline links, and the active nav state. **Deep ink** (`{colors.ink}` — `#0B1F2E`) is the universal body text color and the fill of the featured pricing tier and the client-portal callout. **Confident green** (`{colors.accent}` — `#2BB673`) is reserved for the meaning "positive": a saving, a refund, an on-time status, a checkmark in a feature list. It is never a button fill on white and never a decoration without meaning.

Typography is built around **Manrope** at weights 600 and 700 with negative letter-spacing — the practice's tight, geometric display signature. Display sizes (32–56px) use -1.4px to -0.5px tracking; body copy is **IBM Plex Sans** at 15–17px with 1.55 leading. Every number — figure callouts, fee tables, deadline dates, tax-year labels — is set in **IBM Plex Mono** with the OpenType `tnum` feature, so columns align and figures look audited.

**Key Characteristics:**
- Diagonal tint band on every page hero — a single flat `{colors.canvas-tint}` shape, clipped at a 6-degree angle, with no blur or gradient.
- Single-petrol CTA hierarchy: filled `{colors.primary}` button is the only filled button on light surfaces.
- Manrope bold (weight 700) display tier with negative tracking from -1.4px to -0.3px depending on size.
- Monospace tabular figures (`tnum`) for any cell containing money, dates, percentages, or counts — the practice's visible precision signal.
- Data-forward surfaces: number callouts in `{typography.figure-callout}`, simple bar and line marks in `{colors.primary-soft}` and `{colors.accent}`, deadline tables.
- Crisp cards with 1px `{colors.hairline}` borders, `{rounded.lg}` 10px corners, and one soft single-layer shadow.
- Rounded-rectangle buttons (`{rounded.md}` 8px) with `10px 18px` padding — clear, modern, and unfussy.
- Imagery is clean workspace photography (desks, documents, screens at an angle, daylight) and abstract chart illustrations in the palette; no stock imagery of calculators and piggy banks.

## Colors

> **Source pages:** home, services, pricing approach, process, team, resources and deadlines, client portal entry, request a quote.

### Brand & Accent
- **Petrol Blue** (`{colors.primary}` — `#0F3D5C`): The practice's signature CTA color. Filled quote button, link emphasis, active nav, primary chart series.
- **Petrol Deep** (`{colors.primary-deep}` — `#0B2F47`): Hover state of the primary button and text inside pale petrol tags.
- **Petrol Press** (`{colors.primary-press}` — `#072236`): Pressed state of the primary button.
- **Petrol Soft** (`{colors.primary-soft}` — `#2A5F85`): Lighter petrol used for secondary chart series, process-step numerals, and icon strokes.
- **Petrol Subdued** (`{colors.primary-bg-subdued-hover}` — `#D9E6F0`): Pale petrol fill used as the background of service tags and the selected state in the pricing toggle.
- **Brand Dark 900** (`{colors.brand-dark-900}` — `#0B1F2E`): The deep ink used on the featured pricing tier and the client-portal callout.
- **Green** (`{colors.accent}` — `#2BB673`): Positive figures as a fill or mark — bars, checkmarks, status dots, and the button fill on dark surfaces. As text on white it reaches only about 2.6:1, so it is never used for body or caption text on light backgrounds.
- **Green Deep** (`{colors.accent-deep}` — `#1A7A4A`): The text-safe green (5.4:1 on white) for positive numbers, "on time" labels, and chip text.
- **Green Soft** (`{colors.accent-soft}` — `#D7F3E4`): Pale green fill for positive status chips and the "deadline met" row highlight.

### Surface
- **Canvas** (`{colors.canvas}` — `#FFFFFF`): Default page background — pure, cool white.
- **Canvas Soft** (`{colors.canvas-soft}` — `#F4F7FA`): Cool-tinted off-white used on alternating bands (services, team) and the footer.
- **Canvas Tint** (`{colors.canvas-tint}` — `#E8F1F7`): The petrol tint used for the diagonal hero band and the resources callout.
- **Hairline** (`{colors.hairline}` — `#DCE3EA`): 1px borders on cards, tables, and the nav bottom edge.
- **Hairline Input** (`{colors.hairline-input}` — `#B9C6D2`): Slightly darker hairline used on form inputs.

### Text
- **Ink** (`{colors.ink}` — `#0B1F2E`): Default body text color across the site. Deep cool ink, never pure black.
- **Ink Secondary** (`{colors.ink-secondary}` — `#2C4256`): Secondary text, service descriptions, team titles.
- **Ink Mute** (`{colors.ink-mute}` — `#5B6E80`): Slate helper text, captions, table labels, footnotes.
- **Ink Mute 2** (`{colors.ink-mute-2}` — `#6B7D8E`): Near-equivalent to ink-mute used in nav secondary items.
- **On Primary** (`{colors.on-primary}` — `#FFFFFF`): Text on petrol and deep-ink surfaces (11.4:1 on `{colors.primary}`).

### Semantic
Forms and the deadlines table use a small semantic set: **Success** (`{colors.success}` — `#1A7A4A`, shared with green-deep) for confirmations and "filed" states, **Error** (`{colors.error}` — `#C8403A`) for field validation and "overdue", and **Warning** (`{colors.warning}` — `#B8860B`) for "due within 14 days". Negative figures in tables use `{colors.error}` text; positive figures use `{colors.accent-deep}`.

## Typography

### Font Family

The display and heading tier is **Manrope** (open-source, Google Fonts) at weights 600 (semibold) and 700 (bold). It is loaded with `font-feature-settings: "kern"` and set with negative tracking at display sizes — its geometric forms and tight spacing give headlines a confident, engineered feel.

The body and UI tier is **IBM Plex Sans** at weights 400 (regular) and 500 (medium) for paragraphs, buttons, nav, captions, and form labels. The numeric tier is **IBM Plex Mono** at weights 400 and 500: every figure callout, fee, date, percentage, and table cell is set in it with `font-feature-settings: "tnum"`. The two Plex faces share metrics, so mono numbers sit cleanly inside sans sentences.

### Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@600;700&family=IBM+Plex+Sans:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: Manrope, system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-body: 'IBM Plex Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-mono: 'IBM Plex Mono', ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace;
}
```

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 56px | 700 | 1.08 | -1.4px | Hero headline |
| `{typography.display-xl}` | 44px | 700 | 1.12 | -0.9px | Section opener, service page title |
| `{typography.display-lg}` | 32px | 700 | 1.15 | -0.5px | Card title / sub-section |
| `{typography.display-md}` | 26px | 600 | 1.2 | -0.3px | Compact card title, process step title |
| `{typography.heading-lg}` | 22px | 600 | 1.25 | -0.2px | Pricing tier name |
| `{typography.heading-md}` | 20px | 600 | 1.3 | -0.1px | Section sub-heading, FAQ question |
| `{typography.heading-sm}` | 18px | 600 | 1.35 | 0 | Team member name |
| `{typography.body-lg}` | 17px | 400 | 1.55 | 0 | Hero lead and service intro |
| `{typography.body-md}` | 15px | 400 | 1.55 | 0 | Default body |
| `{typography.body-tabular}` | 14px | 400 | 1.5 | 0 | Money, dates, percentages in tables (mono, `tnum`) |
| `{typography.figure-callout}` | 40px | 500 | 1.1 | -0.8px | Large number callouts (mono, `tnum`) |
| `{typography.button-md}` | 15px | 500 | 1.0 | 0 | Button label |
| `{typography.button-sm}` | 14px | 500 | 1.0 | 0 | Compact button label |
| `{typography.caption}` | 13px | 400 | 1.5 | 0 | Helper, table labels, footnotes |
| `{typography.micro}` | 12px | 400 | 1.5 | 0 | Fine print, compliance note |
| `{typography.micro-cap}` | 11px | 500 | 1.2 | 0.8px | All-caps eyebrow and chip label |

### Principles
- **Bold weight, tight tracking.** Display tiers render at weight 700 with -1.4px at 56px scaling to -0.3px at 26px. Manrope ships 200–800; the brand uses only 600 and 700 so headlines never look thin or soft.
- **Monospace for every number.** Any element rendering currency, a date, a percentage, or a count uses IBM Plex Mono with `font-feature-settings: "tnum"`. Inline figures inside a sentence switch to mono at the same size.
- **Figure callouts are the hero's argument.** `{typography.figure-callout}` at 40px mono carries three numbers on the hero card and one number per service card; the label beneath is `{typography.micro-cap}`.
- **Body stays readable.** IBM Plex Sans at 15px with 1.55 leading is the default; service and resource pages use 17px for leads.
- **Eyebrows are small and spaced.** `{typography.micro-cap}` is uppercase IBM Plex Sans medium with 0.8px tracking in `{colors.ink-mute}`.

### Note on Font Pairing
All three faces are open-source via Google Fonts. Manrope's geometric bold gives the practice a contemporary, engineered voice; the IBM Plex family (Sans and Mono) was designed as a matched pair, so figures and prose share rhythm and weight. Do not substitute a serif display (it reads as old-fashioned here) and do not render numbers in the sans — the mono figures are the practice's most recognizable detail. If Manrope is unavailable, Sora at weight 700 with the same tracking is the closest substitute.

## Layout

### Spacing System
- **Base unit**: 8px (with 2 / 4 / 12 sub-tokens for fine work).
- **Tokens**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.huge}` 64px.
- **Section padding**: 64–96px on marketing bands; 32–48px on the pricing and resources pages where visitors compare and scan.
- **Card internal padding**: 32px on service and pricing cards; 24px on figure-callout cards.

### Grid & Container
- Pages center in a ~1200px container; the diagonal tint band extends edge-to-edge above.
- Services run 3-up → 2-up → 1-up at 1024 / 768 breakpoints; pricing tiers collapse 3-up → 1-up.
- The process section is a 4-step horizontal row with numbered markers in `{colors.primary-soft}`, collapsing to a vertical timeline under 768px.
- The deadlines table is a full-width 12-column table on desktop (date, obligation, who it applies to, status) and a stacked card list on mobile.

### Whitespace Philosophy
The diagonal tint band occupies the upper third of the page; the white canvas below is generously padded. Section gaps tend toward 80px, tightening to 32px on the pricing and deadlines pages where the content is tabular and visitors are comparing rows.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat with 1px `{colors.hairline}` border | Default card and table surface |
| 1 | `box-shadow: rgba(11,31,46,0.06) 0 1px 3px` | Service cards, pricing cards, figure callouts |
| 2 | `box-shadow: rgba(11,31,46,0.10) 0 8px 24px` | Hero figure card, sticky quote panel, mobile nav sheet |
| 3 | Diagonal tint band | The site's primary depth medium — a flat angled shape, not a shadow |

### Decorative Depth
The diagonal tint band IS the depth system. Implemented as a `{colors.canvas-tint}` block with `clip-path: polygon(0 0, 100% 0, 100% 78%, 0 100%)` (or the mirrored angle on inner pages) so the band's lower edge cuts across the page at about 6 degrees. Only a single-layer shadow is used anywhere; there are no stacked shadows, no gradients, and no blurred glows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Table chrome, tag corners, nav active indicator |
| `{rounded.sm}` | 6px | Form inputs, select menus |
| `{rounded.md}` | 8px | Buttons, compact cards, alerts |
| `{rounded.lg}` | 10px | Service, pricing, and figure-callout cards |
| `{rounded.xl}` | 12px | Hero figure card, client-portal callout, photo frames |
| `{rounded.pill}` | 9999px | Status chips and the pricing period toggle only — never buttons |

### Photography Geometry
The site uses **clean workspace photography** and **abstract chart illustrations**. Photographs are daylight, uncluttered desks, documents, and screens at an angle, with cool neutral grading; they sit inset at 3:2 inside `{rounded.xl}` 12px frames with a 1px `{colors.hairline}` border and a Level 1 shadow. Chart illustrations are flat SVG — simple bars and lines in `{colors.primary}`, `{colors.primary-soft}`, and `{colors.accent}` on `{colors.canvas-soft}` — and never attempt to depict real client data. Team portraits are color, 1:1, inside `{rounded.lg}` frames.

## Components

### Buttons

**`button-primary`** — the dominant CTA site-wide ("Request a quote").
- Background `{colors.primary}`, text `{colors.on-primary}` (11.4:1), type `{typography.button-md}`, padding `10px 18px`, rounded `{rounded.md}` 8px.
- Hover shifts background to `{colors.primary-deep}`; pressed state `button-primary-pressed` shifts to `{colors.primary-press}`.

**`button-secondary`** — outline-style alternative ("Book a call").
- Background `{colors.canvas}`, text `{colors.primary}`, 1px solid `{colors.primary}` border, same geometry. On mobile the hero secondary becomes a `tel:` link.

**`button-on-dark`** — used on the featured pricing tier and the client-portal callout.
- Background `{colors.accent}`, text `{colors.brand-dark-900}` (dark text on green keeps 6.4:1), same geometry. Green is only a button fill on dark surfaces.

### Cards & Containers

**`card-service`** — one card per service (tax, bookkeeping, payroll, advisory, company formation).
- Background `{colors.canvas}`, padding `{spacing.xxl}`, rounded `{rounded.lg}` 10px, 1px `{colors.hairline}` border, Level 1 shadow. Icon in `{colors.primary-soft}`, title `{typography.display-md}`, summary `{typography.body-md}`, one figure in `{typography.figure-callout}` (for example a turnaround time) and a `link-on-light` "See what's included".

**`card-pricing-tier`** — a pricing approach tier (fixed-fee packages for individuals, small business, and growing business).
- Background `{colors.canvas}`, padding `{spacing.xxl}`, rounded `{rounded.lg}`, 1px `{colors.hairline}` border. Title `{typography.heading-lg}`, "from" figure in `{typography.figure-callout}` mono with `tnum`, inclusions list with `{colors.accent}` checkmarks, body `{typography.body-md}`, CTA pinned bottom as `button-primary`. All figures are placeholders until the owner supplies them.

**`card-pricing-tier-featured`** — the inverted dark recommended tier.
- Background `{colors.brand-dark-900}`, text `{colors.on-primary}`, a `chip-status-positive` "Most chosen" at the top, otherwise identical structure to `card-pricing-tier`. CTA becomes `button-on-dark`.

**`card-tint-band`** — the resources and deadlines callout.
- Background `{colors.canvas-tint}`, text `{colors.ink}`, padding `{spacing.xxl}`, rounded `{rounded.lg}`. Holds the next three filing deadlines in `{typography.body-tabular}` and a link to the full calendar.

**`card-figure-callout`** — number callout card.
- Background `{colors.canvas}`, type `{typography.body-tabular}` (mono with `tnum`), padding `{spacing.xl}` 24px, rounded `{rounded.lg}` 10px, 1px `{colors.hairline}` border, Level 1 shadow. One or three figures in `{typography.figure-callout}`, each with a `{typography.micro-cap}` label; positive deltas in `{colors.accent-deep}`, negative in `{colors.error}`. On the hero it carries a Level 2 shadow and shows illustrative, clearly labelled sample figures.

### Inputs & Forms

**`text-input`** — quote request and booking form field.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, padding `10px 12px`, rounded `{rounded.sm}` 6px, 1px `{colors.hairline-input}` border. Labels sit above in `{typography.caption}` medium; numeric fields (turnover, employees) switch to `{typography.body-tabular}`.
- Focus state `text-input-focused`: border swaps to `{colors.primary}` with a 2px outer ring at `{colors.primary-bg-subdued-hover}`. Error state uses `{colors.error}` border and message.
- The quote form never asks for documents; a `{typography.micro}` note beneath it points to the secure client-portal upload and states that nothing on the site is personalised financial advice.

### Navigation

**`nav-bar`** — top nav on the white canvas above the tint band.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.lg} {spacing.xl}`, 1px `{colors.hairline}` bottom rule. Wordmark in Manrope on the left; primary nav (Services, Pricing, Process, Team, Resources) center; a "Client portal" `link-on-light` with an external-link glyph plus a filled `button-primary` on the right. Active item carries a 2px `{colors.primary}` underline.

### Pills, Tags, and Chips

**`chip-status-positive`** — green status chip for "filed", "on time", "most chosen".
- Background `{colors.accent-soft}`, text `{colors.accent-deep}`, type `{typography.micro-cap}`, padding `4px 10px`, rounded `{rounded.pill}`. Warning and error chips use `{colors.warning}` / `{colors.error}` text on a 10% tint of the same color.

### Signature Components

**Diagonal Tint Band** — a flat `{colors.canvas-tint}` shape clipped at about 6 degrees across the upper third of the page. The nav sits on white above it; the headline, lead, and two buttons sit on the band on the left, with the hero `card-figure-callout` on the right overlapping the band's lower edge.

**Figure-Callout Row** — three `card-figure-callout` cards in a row under the hero or on the services page (for example turnaround time, years in practice, clients served — all placeholders), each with a mono number and a small label. The row is the practice's most data-forward surface.

**Process Timeline** — four steps (discovery call, onboarding and document upload, monthly or annual work, review and planning) as numbered markers in `{colors.primary-soft}` connected by a 1px `{colors.hairline}` line, titles in `{typography.display-md}`.

**Deadlines Table** — a hairline table of upcoming filing dates in `{typography.body-tabular}`, with a `chip-status-positive` / warning / error chip per row and a `{typography.micro}` note that dates vary by jurisdiction and entity type.

**Client-Portal Callout** — a `{colors.brand-dark-900}` band with a short line on secure document upload, two-factor sign-in, and encryption at rest, closed by `button-on-dark`. The portal itself is a third-party product; this is an entry point, not a mockup of it.

**Tabular-Figure Money Type** — every number rendering money, a date, a percentage, or a count uses IBM Plex Mono with `font-feature-settings: "tnum"`. The practice's quiet signal that its work is exact.

**`link-on-light`** — inline links on light surfaces.
- Text `{colors.primary}` rendered in `{typography.body-md}` medium, underlined on hover only.

**`footer-light`** — site-wide footer.
- Background `{colors.canvas-soft}`, text `{colors.ink-mute}`, type `{typography.caption}`, padding `{spacing.huge} {spacing.xl}` (64px 24px). Holds 4 columns (services, resources, practice, legal), the client-portal link, and a legal row in `{typography.micro}` with the professional-body registration placeholder, the "not personalised financial advice" statement, and the privacy link.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` for filled CTAs, links, and the active nav — one filled button per band.
- Open every page on the diagonal tint band; a plain white hero loses the brand's one structural gesture.
- Render display tiers at weight 700 with negative tracking — the tight bold headline is the typographic signature.
- Use IBM Plex Mono with `tnum` on every money, date, percentage, and count cell, including inline figures.
- Give green `{colors.accent}` a meaning every time it appears: a positive figure, a completed status, an included feature.
- Keep every card to a 1px `{colors.hairline}` border and a single-layer shadow.
- Put the client-portal link in the nav and the footer; existing clients arrive looking for it.

### Don't
- Don't introduce gradients, meshes, or stacked shadows — depth comes from the one angled band and one soft shadow.
- Don't use green `{colors.accent}` as text on white; it fails contrast. Use `{colors.accent-deep}` for positive-number text and chip labels.
- Don't use petrol `{colors.primary}` as a body-text color — it is a CTA and link color, not a type color at body size.
- Don't turn buttons into pills; `{rounded.pill}` is for status chips and the period toggle only.
- Don't render figures in the sans — mono with `tnum` is the practice's most recognizable detail.
- Don't show numbers that look like real client results; every figure on the template is a labelled placeholder.
- Don't use stock imagery of calculators, coins, or piggy banks; use workspace photography and flat chart illustrations.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | ≥ 1440px | Tint band edge-to-edge; hero figure card overlaps the band's lower edge; services 3-up |
| Desktop | 1024–1440px | Default content max-width; pricing 3-up; process 4-step row |
| Tablet | 768–1023px | Services 2-up; pricing 3-up compressed; hero figure card drops beneath the headline |
| Mobile | < 768px | Everything 1-up; hamburger nav; process becomes vertical timeline; display drops 56 → 36px |

### Touch Targets
- Buttons hit ≥ 44×44px on mobile via padding scaling to `12px 18px`. The hero's two buttons stack full-width.
- Form fields stay at 44px minimum height; table rows become cards with the whole card tappable.

### Collapsing Strategy
- Display tiers stair-step 56 → 44 → 32 → 26 → 22px through the breakpoints; tracking relaxes to -0.6px at 36px.
- The diagonal band keeps its angle on mobile but shortens so the headline and buttons stay above the fold.
- Figure-callout rows stair-step 3-up → 1-up; on mobile the three figures sit side by side inside one card at 28px.
- The deadlines table becomes a stacked list: date in mono on the left, obligation and chip on the right.
- A sticky bottom bar on mobile holds "Request a quote" and "Book a call" once the visitor scrolls past the hero.

### Image Behavior
Workspace photographs use `srcset` with art-direction crops: 3:2 on desktop, 4:3 on mobile. Chart illustrations are inline SVG and scale with the container; they hide their axis labels under 480px to stay legible.

## Iteration Guide

1. Focus on ONE component at a time.
2. Reference component names and tokens directly (`{colors.primary}`, `{button-primary}-pressed`, `{rounded.md}`).
3. Run `npx @google/design.md lint DESIGN.md` after edits.
4. Add new variants as separate entries (for example `card-service-compact` for the footer list).
5. Default body to `{typography.body-md}` (15px); use `{typography.body-tabular}` for any money, date, or count cell and `{typography.figure-callout}` for callouts.
6. Apply `kern` globally on the body; apply `tnum` per element on numeric content, always in IBM Plex Mono.
7. The diagonal tint band is non-negotiable on page heroes; adjust its angle (4–8 degrees) rather than replacing it.
8. When adding a service, add it to the nav, the services grid, the pricing inclusions lists, and the footer column in the same change.

## Known Gaps

- No dark-mode scheme is specified; the featured tier and portal callout are the only dark surfaces.
- The client portal is an external product; its visual language is not covered here beyond the entry callout.
- Filing deadlines, fee figures, and licence or registration numbers are placeholders and vary by jurisdiction and entity type; they must be supplied and reviewed per practice.

### Revision 2026-10-07: reference-led direction, Consultor "Financial Advisor" (consultor.ancorathemes.com/financial-advisor)

Rebuilt at the owner's request to match the Consultor Financial Advisor demo. Changes from the alpha above (the frontmatter now carries these values):

- **Colours.** Ink and every dark surface are the demo's green-black `#132629` (top bar, menu bar, testimonial band, process caption box, footer, featured pricing tier). Primary is the demo's teal `#296D75` with white text on all filled buttons except the hero and article buttons, which use the demo's lime `#98CB2B` with ink text (white on lime fails contrast). Lime also colours the service icons, checks and the active carousel dot; `#5D8A12` is the text-safe lime. Alternating bands sit on `#F5F5F5`; hairlines are `#E5E5E5`; body text is `#5E686B` with `#8D8E90` for captions. The petrol blue, confident green and diagonal tint band of the alpha are retired for this direction.
- **Type.** DM Sans for display and body (57px hero at 700 with -1.8px tracking, 17px/28px body); IBM Plex Mono with tabular figures stays for every money, date and count, since that is the practice's precision signal.
- **Shapes.** Buttons, cards, inputs and photographs are square (`rounded.none`); cards are flat white on the grey band with no border or shadow; contact and newsletter fields are underline-only with an icon.
- **Page order.** Dark top bar (hours, phone, address, socials) and a transparent menu bar that becomes a fixed dark bar; full-bleed photographic hero with a centred headline and a lime button; "The practice" split with overlapping photographs, teal button and phone; four icon service cards; four photo tiles; process split (photograph with a dark caption box beside numbered steps); ghost-number statistics; dark testimonial half beside a photograph; badge strip; pricing tiers; filing dates; guides as white article cards with a lime button; "Get in touch" contact block with underline fields and consent; social strip; dark footer with Office, Links and Newsletter columns and the legal row.
- **Motion.** Hero photograph wipes down and settles, headline lines rise, button follows; overlapping photographs wipe in and drift against each other; cards, tiles and rows rise in turn; the ghost numbers count up (anime.js) when the row enters; testimonial slides through Embla with avatar fade; reduced motion renders everything at rest.
