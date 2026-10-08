---
version: alpha
name: Creative-Agency-Template
description: "An experimental, oversized editorial system for a creative and branding studio. The frame is pure white (#FFFFFF) and near-black ink (#0A0A0A) with zero-radius edges — nothing is rounded except pill CTAs — and the page repeatedly drops into full-bleed colour blocks in saturated cobalt (#2B3FE8) and vivid orange (#FF6B35) that take over the whole viewport like painted walls. Unbounded carries headlines at very large sizes (up to 120px) with tight tracking, Albert Sans carries body and labels, and there is no mono. Asymmetric layouts, a marquee of client logos, a work grid whose cases reveal on hover, a numbered services list and a full-screen contact block are the signature surfaces. The result feels like a studio that takes type and colour seriously and is not afraid of either."

colors:
  primary: "#0A0A0A"
  primary-pressed: "#000000"
  primary-deep: "#000000"
  primary-soft: "#F5F5F2"
  on-primary: "#FFFFFF"
  accent: "#D9FF2E"
  accent-pressed: "#C6EC1C"
  accent-soft: "#F2FFB8"
  on-accent: "#0A0A0A"
  ink: "#0A0A0A"
  ink-soft: "#3D3D3D"
  canvas: "#FFFFFF"
  inverse-canvas: "#0A0A0A"
  inverse-ink: "#FFFFFF"
  on-inverse-soft: "#FFFFFF"
  hairline: "#E6E6E6"
  hairline-soft: "#F2F2F2"
  surface-soft: "#F5F5F2"
  block-cobalt: "#0A0A0A"
  block-orange: "#D9FF2E"
  block-ink: "#0A0A0A"
  block-soft: "#F2F2F2"
  block-cobalt-deep: "#000000"
  block-orange-pale: "#F2FFB8"
  semantic-success: "#1E9E4A"
  semantic-error: "#D92D20"
  overlay-scrim: "#0A0A0A"

typography:
  display-xl:
    fontFamily: "Unbounded, 'Arial Black', Impact, sans-serif"
    fontSize: 120px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: -3.6px
    fontFeature: kern
  display-lg:
    fontFamily: "Unbounded, 'Arial Black', Impact, sans-serif"
    fontSize: 80px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -2px
    fontFeature: kern
  headline:
    fontFamily: "Unbounded, 'Arial Black', Impact, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.5px
    fontFeature: kern
  subhead:
    fontFamily: "Unbounded, 'Arial Black', Impact, sans-serif"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: -0.3px
    fontFeature: kern
  card-title:
    fontFamily: "Unbounded, 'Arial Black', Impact, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: -0.2px
    fontFeature: kern
  service-numeral:
    fontFamily: "Unbounded, 'Arial Black', Impact, sans-serif"
    fontSize: 56px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -1px
    fontFeature: kern
  body-lg:
    fontFamily: "'Albert Sans', system-ui, -apple-system, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
    fontFeature: kern
  body:
    fontFamily: "'Albert Sans', system-ui, -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
    fontFeature: kern
  body-sm:
    fontFamily: "'Albert Sans', system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
    fontFeature: kern
  link:
    fontFamily: "'Albert Sans', system-ui, -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
    fontFeature: kern
  button:
    fontFamily: "'Albert Sans', system-ui, -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
    fontFeature: kern
  eyebrow:
    fontFamily: "'Albert Sans', system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 1.4px
    textTransform: uppercase
    fontFeature: kern
  caption:
    fontFamily: "'Albert Sans', system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 1.2px
    textTransform: uppercase
    fontFeature: kern

rounded:
  none: 0px
  xs: 0px
  sm: 0px
  md: 0px
  lg: 0px
  xl: 0px
  pill: 999px
  full: 9999px

spacing:
  hair: 1px
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  xxxl: 96px
  section: 128px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 28px
  button-primary-pressed:
    backgroundColor: "{colors.primary-pressed}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 26px 14px
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 28px
  button-tertiary-text:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.link}"
    rounded: "{rounded.full}"
    padding: 8px 12px
  button-icon-round:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    size: 48px
  button-icon-round-inverse:
    backgroundColor: "{colors.on-inverse-soft}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    size: 48px
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 28px
  filter-tab-default:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 10px 22px
  filter-tab-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 10px 22px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 16px 0
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: 16px 0
  work-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.none}"
    padding: 0
  work-card-reveal:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.card-title}"
    rounded: "{rounded.none}"
    padding: 24px
  case-meta-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
  color-block-section:
    backgroundColor: "{colors.block-cobalt}"
    textColor: "{colors.on-primary}"
    typography: "{typography.subhead}"
    rounded: "{rounded.none}"
    padding: 96px 48px
  color-block-section-orange:
    backgroundColor: "{colors.block-orange}"
    textColor: "{colors.ink}"
    typography: "{typography.subhead}"
    rounded: "{rounded.none}"
    padding: 96px 48px
  color-block-section-ink:
    backgroundColor: "{colors.block-ink}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.subhead}"
    rounded: "{rounded.none}"
    padding: 96px 48px
  manifesto-block:
    backgroundColor: "{colors.block-cobalt}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 128px 48px
  service-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: 40px 0
  people-tile:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 16px
  awards-tile:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"
    padding: 24px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    height: 72px
  marquee-strip:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    height: 48px
  contact-block:
    backgroundColor: "{colors.block-orange}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: 128px 48px
  checkmark:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.semantic-success}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    size: 16px
  footer:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: 96px 48px
---

## Overview

This is the design system for a creative, design and branding studio — a site that has to prove taste before it says a word, to brand and marketing heads evaluating a studio, to founders looking for a launch partner, and to press and talent who want to know who works there. At the system level it is a hard-edged black-and-white editorial frame: pure white canvas (`{colors.canvas}`), near-black ink (`{colors.ink}` — `#0A0A0A`), zero radius on every surface, and headlines set in `Unbounded` at sizes that would be reckless anywhere else — `{typography.display-xl}` runs 120px with -3.6px tracking. Body copy and every label sit in `Albert Sans`; there is no mono. Every CTA is a pill (`{rounded.pill}`) — the only curve in the whole system — and the primary action everywhere is the same cobalt `{components.button-primary}` paired with the same white `{components.button-secondary}`.

What makes the system distinctive is what happens **between** those monochrome bookends: the page repeatedly drops into full-bleed **colour blocks** — saturated cobalt (`{colors.block-cobalt}` — `#2B3FE8`) and vivid orange (`{colors.block-orange}` — `#FF6B35`), occasionally ink — that span the full viewport width with square corners and `{spacing.xxxl}` interior padding. These blocks are where the studio speaks: the manifesto lives on cobalt, the contact block is a full-screen orange wall with a 120px "Start a project" headline, and the work index sits between them on white so the case imagery gets the quiet it needs. They are not accents tucked into a card; they take over a whole viewport, like walls painted in a studio.

This is a system built on contrast and asymmetry. The monochrome chrome makes the colour blocks feel deliberate rather than decorative; the colour blocks make the white sections feel like gallery walls rather than a template. Layouts are asymmetric by default — a headline pushed to the right column, an image that starts at the viewport edge and stops at the grid's third column, a services list where the numerals are twice the size of the titles. The interface never reaches for shadows, gradients or rounded cards to do the work that oversized type and painted colour already do.

**Key Characteristics:**
- Monochrome system core: `{colors.ink}` (near-black) and `{colors.canvas}` (white) carry every headline, every body line, every nav and footer link.
- Cobalt `{colors.primary}` is the single action colour and the primary colour-block surface; orange `{colors.accent}` is a second brand colour used only in large blocks and the rare `{components.button-accent}`.
- Zero radius everywhere — images, blocks, inputs, tiles — except pill CTAs (`{rounded.pill}`) and round icon buttons (`{rounded.full}`). No 4px, 8px or 24px corners exist.
- `Unbounded` at 500 and 700 for display; `Albert Sans` at 400 and 500 for body, labels and buttons. Eyebrows and captions are Albert Sans 500 uppercase with +1.2–1.4px tracking.
- Very large display sizes (120px / 80px) with tight negative tracking and 0.95–1.0 line-height — headlines are graphics.
- Asymmetric grids: content is placed on a 12-column grid but rarely centred; offsets and overlaps are the rhythm.
- Colour-block page rhythm (home): white hero → ink marquee strip → white work grid → cobalt manifesto → white services list → orange contact block → ink footer.

## Colors

> Pages this palette must cover: home, work index, case page, studio (people + manifesto), services, awards (placeholder), contact.

### Brand & Accent
- **Cobalt** ({colors.primary} — `#2B3FE8`): The system primary. Every primary CTA, the selected filter tab, the work-card hover reveal, and the cobalt colour-block surface. White text on cobalt sits at ≈ 6.4:1.
- **Cobalt Pressed** ({colors.primary-pressed} — `#2232C4`) and **Cobalt Deep** ({colors.primary-deep} — `#1A26A0`): pressed state for the primary pill and the deeper block variant used behind long manifesto copy.
- **Cobalt Soft** ({colors.primary-soft} — `#E4E7FC`): a pale tint used only for the selected state of a case-page metadata chip.
- **On Primary** ({colors.on-primary} — `#FFFFFF`): white text on cobalt surfaces and inside the primary pill.
- **Orange** ({colors.accent} — `#FF6B35`): The second brand colour. Used in large blocks — the contact block, an alternating story block on the studio page — and in `{components.button-accent}` for a single "Start a project" on dark surfaces. Text on orange is always `{colors.on-accent}` (near-black, ≈ 7:1); white on orange fails contrast and is forbidden.
- **Orange Pressed** ({colors.accent-pressed} — `#E85A26`) and **Orange Soft** ({colors.accent-soft} — `#FFE3D6`): pressed state and pale tint for the awards placeholder tiles.

### Surface
- **Canvas** ({colors.canvas} — `#FFFFFF`): Default page background and the body of every white section.
- **Inverse Canvas** ({colors.inverse-canvas} — `#0A0A0A`): Footer, marquee strip, and the ink colour block.
- **Surface Soft** ({colors.surface-soft} — `#F2F2F2`): Off-white tile background for icon buttons, people tiles and awards tiles when they sit on the white canvas.
- **Hairline** ({colors.hairline} — `#E6E6E6`): 1px rules between service rows, under form inputs, between case metadata rows.
- **Hairline Soft** ({colors.hairline-soft} — `#F2F2F2`): Even subtler dividers — footer column rules.
- **Block Cobalt** ({colors.block-cobalt} — `#2B3FE8`): The signature **manifesto / statement** colour block. Recurs on home and studio.
- **Block Orange** ({colors.block-orange} — `#FF6B35`): The **contact** block on every page and the "what we believe" story block on the studio page.
- **Block Ink** ({colors.block-ink} — `#0A0A0A`): Marquee strip, footer, and an optional dark case-study intro block.
- **Block Soft** ({colors.block-soft} — `#F2F2F2`): Quiet grey block behind the awards placeholder and the people grid.
- **Block Cobalt Deep** ({colors.block-cobalt-deep} — `#1A26A0`) and **Block Orange Pale** ({colors.block-orange-pale} — `#FFE3D6`): secondary block surfaces for longer-copy sections where the full saturation would tire the eye.

### Text
- **Ink** ({colors.ink} — `#0A0A0A`): All headline, body, and caption type on light surfaces. Body copy is near-black at weight 400; hierarchy is carried by the face change (Unbounded vs Albert Sans) and size, not by grey.
- **Ink Soft** ({colors.ink-soft} — `#3D3D3D`): the one permitted mid-tone, for case metadata values and captions beneath images (≈ 10:1 on white).
- **Inverse Ink** ({colors.inverse-ink} — `#FFFFFF`): Type on inverse-canvas surfaces (footer, marquee strip, ink block) and on cobalt blocks.
- **On-Inverse Soft** ({colors.on-inverse-soft} — `#FFFFFF`): White used at ~16% opacity for round icon-button surfaces against dark or cobalt sections (token captures the base colour; translucency is applied at render time).

### Semantic
- **Success Green** ({colors.semantic-success} — `#1E9E4A`): Form success confirmation glyph. Used as a glyph fill, not a surface.
- **Error Red** ({colors.semantic-error} — `#D92D20`): Form validation error text and the 2px underline on an invalid input.
- **Overlay Scrim** ({colors.overlay-scrim} — `#0A0A0A`): Ink used at ~70% opacity behind the full-screen video lightbox on case pages (token captures the base; opacity applied at render time).

## Typography

### Font Family

- **Unbounded** — the display face. A wide, geometric, slightly inflated grotesque that becomes a graphic object at 80–120px. Used at exactly two weights: 700 for the hero, section openers and the contact headline; 500 for subheads, card titles and the service numerals. Unbounded ships 200–900, so both weights are native. Tracking is negative at every size, scaling with size (-3.6px at 120px down to -0.2px at 24px).
- **Albert Sans** — the body face. Clean, neutral, slightly geometric so it sits comfortably beside Unbounded without competing. Used at 400 for body and 500 for links, buttons, eyebrows and captions. Eyebrows and captions are uppercase with positive tracking so they read as taxonomy without a monospace face.

There is no monospace in the system. OpenType `kern` is enabled across every role.

### Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@500;700&family=Albert+Sans:wght@400;500&display=swap" rel="stylesheet">
```
```css
:root {
  --font-display: Unbounded, 'Arial Black', Impact, sans-serif;
  --font-body: 'Albert Sans', system-ui, -apple-system, sans-serif;
}
```

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 120px | 700 | 0.95 | -3.6px | Hero headline, contact block headline ("Start a project") |
| `{typography.display-lg}` | 80px | 700 | 1.00 | -2px | Manifesto lines, section openers ("Selected work") |
| `{typography.service-numeral}` | 56px | 500 | 1.00 | -1px | The "01"–"06" numerals in the services list |
| `{typography.headline}` | 32px | 700 | 1.20 | -0.5px | Service titles, case-page section titles |
| `{typography.subhead}` | 28px | 500 | 1.30 | -0.3px | Long-form intro paragraphs inside colour blocks |
| `{typography.card-title}` | 24px | 500 | 1.30 | -0.2px | Work-card titles, people names |
| `{typography.body-lg}` | 20px | 400 | 1.45 | 0 | Lead body copy on hero, contact form labels |
| `{typography.body}` | 18px | 400 | 1.50 | 0 | Default body, case-page prose |
| `{typography.body-sm}` | 16px | 400 | 1.50 | 0 | Card body, metadata values, footer link list |
| `{typography.link}` | 18px | 500 | 1.40 | 0 | Inline link emphasis, nav links |
| `{typography.button}` | 18px | 500 | 1.40 | 0 | All pill buttons, primary, secondary, accent |
| `{typography.eyebrow}` | 14px | 500 | 1.30 | 1.4px (uppercase) | Section eyebrows ("WORK", "STUDIO", "SERVICES"), case metadata labels |
| `{typography.caption}` | 12px | 500 | 1.20 | 1.2px (uppercase) | Image captions, footer column heads, awards placeholder labels |

### Principles

- **Face change, not grey, carries hierarchy.** An Unbounded headline next to Albert Sans body reads as two registers without any mid-tone. `{colors.ink-soft}` exists only for metadata and captions.
- **Negative letter-spacing scales with size.** Display-xl pulls -3.6px; card-title pulls only -0.2px. Body stays at zero. Oversized Unbounded without tracking looks loose; with it, headlines lock into a single shape.
- **Uppercase Albert Sans is the taxonomy voice.** Eyebrows and captions are uppercase, tracked, small — the role a mono would play elsewhere, without a third face.
- **Very tight line-heights on display, generous on body.** Display runs 0.95–1.0; body runs 1.45–1.5. Headlines are graphics; body is for reading.
- **Two weights per face, never more.** Unbounded 500/700, Albert Sans 400/500. Intermediate weights read as a different studio.

## Layout

### Spacing System

- **Base unit**: 8px.
- **Tokens (front matter)**: `{spacing.hair}` 1px · `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.xxxl}` 96px · `{spacing.section}` 128px.
- Section interior padding: `{spacing.xxxl}` (96px) vertical on colour-block sections; `{spacing.section}` (128px) on the manifesto and contact blocks.
- Work-grid gutters: `{spacing.lg}` (24px) at desktop; images themselves have no interior padding.
- Service row padding: 40px vertical between `{spacing.hair}` rules.
- Form input padding: `{spacing.md}` 16px vertical, 0 horizontal (inputs are underlined, not boxed).
- Button padding: 14px vertical · 28px horizontal for pill buttons (the asymmetric `12px 26px 14px` on `button-secondary` nudges the type optically inside the pill).
- Universal rhythm constant: `{spacing.section}` (128px) — the vertical gap between major white sections. Colour blocks butt directly against each other or against white with no gap; the gap is inside the block.

### Grid & Container

- Max content width sits around 1440px with side gutters of `{spacing.xxl}` on desktop down to `{spacing.lg}` on mobile. Colour blocks and the marquee ignore the container and bleed to the viewport edge.
- 12-column grid. Asymmetry is the default: the hero headline occupies columns 1–10, the lead paragraph columns 7–12; the manifesto sits in columns 2–11; service rows run full width with the numeral in columns 1–2 and the title in columns 3–8.
- **Work grid:** 2-up at desktop with deliberately mixed aspect ratios (one 4:5 beside one 3:2, then swapped), 1-up at tablet. Every third row may be a single full-width 21:9 case.
- **Services:** a single-column numbered list, not cards — six `{components.service-row}` items separated by hairlines.
- **People grid:** 4-up `{components.people-tile}` on `{colors.block-soft}` at desktop, 2-up at mobile.
- **Awards placeholder:** 3-up `{components.awards-tile}` strip with label-only content until real awards exist.
- **Case page:** full-bleed hero image or video, then a `{components.case-meta-row}` strip (client, sector, services, year), then alternating full-width and 2-column image bands with short prose between.

### Whitespace Philosophy

White space makes the colour blocks feel deliberate. Between every painted block and the next white section there is `{spacing.section}` of breathing room before the next content begins. Inside a colour block the type is given generous asymmetric margins (often a third of the block's width on one side only) so the panel reads as a poster, not a wall of copy. The work grid is the exception: images sit close (24px) so the eye reads a wall of work.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | Default for everything: colour blocks, images, tiles, footer, hero |
| 1 (hairline) | 1px `{colors.hairline}` rule on `{colors.canvas}` | Service rows, form input underlines, case metadata rows |
| 2 (colour reveal) | `{colors.primary}` panel slides over the image | `{components.work-card-reveal}` on hover / focus — depth by colour, not shadow |
| 3 (modal) | `{colors.overlay-scrim}` at 70% behind a full-bleed video | Case-page showreel lightbox |

The system has no drop shadows at all. Where another site would use a shadowed white card, this one uses a painted block or an oversized headline. The one "lift" is the cobalt reveal panel on work cards, which is a colour change, not an elevation change.

### Decorative Depth

- **Colour-block sections** are the primary depth device. The switch from white to cobalt or orange is the section break.
- **Oversized type overlapping images** — a display headline that starts on white and runs across the top edge of a case image, set with `mix-blend-mode: difference` on dark imagery, is the studio's signature composition. Use once per page.
- **Marquee strip** — a 48px ink ribbon scrolling client wordmarks in white (placeholders until real client permissions are secured).
- **Work-card hover reveal** — a cobalt panel slides up from the bottom of the image carrying the case title and sector in `{typography.card-title}` white.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Everything structural: images, colour blocks, tiles, inputs, nav, footer |
| `{rounded.xs}` – `{rounded.xl}` | 0px | Retained as tokens for tooling compatibility; all resolve to 0 — the system has no intermediate corners |
| `{rounded.pill}` | 999px | All text CTAs (primary, secondary, accent, filter tabs) |
| `{rounded.full}` | 9999px | Round icon buttons, the success checkmark glyph |

Only two shapes exist: the square and the pill. A rounded image or a 8px card would read as a different, softer studio.

### Photography & Video Geometry

- Work images are square-cornered and bleed to the grid line; they never sit inside a padded frame.
- Mixed aspect ratios are intentional: 4:5 portrait, 3:2 landscape, 1:1 square and 21:9 panoramic all appear in the work grid. Each case supplies its own crop; the grid does not force uniformity.
- Case-page hero media is full-bleed 16:9 (video, muted, autoplay, with a poster image) or 21:9 still.
- People tiles use 1:1 portraits with a consistent background treatment across the team.
- No avatar circles appear in marketing surfaces — faces are square tiles, not badges.
- Every image and video is a placeholder until the studio supplies real work it has permission to show.

## Components

### Buttons

**`button-primary`** — The cobalt "Start a project" pill that appears in the top nav, the hero, and the closing contact block.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}`, padding 14px 28px, rounded `{rounded.pill}`.
- Pressed state lives in `button-primary-pressed` — background drops to `{colors.primary-pressed}`.

**`button-secondary`** — White pill with ink text and a 1px `{colors.ink}` border. Used for "See work" and as the visual counterpart to the primary pill.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.button}`, padding 12px 26px 14px (asymmetric vertical to optically centre the type), rounded `{rounded.pill}`.

**`button-ink`** — Near-black pill for use on orange blocks, where cobalt would clash and white would float.
- Background `{colors.ink}`, text `{colors.inverse-ink}`, type `{typography.button}`, padding 14px 28px, rounded `{rounded.pill}`.

**`button-accent`** — Orange pill with near-black text, used only on ink or cobalt surfaces for a single "Start a project".
- Background `{colors.accent}`, text `{colors.on-accent}`, type `{typography.button}`, rounded `{rounded.pill}`, padding 14px 28px. Never place it on the orange block or on white.

**`button-tertiary-text`** — Plain text link styled as a button hit target inside top nav and footer.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.link}`, rounded `{rounded.full}` (hit target only), padding `{spacing.xs}` `{spacing.sm}`. Underline appears on hover with a 2px `{colors.primary}` rule.

**`button-icon-round`** — 48px round icon button for work-grid navigation arrows, social links and the showreel play glyph on light surfaces.
- Background `{colors.surface-soft}`, text `{colors.ink}`, rounded `{rounded.full}`, size 48px.

**`button-icon-round-inverse`** — Same shape, used on inverse-canvas and cobalt blocks.
- Background `{colors.on-inverse-soft}` (translucent white), text `{colors.inverse-ink}`, rounded `{rounded.full}`, size 48px.

### Filter Tabs

**`filter-tab-default`** + **`filter-tab-selected`** — The pill toggle that filters the work index by discipline (All / Brand / Digital / Motion / Spatial).
- Default: `{colors.canvas}` background, `{colors.ink}` text, 1px `{colors.ink}` border, rounded `{rounded.pill}`.
- Selected: `{colors.primary}` background, `{colors.on-primary}` text — the same surface as `button-primary`, so the selected filter reads as an active choice, not a passive state.

### Inputs & Forms

**`text-input`** + **`text-input-focused`** — Contact form fields ("Name", "Company", "Email", "Tell us about the project", "Budget range").
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.none}`, padding 16px 0, with a 1px `{colors.hairline}` bottom rule and no side borders — inputs are underlines on the page, not boxes.
- Focused state keeps the same surface; the bottom rule thickens to 2px `{colors.primary}`. Error state uses 2px `{colors.semantic-error}` and an `{typography.caption}` message beneath.
- On the orange contact block the form sits inside a white panel (columns 7–12) so inputs keep their white surface.

### Work Grid

**`work-card`** — One case in the work index.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.card-title}`, rounded `{rounded.none}`, padding 0. The image fills the card; beneath it a single line carries the client name in `{typography.card-title}` and the discipline in `{typography.eyebrow}` `{colors.ink-soft}`.

**`work-card-reveal`** — The hover / focus state.
- A `{colors.primary}` panel slides up from the bottom edge to cover the lower 40% of the image, carrying the case title in `{typography.card-title}` `{colors.on-primary}` and a round arrow glyph at the right. Reduced-motion users get an instant fade instead of a slide. Keyboard focus triggers the same reveal.

**`case-meta-row`** — Metadata strip at the top of a case page.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-sm}`, rounded `{rounded.none}`. Four columns (CLIENT · SECTOR · SERVICES · YEAR) with `{typography.eyebrow}` labels above `{typography.body-sm}` values, separated by 1px `{colors.hairline}` rules.

### Colour-Block Sections (signature)

The defining surface of the system. Each is a full-viewport-width panel with square corners and `{spacing.xxxl}` interior padding. Variants:

**`color-block-section`** — cobalt ground for statement sections.
- Background `{colors.block-cobalt}`, text `{colors.on-primary}`, type `{typography.subhead}`, rounded `{rounded.none}`, padding 96px 48px.

**`color-block-section-orange`** — orange ground for the studio story block and smaller calls to action.
- Background `{colors.block-orange}`, text `{colors.ink}` (never white), otherwise identical structure.

**`color-block-section-ink`** — near-black ground for an optional dark case-study intro.
- Background `{colors.block-ink}`, text `{colors.inverse-ink}`, otherwise identical structure.

**`manifesto-block`** — the studio's beliefs, one line each.
- Background `{colors.block-cobalt}`, text `{colors.on-primary}` in `{typography.display-lg}`, padding 128px 48px, rounded `{rounded.none}`. Three to five lines, left-aligned in columns 2–11, with the eyebrow "STUDIO" above. Once per page.

### Services

**`service-row`** — One numbered service in the list (e.g. 01 Brand identity · 02 Digital product · 03 Campaign · 04 Motion · 05 Spatial · 06 Naming & voice).
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.headline}`, rounded `{rounded.none}`, padding 40px 0, 1px `{colors.hairline}` bottom rule.
- Layout: `{typography.service-numeral}` in columns 1–2, title in columns 3–8, a two-line `{typography.body-sm}` description in columns 9–12. On hover the numeral turns `{colors.primary}`.

### Studio & Awards

**`people-tile`** — Team member tile on the studio page.
- Background `{colors.surface-soft}`, text `{colors.ink}`, type `{typography.body-sm}`, rounded `{rounded.none}`, padding `{spacing.md}`. 1:1 portrait above, name in `{typography.card-title}`, role in `{typography.eyebrow}` `{colors.ink-soft}`.

**`awards-tile`** — Placeholder tile for awards and press.
- Background `{colors.surface-soft}`, text `{colors.ink}`, type `{typography.eyebrow}`, rounded `{rounded.none}`, padding `{spacing.lg}`. Ships with "AWARD PLACEHOLDER — YEAR" copy; replace only with awards the studio actually holds.

### Navigation

**`top-nav`** — White bar with the studio wordmark in Unbounded 700 at left, primary links (Work · Studio · Services · Contact) at centre-right, and the right-anchored `button-secondary` ("See work") + `button-primary` ("Start a project") pair.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-sm}`, height 72px, rounded `{rounded.none}`. Over colour blocks the nav inverts to transparent with `{colors.inverse-ink}` links.
- Mobile: collapses primary links into a full-canvas ink overlay with 48px Unbounded links; the primary pill remains visible on the bar.

**`marquee-strip`** — Thin ink ribbon directly under the hero scrolling client wordmarks in white.
- Background `{colors.inverse-canvas}`, text `{colors.inverse-ink}`, type `{typography.body-sm}`, height 48px, rounded `{rounded.none}`. Wordmarks are placeholders ("CLIENT ONE · CLIENT TWO …") until permissions exist; pauses on hover and under `prefers-reduced-motion`.

### Contact

**`contact-block`** — The full-screen orange closing block on every page.
- Background `{colors.block-orange}`, text `{colors.ink}`, type `{typography.display-xl}`, padding 128px 48px, rounded `{rounded.none}`, `min-height: 100vh`.
- Layout: "Start a project" in `{typography.display-xl}` across columns 1–8, the email address and phone as `{typography.headline}` links beneath, and the contact form in a white panel in columns 7–12 with a `{components.button-ink}` submit.

### Glyphs

**`checkmark`** — Green check used in the form success state.
- Background `{colors.canvas}`, glyph colour `{colors.semantic-success}`, rounded `{rounded.full}`, size 16px.

### Footer

**`footer`** — Ink footer with the studio wordmark set in `{typography.display-lg}` at the top-left.
- Background `{colors.inverse-canvas}`, text `{colors.inverse-ink}`, type `{typography.caption}` for column headings and `{typography.body-sm}` for links, padding 96px 48px, rounded `{rounded.none}`. Columns: Work · Studio · Contact · Social, plus address, press contact and legal links on the bottom row.

## Do's and Don'ts

### Do

- Reserve `{colors.primary}` for primary CTAs, selected states (`filter-tab-selected`), the work-card reveal and the cobalt block. Don't use it as a small decorative accent.
- When introducing a story section, choose **one** block from the `{colors.block-*}` family and let it bleed to the viewport edge with square corners and `{spacing.xxxl}` interior padding.
- Keep type in `Unbounded` 500/700 for display and `Albert Sans` 400/500 for everything else. No third face, no intermediate weights.
- Set eyebrows and captions in Albert Sans uppercase with the documented positive tracking — that is the taxonomy voice.
- Compose every CTA as a pill (`{rounded.pill}`) and every icon button as a circle (`{rounded.full}`); keep every other edge square.
- Allow the page to **return to white canvas** between colour blocks so each block reads as deliberate; the orange contact block may follow a white section directly.
- Pair `button-primary` and `button-secondary` whenever a section needs both "Start a project" and "See work" — the cobalt-and-white pair is the brand signature.

### Don't

- Don't introduce mid-grey body text. Hierarchy comes from the face change and size; `{colors.ink-soft}` is for metadata only.
- Don't add drop shadows, gradients or rounded cards — the colour blocks and the type are the depth device.
- Don't put white text on orange. Text on `{colors.block-orange}` is always `{colors.ink}`.
- Don't introduce new accent colours outside cobalt, orange, ink and white. A third hue breaks the system.
- Don't show two colour blocks inside a single viewport — the pacing always lets white separate them (the contact block, which is the last section, is the only exception when it follows the ink footer marquee).
- Don't square off CTAs or round off images. Pill for buttons, square for everything else.
- Don't fabricate clients in the marquee, awards in the tiles or results on case pages. Placeholders stay placeholders until the studio supplies real, permitted assets.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| 4k | 1920px | Max content width holds at 1440px; gutters expand; `{typography.display-xl}` may scale to 144px |
| Desktop-XL | 1440px | Default desktop layout; 2-up work grid with mixed ratios |
| Desktop | 1280px | Service row columns tighten; display-xl 120px → 104px |
| Tablet | 960px | Work grid stays 2-up with uniform 4:5; services description moves under the title; nav becomes hamburger |
| Mobile-L | 768px | Work grid 1-up; people grid 2-up; display-xl 120px → 72px; colour blocks keep full bleed |
| Mobile | 560px | Display-xl 72px → 56px; pill CTAs go full-width; contact form panel stacks under the headline |
| Mobile-XS | 400px | Footer collapses to single column; marquee text size reduces |

### Touch Targets

- Pill buttons (`button-primary`, `button-secondary`, `button-accent`, `button-ink`) maintain a minimum 48px tap height across all viewports via `{typography.button}` 18px line-height plus the documented vertical padding.
- Round icon buttons (`button-icon-round`) are 48px everywhere.
- Underlined inputs on the contact form are 56px tall at every breakpoint.
- Work cards are tappable in full; on touch devices the reveal state is replaced by always-visible title and discipline beneath the image.

### Collapsing Strategy

- **Nav**: desktop horizontal nav with two right-anchored pills collapses to a full-screen ink overlay below 960px. The primary pill stays on the bar above 560px and moves into the overlay below.
- **Work grid**: 2-up mixed ratios → 2-up uniform 4:5 at 960px → 1-up below 768px. Full-width 21:9 cases become 16:9.
- **Services**: three-column row (numeral / title / description) → numeral + title with description beneath at 960px → numeral above title at 560px.
- **Colour blocks**: always full-bleed; interior padding steps 96px → 64px → 48px; the asymmetric column offsets collapse to a single left-aligned column at 768px.
- **Manifesto**: 80px lines → 48px at 768px → 36px at 560px; one idea per line is preserved with manual breaks.
- **Contact block**: two-column (headline left, form right) → stacked at 560px with the headline above the white form panel; `min-height: 100vh` is dropped on mobile.
- **Case page**: full-bleed hero media stays full-bleed; two-column image bands stack; metadata row becomes a 2×2 grid.

### Image & Video Behavior

- Work images are served through `<picture>` with AVIF/WebP sources and `sizes` matching the grid; every image sits in a fixed `aspect-ratio` box so the grid never shifts while loading.
- Below-the-fold images lazy-load; the first two work cards and the hero are preloaded.
- Case-page hero video is muted, loops, autoplays only when `prefers-reduced-motion` is not set, and always has a poster image; below 768px the poster is shown and video is loaded on tap.
- The work-card reveal and the marquee respect `prefers-reduced-motion` (fade instead of slide; marquee becomes a static row).
- The oversized-type-over-image composition uses `mix-blend-mode: difference`; where unsupported, the headline falls back to `{colors.ink}` on white above the image.

## Iteration Guide

1. Focus on ONE component at a time and reference it by its `components:` token name (e.g., `{components.button-primary}`, `{components.color-block-section}`, `{components.work-card-reveal}`).
2. When introducing a new section, decide **first** which `{colors.block-*}` token it sits on, or whether it stays white; the surface choice is the most consequential decision.
3. Default body type to `{typography.body}`; reach for `{typography.subhead}` only inside a colour block and `{typography.display-lg}` only for manifesto lines and section openers.
4. Run `npx @google/design.md lint DESIGN.md` after edits — `broken-ref`, `contrast-ratio`, and `orphaned-tokens` warnings flag issues automatically.
5. Add new variants as separate component entries (`-pressed`, `-selected`, `-reveal`) — do not bury them in prose.
6. Keep `{colors.primary}` scarce. If two `button-primary` instances appear in the same viewport, the section is doing too much — neutralise one to `button-secondary`.
7. Treat `{colors.accent}` as a block colour first and a button colour last: one `button-accent` per page, never on white.

## Known Gaps

- Dark mode is not documented because the site does not ship a dark theme — the closest analogue is the ink block and the inverse-canvas footer.
- Form-field error and validation styling is specified only at the token level (2px `{colors.semantic-error}` rule + caption); full error-message layout is not designed.
- The marquee animation, work-card reveal and manifesto scroll reveal are described but not timed; motion specs (duration, easing) are to be defined with the build.
- Client logos, awards and case results are placeholders; the studio must supply real, permitted assets before launch.

### Revision 2026-10-07: reference-led direction, Folex (folex-astro.pages.dev)
- The owner asked for the creative agency homepage to be based on the Folex Astro theme. Captured at 1440 and 390 with its stylesheet and scripts. Its language: black on white with one lime block colour, square corners, no shadows, oversized two-line display hero (first line flush left, second flush right), a lime about block beside a tall photograph, accordion services, a staggered two-column portfolio on a warm off-white band, monochrome team portraits, a lime testimonial block with a photograph overlapping its corner, article cards, and an oversized "Let's work together" close with a ruled link row.
- Token changes above: the cobalt primary becomes black, the orange accent becomes lime `#D9FF2E`, soft surfaces warm to `#F5F5F2`. Unbounded and Albert Sans stay. Every button is square with a lime fill sliding up on hover; text links are uppercase with a 2px rule and ↗.
- Section order as built: header with services mega-menu, pages dropdown, language pill, square Get started and a round hamburger opening a dark offcanvas; hero; about; services accordion; portfolio; team; testimonials; articles; close and footer. No 3D.
- Motion layer added the same day: side wipes on the hero lines, word-by-word headlines, clip wipes on photographs, paragraphs from the right, staggered accordion rows with a height transition, parallax between the two portfolio columns, portraits turning to colour on hover, rising dropdown panels and magnetic buttons. Reduced motion renders everything at rest.
