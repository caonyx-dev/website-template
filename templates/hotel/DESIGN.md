---
version: alpha
name: Hotel-Template
description: A luxurious, quiet, spacious interface for a boutique hotel. Full-bleed photography fades slowly between ivory sections and midnight-navy bands, framed by Marcellus display capitals at a single weight and light Jost body copy. Midnight navy (#1B2A49) carries every interactive element; gold (#C9A227) appears only as thin hairline rules, small icons, and the outline of the booking button. Corners are square (0–2px), compositions are centred, eyebrows are letterspaced uppercase, and a dates-and-guests booking widget stays pinned in the header on every page.

colors:
  primary: "#1B2A49"
  primary-focus: "#2B3F6B"
  primary-on-dark: "#C9A227"
  accent: "#C9A227"
  accent-deep: "#A8861C"
  accent-soft: "#F3E9C8"
  ink: "#141A2B"
  body: "#141A2B"
  body-on-dark: "#F8F6F1"
  body-muted: "#C9CDD6"
  ink-muted-80: "#343A4A"
  ink-muted-48: "#666C7A"
  divider-soft: "#EFEBE2"
  hairline: "#E3DDD0"
  hairline-gold: "#C9A227"
  canvas: "#F8F6F1"
  canvas-parchment: "#EFEBE2"
  surface-pearl: "#FFFFFF"
  surface-tile-1: "#1B2A49"
  surface-tile-2: "#213353"
  surface-tile-3: "#16233D"
  surface-black: "#0F172B"
  surface-chip-translucent: "#D9D4C7"
  on-primary: "#FFFFFF"
  on-dark: "#F8F6F1"
  success: "#3E6B4F"
  warning: "#A8861C"
  error: "#9E3B3B"

typography:
  hero-display:
    fontFamily: "Marcellus, 'Cormorant Garamond', Georgia, serif"
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: 0.5px
  display-lg:
    fontFamily: "Marcellus, 'Cormorant Garamond', Georgia, serif"
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0.4px
  display-md:
    fontFamily: "Marcellus, 'Cormorant Garamond', Georgia, serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0.3px
  lead:
    fontFamily: "Marcellus, 'Cormorant Garamond', Georgia, serif"
    fontSize: 26px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0.2px
  lead-airy:
    fontFamily: "Jost, system-ui, -apple-system, sans-serif"
    fontSize: 22px
    fontWeight: 300
    lineHeight: 1.6
    letterSpacing: 0.1px
  tagline:
    fontFamily: "Marcellus, 'Cormorant Garamond', Georgia, serif"
    fontSize: 21px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0.3px
  eyebrow:
    fontFamily: "Jost, system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 2.4px
  body-strong:
    fontFamily: "Jost, system-ui, -apple-system, sans-serif"
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  body:
    fontFamily: "Jost, system-ui, -apple-system, sans-serif"
    fontSize: 17px
    fontWeight: 300
    lineHeight: 1.6
    letterSpacing: 0.1px
  dense-link:
    fontFamily: "Jost, system-ui, -apple-system, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 2.4
    letterSpacing: 0.2px
  caption:
    fontFamily: "Jost, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0.1px
  caption-strong:
    fontFamily: "Jost, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.1px
  rate-from:
    fontFamily: "Jost, system-ui, -apple-system, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0.3px
  button-large:
    fontFamily: "Jost, system-ui, -apple-system, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 2px
  button-utility:
    fontFamily: "Jost, system-ui, -apple-system, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 1.6px
  fine-print:
    fontFamily: "Jost, system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.1px
  micro-legal:
    fontFamily: "Jost, system-ui, -apple-system, sans-serif"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.1px
  nav-link:
    fontFamily: "Jost, system-ui, -apple-system, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 1.8px

rounded:
  none: 0px
  xs: 0px
  sm: 2px
  md: 2px
  lg: 2px
  pill: 0px
  full: 9999px

shadows:
  pinned: "0 12px 32px rgba(20, 26, 43, 0.14)"

motion:
  fade-slow: "opacity 900ms cubic-bezier(0.4, 0, 0.2, 1)"
  fade-hero: "opacity 1600ms ease-in-out"

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  section: 112px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-utility}"
    rounded: "{rounded.sm}"
    padding: 16px 28px
  button-primary-focus:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  button-primary-active:
    backgroundColor: "{colors.surface-tile-3}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  button-secondary-outline:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button-utility}"
    rounded: "{rounded.sm}"
    padding: 16px 28px
  button-dark-utility:
    backgroundColor: "{colors.surface-black}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-utility}"
    rounded: "{rounded.sm}"
    padding: 10px 18px
  button-ghost-on-dark:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.button-utility}"
    rounded: "{rounded.sm}"
    padding: 10px 18px
  button-book-direct:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-large}"
    rounded: "{rounded.sm}"
    padding: 18px 36px
  button-icon-round:
    backgroundColor: "{colors.surface-chip-translucent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 44px
  text-link:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.body}"
  text-link-on-dark:
    backgroundColor: transparent
    textColor: "{colors.primary-on-dark}"
    typography: "{typography.body}"
  global-nav:
    backgroundColor: "{colors.surface-tile-1}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    height: 72px
  booking-bar-pinned:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption-strong}"
    height: 64px
  section-ivory:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 112px
  section-linen:
    backgroundColor: "{colors.canvas-parchment}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 112px
  band-midnight:
    backgroundColor: "{colors.surface-tile-1}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 112px
  band-midnight-2:
    backgroundColor: "{colors.surface-tile-2}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
  band-midnight-3:
    backgroundColor: "{colors.surface-tile-3}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
  room-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.tagline}"
    rounded: "{rounded.none}"
    padding: 32px
  rate-from:
    backgroundColor: transparent
    textColor: "{colors.ink-muted-80}"
    typography: "{typography.rate-from}"
  offer-card:
    backgroundColor: "{colors.surface-pearl}"
    textColor: "{colors.ink}"
    typography: "{typography.tagline}"
    rounded: "{rounded.none}"
    padding: 40px
  occupancy-chip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
  occupancy-chip-selected:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
  date-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
    height: 48px
  mobile-booking-bar:
    backgroundColor: "{colors.surface-tile-1}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    height: 64px
    padding: 12px 24px
  hero-full-bleed:
    backgroundColor: "{colors.surface-tile-1}"
    textColor: "{colors.on-dark}"
    typography: "{typography.hero-display}"
    rounded: "{rounded.none}"
    padding: 112px
  dining-feature:
    backgroundColor: "{colors.canvas-parchment}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.none}"
    padding: 64px
  gallery-grid:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: 0px
  footer:
    backgroundColor: "{colors.surface-black}"
    textColor: "{colors.body-muted}"
    typography: "{typography.fine-print}"
    padding: 80px
---

## Overview

This is the design system for a boutique hotel website: a place where leisure and business guests check rooms, rates, availability, and location; browse offers, dining, and the spa; and book direct. The mood is **luxurious, quiet, and spacious**. Every page is a stack of generous, centred compositions — full-bleed photography that fades in slowly, an ivory section with a letterspaced eyebrow and a serif headline, a midnight-navy band with ivory text, thin gold rules between them. Nothing is rushed; nothing is rounded. Typography is formal and restrained; colour is ivory, a softer linen, or midnight navy; the single interactive colour is that same navy, and gold appears only in hairlines, icons, and the booking button's outline.

Density is very low — lower even than a marketing site would normally allow. Sections run at 112px vertical padding, headlines are centred over a short measure, and room cards give two-thirds of their height to photography. There is no decorative chrome beyond what signals formality: 0–2px corners, 1px gold hairlines, and a single shadow reserved for the pinned booking widget once the page scrolls. Depth comes from the change between ivory and navy, and from photography that dissolves rather than cuts.

Booking surfaces keep the same chassis but switch into a practical mode. The pinned header widget (`{component.booking-bar-pinned}`) carries check-in, check-out, and guests on every page, ending in the gold-outlined "Check availability" button. The rooms page introduces room cards with "from" rate placeholders, occupancy chips, and a compare row; offers, dining, spa, events, and location pages lean more editorial, alternating linen and midnight bands. Across all surfaces the typographic system, spacing rhythm, and the navy-plus-gold palette are consistent — one design language at different volumes.

**Key Characteristics:**
- Photography-first presentation with slow crossfades; UI recedes so the rooms and the setting can speak.
- Alternating full-bleed sections: ivory / linen ↔ midnight navy, with 1px gold hairlines marking the transitions.
- Single navy interactive colour (`{colors.primary}` — #1B2A49); gold (`{colors.accent}` — #C9A227) is ornamental — rules, icons, and the booking button outline — never a fill for copy on ivory.
- One button grammar: square-cornered (`{rounded.sm}` — 2px), uppercase, letterspaced labels. No pills anywhere.
- Marcellus + Jost — a single-weight Roman capital serif for every headline, a geometric light sans for body and UI; hierarchy comes from size and tracking, not weight.
- Centred compositions with short measures; letterspaced uppercase eyebrows above every headline.
- Section rhythm: midnight hero with fade → ivory welcome → linen rooms → midnight offers → ivory dining → linen spa → midnight footer.

## Colors

> **Surfaces covered:** homepage, rooms index, room detail, offers, dining, spa and amenities, events and meetings, location. The colour system is identical across all eight surfaces; only the surface-mode mix differs.

### Brand & Accent
- **Midnight Navy** (`{colors.primary}` — #1B2A49): The single brand-level interactive colour and the dark-band surface. All text links, all primary buttons ("Check availability", "Book direct", "Call"), selected chips, and the focus ring root. White on Midnight Navy measures roughly 14:1, so primary button labels stay comfortably accessible.
- **Focus Navy** (`{colors.primary-focus}` — #2B3F6B): A lighter sibling reserved for the keyboard focus ring (`outline: 2px solid`) and hover on text links.
- **Gold on Dark** (`{colors.primary-on-dark}` — #C9A227): On navy bands, in-copy links and inline callouts use gold rather than a lighter navy; gold on Midnight Navy measures about 5.9:1.
- **Gold** (`{colors.accent}` — #C9A227): The ornamental accent. 1px hairline rules between sections and under eyebrows, small line icons (bed, spa leaf, fork), the booking button's 1px outline, and the active nav underline. Gold as text on ivory falls to about 2.2:1, so gold copy appears only on navy surfaces.
- **Gold Deep** (`{colors.accent-deep}` — #A8861C): Pressed state of gold icons and the warning tone for booking forms.
- **Gold Soft** (`{colors.accent-soft}` — #F3E9C8): A pale wash behind offer badges ("Stay 3, pay 2") and the "Best rate guaranteed" note under the booking widget.

### Surface
- **Ivory** (`{colors.canvas}` — #F8F6F1): The dominant canvas. Welcome section, rooms index, dining, location.
- **Linen** (`{colors.canvas-parchment}` — #EFEBE2): The signature warmer off-white. Alternating light sections, the dining feature panel, the spa section. Just different enough from ivory to create rhythm.
- **Card White** (`{colors.surface-pearl}` — #FFFFFF): Pure white, used only for offer cards and the booking widget's dropdown panels so they sit a touch brighter than the linen behind them.
- **Midnight Band 1** (`{colors.surface-tile-1}` — #1B2A49): The primary dark surface: hero fallback, global nav, offers band, events band.
- **Midnight Band 2** (`{colors.surface-tile-2}` — #213353): A micro-step lighter — used where a navy band sits directly above or below Band 1 to create the faintest separation.
- **Midnight Band 3** (`{colors.surface-tile-3}` — #16233D): A micro-step darker — used at the bottom of a stack and as the pressed state of the primary button.
- **Deep Night** (`{colors.surface-black}` — #0F172B): Reserved for true depth — the footer, gallery lightbox backgrounds, and video frames.
- **Translucent Chip** (`{colors.surface-chip-translucent}` — #D9D4C7): The base hex of the translucent stone chip used over photography for round control buttons (gallery arrows). In production, applied at ~64% alpha as `rgba(217, 212, 199, 0.64)`.

### Text
- **Ink** (`{colors.ink}` — #141A2B): The voice of every headline and body paragraph on light surfaces. A navy-leaning near-black that keeps the page feeling photographic rather than printed.
- **Body** (`{colors.body}` — #141A2B): Same hex as ink — one near-black tone for all text on light surfaces. Ink on Ivory measures above 15:1, which matters because body copy runs at weight 300.
- **Body On Dark** (`{colors.body-on-dark}` — #F8F6F1): All text on navy bands and the global nav.
- **Body Muted** (`{colors.body-muted}` — #C9CDD6): Secondary copy on navy bands and the footer, where ivory would be too loud.
- **Ink Muted 80** (`{colors.ink-muted-80}` — #343A4A): "From" rate lines, room facts, caption text.
- **Ink Muted 48** (`{colors.ink-muted-48}` — #666C7A): Disabled button text, placeholder text in date inputs, legal fine-print. Still above 4.9:1 on ivory.

### Hairlines & Borders
- **Divider Soft** (`{colors.divider-soft}` — #EFEBE2): The "border" tone on secondary buttons on light surfaces — a ring rather than a hard line.
- **Hairline** (`{colors.hairline}` — #E3DDD0): The neutral 1px hairline on date inputs, table rows in the rates grid, and between footer columns.
- **Hairline Gold** (`{colors.hairline-gold}` — #C9A227): The ornamental 1px rule: a 48px centred rule under every eyebrow, the full-width rule between sections of the same tone, and the booking button outline.

### Semantic
- **Success / Warning / Error** (`{colors.success}` #3E6B4F · `{colors.warning}` #A8861C · `{colors.error}` #9E3B3B): Availability confirmation, inline date hints, and validation errors; the warning shares Gold Deep so it feels part of the palette; errors are a 1px border plus text, never a filled red field.

### Brand Gradient
**No decorative gradients.** Atmosphere comes from photography — evening light in a suite, a pool at dusk, the dining room by candle — not from CSS. The one permitted exception is a photographic scrim behind hero headlines: a vertical fade from transparent to `rgba(15, 23, 43, 0.6)` so ivory type stays legible over a bright image. No gradient tokens are defined.

## Typography

### Font Family
- **Display**: `Marcellus, 'Cormorant Garamond', Georgia, serif` — a Roman-inscription serif that ships in a single weight (400). Defines the voice of every headline, from the hero to room names. Because there is no bold, hierarchy is carried entirely by size and letter-spacing; every display role in the frontmatter is set to 400.
- **Body / UI**: `Jost, system-ui, -apple-system, sans-serif` — a geometric sans with a true light weight. Body copy runs at 300 for airiness, UI labels at 400, and emphasis at 500. Buttons, eyebrows, and nav links are uppercase and letterspaced.
- **OpenType features**: `font-variant-numeric: tabular-nums` on `{typography.rate-from}` and the rates grid so "from" rates align. No separate mono face is used.

### Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Jost:wght@300;400;500&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: Marcellus, 'Cormorant Garamond', Georgia, serif;
  --font-body: Jost, system-ui, -apple-system, sans-serif;
}
```

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.hero-display}` | 56px | 400 | 1.10 | 0.5px | Hero headline over full-bleed photography |
| `{typography.display-lg}` | 40px | 400 | 1.15 | 0.4px | Section headlines atop every section and band |
| `{typography.display-md}` | 32px | 400 | 1.25 | 0.3px | Room names on detail pages, dining and spa titles |
| `{typography.lead}` | 26px | 400 | 1.30 | 0.2px | Section subcopy in the serif; the welcome line |
| `{typography.lead-airy}` | 22px | 300 | 1.6 | 0.1px | Editorial intro paragraphs (the light weight, kept) |
| `{typography.tagline}` | 21px | 400 | 1.25 | 0.3px | Room-card name; offer-card title |
| `{typography.eyebrow}` | 12px | 500 | 1.0 | 2.4px | Uppercase eyebrow above every headline ("ROOMS & SUITES") |
| `{typography.body-strong}` | 17px | 500 | 1.3 | 0 | Inline emphasis, room facts labels |
| `{typography.body}` | 17px | 300 | 1.6 | 0.1px | Default paragraph, room descriptions |
| `{typography.dense-link}` | 15px | 400 | 2.4 | 0.2px | Footer link lists (relaxed leading) |
| `{typography.caption}` | 14px | 400 | 1.45 | 0.1px | Secondary captions, chip text |
| `{typography.caption-strong}` | 14px | 500 | 1.3 | 0.1px | Booking widget labels |
| `{typography.rate-from}` | 15px | 400 | 1.2 | 0.3px | "From — per night" rate line (tabular) |
| `{typography.button-large}` | 15px | 500 | 1.0 | 2px | Uppercase "BOOK DIRECT" / "CHECK AVAILABILITY" |
| `{typography.button-utility}` | 13px | 500 | 1.0 | 1.6px | Uppercase utility and nav buttons |
| `{typography.fine-print}` | 12px | 400 | 1.4 | 0.1px | Fine-print, footer body, policy notes |
| `{typography.micro-legal}` | 10px | 400 | 1.4 | 0.1px | Micro legal disclaimers |
| `{typography.nav-link}` | 13px | 400 | 1.0 | 1.8px | Uppercase global nav items |

### Principles

- **One display weight.** Marcellus ships at 400 only, so every display role that the source system set at 600 has been adjusted to 400. Hierarchy is built from size (56 → 40 → 32 → 26 → 21) and positive tracking (0.5 → 0.2px). Never synthesise bold on the serif.
- **Positive letter-spacing at display sizes.** Unlike tight modern headlines, these capitals breathe: +0.2 to +0.5px on the serif, and +1.6 to +2.4px on uppercase sans eyebrows, buttons, and nav. Tracking is the formality cue.
- **Body copy at 17px / 300.** Jost's true light weight at 1.6 leading gives room descriptions a slow, unhurried pace. The large x-height keeps 300 legible against ivory; never use 300 below 15px or on photography.
- **Weight 300 is the body voice, 500 is emphasis.** The ladder is 300 / 400 / 500. The source system's rare 300 on large buttons was raised to 500 here, because uppercase letterspaced labels need weight to hold their shape.
- **Uppercase is structural.** Eyebrows, buttons, and nav links are uppercase with tracking; headlines and body are sentence case. Never uppercase the serif above 21px — Marcellus is already built from capitals.
- **Line-height is context-specific.** Display sizes use 1.1–1.3. Body uses 1.6. Footer link stacks use a relaxed 2.4 (`{typography.dense-link}`).

## Layout

### Spacing System
- **Base unit:** 8px. Sub-base values (2, 4) are used for tracking and hairline offsets; structural layout snaps to 8/16/24/40/64.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 40px · `{spacing.xxl}` 64px · `{spacing.section}` 112px.
- **Section vertical padding:** `{spacing.section}` (112px) inside every section and band; sections stack edge-to-edge with 0 gap and a 1px gold hairline when two sections of the same tone meet.
- **Card padding:** `{spacing.xl}` (40px) inside offer cards, 32px inside room cards.
- **Button padding:** 16–18px vertical, 28–36px horizontal — taller and wider than a typical web button; the generosity is part of the formality.
- **Eyebrow stack:** eyebrow → 12px → 48px gold rule → 20px → headline → 16px → lead. This stack repeats on every section.

### Grid & Container
- **Max content width:** ~720px on text (welcome, dining story, policies), ~1200px on room and offer grids, full-bleed for photography and bands.
- **Column patterns:** 2-column room grid (large photographs) on rooms index; 3-column offer grid; 2-column alternating image / text for dining, spa, and events; single-column centred stack for the welcome and location sections.
- **Gutters:** 40px between room cards; 32px between offer cards.
- **Centred by default:** headlines, eyebrows, and leads are centred; only long-form body and the rates grid are left-aligned.

### Whitespace Philosophy
Whitespace is the hotel's quiet. Every section begins with at least 112px of air; headlines sit over a measure no wider than 720px; room photographs are never closer than 40px to text. The footer is the only area that breaks this — there it goes deliberately dense so the full set of pages, policies, and contact details is visible at a glance.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Sections, bands, room cards, offer cards, footer |
| Neutral hairline | 1px `{colors.hairline}` border | Date inputs, rates grid rows, footer columns |
| Gold hairline | 1px `{colors.hairline-gold}` rule | Section transitions, eyebrow rule, booking button outline |
| Backdrop blur | `backdrop-filter: blur(20px)` on Ivory 88% | Booking bar once it detaches and pins |
| Pinned shadow | `{shadows.pinned}` 0 12px 32px rgba(20,26,43,0.14) | The pinned booking widget only, after scroll |

**Shadow philosophy.** The system uses **exactly one** shadow, and it is applied to the booking widget only when it has detached from the header and floats over content — a functional cue that the widget is pinned. Cards never carry shadows; a room card is a photograph and text on the section's own colour, separated from its neighbour by air and, if needed, a gold rule. Elevation otherwise comes from (a) surface-colour change (ivory ↔ navy) and (b) the slow photographic fades.

### Decorative Depth
- **Slow fades** (`{motion.fade-hero}`, 1600ms) between hero photographs and (`{motion.fade-slow}`, 900ms) on gallery images entering the viewport; the dissolve is the system's only motion signature.
- **Edge-to-edge section alternation** creates rhythm; where tones match, a full-width 1px gold rule does the job instead.
- **Centred gold rules** under eyebrows (48px wide) are the one ornamental flourish and appear on every section.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Sections, bands, photographs, room cards, offer cards |
| `{rounded.xs}` | 0px | Badges and table cells — square, like everything else |
| `{rounded.sm}` | 2px | Buttons, date inputs, occupancy chips — the only softening in the system |
| `{rounded.md}` | 2px | Kept equal to `sm` so legacy references resolve; do not introduce a larger value |
| `{rounded.lg}` | 2px | Booking widget dropdown panels |
| `{rounded.pill}` | 0px | Deliberately zero — there are no pills; chips and buttons are rectangles |
| `{rounded.full}` | 9999px / 50% | Round control chips over photography only (gallery arrows) |

### Photography Geometry
- **Hero imagery**: full-bleed, 21:9 on desktop and 4:5 on mobile; two to four images crossfade at `{motion.fade-hero}` with no slide, no zoom.
- **Room photographs**: 4:3 crops at `{rounded.none}`, edge-to-edge within the card; the name, facts, and rate sit below on the section colour, not on a white panel.
- **Gallery**: a 3-column masonry of 4:3 and 3:4 crops with 8px gutters; opens into a lightbox on `{colors.surface-black}` with round navy arrows.
- **Dining and spa features**: 2-column alternating image / text, image at 3:4 so it is taller than the copy beside it.
- **No rounded imagery anywhere**; the only curves are the 44px round gallery controls.

## Components

### Top Navigation

**`global-nav`** — Persistent navy nav bar pinned to the top of every page. Background `{colors.surface-tile-1}`, height 72px, 1px `{colors.hairline-gold}` bottom rule, text `{colors.on-dark}` in `{typography.nav-link}` (13px / 400 / 1.8px tracking, uppercase). Left: Rooms · Offers · Dining · Spa · Events. Centre: the hotel wordmark in Marcellus 400 at 22px. Right: Location · Contact, a phone number, and `{component.button-ghost-on-dark}` ("Book direct") outlined in gold. On mobile, collapses to a hamburger at ≤ 833px and the wordmark stays centred.

**`booking-bar-pinned`** — The booking widget, pinned beneath the global nav on every page. Background `{colors.canvas}`, height 64px, 1px `{colors.hairline}` bottom border. Four cells separated by neutral hairlines: Check-in (`{component.date-input}`), Check-out, Guests (`{component.occupancy-chip}` dropdown), and a promo-code field, ending in `{component.button-primary}` ("Check availability") with its 1px gold outline. Labels sit above values in `{typography.caption-strong}`. On scroll past the hero the bar detaches, gains `{shadows.pinned}`, and sits at 88% opacity with backdrop blur. At ≤ 833px it collapses to a single "Dates · Guests" summary row that opens a full-screen sheet.

### Buttons

**`button-primary`** — The signature action. Background `{colors.primary}` (Midnight Navy #1B2A49), text `{colors.on-primary}` in `{typography.button-utility}` (Jost 13px / 500 / 1.6px tracking, uppercase), 1px solid `{colors.hairline-gold}` outline, rounded `{rounded.sm}` (2px), padding 16px × 28px. White on navy measures ~14:1. The gold outline is what distinguishes a booking action from any other navy element.
- Active state: `{component.button-primary-active}` — background shifts to `{colors.surface-tile-3}`; no scale transform, the system's press feedback is colour only.
- Focus state: `{component.button-primary-focus}` — 2px solid `{colors.primary-focus}` outline with 3px offset, outside the gold rule.

**`button-secondary-outline`** — Used as the second CTA when two appear together ("View room" / "Check availability"). Background transparent, text `{colors.primary}`, 1px solid `{colors.primary}` border, rounded `{rounded.sm}`, padding 16px × 28px. Reads as a quiet frame.

**`button-dark-utility`** — Footer and lightbox utilities (language, currency, close). Background `{colors.surface-black}`, text `{colors.on-dark}` in `{typography.button-utility}`, rounded `{rounded.sm}`, padding 10px × 18px.

**`button-ghost-on-dark`** — The nav's "Book direct" and the secondary CTA on navy bands. Background transparent, text `{colors.on-dark}` in `{typography.button-utility}`, 1px solid `{colors.hairline-gold}` border, rounded `{rounded.sm}`, padding 10px × 18px. Active state fills with `{colors.surface-tile-2}`.

**`button-book-direct`** — The larger primary CTA on the hero, room detail, and offers. Same navy fill and gold outline as `{component.button-primary}`, but with `{typography.button-large}` (15px / 500 / 2px tracking, uppercase) and more padding (18px × 36px). Full-width on mobile. Used sparingly — once per page.

**`button-icon-round`** — Floats over photography. 44 × 44px, background `{colors.surface-chip-translucent}` at ~64% alpha, icon `{colors.ink}`, rounded `{rounded.full}`. Used for gallery arrows and the hero's pause control. The only round element in the system.

### Sections & Bands

**`section-ivory`** — Full-bleed ivory section. Background `{colors.canvas}`, text `{colors.ink}`, rounded `{rounded.none}`, vertical padding `{spacing.section}` (112px). Content stack: `{typography.eyebrow}` (uppercase, gold rule beneath), headline in `{typography.display-lg}` (40px / 400) centred, lead in `{typography.lead}`, then a grid or a 720px column of body. Used for the welcome, dining, and location sections.

**`section-linen`** — Identical structure on `{colors.canvas-parchment}` (#EFEBE2). Used for rooms and suites, the spa, and the "Getting here" transport block — the alternating light band.

**`band-midnight`** — Full-bleed navy band. Background `{colors.surface-tile-1}` (#1B2A49), text `{colors.on-dark}`, rounded `{rounded.none}`, vertical padding `{spacing.section}` (112px). Eyebrow in `{colors.primary-on-dark}` (gold), headline in ivory, `{component.text-link-on-dark}` for inline copy, `{component.button-ghost-on-dark}` for actions. Used for offers, events and meetings, and the "Book direct" promise.

**`band-midnight-2`** — Variant on `{colors.surface-tile-2}` (#213353). Used where a navy band sits directly above or below `{component.band-midnight}` to create the faintest separation through micro-step lightness change.

**`band-midnight-3`** — Variant on `{colors.surface-tile-3}` (#16233D). Used at the bottom of a stack, behind the newsletter block, and as the pressed-state fill of the primary button.

**`hero-full-bleed`** — The homepage and section-landing hero. Full-viewport photography with `{colors.surface-tile-1}` as fallback and a scrim; two to four images crossfade at `{motion.fade-hero}`. Centred stack: eyebrow in gold, headline in `{typography.hero-display}` (56px / 400) in ivory, one lead line in `{typography.lead-airy}` `{colors.body-muted}`, and a single `{component.button-book-direct}`. Padding `{spacing.section}` (112px). The booking bar sits directly beneath.

### Rooms, Rates & Offers

**`room-card`** — The core unit of the rooms index. Background `{colors.canvas}` (or linen, matching its section), no border, no shadow, rounded `{rounded.none}`, padding 32px below the photo. Top: 4:3 room photograph edge-to-edge. Below: room name in `{typography.tagline}` (21px / 400), a facts line in `{typography.caption}` `{colors.ink-muted-80}` (size, bed, view, occupancy — placeholders), `{component.rate-from}`, a 48px gold rule, and two actions: `{component.text-link}` ("View room") and `{component.button-secondary-outline}` ("Check availability"). Hover fades the photograph to 92% opacity at `{motion.fade-slow}`; nothing lifts.

**`rate-from`** — The "from" line beneath every room and offer. Text `{colors.ink-muted-80}` in `{typography.rate-from}` (15px / 400 / tabular), formatted "From — per night" with the figure as a placeholder until the booking engine supplies live rates. Never bold, never gold, never a filled badge: rates are stated, not shouted. On navy bands the line uses `{colors.body-muted}`.

**`offer-card`** — Packages and seasonal offers. Background `{colors.surface-pearl}` on linen, or `{colors.surface-tile-2}` on a navy band, rounded `{rounded.none}`, padding `{spacing.xl}` (40px), 1px `{colors.hairline-gold}` top rule. Content: eyebrow ("LIMITED"), title in `{typography.tagline}`, three-line description in `{typography.body}`, `{component.rate-from}`, and `{component.button-secondary-outline}`. A `{colors.accent-soft}` badge at `{rounded.xs}` may carry the offer's hook; conditions sit in `{typography.fine-print}`.

**`occupancy-chip`** — Rectangular tappable cell in the guests dropdown and the room filter row. Background `{colors.canvas}`, text `{colors.ink}` in `{typography.caption}`, 1px solid `{colors.hairline}` border, rounded `{rounded.sm}`, padding 12px × 16px. Contains a label and a stepper or count ("2 adults").

**`occupancy-chip-selected`** — Selected state. Border upgrades to 1px solid `{colors.primary}`, text `{colors.primary}`. Same shape, same content.

**`mobile-booking-bar`** — Floats at the bottom of the viewport at ≤ 833px on room detail and offers. Background `{colors.surface-tile-1}`, 1px `{colors.hairline-gold}` top rule, height 64px, padding 12px × 24px. Left: `{component.rate-from}` in `{colors.body-muted}`. Right: `{component.button-ghost-on-dark}` ("Check availability") and a phone icon button.

### Dining, Spa & Gallery

**`dining-feature`** — Two-column feature for the restaurant, bar, and breakfast. Background `{colors.canvas-parchment}`, padding `{spacing.xxl}` (64px), rounded `{rounded.none}`. Left: 3:4 photograph. Right: eyebrow, title in `{typography.display-md}` (32px / 400), body in `{typography.body}`, an hours line in `{typography.caption-strong}` (placeholder), and `{component.text-link}` ("View menus"). Alternate image side on each successive feature. The same structure serves the spa and amenities section with a bulleted amenity list in place of hours.

**`gallery-grid`** — Three-column masonry on `{colors.canvas}` with 8px gutters and no padding. Images fade in at `{motion.fade-slow}` on entry; a lightbox opens on `{colors.surface-black}` with `{component.button-icon-round}` arrows and a caption in `{typography.caption}` `{colors.body-muted}`.

### Inputs & Forms

**`date-input`** — Background `{colors.canvas}`, text `{colors.ink}` in `{typography.body}` (17px / 300), 1px solid `{colors.hairline}` border, rounded `{rounded.sm}` (2px), padding 12px × 16px, height 48px. Label above in `{typography.caption-strong}`; leading calendar glyph at 16px in `{colors.accent}`. Focus: border becomes 1px `{colors.primary}` with a 2px `{colors.primary-focus}` outline. The enquiry form for events and the newsletter field reuse this spec.

Validation: error state uses a 1px `{colors.error}` border and a 12px `{colors.error}` message below in `{typography.fine-print}`; success uses `{colors.success}` text only. Never fill a field with red, and never shake.

### Footer

**`footer`** — Background `{colors.surface-black}` (#0F172B), text `{colors.body-muted}`, 1px `{colors.hairline-gold}` top rule. Link columns in `{typography.dense-link}` (15px / 400 / 2.4 line-height): Stay, Dine, Relax, Events, Explore, Policies. Column headings in `{typography.eyebrow}` in `{colors.primary-on-dark}` (gold on navy). Address, phone, and email sit in the first column. Legal row at the very bottom in `{typography.fine-print}` with `{colors.ink-muted-48}` lightened to `{colors.body-muted}` for contrast: check-in / check-out placeholder, cancellation policy placeholder, accessibility statement, privacy, cookies. Vertical padding 80px.

## Do's and Don'ts

### Do
- Use `{colors.primary}` (Midnight Navy #1B2A49) for every interactive element — links, buttons, selected chips, focus signals — and nothing else.
- Reserve `{colors.accent}` (Gold #C9A227) for 1px rules, small icons, the booking button outline, and text on navy only; on ivory it is never copy.
- Set headlines in `{typography.hero-display}` or `{typography.display-lg}` at Marcellus 400 with positive tracking; build hierarchy with size, never weight.
- Run body copy at `{typography.body}` (17px / 300 / 1.6) and raise to 400 only when text sits on photography.
- Alternate `{component.section-ivory}` / `{component.section-linen}` with `{component.band-midnight}` for full-bleed section rhythm; add a gold rule where tones repeat.
- Keep every corner at `{rounded.none}` or `{rounded.sm}`; the only curve is the 44px round gallery control.
- Keep the booking widget pinned and reachable on every page, and place "Check availability" as the last cell.
- Use slow fades (`{motion.fade-hero}`, `{motion.fade-slow}`) as the only motion; never slide, zoom, or parallax.
- Precede every headline with a letterspaced uppercase eyebrow and a 48px gold rule.

### Don't
- Don't introduce a third brand colour or a bright "sale" tone; offers are stated in the same navy and gold as everything else.
- Don't use gold as body or heading text on ivory or linen — it falls below 3:1. Gold text lives on navy only.
- Don't put a shadow under room cards, offer cards, or photography; `{shadows.pinned}` belongs to the pinned booking widget alone.
- Don't round anything beyond 2px; pills, 8px cards, and rounded photographs belong to a different, more casual system.
- Don't synthesise bold on Marcellus or use it below 21px — set small headings in Jost 500 uppercase instead.
- Don't use `{colors.primary-on-dark}` (gold) on light surfaces — it is the navy-band-only variant.
- Don't fabricate rates, star ratings, or guest reviews; every rate is a "from —" placeholder until the booking engine is connected, and review modules stay empty until real, attributed feedback exists.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤ 419px | Single-column cards; booking bar becomes a "Dates · Guests" summary row; hero typography drops to 32px |
| Phone | 420–640px | Single-column stack; dining features stack image-over-text; hero h1 drops to 36px |
| Large phone | 641–735px | Sections move to tighter padding (64px vertical vs 112px); offer grid is 1-column |
| Tablet portrait | 736–833px | Global nav collapses to hamburger; room grid is 1-column with full-width photos; mobile booking bar appears |
| Tablet landscape | 834–1023px | Global nav returns fully expanded; room grid 2-column; booking bar shows all four cells |
| Small desktop | 1024–1068px | Offer grid 3-column; hero h1 stays at 40px |
| Desktop | 1069–1200px | Full layout; 1200px content max for grids, 720px for text |
| Wide desktop | ≥ 1201px | Content locks at 1200px, margins absorb extra width; photography stays full-bleed |

The structural breakpoints that matter for agents: 1200px (content lock), 1068px (small-desktop), 833px (tablet landscape switch), 734px (tablet portrait), 640px (phone), 480px (small phone).

### Touch Targets
- Minimum 44 × 44px. `{component.button-primary}` lands at ~46 × 180px because of its tall padding.
- `{component.button-icon-round}` is exactly 44 × 44px.
- `{component.date-input}` cells are 48px tall and span the full width of their column on touch devices.

### Collapsing Strategy
- **Global nav**: full uppercase link row on desktop → wordmark + hamburger + phone icon at 833px and below. "Book direct" moves into the tray.
- **Booking bar**: four cells + button → single summary row that opens a full-screen sheet with the same four fields stacked.
- **Room grid**: 2-col → 1-col (833px) with photographs at full width and the rate line directly under the name.
- **Dining / spa features**: image-beside-text → image-over-text at 640px, keeping the 3:4 image ratio.
- **Hero typography**: `{typography.hero-display}` (56px) → `{typography.display-lg}` (40px) at 1068px → 36px at 640px → 32px at 419px; tracking stays positive.

### Image Behavior
- All photography uses responsive `srcset` with breakpoint-matched crops.
- Hero photography switches art direction at mobile (4:5 crop) so the subject is not hidden by the headline.
- Room photographs keep a 4:3 ratio across breakpoints; only scale changes.
- Fades respect `prefers-reduced-motion`: crossfades become instant cuts, and the hero holds its first frame.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.room-card}`, `{component.booking-bar-pinned}`).
2. Variants of an existing component (`-active`, `-focus`, `-selected`, `-2`, `-3`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover beyond the photograph fade on cards. Default and Active/Pressed states only for buttons.
5. Display headlines stay Marcellus 400 with positive tracking. Body stays Jost 300 at 17px. The boundary is unbreakable.
6. The single shadow (`{shadows.pinned}`) is reserved for the pinned booking widget only.
7. When in doubt about emphasis: alternate surface (ivory → navy band) or add a gold rule before adding chrome.

## Known Gaps

- Booking engine integration is undecided; `{component.booking-bar-pinned}` and `{component.date-input}` document the structure, not the availability or rate contract. Date-picker calendar styling will need tokens once the engine is chosen.
- Rates grid (room × date × rate plan) on the room detail page is specified as neutral hairline rows only; promotional and member-rate rows have no treatment yet.
- Events and meetings enquiry form reuses `{component.date-input}` but capacity charts and floor plans for function rooms are placeholders.
- Hero and room photography are content assets, not design tokens; `{component.hero-full-bleed}` describes the structural surface and fade only.
- The exact backdrop-filter blur radius on the pinned `{component.booking-bar-pinned}` is platform-dependent; `saturate(160%) blur(20px)` is the baseline but the value is not formalised as a token.
- Policy wording (check-in / check-out times, cancellation, accessibility of rooms) in the footer and room detail is a placeholder pending the hotel's own terms.

### Revision 2026-10-08: reference-led direction, Almaris (designesia.com/themes/almaris) with the Carmelina welcome section (demo.7iquid.com/carmelina)

Built at the owner's request after the Almaris "Main" demo, keeping this file's tokens (midnight navy, gold hairlines, ivory and parchment, Marcellus and Jost, square buttons) and taking the demo's composition, with one section borrowed from Carmelina:

- **Composition from Almaris.** Transparent navy nav over a two-slide crossfading hero whose copy sits inside a tall arch-topped frosted panel; a dark reservation bar (dates, adults and children steppers, "Check availability") directly beneath, scrolling away with the page at the owner's request rather than pinning as `booking-bar-pinned` describes; a welcome block; six facility cards with icon tiles; a testimonial inside an arched panel over a full-bleed photograph; an "Accommodation" carousel of arch-topped room photographs with name, occupancy and size, the "From —" rate revealed over the photograph on hover or keyboard focus (and always shown on touch); two facility photographs with navy figure boxes overlapping their lower edge; a full-bleed photograph with a play button; an Instagram strip of eight squares; a three-column navy footer.
- **The welcome section from Carmelina.** A tall section pins the centred eyebrow, the uppercase Marcellus statement, the paragraph and the button in the viewport; the statement's words brighten from faint to full as the page scrolls, then two offset columns of photographs scroll up over the pinned text and carry the page on. This is the one scroll-driven movement on the site; the "fades only" rule above still governs everything else.
- **Shapes.** The arch (a full-radius top on photographs, panels and icon tiles) is adopted from Almaris as the hotel's signature frame, an exception to the square-corner rule; buttons, cards and inputs stay at 2px.
- **Colours and type.** Unchanged: navy carries every button and link, gold stays in rules, icons, stars and the booking outline; Almaris's bronze is not used. Marcellus 400 for every headline (hero 56–64px, section titles 52px), Jost 300 body.
- **Motion.** Hero slides crossfade at `{motion.fade-hero}` with the arch panel fading up; the welcome words scrub with scroll and its photographs scroll over; everything else fades in at `{motion.fade-slow}`. Reduced motion shows every word at full strength and skips the fades; the photographs still scroll in the normal flow.
