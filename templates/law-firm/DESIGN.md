---
version: alpha
name: Law-Firm-Template
description: A traditional, authoritative design language for a law firm with several practice areas, partner biographies, and consultation booking. The system rests on a warm ivory canvas, near-black warm ink, and a single deep burgundy reserved for the one filled call-to-action per band, with a muted brass used only for hairline rules, eyebrow labels, and small ornaments. Cormorant Garamond at medium weights carries every headline with generous leading, while Source Sans 3 handles body copy, buttons, and tabular figures. Surfaces are flat and hairline-ruled, radii stay tight at 4–6px, elevation is almost absent, and the hero is a flat ivory band closed by one brass rule rather than any atmospheric backdrop.

colors:
  primary: "#6B1F2A"
  primary-deep: "#561821"
  primary-press: "#3F1118"
  primary-soft: "#8A3340"
  primary-bg-subdued-hover: "#EFD9DC"
  brand-dark-900: "#2B1216"
  ink: "#1C1A17"
  ink-secondary: "#3A3632"
  ink-mute: "#6B655D"
  ink-mute-2: "#7A736A"
  on-primary: "#FFFFFF"
  on-dark-muted: "#CBC0AE"
  canvas: "#FBF8F3"
  canvas-soft: "#F3EDE3"
  canvas-cream: "#EADFCC"
  hairline: "#DED6C9"
  hairline-input: "#B8AE9F"
  accent: "#B08D57"
  accent-deep: "#8C6B3A"
  accent-soft: "#EFE4CF"
  shadow-tint: "#3A2A1A"
  success: "#3F6B4A"
  error: "#A3382E"

typography:
  display-xxl:
    fontFamily: "'Cormorant Garamond', Georgia, 'Times New Roman', serif"
    fontSize: 60px
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: -0.3px
    fontFeature: kern
  display-xl:
    fontFamily: "'Cormorant Garamond', Georgia, 'Times New Roman', serif"
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.16
    letterSpacing: -0.2px
    fontFeature: kern
  display-lg:
    fontFamily: "'Cormorant Garamond', Georgia, 'Times New Roman', serif"
    fontSize: 34px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
    fontFeature: kern
  display-md:
    fontFamily: "'Cormorant Garamond', Georgia, 'Times New Roman', serif"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.22
    letterSpacing: 0
    fontFeature: kern
  heading-lg:
    fontFamily: "'Cormorant Garamond', Georgia, 'Times New Roman', serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
    fontFeature: kern
  heading-md:
    fontFamily: "'Cormorant Garamond', Georgia, 'Times New Roman', serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
    fontFeature: kern
  heading-sm:
    fontFamily: "'Cormorant Garamond', Georgia, 'Times New Roman', serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: 0
    fontFeature: kern
  body-lg:
    fontFamily: "'Source Sans 3', 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
    fontFeature: kern
  body-md:
    fontFamily: "'Source Sans 3', 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
    fontFeature: kern
  body-tabular:
    fontFamily: "'Source Sans 3', 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
    fontFeature: tnum
  button-md:
    fontFamily: "'Source Sans 3', 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0.2px
    fontFeature: kern
  button-sm:
    fontFamily: "'Source Sans 3', 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0.2px
    fontFeature: kern
  caption:
    fontFamily: "'Source Sans 3', 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
    fontFeature: tnum
  micro:
    fontFamily: "'Source Sans 3', 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
    fontFeature: kern
  micro-cap:
    fontFamily: "'Source Sans 3', 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 1.4px
    fontFeature: kern

rounded:
  xs: 2px
  sm: 4px
  md: 4px
  lg: 6px
  xl: 6px
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
    rounded: "{rounded.sm}"
    padding: 12px 24px
  button-primary-pressed:
    backgroundColor: "{colors.primary-press}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 12px 24px
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 12px 24px
  button-on-dark:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.brand-dark-900}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 12px 24px
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
  card-practice-area:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-consultation:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-consultation-featured:
    backgroundColor: "{colors.brand-dark-900}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-parchment-band:
    backgroundColor: "{colors.canvas-cream}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-attorney-profile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-tabular}"
    rounded: "{rounded.lg}"
    padding: 24px
  tag-practice-area:
    backgroundColor: "{colors.primary-bg-subdued-hover}"
    textColor: "{colors.primary-deep}"
    typography: "{typography.micro-cap}"
    rounded: "{rounded.xs}"
    padding: 4px 8px
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
  footer-dark:
    backgroundColor: "{colors.brand-dark-900}"
    textColor: "{colors.hairline}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 64px 24px
---

## Overview

This design language is for a law firm website: several practice areas, partner and associate biographies, a results-and-approach narrative, an FAQ, and a consultation booking flow. The mood is traditional, authoritative, and editorial. The page opens on a flat warm-ivory hero band (`{colors.canvas}`) with a serif headline, one short paragraph, one filled burgundy button, and a visible "call" link, closed at the bottom by a single 1px brass rule (`{colors.accent}`). There is no atmospheric backdrop, no gradient, and no decorative blur anywhere on the site; the ivory canvas, hairline rules, and generous serif leading do all of the atmospheric work. Below the hero, alternating bands of `{colors.canvas}` and `{colors.canvas-soft}` (a slightly deeper ivory) carry practice areas, attorney profiles, and the consultation section.

The color system has two primary roles. **Burgundy** (`{colors.primary}` — `#6B1F2A`) is the firm's signature call-to-action color, used sparingly: one filled button per band, inline link emphasis, and the active nav underline. **Warm ink** (`{colors.ink}` — `#1C1A17`) is the universal body text color and, in its deeper oxblood form (`{colors.brand-dark-900}`), the fill of the footer and the featured consultation card. **Brass** (`{colors.accent}` — `#B08D57`) is an ornament color only: hairline rules, eyebrow labels at `{colors.accent-deep}`, and the small rule under section titles. It is never a button fill on light surfaces.

Typography is built around **Cormorant Garamond** at weights 500 and 600 with generous leading (1.12–1.35) and neutral tracking — the firm's editorial signature. Display sizes (34–60px) sit on line heights that leave visible air between lines; body copy is **Source Sans 3** at 16–18px with 1.6 leading for comfortable reading by stressed visitors on a phone. Tabular figures (where bar-admission years, case counts, and fee figures appear) use the OpenType `tnum` feature in Source Sans 3.

**Key Characteristics:**
- Flat ivory hero band on every page, closed by one 1px brass rule — no gradients, no mesh, no photographic wash.
- Single-burgundy CTA hierarchy: filled `{colors.primary}` button is the only filled button on light surfaces, one per band.
- Cormorant Garamond medium (weight 500) display tier with generous leading and no negative tracking.
- Tabular-figure body type (`tnum`) for any cell containing years, counts, or fee figures — a quiet signal of precision.
- Hairline-ruled layout: 1px `{colors.hairline}` rules separate list rows, bio blocks, and FAQ items instead of cards floating on shadows.
- Tight-radius rectangular buttons (`{rounded.sm}` 4px) with `12px 24px` padding — deliberate and formal rather than playful.
- Parchment-band credo cards (`{colors.canvas-cream}`) introduce a deeper warm interlude for quotes, the firm's approach, and disclaimers.
- Imagery is architectural (stone, columns, timber, book spines) and monochrome portraiture; no stock handshake photography.

## Colors

> **Source pages:** home, practice-area pages, attorney bios, results and approach, FAQ, contact and consultation booking.

### Brand & Accent
- **Burgundy** (`{colors.primary}` — `#6B1F2A`): The firm's signature CTA color. Filled consultation button, link emphasis, active nav underline.
- **Burgundy Deep** (`{colors.primary-deep}` — `#561821`): Hover state of the primary button and the text color inside pale burgundy tags.
- **Burgundy Press** (`{colors.primary-press}` — `#3F1118`): Pressed-state of the primary button.
- **Burgundy Soft** (`{colors.primary-soft}` — `#8A3340`): Lighter burgundy used for icon strokes, timeline markers, and chart accents in results summaries.
- **Burgundy Subdued** (`{colors.primary-bg-subdued-hover}` — `#EFD9DC`): Pale burgundy fill used as the background of practice-area tags and the selected state in filter lists.
- **Brand Dark 900** (`{colors.brand-dark-900}` — `#2B1216`): Deep oxblood used for the footer, the featured consultation card, and the dark variant of the nav on bio pages.
- **Brass** (`{colors.accent}` — `#B08D57`): Hairline rules, section-title underscores, bullet ornaments, and the button fill on dark surfaces. Fails contrast as text on ivory (about 2.9:1) — never use it for body or caption text on light backgrounds.
- **Brass Deep** (`{colors.accent-deep}` — `#8C6B3A`): The text-safe brass (4.6:1 on `{colors.canvas}`) for eyebrow labels and small-caps section markers.
- **Brass Soft** (`{colors.accent-soft}` — `#EFE4CF`): Pale brass fill for the "currently accepting clients" notice and highlighted FAQ rows.

### Surface
- **Canvas** (`{colors.canvas}` — `#FBF8F3`): Default page background — warm ivory, never pure white.
- **Canvas Soft** (`{colors.canvas-soft}` — `#F3EDE3`): Deeper ivory used on alternating bands beneath the hero (practice areas, attorney grid).
- **Canvas Cream** (`{colors.canvas-cream}` — `#EADFCC`): Parchment tone used as the credo / quotation band fill and the disclaimer block.
- **Hairline** (`{colors.hairline}` — `#DED6C9`): 1px warm-grey rules on list rows, cards, tables, and the nav bottom edge.
- **Hairline Input** (`{colors.hairline-input}` — `#B8AE9F`): Slightly darker warm hairline used on form inputs so fields read clearly on ivory.

### Text
- **Ink** (`{colors.ink}` — `#1C1A17`): Default body text color across the site. Warm near-black, never pure black and never cool.
- **Ink Secondary** (`{colors.ink-secondary}` — `#3A3632`): Secondary text, attorney titles, FAQ answers.
- **Ink Mute** (`{colors.ink-mute}` — `#6B655D`): Helper text, captions, table labels, bar-admission lines.
- **Ink Mute 2** (`{colors.ink-mute-2}` — `#7A736A`): Near-equivalent to ink-mute used in nav secondary items and footer link groups.
- **On Primary** (`{colors.on-primary}` — `#FFFFFF`): Text on burgundy and oxblood surfaces (11.3:1 on `{colors.primary}`).

### Semantic
The marketing surfaces use only the two semantic colors a consultation form needs: **Success** (`{colors.success}` — `#3F6B4A`) for "request received" confirmations and **Error** (`{colors.error}` — `#A3382E`) for field validation. Error is deliberately distinct from the burgundy primary so an invalid field never reads as a call to action.

## Typography

### Font Family

The display and heading tier is **Cormorant Garamond** (open-source, Google Fonts) at weights 500 (medium) and 600 (semibold). The face is loaded with `font-feature-settings: "kern"` and renders at its natural tracking — the face has a small x-height and long extenders, so it is set one step larger than a sans would be and given generous leading.

The body and UI tier is **Source Sans 3** at weights 400 (regular) and 600 (semibold). It carries paragraphs, buttons, nav, captions, form labels, and every numeric table, where the OpenType `tnum` feature is enabled per element. There is no monospace role on this site; tabular figures live in Source Sans 3.

### Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Source+Sans+3:wght@400;600&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
  --font-body: 'Source Sans 3', 'Segoe UI', Helvetica, Arial, sans-serif;
}
```

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 60px | 500 | 1.12 | -0.3px | Hero headline |
| `{typography.display-xl}` | 48px | 500 | 1.16 | -0.2px | Section opener, practice-area page title |
| `{typography.display-lg}` | 34px | 500 | 1.2 | 0 | Attorney name on bio page, sub-section |
| `{typography.display-md}` | 28px | 500 | 1.22 | 0 | Practice-area card title, pull quote |
| `{typography.heading-lg}` | 24px | 600 | 1.25 | 0 | Consultation option name |
| `{typography.heading-md}` | 22px | 600 | 1.3 | 0 | Section sub-heading, FAQ question |
| `{typography.heading-sm}` | 20px | 600 | 1.35 | 0 | Attorney name in grid card |
| `{typography.body-lg}` | 18px | 400 | 1.6 | 0 | Hero lead and practice-area intro |
| `{typography.body-md}` | 16px | 400 | 1.6 | 0 | Default body |
| `{typography.body-tabular}` | 15px | 400 | 1.5 | 0 | Years, counts, fee figures (uses `tnum`) |
| `{typography.button-md}` | 16px | 600 | 1.0 | 0.2px | Button label |
| `{typography.button-sm}` | 14px | 600 | 1.0 | 0.2px | Compact button label |
| `{typography.caption}` | 14px | 400 | 1.5 | 0 | Helper, table labels, bar admissions |
| `{typography.micro}` | 12px | 400 | 1.5 | 0 | Fine print, disclaimers |
| `{typography.micro-cap}` | 12px | 600 | 1.2 | 1.4px | All-caps eyebrow in `{colors.accent-deep}` |

### Principles
- **Medium weight, generous leading.** Display tiers render at weight 500 with line heights from 1.12 to 1.22. Cormorant Garamond ships no weight 300; a lighter setting would thin the strokes to the point of breaking up on phones, so 500 is the floor and 600 is reserved for headings under 24px.
- **No negative tracking.** The serif sets at its natural width. A touch of -0.3px is allowed at 60px only; everything below 48px uses 0.
- **Tabular figures for numbers.** Any cell rendering years of practice, case counts, or fee ranges uses `font-feature-settings: "tnum"` in Source Sans 3 so columns align.
- **Eyebrows are spaced small caps.** `{typography.micro-cap}` is uppercase Source Sans 3 semibold with 1.4px tracking in `{colors.accent-deep}`, sitting above every serif section title with a short brass rule beneath.
- **Reading size is generous.** Body copy never drops below 16px; practice-area pages are read by people under stress, often on a phone, and legibility outranks density.

### Note on Font Pairing
Both faces are open-source via Google Fonts. Cormorant Garamond gives the firm the editorial, bookish authority of a printed brief; Source Sans 3 is a humanist sans that stays warm beside it without competing. Do not substitute a geometric sans (it reads as a technology company) or a display serif with high contrast at small sizes (it will fail legibility on captions). If Cormorant Garamond is unavailable, EB Garamond at weight 500 is the closest substitute.

## Layout

### Spacing System
- **Base unit**: 8px (with 2 / 4 / 12 sub-tokens for fine work).
- **Tokens**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.huge}` 64px.
- **Section padding**: 80–112px on marketing bands; 48–64px on bio and FAQ pages where content is read top to bottom.
- **Card internal padding**: 32px on practice-area and consultation cards; 24px on attorney profile cards.

### Grid & Container
- Pages center in a ~1120px container; the hero band and the footer extend edge-to-edge in `{colors.canvas}` and `{colors.brand-dark-900}` respectively.
- Practice areas run 3-up → 2-up → 1-up at 1024 / 768 breakpoints; attorney grid runs 4-up → 2-up → 1-up.
- Bio pages use a two-column layout: a 320px portrait and credentials column on the left, long-form narrative on the right, collapsing to a single column under 768px.
- FAQ and results pages are single-column reading measures of 680–720px, hairline-ruled between items.

### Whitespace Philosophy
The hero band is tall but flat: roughly 40% of the viewport, with the headline sitting in the upper half and the brass rule closing the band. Section gaps tend toward 96px so each practice area or attorney group reads as its own chapter. Density tightens to 24–32px inside the consultation section, where visitors compare options and act.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat with 1px `{colors.hairline}` rule | Default surface — nearly everything |
| 1 | `box-shadow: rgba(58,42,26,0.06) 0 1px 2px` | Hover lift on practice-area cards and attorney cards |
| 2 | `box-shadow: rgba(58,42,26,0.10) 0 4px 12px` | Sticky consultation panel, mobile nav sheet |
| 3 | 1px brass rule (`{colors.accent}`) | The site's primary depth medium — a drawn line, not a shadow |

### Decorative Depth
The brass rule IS the depth system. A single 1px `{colors.accent}` line closes the hero, underscores section titles (a 40px-wide rule under the eyebrow), and separates the footer's legal row. There is no gradient, mesh, blur, or glow anywhere. Shadows are reserved for the two elements that genuinely float (the sticky consultation panel and the mobile nav sheet) and stay faint and warm-tinted.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 2px | Tags, table chrome, the nav active underline ends |
| `{rounded.sm}` | 4px | Buttons, form inputs |
| `{rounded.md}` | 4px | Compact cards, alerts, FAQ row hover |
| `{rounded.lg}` | 6px | Practice-area cards, consultation cards, parchment band |
| `{rounded.xl}` | 6px | Portrait frames and map embed |
| `{rounded.pill}` | 9999px | Reserved for the small "accepting clients" status dot only — never buttons |

### Photography Geometry
The site uses **architectural photography** and **monochrome portraits** rather than product imagery. Attorney portraits are black-and-white (or very low saturation), shot against a plain mid-grey wall, cropped 4:5 inside `{rounded.lg}` 6px frames with a 1px `{colors.hairline}` border and no shadow. Architectural imagery (courthouse stone, library shelves, timber, a façade in raking light) appears as full-bleed 21:9 bands between sections, desaturated to sit quietly with the ivory canvas. No stock photography of gavels, handshakes, or scales.

## Components

### Buttons

**`button-primary`** — the dominant CTA site-wide ("Book a consultation").
- Background `{colors.primary}`, text `{colors.on-primary}` (11.3:1), type `{typography.button-md}`, padding `{spacing.md} {spacing.xl}` (12px 24px), rounded `{rounded.sm}` 4px.
- Hover shifts background to `{colors.primary-deep}`; pressed state `button-primary-pressed` shifts to `{colors.primary-press}`.

**`button-secondary`** — outline-style alternative ("Call the office").
- Background `{colors.canvas}`, text `{colors.primary}`, 1px solid `{colors.primary}` border, same rectangular geometry. On mobile this becomes a `tel:` link with a phone glyph.

**`button-on-dark`** — used inside the footer and the featured consultation card.
- Background `{colors.accent}`, text `{colors.brand-dark-900}` (dark text on brass keeps 7:1 contrast), same geometry. Brass is only a button fill on dark surfaces.

### Cards & Containers

**`card-practice-area`** — one card per practice area (family, employment, property, commercial, estates, and so on).
- Background `{colors.canvas}`, padding `{spacing.xxl}`, rounded `{rounded.lg}` 6px, 1px `{colors.hairline}` border, no shadow at rest; Level 1 on hover. Eyebrow `{typography.micro-cap}`, title `{typography.display-md}`, two-line summary `{typography.body-md}`, and a `link-on-light` "Learn more" with a right arrow.

**`card-consultation`** — a consultation option (initial consultation, fixed-fee review, ongoing counsel).
- Background `{colors.canvas}`, padding `{spacing.xxl}`, rounded `{rounded.lg}`, 1px `{colors.hairline}` border. Title `{typography.heading-lg}`, duration and fee figure in `{typography.display-md}` with `tnum`, body `{typography.body-md}`, CTA pinned bottom as `button-primary`.

**`card-consultation-featured`** — the inverted dark recommended option.
- Background `{colors.brand-dark-900}`, text `{colors.on-primary}`, a 1px `{colors.accent}` top rule, otherwise identical structure to `card-consultation`. CTA becomes `button-on-dark`. The oxblood fill is the one dark surface on the page outside the footer.

**`card-parchment-band`** — the credo and disclaimer interlude.
- Background `{colors.canvas-cream}`, text `{colors.ink}`, padding `{spacing.xxl}`, rounded `{rounded.lg}`. Used for the firm's approach statement, a pull quote in `{typography.display-md}`, and the "no attorney–client relationship is formed by this form" disclaimer in `{typography.micro}`.

**`card-attorney-profile`** — portrait, name, title, and credentials.
- Background `{colors.canvas}`, type `{typography.body-tabular}` (with `tnum` for admission years), padding `{spacing.xl}` 24px, rounded `{rounded.lg}` 6px, 1px `{colors.hairline}` border, no shadow. Portrait 4:5 monochrome at the top, name `{typography.heading-sm}`, title in `{colors.ink-secondary}`, then a hairline-ruled list: bar admissions, education, languages spoken.

### Inputs & Forms

**`text-input`** — consultation and contact form field.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, padding `{spacing.sm} {spacing.md}` (10px 12px), rounded `{rounded.sm}` 4px, 1px `{colors.hairline-input}` border. Labels sit above the field in `{typography.caption}` semibold; never placeholder-only labels.
- Focus state `text-input-focused`: border swaps to `{colors.primary}` with a 2px outer ring at `{colors.primary-bg-subdued-hover}`. Error state swaps the border to `{colors.error}` with the message beneath in `{typography.caption}`.
- Every consultation form carries a `{typography.micro}` line directly under the submit button: submitting the form does not create an attorney–client relationship and confidential details should not be sent until engagement is confirmed.

### Navigation

**`nav-bar`** — top nav on the ivory canvas.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.lg} {spacing.xl}`, 1px `{colors.hairline}` bottom rule. Firm wordmark in Cormorant Garamond on the left, primary nav (Practice Areas, Attorneys, Approach, FAQ, Contact) center, phone number in `{typography.body-tabular}` plus a filled `button-primary` on the right. Active item carries a 2px `{colors.primary}` underline. On bio pages the nav may invert to `{colors.brand-dark-900}` with `{colors.hairline}` text.

### Pills, Tags, and Chips

**`tag-practice-area`** — subdued burgundy tag on bio cards and results entries.
- Background `{colors.primary-bg-subdued-hover}`, text `{colors.primary-deep}`, type `{typography.micro-cap}`, padding `4px 8px`, rounded `{rounded.xs}` 2px — a rectangle, not a pill.

### Signature Components

**Brass-Ruled Hero Band** — a flat `{colors.canvas}` band holding eyebrow, serif headline in `{typography.display-xxl}`, a one-paragraph lead, `button-primary` and the phone link side by side, closed by a full-width 1px `{colors.accent}` rule. Optionally a monochrome architectural photograph sits to the right on desktop; on mobile the image drops and the band stays text-only.

**Attorney Grid** — 4-up grid of `card-attorney-profile` cards with monochrome portraits, hairline-ruled credentials, and a `tag-practice-area` row. Portraits are the only imagery on the home page besides one architectural band, and they are deliberately uniform in crop and tone.

**Hairline FAQ** — question in `{typography.heading-md}` serif, answer in `{typography.body-md}`, each item separated by a 1px `{colors.hairline}` rule, expand / collapse with a thin plus glyph in `{colors.accent-deep}`. No accordion boxes, no shadows.

**Tabular-Figure Credentials** — every number rendering years admitted, matters handled, or fee figures uses `font-feature-settings: "tnum"` so credential lists and fee tables align cleanly.

**Contact with Map** — two columns: office address, hours, phone, and email set in `{typography.body-md}` with `tnum` on the left; a desaturated map embed inside a `{rounded.xl}` 6px frame with 1px `{colors.hairline}` border on the right. Below both, the parchment disclaimer block.

**`link-on-light`** — inline links on light surfaces.
- Text `{colors.primary}` rendered in `{typography.body-md}`, underlined with a 1px `{colors.accent}` underline offset 3px; hover darkens to `{colors.primary-deep}`.

**`footer-dark`** — site-wide footer.
- Background `{colors.brand-dark-900}`, text `{colors.hairline}`, headings in `{colors.accent}`, type `{typography.caption}`, padding `{spacing.huge} {spacing.xl}` (64px 24px). Holds 4 columns (practice areas, attorneys, office, legal), a 1px `{colors.accent}` rule, then a legal row in `{typography.micro}` with the attorney-advertising notice, jurisdiction statement, and privacy link.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` for filled CTAs, link emphasis, and the active nav underline — one filled button per band.
- Open every page on the flat ivory hero band with the single brass rule; the rule is the brand's one ornament.
- Render display tiers at weight 500 with line heights of 1.12 or more — the air between serif lines is the typographic signature.
- Use `font-feature-settings: "tnum"` on every cell showing years, counts, or fee figures.
- Separate repeated content (FAQ items, credentials, practice lists) with 1px `{colors.hairline}` rules rather than boxes.
- Put the phone number in the nav and in the hero; many visitors arrive on a phone and want to call, not browse.
- Keep the disclaimer block visible near every form and in the footer; advertising rules differ by jurisdiction and the copy must be reviewed locally.

### Don't
- Don't introduce gradients, blurs, or glows anywhere — the site's depth is drawn with lines, not light.
- Don't use brass (`{colors.accent}`) as text on ivory; it fails contrast. Use `{colors.accent-deep}` for eyebrows and keep raw brass for rules and dark-surface buttons.
- Don't use burgundy `{colors.primary}` as a body-text color — it is a CTA and link color, not a type color at body size.
- Don't round buttons beyond `{rounded.sm}` 4px or turn them into pills; the rectangle is part of the formal register.
- Don't render credential or fee cells without `tnum` — misaligned figures read as carelessness.
- Don't use stock imagery of gavels, scales, or handshakes; use architecture and monochrome portraits.
- Don't drop body copy below 16px or leading below 1.5 on practice-area pages.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | ≥ 1440px | Hero band gains a right-hand architectural photograph; attorney grid 4-up |
| Desktop | 1024–1440px | Default content max-width; practice areas 3-up; bio two-column |
| Tablet | 768–1023px | Practice areas 2-up; attorney grid 2-up; bio stays two-column at 280px portrait |
| Mobile | < 768px | Everything 1-up; hamburger nav with the phone number pinned at the top of the sheet; display drops 60 → 38px |

### Touch Targets
- Buttons hit ≥ 44×44px on mobile via padding scaling to `14px 24px`. The "Call" button on mobile is full-width directly beneath the headline.
- Form fields stay at 44px minimum height; FAQ rows are fully tappable across their width.

### Collapsing Strategy
- Display tiers stair-step 60 → 48 → 34 → 28 → 24px through the breakpoints; leading stays at 1.12–1.25 throughout.
- The hero band keeps the brass rule at every width; the photograph is dropped before the text is reduced.
- Attorney cards collapse to a horizontal row (portrait left, text right) under 480px to keep the list scannable.
- Consultation cards stair-step 3-up → 2-up → 1-up with the featured option first on mobile.
- A sticky bottom bar on mobile holds "Call" and "Book a consultation" once the visitor scrolls past the hero.

### Image Behavior
Architectural bands use `srcset` with art-direction crops: 21:9 on desktop, 4:3 on mobile, always desaturated. Portraits are served at 4:5 in a single crop and never cropped to a round frame.

## Iteration Guide

1. Focus on ONE component at a time.
2. Reference component names and tokens directly (`{colors.primary}`, `{button-primary}-pressed`, `{rounded.sm}`).
3. Run `npx @google/design.md lint DESIGN.md` after edits.
4. Add new variants as separate entries (for example `card-practice-area-compact` for the footer list).
5. Default body to `{typography.body-md}` (16px); use `{typography.body-tabular}` for any year, count, or fee cell.
6. Apply `kern` globally on the body; apply `tnum` per element on numeric content.
7. The flat ivory hero with its brass rule is non-negotiable; do not reintroduce background imagery behind the headline.
8. When adding a new practice area, add it to the nav, the practice-area grid, the footer column, and the relevant attorney tags in the same change.

## Known Gaps

- No dark-mode scheme is specified; the oxblood footer and featured card are the only dark surfaces, and the site is light-only by design.
- Map styling depends on the embed provider; the desaturated treatment is a CSS filter and may need adjustment per provider.
- Jurisdiction-specific advertising language (for example "Attorney Advertising" notices or regulator numbers) is a placeholder and must be supplied per office.

## Revision 2026-10-08: reference-led direction, Lawsight one-page (demo.casethemes.net/lawsight/home-2-one-page)

Built at the owner's request after the Lawsight "home 2 one page" demo. **This revision deliberately overrides several rules set out above.** A first attempt kept every prohibition in this file and logged each conflict as a departure; the result followed the reference's section order but resembled nothing about it, and the owner rejected it. The instruction on the second pass was to follow the reference closely and keep only this file's palette and typefaces.

### What is still this file's own

- **The palette, unchanged.** Burgundy `{colors.primary}` stays the CTA and link colour, brass `{colors.accent}` the ornament and dark-surface fill, oxblood `{colors.brand-dark-900}` the dark ground, and warm ivory `{colors.canvas}` / `{colors.canvas-soft}` the light bands. Where the demo uses a neutral near-black, this uses oxblood.
- **The typefaces, unchanged.** Cormorant Garamond carries every headline at weight 500/600 with the leading specified above; Source Sans 3 carries body, labels and buttons. The demo's heavy geometric sans is not used anywhere.
- **Tabular figures.** Every year, count, fee and time still renders with `tnum`.
- **The photography rule.** Architecture and monochrome portraits only. No gavels, scales or handshakes.

### What this revision overrides

| Rule above | What is built | Why |
|---|---|---|
| "Flat ivory hero band, no atmospheric backdrop" | A split hero: an ochre panel carrying a standing portrait, bleeding into a dark photographic band that holds the headline | The split hero is the reference's single most recognisable device |
| "No gradients anywhere" | A two-stop brass gradient on the hero pill, the play button, the contact submit and the phone bar | The reference's calls to action are gradient pills |
| "Don't round buttons beyond 4px or turn them into pills" | Every button is a pill | Same |
| "Brass is never a button fill on light surfaces" | Brass fills the primary pill on ivory | Same. Text on it is white at 4.9:1, so it still clears AA |
| "Oxblood only in the footer and the featured consultation card" | Two full dark bands mid-page, for services and for the team | The alternation of light and dark bands is the reference's page rhythm |
| "One filled button per band" | The nav, the hero and the phone bar all carry a filled pill | The reference's nav and hero both do |
| "The brass rule is the depth system; shadows for two elements only" | The entry-card row and the phone bar carry a lift shadow | The reference's cards float over the hero |

### Devices taken from the reference

The nav with its stacked phone pair and the brass underline under the section in view; the three cards overlapping the hero's lower edge with the middle one inverted; the eyebrow as a label over a short brass rule running on as a hairline; the two-tone headline whose last word turns brass; the 2×2 arrow checklist; the two office numbers set at display size; the film still with a brass play button; the counter row; the bordered dark service cards with filled brass icon tiles beside a tall photograph; the ivory name cards overlapping the foot of each monochrome portrait; the dark "View more" pills on the insight cards; the three-across contact row over a full-width submit; the map; and the four-column footer closing on Links, Support and a six-tile gallery.

### Additions this file keeps that the reference has no equivalent for

The `Hairline FAQ` and the three-card consultation section, both specified above, because a firm needs them and neither contradicts the reference's look. The disclaimer blocks and the regulatory notice stay exactly as this file requires.

### Colour corrections

Measured contrast forced three token corrections, carried in `src/app/law-firm/layout.tsx` rather than silently edited into the frontmatter:

- `{colors.accent-deep}` `#8C6B3A` is 4.21:1 on `{colors.canvas-soft}`, under AA for the eyebrow. Text use is darkened to `#7F5F33`; the original stays available as `--t-accent-deep-design`.
- Form controls take their own border, `#8F8474` (3.1:1), because `{colors.hairline-input}` is 2.07:1 on ivory and cannot carry a control boundary.
- `{colors.primary}` is 1.54:1 on the oxblood, so the dark bands set `--t-focus` to `{colors.accent}` (5.66:1) through the `.law-on-dark` class.

A new `on-dark-muted` token, `#CBC0AE`, carries body copy on the oxblood bands at 8:1.

### Motion

One authored opening: the hero headline's three lines rise through masks, the two-part rule draws itself out, and the lead and pill follow. Everything below is a short rise or a clip wipe on entry. Reduced motion renders the whole page at rest. Nothing autoplays; the film still opens a dialog only when asked.
