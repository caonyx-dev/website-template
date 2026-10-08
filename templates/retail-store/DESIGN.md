---
version: alpha
name: Retail-Store-Template
description: A playful, bold, promotional website for a retail store or small shop, set on a crisp white canvas (#FFFFFF) with a blush-tinted soft surface (#FAF5F8), near-black ink (#18181B), and a deep mulberry brand colour (#9D174D) that carries Add-to-cart and Shop buttons, the Sale badge, the active collection chip, and inline links, with bold yellow (#FACC15) reserved for the promo banner strip and New / promo tags, always with ink text on top. Type pairs Poppins (600/700) for punchy headlines, collection labels, and prices with Mulish (400/600) for product copy, labels, and buttons. Corners are 8-10px, product cards lift on hover, collection tiles carry bold labels over photographs, a sticky cart bar follows the shopper, and the product grid runs denser than a service site, four and five across on desktop.

colors:
  primary: "#9D174D"
  primary-active: "#831843"
  primary-disabled: "#F5C9DD"
  primary-error-text: "#B91C1C"
  primary-error-text-hover: "#991B1B"
  accent: "#FACC15"
  accent-deep: "#CA8A04"
  ink: "#18181B"
  body: "#3F3F46"
  muted: "#71717A"
  muted-soft: "#A1A1AA"
  hairline: "#E4E4E7"
  hairline-soft: "#F1EEF0"
  border-strong: "#C4BFC2"
  canvas: "#FFFFFF"
  surface-soft: "#FAF5F8"
  surface-card: "#FFFFFF"
  surface-strong: "#F3E9EF"
  on-primary: "#FFFFFF"
  on-dark: "#FFFFFF"
  on-accent: "#18181B"
  legal-link: "#9D174D"
  price-was: "#71717A"
  scrim: "#18181B"

typography:
  display-xl:
    fontFamily: "Poppins, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.8px
  display-lg:
    fontFamily: "Poppins, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.5px
  display-md:
    fontFamily: "Poppins, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.2px
  display-sm:
    fontFamily: "Poppins, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  title-md:
    fontFamily: "Poppins, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  title-sm:
    fontFamily: "Poppins, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  price-display:
    fontFamily: "Poppins, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.5px
  body-md:
    fontFamily: "Mulish, system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-sm:
    fontFamily: "Mulish, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  caption:
    fontFamily: "Mulish, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.29
    letterSpacing: 0
  caption-sm:
    fontFamily: "Mulish, system-ui, -apple-system, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.23
    letterSpacing: 0
  badge:
    fontFamily: "Mulish, system-ui, -apple-system, sans-serif"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: 0.3px
    textTransform: uppercase
  micro-label:
    fontFamily: "Mulish, system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 0.5px
    textTransform: uppercase
  uppercase-tag:
    fontFamily: "Mulish, system-ui, -apple-system, sans-serif"
    fontSize: 10px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0.6px
    textTransform: uppercase
  button-md:
    fontFamily: "Mulish, system-ui, -apple-system, sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  button-sm:
    fontFamily: "Mulish, system-ui, -apple-system, sans-serif"
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.29
    letterSpacing: 0
  link:
    fontFamily: "Mulish, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.43
    letterSpacing: 0
  nav-link:
    fontFamily: "Mulish, system-ui, -apple-system, sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 10px
  lg: 12px
  xl: 16px
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
  section: 56px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: 12px 22px
    height: 44px
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
    padding: 11px 21px
    height: 44px
  button-tertiary-text:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
  button-pill-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"
    padding: 8px 16px
  quick-add-button:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.sm}"
    height: 36px
  search-orb:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    height: 40px
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
  promo-banner-strip:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.caption}"
    height: 40px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 72px
  nav-tab-active:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"
  nav-tab-inactive:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
  search-bar:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: 10px 20px
    height: 44px
  collection-chip-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-sm}"
  collection-chip-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"
  product-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
  product-card-photo:
    rounded: "{rounded.md}"
  collection-tile:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-md}"
    rounded: "{rounded.lg}"
  category-link-block:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
  price-row:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
  badge-new:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.badge}"
    rounded: "{rounded.xs}"
    padding: 4px 8px
  badge-sale:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.badge}"
    rounded: "{rounded.xs}"
    padding: 4px 8px
  stock-status-pill:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.muted}"
    typography: "{typography.uppercase-tag}"
    rounded: "{rounded.full}"
    padding: 2px 8px
  spec-row:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: 10px 0
  store-info-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 20px
  cart-drawer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  sticky-cart-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    padding: 12px 16px
  variant-chip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.sm}"
  variant-chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.sm}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 12px 14px
    height: 48px
  newsletter-band:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink}"
    typography: "{typography.display-sm}"
    padding: 48px 24px
  footer-light:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: 48px 64px
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

This is the design language for a **retail store / small shop website** — the site a shopper opens to browse what is new, check whether something is in stock before driving over, find the opening hours, or buy online; and the site the owner uses to push this week's promotion. The base canvas is **crisp white** (`{colors.canvas}` — #FFFFFF) with a blush-tinted soft surface (`{colors.surface-soft}` — #FAF5F8) for alternating bands and the footer, near-black ink (`{colors.ink}` — #18181B) for headlines, prices, and body, and a single voltage of **deep mulberry** (`{colors.primary}` — #9D174D) carrying Add to cart, Shop now, the Sale badge, the active collection chip, and inline links. **Bold yellow** (`{colors.accent}` — #FACC15) is the promotional colour: the banner strip at the very top of the page, the New badge, and promo tags — always with ink text on top, never white.

Type pairs **Poppins** at 600/700 for headlines, collection labels, product names, and prices against **Mulish** at 400/600 for product copy, specs, labels, buttons, and navigation. The display scale is compact (page h1 44px, section headlines 32px) because a shop page is dense with products; the headline introduces a grid and gets out of the way. Prices sit in Poppins 600 so they read as the second most important thing on every card after the photograph.

The shape language is **rounded but firm**. Buttons are 8px radius (`{rounded.sm}`), product cards and photos are 10px (`{rounded.md}`), collection tiles are 12px (`{rounded.lg}`), badges are 4px (`{rounded.xs}`), and the search bar, chips, and icon buttons are pills or circles. The corners say "friendly", the density and the yellow strip say "there's a deal on".

**Key Characteristics:**
- Single brand colour: `{colors.primary}` (#9D174D — deep mulberry) carries every primary CTA, the Sale badge, the active collection chip, and inline links. White on mulberry reaches 7.9:1.
- Bold yellow promotion: `{colors.accent}` (#FACC15) for the promo banner strip, New badges, and promo tags — ink text only (11.7:1). It is the loudest colour on the page and appears in at most three places at once.
- Badge system: `{component.badge-new}` (yellow / ink) and `{component.badge-sale}` (mulberry / white), stacked top-left on product photos; `{component.stock-status-pill}` ("Low stock", "In store only") in muted on soft.
- Promo banner strip: a 40px yellow band above the header carrying one rotating message ("Free local delivery over £— · ends Sunday") with a dismiss control.
- Product cards are photo-first and dense: square photographs with `{rounded.md}` clipping, a quick-add button appearing on hover, name, price row with optional strikethrough "was" price, and a colour-swatch row. Grid runs 4-up and 5-up on desktop.
- Collection tiles: 4:3 or 1:1 photographs with a bold Poppins label over a darkening gradient — "New in", "Gifts under £—", "Sale" — in a 3-up or 2+1 arrangement.
- Sticky cart bar on mobile and a slide-in cart drawer on desktop; the cart icon in the header carries a mulberry count bubble.
- Store info is a first-class surface: hours, address, phone, and an "In stock in store" note on product pages — a shop that sells in person must say where and when.
- Elevation is a hover lift: a short, slightly warm shadow lifts product cards 2px on pointer hover; the cart drawer and dropdowns use the same tier.
- 8px base spacing system, with major sections at `{spacing.section}` (56px) — tighter than a service site, because a shop wants more products per scroll.

## Colors

### Brand & Accent
- **Mulberry** (`{colors.primary}` — #9D174D): The single brand colour. Used for primary CTA backgrounds (Add to cart, Shop now, Checkout), the Sale badge, the active collection chip, the cart count bubble, the active nav tab, and inline links. Deep enough to feel premium, warm enough to feel playful.
- **Mulberry Active** (`{colors.primary-active}` — #831843): The press / pointer-down variant — one step darker. Used on `{component.button-primary-active}`.
- **Mulberry Disabled** (`{colors.primary-disabled}` — #F5C9DD): A pale tint used on disabled CTAs (e.g. Add to cart when a variant is sold out).
- **Bold Yellow** (`{colors.accent}` — #FACC15): The promotional colour. `{component.promo-banner-strip}`, `{component.badge-new}`, and promo tags on collection tiles. Always carries `{colors.on-accent}` ink text; white on yellow is 1.5:1 and forbidden.
- **Yellow Deep** (`{colors.accent-deep}` — #CA8A04): A darker gold used only for a yellow icon or star-shaped promo sticker outline on white, where the bright yellow would vanish.

### Surface
- **Canvas** (`{colors.canvas}` — #FFFFFF): The default page floor for every public page. Product photography needs a neutral white behind it.
- **Surface Soft** (`{colors.surface-soft}` — #FAF5F8): The blush fill — used on the search bar, stock pills, alternating bands ("Shop by collection"), the footer, and disabled fields.
- **Surface Card** (`{colors.surface-card}` — #FFFFFF): Store-info cards and the product detail panel — white on white, separated by a 1px hairline.
- **Surface Strong** (`{colors.surface-strong}` — #F3E9EF): Slightly heavier blush fill — round icon-button surface, the newsletter band, and the swatch row background on hover.

### Hairlines & Borders
- **Hairline** (`{colors.hairline}` — #E4E4E7): The default 1px border tone — header bottom rule, product card borders on hover, cart line-item separators, footer column splitters.
- **Hairline Soft** (`{colors.hairline-soft}` — #F1EEF0): A lighter divider between spec rows and inside the cart drawer.
- **Border Strong** (`{colors.border-strong}` — #C4BFC2): A heavier stroke used on secondary-button outlines, variant chips, and form inputs after focus.

### Text
- **Ink** (`{colors.ink}` — #18181B): The dominant text colour on light surfaces. Headlines, product names, prices, body paragraphs, nav links, and the quick-add button fill. A neutral near-black that keeps product colours true.
- **Body** (`{colors.body}` — #3F3F46): Running text inside product descriptions and the returns policy where ink would feel heavy.
- **Muted** (`{colors.muted}` — #71717A): Sub-labels inside category link blocks, stock pills, "View all" links, swatch names, and the legal band.
- **Muted Soft** (`{colors.muted-soft}` — #A1A1AA): Disabled text and sold-out variant chips. Used very sparingly.
- **Price Was** (`{colors.price-was}` — #71717A): The strikethrough original price beside a sale price. Muted so the current price in ink wins.
- **On Primary** (`{colors.on-primary}` — #FFFFFF): White text on mulberry CTAs and the Sale badge.
- **On Dark** (`{colors.on-dark}` — #FFFFFF): White text on the ink-filled quick-add button, selected variant chips, and over collection-tile gradients.
- **On Accent** (`{colors.on-accent}` — #18181B): Ink text on yellow surfaces.

### Semantic
- **Error** (`{colors.primary-error-text}` — #B91C1C): Inline error text for checkout and newsletter form validation. A true red, distinct from mulberry.
- **Error Hover** (`{colors.primary-error-text-hover}` — #991B1B): Darkens on link hover.
- **Legal Link** (`{colors.legal-link}` — #9D174D): Inline links inside legal copy (Returns, Privacy, Terms) share the brand colour.

### Scrim
- **Scrim** (`{colors.scrim}` — #18181B at 50% opacity): The backdrop tone behind the cart drawer, the mobile nav sheet, and the size-guide dialog; also the base of the gradient on collection tiles. Stored as the base hex; opacity is applied at render time.

## Typography

### Font Family
The system pairs two families. **Poppins** carries every display and title role — the page h1, section headlines, collection-tile labels, product names, and prices. **Mulish** carries body, captions, buttons, badges, labels, nav links, and inputs. Fallbacks walk `system-ui, -apple-system, 'Segoe UI', sans-serif` for both. There is no mono role; prices use Poppins with `font-variant-numeric: tabular-nums` so columns in the cart align.

The pairing is deliberate: a geometric sans with round bowls makes product names and prices feel friendly and bold at small sizes; a humanist sans at light weight keeps descriptions and specs quick to read in a dense grid without competing with the headline face.

### Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Mulish:wght@400;600&display=swap" rel="stylesheet">
```
```css
:root {
  --font-display: Poppins, system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-body: Mulish, system-ui, -apple-system, sans-serif;
}
```

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 44px | 700 | 1.1 | -0.8px | Homepage hero line and collection page h1 ("New season, new shelves") |
| `{typography.display-lg}` | 32px | 700 | 1.15 | -0.5px | Section headlines ("Shop by collection", "This week's picks") |
| `{typography.price-display}` | 32px | 700 | 1.1 | -0.5px | Product detail price |
| `{typography.display-md}` | 24px | 700 | 1.25 | -0.2px | Collection-tile labels over photographs, product detail h1 |
| `{typography.display-sm}` | 20px | 600 | 1.3 | 0 | Sub-section titles ("Details", "Delivery & returns"), newsletter band headline |
| `{typography.title-md}` | 16px | 600 | 1.3 | 0 | Product card names, price row, cart line-item names |
| `{typography.title-sm}` | 15px | 600 | 1.3 | 0 | Category link block titles, footer column heads |
| `{typography.body-md}` | 16px | 400 | 1.55 | 0 | Product descriptions, returns policy, store info |
| `{typography.body-sm}` | 14px | 400 | 1.45 | 0 | Card meta lines, swatch names, specs, cart quantities |
| `{typography.caption}` | 14px | 600 | 1.29 | 0 | Promo banner message, form field labels |
| `{typography.caption-sm}` | 13px | 400 | 1.23 | 0 | Footer legal line, delivery estimate footnotes |
| `{typography.badge}` | 11px | 600 | 1.18 | 0.3px (uppercase) | "NEW" / "SALE" badge text |
| `{typography.micro-label}` | 12px | 600 | 1.33 | 0.5px (uppercase) | Eyebrow labels ("Collection"), filter group heads |
| `{typography.uppercase-tag}` | 10px | 600 | 1.25 | 0.6px (uppercase) | Stock status pills ("Low stock", "In store only") |
| `{typography.button-md}` | 15px | 600 | 1.25 | 0 | Primary CTA button labels ("Add to cart", "Shop now") |
| `{typography.button-sm}` | 13px | 600 | 1.29 | 0 | Quick-add, collection chips, variant chips |
| `{typography.link}` | 14px | 600 | 1.43 | 0 | Inline body links ("Size guide", "View all") |
| `{typography.nav-link}` | 15px | 600 | 1.25 | 0 | Top nav labels (Shop, Collections, Sale, Our store) |

### Principles
Display weights are heavy on purpose — Poppins 700 at 24–44px is the voice of a shop that has something to show you. The restraint is in size: nothing above 44px, because the grid, not the headline, is the hero. Product names stay at 16px / 600 so a 5-up grid stays readable.

The single typographically loud moment is the **product detail price** (`{typography.price-display}` — 32px / 700) beside the Add to cart button. On cards the price is 16px / 600 in ink with the "was" price struck through in muted beside it — the sale is signalled by the badge, not by colouring the price.

Mulish is loaded at 400 and 600 only. Where a small label wants emphasis (badges, micro-labels, buttons, nav), it uses 600 with a touch of uppercase tracking; 700 is reserved for Poppins.

### Note on Font Substitutes
If Poppins is unavailable, **Outfit** or **Jost** at 600/700 are the closest open substitutes. If Mulish is unavailable, **Nunito Sans** or **Source Sans 3** transfer cleanly. Under substitution, check the price row — geometric substitutes can render numerals wider and break the 5-up grid at 1128px.

## Layout

### Spacing System
- **Base unit:** 4px (with 2px micro-step).
- **Tokens:** `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.base}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 56px.
- **Section padding (vertical):** `{spacing.section}` (56px) for major page bands — tighter than a service or hospitality site, because a shop wants more products per scroll.
- **Card internal padding:** `{spacing.md}` (12px) for the product-card meta block; `{spacing.lg}` (24px) for `{component.cart-drawer}`; `{spacing.base}` 20px for `{component.store-info-card}`; `{spacing.sm}` (8px) between badges and between swatches.
- **Gutters:** `{spacing.base}` (16px) between product cards; `{spacing.lg}` (24px) between collection tiles; `{spacing.sm}` (8px) between collection chips.

### Grid & Container
- **Max content width:** ~1320px centred on the homepage and collection pages — wider than a service site so five products fit across. Product detail pages cap closer to 1120px to keep the gallery and buy panel readable.
- **Product grid:** 4-up at desktop by default, 5-up on wide; 2-up on mobile (never 1-up — shoppers scan in pairs).
- **Collection tiles:** 3-up at desktop, or a 2+1 arrangement with one tall tile on the left.
- **Product detail:** 2-column with the image gallery on the left (~56% width) and the buy panel (title, price, variants, Add to cart, stock note, delivery/returns accordion) on the right (~40%), sticky on desktop.
- **Category link grid (footer area):** 4-column grid at desktop with each cell housing a category name in `{typography.title-sm}` and a sub-label in `{typography.body-sm}` muted.
- **Footer:** 4-column link list (Shop / Help / Our store / Follow) on the soft-surface band at desktop, collapsing to 1-column on mobile with store hours first.

### Whitespace Philosophy
The system gives section bands 56px of vertical room and packs product cards 16px apart — the page reads as "short headline, full shelf." Collection tiles and the newsletter band are the only places the grid loosens to 24px gutters; everything else stays dense so the shelf feels stocked.

## Elevation

The system has essentially **one shadow tier** plus the flat baseline, and the tier is a hover lift rather than a resting state.

- **Flat (no shadow):** Body, header, product grid at rest, collection tiles, footer — most surfaces.
- **Hover lift:** `box-shadow: rgba(24, 24, 27, 0.04) 0 1px 2px 0, rgba(24, 24, 27, 0.08) 0 6px 16px -2px, rgba(157, 23, 77, 0.06) 0 12px 28px -8px` with `transform: translateY(-2px)` — applied to product cards on pointer hover (revealing the quick-add button), and at rest on the cart drawer, the header dropdowns, and the sticky cart bar. This is the single shadow definition in the entire system; the faint mulberry tint in the last layer keeps it on-brand.
- **Gradient overlay:** collection tiles carry `linear-gradient(180deg, rgba(24,24,27,0) 30%, rgba(24,24,27,0.7) 100%)` over the photograph so the bold white label stays legible — a legibility device, not elevation.
- **Modal scrim:** `{colors.scrim}` rendered at 50% opacity — the backdrop behind the cart drawer, mobile nav sheet, and size-guide dialog.

There are no progressive elevation tiers — the system either has the one shadow or none. Depth comes from product photography, the white-on-blush band alternation, and the hover lift rather than from layered shadows.

## Components

### Buttons

**`button-primary`** — Mulberry fill, white text, 8px radius, 12×22px padding, 44px height, Mulish 600. The most common CTA: "Add to cart", "Shop now", "Checkout". White on #9D174D reaches 7.9:1.

**`button-primary-active`** — The press state. Background flips to `{colors.primary-active}`. No transform, no shadow change.

**`button-primary-disabled`** — Pale mulberry tint at #F5C9DD with white text. Cursor not-allowed. Used on Add to cart when the selected variant is sold out; a "Notify me" secondary appears beside it.

**`button-secondary`** — White fill with ink text and a 1px `{colors.border-strong}` outline. 8px radius. Used for "Notify me", "Continue shopping", "Visit store", and inverse CTAs over mulberry surfaces.

**`button-tertiary-text`** — Plain mulberry text, no surface, no border, underlined on hover. Used for "View all", "Size guide", and modal close labels.

**`button-pill-primary`** — A pill-shaped mulberry CTA used inside the promo banner and on collection tiles ("Shop the sale") — 9999px radius, 8×16px padding, 13px label.

**`quick-add-button`** — An ink-filled 36px button that slides up over the bottom edge of a product photo on hover (always visible on touch devices): "Quick add" or a plus icon; for multi-variant products it opens the variant chips inline.

### Promo & Search

**`promo-banner-strip`** — The 40px yellow band above the header carrying one promotional message in `{typography.caption}` ink, centred, with an optional `{component.button-pill-primary}` and a dismiss "×" at the right. Messages rotate if more than one; the strip hides once dismissed for the session.

**`search-bar`** — A blush-filled pill, 44px tall, with a search icon left and placeholder text ("Search products") in `{typography.body-sm}` muted. Sits centre in the header on desktop; collapses to an icon on mobile that expands a full-width bar.

**`search-orb`** — The round mulberry orb at the right edge of the expanded mobile search bar, 40×40px, white magnifier icon.

### Top Navigation

**`top-nav`** — White surface, 72px height, 1px bottom hairline. The shop wordmark sits flush left, the nav tabs (Shop / Collections / Sale / Our store) and the search bar sit centre, and utilities (account, wishlist, cart icon with mulberry count bubble) sit flush right. Sticky on scroll.

**`nav-tab-active`** — Mulberry label in `{typography.nav-link}` with a 2px mulberry underline rule 6px beneath. "Sale" is always mulberry even when inactive.

**`nav-tab-inactive`** — Ink label, no underline. "Shop" opens a mega-menu of category columns on hover.

**`collection-chip-strip`** — A horizontally scrolling row of pill chips (All / New in / Bestsellers / Gifts / Sale / …) above the product grid in `{typography.button-sm}`. Chips have a hairline border on white.

**`collection-chip-active`** — Mulberry fill, white text, full pill. Filtering is instant; a result count updates beside the strip.

### Product Cards & Tiles

**`product-card`** — A photo-first card. 1:1 product photograph with `{rounded.md}` 10px clipping, a badge stack top-left (`{component.badge-new}`, `{component.badge-sale}`), a wishlist heart top-right (`{component.icon-button-circle}`, mulberry-filled when saved), and the `{component.quick-add-button}` revealed on hover. Beneath the photo, 12px padding: the product name in `{typography.title-md}`, `{component.price-row}`, a swatch row of 16px circles for colour variants, and an optional `{component.stock-status-pill}`. On hover the card lifts.

**`product-card-photo`** — The photo plate itself, separated as a token because the cart drawer, wishlist, and "Recently viewed" strip reuse just the photo at smaller sizes.

**`price-row`** — Current price in `{typography.title-md}` ink, with the original price struck through in `{colors.price-was}` `{typography.body-sm}` beside it when on sale, and a "from" prefix in muted for multi-variant ranges. Prices are **placeholders** until the owner supplies the catalogue.

**`collection-tile`** — A 4:3 or 1:1 photograph clipped at `{rounded.lg}` 12px with the gradient overlay from the Elevation section, a bold Poppins label in `{typography.display-md}` white bottom-left ("New in", "Gifts under £—", "Sale"), and an optional yellow promo tag top-left ("Up to 40% off" — placeholder). The whole tile is a link; the photo scales 1.03 on hover.

**`badge-new`** — Yellow fill, ink uppercase text in `{typography.badge}`, 4px radius, 4×8px padding. Stacked above the Sale badge when both apply.

**`badge-sale`** — Mulberry fill, white uppercase text, same geometry. May carry a percentage ("-30%").

**`stock-status-pill`** — A blush pill with muted uppercase text: "Low stock", "In store only", "Online only", "Sold out". Appears on cards and in the buy panel.

**`category-link-block`** — A text cell in the footer-area grid: category name in `{typography.title-sm}` ink above a sub-label in `{typography.body-sm}` muted. No card surface, no shadow.

### Product Detail

**`variant-chip`** — An 8px-radius chip with ink text and a 1px `{colors.border-strong}` outline for sizes and options, 40px tall. Sold-out variants show muted-soft text with a diagonal strike.

**`variant-chip-selected`** — Ink fill, white text. One selected chip per option group.

**`spec-row`** — A 1-column list of key details (material, dimensions, care) as label / value pairs in `{typography.body-md}`, 10px row padding, `{colors.hairline-soft}` between rows. Delivery & returns sit beneath as an accordion with the returns policy **placeholder** text.

**`store-info-card`** — A white card with `{rounded.md}` 10px, 1px hairline, 20px padding, holding the store address, a tel: link, today's hours with an open / closed state, and a "Get directions" tertiary link. On product pages it carries an "In stock in store" note (placeholder until stock data exists). On the Our store page it sits beside a map embed placeholder and a short gallery of the shop interior.

### Cart

**`sticky-cart-bar`** — On mobile, a white bar pinned to the bottom of product pages with the price in `{typography.title-md}` left and a full-width Add to cart `{component.button-primary}` right; on collection pages it shows the cart total and a "View cart" button when the cart is non-empty. Carries the hover-lift shadow at rest.

**`cart-drawer`** — A right-anchored slide-in panel (420px wide on desktop, full-width on mobile) with `{rounded.lg}` on the inner edge, 24px padding: line items (photo, name, variant, quantity stepper, price), a subtotal row in `{typography.title-md}`, a delivery estimate in `{typography.caption-sm}`, and a full-width Checkout `{component.button-primary}`. The checkout itself belongs to the **e-commerce platform (undecided)** — the drawer is the hand-off point.

### Forms

**`text-input`** — White surface, 1px hairline outline, `{rounded.sm}` 8px radius, 48px height, 12×14px padding. Stacked label above (in `{typography.caption}` ink), placeholder in `{typography.body-md}` muted. On focus, the border thickens to 2px and flips to `{colors.primary}` — no glow, no ring.

**`newsletter-band`** — A surface-strong band, 48×24px padding, with a `{typography.display-sm}` headline ("Get first dibs on new drops"), one `{component.text-input}` for email, a mulberry Subscribe button, and a `{typography.caption-sm}` consent line linking to the privacy policy.

### Footer

**`footer-light`** — Blush soft-surface band, 48×64px padding. Four columns of link blocks (Shop / Help / Our store / Follow), separated by 24px gutters. Each column heads with a `{typography.title-sm}` ink label and stacks `{component.footer-link}` rows in `{typography.body-sm}` ink. The Our store column repeats hours, address, and phone.

**`legal-band`** — A bottom strip beneath the footer columns carrying the copyright line, returns policy link, privacy link, terms link, accepted-payment icons (placeholder), and social icons. All text in `{colors.muted}` at `{typography.caption-sm}`.

## Do's and Don'ts

- **Do** keep yellow to the promo strip and badges — at most three yellow elements visible at once.
- **Do** put ink text on yellow and white text on mulberry; never the reverse.
- **Do** show stock and store hours wherever a shopper might decide to visit in person.
- **Do** keep the product grid 2-up on mobile and 4- or 5-up on desktop.
- **Don't** colour prices mulberry or red — the Sale badge signals the discount.
- **Don't** stack more than two badges on a product photo.
- **Don't** add drop shadows at rest on product cards; the lift is a hover reward.
- **Don't** invent reviews, star ratings, "bestseller" counts, or payment-provider logos — mark them as placeholders.

## Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 744px | Promo strip stays; header collapses to wordmark + search icon + cart; nav tabs hide behind a sheet; product grid 2-up with quick-add always visible; collection tiles 1-up; product detail stacks gallery over buy panel; sticky cart bar appears. |
| Tablet | 744–1128px | Header keeps nav tabs and a narrower search bar; product grid 3-up; collection tiles 2-up; product detail 2-column with a non-sticky buy panel; cart drawer 380px. |
| Desktop | 1128–1440px | Full header with tabs and search centred; product grid 4-up; collection tiles 3-up; product detail 2-column with sticky buy panel; cart drawer 420px. |
| Wide | > 1440px | Content width caps at 1320px on collection pages and 1120px on product detail; product grid 5-up; gutters absorb the rest. |

### Touch Targets
- Primary CTAs at minimum 44×44px; the mobile sticky-bar Add to cart is 48px tall.
- The cart icon and its count bubble are a 44×44px target in the header.
- Wishlist heart is 36×36px round, with 8px padding inside the photo card.
- Variant chips are 40px tall; collection chips are 36px tall with 8px gaps.

### Collapsing Strategy
- Nav tabs collapse into a hamburger sheet below 744px; the cart and search never collapse past an icon.
- The search bar collapses to an icon that expands a full-width bar with the search orb on mobile.
- Product and collection grids drop column counts cleanly at each breakpoint — never reflow rows; always reduce columns; never go below 2-up for products.
- The buy panel on product detail switches from sticky right-rail to the sticky bottom bar on mobile, carrying just the price and Add to cart.

## Iteration Guide

- **To make it calmer:** remove the promo strip, drop `{spacing.section}` to 64px, and use 3-up grids; keep mulberry and the badge system.
- **To make it louder / more sale-driven:** allow a yellow collection tile label background and a yellow sticky "Sale ends" chip in the header — still ink text on yellow.
- **To make it more premium:** switch Poppins display weight to 600 everywhere, widen product gutters to 24px, and drop the quick-add hover.
- **To add a new collection:** add a chip and a collection tile; do not add a new colour or a new badge style.
- **To wire a storefront:** the product card, price row, variant chips, cart drawer, and sticky bar map onto any platform's product / variant / line-item model; checkout is handed off at the drawer.

## Known Gaps

- **Hover state colours:** card hover is the lift plus quick-add reveal; link hover is `{colors.primary-active}`. Other hover states are left to implementation.
- **Loading states / skeleton screens:** not specified — grids load as static content until a platform is chosen.
- **Checkout and account:** owned by the undecided e-commerce platform; not styled here beyond the cart drawer hand-off.
- **Form input error states:** error text colour (`{colors.primary-error-text}`) is documented, but the full input outline + helper-text combination on validation failure is left to implementation.
- **Stock data:** "In stock in store" and stock pills assume a stock feed; without one they must be hidden rather than guessed.
- **Reviews and ratings:** no review or star component is defined, by design; add one only with verified, sourced reviews.
- **Returns policy, delivery pricing, payment icons:** placeholders until the owner supplies real terms and providers.

---

## Revision — 2026-10-08 — Homepage built after the Vogal Shopify demo

Built at the owner's request after `vogal-demo.myshopify.com`, following that page's composition, geometry, devices and motion, and keeping only this template's own palette and typefaces. Geometry was read from the live page's computed styles rather than estimated.

### Measured from the reference

| Property | Reference | Here |
|---|---|---|
| Container | 1300px | 1300px |
| Hero display | 70px / 700 / line-height 84px (Roboto) | `clamp(34px, 6.4vw, 70px)` Poppins 700, tracking −0.03em |
| Section heading | 26px / 500 / line-height 33.8px, centred (Domine, a serif) | 26 → 32px Poppins 700, centred. **The serif is not adopted** — this template pairs Poppins with Mulish and that pairing is kept. |
| Body | 13–14px / 400 / tracking 0.26px | 14–15px / 1.6 Mulish |
| Buttons | 6px radius, uppercase, 12–14px / 500, 16×40px padding, 38–42px tall | 8px radius (`{rounded.sm}`), uppercase, 13–14px / 600, 44–48px tall — the DESIGN.md's `button-primary` geometry, which also clears the 44px touch target the reference misses |
| Product plate | 20px radius on a pale lilac-grey ground | 20px radius (`rounded-xl`) on `{colors.surface-soft}` |
| Category medallion | circular photograph with the label beneath | the same; the circle joins pills as the only fully round shapes |
| Announcement bar | black, 11px uppercase, phone left / message centre / locale right | the same shape in `{colors.accent}` with `{colors.on-accent}` ink on top, which is what this file reserves yellow for |

### Rules this revision overrides

| Rule above | What was built | Why |
|---|---|---|
| Radius vocabulary of 10px cards / 12px tiles | 20px on product plates, collection tiles, the medallion circles and the drawer edge | The reference's geometry is appreciably rounder, and the 20px plate is the single most recognisable thing about its product grid. Buttons, inputs and badges keep this file's 8px / 4px. |
| "The only inverted surfaces are the manifesto band and the footer" — this file names no dark band at all | One full-bleed `{colors.ink}` reassurance band above the footer, and the footer itself stays blush | The reference closes with a dark promise strip; without it the foot of the page has no punctuation. It is the only dark surface on the page. |
| Section rhythm at `{spacing.section}` (56px) | 48px on phones, 64px above (`py-12 sm:py-16`) | Matched to the reference's own vertical rhythm at 1440. |

### Added, and not from the reference

The reference is a fashion demo with no shop behind it. This file makes store information a first-class surface — *"a shop that sells in person must say where and when"* — so a **Visit band** was added between the picks rail and the journal, carrying the address, the full week of opening hours, the phone, the reserve-to-try offer and a stock caveat. It is the section that most distinguishes this template from the reference.

### Deliberately not copied

- **The "someone in Amsterdam just bought this" toast.** It is a fabricated social-proof claim, and the Don'ts above forbid inventing bestseller counts and the like.
- **A "Best Selling!" product badge.** The badge system here is New and Sale only. The reference's bestseller rail became "This month's picks", framed as a human selection rather than a sales claim.
- **Brand logo marks and payment-provider marks.** Both are bracketed text placeholders with a visible note, per the Don'ts.

### Accessibility notes

- Mulberry is 2.2:1 on the ink band, so that band carries `.rst-on-dark`, which swaps `--t-focus` to white.
- Yellow appears in exactly two roles on the page — the promo strip and the New badge — and always under ink text.
- The quick-add control is revealed on hover only where a fine pointer exists; everywhere else it is simply always visible, so it is never unreachable.
- The colour swatches on a product card are a real radio group with a visually hidden legend naming the product, so the choice quick-add acts on is announced.
