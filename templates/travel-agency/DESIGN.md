---
version: alpha
name: Travel-Agency-Template
description: An airy, bright, aspirational website for a travel agency and tour operator, set on a cool white canvas (#FFFFFF) with a sky-tinted soft surface (#F0F7FC), deep navy ink (#0C1A2B), and a bright azure brand colour (#0284C7) that carries links, the enquiry orb, icons, and the active nav state, with a deeper azure (#0369A1) under solid buttons for contrast and sunset orange (#F97316) reserved for "from" price badges and highlights. Type pairs DM Serif Display (400 only) for large, confident headlines with DM Sans (400/500/700) for everything else. Corners are soft (16-20px), destination and package cards are large photographs with gradient overlays, itineraries run as a day-by-day timeline, a trust bar holds licensing placeholders, and the enquiry form asks for dates and travellers. Shadows are light and airy, lifting cards gently off the white canvas.

colors:
  primary: "#0284C7"
  primary-deep: "#0369A1"
  primary-active: "#075985"
  primary-disabled: "#BAE6FD"
  primary-error-text: "#B91C1C"
  primary-error-text-hover: "#991B1B"
  accent: "#F97316"
  accent-soft: "#FFEDD5"
  ink: "#0C1A2B"
  body: "#2A3B4F"
  muted: "#5B6B7D"
  muted-soft: "#8A99A8"
  hairline: "#D9E4EE"
  hairline-soft: "#E8F0F7"
  border-strong: "#B3C3D2"
  canvas: "#FFFFFF"
  surface-soft: "#F0F7FC"
  surface-card: "#FFFFFF"
  surface-strong: "#E1EEF7"
  on-primary: "#FFFFFF"
  on-dark: "#FFFFFF"
  on-accent: "#0C1A2B"
  legal-link: "#0369A1"
  scrim: "#0C1A2B"

typography:
  display-xl:
    fontFamily: "'DM Serif Display', Georgia, 'Times New Roman', serif"
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: -0.5px
  display-lg:
    fontFamily: "'DM Serif Display', Georgia, 'Times New Roman', serif"
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.3px
  display-md:
    fontFamily: "'DM Serif Display', Georgia, 'Times New Roman', serif"
    fontSize: 30px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0
  display-sm:
    fontFamily: "'DM Serif Display', Georgia, 'Times New Roman', serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  title-md:
    fontFamily: "'DM Serif Display', Georgia, 'Times New Roman', serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0
  title-sm:
    fontFamily: "'DM Sans', system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  hero-display:
    fontFamily: "'DM Serif Display', Georgia, 'Times New Roman', serif"
    fontSize: 72px
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: -1px
  body-md:
    fontFamily: "'DM Sans', system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "'DM Sans', system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "'DM Sans', system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.29
    letterSpacing: 0
  caption-sm:
    fontFamily: "'DM Sans', system-ui, -apple-system, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.23
    letterSpacing: 0
  badge:
    fontFamily: "'DM Sans', system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: 0
  micro-label:
    fontFamily: "'DM Sans', system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: 0.4px
    textTransform: uppercase
  uppercase-tag:
    fontFamily: "'DM Sans', system-ui, -apple-system, sans-serif"
    fontSize: 10px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.6px
    textTransform: uppercase
  button-md:
    fontFamily: "'DM Sans', system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  button-sm:
    fontFamily: "'DM Sans', system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.29
    letterSpacing: 0
  link:
    fontFamily: "'DM Sans', system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0
  nav-link:
    fontFamily: "'DM Sans', system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0

rounded:
  none: 0px
  xs: 6px
  sm: 10px
  md: 16px
  lg: 20px
  xl: 28px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  base: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 14px 28px
    height: 52px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-disabled}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 13px 27px
    height: 52px
  button-tertiary-text:
    backgroundColor: transparent
    textColor: "{colors.primary-deep}"
    typography: "{typography.button-md}"
  button-pill-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"
    padding: 10px 20px
  enquiry-orb:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    height: 52px
  icon-button-circle:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    height: 36px
  icon-button-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    height: 40px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 80px
  nav-tab-active:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"
  nav-tab-inactive:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.nav-link}"
  enquiry-bar-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: 14px 24px
    height: 68px
  enquiry-field-segment:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    padding: 8px 24px
  region-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.button-sm}"
  region-chip-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"
  destination-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
  destination-card-photo:
    rounded: "{rounded.lg}"
  package-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.md}"
  destination-link-block:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
  trust-bar:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    padding: 20px 24px
  price-from-badge:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.badge}"
    rounded: "{rounded.full}"
    padding: 6px 12px
  duration-tag:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.uppercase-tag}"
    rounded: "{rounded.full}"
    padding: 4px 10px
  itinerary-day:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: 20px 0
  inclusions-row:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: 12px 0
  faq-row:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
    padding: 16px 0
  guide-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 24px
  enquiry-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
  date-picker-day:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
  date-picker-day-selected:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
  travellers-stepper:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    height: 40px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 14px 16px
    height: 56px
  footer-light:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: 64px 80px
  footer-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
  legal-band:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.muted}"
    typography: "{typography.caption-sm}"
---

## Overview

This is the design language for a **travel agency / tour operator website** — the site a leisure traveller opens in research mode, often across several evenings on a laptop and a phone, to compare destinations, read a day-by-day itinerary, check what a package includes, and finally send an enquiry or request a tailored itinerary; and the site a group organiser opens to see whether the operator can handle twelve people. The base canvas is **bright cool white** (`{colors.canvas}` — #FFFFFF) with a sky-tinted soft surface (`{colors.surface-soft}` — #F0F7FC) for alternating bands, deep navy ink (`{colors.ink}` — #0C1A2B) for headlines and body, and a single voltage of **bright azure** (`{colors.primary}` — #0284C7) carrying links, icons, the enquiry orb, and the active nav state. A deeper azure (`{colors.primary-deep}` — #0369A1) sits under solid buttons so white labels stay above 4.5:1. **Sunset orange** (`{colors.accent}` — #F97316) is the second brand colour and it has one job: "from" price badges and the occasional highlight.

Type pairs **DM Serif Display** — a single-weight, high-contrast serif — for every headline and card title against **DM Sans** for body, labels, buttons, and navigation. Because DM Serif Display ships only weight 400, the display scale is sized up (hero 72px, page h1 56px) so the serif's contrast carries hierarchy without any bold. DM Sans runs 400 for body, 500 for buttons and nav, and 700 for small labels and card sub-titles.

The shape language is **soft and generous**. Buttons are 10px radius (`{rounded.sm}`), package cards and the enquiry card are 16px (`{rounded.md}`), destination photo cards are 20px (`{rounded.lg}`), the enquiry bar is fully pill-shaped (`{rounded.full}`), and price badges, region chips, and the enquiry orb are pills or circles. There is no hard corner anywhere except the body grid — the page should feel like clear sky and open water.

**Key Characteristics:**
- Single brand colour with a working shade: `{colors.primary}` (#0284C7) for links, icons, the orb, and large text; `{colors.primary-deep}` (#0369A1) for solid button fills and body-size link text. Most pages are 90% white + navy with one or two azure moments and one orange price badge per card.
- Serif-led headlines at one weight: DM Serif Display 400 everywhere, sized rather than weighted. DM Sans at 400/500/700 for everything else.
- Three-section top nav: Destinations, Packages, Tailor-made — each a text tab with a 2px ink underline when active (`{component.nav-tab-active}`). No icons in the nav; the photography below does the inviting.
- Pill-shaped enquiry bar: white surface, fully rounded (`{rounded.full}`), divided by 1px hairlines into Where / When / Travellers segments, terminated by a round azure orb (`{component.enquiry-orb}`).
- Destination cards are photo-first: 4:5 photographs with `{rounded.lg}` clipping and a bottom gradient overlay (`linear-gradient(180deg, rgba(12,26,43,0) 40%, rgba(12,26,43,0.75) 100%)`) carrying the destination name in white serif and a "from" price badge in orange.
- Itinerary day-by-day timeline: a vertical rule with numbered azure nodes, each day a title in serif and a paragraph in DM Sans, inclusions listed with check icons beneath.
- Trust bar: a soft-surface band under the hero holding licensing / bonding placeholders (an ATOL- or IATA-style logo slot, "Established —", "Fully bonded") — all placeholders until the operator supplies real credentials.
- Elevation is light and airy: a single soft blue-tinted shadow tier lifts cards on hover and holds the enquiry bar and sticky enquiry card at rest.
- 8px base spacing system, with major sections at `{spacing.section}` (96px) — more open than a marketplace, because each destination band is a single aspirational image and one headline.

## Colors

### Brand & Accent
- **Azure** (`{colors.primary}` — #0284C7): The brand colour. Used for the enquiry orb, icons, timeline nodes, headline highlights at 24px and above, and the hover state of links. At 4.1:1 on white it clears large-text contrast but not body-text contrast, so body-size links and solid buttons use the deep shade below.
- **Azure Deep** (`{colors.primary-deep}` — #0369A1): The working shade. Solid primary button fill (white label at 5.9:1), body-size inline links, the selected date in the picker, and the active region chip hover. Visually it still reads as the same blue.
- **Azure Active** (`{colors.primary-active}` — #075985): The press / pointer-down variant — one step darker. Used on `{component.button-primary-active}`.
- **Azure Disabled** (`{colors.primary-disabled}` — #BAE6FD): A pale sky tint used on disabled CTAs (e.g. Send enquiry before required fields are filled).
- **Sunset Orange** (`{colors.accent}` — #F97316): The second brand colour. Reserved for `{component.price-from-badge}`, the "Tailor-made" pill CTA, and a single highlight word in a hero headline. Orange always carries navy ink text (`{colors.on-accent}`, 6.2:1) — never white, which fails at 2.8:1.
- **Orange Soft** (`{colors.accent-soft}` — #FFEDD5): A pale tint for the background of a "Special offer" strip or a highlighted FAQ row.

### Surface
- **Canvas** (`{colors.canvas}` — #FFFFFF): The default page floor for every public page. Bright, cool, and clean — the photography supplies all the warmth.
- **Surface Soft** (`{colors.surface-soft}` — #F0F7FC): The sky-tinted fill — used on the trust bar, alternating section bands, the footer, disabled fields, and the FAQ accordion background.
- **Surface Card** (`{colors.surface-card}` — #FFFFFF): Package cards, guide cards, and the enquiry card — white on white, separated by the airy shadow and a 1px hairline.
- **Surface Strong** (`{colors.surface-strong}` — #E1EEF7): Slightly heavier fill — round icon-button surface (carousel arrows, the mobile menu toggle), the date-range lozenge in the picker.

### Hairlines & Borders
- **Hairline** (`{colors.hairline}` — #D9E4EE): The default 1px border tone — enquiry bar segment dividers, card borders, FAQ row separators, footer column splitters.
- **Hairline Soft** (`{colors.hairline-soft}` — #E8F0F7): A lighter divider used between inclusions rows and inside long itinerary pages.
- **Border Strong** (`{colors.border-strong}` — #B3C3D2): A heavier stroke used on secondary-button outlines and form inputs after focus.

### Text
- **Ink** (`{colors.ink}` — #0C1A2B): The dominant text colour on light surfaces. Headlines, body paragraphs, nav links, prices. A deep navy rather than black — it keeps the page cool and lets the azure feel related.
- **Body** (`{colors.body}` — #2A3B4F): Running text inside itineraries and package descriptions where ink would feel heavy across many paragraphs.
- **Muted** (`{colors.muted}` — #5B6B7D): Sub-titles inside destination link blocks ("Island hopping", "City breaks"), inactive nav tabs, trust-bar text, "View all destinations" links.
- **Muted Soft** (`{colors.muted-soft}` — #8A99A8): Disabled text and placeholder copy. Used very sparingly.
- **On Primary** (`{colors.on-primary}` — #FFFFFF): White text on azure-deep CTAs and on the orb.
- **On Dark** (`{colors.on-dark}` — #FFFFFF): White text over photograph gradients on destination cards and the hero.
- **On Accent** (`{colors.on-accent}` — #0C1A2B): Navy text on orange price badges and the orange pill CTA.

### Semantic
- **Error** (`{colors.primary-error-text}` — #B91C1C): Inline error text for enquiry form validation. A clear red, distinct from the orange accent.
- **Error Hover** (`{colors.primary-error-text-hover}` — #991B1B): Darkens on link hover.
- **Legal Link** (`{colors.legal-link}` — #0369A1): Inline links inside legal copy (Booking conditions, Privacy, Cancellation policy) — the deep azure for contrast at small sizes.

### Scrim
- **Scrim** (`{colors.scrim}` — #0C1A2B at 50% opacity): The modal backdrop tone — date picker, enquiry dialog, gallery lightbox — and the base colour of the gradient overlay on destination cards. Stored as the base hex; opacity is applied at render time.

## Typography

### Font Family
The system pairs two families. **DM Serif Display** carries every display and title role — the hero line, page headlines, destination names on cards, itinerary day titles. **DM Sans** carries body, captions, buttons, labels, nav links, inputs, and the small bold sub-titles (`{typography.title-sm}`). Fallbacks walk `Georgia, 'Times New Roman', serif` for the display face and `system-ui, -apple-system, sans-serif` for the body face. There is no mono role; prices use DM Sans with `font-variant-numeric: tabular-nums`.

The two families were drawn to sit together, so the pairing needs no optical compensation. The serif gives the destination names the feel of a printed travel journal; the sans keeps itineraries, inclusions, and the enquiry form crisp and quick to scan.

### Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
```
```css
:root {
  --font-display: 'DM Serif Display', Georgia, 'Times New Roman', serif;
  --font-body: 'DM Sans', system-ui, -apple-system, sans-serif;
}
```

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.hero-display}` | 72px | 400 | 1.02 | -1px | Homepage hero line over the photograph ("Where to next?") |
| `{typography.display-xl}` | 56px | 400 | 1.08 | -0.5px | Page h1 (destination page, package page) |
| `{typography.display-lg}` | 40px | 400 | 1.15 | -0.3px | Section headlines ("Popular this season", "How booking works") |
| `{typography.display-md}` | 30px | 400 | 1.2 | 0 | Section heads inside a package page ("Itinerary", "What's included") |
| `{typography.display-sm}` | 24px | 400 | 1.25 | 0 | Itinerary day titles ("Day 3 — Into the highlands") |
| `{typography.title-md}` | 20px | 400 | 1.3 | 0 | Destination names on cards, package card titles |
| `{typography.title-sm}` | 16px | 700 | 1.25 | 0 | Destination link block titles, FAQ questions, footer column heads |
| `{typography.body-md}` | 16px | 400 | 1.6 | 0 | Default running text — itinerary paragraphs, package overview |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Card meta lines, durations, departure months, inclusions |
| `{typography.caption}` | 14px | 500 | 1.29 | 0 | Enquiry bar segment labels ("Where", "When", "Travellers") |
| `{typography.caption-sm}` | 13px | 400 | 1.23 | 0 | Footer legal line, price footnotes ("per person, based on two sharing") |
| `{typography.badge}` | 12px | 700 | 1.18 | 0 | "From £—" price badge text |
| `{typography.micro-label}` | 12px | 700 | 1.33 | 0.4px (uppercase) | Eyebrow labels above headlines ("Featured destination") |
| `{typography.uppercase-tag}` | 10px | 700 | 1.25 | 0.6px (uppercase) | Duration tags ("10 nights"), "Small group" tags |
| `{typography.button-md}` | 16px | 500 | 1.25 | 0 | Primary CTA button labels ("Enquire now", "Request itinerary") |
| `{typography.button-sm}` | 14px | 500 | 1.29 | 0 | Pill button labels, region chips |
| `{typography.link}` | 14px | 500 | 1.43 | 0 | Inline body links |
| `{typography.nav-link}` | 16px | 500 | 1.25 | 0 | Top nav labels (Destinations, Packages, Tailor-made) |

### Principles
Display weight is fixed at 400 — DM Serif Display ships no other weight — so hierarchy is carried entirely by size and by the serif / sans contrast. Where a source scale might have used 500–700 for headlines, this system raises the size one step instead; the hero at 72px / 400 reads as confident without any bold.

The single typographically loud moment is the **hero line** (`{typography.hero-display}`) over the opening photograph. Everywhere else the photography and the orange price badge carry hierarchy; a destination card with a 20px serif name over a gradient is louder than any headline beneath it.

DM Sans 700 is used only at 16px and below (`{typography.title-sm}`, badges, micro-labels) — never for headlines, which would compete with the serif.

### Note on Font Substitutes
If DM Serif Display is unavailable, **Playfair Display** at 400 or **Libre Caslon Display** are the closest open substitutes; keep the weight at 400. If DM Sans is unavailable, **Manrope** or **Work Sans** transfer cleanly. Adjust serif headlines down by ~4% in size under substitution — DM Serif Display has a large x-height and most substitutes will look bigger.

## Layout

### Spacing System
- **Base unit:** 4px (with 2px micro-step).
- **Tokens:** `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.base}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **Section padding (vertical):** `{spacing.section}` (96px) for major page bands — open and aspirational; each band is a single idea (a region, a season, a way of travelling).
- **Card internal padding:** `{spacing.lg}` (24px) for `{component.package-card}` body, `{component.guide-card}`, and `{component.enquiry-card}`; `{spacing.base}` (16px) inside the destination-card gradient overlay; `{spacing.sm}` (8px) between badge and title.
- **Gutters:** `{spacing.lg}` (24px) between destination and package cards; `{spacing.xl}` (32px) between footer columns; `{spacing.sm}` (8px) between region chips.

### Grid & Container
- **Max content width:** ~1280px centred on the homepage and destination pages. Package detail pages cap closer to 1120px to keep the itinerary column and the sticky enquiry rail readable.
- **Destination grid:** 3-up at desktop (4:5 photo cards), with a featured 2-column-wide card allowed at the top of the grid.
- **Package grid:** 3-up at desktop; each card is a 3:2 photograph with a white body beneath.
- **Package detail:** 2-column with the itinerary timeline, inclusions, and FAQs on the left (~62% width) and a sticky enquiry card (`{component.enquiry-card}`) on the right (~34%).
- **Destination link grid (footer area):** 4-column grid at desktop with each cell housing a region name in `{typography.title-sm}` and a sub-label in `{typography.body-sm}` muted.
- **Footer:** 4-column link list (Destinations / Travel styles / About / Help) on the soft-surface band at desktop, collapsing to 1-column on mobile.

### Whitespace Philosophy
The system gives editorial bands 96px of vertical breathing room and keeps card grids at 24px gutters — the page reads as "wide sky, then a shelf of postcards." The itinerary timeline is the one dense surface: days sit 20px apart on a continuous rule so a visitor can read a ten-day trip in one scroll.

## Elevation

The system has essentially **one shadow tier** plus the flat baseline, and the shadow is blue-tinted and airy rather than grey.

- **Flat (no shadow):** Body, hero, trust bar, itinerary, footer — most surfaces.
- **Airy lift:** `box-shadow: rgba(12, 26, 43, 0.04) 0 1px 2px 0, rgba(12, 26, 43, 0.06) 0 8px 24px -4px, rgba(2, 132, 199, 0.08) 0 16px 40px -8px` — applied to package cards on hover (with a 2px translateY lift), the enquiry bar at rest, the sticky enquiry card, and dropdown menus (date picker, travellers stepper). This is the single shadow definition in the entire system.
- **Gradient overlay:** destination cards carry `linear-gradient(180deg, rgba(12,26,43,0) 40%, rgba(12,26,43,0.75) 100%)` over the photograph so white serif text stays legible — this is a legibility device, not elevation.
- **Modal scrim:** `{colors.scrim}` rendered at 50% opacity — the backdrop for the date picker, enquiry dialog, and gallery lightbox.

There are no progressive elevation tiers — the system either has the one airy shadow or none. Depth comes from photography, the gradient overlays, and the white-on-sky band alternation rather than from layered shadows.

## Components

### Buttons

**`button-primary`** — Azure-deep fill (`{colors.primary-deep}` #0369A1), white text, 10px radius, 14×28px padding, 52px height, DM Sans 500. The main CTA: "Enquire now", "Request itinerary", "Send enquiry". The fill is the deep shade rather than `{colors.primary}` because white on #0284C7 is 4.1:1 — below the 4.5:1 body-text bar — while white on #0369A1 is 5.9:1.

**`button-primary-active`** — The press state. Background flips to `{colors.primary-active}`. No transform, no shadow change.

**`button-primary-disabled`** — Pale sky tint at #BAE6FD with white text. Cursor not-allowed.

**`button-secondary`** — White fill with ink text and a 1px `{colors.border-strong}` outline. 10px radius. Used for "View itinerary", "Download PDF", and inverse CTAs beside a primary.

**`button-tertiary-text`** — Plain azure-deep text, no surface, no border, underlined on hover. Used for "See all destinations", "Show more days", and modal close labels.

**`button-pill-accent`** — A pill-shaped orange CTA with navy text, used once per page at most (e.g. "Plan a tailor-made trip" in the hero or the tailor-made band) — 9999px radius, 10×20px padding, 14px label.

### Enquiry Surface

**`enquiry-bar-pill`** — The signature homepage element. White fill, 9999px radius, 68px height, 1px hairline border plus the airy shadow. Internally divided by vertical hairline rules into `{component.enquiry-field-segment}` cells (Where / When / Travellers). Each segment holds a caption label above a placeholder line. Submitting opens the enquiry form pre-filled.

**`enquiry-orb`** — The round azure orb terminating the right edge of the bar. 52×52px, fully rounded, white arrow icon centred. White on #0284C7 is acceptable here because the orb carries an icon, not text.

**`travellers-stepper`** — A pill-shaped row of adults / children counters with round minus / plus `{component.icon-button-outline}` controls, 40px tall. Appears inside the enquiry bar dropdown and in the enquiry form.

### Top Navigation

**`top-nav`** — White surface, 80px height, 1px bottom hairline. The agency wordmark sits flush left, the three nav tabs (Destinations / Packages / Tailor-made) sit centre, and utilities (phone number, currency, "Enquire" primary button) sit flush right. On scroll it becomes translucent white with a backdrop blur.

**`nav-tab-active`** — Ink label in `{typography.nav-link}` with a 2px ink underline rule 8px beneath.

**`nav-tab-inactive`** — Muted label, no underline. Ink on hover. Destinations opens a mega-menu of region columns on hover.

**`region-strip`** — A horizontal row of region chips (All / Europe / Asia / Africa / Americas / Oceania) above the destination grid in `{typography.button-sm}`. Chips are pill-shaped with a hairline border.

**`region-chip-active`** — Ink fill, white text, full pill. Filtering is instant; no page load.

### Destination & Package Cards

**`destination-card`** — A photo-first card. 4:5 photograph with `{rounded.lg}` 20px clipping, the gradient overlay from the Elevation section, the destination name in `{typography.title-md}` white serif bottom-left, a one-line sub-label ("8 packages · from 7 nights") in `{typography.body-sm}` white at 80%, and a `{component.price-from-badge}` top-left. The whole card is a link; on hover the photo scales 1.03 inside the clip.

**`destination-card-photo`** — The photo plate itself, separated as a token because the mega-menu and the "Popular this season" strip reuse just the photo with a name beneath.

**`package-card`** — A 3:2 photograph clipped at `{rounded.md}` 16px on top, a white body beneath with 24px padding: `{component.duration-tag}` and "Small group" tag row, the package title in `{typography.title-md}`, a 2-line summary in `{typography.body-sm}` muted, and a bottom row with departure months left and `{component.price-from-badge}` right. Hover applies the airy lift.

**`destination-link-block`** — A text cell in the footer-area grid: region name in `{typography.title-sm}` ink above a sub-label in `{typography.body-sm}` muted. No card surface, no shadow.

**`price-from-badge`** — An orange pill with navy text in `{typography.badge}` ("From £1,450 pp"). Prices are **placeholders** until the operator supplies them; a `{typography.caption-sm}` footnote ("per person, based on two sharing, excludes flights") must accompany every price.

**`duration-tag`** — A white pill with ink uppercase text ("10 nights") in `{typography.uppercase-tag}`, 4×10px padding, floating over the photograph top-right.

### Trust Bar

**`trust-bar`** — A soft-surface band directly under the hero, 20×24px padding, holding four to five evenly spaced items in `{typography.caption}` muted with a small azure icon each: a licensing / bonding logo **slot** (ATOL-, IATA-, or ABTA-style — placeholder only), "Financially protected", "Established —", "Tailor-made specialists", "24/7 in-trip support". Every item is a placeholder until the operator confirms its credentials; no claim may be shipped unverified.

### Package Detail

**`itinerary-day`** — One day on the timeline. A vertical 2px `{colors.hairline}` rule runs down the left; each day has a 32px round azure node with the day number in white `{typography.badge}`, the day title in `{typography.display-sm}` serif, a paragraph in `{typography.body-md}` `{colors.body}`, and an optional small photograph at `{rounded.sm}`. 20px vertical padding. Meals included for the day appear as a `{typography.caption-sm}` muted line ("B / L / D").

**`inclusions-row`** — A 2-column list of included items with azure check icons and ink labels in `{typography.body-md}`; a second list of exclusions uses muted cross icons. 12px row padding, no border between rows; the section is closed by a 1px hairline divider above and below.

**`faq-row`** — An accordion row on the soft surface: question in `{typography.title-sm}`, chevron right, answer in `{typography.body-md}` `{colors.body}` on expand. 16px padding, hairline between rows. Booking, deposit, cancellation, and insurance questions live here as placeholders.

**`guide-card`** — A white card with `{rounded.md}` rounding and 24px padding holding a guide or specialist avatar slot, name placeholder, specialism line, and a "Ask a question" `{component.button-secondary}`. No invented names.

**`enquiry-card`** — The sticky right-rail card on package pages. White surface, `{rounded.md}` 16px, 1px hairline border, the airy shadow, 24px padding. Contains: "From £—" in `{typography.display-md}` ink with the per-person footnote, a departure-month selector, `{component.travellers-stepper}`, a full-width "Enquire now" `{component.button-primary}`, and a `{typography.body-sm}` line about deposits and payment plans (placeholder). On mobile it collapses to a sticky bottom bar.

### Date Picker

**`date-picker-day`** — A 40×40px round cell carrying the day number in `{typography.body-sm}`. Default state is transparent fill, ink text; dates without departures are muted-soft.

**`date-picker-day-selected`** — Azure-deep fill, white text, full circle (`{rounded.full}`). Range states between two selected days carry a `{colors.surface-strong}` lozenge background that connects them.

### Forms

**`text-input`** — White surface, 1px hairline outline, `{rounded.sm}` 10px radius, 56px height, 14×16px padding. Stacked label above (in `{typography.caption}` ink), placeholder in `{typography.body-md}` muted. On focus, the border thickens to 2px and flips to `{colors.primary-deep}` — no glow, no ring. The enquiry form stacks: name, email, phone, destination (select), travel dates (date picker), travellers (stepper), budget range (select, placeholder bands), and a message textarea.

### Footer

**`footer-light`** — Soft-surface band (`{colors.surface-soft}`), 64×80px padding. Four columns of link blocks (Destinations / Travel styles / About / Help), separated by 32px gutters. Each column heads with a `{typography.title-sm}` ink label and stacks `{component.footer-link}` rows in `{typography.body-sm}` ink. A licensing line with the bonding logo slot repeats here.

**`legal-band`** — A bottom strip beneath the footer columns carrying the copyright line, booking conditions link, privacy link, cancellation policy link, currency picker, and social icons. All text in `{colors.muted}` at `{typography.caption-sm}`.

## Do's and Don'ts

- **Do** put exactly one orange element per card — the price badge — and no more than one orange CTA per page.
- **Do** use `{colors.primary-deep}` for every solid button and every body-size link; keep `{colors.primary}` for icons, the orb, and large text.
- **Do** keep headlines at weight 400 and let size do the work.
- **Do** give every price a footnote and mark it as a placeholder until confirmed.
- **Don't** invent reviews, ratings, or "trusted by" counts — the trust bar holds credential slots, not social proof.
- **Don't** use grey shadows; every lift is the blue-tinted airy shadow.
- **Don't** drop below 10px radius on any button or card.
- **Don't** put white text on orange.

## Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 744px | Top nav collapses to wordmark + hamburger + Enquire; enquiry bar collapses to a single tappable pill that opens a full-screen form; destination cards 1-up (featured stays 4:5); package cards 1-up; itinerary rule moves to the far left; enquiry card becomes a sticky bottom bar. |
| Tablet | 744–1128px | Top nav keeps tabs but the enquiry bar narrows; destination cards 2-up; package cards 2-up; package detail stacks the enquiry card beneath the itinerary (not sticky). |
| Desktop | 1128–1440px | Full top nav with three tabs centred; enquiry bar at full pill width with all 3 segments visible; destination cards 3-up; package cards 3-up; package detail 2-column with sticky enquiry rail. |
| Wide | > 1440px | Content width caps at 1280px on destination/package pages and 1120px on package detail; hero photograph stays full-bleed; gutters absorb the rest. |

### Touch Targets
- Primary CTAs at minimum 52×52px (above WCAG AAA).
- The enquiry orb is 52×52px round — the most-tapped element on the homepage.
- Region chips are 40px tall with 8px gaps.
- Date-picker day cells are 40×40px round; stepper buttons are 40×40px.

### Collapsing Strategy
- Nav tabs collapse into a hamburger sheet below 744px; the Enquire button never collapses.
- The enquiry bar's 3 segments collapse into a single-tap entry that opens a full-screen enquiry overlay on mobile.
- Destination and package grids drop column counts cleanly at each breakpoint — never reflow rows; always reduce columns.
- The enquiry card on package detail switches from sticky right-rail to a sticky bottom bar on mobile, carrying just the "From" price and the Enquire CTA.

## Iteration Guide

- **To make it warmer:** tint `{colors.surface-soft}` toward #F7F3EC and allow `{colors.accent-soft}` on the FAQ band; keep the azure fixed.
- **To make it more premium:** raise `{spacing.section}` to 120px, use 2-up destination cards at 3:4, and drop the orange badge to a text-only "From" line.
- **To make it more urgent / deal-led:** allow `{colors.accent-soft}` strips with "Limited departures" micro-labels; still only one orange CTA per page.
- **To add a new travel style:** add a region chip and a destination band; do not add a new colour.
- **To wire a booking engine:** replace the enquiry card's internals with the provider widget; keep the card frame, the "From" price with footnote, and the deposit note.

## Known Gaps

- **Hover state colours:** card hover is the airy lift plus a 1.03 photo scale; link hover is `{colors.primary}`. Other hover states are left to implementation.
- **Loading states / skeleton screens:** not specified — destination and package grids load as static content.
- **Map view styling:** destination pages may embed a map; marker colour should be `{colors.primary}` if the provider allows custom markers.
- **Form input error states:** error text colour (`{colors.primary-error-text}`) is documented, but the full input outline + helper-text combination on validation failure is left to implementation.
- **Licensing / bonding:** the trust bar and footer carry logo slots only; the real scheme (ATOL-, IATA-, ABTA-style) and licence numbers must be supplied by the operator.
- **Pricing and currency:** all prices are placeholders; multi-currency display and live availability are not covered.
- **Reviews:** no review or rating component is defined, by design; add one only with verified, sourced reviews.

---

## Revision — 2026-10-08 — Homepage built after the Arolax travel-agency demo

Built at the owner's request after `arolax.crowdytheme-demo.com/travel-agency/home`, following that page's composition, geometry, devices and motion, and keeping only this template's own palette and typefaces. Geometry was read from the live page's computed styles rather than estimated.

### Measured from the reference

| Property | Reference | Here |
|---|---|---|
| Container | 1320px | 1320px |
| Hero display | 170px / 400 / line-height 100px, a capitals-only display serif | `clamp(44px, 9.4vw, 150px)` DM Serif Display 400, uppercase, line-height 0.92 |
| Section display | 70px / 400 / line-height 70px | `clamp(34px, 5vw, 70px)` DM Serif Display 400, uppercase |
| Card title | 30px / 500, capitalised | 28px DM Serif Display 400, uppercase |
| Body | 18–20px / 1.45–1.6 | 16–19px / 1.65 DM Sans |
| Buttons | 40px radius, 50–60px tall, 14px / 500–600, 1px outline or a solid navy fill | fully round, 50 / 60px tall, 14–15px / 600, outlined or `{colors.primary-deep}` filled |
| Ink | `#0D3570` | `{colors.ink}` `#0C1A2B` with `{colors.primary-deep}` `#0369A1` under solid buttons |
| Soft surface | `#E2F3FF` | `{colors.surface-soft}` `#F0F7FC` |

### Rules this revision overrides

| Rule above | What was built | Why |
|---|---|---|
| Buttons at 10px radius; *"don't drop below 10px radius"* reads as a floor, and 10px was also the ceiling in practice | Every button is a full pill, and cards are 20px | The reference's geometry is round throughout, and the pill is the single most recognisable thing about its chrome. The floor is still respected — nothing is squarer than the file asks. |
| `{typography.display-xl}` at 56px | A poster tier up to 150px, set uppercase | The reference's hero is 170px over a 100px line-height, so the type *is* the layout. At 56px the page is a different design. The case is set here because the reference's display face has no lower case. |
| Section rhythm not specified beyond the type scale | 64px on phones, 96px above | Matched to the reference's own vertical rhythm at 1440. |

### Added, and not from the reference

The reference is a one-person guide's portfolio with nothing to protect and nothing to book. Two bands required by this file were therefore built from scratch:

- **The enquiry bar** (`{component.enquiry-bar-pill}`), which this file calls "the signature homepage element" — a round white bar divided into Where / When / Travellers closing on `{component.enquiry-orb}`, sitting directly under the hero. Real selects and a real `{component.travellers-stepper}`, so it works from the keyboard; it posts nowhere and says so.
- **The trust bar** (`{component.trust-bar}`), which this file requires under the hero and insists holds credential slots rather than social proof. Four bracketed slots and a note saying nothing on it may ship unverified.

Together they are what stops this page reading as a clone of a portfolio.

### Accessibility notes

- Azure is 2.6:1 over a dark photograph, so the bands that sit on one carry `.tv-on-dark`, which swaps `--t-focus` to white.
- Orange appears exactly once per destination card, as `{component.price-from-badge}`, always with navy text and never without the per-person footnote beneath the rail — both rules from the Do's above.
- The hero's sky, clouds and flight path are drawn in CSS and SVG and are `aria-hidden`; the "scroll" label is the SVG's accessible name rather than loose decoration.
- The social column down the left edge is decorative and hidden from assistive tech; the same three links are rendered as real links below it and again in the footer.
- Nothing autoplays. The "watch the film" disc opens a dialog carrying a placeholder, as this file's photography rules require.
