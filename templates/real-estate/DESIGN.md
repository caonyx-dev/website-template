---
version: beta
name: Real-Estate-Template
description: A confident, high-contrast interface for a real estate development and construction group. Oversized Outfit headlines at -0.02em sit on a white canvas broken by warm beige bands and one full black band; a single chartreuse lime (#E4ED64) carries every button, pill, icon tile and underline, always with black text on it. Geometry is the signature — 30px, 50px and 80px radii plus asymmetric notched corners that let one section curve into the next, with exactly one diffuse shadow under floating cards.

colors:
  primary: "#E4ED64"
  primary-deep: "#CDD55A"
  primary-focus: "#000000"
  on-primary: "#000000"
  accent: "#E4ED64"
  accent-deep: "#CDD55A"
  accent-soft: "#F4F7D4"
  ink: "#000000"
  body: "#4B4B4B"
  mute: "#8A8A8A"
  ink-muted-60: "#6E6E6E"
  canvas: "#FFFFFF"
  canvas-soft: "#F6F3EC"
  canvas-soft-2: "#F5F5F5"
  surface: "#FFFFFF"
  surface-sunk: "#FAFAFA"
  hairline: "#E0E0E0"
  hairline-strong: "#C9C9C9"
  surface-dark: "#000000"
  surface-dark-2: "#1B1F12"
  surface-grey: "#6E6E6E"
  on-dark: "#FFFFFF"
  on-dark-muted: "#A8A8A8"
  on-accent: "#000000"
  success: "#2E7D4F"
  warning: "#B8864F"
  error: "#C2403A"

typography:
  hero-display:
    fontFamily: "Outfit, 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: 90px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -0.02em
  display-lg:
    fontFamily: "Outfit, 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: 70px
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: -0.02em
  display-md:
    fontFamily: "Outfit, 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  display-sm:
    fontFamily: "Outfit, 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: 30px
    fontWeight: 700
    lineHeight: 1.16
    letterSpacing: -0.01em
  tagline:
    fontFamily: "Outfit, 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: 21px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.01em
  lead:
    fontFamily: "'Hanken Grotesk', 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body:
    fontFamily: "'Hanken Grotesk', 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.44
    letterSpacing: 0
  body-strong:
    fontFamily: "'Hanken Grotesk', 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 0
  caption:
    fontFamily: "'Hanken Grotesk', 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.47
    letterSpacing: 0
  badge:
    fontFamily: "'Hanken Grotesk', 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0.08em
    textTransform: uppercase
  button-primary:
    fontFamily: "'Hanken Grotesk', 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0
  nav-link:
    fontFamily: "'Hanken Grotesk', 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  fine-print:
    fontFamily: "'Hanken Grotesk', 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  none: 0px
  xs: 10px
  sm: 20px
  md: 30px
  lg: 50px
  xl: 80px
  pill: 9999px
  full: 9999px

shadows:
  card: "0 0 30px rgba(0, 0, 0, 0.05)"
  card-raised: "0 0 40px rgba(0, 0, 0, 0.09)"
  floating: "0 0 30px rgba(0, 0, 0, 0.05)"

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  section: 120px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-primary}"
    rounded: "{rounded.pill}"
    padding: 18px 32px
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button-primary}"
    rounded: "{rounded.pill}"
    padding: 18px 32px
  button-arrow-round:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 56px
  badge-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.badge}"
    rounded: "{rounded.pill}"
    padding: 12px 22px
  global-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.pill}"
    height: 84px
  card-service:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 32px
  card-glass:
    backgroundColor: "rgba(255, 255, 255, 0.10)"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.md}"
    padding: 32px
  band-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
  band-soft:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  input-field:
    backgroundColor: "{colors.canvas-soft-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 20px 28px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    rounded: "{rounded.lg}"
---

## Overview

This is the design system for a **real estate development and construction group** — a company that originates, funds, builds and then manages its own schemes. The site exists to make that single-accountability story legible to investors, councils and buyers, and to get a specific site or scheme in front of a named person.

The mood is **confident and graphic**. Where the agency-era version of this template whispered, this one states. Pages are built from full-width bands that alternate white, warm beige and one full black, and the band change itself is the section divider — but the bands do not butt against each other. They **curve into each other**: a white section ends with its bottom corners rounded at 80px over the beige below, a dark band starts with 50px top corners. That notching is the single most recognisable move in the system and it is what makes the page read as designed rather than stacked.

Typography does the shouting. Outfit at 700 and `-0.02em` runs from 90px in the hero down to 30px for card titles, always tight, always sentence case. Body copy is Hanken Grotesk at 18px/1.44 in a soft near-black (`{colors.body}` — #4B4B4B), never pure black, so headlines stay the darkest thing on the page.

Colour is almost entirely white, beige and black. One chartreuse lime (`{colors.primary}` — #E4ED64) carries every interactive and emphatic element: button fills, the round arrow buttons, icon tiles, category pills, the underline beneath footer contact details, and the `+` after a statistic. **Lime is a surface colour, never a text colour** — it fails contrast against white at roughly 1.3:1, and always takes black text on top of it (about 15.6:1).

**Key characteristics:**
- Bands alternate white → beige → black, joined by notched 50–80px corners rather than straight edges.
- One lime accent on surfaces only; black text on every lime fill.
- Oversized Outfit display (90/70/44/30) at `-0.02em`, sentence case throughout.
- Exactly one shadow in the system (`{shadows.card}`), used only on cards that float over photography or over a band change.
- Pill geometry for all controls — buttons, badges, inputs and category tags are fully rounded; cards are not.
- Photography is always inside a rounded container, never bled to a hard rectangle except behind a scrim.

## Colors

### Brand & accent
- **Lime** (`{colors.primary}` — #E4ED64): every button fill, round arrow button, icon tile, category pill, statistic `+`, and the underline under footer phone and email. Pairs only with `{colors.on-accent}` (black). Never use as text, never on the dark band as text.
- **Lime pressed** (`{colors.primary-deep}` — #CDD55A): the `:active` fill. The hover state is a 2px lift plus this fill, not a colour inversion.
- **Lime tint** (`{colors.accent-soft}` — #F4F7D4): the only tinted background — selection highlight and the "what happens next" note inside the enquiry card.

### Surfaces
- **White** (`{colors.canvas}` — #FFFFFF): the default band and every floating card.
- **Beige** (`{colors.canvas-soft}` — #F6F3EC): the warm alternate band. Carries the services grid and the testimonial. On beige, cards go white.
- **Grey** (`{colors.canvas-soft-2}` — #F5F5F5): form field fills and the statistic tiles in the impact bento.
- **Black** (`{colors.surface-dark}` — #000000): the projects band, and the type colour for all headlines.
- **Olive-black** (`{colors.surface-dark-2}` — #1B1F12): a barely-there warm variant used behind the projects band's numerals so they read as embossed rather than flat.
- **Grey band** (`{colors.surface-grey}` — #6E6E6E): the closing call-to-action band only, where an oversized watermark of the wordmark sits behind the statement.

### Text
- **Black** (`{colors.ink}`): all display type and card titles.
- **Soft black** (`{colors.body}` — #4B4B4B): all body copy, roughly 8.9:1 on white.
- **Mute** (`{colors.mute}` — #8A8A8A): dates, meta, and the statistic captions. 3.5:1 on white, so it is restricted to non-essential supporting text at 15px and above, never to anything a visitor must read.
- On the black band: `{colors.on-dark}` for copy, `{colors.on-dark-muted}` (#A8A8A8) for supporting lines.

### Hairlines
`{colors.hairline}` (#E0E0E0) for the rules between commitment rows, between footer columns, and above the legal row. `{colors.hairline-strong}` only where a rule crosses a beige band.

## Typography

### Families
- **Display — Outfit** (700). A geometric grotesque with a double-storey `a` and wide round bowls. It replaces the reference's commercial Involve; the character is the same and it loads through `next/font/google`.
- **Body — Hanken Grotesk** (400/500/600). A humanist sans that stays even at 18px and holds up in form fields.

### Hierarchy
| Role | Size / weight | Tracking | Use |
|---|---|---|---|
| `hero-display` | 90 / 700 | -0.02em | The hero statement only, two lines |
| `display-lg` | 70 / 700 | -0.02em | Section headings |
| `display-md` | 44 / 700 | -0.02em | The closing band, the enquiry heading |
| `display-sm` | 30 / 700 | -0.01em | Card titles, team names |
| `tagline` | 21 / 600 | -0.01em | Commitment row titles, post titles |
| `lead` | 20 / 400 | 0 | The line under a section heading |
| `body` | 18 / 400 | 0 | Everything else |
| `caption` | 15 / 400 | 0 | Meta, statistic captions |
| `badge` | 12 / 600 | 0.08em, uppercase | The pill above a section heading |

### Principles
- Headlines are **sentence case**, never title case and never uppercase. Only the badge pill is uppercase.
- Headlines break on meaning, as authored lines — not wherever the column happens to end.
- Never letterspace body copy. Only `badge` carries positive tracking.
- Numerals in statistics are `tabular-nums` so a counting animation does not reflow the row.

## Layout

### Grid & container
Content sits in a 1280px container with 40px gutters at desktop, 24px at tablet, 20px at phone. The grid is 12 columns with a 24px gap. Bands are full-bleed; their content is not.

### Vertical rhythm
`{spacing.section}` is 120px at desktop, 80px at tablet, 64px at phone. A band that follows a notched corner adds 24px so the curve does not eat the heading's air.

### Whitespace philosophy
The reference earns its calm by giving a heading an entire row to itself before anything else appears. Keep that: a section heading never shares a row with its grid.

## Shapes

### Radius scale
| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 10px | Category pills on posts, small inline tags |
| `{rounded.sm}` | 20px | Statistic tiles, the testimonial avatar plate |
| `{rounded.md}` | 30px | Every card — service, post, team, glass |
| `{rounded.lg}` | 50px | Band notches, the footer card, the enquiry photo frame |
| `{rounded.xl}` | 80px | The largest band notch, where white meets beige |
| `{rounded.pill}` | 9999px | All buttons, badges, inputs and the nav bar |

### Notched corners — the signature
Sections do not meet on a straight line. The pattern is one of:
- `border-radius: 0 0 80px 80px` on the upper section, so it curves down into the one below;
- `border-radius: 50px 50px 0 0` on the lower section, so it curves up over the one above;
- a **concave cut-out** at a card's top-right, with a round arrow button floating in the carve.

That third case is how every service card and team card is built, and it is a genuine concave curve, not a rounded corner. It is made with a mask rather than a border-radius — a circle centred on the card's top-right corner is masked out of the card:

```css
.re-notch {
  --notch: 78px;
  mask-image: radial-gradient(circle var(--notch) at 100% 0, transparent 97%, #000 98%);
}
```

Two rules follow from this and both are easy to get wrong:
1. **The disc must be a sibling of the masked element, never a child** — the mask clips its own descendants, so a disc placed inside the card disappears. Wrap the card in an unmasked element and position the disc against that.
2. **The carve radius must clear the disc.** For a 56px disc inset 6px from both edges, its centre sits ~48px from the corner, so the carve needs ≥ 48 + 28 + gap. At `--notch: 78px` that leaves an even ~2px visual gap once the gradient's soft edge is accounted for. Change the disc size and this value has to move with it.

The gap shows the band colour behind, so a notched card only works on a plain band, never over a photograph.

## Elevation

One shadow only: `{shadows.card}` — `0 0 30px rgba(0,0,0,0.05)`. It is a glow, not a drop shadow, and it exists so a white card reads as floating above a white band. Do not add a second shadow, do not tint it, and never put a shadow on a photograph that already sits inside a rounded frame.

Cards lift 2px on hover with the shadow going to `{shadows.card-raised}`. Nothing scales on hover except the round arrow buttons, which rotate their glyph 45°.

## Components

**`global-nav`** — A floating pill bar, not a full-width strip. White, `{rounded.pill}`, `{shadows.card}`, inset 24px from the top and sides, 84px tall. Left: wordmark. Centre: five links at `{typography.nav-link}`, the active one carrying a 2px lime underline. Right: a phone number in `{typography.body-strong}` with a lime underline, then `{component.button-primary}`. Collapses to a wordmark plus hamburger below 1024px; the panel drops as a white `{rounded.md}` sheet.

**`button-primary`** — Lime fill, black label, `{rounded.pill}`, 18px × 32px. The variant that carries an arrow puts a 40px black circle on the right holding a `↗`.

**`button-arrow-round`** — 56px circle with a black `↗`. **White** when it floats in a card's notch, where it must read against the band behind the carve; **lime** only when it is attached to a button (`{component.button-primary}`'s arrow variant). On hover the glyph rotates 45° to point straight up.

**`badge-pill`** — The uppercase label above a section heading. White fill, 1px lime border, `{rounded.pill}`, with a small lime dot after the text. On the dark band the fill goes transparent and the text goes white.

**`card-service`** — White, `{rounded.md}`, carrying the `.re-notch` cut-out for a white `{component.button-arrow-round}`. **Title and photograph only — no body copy.** The title sits top-left at `{typography.display-sm}` with a `min-height` of two lines so every card in a row is the same height; a 4:3 photograph fills the lower two-thirds inside a `{rounded.sm}` frame, pushed to the card's bottom with `margin-top: auto`. Five run in a 3 + 2 grid, the second row centred.

On hover the card **floods lime from the bottom**: a `{colors.primary}` layer at `scaleY(0)` with `transform-origin: bottom` grows to `scaleY(1)` over 600ms on the standard ease. The title stays black throughout (black on lime is ~15.6:1), the photograph sits above the flood and scales 1.04, and the disc stays white and rotates. This is the only colour-change hover in the system — everything else lifts or scales.

The service summaries are deliberately not on the card; they belong on the services page. Keeping the card to a title and an image is what gives the grid its calm.

**`card-glass`** — Only over the hero photograph. `rgba(255,255,255,0.10)` with `backdrop-filter: blur(20px)`, `{rounded.md}`, a lime icon at 32px, a hairline rule, then title and two lines of copy in white.

**`stat-tile`** — Grey `{colors.canvas-soft-2}` fill, `{rounded.sm}`, 40px padding. A figure at `{typography.display-lg}` with a lime `+` superscript, and a caption at `{typography.caption}` in `{colors.mute}`. Figures count up once on first view.

**`project-reel`** — The black band. The heading sits top-left; a tall photograph fills the right half with `{rounded.lg}` on its outer corners. Bottom-left, a numbered list (01 / 02 / 03) where the active entry shows a location line, a hairline rule and the project name; inactive entries dim to `{colors.on-dark-muted}`. The band pins while the three entries step through.

**`commitment-row`** — A 56px lime circle holding a black icon, a title at `{typography.tagline}`, and a paragraph in the third column. Rows separated by `{colors.hairline}`.

**`testimonial`** — On beige. A circular badge with text running around its circumference ("what people say ·") rotating slowly, with a small square photograph inside it. Below, the quote at `{typography.display-md}`, then name and role. Round white prev/next buttons sit at the band's left and right edges.

**`card-team`** — A portrait at 3:4 inside `{rounded.md}`, carrying the same `.re-notch` cut-out and white arrow disc as the service card. A frosted name plate floats over the bottom of the photograph with the role in `{typography.badge}` and the name in `{typography.display-sm}`. The plate is tinted with **ink at 45%**, not white: these portraits are shot on bright backgrounds, and a white plate leaves the white label unreadable. The three cards are vertically staggered.

**`enquiry-card`** — A full-width photograph inside `{rounded.lg}`, with a white `{rounded.md}` card inset 48px on top of it. Badge, heading, then a two-column field grid. Fields are `{component.input-field}`: grey fill, pill shape, no visible border until focus, which adds a 2px black ring.

**`card-post`** — A 16:10 photograph in `{rounded.md}`, a lime `{rounded.xs}` category pill, a hairline rule, a date in `{colors.mute}`, then the title at `{typography.tagline}`.

**`closing-band`** — Grey `{colors.surface-grey}`, with the wordmark set enormous and semi-transparent behind the content. A circular 160px button with three lines of text sits centred.

**`footer`** — A white `{rounded.lg}` card lifted over the grey band. Wordmark and blurb, two link columns, then phone and email at `{typography.display-sm}` each with a lime underline. A hairline rule, then the legal row at `{typography.fine-print}`.

## Do's and Don'ts

### Do
- Let bands curve into each other; a straight seam between two bands is a bug in this system.
- Keep lime for fills and black for the text on it.
- Break headlines where the meaning breaks.
- Give a section heading its own row.
- Use `tabular-nums` on anything that counts.

### Don't
- Don't set lime as text on white, or on the dark band. It fails contrast everywhere.
- Don't add a second shadow, or tint the one that exists.
- Don't uppercase a headline. Only the badge pill is uppercase.
- Don't put a photograph in a hard-cornered box unless it sits behind a scrim as a full-bleed hero.
- Don't let the mute grey carry anything a visitor must read.

## Responsive Behavior

### Breakpoints
- `≥1280px` full layout: 3-up service grid, split project band, 3-up team row.
- `1024–1279px` container shrinks to fluid; services go 2-up; the nav keeps its pill.
- `768–1023px` nav collapses to hamburger; the project band stops pinning and becomes a stacked list; team goes 2-up with no stagger.
- `<768px` everything is one column. Display sizes drop to 44 (hero), 34 (section), 26 (card). Notch radii halve — 80px becomes 40px, 50px becomes 28px — or the curve swallows the content.

### Touch targets
Minimum 44px. The round arrow buttons stay 56px at every size. Nav links in the mobile sheet are 56px rows.

### Image behaviour
Every photograph is `object-fit: cover` inside a fixed-aspect rounded frame. Source images in this template top out at 1300px wide, so no frame should render wider than that at 1x; the hero relies on a scrim and large type rather than fine detail.

## Iteration Guide

Change the lime and the whole site changes personality — it is the only saturated colour. Change the radius scale and the notching language goes with it; keep `{rounded.lg}` and `{rounded.xl}` in a 1 : 1.6 relationship so the notches stay visibly different. The display face can be swapped for any geometric grotesque with a double-storey `a`; keep the `-0.02em` or the headlines lose their density.

## Known Gaps

- No listing, search or map surfaces are specified. This template now serves a development group, not a listings agency; if listings are needed, that is a new surface and a new set of components.
- No property detail page, floor plan or gallery component.
- The project reel's pinned behaviour is specified for desktop only; the tablet fallback is a plain stacked list.
- Photography resolution is capped at 1300px by the open-licence sources used. A real deployment should re-shoot or re-license at 2560px for the hero and enquiry plates.

---

## Revision — 2026-10-08 · rebuilt against the Spaciaz reference

This file previously described a **residential estate agency**: Fraunces + Nunito Sans, a deep forest green (#1F4D3A) with a warm sand accent (#D4A373), 10px radii, soft diffuse card shadows, and a section set built around listing cards, a hero search panel, a filter bar, a map placeholder and a valuation band.

It was rebuilt on 2026-10-08 against **Spaciaz** (`demo2.wpopal.com/spaciaz`), captured at 1440px and 390px, at the owner's instruction to match that reference. What changed:

| | Before | After |
|---|---|---|
| Business | Residential estate agency (listings, search, valuations) | Development and construction group (projects, services, leadership) |
| Display | Fraunces 56px / 600 | Outfit 90px / 700, -0.02em |
| Body | Nunito Sans 17px | Hanken Grotesk 18px |
| Brand colour | Forest green #1F4D3A | Chartreuse lime #E4ED64, surfaces only |
| Accent | Sand #D4A373 on price tags | — folded into the single lime |
| Canvas | Sand-white #FAF8F4 / parchment #F1EDE5 | White #FFFFFF / beige #F6F3EC |
| Dark band | Forest green | Black #000000 |
| Radii | 4 / 6 / 10 / 14px | 10 / 20 / 30 / 50 / 80px plus notched asymmetrics |
| Shadow | Three-step diffuse scale | One glow, `0 0 30px rgba(0,0,0,.05)` |
| Buttons | 10px corners | Full pills |

The reference's own fonts (Involve, Switzer) are commercial; Outfit and Hanken Grotesk are the Google-hosted equivalents chosen for the same geometric character, matching how every other template in this repo loads type.

`PRODUCT.md` was rewritten in the same change, because the previous one described the agency business this file no longer serves.
