---
version: alpha
name: Construction-Template
description: An industrial, bold design system for a construction and general-contracting company — light concrete canvas, graphite ink, and a safety-amber primary that every "Request a quote" button wears with dark graphite text. Headlines set in Barlow Condensed, uppercase and tracked, over Barlow body with tabular figures for specs and timelines. Corners are 2–4 px, key cards carry thick 2 px graphite borders and a hard single-offset shadow, one diagonal hazard-style band marks the hero, and graphite bands close the quote section and the footer. Built for homeowners and developers who want proof of capability and a fast path to a quote.

colors:
  primary: "#F2A900"
  primary-active: "#D99700"
  primary-disabled: "#F8E3A3"
  ink: "#141414"
  body: "#3A3A37"
  muted: "#6B6A64"
  muted-soft: "#8A8983"
  hairline: "#D6D4CD"
  hairline-soft: "#E9E8E3"
  canvas: "#F5F5F2"
  surface-soft: "#E9E8E3"
  surface-card: "#FFFFFF"
  surface-strong: "#C9C7BF"
  surface-dark: "#141414"
  surface-dark-elevated: "#222220"
  on-primary: "#141414"
  on-dark: "#FFFFFF"
  on-dark-soft: "#B5B3AB"
  brand-accent: "#141414"
  success: "#2E7D32"
  warning: "#D97706"
  error: "#C62828"
  badge-residential: "#4A6FA5"
  badge-commercial: "#5B6B4A"
  badge-renovation: "#B5651D"
  badge-industrial: "#6B6A64"

typography:
  display-xl:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, sans-serif"
    fontSize: 72px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0.02em
    textTransform: uppercase
  display-lg:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, sans-serif"
    fontSize: 52px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: 0.02em
    textTransform: uppercase
  display-md:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0.02em
    textTransform: uppercase
  display-sm:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, sans-serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: 0.02em
    textTransform: uppercase
  title-lg:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.02em
    textTransform: uppercase
  title-md:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0.02em
    textTransform: uppercase
  title-sm:
    fontFamily: "Barlow, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Barlow, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-sm:
    fontFamily: "Barlow, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Barlow, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.04em
    textTransform: uppercase
  spec-figure:
    fontFamily: "Barlow, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
    fontFeatureSettings: "'tnum' 1"
  button:
    fontFamily: "Barlow, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.06em
    textTransform: uppercase
  nav-link:
    fontFamily: "Barlow, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.02em

rounded:
  xs: 2px
  sm: 2px
  md: 4px
  lg: 4px
  xl: 4px
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
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 14px 24px
    height: 48px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-disabled}"
    textColor: "{colors.muted}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 14px 24px
    height: 48px
  button-icon-round:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 40px
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 72px
  nav-segment-group:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.md}"
    padding: 4px
  hero-band:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    padding: 96px
  hero-quote-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    rounded: "{rounded.md}"
  hazard-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    height: 12px
  service-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.md}"
    padding: 32px
  service-icon-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.title-sm}"
    rounded: "{rounded.md}"
    padding: 24px
  project-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: 0px
  review-card:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
  package-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.md}"
    padding: 32px
  package-card-featured:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.md}"
    padding: 32px
  text-input:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 12px 14px
    height: 48px
  text-input-focused:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    rounded: "{rounded.sm}"
  category-tab:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    padding: 10px 14px
    rounded: "{rounded.sm}"
  category-tab-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
  crew-avatar:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 40px
  badge-pill:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: 4px 10px
  license-badge:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  stat-tile:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.primary}"
    typography: "{typography.display-md}"
    rounded: "{rounded.md}"
    padding: 24px
  timeline-step:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.title-md}"
    padding: 16px 0px
  rating-stars:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
  quote-band-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-md}"
    rounded: "{rounded.md}"
    padding: 48px
  footer:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark-soft}"
    typography: "{typography.body-sm}"
    padding: 64px
---

## Overview

This is the design system for a construction and general-contracting company's website — residential and commercial builds, renovations, and a fast path to a quote. The surface is a light concrete canvas (`{colors.canvas}` — #F5F5F2) with graphite ink (`{colors.ink}` — #141414), and one loud primary: safety amber (`{colors.primary}` — #F2A900). Every "Request a quote" and "Call now" button wears the amber with dark graphite text; nothing else on the page is amber except the hazard band and the stat figures on dark bands. The system reads as robust and plain-spoken — thick borders, hard shadows, big uppercase headlines, and photographs of real sites.

Type voice splits cleanly into two roles: **Barlow Condensed** (display — uppercase, weight 700 for hero and section heads, 600 for titles, tracked +0.02em) and **Barlow** (everything else — body, buttons, nav, captions, and tabular figures for specs, areas and timelines). The condensed face at large sizes looks like site signage and stencilled crates; the body face keeps paragraphs calm and legible.

Component voltage comes from **structure shown plainly**: a services grid with 2 px graphite borders and a hard offset shadow, a project gallery of unframed site photographs, a six-step process timeline, a row of licensing and insurance badges (placeholders), and a quote request form that sits in the hero itself. The site does not decorate around the work; it lays the work out like a site plan.

The hero and the quote band flip to `{colors.surface-dark}` (#141414) — graphite bands that carry the amber CTA at full contrast. The footer is graphite too. Between them, everything stays concrete-canvas with white cards.

**Key Characteristics:**
- Concrete canvas with a safety-amber primary CTA (`{colors.primary}` — #F2A900) carrying **dark graphite text** (`{colors.on-primary}` — #141414, ~9.2:1). Buttons are `{rounded.md}` (4px), uppercase, tracked, 48 px tall, with a hard `3px 3px 0` graphite shadow.
- Barlow Condensed uppercase display at +0.02em tracking — bold, condensed, signage-like. Never lowercase at display sizes.
- White cards (`{colors.surface-card}` — #FFFFFF) with 2 px `{colors.ink}` borders for key cards (services, hero quote card, licence badges); hairline-bordered cards for secondary content.
- A single diagonal hazard-style band (`{component.hazard-band}` — 12 px of 45° amber/graphite hatching) under the hero. It appears once per page.
- Graphite bands (`{colors.surface-dark}`) for the hero, the quote band and the footer; amber stat figures on `{colors.surface-dark-elevated}` tiles inside them.
- Crew avatars are round (`{rounded.full}`), 40 px; the only round shapes in the system besides the icon button.
- Spacing rhythm is `{spacing.section}` (96px) between major bands.
- Border radius is nearly flat: `{rounded.sm}` (2px) for inputs, tabs and project images; `{rounded.md}` (4px) for buttons and cards. Nothing above 4 px except avatars.

## Colors

### Brand & Accent
- **Safety Amber** (`{colors.primary}` — #F2A900): The action colour. All primary CTAs, the hazard band, stat figures on dark tiles, rating stars. Press state shifts to `{colors.primary-active}` (#D99700). Amber is NEVER used as text on light surfaces (~1.9:1); on amber, text is always `{colors.on-primary}` graphite.
- **Graphite Accent** (`{colors.brand-accent}` — #141414): The second brand colour — the hero band, the quote band, card borders, the active filter tab and the footer. Graphite does the "serious" work so that amber can stay loud and rare.
- **Trade Badges** — A muted set for project-type tags: `{colors.badge-residential}` (#4A6FA5 steel blue), `{colors.badge-commercial}` (#5B6B4A olive), `{colors.badge-renovation}` (#B5651D rust), `{colors.badge-industrial}` (#6B6A64 slate). Used with white text on small tags in the project gallery — never on CTAs.

### Surface
- **Canvas** (`{colors.canvas}` — #F5F5F2): The light concrete page floor.
- **Surface Soft** (`{colors.surface-soft}` — #E9E8E3): Review cards, the nav segment group, alternating bands.
- **Surface Card** (`{colors.surface-card}` — #FFFFFF): White cards — services, packages, the hero quote card, licence badges, inputs.
- **Surface Strong** (`{colors.surface-strong}` — #C9C7BF): A stronger divider and the disabled control border.
- **Surface Dark** (`{colors.surface-dark}` — #141414): Graphite — hero band, quote band, footer, featured package card.
- **Surface Dark Elevated** (`{colors.surface-dark-elevated}` — #222220): Stat tiles and nested cards inside graphite bands.
- **Hairline** (`{colors.hairline}` — #D6D4CD): The 1 px border tone on light surfaces — inputs, secondary cards, table rows.
- **Hairline Soft** (`{colors.hairline-soft}` — #E9E8E3): A barely-visible divider between sections that share the canvas.

### Text
- **Ink** (`{colors.ink}` — #141414): All headlines and primary text (~16:1 on canvas).
- **Body** (`{colors.body}` — #3A3A37): Default running-text colour (~10:1).
- **Muted** (`{colors.muted}` — #6B6A64): Secondary text — sub-headings, inactive tabs, footer body (~4.9:1).
- **Muted Soft** (`{colors.muted-soft}` — #8A8983): Tertiary text — captions at 13 px+ only, copyright lines; borderline for small text, so avoid below 13 px.
- **On Primary** (`{colors.on-primary}` — #141414): Text on amber buttons — dark, never white.
- **On Dark** (`{colors.on-dark}` — #FFFFFF): Headlines on graphite bands.
- **On Dark Soft** (`{colors.on-dark-soft}` — #B5B3AB): Body and link rows on graphite (~9:1).

### Semantic
- **Success** (`{colors.success}` — #2E7D32): "Quote request sent" confirmation, "Completed" project status.
- **Warning** (`{colors.warning}` — #D97706): "In progress" status, site-notice callouts.
- **Error** (`{colors.error}` — #C62828): Validation errors on the quote form.

## Typography

### Font Family
The system runs **Barlow Condensed** for display and titles and **Barlow** for everything else. Barlow Condensed at weight 700 (hero, section heads) and 600 (titles), always uppercase with +0.02em tracking, gives the site the voice of stencilled signage. Barlow handles body, buttons, navigation, captions and tabular figures. The fallback stack walks `'Arial Narrow', Impact, sans-serif` for the condensed face and `'Helvetica Neue', Arial, sans-serif` for body.

There is no monospace role. Figures — square metres, durations, project counts, licence numbers — use Barlow with tabular numerals (`{typography.spec-figure}`) so they align in spec tables and timelines.

The split is functional:
- Barlow Condensed (display, 700/600, uppercase, +0.02em) — h1, h2, h3, card titles, package names
- Barlow (body + UI, 400–500, 0 tracking) — paragraphs, labels, nav, inputs; buttons and captions are uppercase at +0.04–0.06em

### Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Barlow:wght@400;500&display=swap" rel="stylesheet">
```
```css
:root {
  --font-display: 'Barlow Condensed', 'Arial Narrow', Impact, sans-serif;
  --font-body: Barlow, 'Helvetica Neue', Arial, sans-serif;
}
```

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 72px | 700 | 1.0 | +0.02em | Homepage h1 ("BUILT RIGHT. ON TIME.") — Barlow Condensed, uppercase |
| `{typography.display-lg}` | 52px | 700 | 1.05 | +0.02em | Section heads ("OUR SERVICES", "RECENT PROJECTS") — uppercase |
| `{typography.display-md}` | 36px | 700 | 1.1 | +0.02em | Quote-band head, stat figures — uppercase |
| `{typography.display-sm}` | 28px | 600 | 1.15 | +0.02em | Sub-section heads, process step numbers — uppercase |
| `{typography.title-lg}` | 24px | 600 | 1.2 | +0.02em | Package names — Barlow Condensed, uppercase |
| `{typography.title-md}` | 20px | 600 | 1.25 | +0.02em | Service card titles, timeline step titles — uppercase |
| `{typography.title-sm}` | 16px | 500 | 1.4 | 0 | Small card titles, list labels — Barlow |
| `{typography.body-md}` | 16px | 400 | 1.55 | 0 | Default running-text |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body, fine-print, form help |
| `{typography.caption}` | 13px | 500 | 1.4 | +0.04em | Badge labels, tabs, licence badge text — uppercase |
| `{typography.spec-figure}` | 14px | 500 | 1.5 | 0 | Areas, durations, licence numbers, spec tables — tabular numerals |
| `{typography.button}` | 14px | 500 | 1.0 | +0.06em | Button labels — uppercase |
| `{typography.nav-link}` | 14px | 500 | 1.4 | +0.02em | Top-nav menu items |

### Principles
Barlow Condensed is the brand voice — every display headline and card title uses it, uppercase, tracked. Barlow handles the supporting type. The boundary is strict: never put body copy in the condensed face, never set a display headline in lowercase or in Barlow. Condensed without the +0.02em tracking reads cramped; the tracking is part of the voice.

Display weight is 700 for the two largest steps and 600 below — never 800 or 900, which turn signage into shouting. Body never exceeds 500; emphasis in paragraphs comes from `{colors.ink}` vs `{colors.body}`, not from weight.

### Note on Font Substitutes
Both faces are open-source and load from Google Fonts under the SIL Open Font License. If web fonts are blocked, `'Arial Narrow'` (or Impact at 700) keeps the condensed silhouette, and Arial keeps body proportions; retain the uppercase + tracking rules so the hierarchy survives.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **Section padding:** `{spacing.section}` (96px) — the universal vertical rhythm between bands; the hero may stretch to 128px on desktop.
- **Card inner padding:** `{spacing.xl}` (32px) for service and package cards; `{spacing.lg}` (24px) for review and icon cards; project cards have no padding (photo flush to the edge, caption bar beneath).
- **Gutters:** `{spacing.lg}` (24px) between cards in 3-up grids; `{spacing.md}` (16px) inside the project gallery so photos read as a wall of work; `{spacing.md}` inside footer columns.

### Grid & Container
- **Max content width:** ~1200px centred; the project gallery may extend to 1400px.
- **Hero:** 12-column grid with a 7/5 split — h1, lead and CTA row on the left, `{component.hero-quote-card}` on the right, over a full-bleed site photograph with a graphite overlay.
- **Services grid:** 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **Project gallery:** 3-up (or a 2-1-2 mosaic with one 2:1 feature tile), 2-up at tablet, 1-up at mobile.
- **Process timeline:** a single horizontal 6-step row at desktop (Consult → Quote → Design & permits → Build → Inspect → Handover), vertical at mobile.
- **Packages grid:** 3-up at desktop, 1-up at mobile.
- **Licence badge row:** 4–6 badges in a wrapping flex row.
- **Footer:** 4-column link list at desktop (Services / Projects / Company / Contact), wrapping to 2-up at tablet, 1-up at mobile.

### Whitespace Philosophy
The system is dense where the work is (the gallery, the services grid) and open where the ask is (the hero, the quote band). Section padding sits at 96px; card padding at 32px; the gallery gutter is deliberately tight at 16px. Every band has one uppercase headline, one supporting line, and a single amber action — never two amber buttons in view at once.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, graphite bands |
| Hairline | 1px `{colors.hairline}` border | Inputs, secondary cards, table dividers, review cards |
| Thick border | 2px `{colors.ink}` border, no shadow | Timeline steps, licence badges, the secondary button |
| Hard offset | 2px `{colors.ink}` border + `3px 3px 0 {colors.ink}` solid shadow (no blur) | Key cards — service cards, the hero quote card, the primary button; pressed state collapses the offset to `1px 1px 0` |
| Dark tile | `{colors.surface-dark-elevated}` on `{colors.surface-dark}`, no shadow | Stat tiles and nested cards inside graphite bands |

The elevation philosophy is **hard and honest** — a single solid offset shadow, no blur, no gradients, no glassmorphism. If a surface needs emphasis, it gets a thicker border or a flipped polarity, not a softer shadow.

### Decorative Depth
- The hazard band (`{component.hazard-band}`) — a 12 px strip of 45° amber and graphite hatching rendered with `repeating-linear-gradient(45deg, #F2A900 0 12px, #141414 12px 24px)` — sits once, directly under the hero. It is the only pattern in the system.
- Site photographs carry their own depth (scaffolds, framing, concrete pours); the chrome never adds vignettes or tints beyond the hero's flat graphite overlay at 60 %.
- Crew avatars may carry `{colors.surface-soft}` fills with initials when photographs are not supplied.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 2px | Badge tags, checkbox corners |
| `{rounded.sm}` | 2px | Inputs, filter tabs, project photo tiles |
| `{rounded.md}` | 4px | Buttons, service / package cards, licence badges, stat tiles, the quote band |
| `{rounded.lg}` | 4px | Alias of `md` — kept for portability |
| `{rounded.xl}` | 4px | Alias of `md` — the hero quote card uses 4px, not more |
| `{rounded.pill}` | 9999px | Not used on buttons; reserved for the "Open now" status pill in the top bar |
| `{rounded.full}` | 9999px / 50% | Crew avatars, the round icon button |

### Photography Geometry
Project photos use 4:3 inside `{rounded.sm}` tiles with a graphite caption bar beneath (project name, type badge, location). The hero photograph is full-bleed 16:9 (4:5 crop at mobile) with a 60 % graphite overlay so the white headline and amber CTA hold contrast. Crew photos are round at 40 px. Before/after pairs for renovations sit side by side at 4:3 with a 2 px graphite divider.

## Components

### Top Navigation

**`top-nav`** — Concrete-canvas nav bar pinned to the top of every page, 72px tall, with a 2px `{colors.ink}` rule beneath. Carries the company wordmark (Barlow Condensed 700, uppercase) at left, the horizontal menu (Services, Projects, Process, About, Contact) centre, and a right-side cluster with the phone number as `{component.button-text-link}` (tel: link, with a phone icon) and "Request a quote" as `{component.button-primary}`. Menu items in `{typography.nav-link}` (Barlow 14px / 500). A slim utility bar above may show service hours and an "Open now" pill.

**`nav-segment-group`** — A 4 px-radius wrapper around 2–3 sub-nav segments (e.g., the "Residential / Commercial" switch on the services page). Background `{colors.surface-soft}`, padding 4px, rounded `{rounded.md}`. The active segment renders as a graphite `{colors.ink}` block with white text — the square-in-square treatment echoes the thick-border cards.

### Buttons

**`button-primary`** — The signature amber CTA. Background `{colors.primary}` (#F2A900), text `{colors.on-primary}` (#141414 — dark text on amber for ~9.2:1 contrast), type `{typography.button}` (Barlow 14px / 500, uppercase, +0.06em), padding 14px × 24px, height 48px, rounded `{rounded.md}` (4px), 2px `{colors.ink}` border and a hard `3px 3px 0 {colors.ink}` shadow. Active state `button-primary-active` shifts to `{colors.primary-active}` (#D99700) and collapses the shadow to `1px 1px 0`. Used for "Request a quote" and "Call now".

**`button-secondary`** — Canvas button with a 2px graphite outline. Background `{colors.canvas}`, text `{colors.ink}`, 2px `{colors.ink}` border, same padding + height + radius as primary, no shadow. Used for "View projects", "Download capability statement".

**`button-icon-round`** — 40 × 40px round icon button. Background `{colors.canvas}`, 2px graphite border, ink icon. Used for gallery arrows, "back to top", and the before/after toggle.

**`button-text-link`** — Uppercase text button, no background. Used for the phone number in the top nav and "See all services →" links under grids.

**`text-link`** — Inline body links in `{colors.ink}`, underlined with a 2px offset underline (the system keeps links monochrome; amber is never link colour).

### Cards & Containers

**`hero-band`** — Graphite hero over a full-bleed site photograph with a 7/5 grid: `{typography.display-xl}` uppercase h1 + lead + button row (`button-primary` "Request a quote" + `button-secondary` "View projects") on the left, `{component.hero-quote-card}` on the right. Vertical padding `{spacing.section}` (96px). The `{component.hazard-band}` runs along the bottom edge.

**`hero-quote-card`** — The quick quote form embedded in the hero. Background `{colors.surface-card}`, 2px `{colors.ink}` border, rounded `{rounded.md}` (4px), hard offset shadow. Fields: name, phone, project type (select), postcode, short description; submit is `{component.button-primary}` full-width. Title "GET A QUOTE IN 24 HOURS" is placeholder copy — the response promise must be confirmed by the business.

**`hazard-band`** — The single diagonal hazard-style band, 12px tall, full width, amber/graphite 45° hatching. Appears once per page, under the hero. Never used as a border on cards or as a background pattern.

**`service-card`** — Used in the 3-up services grid ("New builds", "Renovations & extensions", "Commercial fit-out", "Roofing", "Groundworks"). Background `{colors.surface-card}`, 2px `{colors.ink}` border, rounded `{rounded.md}`, hard offset shadow, inner padding `{spacing.xl}` (32px). Carries a line icon at top (graphite, 32px), a `{typography.title-md}` uppercase title, a body description in `{typography.body-md}`, and a "Request a quote →" text link.

**`service-icon-card`** — A simpler card variant for 4-up grids of capabilities or safety practices. Background `{colors.canvas}` with a 1px hairline border, rounded `{rounded.md}`, padding `{spacing.lg}` (24px). Carries a small icon, `{typography.title-sm}` title, short description.

**`project-card`** — The gallery tile. Background `{colors.surface-card}`, rounded `{rounded.sm}` (2px), no padding: a 4:3 site photograph flush to the edge, then a graphite caption bar (`{colors.surface-dark}`) holding the project name in `{typography.title-sm}` white, a trade `{component.badge-pill}`, and location + year in `{typography.spec-figure}` `{colors.on-dark-soft}`. Project names, locations and photos are placeholders.

**`review-card`** — Used in the reviews placeholder grid. Background `{colors.surface-soft}`, rounded `{rounded.md}`, padding `{spacing.lg}` (24px). Top row carries a `{component.crew-avatar}`-sized reviewer circle + name + project type and `{component.rating-stars}`; below sits the quote in `{typography.body-md}`. No real reviews exist in the template; the card ships with "Review placeholder — replace with a verified review" copy.

**`package-card`** — Standard engagement card ("Design & build", "Renovation", "Maintenance contract"). Background `{colors.surface-card}`, 1px `{colors.hairline}` border, rounded `{rounded.md}`, padding `{spacing.xl}` (32px). Carries the package name in `{typography.title-lg}`, a "typical scope" checklist in `{typography.body-md}`, a "from" price slot in `{typography.display-sm}` that stays as "Price on request" until the business supplies figures, and a `{component.button-primary}` at the bottom.

**`package-card-featured`** — The recommended package. Background flips to `{colors.surface-dark}` (#141414), text inverts to `{colors.on-dark}`; the amber CTA reaches full voltage on graphite. The dark surface IS the featured signal — no ribbon, no scale shift.

**`stat-tile`** — Figures inside graphite bands ("Projects completed", "Years trading", "Safety record"). Background `{colors.surface-dark-elevated}`, figure in `{typography.display-md}` `{colors.primary}`, label in `{typography.caption}` `{colors.on-dark-soft}`, rounded `{rounded.md}`, padding `{spacing.lg}`. Figures are placeholders until the business supplies verifiable numbers.

**`timeline-step`** — One step of the 6-step process row. Background `{colors.canvas}`, 2px `{colors.ink}` top border, padding 16px 0. Step number in `{typography.display-sm}` amber-on-graphite square (40px), title in `{typography.title-md}`, duration estimate in `{typography.spec-figure}` ("Typically 2–3 weeks" — placeholder), description in `{typography.body-sm}`.

### Inputs & Forms

**`text-input`** — Standard text input for the quote form. Background `{colors.surface-card}`, text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.sm}` (2px), padding 12px × 14px, height 48px, 1px `{colors.hairline}` border. Labels sit above in `{typography.caption}` uppercase. Selects (project type, budget band, preferred start) share the chrome; the textarea for "Tell us about the project" is 160px minimum. File upload for plans or photos uses a dashed 2px `{colors.hairline}` drop zone.

**`text-input-focused`** — Focus state. Border thickens to 2px `{colors.ink}`; no glow. Error state swaps the border to `{colors.error}` with a `{typography.body-sm}` message beneath.

### Tags / Badges

**`badge-pill`** — Small square-cornered tag for project type ("Residential", "Commercial", "Renovation", "Industrial"). Background `{colors.surface-soft}` or one of the trade badge colours with white text, type `{typography.caption}` uppercase, rounded `{rounded.sm}` (2px), padding 4px × 10px.

**`license-badge`** — The licensing / insurance / accreditation badge in the trust row. Background `{colors.surface-card}`, 2px `{colors.ink}` border, rounded `{rounded.md}`, padding 12px × 16px. Holds a 24px shield or certificate icon, a label in `{typography.caption}` ("Licensed contractor", "Public liability insured", "Health & safety accredited") and a number slot in `{typography.spec-figure}` ("Lic. no. 000000" — placeholder). Logos of accrediting bodies may be added only with permission.

**`crew-avatar`** — 40px diameter, rounded `{rounded.full}`. Holds a crew or site-manager photo, or a `{colors.surface-soft}` fill with initials in `{typography.caption}`.

**`rating-stars`** — Inline star row in `{colors.primary}` (#F2A900) beside review placeholders. Stars render at 16px; no numeric rating is shown until real reviews exist.

### Tab / Filter

**`category-tab`** + **`category-tab-active`** — The project gallery filter row ("All / Residential / Commercial / Renovation / Industrial"). Inactive: transparent background, `{colors.muted}` text in `{typography.caption}` uppercase. Active: `{colors.ink}` background, `{colors.on-dark}` text. Padding 10px × 14px, rounded `{rounded.sm}`.

### CTA / Footer

**`quote-band-dark`** — The pre-footer "READY TO START? GET YOUR QUOTE" band. Background `{colors.surface-dark}`, text `{colors.on-dark}`, rounded `{rounded.md}`, padding `{spacing.xxl}` (48px). Carries an h2 in `{typography.display-md}`, a sub-line in `{colors.on-dark-soft}` with the phone number as a large tel: link, a row of three `{component.stat-tile}`s, and `{component.button-primary}` "Request a quote".

**`footer`** — Graphite footer that closes every page. Background `{colors.surface-dark}` (#141414), text `{colors.on-dark-soft}`. 4-column link list at desktop covering Services / Projects / Company / Contact; the contact column carries the office address, phone, email and service hours; a bottom bar carries licence and company registration placeholders, a service-area line ("Serving [region] and surrounding areas"), privacy / terms links and copyright. Vertical padding 64px. The wordmark sits at the top-left in `{colors.on-dark}`.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#F2A900) for primary CTAs, the hazard band, stars and stat figures. Amber is the action colour and it always carries dark text.
- Use Barlow Condensed uppercase with +0.02em tracking for every display headline and card title. Pair with Barlow body. Never blur the boundary.
- Give key cards a 2px graphite border and the hard `3px 3px 0` offset shadow; give secondary cards a 1px hairline. Two tiers, no in-between.
- Use the hazard band once, under the hero. Its scarcity is what makes it read as a signal rather than wallpaper.
- Show real site photographs — framing, pours, finished rooms — flush to the tile edge with a graphite caption bar. Replace every placeholder before launch.
- Keep the phone number visible in the nav and the quote band as a tel: link; many visitors will call rather than type.
- Put licensing, insurance and safety badges above the fold on the services page and near every quote form — as placeholders until real numbers are supplied.
- End every page with the graphite footer carrying the service area and hours.

### Don't
- Don't use amber as text on light surfaces or as a link colour; it fails contrast. Links are graphite, underlined.
- Don't bold display beyond 700 or set it in lowercase. Condensed at 900 or in lowercase loses the signage voice.
- Don't round anything beyond `{rounded.md}` (4px) except avatars and the icon button. Rounded cards read as consumer-app, not contractor.
- Don't soften the offset shadow with blur or replace it with a stacked drop shadow. The hard offset is the system's only elevation.
- Don't repeat the hazard band on cards, dividers or buttons.
- Don't invent project names, review quotes, licence numbers, insurance limits, completion counts or prices; every such slot ships as a labelled placeholder.
- Don't show two amber buttons in the same viewport; one action per band.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav with the phone number kept visible as an icon button; hero h1 72→40px; hero-quote-card stacks below the hero copy; services 1-up; gallery 1-up; timeline vertical; packages 1-up; footer 4 cols → 1; a sticky bottom bar shows "Call" + "Request a quote" |
| Tablet | 768–1024px | Top nav stays horizontal but drops "Process"; nav-segment-group wraps; services 2-up; gallery 2-up; packages 2-up + 1 |
| Desktop | 1024–1440px | Full top nav; 3-up services; 3-up gallery mosaic; horizontal 6-step timeline; 3-up packages |
| Wide | > 1440px | Same as desktop with more outer breathing room; content caps at 1200px (gallery 1400px) |

### Touch Targets
- `{component.button-primary}` at minimum 48 × 48px; the sticky mobile bar buttons are 56px tall.
- `{component.button-icon-round}` at 40 × 40 — padded to a 44px hit area with surrounding margin.
- `{component.text-input}` height is 48px; selects and the file drop zone match.
- `{component.category-tab}` has 10 × 14 padding; effective tap area meets 44px with the row's vertical margin.

### Collapsing Strategy
- Top nav collapses to a hamburger at < 768px; the menu opens as a full-screen graphite sheet with the phone number and quote button at the bottom.
- Hero 7/5 grid collapses to single-column on mobile — h1 + lead + buttons first, then the quote card; the hazard band stays full width.
- Services and gallery grids reduce columns rather than scaling cards down; the gallery's feature tile becomes a normal 4:3 tile.
- The process timeline turns from a horizontal row into a vertical list with the 2px rule on the left.
- Package cards collapse 3 → 2 → 1; the featured graphite card stays first.
- Licence badges wrap to two per row on mobile.

### Image Behavior
- Project photos keep 4:3 at every breakpoint; the caption bar stays beneath and never overlays the photo.
- The hero photograph re-crops from 16:9 to 4:5 at mobile via `object-fit: cover` with the focal point set per image.
- Before/after pairs stack vertically on mobile with a 2px graphite divider between them.
- Crew avatars crop to circles at every breakpoint.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.service-card}`, `{component.package-card-featured}`).
2. Variants of an existing component (`-active`, `-disabled`, `-focused`, `-featured`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only (the pressed state collapses the offset shadow).
5. Display headlines stay Barlow Condensed 700/600, uppercase, +0.02em. Body stays Barlow 400/500. The pairing does not blur.
6. Graphite bands are the hero, the quote band and the footer. Don't add other dark surfaces casually.
7. When in doubt about emphasis: thicker border before bigger shadow; bigger condensed type before bolder condensed type.

## Known Gaps

- Site photographs, project names, locations, review quotes, stat figures, licence and insurance numbers and "from" prices are all placeholders; none may be invented.
- Accrediting-body logos require permission and are not included; the `license-badge` ships icon-only.
- The quote form's back-end (email routing, CRM, spam protection) is out of scope; only the chrome is specified.
- A service-area map is referenced in the footer and contact page but not tokenised; an embedded map or a static image with the postcode list both fit the system.
- Animation (gallery lightbox, before/after slider) is not in scope; keep motion under 200 ms and never animate the hazard band.
- Dark-mode variants are not defined; the graphite bands already provide the system's dark moments.

### Revision 2026-10-07: first build at /construction
- Built as its own site from the component list above: utility bar and 2px-ruled top nav with a graphite full-screen menu and a sticky mobile Call/Quote bar; hero-band with the hazard band; licence-badge trust row; 3-up service-card grid with the hard offset; category-tab project gallery with graphite caption bars; a before/after pair with a draggable divider; timeline-step row; package cards with the featured graphite card; review-card placeholders; quote-band-dark with stat tiles and the quote card (moved out of the hero at the owner's request); graphite footer.
- Display runs uppercase Barlow Condensed at +0.02em through the `--t-display-transform`/`--t-display-tracking` tokens; buttons are 4px, uppercase and tracked with the 2px ink border and the `3px 3px 0` offset that collapses to `1px 1px 0` when pressed.
- Motion: headline lines stamp down with a spring, the hazard band draws in, the photograph has scroll parallax; gallery tiles re-flow when filtered; stat figures count up when real. Native scrolling, no smooth-scroll library. No 3D: nothing in this business calls for it.
- Packages ("Design and build", "Renovation", "Maintenance contract") are shown with "Price on request" as the DESIGN.md specifies; the copy is a draft for the company to confirm.
