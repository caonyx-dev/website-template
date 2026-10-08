---
version: alpha
name: Gym-Template
description: |
  A high-energy, dark-first system for a gym or fitness studio. The whole site sits in one continuous near-black mode — a four-step surface ladder from canvas (#0B0F0A) through raised panels (#151A14) — with hairline borders, 6px radii, and oversized uppercase Oswald headlines that read like gym-wall signage. Volt green (#A3E635) is the single action colour: every "Start free trial", "Join" and "Book a class" button is a volt block with dark text. Hot red (#FF4D4D) is reserved for urgency — sale banners, "last spots" tags and the diagonal slash band across the hero. Work Sans carries body copy, schedule tables and membership checklists at a calm 1.6 line-height so the loud display type has something quiet to land on. Large numerals (members, classes per week, square metres) are the decorative system; photography is dark, high-contrast, in-motion.

colors:
  primary: "#A3E635"
  primary-pressed: "#8FD11F"
  on-primary: "#0B0F0A"
  ink: "#F4F7F0"
  body: "#C9CFC3"
  charcoal: "#D7DCD1"
  mute: "#9AA396"
  ash: "#6B7366"
  stone: "#444B41"
  on-dark: "#F4F7F0"
  on-dark-mute: "rgba(244,247,240,0.72)"
  canvas: "#0B0F0A"
  surface: "#10140F"
  surface-elevated: "#151A14"
  surface-card: "#1B211A"
  button-fg: "#20271F"
  hairline: "#262D25"
  hairline-soft: "rgba(244,247,240,0.08)"
  hairline-strong: "rgba(244,247,240,0.16)"
  accent: "#FF4D4D"
  accent-pressed: "#E63E3E"
  accent-soft: "rgba(255,77,77,0.15)"
  primary-soft: "rgba(163,230,53,0.15)"
  accent-blue: "#57C1FF"
  accent-blue-soft: "rgba(87,193,255,0.15)"
  accent-green: "#59D499"
  accent-green-soft: "rgba(89,212,153,0.15)"
  accent-yellow: "#FFC533"
  accent-yellow-soft: "rgba(255,197,51,0.15)"
  hero-slash-start: "#FF4D4D"
  hero-slash-end: "#B8121E"
  stat-bg-start: "#1B211A"
  stat-bg-end: "#10140F"

typography:
  display-xl:
    fontFamily: "Oswald, 'Arial Narrow', Impact, sans-serif"
    fontSize: 72px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0.01em
    textTransform: uppercase
  display-lg:
    fontFamily: "Oswald, 'Arial Narrow', Impact, sans-serif"
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: 0.01em
    textTransform: uppercase
  heading-xl:
    fontFamily: "Oswald, 'Arial Narrow', Impact, sans-serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.01em
    textTransform: uppercase
  heading-lg:
    fontFamily: "Oswald, 'Arial Narrow', Impact, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: 0.01em
    textTransform: uppercase
  heading-md:
    fontFamily: "Oswald, 'Arial Narrow', Impact, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.01em
    textTransform: uppercase
  heading-sm:
    fontFamily: "Oswald, 'Arial Narrow', Impact, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.01em
    textTransform: uppercase
  stat-numeral:
    fontFamily: "Oswald, 'Arial Narrow', Impact, sans-serif"
    fontSize: 96px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: 0
  body-lg:
    fontFamily: "'Work Sans', system-ui, -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-md:
    fontFamily: "'Work Sans', system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-strong:
    fontFamily: "'Work Sans', system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  body-sm:
    fontFamily: "'Work Sans', system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm-strong:
    fontFamily: "'Work Sans', system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: 0
  caption-md:
    fontFamily: "'Work Sans', system-ui, -apple-system, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.1px
  caption-sm:
    fontFamily: "'Work Sans', system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.6px
    textTransform: uppercase
  link-md:
    fontFamily: "'Work Sans', system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  button-md:
    fontFamily: "'Work Sans', system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: 0.4px
    textTransform: uppercase

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 6px
  xl: 8px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 10px 20px
    height: 44px
  button-primary-pressed:
    backgroundColor: "{colors.primary-pressed}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 10px 20px
    height: 44px
  button-tertiary:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 10px 20px
    height: 44px
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 10px 20px
    height: 44px
  button-disabled:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.ash}"
    rounded: "{rounded.md}"
  book-class-button:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 6px 14px
  text-input:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 10px 12px
    height: 44px
  text-input-focused:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.md}"
  schedule-filter-bar:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 10px 16px
    height: 44px
  schedule-row:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 10px 12px
  schedule-row-active:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
  pill-tab:
    backgroundColor: "transparent"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  pill-tab-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
  badge-tier:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-dark-mute}"
    typography: "{typography.caption-sm}"
    rounded: "{rounded.xs}"
    padding: 2px 6px
  badge-urgent:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent}"
    typography: "{typography.caption-sm}"
    rounded: "{rounded.xs}"
    padding: 2px 8px
  badge-new:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.caption-sm}"
    rounded: "{rounded.xs}"
    padding: 2px 8px
  intensity-chip:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.body}"
    typography: "{typography.caption-md}"
    rounded: "{rounded.xs}"
    padding: 1px 6px
    height: 20px
  schedule-table-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 0px
  feature-card-dark:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  feature-card-elevated:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  trainer-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 16px
  class-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 16px
  membership-tier-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  membership-tier-card-featured:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  stat-block:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.stat-numeral}"
    rounded: "{rounded.md}"
    padding: 24px
  hero-slash-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: 96px 48px
  sticky-trial-cta:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    height: 56px
  facility-icon-tile:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.md}"
    size: 48px
  facility-icon-tile-large:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.md}"
    size: 64px
  primary-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.none}"
    height: 64px
  footer-section:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 64px 48px
  link-inline:
    textColor: "{colors.primary}"
    typography: "{typography.link-md}"
---

## Overview

This is the design system for a gym or fitness studio website — a site whose job is to turn a mobile visitor comparing local gyms into a free-trial booking, and to let current members check tonight's class schedule in under ten seconds. It is loud on purpose. The whole site sits in one continuous near-black mode: canvas (`{colors.canvas}` — `#0B0F0A`), hairline 1px borders (`{colors.hairline}` — `#262D25`), tight 6px corners on every card, and uppercase Oswald headlines that read like painted signage on a gym wall. A single volt-green block (`{colors.primary}` — `#A3E635`) carries every primary action, and a hot red (`{colors.accent}` — `#FF4D4D`) is held back for urgency: "Last 3 spots", "Founders' rate ends Friday", the diagonal slash band behind the hero headline.

The system has effectively one surface mode — dark — with a four-step surface ladder (`{colors.canvas}` → `{colors.surface}` → `{colors.surface-elevated}` → `{colors.surface-card}`) carrying feature cards, membership tiers, schedule rows and intensity chips. The signature decorative moment is a **red diagonal slash band** across the top of the home hero, used like hazard tape across a warehouse door (the only time saturated red appears on chrome). Beyond that, colour in the chrome is scarce: volt for action, red for urgency, and a small set of muted category tints (`{colors.accent-blue}` for recovery/mobility, `{colors.accent-yellow}` for strength, `{colors.accent-green}` for cardio) that live inside class-type chips and facility icons only.

The design philosophy is "the website is the gym floor." Section rhythm is generous (`{spacing.section}` 96px) but the page never breaks tonal continuity — dark, high-contrast photography of people mid-lift and mid-sprint runs full-bleed, large Oswald numerals announce stats, and the schedule table is the most-visited surface on the site, so it is designed as a first-class component rather than an embed.

**Key Characteristics:**
- Single dark surface mode with a 4-step surface ladder: `{colors.canvas}` (#0B0F0A) → `{colors.surface}` (#10140F) → `{colors.surface-elevated}` (#151A14) → `{colors.surface-card}` (#1B211A)
- Volt-green block (`{colors.primary}` — #A3E635) with dark text (`{colors.on-primary}` — #0B0F0A) is the universal primary action; everything else is monochrome dark
- Oswald uppercase display with +0.01em tracking for every headline; Work Sans for everything that has to be read at length
- Hairline 1px borders (`{colors.hairline}` — #262D25) carry every card edge; there are no drop shadows in the system
- Flat 6px radius across cards, buttons, inputs and chips (`{rounded.md}` / `{rounded.lg}`); only pill-tabs and avatars go fully round
- Hot red (`{colors.accent}`) is urgency only — sale badges, countdown tags, the hero slash band — never a second button colour on calm pages
- Large numerals (`{typography.stat-numeral}` at 96px) for member counts, weekly classes, floor area and opening hours are the primary decorative device

## Colors

> **Pages this palette must cover:** home, memberships (pricing), classes & schedule, trainers, facilities, location & hours, FAQ, free-trial booking. The chrome palette is identical across every page — the dark surface ladder, hairline borders, volt CTA and uppercase display type are the same everywhere; only the slash band is page-specific (home hero only).

### Brand & Accent
- **Volt** (`{colors.primary}` — `#A3E635`): the universal primary CTA block. "Start free trial" / "Join now" / "Book this class" — every primary action carries it. Always paired with dark text (`{colors.on-primary}`) — volt on near-black is high-contrast, but white text on volt is not; never set light text on a volt button.
- **Volt Pressed** (`{colors.primary-pressed}` — `#8FD11F`): pressed-state for the primary block — one notch deeper.
- **On Primary** (`{colors.on-primary}` — `#0B0F0A`): near-black text on the volt CTA (contrast ≈ 14:1). This is the only place canvas-black appears as text in the system.
- **Volt Soft** (`{colors.primary-soft}` — `rgba(163,230,53,0.15)`): translucent volt wash for "New class" badges and the active day in the schedule filter.
- **Hot Red** (`{colors.accent}` — `#FF4D4D`): urgency and sale. "Last 3 spots" tags, limited-time offer banners, the hero slash band. As a solid button (`{component.button-accent}`) it is reserved for genuinely time-limited offers — never the default CTA.
- **Hot Red Pressed** (`{colors.accent-pressed}` — `#E63E3E`) and **Red Soft** (`{colors.accent-soft}` — `rgba(255,77,77,0.15)`): pressed state and translucent wash for `{component.badge-urgent}`.

### Surface
- **Canvas** (`{colors.canvas}` — `#0B0F0A`): the near-black page background with a faint green cast so volt feels native to it. The dominant surface on every page.
- **Surface** (`{colors.surface}` — `#10140F`): card and panel background — one notch lighter than canvas.
- **Surface Elevated** (`{colors.surface-elevated}` — `#151A14`): the raised surface — button-tertiary fill, text-input fill, schedule filter bar, featured membership tier.
- **Surface Card** (`{colors.surface-card}` — `#1B211A`): facility icon tiles, intensity chips, active schedule row, stat block background.
- **Button FG (in-card)** (`{colors.button-fg}` — `#20271F`): rare deeper-card variant used inside the featured membership tier for the checklist well.
- **Hairline** (`{colors.hairline}` — `#262D25`): the universal 1px card border. Carries every card edge and every schedule table rule.
- **Hairline Soft** (`{colors.hairline-soft}` — `rgba(244,247,240,0.08)`): fainter border on translucent overlays laid over photography.
- **Hairline Strong** (`{colors.hairline-strong}` — `rgba(244,247,240,0.16)`): stronger divider where a regular hairline reads as too soft — table header rule, focused inputs.

### Text
- **Ink** (`{colors.ink}` — `#F4F7F0`): headlines and stat numerals on dark canvas. Slightly green-tinted off-white for coherence with the canvas.
- **Body** (`{colors.body}` — `#C9CFC3`): default paragraph text, class descriptions, FAQ answers (contrast ≈ 12:1 on canvas).
- **Charcoal** (`{colors.charcoal}` — `#D7DCD1`): subtly brighter body for schedule cells and tier checklists.
- **Mute** (`{colors.mute}` — `#9AA396`): metadata, opening hours in the footer, trainer specialities, captions (contrast ≈ 6.5:1 on canvas).
- **Ash** (`{colors.ash}` — `#6B7366`): disabled text, past-dated schedule rows.
- **Stone** (`{colors.stone}` — `#444B41`): least-emphasis caption text and disabled icon colour. Never for running text.
- **On Dark** (`{colors.on-dark}` — `#F4F7F0`): interactive-state primary text (button labels on dark buttons, focused tab).
- **On Dark Mute** (`{colors.on-dark-mute}` — `rgba(244,247,240,0.72)`): translucent secondary text on dark surfaces.

### Semantic & Category
- **Accent Blue** (`{colors.accent-blue}` — `#57C1FF`) + **Soft** (`{colors.accent-blue-soft}`): informational badge and the class-category tint for mobility, yoga and recovery.
- **Accent Green** (`{colors.accent-green}` — `#59D499`) + **Soft** (`{colors.accent-green-soft}`): success state (booking confirmed, waiver received) and the category tint for cardio and conditioning.
- **Accent Yellow** (`{colors.accent-yellow}` — `#FFC533`) + **Soft** (`{colors.accent-yellow-soft}`): warning semantic (class nearly full, membership lapsing) and the category tint for strength and lifting.
- Error states use `{colors.accent}` (hot red) — the urgency colour doubles as the destructive colour so the palette stays at one red.

### Brand Gradient
- **Hero Slash Gradient** — three diagonal red bars layered across the top of the home-page hero, fading from `{colors.hero-slash-start}` (`#FF4D4D`) to `{colors.hero-slash-end}` (`#B8121E`). The system's only chromatic gradient on chrome — used once per page maximum and reserved for the home hero and an optional sale takeover.
- **Stat Block Gradient** — stat numerals sit on a subtle linear-gradient from `{colors.stat-bg-start}` (`#1B211A`) to `{colors.stat-bg-end}` (`#10140F`) that gives the number tiles a faint plate-metal feel.

## Typography

### Font Family
**Oswald** is the display face — condensed, upright and built for uppercase. Every headline, tier name, trainer name and stat numeral is set in Oswald, uppercase, with +0.01em tracking so the condensed letterforms do not close up at large sizes. Weights are limited to 500, 600 and 700: 700 for the hero and stat numerals, 600 for section and card headings, 500 for small uppercase headings and chips. Oswald ships 200–700, so no requested weight is missing.

**Work Sans** carries everything that has to be read rather than shouted: body copy, class descriptions, schedule cells, membership checklists, FAQ answers, nav links, form labels and button labels. Weights 400 and 500 only. Button labels are Work Sans 500 uppercase with +0.4px tracking, which keeps them legible at 14px on a volt block without borrowing Oswald's condensed width.

There is no monospace face in the system. Times in the schedule table use Work Sans with `font-variant-numeric: tabular-nums` so columns align.

### Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Work+Sans:wght@400;500&display=swap" rel="stylesheet">
```
```css
:root {
  --font-display: Oswald, 'Arial Narrow', Impact, sans-serif;
  --font-body: 'Work Sans', system-ui, -apple-system, sans-serif;
}
```

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 72px | 700 | 1.0 | 0.01em (uppercase) | Hero headline ("Train harder. Recover smarter.") |
| `{typography.display-lg}` | 56px | 600 | 1.05 | 0.01em (uppercase) | Section headline ("Classes", "Memberships", "Meet the trainers") |
| `{typography.stat-numeral}` | 96px | 700 | 0.95 | 0 | Big numbers in `{component.stat-block}` — "1,200" members, "60+" classes a week |
| `{typography.heading-xl}` | 28px | 600 | 1.2 | 0.01em (uppercase) | Membership tier name, class name on a class page |
| `{typography.heading-lg}` | 24px | 600 | 1.15 | 0.01em (uppercase) | Mid-section feature heading, trainer name |
| `{typography.heading-md}` | 20px | 500 | 1.3 | 0.01em (uppercase) | Card group title, schedule day header |
| `{typography.heading-sm}` | 18px | 500 | 1.3 | 0.01em (uppercase) | Small heading, class card title, FAQ question |
| `{typography.body-lg}` | 18px | 400 | 1.6 | 0 | Hero subtitle, tier description |
| `{typography.body-md}` | 16px | 400 | 1.6 | 0 | Default body, class description, FAQ answer |
| `{typography.body-strong}` | 16px | 500 | 1.4 | 0 | Inline emphasis, primary nav link |
| `{typography.body-sm}` | 14px | 400 | 1.6 | 0 | Card description, schedule cell, trainer speciality |
| `{typography.body-sm-strong}` | 14px | 500 | 1.6 | 0 | Schedule table header, in-card label |
| `{typography.caption-md}` | 13px | 400 | 1.4 | 0.1px | Caption, intensity chip, photo credit |
| `{typography.caption-sm}` | 12px | 500 | 1.5 | 0.6px (uppercase) | Badge label, eyebrow |
| `{typography.link-md}` | 16px | 500 | 1.4 | 0 | Inline body link |
| `{typography.button-md}` | 14px | 500 | 1.6 | 0.4px (uppercase) | Button label |

### Principles
The hierarchy works on a 1.6 line-height ladder for body and a 0.95–1.3 ladder for display. The pairing is deliberately high-contrast: Oswald is narrow, tall and shouty; Work Sans is wide, round and calm. Never set a paragraph in Oswald and never set a headline in Work Sans — the contrast between the two is the voice. Uppercase is the default for every Oswald role; mixed-case Oswald reads like a different, softer brand. Keep the +0.01em tracking on display sizes; at 72px condensed type without tracking looks crushed.

### Note on Numerals
Stat numerals are the decorative system. Set them in `{typography.stat-numeral}` with `font-variant-numeric: lining-nums tabular-nums` and pair each with a `{typography.caption-sm}` label beneath ("members", "classes / week", "m² floor"). Numbers are placeholders until the business supplies real figures — never invent them in production.

## Layout

### Spacing System
- **Base unit:** 8px (with 2/4/12px steps for tight inline gaps in chips and schedule cells).
- **Tokens (front matter):** `{spacing.xxs}` (2px) · `{spacing.xs}` (4px) · `{spacing.sm}` (8px) · `{spacing.md}` (12px) · `{spacing.lg}` (16px) · `{spacing.xl}` (24px) · `{spacing.xxl}` (32px) · `{spacing.section}` (96px).
- **Universal section rhythm:** every page uses `{spacing.section}` (96px) as the vertical gap between major content blocks. Card grids use `{spacing.lg}` (16px) gutters; in-card padding sits at `{spacing.xl}` (24px) for feature and tier cards and `{spacing.lg}` (16px) for trainer and class cards.

### Grid & Container
- **Max width:** ~1240px content area at desktop with 24px gutters (~48px at ultrawide). Hero photography and the schedule table run wider (~1080px–full bleed) with the canvas extending edge to edge.
- **Class grid:** 3-up at desktop, 2-up at tablet, 1-up at mobile. Each `{component.class-card}` has a 4:3 photo on top, name, intensity chip, duration and a "Book" button.
- **Trainer grid:** 4-up at desktop, 2-up at tablet, 1-up at mobile. Each `{component.trainer-card}` is a 3:4 portrait with name and specialities beneath.
- **Membership tier grid:** 3-up at desktop (e.g. Off-peak / Full / Full + classes), collapsing to 1-up stacked at mobile with the featured tier first.
- **Schedule table:** full-width `{component.schedule-table-card}` with a 7-column day view at desktop (Mon–Sun), a day-tab + single-column list at tablet and mobile.
- **Stat row:** 3- or 4-up `{component.stat-block}` strip directly under the hero.
- **Footer:** 5-column link grid at desktop (Classes · Memberships · Studio · Hours & Location · Legal), collapsing to 2-up at tablet and 1-up at mobile.

### Whitespace Philosophy
Whitespace is generous and the canvas is uninterrupted. Sections sit 96px apart with no decorative dividers between them — the dark canvas continues edge-to-edge from hero to footer. Inside a section, copy is left-aligned in a tight column with photography occupying the right 50–60% of the band on feature rows. The red slash band only appears in the very first hero band; from the second section down, the page is monochrome dark punctuated by volt buttons and stat numerals.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No border, no shadow | Canvas-on-canvas blocks, hero text, footer body, full-bleed photography |
| 1 — Hairline border | 1px solid `{colors.hairline}` (#262D25) | Every card on `{colors.surface}`, class card, trainer card, membership tier card, schedule table |
| 2 — Hairline strong | 1px solid `{colors.hairline-strong}` | Schedule table header rule, focused input, divider inside the featured tier |
| 3 — Surface ladder elevation | `{colors.canvas}` → `{colors.surface}` → `{colors.surface-elevated}` → `{colors.surface-card}` | Multi-step background ladder used to create elevation without shadows |

The system has no drop-shadow elevation at all. Depth is built entirely from the surface ladder: each notch lighter on the dark scale reads as one step closer to the viewer. The sticky trial CTA bar is the one exception — it uses a 1px `{colors.hairline-strong}` top rule so it separates from scrolling content.

### Decorative Depth
Depth comes from photography, numerals and the single slash band:
- **Hero slash gradient** — three diagonal red bars (`{colors.hero-slash-start}` → `{colors.hero-slash-end}`) layered across the home hero, cutting behind the headline like warning tape. The signature decorative moment.
- **Full-bleed photography** — dark, high-contrast images of people mid-lift, mid-sprint, mid-stretch, graded towards the canvas so the edges dissolve into near-black. A bottom gradient from transparent to `{colors.canvas}` lets headlines sit on top. These ARE the brand decoration.
- **Facility icon tiles** — 48–64px rounded tiles holding line icons for equipment zones (free weights, rig, turf, sauna, showers) inside the facilities grid.
- **Stat blocks** — gradient-filled plates (`{colors.stat-bg-start}` → `{colors.stat-bg-end}`) carrying 96px Oswald numerals, read as engraved steel on a dark wall.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Hero band, primary nav, footer, sticky trial bar, full-bleed photography |
| `{rounded.xs}` | 2px | Badges, intensity chips, small inline tags |
| `{rounded.sm}` | 4px | Schedule rows, micro chips |
| `{rounded.md}` | 6px | Buttons, text inputs, filter bar, class card, trainer card, facility icon tiles |
| `{rounded.lg}` | 6px | Feature card, schedule table card, membership tier card (same value as md — kept as a separate token so cards can diverge later) |
| `{rounded.xl}` | 8px | Oversized hero photo container, the one place the system goes above 6px |
| `{rounded.full}` | 9999px | Pill-tab chips, trainer avatar circles |

The radius vocabulary is deliberately flat: 6px almost everywhere. The system never goes soft — no 12–16px cards — because rounded corners read as leisure and this brand reads as work. Pills are reserved for filter chips and avatars.

### Photography Geometry
Photography is the only imagery and it is load-bearing:
- **Hero photo** — 16:9 at desktop, 4:5 at mobile, graded dark with a bottom fade into `{colors.canvas}`, inside a `{rounded.xl}` (8px) container or full-bleed.
- **Class card photo** — 4:3 at `{rounded.md}` top corners only (the card clips it).
- **Trainer portrait** — 3:4 at `{rounded.md}`, consistent crop (chest-up, same background) across the whole team.
- **Facility gallery** — 1:1 and 3:2 tiles in a masonry-free, fixed-row grid at `{rounded.md}`.
- **Avatars** — 32–40px at `{rounded.full}` for trainer attribution on class rows.
- All photos are placeholders until the gym supplies real images; never use stock imagery that implies a specific facility.

## Components

> **No hover states documented** per system policy. Each spec covers Default and Active/Pressed only.

### Buttons

**`button-primary`** — the universal volt CTA
- Background `{colors.primary}` (volt), text `{colors.on-primary}` (near-black), type `{typography.button-md}`, padding `10px 20px`, height ~44px, rounded `{rounded.md}`.
- Used for "Start free trial" (sticky nav and sticky bottom bar), "Join now" on tiers, "Book" on class cards — every primary action across every surface.
- Dark text on volt is mandatory: the label must stay `{colors.on-primary}`; light text on volt fails contrast.
- Pressed state lives in `button-primary-pressed` — background deepens to `{colors.primary-pressed}`.

**`button-secondary`** — transparent outline button
- Background transparent with 1px solid `{colors.hairline-strong}`, text `{colors.on-dark}`, type `{typography.button-md}`, padding `10px 20px`, height ~44px, rounded `{rounded.md}`.
- Lower-emphasis action: "View schedule", "See all classes", "Get directions".

**`button-tertiary`** — soft surface button
- Background `{colors.surface-elevated}`, text `{colors.on-dark}`, type `{typography.button-md}`, padding `10px 20px`, height ~44px, rounded `{rounded.md}`.
- Mid-emphasis: "Compare memberships", "Watch the tour", "Add to calendar" inside cards.

**`button-accent`** — hot-red urgency button
- Background `{colors.accent}`, text `{colors.on-dark}` (contrast ≈ 4.6:1), type `{typography.button-md}`, padding `10px 20px`, height ~44px, rounded `{rounded.md}`.
- Reserved for time-limited offers only: "Claim founders' rate", "Grab the last spot". Never on the same fold as a volt primary.

**`button-disabled`**
- Background `{colors.surface-elevated}`, text `{colors.ash}` — dim utility state for a full class or a lapsed offer.

**`book-class-button`** — the schedule-row booking pill
- Background transparent with 1px solid `{colors.hairline-strong}` border, text `{colors.on-dark}`, type `{typography.button-md}`, padding `6px 14px`, rounded `{rounded.md}`.
- Sits at the right edge of every `{component.schedule-row}` with the label "Book". Flips to `{component.button-primary}` styling when the row is active.

### Filter & Tab Chips

**`pill-tab`** + **`pill-tab-active`** — day and category filter chips
- Default: transparent background, text `{colors.body}`, type `{typography.body-sm}`, padding `4px 12px`, rounded `{rounded.full}`.
- Active: background flips to `{colors.primary}`, text `{colors.on-primary}` — the chip becomes a small volt pill.
- Used in the schedule day strip ("Mon · Tue · Wed …") and the class category filter ("All", "Strength", "Cardio", "Mobility").

**`badge-tier`** — small membership label
- Background `{colors.surface-elevated}`, text `{colors.on-dark-mute}`, type `{typography.caption-sm}`, padding `2px 6px`, rounded `{rounded.xs}`.
- Inline "Off-peak" / "Full" / "Student" indicators on tier cards and class rows ("Members only").

**`badge-urgent`** — translucent red chip
- Background `{colors.accent-soft}`, text `{colors.accent}`, type `{typography.caption-sm}`, padding `2px 8px`, rounded `{rounded.xs}`.
- "3 spots left", "Ends Friday", "Waitlist" tags on class rows and offer cards.

**`badge-new`** — translucent volt chip
- Background `{colors.primary-soft}`, text `{colors.primary}`, type `{typography.caption-sm}`, padding `2px 8px`, rounded `{rounded.xs}`.
- "New class" / "New trainer" tags.

### Inputs & Forms

**`text-input`** + **`text-input-focused`**
- Default: background `{colors.surface-elevated}`, text `{colors.on-dark}`, 1px solid `{colors.hairline}`, type `{typography.body-md}`, padding `10px 12px`, height ~44px, rounded `{rounded.md}`.
- Focused: same surface; 1px border becomes `{colors.primary}` — a volt ring is the focus signal.
- Used in the free-trial form (name, email, phone, preferred start date), the contact form and the newsletter field.

**`schedule-filter-bar`** — the schedule-page search and filter field
- Background `{colors.surface-elevated}`, text `{colors.on-dark}`, type `{typography.body-md}`, padding `10px 16px`, height ~44px, rounded `{rounded.md}`.
- Sits at the top of the schedule with a filter icon at the left and "Filter by class, trainer or time…" placeholder, with the day `{component.pill-tab}` strip beneath.

### Cards & Containers

**`schedule-table-card`** — the class timetable
- Container: background `{colors.surface}`, 1px solid `{colors.hairline}`, padding 0 (rows fill the card), rounded `{rounded.lg}`.
- Layout: header strip with day columns in `{typography.body-sm-strong}` over a `{colors.hairline-strong}` rule, body of `{component.schedule-row}` items, sticky left time column in tabular Work Sans.

**`schedule-row`** + **`schedule-row-active`** — single class slot in the timetable
- Default: transparent background, text `{colors.on-dark}` in `{typography.body-md}`, padding `10px 12px`, rounded `{rounded.sm}`.
- Active: background `{colors.surface-card}` (one notch lighter) — the selected/expanded state.
- Each row contains a time, the class name, an `{component.intensity-chip}`, a trainer avatar + name, spots remaining and a `{component.book-class-button}` at the right edge.

**`feature-card-dark`** — standard feature card
- Container: background `{colors.surface}`, 1px solid `{colors.hairline}`, padding `{spacing.xl}` (24px), rounded `{rounded.lg}`.
- Used in 2- or 3-up grids on the home and facilities pages — pairs a facility photo or icon row with body copy and a "Learn more →" `{component.button-secondary}`.

**`feature-card-elevated`** — slightly-elevated variant
- Same chrome as `feature-card-dark` but background flips to `{colors.surface-elevated}` — used to break visual rhythm in alternating feature rows.

**`class-card`** — class listing card
- Container: background `{colors.surface}`, 1px solid `{colors.hairline}`, padding `{spacing.lg}` (16px), rounded `{rounded.md}`.
- Layout: 4:3 photo at top, class name in `{typography.heading-sm}`, `{component.intensity-chip}` + duration in `{typography.caption-md}`, 2-line description, "Book" `{component.button-primary}` at the bottom.

**`trainer-card`** — team member card
- Container: background `{colors.surface}`, 1px solid `{colors.hairline}`, padding `{spacing.lg}` (16px), rounded `{rounded.md}`.
- Layout: 3:4 portrait, name in `{typography.heading-lg}`, specialities in `{typography.body-sm}` `{colors.mute}`, certifications as `{component.badge-tier}` chips.

**`membership-tier-card`** — membership plan card (default tier)
- Container: background `{colors.surface}`, 1px solid `{colors.hairline}`, padding `{spacing.xl}` (24px), rounded `{rounded.lg}`.
- Layout: tier name in `{typography.heading-xl}`, price in `{typography.display-lg}` with "/month" in `{typography.body-sm}` `{colors.mute}`, description in `{typography.body-lg}`, CTA `{component.button-primary}` ("Join now") or `{component.button-secondary}` ("Start free trial"), checklist with volt `✓` glyphs. Prices are placeholders until the business supplies them.

**`membership-tier-card-featured`** — recommended tier
- Same chrome but background flips to `{colors.surface-elevated}` and a `{component.badge-new}`-styled "Most popular" tag sits at the top — the only visual cue distinguishing the featured tier.

**`stat-block`** — big-number tile
- Background gradient `{colors.stat-bg-start}` → `{colors.stat-bg-end}`, 1px solid `{colors.hairline}`, padding `{spacing.xl}`, rounded `{rounded.md}`.
- Carries a `{typography.stat-numeral}` figure in `{colors.ink}` with a `{typography.caption-sm}` label beneath in `{colors.mute}`.

**`hero-slash-band`** — home hero with red slash gradient
- Background `{colors.canvas}` with three diagonal red bars layered across the top half (`{colors.hero-slash-start}` → `{colors.hero-slash-end}`), full-bleed photography behind.
- Padding `{spacing.section}` 96px vertical / 48px horizontal, rounded `{rounded.none}`.
- Carries the hero headline in `{typography.display-xl}`, a `{typography.body-lg}` subtitle, a `{component.button-primary}` "Start free trial" and a `{component.button-secondary}` "View schedule".

### Sticky CTA

**`sticky-trial-cta`** — persistent "Start free trial" bar
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button-md}`, height ~56px, rounded `{rounded.none}`, 1px `{colors.hairline-strong}` top rule.
- Desktop: lives inside `{component.primary-nav}` as the right-anchored volt button. Mobile: becomes a full-width bottom bar fixed to the viewport, above the safe-area inset, with "Start free trial" at the left and a phone glyph linking to `tel:` at the right.

### Decorative

**`facility-icon-tile`** — 48px equipment-zone icon
- Background `{colors.surface-card}`, padding 0, rounded `{rounded.md}`, size 48×48. Line icon in `{colors.body}`.
- Used in the facilities grid and inside class rows (e.g. a kettlebell for strength, a bike for cardio).

**`facility-icon-tile-large`** — 64px feature variant
- Same but at 64×64. Used in the home-page facilities strip.

**`intensity-chip`** — class intensity glyph
- Background `{colors.surface-card}`, text `{colors.body}` in `{typography.caption-md}`, padding `1px 6px`, height ~20px, rounded `{rounded.xs}`.
- Renders inline intensity levels like `LOW`, `MID`, `HIGH` with a category tint dot (`{colors.accent-yellow}` strength, `{colors.accent-green}` cardio, `{colors.accent-blue}` mobility).

### Navigation

**`primary-nav`**
- Background `{colors.canvas}`, text `{colors.on-dark}`, height ~64px, type `{typography.body-sm-strong}`, rounded `{rounded.none}`, with a 1px `{colors.hairline}` bottom rule.
- Layout (desktop): gym wordmark at left (Oswald uppercase), centred nav cluster ("Classes · Schedule · Memberships · Trainers · Facilities · Contact"), right cluster (member login link + the always-volt `{component.button-primary}` "Start free trial").

**Top Nav (Mobile)**
- Hamburger icon at left, wordmark at centre, a phone glyph at right. The volt CTA moves to the `{component.sticky-trial-cta}` bottom bar. Primary nav collapses into a full-screen drawer with the schedule link first.

### Footer

**`footer-section`**
- Background `{colors.canvas}`, text `{colors.body}` in `{typography.body-sm}`, padding `64px 48px`, with a 1px `{colors.hairline}` top rule.
- Layout: 5-column link grid (Classes · Memberships · Studio · Hours & Location · Legal) with column headers in `{typography.heading-sm}` `{colors.on-dark}` and link lists in `{typography.body-sm}` `{colors.body}`. The Hours & Location column lists opening hours per day in tabular numerals and the address with a "Get directions" link.
- Bottom row: small wordmark + newsletter input with `{component.button-primary}` "Subscribe", then a `{typography.caption-md}` `{colors.mute}` line for the health disclaimer and waiver note ("All members complete a health questionnaire and waiver before their first session").
- The very top of the footer band may carry a faint red slash repeat at 10% opacity — a smaller echo of the hero motif.

### Inline

**`link-inline`** — body-prose anchor link
- `{colors.primary}` text with no underline by default; underline on focus and hover. Volt inline links keep the dark canvas tonally pure while still reading as action.

## Do's and Don'ts

### Do
- Render the entire site in one continuous dark mode. There is no light variant in the system.
- Use `{colors.primary}` (volt block) for every primary CTA, always with `{colors.on-primary}` dark text. There is no second primary colour — volt IS the action.
- Build elevation from the surface ladder (`{colors.canvas}` → `{colors.surface}` → `{colors.surface-elevated}` → `{colors.surface-card}`), never from drop shadows.
- Set every headline in Oswald, uppercase, +0.01em tracking; set every paragraph in Work Sans. The contrast between the two faces is the voice.
- Make the schedule a first-class `{component.schedule-table-card}` with real rows, not an iframe. Members visit it more than any other page.
- Put `{component.sticky-trial-cta}` on every page — nav on desktop, bottom bar on mobile — so "Start free trial" is never more than one tap away.
- Reserve `{colors.hero-slash-start}` → `{colors.hero-slash-end}` for the hero band exactly once per page. Never repeat the slash deeper in the page.
- Use `{colors.accent}` (hot red) only for urgency: last spots, limited offers, errors. One red moment per fold at most.
- Use the category tints (`{colors.accent-yellow}`, `{colors.accent-green}`, `{colors.accent-blue}`) only inside intensity chips and facility icons — never on buttons or text.
- Keep the health disclaimer and waiver note visible in the footer and on the free-trial form.

### Don't
- Don't introduce a light mode. The system is dark-only by design.
- Don't add drop shadows on cards. Elevation is built from the surface ladder, not from shadows.
- Don't put white or light text on a volt button; dark text is the only compliant pairing.
- Don't use hot red as a default CTA or on calm pages like Trainers or FAQ. Red means now.
- Don't soften the radii above 8px. Rounded cards read as leisure; this brand reads as work.
- Don't set mixed-case Oswald headlines or Work Sans headlines. The uppercase condensed display is the identity.
- Don't invent stats, prices or member counts. Numerals are placeholders until the business supplies them.
- Don't pad cards with 32px+ on all sides. The system runs tight at 16–24px in-card padding.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| ultrawide | 1920px+ | Content max-width holds at 1240px; outer gutters grow to ~80px |
| desktop-large | 1440px | Default — 3-up tier grid, 4-up trainer grid, 7-column schedule |
| desktop | 1280px | Same with narrower outer gutters |
| desktop-small | 1024px | 4-up trainers → 3-up; schedule stays 7-column with tighter cells; nav remains horizontal |
| tablet | 768px | Tiers → 1-up stacked; schedule → day-tab + list; nav becomes hamburger drawer; sticky bottom CTA appears |
| mobile | 480px | Single-column everything; hero `{typography.display-xl}` scales 72px → ~40px; stat numerals 96px → 56px |
| mobile-narrow | 320px | Section padding tightens to 48px; stat row becomes 2-up |

### Touch Targets
All interactive elements meet WCAG AA at 44px+. `{component.button-primary}`, `{component.button-secondary}` and `{component.button-tertiary}` sit at 44px height with 20px padding. `{component.text-input}` sits at 44px. `{component.schedule-filter-bar}` sits at 44px. `{component.pill-tab}` is ~28px visual height with inline padding extending to a 44px tap row. `{component.book-class-button}` sits at ~36px visual height with the whole `{component.schedule-row}` (≥ 48px) also tappable. `{component.sticky-trial-cta}` is 56px.

### Collapsing Strategy
- **Primary nav:** desktop horizontal cluster → tablet hamburger drawer at 768px. The volt "Start free trial" CTA moves from the nav to the fixed bottom bar at 768px and below.
- **Hero:** desktop 2-column with copy at left + photo at right → tablet stacks copy over photo → mobile uses a 4:5 photo crop behind the copy with a stronger bottom fade.
- **Stat row:** 4-up → 2-up at tablet → 2-up at mobile with numerals scaled down.
- **Class grid:** 3-up → 2-up at tablet → 1-up at mobile.
- **Trainer grid:** 4-up → 3-up at desktop-small → 2-up at tablet → 1-up at mobile.
- **Membership tier grid:** 3-up → 1-up stacked at tablet with the featured tier first.
- **Schedule table:** desktop 7-column week → tablet and mobile day-tab strip (`{component.pill-tab}`) with a single-column list of rows; the time column stays left-aligned and sticky.
- **Footer:** 5-up link columns → 3-up at tablet → 2-up at mobile-landscape → 1-up at mobile; Hours & Location column moves to the top on mobile.
- **Section padding:** `{spacing.section}` (96px) desktop → 64px tablet → 48px mobile.
- **Hero headline:** `{typography.display-xl}` (72px) at desktop, scaling 56px / 48px / 40px down the breakpoint stack.

### Image Behavior
Photography is the only imagery and it must stay fast on mobile data:
- **Hero photo** switches crop by breakpoint (16:9 → 4:5) using `<picture>` sources; serve AVIF/WebP, lazy-load everything below the fold.
- **Class and trainer photos** scale fluidly inside their cards; fixed aspect boxes (`aspect-ratio`) prevent layout shift while loading.
- **Facility icon tiles** stay at 48–64px fixed size at every breakpoint; they wrap into flexible rows at narrower widths.
- **Hero slash gradient** stays at the top of the hero band at every breakpoint with the bar angle preserved.

## Iteration Guide

1. Focus on ONE component at a time. Pull its YAML entry and verify every property resolves.
2. Reference component names and tokens directly (`{colors.primary}`, `{component.button-primary-pressed}`, `{rounded.md}`) — do not paraphrase.
3. Run `npx @google/design.md lint DESIGN.md` after edits — `broken-ref`, `contrast-ratio`, and `orphaned-tokens` warnings flag issues automatically.
4. Add new variants as separate component entries (`-pressed`, `-disabled`, `-active`) — do not bury them inside prose.
5. Default body to `{typography.body-md}` (16px / 400 / 1.6); reach for `{typography.body-strong}` for emphasis; reserve `{typography.display-xl}` strictly for the hero band and `{typography.stat-numeral}` for stat blocks.
6. Keep `{colors.primary}` (volt block) scarce per viewport — at most one solid volt button per fold, plus the sticky bar.
7. Keep `{colors.accent}` (hot red) rarer still — if red appears twice in a viewport, the page is shouting; demote one to `{component.badge-tier}`.
8. When introducing a new component, ask whether it can be expressed with the existing surface-ladder + 6px-radius + Oswald/Work Sans vocabulary before adding new tokens. The system's strength is that it almost never needs new ones.

## Known Gaps

- **Mobile screenshots not captured** — responsive behaviour is synthesised from the breakpoint stack; verify the schedule day-tab pattern and the bottom sticky bar on real devices.
- **Hover states not documented** by system policy. Schedule rows and class cards should get a one-notch surface lift on hover; specify it when building.
- **Schedule integration undecided** — the `{component.schedule-table-card}` is designed as a native component; if the gym uses a third-party booking system, its embed must be restyled to these tokens or replaced with an API-fed table.
- **Dark mode is the only mode** — no light variant exists; print styles for the schedule should invert to black-on-white.
- **Form validation states** beyond the focused-input volt ring are not specified; use `{colors.accent}` for error text and borders.
- **Member-only chrome** (login, booking history, membership management) is not in scope; the public site only.
- **Legal copy** — the waiver, health questionnaire and cancellation terms are placeholders; a real gym must supply and have them reviewed.

### Revision 2026-10-07: reference-led direction, FitFive (preview.themeforest.net/item/fitfive-gym-fitness-html-template/full_screen_preview/64547433)

Built at the owner's request after the FitFive "Home 1" demo, keeping this file's tokens (Oswald uppercase display, Work Sans body, volt `{colors.primary}`, the dark surface ladder, 6px corners, hairlines, no shadows) and taking the demo's composition, scale and motion:

- **Scale.** Section titles run far larger than the hierarchy above: the hero wordmark-sized headline at up to 180px and section titles at 72–150px set in two lines. The demo's italic first letter is not used: Oswald ships no italic and the synthesised slant collides with the next letter. Numbered eyebrows in volt body type, "(Training — 02)", introduce every section.
- **Composition.** Three faint vertical hairlines run the full page behind the content. Sections follow the demo: full-bleed photographic hero with the headline bottom-left and member / trainer figures bottom-right; statement block with a photo card, a "play" card and figures; training programmes with a large photo card carrying a "training performance" bar card; "why us" with numbered points and a comparison bar chart on a photo card; membership tiers inside one surface container; class types with volt icon discs and intensity chips beside a photo card; the weekly schedule with day pill-tabs; four trainer portraits with name cards; a testimonial card over a full-bleed photograph; the BMI calculator; two article cards; a footer over a photograph with the ghost wordmark.
- **Buttons.** `{component.button-primary}` gains the demo's trailing arrow disc (a dark circle with ↗ inside the volt block); corners stay at `{rounded.md}`, not the demo's pills. The demo's light cards are rendered on `{colors.surface-elevated}` because the system is dark-only.
- **Colours.** Unchanged. Volt stays the only action colour; the hero keeps this file's red slash band as a thin diagonal pair behind the headline; category tints appear only in intensity chips and the comparison chart.
- **Motion.** Hero letters slam in through masks while the photograph rises and settles; the red slashes slide in; the photograph tilts with the pointer and drifts with scroll. Titles reveal word by word, cards and portraits wipe up, performance bars and chart bars grow on entry, the BMI result counts up (anime.js), the testimonial slides (Embla). A custom cursor (grey dot with a volt ring on a spring, swelling over controls) replaces the native one on mouse devices. Reduced motion renders everything at rest and keeps the native cursor.
