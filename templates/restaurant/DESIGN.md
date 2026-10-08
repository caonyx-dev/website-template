---
version: alpha
name: Restaurant-Template
description: An intimate, warm, editorial website for an independent restaurant, set on a cream canvas (#FBF7EF) with near-black ink (#1F1D18) and a single deep-olive voltage (#4D5B2F) that carries the Reserve button, the active nav state, and inline links, with warm gold (#C9A227) reserved for hairline ornaments, menu-section rules, and text on the dark hero and footer bands. Type pairs Playfair Display (500/600, italics for dish names) for headlines and menu item names with Karla (400/500) for descriptions, prices, hours, and buttons. Corners are nearly square (2-4px) so the page reads like a printed menu rather than an app; menu sections are ruled with hairlines and dotted price leaders; headlines are centred; photography of plates and the dining room carries the visual weight. Elevation is almost absent, with one soft shadow tier reserved for the sticky reservation widget and dropdowns.

colors:
  primary: "#4D5B2F"
  primary-active: "#3B4724"
  primary-disabled: "#C5CAB3"
  primary-error-text: "#A3321E"
  primary-error-text-hover: "#86281A"
  accent: "#C9A227"
  accent-deep: "#9C7C19"
  ink: "#1F1D18"
  body: "#3A372F"
  muted: "#6B6557"
  muted-soft: "#9A9385"
  hairline: "#E2D9C6"
  hairline-soft: "#EDE6D6"
  border-strong: "#B9AE97"
  canvas: "#FBF7EF"
  surface-soft: "#F2EBDD"
  surface-card: "#FFFDF8"
  surface-strong: "#E9E0CD"
  surface-dark: "#1F1D18"
  on-primary: "#FFFFFF"
  on-dark: "#FBF7EF"
  legal-link: "#4D5B2F"
  price: "#1F1D18"
  scrim: "#1F1D18"

typography:
  display-xl:
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: -0.5px
  display-lg:
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif"
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: -0.3px
  display-md:
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  display-sm:
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.30
    letterSpacing: 0
  title-md:
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 0
  title-sm:
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif"
    fontSize: 18px
    fontWeight: 500
    fontStyle: italic
    lineHeight: 1.35
    letterSpacing: 0
  hero-display:
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif"
    fontSize: 64px
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -1px
  body-md:
    fontFamily: "Karla, system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Karla, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Karla, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.29
    letterSpacing: 0
  caption-sm:
    fontFamily: "Karla, system-ui, -apple-system, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.23
    letterSpacing: 0
  badge:
    fontFamily: "Karla, system-ui, -apple-system, sans-serif"
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: 0.4px
  micro-label:
    fontFamily: "Karla, system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.33
    letterSpacing: 0.6px
    textTransform: uppercase
  uppercase-tag:
    fontFamily: "Karla, system-ui, -apple-system, sans-serif"
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 1px
    textTransform: uppercase
  button-md:
    fontFamily: "Karla, system-ui, -apple-system, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.4px
  button-sm:
    fontFamily: "Karla, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.29
    letterSpacing: 0.4px
  link:
    fontFamily: "Karla, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0
  nav-link:
    fontFamily: "Karla, system-ui, -apple-system, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.6px
    textTransform: uppercase

rounded:
  none: 0px
  xs: 2px
  sm: 3px
  md: 4px
  lg: 6px
  xl: 8px
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
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 14px 28px
    height: 48px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-disabled}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 13px 27px
    height: 48px
  button-tertiary-text:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
  button-reserve-header:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.sm}"
    padding: 10px 20px
  button-on-dark:
    backgroundColor: transparent
    textColor: "{colors.accent}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    height: 48px
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
  nav-link-active:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"
  nav-link-inactive:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.nav-link}"
  hero-dark-band:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.hero-display}"
    padding: 96px 24px
  hours-strip:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    padding: 12px 24px
  menu-category-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.button-sm}"
  menu-category-active:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.none}"
  menu-section:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: 32px 0
  menu-item-row:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
    padding: 12px 0
  menu-price-leader:
    backgroundColor: transparent
    textColor: "{colors.price}"
    typography: "{typography.body-sm}"
  dish-photo:
    rounded: "{rounded.xs}"
  dietary-tag:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.muted}"
    typography: "{typography.uppercase-tag}"
    rounded: "{rounded.xs}"
    padding: 2px 6px
  chef-special-badge:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.primary}"
    typography: "{typography.badge}"
    rounded: "{rounded.xs}"
    padding: 4px 10px
  gallery-tile:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.caption-sm}"
    rounded: "{rounded.xs}"
  private-dining-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 24px
  reservation-widget:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
  location-card:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: 12px 0
  chef-note:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.title-sm}"
  date-picker-day:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
  date-picker-day-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
  text-input:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 14px 12px
    height: 52px
  footer-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    padding: 64px 80px
  footer-link:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
  legal-band:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.muted-soft}"
    typography: "{typography.caption-sm}"
---

## Overview

This is the design language for an **independent restaurant website** — the site a diner opens on their phone at 6pm to check whether the kitchen is open, skim the menu, find the door, and reserve a table, and the site an event planner opens on a desktop to size up the private dining room. The base canvas is **warm cream** (`{colors.canvas}` — #FBF7EF) with near-black ink (`{colors.ink}` — #1F1D18) for headlines and body, and a single voltage of **deep olive** (`{colors.primary}` — #4D5B2F) carrying the Reserve button, the active nav state, and inline links. A second colour, **warm gold** (`{colors.accent}` — #C9A227), is reserved for ornament: menu-section rules, the small flourish under centred headlines, and text on the dark hero and footer bands. Gold never fills a button on a light surface.

Type pairs **Playfair Display** for headlines, section titles, and dish names — with italics permitted for the dish names themselves — against **Karla** for descriptions, prices, hours, forms, and buttons. The display scale runs larger than a typical marketing site (hero 64px, page headlines 48px) because a restaurant site has very little copy; the headline, one photograph, and the Reserve button are usually the whole fold. Karla stays at 400/500, so body copy, prices, and labels never compete with the serif.

The shape language is **nearly square**. Buttons are 3px radius (`{rounded.sm}`), cards and the reservation widget are 4px (`{rounded.md}`), photographs are clipped at 2px (`{rounded.xs}`), and only the date-picker day cells and avatar-style icon buttons are round (`{rounded.full}`). The page should read like a printed menu or a well-set table, not like an app — hairline rules, dotted price leaders, and centred headlines do the structural work that rounded cards would do elsewhere.

**Key Characteristics:**
- Single brand colour: `{colors.primary}` (#4D5B2F — deep olive) carries the Reserve button, the active nav link, the selected date, and inline links. Most of the page is cream + ink with one or two olive moments.
- Warm gold ornament: `{colors.accent}` (#C9A227) appears as a 1px rule beneath centred headlines, as the menu-section divider, and as text on the dark bands. It is decorative, not interactive.
- Serif-led type: Playfair Display at 500–600 for headlines and dish names; Karla at 400–500 for everything else. Italic Playfair is the dish-name voice on the menu.
- Dark hero and footer bands: `{colors.surface-dark}` (#1F1D18) frames the page top and bottom — the hero sits on dark with a full-bleed photograph of the room, and the footer repeats hours, address, and phone on dark.
- Menu as the centrepiece: hairline-ruled sections (`{component.menu-section}`), dish rows with dotted leaders to a right-aligned price (`{component.menu-price-leader}`), small dietary tags (`{component.dietary-tag}`), and an allergen note at the foot of every menu.
- Reserve is always one tap away: a compact olive button sits at the right edge of the header (`{component.button-reserve-header}`) and a sticky bottom bar carries it on mobile.
- Photography of food and the room is large and frequent: full-bleed hero, a 2-up or 3-up gallery band, and a square dish photo beside featured menu items.
- Elevation is minimal: one soft shadow tier for the sticky reservation widget and dropdowns; everything else is flat and separated by hairlines.
- 8px base spacing system, with major sections at `{spacing.section}` (80px) — airier than a marketplace, because the page has few items and each deserves room.

## Colors

### Brand & Accent
- **Deep Olive** (`{colors.primary}` — #4D5B2F): The single brand colour. Used for the Reserve button, the header reserve button, the active nav link, the selected date in the reservation picker, and inline links in body copy. It reads as herbs, bottle glass, and the kitchen garden — warm but serious.
- **Olive Active** (`{colors.primary-active}` — #3B4724): The press / pointer-down variant — one step darker. Used on `{component.button-primary-active}`.
- **Olive Disabled** (`{colors.primary-disabled}` — #C5CAB3): A pale, desaturated tint used on disabled CTAs (e.g. Reserve before a date is chosen).
- **Warm Gold** (`{colors.accent}` — #C9A227): Ornament only. The hairline under centred headlines, the menu-section divider, the small flourish on the private-dining card, and button and link text on the dark bands. At 2.2:1 against cream it fails text contrast, so it is never used for text on light surfaces.
- **Gold Deep** (`{colors.accent-deep}` — #9C7C19): A darker gold for the rare case where gold must carry a small icon on cream — it reaches 4.6:1 against `{colors.canvas}`.

### Surface
- **Canvas** (`{colors.canvas}` — #FBF7EF): The default page floor — cream, not white. It carries the warmth of the whole system; a pure-white canvas would make the olive and gold look muddy.
- **Surface Soft** (`{colors.surface-soft}` — #F2EBDD): The lightest fill — used on the hours strip, dietary tags, disabled fields, and the alternating band behind the gallery.
- **Surface Card** (`{colors.surface-card}` — #FFFDF8): A hair lighter than the canvas for the reservation widget and private-dining card so they lift without a shadow.
- **Surface Strong** (`{colors.surface-strong}` — #E9E0CD): Slightly heavier fill — round icon-button surface (gallery arrows, the mobile menu toggle).
- **Surface Dark** (`{colors.surface-dark}` — #1F1D18): The dark band for the hero and footer. Text on it is `{colors.on-dark}` cream; links and the hero CTA outline are gold.

### Hairlines & Borders
- **Hairline** (`{colors.hairline}` — #E2D9C6): The default 1px rule — menu-section dividers, header bottom rule, hours-table separators, the reservation widget border.
- **Hairline Soft** (`{colors.hairline-soft}` — #EDE6D6): A lighter rule between dish rows inside a menu section.
- **Border Strong** (`{colors.border-strong}` — #B9AE97): A heavier stroke used on secondary-button outlines and form inputs after focus.

### Text
- **Ink** (`{colors.ink}` — #1F1D18): The dominant text colour on light surfaces. Headlines, dish names, prices, body paragraphs, and nav links. A warm near-black, never pure black.
- **Body** (`{colors.body}` — #3A372F): Running text inside dish descriptions, the chef's note, and the private-dining copy, where full ink would feel heavy against the serif.
- **Muted** (`{colors.muted}` — #6B6557): Dietary tags, inactive nav links, the hours strip, captions beneath gallery photos, and "View full menu" links.
- **Muted Soft** (`{colors.muted-soft}` — #9A9385): Disabled text and the legal band on the dark footer. Used very sparingly.
- **Price** (`{colors.price}` — #1F1D18): The menu price token — the same ink as the dish name, so prices sit quietly at the end of the dotted leader rather than shouting. A restaurant menu that colours its prices looks like a takeaway flyer.
- **On Primary** (`{colors.on-primary}` — #FFFFFF): White text on olive CTAs (7.4:1).
- **On Dark** (`{colors.on-dark}` — #FBF7EF): Cream text on the dark bands.

### Semantic
- **Error** (`{colors.primary-error-text}` — #A3321E): Inline error text for reservation and enquiry forms — a brick red that sits comfortably beside olive.
- **Error Hover** (`{colors.primary-error-text-hover}` — #86281A): Darkens on link hover.
- **Legal Link** (`{colors.legal-link}` — #4D5B2F): Inline links inside legal copy (Privacy, Terms, Allergen policy) share the olive brand colour — there is no separate link blue in this system.

### Scrim
- **Scrim** (`{colors.scrim}` — #1F1D18 at 60% opacity): The modal backdrop tone — reservation date picker, gallery lightbox, mobile nav sheet. Stored as the base hex; opacity is applied at render time. Using the warm near-black instead of pure black keeps the lightbox in the same palette as the dark bands.

## Typography

### Font Family
The system pairs two families. **Playfair Display** carries every display and title role — the hero line, page headlines, menu-section titles, and dish names (italic for dish names). **Karla** carries body, captions, prices, buttons, labels, nav links, and inputs. Fallbacks walk `Georgia, 'Times New Roman', serif` for the display face and `system-ui, -apple-system, sans-serif` for the body face. There is no mono role in this system; prices are set in Karla with `font-variant-numeric: tabular-nums` so the dotted leaders align.

The pairing is deliberate: a high-contrast transitional serif evokes the printed menu and the tradition of the dining room; a humane grotesque at light weights keeps descriptions, hours, and forms legible on a phone screen at a bus stop.

### Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500&family=Karla:wght@400;500&display=swap" rel="stylesheet">
```
```css
:root {
  --font-display: 'Playfair Display', Georgia, 'Times New Roman', serif;
  --font-body: Karla, system-ui, -apple-system, sans-serif;
}
```

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.hero-display}` | 64px | 500 | 1.05 | -1px | Hero line on the dark band ("Dinner, Tuesday to Sunday") |
| `{typography.display-xl}` | 48px | 600 | 1.12 | -0.5px | Page h1 on light canvas (Menu, Private Dining) |
| `{typography.display-lg}` | 36px | 500 | 1.18 | -0.3px | Centred section headlines ("The Room", "Find Us") |
| `{typography.display-md}` | 28px | 600 | 1.25 | 0 | Menu-section titles ("Starters", "From the Grill") |
| `{typography.display-sm}` | 22px | 600 | 1.30 | 0 | Sub-section titles ("Things to know", "Set menu") |
| `{typography.title-md}` | 18px | 500 | 1.35 | 0 | Card titles (private-dining room names, gallery captions) |
| `{typography.title-sm}` | 18px | 500 italic | 1.35 | 0 | Dish names on the menu; chef's note pull quote |
| `{typography.body-md}` | 16px | 400 | 1.6 | 0 | Default running text — about copy, private-dining copy |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Dish descriptions, prices, hours rows, address lines |
| `{typography.caption}` | 14px | 500 | 1.29 | 0 | Reservation widget field labels ("Date", "Time", "Guests") |
| `{typography.caption-sm}` | 13px | 400 | 1.23 | 0 | Footer legal line, allergen note |
| `{typography.badge}` | 11px | 500 | 1.18 | 0.4px | "Chef's special" badge text |
| `{typography.micro-label}` | 12px | 500 | 1.33 | 0.6px (uppercase) | Eyebrow labels above centred headlines ("Our menu") |
| `{typography.uppercase-tag}` | 10px | 500 | 1.25 | 1px (uppercase) | Dietary tags (V, VG, GF, N) |
| `{typography.button-md}` | 15px | 500 | 1.25 | 0.4px | Primary CTA button labels ("Reserve a table") |
| `{typography.button-sm}` | 14px | 500 | 1.29 | 0.4px | Header reserve button, menu-category tabs |
| `{typography.link}` | 14px | 400 | 1.43 | 0 | Inline body links |
| `{typography.nav-link}` | 15px | 500 | 1.25 | 0.6px (uppercase) | Top nav labels (Menu, Reservations, Private Dining, Find Us) |

### Principles
Display sizes are large and weights are moderate. Playfair Display ships 400–900, but this system uses only 500 and 600 — 700+ makes the serif's thick strokes clog at menu sizes, and 400 is too light against the cream canvas. Headlines are centred on content pages and left-aligned only inside cards and the reservation widget.

The single typographically loud moment is the **hero line** (`{typography.hero-display}` — 64px / 500) on the dark band. Everywhere else the photography and the hairline-ruled menu carry hierarchy. Dish names are italic Playfair at 18px; descriptions are Karla 14px muted — that two-step contrast is the whole menu typography and it should never be embellished with a third face or a bold weight.

Karla is loaded at 400 and 500 only. Where the source scale used 600 or 700 for small labels (badges, micro-labels, nav links), this system uses 500 with wider letter-spacing and uppercase instead — tracking does the work that weight did.

### Note on Font Substitutes
If Playfair Display is unavailable, **Libre Baskerville** or **Lora** are the closest open substitutes; both ship an italic. If Karla is unavailable, **Work Sans** or the system sans stack transfer cleanly. Keep the serif for dish names even under substitution — the italic dish name is the single most recognisable trait of this menu.

## Layout

### Spacing System
- **Base unit:** 4px (with 2px micro-step).
- **Tokens:** `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.base}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 80px.
- **Section padding (vertical):** `{spacing.section}` (80px) for major page bands; the hero dark band runs 96px. A restaurant site has few sections and each should breathe.
- **Card internal padding:** `{spacing.lg}` (24px) for `{component.reservation-widget}` and `{component.private-dining-card}`; `{spacing.md}` (12px) vertical for `{component.menu-item-row}`; `{spacing.sm}` (8px) between a dish name and its description.
- **Gutters:** `{spacing.lg}` (24px) between gallery tiles; `{spacing.xl}` (32px) between menu columns on desktop; `{spacing.xs}` (4px) between dietary tags.

### Grid & Container
- **Max content width:** ~1120px centred on the home and private-dining pages. The menu page caps closer to 760px for a single column or 1040px for two columns, so dotted leaders stay short enough to follow with the eye.
- **Menu grid:** single column on mobile and tablet; two columns on desktop with sections flowing top to bottom in each column. Never split one section across columns.
- **Gallery band:** 3-up on desktop, 2-up on tablet, a horizontal swipe strip on mobile. Tiles are 4:3 or square; never mix orientations in one band.
- **Find Us:** 2-column — address, hours table, and phone on the left (~40%), embedded map placeholder on the right (~60%).
- **Private dining:** full-width photograph, then a 2-column band of room cards (capacity, layout, minimum spend placeholder) beside the enquiry form.
- **Footer:** 3-column link list (Visit / Menus / Contact) on the dark band at desktop, collapsing to 1-column on mobile with hours and phone first.

### Whitespace Philosophy
The system gives every band 80px of vertical breathing room and keeps menu rows tight at 12px — the page reads as "calm bands, dense menu." The menu is the one place where density is welcome, because a diner scanning for the fish course wants everything in view; everywhere else the page should feel like a quiet room with one thing on each table.

## Elevation

The system has essentially **one shadow tier** plus the flat baseline, and it is softer and warmer than a typical product shadow.

- **Flat (no shadow):** Body, hero, menu, gallery, footer — nearly every surface. Separation comes from hairlines (`{colors.hairline}`) and the cream / surface-soft alternation between bands.
- **Soft float:** `box-shadow: rgba(31, 29, 24, 0.04) 0 0 0 1px, rgba(31, 29, 24, 0.06) 0 2px 6px 0, rgba(31, 29, 24, 0.10) 0 8px 20px 0` — applied to the sticky reservation widget, the date-picker dropdown, and the mobile reserve bar. This is the single shadow definition in the entire system, tinted with the ink colour rather than pure black so it reads as warm.
- **Modal scrim:** `{colors.scrim}` rendered at 60% opacity — the backdrop for the gallery lightbox, the reservation picker on mobile, and the nav sheet.

There are no progressive elevation tiers and no hover lift on cards. Depth comes from photography, the cream-on-cream band alternation, and the dark hero / footer frame rather than from layered shadows.

## Components

### Buttons

**`button-primary`** — Olive fill, white text, 3px radius, 14×28px padding, 48px height, Karla 500 with 0.4px tracking. The Reserve CTA everywhere: hero, reservation widget, private-dining enquiry submit. White on #4D5B2F reaches 7.4:1.

**`button-primary-active`** — The press state. Background flips to `{colors.primary-active}`. No transform, no shadow change.

**`button-primary-disabled`** — Pale olive tint at #C5CAB3 with white text. Cursor not-allowed. Used on Reserve until date, time, and party size are set.

**`button-secondary`** — Transparent fill with ink text and a 1px `{colors.border-strong}` outline. 3px radius. Used for "View menu", "Download PDF menu", and "Call us" beside a primary Reserve.

**`button-tertiary-text`** — Plain olive text, no surface, no border, underlined on hover. Used for "See full wine list", "Show more photos", and modal close labels.

**`button-reserve-header`** — The compact olive Reserve button pinned to the right edge of the header — 3px radius, 10×20px padding, 14px label. It is the one element that never leaves the viewport: on mobile it moves into a sticky bottom bar alongside a "Call" button.

**`button-on-dark`** — The hero CTA on the dark band: transparent fill, 1px gold outline, gold text (`{colors.accent}` on #1F1D18 reaches 7.0:1). On hover the fill becomes gold with ink text.

### Header & Hours

**`top-nav`** — Cream surface, 80px height, 1px bottom hairline. The restaurant name or wordmark sits dead centre in Playfair Display; nav links (Menu / Reservations / Private Dining / Find Us) sit left in uppercase Karla; phone number and the header Reserve button sit right. On scroll the header shrinks to 64px and keeps the Reserve button.

**`nav-link-active`** — Olive label in `{typography.nav-link}` with a 1px gold underline rule 6px beneath the text.

**`nav-link-inactive`** — Muted label, no underline. Ink on hover.

**`hours-strip`** — A slim surface-soft band directly under the header carrying today's hours and status ("Open tonight 5:30–10:30 · Kitchen closes 10:00") in `{typography.caption}`. On a phone this is the first thing a diner reads, so it precedes even the hero.

### Hero

**`hero-dark-band`** — The dark opening band: full-bleed photograph of the dining room with a 60% `{colors.scrim}` overlay, the hero line centred in `{typography.hero-display}` cream, a one-line descriptor in `{typography.body-md}`, and two CTAs — `{component.button-primary}` "Reserve a table" and `{component.button-on-dark}` "View menu". A thin gold rule sits between the eyebrow label and the headline.

### Menu

**`menu-category-strip`** — A row of text tabs (Lunch / Dinner / Drinks / Dessert) above the menu in `{typography.button-sm}` muted, separated by `{spacing.lg}`. Sticky beneath the header on long menus.

**`menu-category-active`** — Ink label with a 2px olive underline. Switching tabs swaps the menu columns without a page load.

**`menu-section`** — A section heading in `{typography.display-md}` centred, with a short gold rule beneath it and a 1px hairline above the first dish. Sections are stacked with 32px padding; a short italic note (e.g. "Served from 5:30pm") can sit beneath the title in `{typography.title-sm}` muted.

**`menu-item-row`** — One dish: name in `{typography.title-sm}` italic Playfair, a dotted leader (`border-bottom: 1px dotted {colors.hairline}` on a flex spacer) running to a right-aligned price in `{component.menu-price-leader}`, then the description in `{typography.body-sm}` muted on the next line, then any `{component.dietary-tag}` chips. 12px vertical padding, a `{colors.hairline-soft}` rule between rows.

**`menu-price-leader`** — The price cell: ink (`{colors.price}`), `{typography.body-sm}`, tabular numerals, no currency colour. Market-price dishes show "MP" in the same style.

**`dish-photo`** — An optional square photograph beside a featured dish, clipped at `{rounded.xs}` 2px. Used for at most two or three dishes per menu — a photo on every row turns the menu into a delivery app.

**`dietary-tag`** — A tiny surface-soft chip with muted uppercase text (V / VG / GF / N / DF) in `{typography.uppercase-tag}`, 2px radius. Every menu closes with an allergen note in `{typography.caption-sm}` muted: a placeholder sentence directing guests to ask staff about allergens, to be replaced with the restaurant's own legally reviewed wording.

**`chef-special-badge`** — A small card-surface badge with olive text ("Chef's special", "New this week") in `{typography.badge}`, placed inline after the dish name. 2px radius, no shadow.

### Room, Gallery & Story

**`gallery-tile`** — A photograph (4:3 or square) clipped at `{rounded.xs}` with an optional caption beneath in `{typography.caption-sm}` muted. Tiles open a lightbox on click. The band alternates onto `{colors.surface-soft}` so the cream canvas does not run unbroken for the whole page.

**`chef-note`** — An editorial pull quote in `{typography.title-sm}` italic `{colors.body}`, centred, with a gold rule above and the chef's or owner's name in `{typography.micro-label}` beneath. Placeholder copy only; no fabricated attribution.

### Reservations

**`reservation-widget`** — The card-surface reservation panel: 4px radius, 1px hairline border, the soft float shadow, 24px padding. Contains: a stacked label row (Date / Time / Guests) in `{typography.caption}`, three `{component.text-input}` fields or a date-picker trigger, the full-width Reserve `{component.button-primary}`, and a `{typography.caption-sm}` note for large parties ("Parties of 8 or more, please call"). The widget is a **placeholder for a third-party reservation integration** — the embed replaces the inner fields, keeping the card frame.

**`date-picker-day`** — A 40×40px round cell carrying the day number in `{typography.body-sm}`. Default state is transparent fill, ink text; closed days are muted-soft with a strike.

**`date-picker-day-selected`** — Olive fill, white text, full circle (`{rounded.full}`). Time slots beneath the calendar are 3px-radius chips that flip to olive when selected.

### Private Dining & Enquiry

**`private-dining-card`** — A card-surface panel with 4px radius, 1px hairline, 24px padding, holding a room photograph, the room name in `{typography.title-md}`, a stat row (seated capacity, standing capacity, minimum-spend placeholder) in `{typography.body-sm}`, and an "Enquire" `{component.button-secondary}`. Two or three cards sit beside the enquiry form.

**`location-card`** — The Find Us block: address lines, a tel: link, an email link, and the hours table (day / hours rows separated by `{colors.hairline-soft}`) in `{typography.body-md}`, 12px row padding, beside a map embed placeholder. Includes a "Get directions" tertiary link.

### Forms

**`text-input`** — Card-surface fill, 1px hairline outline, `{rounded.sm}` 3px radius, 52px height, 14×12px padding. Stacked label above in `{typography.caption}` muted, placeholder in `{typography.body-md}` muted. On focus the border flips to 2px `{colors.border-strong}` — no glow, no ring. The enquiry form (name, email, phone, date, guests, occasion, message) uses the same field for every input.

### Footer

**`footer-dark`** — The dark band (`{colors.surface-dark}`) repeats the three things a diner needs: address, hours, and phone. 64×80px padding. Three columns (Visit / Menus / Contact), each heading in `{typography.title-md}` cream with a short gold rule beneath, stacking `{component.footer-link}` rows in `{typography.body-sm}` cream. A gift-card link is included as a placeholder and may be removed if the restaurant does not sell them.

**`legal-band`** — A bottom strip beneath the footer columns carrying the copyright line, allergen-policy link, privacy link, and social icons. All text in `{colors.muted-soft}` at `{typography.caption-sm}` on the dark band.

## Do's and Don'ts

- **Do** keep hours, address, and phone visible within one scroll on every page — the hours strip, the hero, and the footer each carry them.
- **Do** set dish names in italic Playfair and descriptions in muted Karla; never bold the dish name.
- **Do** use dotted leaders and right-aligned prices; never put prices in olive or gold.
- **Do** keep gold decorative; it is a rule, a flourish, or text on dark — never a button fill on cream.
- **Don't** add a third typeface, a script face, or decorative ornaments beyond the single gold rule.
- **Don't** put a photograph on every menu row; two or three per menu is the ceiling.
- **Don't** round corners past 4px on any surface except round date cells and icon buttons.
- **Don't** fabricate reviews, press quotes, or awards — leave the chef's note and any press strip as clearly marked placeholders.

## Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 744px | Header collapses to wordmark + hamburger + Reserve; hours strip stays; hero line drops to 40px; menu is single column with dotted leaders kept; gallery becomes a swipe strip; Reserve and Call move into a sticky bottom bar. |
| Tablet | 744–1128px | Header keeps nav links at reduced tracking; menu single column at 760px max; gallery 2-up; Find Us stacks map beneath address; reservation widget inline (not sticky). |
| Desktop | 1128–1440px | Full header with centred wordmark; menu two columns; gallery 3-up; Find Us 2-column; private dining cards 2-up beside the enquiry form; reservation widget sticky in the right rail. |
| Wide | > 1440px | Content width caps at 1120px (menu 1040px); the hero photograph and gallery band stay full-bleed; gutters absorb the rest. |

### Touch Targets
- Primary CTAs at minimum 48×48px (above WCAG AAA).
- The header Reserve button is 40px tall on desktop and 48px in the mobile sticky bar — the most-tapped element on the page.
- Phone and directions links are full-width rows on mobile, 48px tall.
- Date-picker day cells are 40×40px round; time-slot chips are 40px tall.

### Collapsing Strategy
- Nav links collapse into a hamburger sheet below 744px; Reserve never collapses.
- The two-column menu becomes one column; sections keep their order and dotted leaders shorten with the viewport.
- Gallery tiles drop column counts cleanly at each breakpoint — never reflow rows; always reduce columns.
- The reservation widget switches from a sticky right rail to a sticky bottom bar on mobile, carrying just Reserve + Call and tonight's hours.

## Iteration Guide

- **To make it warmer:** shift `{colors.canvas}` toward #F8F1E3 and raise the scrim opacity on the hero photograph; keep olive and gold fixed.
- **To make it more formal:** drop the hero to `{typography.display-xl}`, use display weight 500 everywhere, and widen `{spacing.section}` to 96px.
- **To make it more casual:** allow 6px radius on buttons and cards, set dish names upright instead of italic, and use the gallery swipe strip on desktop too.
- **To add a seasonal or tasting menu:** add a tab to `{component.menu-category-strip}`; do not add a new colour or badge style — `{component.chef-special-badge}` already covers "new".
- **To wire reservations:** replace the inner fields of `{component.reservation-widget}` with the provider embed; keep the card frame, the hairline border, and the large-party note.

## Known Gaps

- **Hover state colours:** card hover is intentionally absent; only buttons, links, and nav links change on hover (documented inline above).
- **Loading states / skeleton screens:** not specified — menu and gallery load as static content.
- **Map styling:** the Find Us map is a placeholder embed; marker colour should be `{colors.primary}` if the provider allows custom markers.
- **Form input error states:** error text colour (`{colors.primary-error-text}`) is documented, but the full input outline + helper-text combination on validation failure is left to implementation.
- **Reservation provider:** the widget is a placeholder; provider-specific styling (time-slot grids, waitlist states) is not covered here.
- **Gift cards and online ordering:** undecided for this business; the footer link is a placeholder and no ordering components are defined.
- **Multilingual menus:** not addressed; dotted leaders and italic dish names should be re-checked for scripts without italics.

### Revision 2026-10-08: reference-led direction, Soul Kitchen dark (soulkitchen.redsun.design/dark)

Built at the owner's request after the Soul Kitchen "dark" demo, keeping this file's tokens (cream canvas, near-black ink, deep-olive voltage, gold ornament, Playfair Display + Karla, nearly square corners, dotted price leaders) and taking the demo's composition and rhythm:

- **What came across.** A dark contact strip above the nav (address, phone, email, socials); a nav with links either side of a centred wordmark; a split hero — copy on the dark half with a rotated "WELCOME" label down the edge, a full-bleed plate photograph on the other; three photographic entry cards with an eyebrow over a title; a centred story paragraph; a chef band (photograph with a rotated label, a text column, two stacked detail photographs); a centred philosophy headline; three tall photographic tiles; the food menu with text tabs over two columns and one bordered section card; a gallery mosaic; the drink menu with its own tabs and glass / bottle price columns; a reserve band; and a four-column dark footer closed by a legal bar.
- **What stayed ours.** The palette is unchanged: cream `{colors.canvas}` carries the page, the hero and footer are the only dark bands, olive is the single interactive colour and gold stays a rule, a flourish or text on dark. Soul Kitchen's all-dark page and wide-tracked sans headlines are not used; headlines are Playfair, dish names are italic Playfair, descriptions and prices are Karla, and every price keeps its dotted leader.
- **Additions this revision records.** A rotated vertical label beside the hero and chef photographs, a centred gold flourish rule beneath section headlines, and the dark contact strip above the nav. The hero is a split rather than the full-bleed scrim `hero-dark-band` describes; the scrim variant stays valid for inner pages.
#### Accessibility corrections to the colour tokens (same date)

Two frontmatter colours did not reach the contrast the interface needs, so the layout overrides them. The frontmatter is left as written; `src/app/restaurant/layout.tsx` carries the corrected values and the original stays available as `--t-accent-deep-design`.

- **`accent-deep` `#9C7C19` → `#7F6210` for text.** The original is 3.7:1 on `{colors.canvas}` and 3.33:1 on `{colors.surface-soft}`, under the 4.5:1 that body-sized text needs. Every section eyebrow, the hero's service labels and the private-dining seat counts use it. The corrected value is 5.37:1 and 4.84:1 and still reads as a deep gold. `accent` `#C9A227` is unchanged and stays correct where it is used as a rule, a flourish or text on the dark bands.
- **A field border, `#9A8C70`, separate from `hairline`.** `hairline` `#E2D9C6` is 1.31:1 on cream, right for a decorative rule and far too faint for an input boundary, which needs 3:1. Form controls take `--t-field-border` (3.09:1); hairlines keep their job everywhere else.
- **The focus ring follows the band.** `{colors.primary}` is 2.29:1 on `{colors.surface-dark}`, effectively invisible, so the contact strip, the hero and the footer set `--t-focus` to `{colors.accent}` (6.96:1 on the dark). The cream of the page keeps the olive ring at 6.89:1.

- **Motion.** Fades and short rises on entry, the hero photograph settling from a slow zoom, menu panels crossfading when a tab changes, gallery tiles easing on hover. Reduced motion renders everything at rest.
