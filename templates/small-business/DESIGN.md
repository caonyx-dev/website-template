---
version: alpha
name: Small-Business-Template
description: A friendly, approachable design system for a local small business — a plumber, salon, cleaning service or workshop — on a soft white canvas with mint-tinted section bands, a warm green primary on pill-shaped buttons, and a warm orange accent for stars, "popular" badges and the sticky call bar. Outfit headlines at weight 600–700 over Open Sans body, 12–16 px rounded corners, light soft shadows, friendly icon tiles, short sections, and a mobile-first layout where "Call" and "Book" are never more than a thumb away. Visibly softer and rounder than an industrial trade site.

colors:
  primary: "#2F855A"
  primary-active: "#276749"
  primary-disabled: "#C6E6D3"
  ink: "#1A202C"
  body: "#2D3748"
  muted: "#5F6B7A"
  muted-soft: "#718096"
  hairline: "#E2E8F0"
  hairline-soft: "#EDF2F7"
  canvas: "#FFFFFF"
  surface-soft: "#F0FAF4"
  surface-card: "#FFFFFF"
  surface-strong: "#E2E8F0"
  surface-dark: "#1A202C"
  surface-dark-elevated: "#2D3748"
  on-primary: "#FFFFFF"
  on-dark: "#FFFFFF"
  on-dark-soft: "#CBD5E0"
  brand-accent: "#F6AD55"
  success: "#2F855A"
  warning: "#DD6B20"
  error: "#C53030"
  badge-orange: "#F6AD55"
  badge-mint: "#C6F6D5"
  badge-sky: "#BEE3F8"
  badge-peach: "#FEEBC8"

typography:
  display-xl:
    fontFamily: "Outfit, 'Segoe UI', Arial, sans-serif"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -1.2px
  display-lg:
    fontFamily: "Outfit, 'Segoe UI', Arial, sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: -0.8px
  display-md:
    fontFamily: "Outfit, 'Segoe UI', Arial, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: -0.5px
  display-sm:
    fontFamily: "Outfit, 'Segoe UI', Arial, sans-serif"
    fontSize: 26px
    fontWeight: 600
    lineHeight: 1.22
    letterSpacing: -0.3px
  title-lg:
    fontFamily: "Outfit, 'Segoe UI', Arial, sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.2px
  title-md:
    fontFamily: "Outfit, 'Segoe UI', Arial, sans-serif"
    fontSize: 19px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: 0
  title-sm:
    fontFamily: "'Open Sans', system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "'Open Sans', system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "'Open Sans', system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  caption:
    fontFamily: "'Open Sans', system-ui, -apple-system, sans-serif"
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  price-figure:
    fontFamily: "'Open Sans', system-ui, -apple-system, sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
    fontFeatureSettings: "'tnum' 1"
  button:
    fontFamily: "'Open Sans', system-ui, -apple-system, sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "'Open Sans', system-ui, -apple-system, sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
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
  section: 72px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 24px
    height: 48px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-disabled}"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 24px
    height: 48px
  button-call:
    backgroundColor: "{colors.brand-accent}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 24px
    height: 48px
  button-icon-round:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    size: 40px
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button}"
  text-link:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 68px
  nav-pill-group:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.pill}"
    padding: 6px
  hero-band:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: 72px
  hero-booking-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
  service-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 28px
  service-icon-tile:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    size: 52px
  work-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 0px
  review-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  plan-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  plan-card-featured:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px 16px
    height: 48px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.md}"
  category-tab:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.nav-link}"
    padding: 8px 16px
    rounded: "{rounded.pill}"
  category-tab-active:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.pill}"
  avatar-circle:
    backgroundColor: "{colors.badge-mint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 40px
  badge-pill:
    backgroundColor: "{colors.badge-peach}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  rating-stars:
    backgroundColor: transparent
    textColor: "{colors.brand-accent}"
    typography: "{typography.caption}"
  hours-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.price-figure}"
    rounded: "{rounded.lg}"
    padding: 24px
  faq-item:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.title-sm}"
    rounded: "{rounded.md}"
    padding: 16px 20px
  map-card:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 0px
  sticky-mobile-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    height: 72px
    padding: 12px 16px
  booking-band-mint:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-sm}"
    rounded: "{rounded.xl}"
    padding: 48px
  footer:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark-soft}"
    typography: "{typography.body-sm}"
    padding: 56px
---

## Overview

This is the design system for a local small business website — a plumber, a salon, a cleaning service, a repair workshop — whose visitors are mostly on a phone, often need the service soon, and want three things fast: what you do, whether to trust you, and how to call or book. The surface is a soft white canvas (`{colors.canvas}` — #FFFFFF) with mint-tinted bands (`{colors.surface-soft}` — #F0FAF4), a friendly green primary (`{colors.primary}` — #2F855A) on pill-shaped buttons, and a warm orange accent (`{colors.brand-accent}` — #F6AD55) for stars, "popular" badges and the Call button on the sticky bar. The system reads as warm and uncomplicated — rounded corners, short sections, one clear action per band.

Type voice splits cleanly into two roles: **Outfit** (display — rounded-geometric, weight 700 for the hero and section heads, 600 for titles, gentle negative tracking) and **Open Sans** (everything else — body, buttons, nav, captions, prices). Outfit feels friendly without being childish; Open Sans keeps paragraphs and forms unmistakably readable on small screens.

Component voltage comes from **plain, helpful blocks**: a services grid with icon tiles and "from" price placeholders, an opening-hours card that says whether you're open right now, a service-area map card, a reviews placeholder row with orange stars, an FAQ accordion, and a booking card that lives in the hero. Nothing is decorative for its own sake; every block answers a question a customer has.

The footer flips to `{colors.surface-dark}` (#1A202C) — the only dark surface — and on mobile a sticky bottom bar keeps "Call" and "Book" visible at all times. Between them, everything stays white-with-mint-bands.

**Key Characteristics:**
- White canvas with a green pill CTA (`{colors.primary}` — #2F855A, white text at ~4.6:1). Buttons are `{rounded.pill}`, 48 px tall, with weight-600 labels. Press state darkens to `{colors.primary-active}`.
- Outfit display at 700/600 with slight negative tracking — rounded, open, friendly. Never uppercase.
- White cards (`{colors.surface-card}`) with `{rounded.lg}` (16px) corners and a light soft shadow, usually sitting on a mint band so they lift gently.
- Orange `{colors.brand-accent}` appears only on stars, the "Most popular" badge, the sticky-bar Call button (with ink text) and small highlights — never as a text colour on white.
- Friendly icon tiles (`{component.service-icon-tile}` — 52px mint squares with a green line icon) open every service card.
- Short sections: `{spacing.section}` is 72px, tighter than a corporate site, so a phone user reaches the booking band quickly.
- Border radius is hierarchical: `{rounded.md}` (12px) for inputs and icon tiles, `{rounded.lg}` (16px) for cards, `{rounded.xl}` (20px) for the hero booking card and the booking band, `{rounded.pill}` for every button, tab and badge, `{rounded.full}` for avatars.

## Colors

### Brand & Accent
- **Primary Green** (`{colors.primary}` — #2F855A): The action colour. All primary CTAs, links, active tabs, icon strokes, the featured plan card. White text on it sits at ~4.6:1 — passing, but tight — so buttons never go below 15 px / 600. Press state `{colors.primary-active}` (#276749); disabled `{colors.primary-disabled}` (#C6E6D3) with `{colors.muted}` text.
- **Warm Orange** (`{colors.brand-accent}` — #F6AD55): The highlight. Rating stars, the "Most popular" badge, the sticky-bar Call button (always with `{colors.ink}` text, ~8.9:1) and the small underline flourish under the hero headline. Orange fails as text on white (~1.9:1) and is never used that way.
- **Badge Pastels** — `{colors.badge-mint}` (#C6F6D5), `{colors.badge-sky}` (#BEE3F8), `{colors.badge-peach}` (#FEEBC8), `{colors.badge-orange}` (#F6AD55). Used for service-category tags and avatar fills with ink text — never on CTAs.

### Surface
- **Canvas** (`{colors.canvas}` — #FFFFFF): The default page floor.
- **Surface Soft** (`{colors.surface-soft}` — #F0FAF4): The mint band — hero background, nav pill group, the booking band, icon tiles, the map card frame.
- **Surface Card** (`{colors.surface-card}` — #FFFFFF): Service, review, plan and hours cards; lifted by a soft shadow when sitting on mint.
- **Surface Strong** (`{colors.surface-strong}` — #E2E8F0): Disabled control borders and the hairline alternative.
- **Surface Dark** (`{colors.surface-dark}` — #1A202C): The footer background — the only dark surface on every page.
- **Surface Dark Elevated** (`{colors.surface-dark-elevated}` — #2D3748): Nested blocks inside the footer (the hours block, the newsletter field).
- **Hairline** (`{colors.hairline}` — #E2E8F0): 1px borders on inputs, FAQ items, the sticky bar's top edge.
- **Hairline Soft** (`{colors.hairline-soft}` — #EDF2F7): A barely-visible divider between white sections.

### Text
- **Ink** (`{colors.ink}` — #1A202C): All headlines and primary text (~16:1).
- **Body** (`{colors.body}` — #2D3748): Default running-text colour (~12:1).
- **Muted** (`{colors.muted}` — #5F6B7A): Secondary text — sub-headings, inactive tabs, footer body (~5.4:1).
- **Muted Soft** (`{colors.muted-soft}` — #718096): Tertiary text at 16 px+ only (~4.3:1) — "was" prices, helper text; never below 16 px.
- **On Primary / On Dark** (`{colors.on-primary}` / `{colors.on-dark}` — #FFFFFF): Text on green buttons and the dark footer.
- **On Dark Soft** (`{colors.on-dark-soft}` — #CBD5E0): Footer link rows (~11:1 on the footer).

### Semantic
- **Success** (`{colors.success}` — #2F855A): "Booking request sent", "Open now" status dot.
- **Warning** (`{colors.warning}` — #DD6B20): "Closing soon" status, limited-availability notes.
- **Error** (`{colors.error}` — #C53030): Validation errors on the booking form, "Closed" status.

## Typography

### Font Family
The system runs **Outfit** for display and titles and **Open Sans** for everything else. Outfit at weight 700 (hero, section heads) and 600 (titles) with gentle negative tracking feels modern and friendly — rounded terminals, open counters. Open Sans handles body, buttons, navigation, captions and prices; it is one of the most legible faces on small screens at 14–16 px. The fallback stack walks `'Segoe UI', Arial, sans-serif` for display and `system-ui, -apple-system, sans-serif` for body.

There is no monospace role. Prices, hours and phone numbers use Open Sans with tabular numerals (`{typography.price-figure}`) so columns in the hours card and price list align.

The split is functional:
- Outfit (display, 700/600, -0.2 to -1.2px tracking) — h1, h2, h3, card titles, plan names
- Open Sans (body + UI, 400–600, 0 tracking) — paragraphs, labels, buttons, nav, prices, hours

### Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
```
```css
:root {
  --font-display: Outfit, 'Segoe UI', Arial, sans-serif;
  --font-body: 'Open Sans', system-ui, -apple-system, sans-serif;
}
```

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 56px | 700 | 1.08 | -1.2px | Homepage h1 ("Friendly, reliable plumbing in [Town]") — Outfit |
| `{typography.display-lg}` | 40px | 700 | 1.12 | -0.8px | Section heads ("What we do", "What customers say") — Outfit |
| `{typography.display-md}` | 32px | 600 | 1.18 | -0.5px | Sub-section heads, the booking-band head — Outfit |
| `{typography.display-sm}` | 26px | 600 | 1.22 | -0.3px | Plan "from" prices, contact page heads — Outfit |
| `{typography.title-lg}` | 22px | 600 | 1.3 | -0.2px | Plan names — Outfit |
| `{typography.title-md}` | 19px | 600 | 1.35 | 0 | Service card titles, FAQ questions — Outfit |
| `{typography.title-sm}` | 16px | 600 | 1.4 | 0 | Small card titles, hours-card day labels — Open Sans |
| `{typography.body-md}` | 16px | 400 | 1.6 | 0 | Default running-text |
| `{typography.body-sm}` | 14px | 400 | 1.55 | 0 | Footer body, form help text |
| `{typography.caption}` | 13px | 600 | 1.4 | 0 | Badge labels, "from" labels, status pills |
| `{typography.price-figure}` | 15px | 600 | 1.5 | 0 | Prices, opening hours, phone numbers — tabular numerals |
| `{typography.button}` | 15px | 600 | 1.0 | 0 | Button labels |
| `{typography.nav-link}` | 15px | 600 | 1.4 | 0 | Top-nav menu items, tabs |

### Principles
Outfit is the brand voice — every display headline and card title uses it. Open Sans handles the supporting type. The boundary is strict: never put body copy in Outfit, never set a display headline in Open Sans. Headlines are sentence-case and conversational ("We'll be there within the hour" — a placeholder promise the owner must confirm).

Display weight is 700 for the two largest steps and 600 below — never 800 or 900; the brand is friendly, not loud. Body never exceeds 600, and 600 is reserved for buttons, nav, labels and prices.

### Note on Font Substitutes
Both faces are open-source and load from Google Fonts. If web fonts are unavailable, `'Segoe UI'` or Arial at 700 for display and the system UI face for body keep the layout intact; keep the pill buttons and rounded cards — the shapes carry the friendliness even when the fonts do not.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 72px.
- **Section padding:** `{spacing.section}` (72px) on desktop, 48px on mobile — deliberately short so a phone user reaches the booking band within a few swipes.
- **Card inner padding:** 28px for service cards; `{spacing.xl}` (32px) for plan cards; `{spacing.lg}` (24px) for review and hours cards.
- **Gutters:** `{spacing.lg}` (24px) between cards in 3-up grids; `{spacing.md}` (16px) on mobile; `{spacing.md}` inside footer columns.

### Grid & Container
- **Max content width:** ~1120px centred.
- **Hero:** 12-column grid with a 7/5 split — h1 + lead + button row left, `{component.hero-booking-card}` right, on the mint band. On mobile the booking card collapses to the two buttons and the sticky bar.
- **Services grid:** 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **Plans grid:** 3-up at desktop, 1-up at mobile (featured first).
- **Reviews:** 3-up at desktop, a horizontal swipe row at mobile.
- **Hours + map + contact:** a 3-column row at desktop (hours card, map card, contact form), stacked at mobile with hours first.
- **FAQ:** single column, max 720px.
- **Footer:** 3-column (About / Services / Contact & hours) at desktop, 1-up at mobile.

### Whitespace Philosophy
Short and generous: sections are 72px apart, cards are padded comfortably, but no band runs longer than one scroll on a phone. Every band has a single headline, one supporting line, and one action. Where a corporate site would add a table, this system adds a card; where a trade site would add a badge wall, this system adds one line of trust ("Fully insured · [Town] based · Family run" — placeholders).

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, the mint hero band |
| Soft hairline | 1px `{colors.hairline}` border | Inputs, FAQ items, the sticky bar's top edge |
| Card lift | `0 1px 2px rgba(26,32,44,0.04), 0 6px 16px rgba(26,32,44,0.06)` | Service, review, plan and hours cards — especially on mint bands |
| Raised | `0 2px 4px rgba(26,32,44,0.05), 0 12px 28px rgba(26,32,44,0.10)` | The hero booking card, the sticky mobile bar, dropdowns |
| Featured plan | `{colors.primary}` background, no shadow needed | The featured plan card — colour does the elevation work |

The elevation philosophy is **light and soft** — low-alpha shadows that make white cards float a few millimetres above mint, never heavy drops, never hard offsets. Hover is not documented; press states darken the primary and nothing else moves.

### Decorative Depth
- The hero headline carries a short orange underline flourish (a 6px-tall `{colors.brand-accent}` rounded bar under the key word) — the one playful mark in the system, used once.
- Avatar circles in the reviews row may carry pastel fills (`{colors.badge-mint}`, `{colors.badge-sky}`, `{colors.badge-peach}`) with initials when photos are not supplied.
- The map card frames an embedded map in a mint-bordered `{rounded.lg}` container; the map itself provides the only imagery-like depth on the contact band.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 6px | Checkbox corners, the status dot's square variant |
| `{rounded.sm}` | 8px | Dropdown items, small inline chips |
| `{rounded.md}` | 12px | Text inputs, icon tiles, FAQ items |
| `{rounded.lg}` | 16px | Content cards — service, review, plan, hours, work, map cards |
| `{rounded.xl}` | 20px | The hero booking card and the booking band |
| `{rounded.pill}` | 9999px | Every button, every tab, every badge |
| `{rounded.full}` | 9999px / 50% | Avatars, the round icon button, status dots |

### Photography Geometry
Work photos ("recent jobs", "before and after", the salon chair, the workshop bench) use 4:3 inside `{rounded.lg}` work cards with a short caption. The hero may use a 4:5 portrait of the owner or team on the right at desktop in place of the booking card when booking happens by phone only. Avatars are perfect circles at 40 px. Logos of review platforms or payment methods, if supplied, render at 20 px height in the footer.

## Components

### Top Navigation

**`top-nav`** — White nav bar pinned to the top of every page, 68px tall. Carries the business name as the wordmark (Outfit 700) at left, a short horizontal menu (Services, About, Reviews, FAQ, Contact) centre, and a right-side cluster with the phone number as `{component.button-text-link}` (tel: link with a phone icon) and "Book now" as `{component.button-primary}`. Menu items in `{typography.nav-link}` (Open Sans 15px / 600). An optional status chip ("Open now · until 6pm") sits beside the phone number, driven by the hours data.

**`nav-pill-group`** — A pill wrapper around 2–3 segments (e.g., "Homes / Businesses" on the services page). Background `{colors.surface-soft}` with 6px inner padding, rounded `{rounded.pill}`. The active segment renders as a white pill with `{colors.primary}` text and a soft shadow — the pill-in-pill treatment is the system's signature switch.

### Buttons

**`button-primary`** — The signature green pill. Background `{colors.primary}` (#2F855A), text `{colors.on-primary}`, type `{typography.button}` (Open Sans 15px / 600), padding 14px × 24px, height 48px, rounded `{rounded.pill}`. Active state `button-primary-active` shifts to `{colors.primary-active}` (#276749). Used for "Book now", "Get a quote", "Send message".

**`button-secondary`** — White pill with a green outline. Background `{colors.canvas}`, text `{colors.primary}`, 1.5px `{colors.primary}` border, same padding + height + radius. Used for "See all services", "View prices".

**`button-call`** — The orange Call pill. Background `{colors.brand-accent}` (#F6AD55), text `{colors.ink}` (dark text on orange for ~8.9:1), same padding + height + radius. Used in the sticky mobile bar and beside the primary in the hero ("Call [number]"). It is the only place orange becomes a button.

**`button-icon-round`** — 40 × 40px round icon button. Background `{colors.surface-soft}`, green icon. Used for the reviews carousel arrows, the FAQ chevrons and the "back to top" control.

**`button-text-link`** — Green text button, no background. Used for the phone number in the nav and "See all →" links under grids.

**`text-link`** — Inline body links in `{colors.primary}`, underlined.

### Cards & Containers

**`hero-band`** — Mint hero with a 7/5 grid: h1 + sub-headline + button row (`button-primary` "Book now" + `button-call` "Call us") on the left, `{component.hero-booking-card}` on the right. Vertical padding `{spacing.section}` (72px). A one-line trust row beneath the buttons in `{typography.caption}` ("Fully insured · Family run since [year] · [Town] & surrounding areas" — placeholders).

**`hero-booking-card`** — A white card holding the quick booking form: service (select), preferred date, name, phone, and a `{component.button-primary}` "Request a booking". Background `{colors.surface-card}`, rounded `{rounded.xl}` (20px), raised shadow. Title in `{typography.title-lg}` ("Book in under a minute"). If the business books by phone only, the card is replaced by a photo and the Call button becomes primary.

**`service-card`** — Used in the 3-up services grid. Background `{colors.surface-card}`, rounded `{rounded.lg}` (16px), card-lift shadow, inner padding 28px. Carries a `{component.service-icon-tile}` at top, a `{typography.title-md}` title, a two-line description in `{typography.body-md}`, a "from" price slot in `{typography.price-figure}` ("From $— · placeholder") and a "Book this →" text link.

**`service-icon-tile`** — The 52px mint square behind each service icon. Background `{colors.surface-soft}`, icon in `{colors.primary}` at 26px, rounded `{rounded.md}`.

**`work-card`** — The "recent work" photo card. Background `{colors.surface-card}`, rounded `{rounded.lg}`, no padding: a 4:3 photo flush to the top, then a caption row with the job type as a `{component.badge-pill}` and a one-line note in `{typography.body-sm}`. Photos and notes are placeholders.

**`review-card`** — Used in the reviews placeholder row. Background `{colors.surface-card}`, rounded `{rounded.lg}`, padding `{spacing.lg}` (24px), card-lift shadow. Top row carries a `{component.avatar-circle}` + first name + `{component.rating-stars}`; below sits the quote in `{typography.body-md}`. Ships with "Review placeholder — replace with a real review or an embedded review feed" copy; the platform badge is added only when a feed is connected.

**`plan-card`** — Standard price-plan card ("Standard clean", "Deep clean", "Monthly plan"). Background `{colors.surface-card}`, rounded `{rounded.lg}`, padding `{spacing.xl}` (32px), card-lift shadow. Carries the plan name in `{typography.title-lg}`, a "from" price in `{typography.display-sm}` (placeholder until supplied), a short checklist in `{typography.body-md}`, and a `{component.button-primary}` at the bottom.

**`plan-card-featured`** — The recommended plan. Background flips to `{colors.primary}`, text inverts to `{colors.on-primary}`; the CTA becomes a white pill with green text; a `{component.badge-pill}` in `{colors.badge-orange}` reads "Most popular". The green surface IS the featured signal.

**`hours-card`** — The opening-hours block. Background `{colors.surface-card}`, rounded `{rounded.lg}`, padding `{spacing.lg}`. Seven rows of day label (`{typography.title-sm}`) and hours (`{typography.price-figure}`, tabular), today's row highlighted with a `{colors.surface-soft}` fill, and a status chip ("Open now" green / "Closed" `{colors.error}`) at the top. Hours must match the business's Google Business Profile exactly.

**`map-card`** — The service-area block. Background `{colors.surface-soft}`, rounded `{rounded.lg}`, no padding: an embedded map or a static map image at 4:3, with a caption row listing the towns or postcodes served (placeholders).

**`faq-item`** — One accordion row. Background `{colors.canvas}`, 1px `{colors.hairline}` border, rounded `{rounded.md}`, padding 16px × 20px. Question in `{typography.title-md}` with a round chevron button at the right; answer in `{typography.body-md}` `{colors.body}`.

### Inputs & Forms

**`text-input`** — Standard text input for booking and contact forms. Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.md}` (12px), padding 12px × 16px, height 48px, 1px `{colors.hairline}` border. Labels sit above in `{typography.caption}`. Phone fields use `type="tel"` and date fields use the native picker so mobile keyboards behave.

**`text-input-focused`** — Focus state. Border shifts to `{colors.primary}` with a 3px `{colors.surface-soft}` ring. Error state swaps the border to `{colors.error}` with a `{typography.body-sm}` message beneath.

### Tags / Badges

**`badge-pill`** — Small pill label for service categories ("Emergency", "Homes", "Businesses") and the "Most popular" marker. Background `{colors.badge-peach}` or another pastel (`{colors.badge-mint}`, `{colors.badge-sky}`) — or `{colors.badge-orange}` for "Most popular" — with `{colors.ink}` text, type `{typography.caption}`, rounded `{rounded.pill}`, padding 4px × 12px.

**`avatar-circle`** — 40px diameter, rounded `{rounded.full}`. Either holds a photo or a pastel fill with initials in `{typography.caption}`.

**`rating-stars`** — Inline star row in `{colors.brand-accent}` (#F6AD55) beside review placeholders. Stars render at 16px; an aggregate score appears only when a real review feed is connected.

### Tab / Filter

**`category-tab`** + **`category-tab-active`** — Used inside the nav-pill-group and the services filter ("All / Homes / Businesses / Emergency"). Inactive: transparent background, `{colors.muted}` text. Active: `{colors.canvas}` background, `{colors.primary}` text, soft shadow inside the pill-group wrapper. Padding 8px × 16px, rounded `{rounded.pill}`.

### CTA / Footer

**`sticky-mobile-bar`** — The bottom bar fixed on screens under 768px. Background `{colors.canvas}`, 1px `{colors.hairline}` top border, raised shadow, height 72px, padding 12px × 16px. Two full-width pills side by side: `{component.button-call}` "Call" (tel: link) and `{component.button-primary}` "Book". It hides while a form field is focused so it never covers the keyboard's submit area.

**`booking-band-mint`** — The pre-footer "Ready when you are" band. Background `{colors.surface-soft}`, rounded `{rounded.xl}` (20px), padding `{spacing.xxl}` (48px). Carries an h2 in `{typography.display-sm}`, a sub-line with the phone number in `{typography.price-figure}`, and `{component.button-primary}` + `{component.button-call}` centred.

**`footer`** — Dark footer that closes every page. Background `{colors.surface-dark}` (#1A202C), text `{colors.on-dark-soft}`. Three columns at desktop: About (short blurb + trust line placeholders), Services (links), Contact & hours (address, phone, email, a compact hours list in `{typography.price-figure}`). A bottom bar carries the service-area line, privacy link, business registration placeholder and copyright. Vertical padding 56px. The wordmark sits at the top-left in `{colors.on-dark}`.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#2F855A) for primary CTAs, links, active states and icon strokes. Green is the "go" colour; keep white text on it at 15 px / 600 or larger.
- Use Outfit for every display headline and card title, sentence-case and conversational. Pair with Open Sans body. Never blur the boundary.
- Make every button a pill, every card 16px-rounded, every input 12px-rounded. The roundness is the brand's warmth.
- Keep "Call" and "Book" within a thumb's reach: in the nav, in the hero, in the booking band, and on the sticky mobile bar.
- Mirror the Google Business Profile exactly — name, address, phone, hours, categories — in the hours card, the footer and the page's structured data.
- Use orange only for stars, the "Most popular" badge, the Call pill (with ink text) and the single hero underline.
- Keep sections short: one headline, one line, one action, then move on.
- End every page with the dark footer carrying hours and the service area.

### Don't
- Don't use orange or any pastel as text on white; they fail contrast. Text is ink, body or muted; links are green.
- Don't bold display beyond 700 or set it uppercase. The voice is friendly, not shouty.
- Don't square off cards or buttons; a 4px-radius card reads as a different (industrial) business.
- Don't add heavy shadows or hard offset shadows; card-lift and raised are the only two levels.
- Don't invent prices, reviews, star ratings, response-time promises, "since [year]" claims or insurance statements; every such slot ships as a labelled placeholder.
- Don't put dark surfaces anywhere except the footer; the system stays light so it feels open on a phone.
- Don't let the sticky bar cover form fields or the footer's phone link; hide it on focus and on the contact section.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav with the phone icon kept visible; hero h1 56→34px; hero-booking-card collapses to its two buttons (the form moves to the contact section); services 1-up; reviews become a swipe row; plans 1-up; hours/map/contact stack; sticky-mobile-bar appears; footer 3 cols → 1 |
| Tablet | 768–1024px | Top nav stays horizontal; nav-pill-group wraps; services 2-up; plans 2-up + 1; hours/map side by side, contact below |
| Desktop | 1024–1440px | Full top nav; 3-up services; 3-up plans; 3-column hours/map/contact |
| Wide | > 1440px | Same as desktop with more outer breathing room; max content width caps at 1120px |

### Touch Targets
- `{component.button-primary}` and `{component.button-call}` at minimum 48 × 48px; sticky-bar pills are 48px tall with 12px margins.
- `{component.button-icon-round}` at 40 × 40 — padded to a 44px hit area with surrounding margin.
- `{component.text-input}` height is 48px; selects and date fields match.
- `{component.faq-item}` is tappable across its full width, not just the chevron.

### Collapsing Strategy
- Top nav collapses to a hamburger at < 768px; the menu opens as a full-screen white sheet with the phone number and "Book now" at the bottom.
- The hero's 7/5 grid collapses to single-column — h1 + sub-head + buttons first, then the trust line; the booking form moves to the contact band to keep the hero short.
- Services and plans grids reduce columns rather than scaling cards down.
- The reviews grid becomes a horizontal snap-scroll row with 85 %-width cards.
- Hours, map and contact stack in that order — hours first because "are you open?" is the most common mobile question.
- The footer's hours list stays visible at every breakpoint.

### Image Behavior
- Work photos keep 4:3 at every breakpoint inside `{rounded.lg}` cards.
- The optional hero portrait (4:5) drops below the hero copy on mobile at 16:9 crop, or is hidden if the booking buttons would fall below the fold.
- Avatar photos crop to circles at every breakpoint.
- The embedded map keeps 4:3 and remains scroll-locked until tapped so page scrolling is not hijacked.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.service-card}`, `{component.sticky-mobile-bar}`).
2. Variants of an existing component (`-active`, `-disabled`, `-focused`, `-featured`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. Display headlines stay Outfit 700/600 with slight negative tracking. Body stays Open Sans 400/600. The pairing does not blur.
6. The dark footer is the only dark surface. Don't add other dark cards casually.
7. When in doubt about emphasis: shorter section before bigger headline; one more pill button is never the answer.

## Known Gaps

- Prices, reviews, ratings, work photos, the owner portrait, trust-line claims and response promises are all placeholders; none may be invented.
- The booking form's back-end (calendar, SMS confirmation, email routing, spam protection) is out of scope; only the chrome is specified. A third-party booking widget may replace `{component.hero-booking-card}` if it inherits the tokens.
- The "Open now" status chip needs the hours data in a machine-readable form (structured data or a small JSON file); the logic is not specified here.
- The map card assumes an embedded map; a static image fallback with the service-area list is acceptable.
- Multilingual toggles for communities where a second language is common are not tokenised; the nav has room for one at the right.
- Animation (FAQ expand, reviews snap-scroll) is not in scope; keep motion under 200 ms and respect reduced-motion preferences.

---

## Revision — 2026-10-08 — Homepage built after the cleaning-service demo

Built at the owner's request after `v4sites.animation-addons.com/cleaning-service`, following that page's composition, geometry and devices, and keeping only this template's own palette and typefaces. Geometry was read from the live page's computed styles rather than estimated.

### Measured from the reference

| Property | Reference | Here |
|---|---|---|
| Container | 1280px | 1280px |
| Hero display | 115px / 500 / line-height 103.5px (0.9) | `clamp(38px, 6.6vw, 92px)` Outfit **700**, line-height 0.95 |
| Section display | 72px / 500 / line-height 61.9px (0.86) | `clamp(30px, 4.4vw, 60px)` Outfit 700, line-height 0.98 |
| Card title | 32px / 500 | `clamp(22px, 2.2vw, 30px)` Outfit 600 |
| Body | 16px / 25.6px | 15–16px / 1.6 Open Sans |
| Buttons | **0px radius**, 60px tall, 18×30px padding, 16px / 500 | **pills**, 48 / 56px tall — see below |
| Tinted band | `#EEF8FF` pale blue | `{colors.surface-soft}` `#F0FAF4` mint |
| Accent | `#FFD541` yellow, used on every call to action | `{colors.primary}` green on the pills, `{colors.brand-accent}` orange kept to the Call pill and the offer bar |

### Rules this revision overrides

| Rule above | What was built | Why |
|---|---|---|
| `{component.hero-band}` is a **mint** hero with a 7/5 grid, and *"don't put dark surfaces anywhere except the footer"* | A full-bleed photographic hero under an ink scrim, with the booking card kept at the right as the file requires | The reference's hero is a photograph of someone doing the work, which is the single most persuasive thing a local service can show. The rest of the page stays white-with-mint-bands, and the footer is still the only flat dark surface. |
| Orange appears only on stars, badges, the Call pill and small highlights | One full-bleed orange offer bar above the footer | The reference runs a scrolling offer bar there, and it is the one place a small business says "book this week". It carries ink text, which is the contrast rule the file actually cares about. |
| `{typography.display-xl}` at 56px | A hero tier up to 92px and a section tier up to 60px, at the 0.95/0.98 leading the reference uses | At 56px the page reads as a brochure; the reference's scale is what makes it feel like a shopfront. Weight stays at 700 and the case stays sentence — both rules kept. |

### Deliberately **not** copied from the reference

- **Square buttons.** The reference sets every button to a 0px radius. This file is explicit that "a 4px-radius card reads as a different (industrial) business", and the roundness *is* the brand's warmth. Every button here is a pill.
- **The "4.9/5 Rating · 120k+ active users" card.** It is an invented rating and an invented user count, both of which the Don'ts forbid. The card in that position carries insurance, DBS and registration slots instead — which is what a local customer actually checks.
- **Star ratings anywhere.** The review row ships as three labelled placeholders with no stars, and a visible chip says an aggregate score may only appear once a real review feed is connected.

### Added, and not from the reference

The reference is a demo with no business behind it. Three things this file requires were built from scratch: the **opening-hours card** with today's row highlighted and an "Open now" chip in the header driven from it, the **service-area card**, and the **sticky mobile Call/Book bar** — which hides itself whenever a form field has focus, so it can never sit on top of the thing someone is filling in.

### Accessibility notes

- Green is 2.3:1 on the ink footer and over the hero photograph, so both carry `.sb-on-dark`, which swaps `--t-focus` to white.
- Orange is never a text colour on white. It appears as a fill under ink text only — the Call pill and the offer bar.
- "Open now" and today's row depend on the reader's clock, so they resolve after hydration rather than during render; until then the chip is simply absent, and the hours table is still complete.
- The FAQ is built on native `<details>`, so it opens with JavaScript off and two answers can be compared side by side.

### Corrections made after the guidelines review

Three of this file's own values do not meet the contrast floor for a control, so the build departs from them and says so here rather than silently:

| This file says | Built as | Why |
|---|---|---|
| `{component.text-input}` has a 1px `{colors.hairline}` border | 1px `{colors.muted-soft}` | `#E2E8F0` on `#FFFFFF` is 1.2:1. A control edge has to reach 3:1, or the field reads as having no edge at all. |
| Placeholders in `{colors.muted-soft}` | `{colors.muted}` | `#718096` on white is 4.0:1 — under the 4.5:1 that placeholder text needs. |
| The step chip in `{colors.primary}` on `{colors.surface-soft}` | `{colors.primary-active}` | Green on mint is 4.3:1 at 13px, which fails. The darker green on the same tint clears it. |

**The "Open now" chip refuses to guess.** It shows nothing at all while the hours are still the bracketed placeholders, nothing when a row cannot be parsed, and nothing when the time zone is unreadable — a wrong "Open now" costs a customer a wasted journey, and this file's rule that the hours must mirror the Google Business Profile exactly only works if the chip stays quiet until they do. It reads the clock in the business's own `timeZone` rather than the reader's, and handles a span that closes after midnight.

**Three promises were unlabelled and are now bracketed**: "Fully insured" in the hero trust row, the "employed, insured and reference-checked" line in the about copy, and the no-charge re-clean in step three. The offer bar shipped a concrete money promise with no terms and no end date; it is now an empty bracketed slot with a note. The page labels its prices, reviews, figures and credentials — these were the only commercial claims that escaped it.
