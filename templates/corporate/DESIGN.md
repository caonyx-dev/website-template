---
version: alpha
name: Corporate-Template
description: A confident, structured design system for a mid-size B2B company site — cool white canvas, slate ink, a deep royal-blue primary that carries every action, and an amber highlight reserved for statistics and calls to action on dark navy bands. Plus Jakarta Sans headlines at weight 600–700 over Figtree body, 8 px radii, white cards lifted by soft two-layer shadows, an iconographic services grid, leadership cards, a news list, a careers call-to-action and a dark navy footer that closes every page. Denser and more polished than a gallery site — sections are structured, labelled and scannable.

colors:
  primary: "#2563FF"
  on-primary: "#FFFFFF"
  ink: "#222222"
  body: "#555555"
  mute: "#777777"
  hairline: "#E2E8F0"
  hairline-strong: "#94A3B8"
  canvas: "#FFFFFF"
  canvas-soft: "#F5F3EF"
  canvas-soft-2: "#EBE8E2"
  link: "#2563FF"
  link-deep: "#172D6B"
  link-bg-soft: "#DBE4F7"
  success: "#15803D"
  error: "#DC2626"
  error-soft: "#FEE2E2"
  error-deep: "#991B1B"
  warning: "#D97706"
  warning-soft: "#FEF3C7"
  warning-deep: "#92400E"
  primary-hover: "#1D4FD8"
  primary-press: "#1A45BE"
  primary-deep: "#172D6B"
  primary-soft: "#DBE4F7"
  primary-tint: "#EEF2FB"
  accent: "#F59E0B"
  accent-soft: "#FEF3C7"
  accent-deep: "#B45309"
  on-accent: "#0F172A"
  support-teal: "#0E7490"
  support-teal-soft: "#CFFAFE"
  navy-band-start: "#1E3A8A"
  navy-band-end: "#141414"
  navy-footer-start: "#141414"
  navy-footer-end: "#000000"
  on-dark: "#FFFFFF"
  on-dark-soft: "#CBD5E1"
  selection-bg: "#1E3A8A"
  selection-fg: "#FFFFFF"

typography:
  display-xl:
    fontFamily: "Outfit, 'Segoe UI', Arial, sans-serif"
    fontSize: 52px
    fontWeight: 700
    lineHeight: 58px
    letterSpacing: -1.3px
  display-lg:
    fontFamily: "Outfit, 'Segoe UI', Arial, sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 44px
    letterSpacing: -0.72px
  display-md:
    fontFamily: "Outfit, 'Segoe UI', Arial, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 32px
    letterSpacing: -0.36px
  display-sm:
    fontFamily: "Outfit, 'Segoe UI', Arial, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: -0.2px
  body-lg:
    fontFamily: "Outfit, system-ui, -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0px
  body-md:
    fontFamily: "Outfit, system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md-strong:
    fontFamily: "Outfit, system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  body-sm:
    fontFamily: "Outfit, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  body-sm-strong:
    fontFamily: "Outfit, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0px
  caption:
    fontFamily: "Outfit, system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  eyebrow:
    fontFamily: "Outfit, system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0.8px
    textTransform: uppercase
  stat-figure:
    fontFamily: "Outfit, 'Segoe UI', Arial, sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 44px
    letterSpacing: -0.8px
    fontFeatureSettings: "'tnum' 1"
  button-md:
    fontFamily: "Outfit, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  button-lg:
    fontFamily: "Outfit, system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill-sm: 64px
  pill: 100px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 48px
  4xl: 64px
  5xl: 96px
  6xl: 128px
  section: 192px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
    height: 72px
    padding: "{spacing.sm} {spacing.lg}"
  nav-link:
    textColor: "{colors.body}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-cta-contact-sales:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.md}"
    padding: "0px {spacing.md}"
    height: 36px
  nav-cta-portal:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.md}"
    padding: "0px {spacing.md}"
    height: 36px
  nav-cta-careers:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.md}"
    padding: "0px {spacing.md}"
    height: 36px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.md}"
    padding: "0px {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.md}"
    padding: "0px {spacing.lg}"
  button-primary-sm:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "0px {spacing.md}"
  button-secondary-sm:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: "0px {spacing.md}"
  button-accent-on-dark:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.md}"
    padding: "0px {spacing.lg}"
  industry-tab:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.pill-sm}"
    padding: "0px {spacing.md}"
  icon-button-round:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.full}"
  service-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  service-card-large:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  card-soft:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  news-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  leadership-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  icon-tile:
    backgroundColor: "{colors.primary-tint}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    size: 48px
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "0px {spacing.sm}"
    height: 44px
  form-input-sm:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "0px {spacing.sm}"
    height: 36px
  form-input-lg:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "0px {spacing.sm}"
    height: 52px
  badge-secondary:
    backgroundColor: "{colors.primary-tint}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "0px {spacing.xs}"
  solution-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  solution-card-featured:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  logo-strip:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.lg} {spacing.xl}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.lg}"
  hero-band-dark:
    backgroundColor: "{colors.navy-band-end}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    padding: "{spacing.5xl} {spacing.lg}"
  industries-band-light:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.lg}"
  stats-band-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.stat-figure}"
    padding: "{spacing.4xl} {spacing.lg}"
  careers-cta-band:
    backgroundColor: "{colors.navy-band-end}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.lg}"
  footer:
    backgroundColor: "{colors.navy-footer-start}"
    textColor: "{colors.on-dark-soft}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.lg}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  announcement-bar:
    backgroundColor: "{colors.primary-tint}"
    textColor: "{colors.primary}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"

  # ─── Examples (illustrative) — auto-derived; resolve any TO_FILL markers below ───
  ex-solution-tier:
    description: "Default solution / engagement tier card. Mirrors solution-card chrome on canvas with a hairline border and Level 2 shadow."
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-solution-tier-featured:
    description: "Recommended tier — polarity-flipped to royal blue with white text and an amber CTA with ink label."
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-services-summary:
    description: "What's Included summary card — scope lines for a services engagement (consulting / implementation / support)."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-rfp-summary:
    description: "Request-for-proposal summary — line items per selected service before submission (NOT an e-commerce cart)."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-portal-nav-row:
    description: "Sidebar nav row for the investor / client portal. Active state uses the royal-blue primary as a left-edge bar."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: "Locations / financial-results table chrome. Header uses eyebrow uppercase; body uses body-sm with tabular figures."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.eyebrow}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-contact-form-card:
    description: "Contact-sales form card. Mirrors service-card-large chrome with form-input primitives inside."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as service-card-large with Level 5 modal shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: "Empty-state frame (no open roles / no news in this category). Generous padding on canvas-soft."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification surface — service-card chrome with Level 4 shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"

---


## Overview

This is the design system for a mid-size corporate company website — a B2B services or solutions business whose site must reassure prospective customers, partners, job candidates, press and investors in one visit. It earns that posture with a clean, structured system: pure white `{colors.canvas}` page floor, slate `{colors.ink}` text, a cool grey ladder for every divider, border and disabled state, and one deep royal blue `{colors.primary}` that carries every action and every section eyebrow. The only warm colour is amber `{colors.accent}`, and it appears in exactly two places: statistics on dark navy bands, and the call-to-action button on those same dark bands. That restraint is the brand.

Type is the second decisive voice. **Plus Jakarta Sans** carries display — hero headline, section heads, card titles, and the large tabular statistics — at weight 700 for the two largest steps and 600 below. **Figtree** carries everything narrative: body, buttons, nav, captions and the uppercase eyebrow. Headlines are sentence-case with moderate negative tracking (`-1.3 px` at 52 px); the system never letter-spaces positively except for the 12 px eyebrow.

Surfaces use a five-step ladder: `{colors.canvas}` (white for cards and the hero), `{colors.canvas-soft}` (the cool grey band behind industries, logos and alternating sections), `{colors.canvas-soft-2}` (inset regions and table headers), `{colors.primary}` (royal blue stats band and featured solution card), and `{colors.navy-band-end}` (near-black navy for the careers band and footer). Cards are lifted by a two-layer shadow — `0 1px 2px` + `0 4px 12px` at 6–8 % slate opacity — plus a hairline ring. Cards sit visibly above the page; this is a denser, more "built" system than a gallery site, and the elevation is part of the confidence.

**Key Characteristics:**
- A single royal-blue primary CTA `{colors.primary}` carries every conversion target ("Contact sales", "Request a proposal"), paired with an outlined blue `button-secondary` for the secondary action ("See careers", "Download overview"). Corners are 8 px everywhere.
- Amber `{colors.accent}` is used only on dark navy surfaces — stat figures and the `button-accent-on-dark` CTA, which uses ink text for contrast. It never appears on white.
- Every section opens with a `{typography.eyebrow}` — 12 px, uppercase, tracked, in `{colors.primary}` — followed by a `display-lg` headline. The eyebrow-headline-lead rhythm is the page's structure.
- Two-layer shadows plus hairline rings on every card. Elevation is real but soft; nothing floats on a heavy drop.
- A supporting teal `{colors.support-teal}` exists for the second series in charts and for alternating icon tiles; it never appears on actions or text.
- Dense, scannable sections: a 3-up or 4-up iconographic services grid, a 4-up leadership grid, a dated news list, a numeric stats band, a locations table and a careers band — each with its own eyebrow.

## Colors

### Brand & Accent
- **Royal Blue** (`{colors.primary}` — `#1E3A8A`): The single primary action colour. Carries every "Contact sales" button, every eyebrow, every inline link, the stats band and the featured solution card. ~10.4:1 on white, so it also works as a text colour. Hover `{colors.primary-hover}` `#1B3478`, press `{colors.primary-press}` `#15285F`, deep `{colors.primary-deep}` `#172D6B`.
- **Blue Soft / Tint** (`{colors.primary-soft}` `#DBE4F7`, `{colors.primary-tint}` `#EEF2FB`): Pale blue fills for icon tiles, badges, the announcement bar and selected rows.
- **Amber** (`{colors.accent}` — `#F59E0B`): The highlight. Stat figures on `{colors.primary}` or `{colors.navy-band-end}` (~4.8:1 and ~8.6:1 respectively) and the `button-accent-on-dark` fill. Amber fails contrast as text on white (~2.2:1), so it is never used on light surfaces. Deep `{colors.accent-deep}` `#B45309` is the press state; soft `{colors.accent-soft}` `#FEF3C7` backs warning callouts.
- **On Accent** (`{colors.on-accent}` — `#0F172A`): Ink label on amber buttons (~8.3:1).
- **Support Teal** (`{colors.support-teal}` — `#0E7490`): A cool secondary for chart series two and alternating icon tiles. Decorative only.
- **Link** (`{colors.link}` — `#1E3A8A`): Inline links share the primary; `{colors.link-deep}` is the pressed tone; `{colors.link-bg-soft}` backs informational badges.

### Surface
- **Canvas** (`{colors.canvas}` — `#FFFFFF`): The white page floor, card surface and dialog surface.
- **Canvas Soft** (`{colors.canvas-soft}` — `#F3F5F9`): The cool grey band — logo strip, industries band, alternating sections, table headers.
- **Canvas Soft 2** (`{colors.canvas-soft-2}` — `#E8ECF3`): Inset regions, disabled fills, the selected row of a table.
- **Hairline** (`{colors.hairline}` — `#E2E8F0`): 1 px dividers — table rows, card rings, input borders.
- **Hairline Strong** (`{colors.hairline-strong}` — `#94A3B8`): The stronger divider and the de-emphasised icon tone.
- **Navy Band** (`{colors.navy-band-start}` `#1E3A8A` → `{colors.navy-band-end}` `#0F172A`): The dark gradient behind the careers band and the dark hero variant.
- **Navy Footer** (`{colors.navy-footer-start}` `#0F172A` → `{colors.navy-footer-end}` `#0B1120`): The footer floor.

### Text
- **Ink** (`{colors.ink}` — `#0F172A`): Every heading and body paragraph on light surfaces (~17:1).
- **Body** (`{colors.body}` — `#334155`): Secondary text — card descriptions, nav-link inactive text, table body (~9.7:1).
- **Mute** (`{colors.mute}` — `#64748B`): Lowest-priority text — placeholder text, fine print, dates in the news list (~4.8:1).
- **On Primary / On Dark** (`{colors.on-primary}` / `{colors.on-dark}` — `#FFFFFF`): All text on blue and navy surfaces.
- **On Dark Soft** (`{colors.on-dark-soft}` — `#CBD5E1`): Footer link rows and stat labels on navy (~11:1 on `#0F172A`).

### Semantic
- **Success** (`{colors.success}` — `#15803D`): "Message sent" confirmations and "Open" role badges.
- **Error** (`{colors.error}` — `#DC2626`): Validation red for form errors.
- **Error Soft** (`{colors.error-soft}` — `#FEE2E2`): Soft red fill for error-state field backgrounds.
- **Error Deep** (`{colors.error-deep}` — `#991B1B`): Pressed / deep destructive state.
- **Warning** (`{colors.warning}` — `#D97706`): Caution / "scheduled maintenance" notices.
- **Warning Soft** (`{colors.warning-soft}` — `#FEF3C7`) / **Warning Deep** (`{colors.warning-deep}` — `#92400E`): Background + pressed variants.

### Navy Bands
The system's signature decoration is the dark navy band, used twice per long page at most:
- **Stats band** (`{colors.primary}` flat) — four `{typography.stat-figure}` numbers in `{colors.accent}` with labels in `{colors.on-dark-soft}`. Figures are placeholders until the company supplies audited numbers.
- **Careers / dark hero band** (`{colors.navy-band-start}` → `{colors.navy-band-end}`, 160° gradient) — a headline in white, a lead in `{colors.on-dark-soft}`, and a `button-accent-on-dark`.
- **Footer** (`{colors.navy-footer-start}` → `{colors.navy-footer-end}`) — closes every page.

Treat the navy band as one unified object — do not add imagery over it, do not add a second gradient, and do not use amber anywhere outside it.

## Typography

### Font Family
Two open faces carry the entire system:

1. **Plus Jakarta Sans** for display — hero headline, section heads, card and tier titles, leadership names and the stats figures. Weights 700 (display-xl, display-lg, stat-figure) and 600 (display-md, display-sm) are the working set. Display sizes are tracked moderately negative (`-1.3 px` at 52 px, `-0.72 px` at 36 px). Its slightly rounded geometry reads modern and approachable without losing authority.
2. **Figtree** for everything else — body, buttons, nav, captions and the uppercase eyebrow. Weights 400 and 500 only. Tracking neutral for body; `+0.8 px` for `{typography.eyebrow}`.

There is no monospace role. Numeric content (stats, financial tables, locations) is set in Plus Jakarta Sans or Figtree with tabular figures (`tnum`) so columns align.

### Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&family=Figtree:wght@400;500&display=swap" rel="stylesheet">
```
```css
:root {
  --font-display: Outfit, 'Segoe UI', Arial, sans-serif;
  --font-body: Outfit, system-ui, -apple-system, sans-serif;
}
```

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 52px | 700 | 58px | -1.3px | Hero headline ("Operations expertise for companies that cannot stand still."). |
| `{typography.display-lg}` | 36px | 700 | 44px | -0.72px | Section headlines ("What we do", "Leadership", "Latest news"). |
| `{typography.display-md}` | 24px | 600 | 32px | -0.36px | Service card titles, solution tier names, news headlines. |
| `{typography.display-sm}` | 20px | 600 | 28px | -0.2px | Leadership names, inline micro-headings, location names. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | Lead paragraphs under section headlines. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default body paragraph, card descriptions. |
| `{typography.body-md-strong}` | 16px | 500 | 24px | 0 | Bolded inline body. |
| `{typography.body-sm}` | 14px | 400 | 20px | 0 | Secondary body, table body, footer links. |
| `{typography.body-sm-strong}` | 14px | 500 | 20px | 0 | Nav links, nav CTA labels, table-row emphasis. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Footer legal lines, badge labels, news dates. |
| `{typography.eyebrow}` | 12px | 500 | 16px | +0.8px | Section eyebrows and table headers — uppercase, in `{colors.primary}`. |
| `{typography.stat-figure}` | 40px | 700 | 44px | -0.8px | Statistics on the navy band — tabular numerals. |
| `{typography.button-md}` | 14px | 500 | 20px | 0 | Small / nav-scale button labels. |
| `{typography.button-lg}` | 16px | 500 | 24px | 0 | Page-scale button labels. |

### Principles
- **Eyebrow → headline → lead.** Every section follows this rhythm; the eyebrow in blue is what makes the page scannable.
- **Sentence-case headlines.** Only the eyebrow and table headers are uppercase.
- **Weight 700 at the top, 600 below.** Hero and section heads are 700; card titles are 600. Never 800.
- **Figures are tabular.** Stats, financial tables and locations use `tnum` so columns line up.
- **Figtree never goes above 500.** Emphasis in body comes from colour (`{colors.ink}` vs `{colors.body}`) before weight.

### Note on Font Substitutes
Both faces are open-source and load from Google Fonts under the SIL Open Font License. For a fallback-only rendering, `'Segoe UI', Arial` for display and `system-ui` for body keep the proportions acceptable; retain the tracking values and the 700/600 split.

## Layout

### Spacing System
- **Base unit**: 4 px. Every captured value is a multiple of 4; the grid gutter is 24 px.
- **Tokens**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 12 px · `{spacing.md}` 16 px · `{spacing.lg}` 24 px · `{spacing.xl}` 32 px · `{spacing.2xl}` 40 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 96 px · `{spacing.6xl}` 128 px · `{spacing.section}` 192 px.
- **Section padding**: bands use `{spacing.4xl}` to `{spacing.5xl}` top/bottom. The hero uses `{spacing.4xl}`; the system is denser than a portfolio site and never stretches to `{spacing.section}` except on the dark hero variant.
- **Card inner padding**: service cards sit at `{spacing.lg}`; large cards and solution tiers at `{spacing.xl}`; news and leadership cards stay tighter at `{spacing.md}` because they sit in denser grids.
- **Inline gap**: button rows, nav rows and tab rows use `{spacing.sm}` to `{spacing.md}` between siblings.

### Grid & Container
- **Max width**: 1280 px. Content centres with horizontal gutters of `{spacing.lg}` 24 px on desktop, `{spacing.md}` 16 px on mobile.
- **Column patterns**:
  - Services grid: 3-up at desktop (or 4-up for six-to-eight services), 1-up at mobile, each card with an `icon-tile`.
  - Industry tab row: left-aligned row of `industry-tab` pills with the active tab in `{colors.primary}` fill.
  - Leadership grid: 4-up at desktop, 2-up at tablet, 1-up at mobile; portrait 1:1 inside the card.
  - Solution tier grid: 3-up at desktop with the middle tier polarity-flipped.
  - News list: single column of `news-card` rows with date left, headline right; 3-up card grid on the news index.
  - Stats band: 4-up figures; 2-up at mobile.
  - Locations: a 2-column table (city, address, phone) or 3-up location cards.
  - Logo strip: ~6 logos wide, single row, greyscale.

### Whitespace Philosophy
Structure does the heavy lifting; whitespace separates the bands and the cards. Section spacing is `{spacing.4xl}` to `{spacing.5xl}` — tighter than a gallery site because every band carries a labelled grid. Inside a card, the icon/title/description stack is tight (`{spacing.xs}` to `{spacing.sm}` gap), then a wider gap before the "Learn more" link. The page reads as organised — consistent gaps, consistent card heights, never ragged.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hero stacks; nav collapses to hamburger; 3-up and 4-up grids drop to 1-up; stats 2-up; industry tab row scrolls horizontally; locations table becomes cards. |
| Tablet | 640–1023px | 3-up grids drop to 2-up; leadership 2-up; nav still horizontal with fewer links. |
| Desktop | 1024–1279px | Full 3-up grids; solution tiers 3-up; leadership 4-up. |
| Wide | 1280–1535px | Container caps at 1280 px content width. |
| Ultra-wide | ≥ 1536px | Content stays centred at 1280 px; bands stretch edge-to-edge in colour but content holds the max-width. |

#### Touch Targets
`button-primary` renders at 48 px tall on page surfaces and 36 px inside the nav. Nav buttons inflate their tap area through `{spacing.xs}` padding on mobile to meet the 44 × 44 px floor. News rows and leadership cards are whole-card tap targets.

#### Collapsing Strategy
- **Nav**: logo left, link row centre (Services / Industries / About / News / Careers / Investors), "Client portal / Careers / Contact sales" cluster right at desktop. Collapses to logo + hamburger at mobile with the menu opening as a full-overlay listing links in `{typography.display-sm}` with the "Contact sales" button pinned at the bottom.
- **Hero**: headline + lead + CTA row on the left, a 4:3 image or abstract diagram on the right at desktop (7/5 split); stacks vertically at tablet and below with the image second.
- **Services grid**: 3-up → 2-up → 1-up; cards keep their `{rounded.md}` 8 px shape and shadow across all viewports.
- **Solution tier grid**: 3-up at desktop, vertical stack at mobile with `solution-card-featured` always first.
- **Leadership grid**: 4-up → 2-up → 1-up; portraits stay 1:1.
- **Stats band**: 4-up → 2-up; figures drop from 40 px to 32 px at mobile.

#### Image Behavior
- **Hero image**: 4:3 at desktop inside `{rounded.lg}` chrome with a Level 4 shadow; 16:9 crop at mobile via `object-fit: cover`.
- **Partner / certification logos**: rendered as greyscale SVG or PNG in the logo strip; consistent 28 px height; placeholders until supplied.
- **Leadership portraits**: 1:1 inside `{rounded.md}` card chrome, consistent studio background; placeholders until supplied.
- **News thumbnails**: 16:9 landscape inside `{rounded.md}` card chrome; lazy-loaded; `{colors.canvas-soft-2}` placeholder.
- **Diagrams** (process, org, service model): flat line-art in `{colors.primary}` and `{colors.support-teal}` on `{colors.canvas-soft}`.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Full-bleed bands, the navy stats band, footer. |
| Level 1 — Hairline Ring | `0 0 0 1px #0F172A14` inset 1 px ring. | Default card chrome — news rows, inputs, table cells. |
| Level 2 — Soft Lift | `0px 1px 2px #0F172A0F, 0px 4px 12px #0F172A14` plus hairline ring. | The canonical two-layer card shadow — service cards, leadership cards, solution tiers. |
| Level 3 — Medium Lift | `0px 2px 4px #0F172A0F, 0px 8px 20px -4px #0F172A1A` plus hairline ring. | Large service cards, the hero image, callout panels. |
| Level 4 — Float | `0px 4px 8px #0F172A0F, 0px 12px 28px -6px #0F172A1F` plus hairline ring. | Toasts, dropdown menus, the sticky contact panel. |
| Level 5 — Modal | `0px 1px 2px #0F172A0A, 0px 12px 28px -6px #0F172A1F, 0px 32px 48px -12px #0F172A29` plus hairline ring. | Modal / dialog surfaces. |

The system uses LAYERED shadows — two offsets tinted with slate rather than pure black — so cards look lit by a cool overhead light. Hairline rings are always added so the card edge stays crisp on white.

### Decorative Depth
- **Polarity-flipped navy band as section-depth**: switching the surface from `{colors.canvas}` to `{colors.primary}` or `{colors.navy-band-end}` is the chief depth cue between bands.
- **Icon tiles as micro-depth**: the `{colors.primary-tint}` square behind each service icon gives cards a focal point without an illustration.
- **Shadow + ring combo**: the cards' combination of a 1 px ring and a two-layer drop produces a "card sits on the page" effect that reads as polished rather than material-heavy.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed bands, footer, the announcement bar. |
| `{rounded.xs}` | 4px | Checkbox and small chip corners. |
| `{rounded.sm}` | 6px | Nav-link hover ghost, dropdown items, portal sidebar rows. |
| `{rounded.md}` | 8px | The base radius — buttons, inputs, service cards, news cards, leadership cards, icon tiles. |
| `{rounded.lg}` | 12px | Larger card chrome — solution tiers, large service cards, the hero image, modals. |
| `{rounded.xl}` | 16px | Reserved for a hero image cap on the dark hero variant. |
| `{rounded.pill-sm}` | 64px | Industry tab pills. |
| `{rounded.pill}` | 100px | Reserved; buttons do NOT use pills in this system. |
| `{rounded.full}` | 9999px | Round icon buttons, badges, status dots. |

### Photography Geometry
- **Hero image**: 4:3 inside `{rounded.lg}` chrome with a Level 3 shadow; a confident office / operations / facility photograph, never a stock handshake.
- **Partner logos**: greyscale, consistent 28 px height in a flex row on `{colors.canvas-soft}`.
- **Leadership portraits**: 1:1, `{rounded.md}` corners, consistent background.
- **News thumbnails**: 16:9 inside `{rounded.md}` chrome.
- **Case study / showcase imagery**: 2:1 or 16:9 inside `{rounded.lg}` chrome with a Level 3 shadow.

## Components

### Buttons

**`button-primary`** — the canonical royal-blue 8 px button, page scale.
- Background `{colors.primary}`, text `{colors.on-primary}`, label set in `{typography.button-lg}`, padding `0px {spacing.lg}` 24 px, shape `{rounded.md}` 8 px. Renders 48 px tall. Hover `{colors.primary-hover}`, press `{colors.primary-press}`. Used for "Contact sales", "Request a proposal".

**`button-secondary`** — the outlined blue button paired with the primary inside bands.
- Background `{colors.canvas}`, text `{colors.primary}`, 1 px solid `{colors.primary}` border, same typography + padding as `button-primary`, shape `{rounded.md}`. Used for "See careers", "Download company overview".

**`button-accent-on-dark`** — the amber CTA used ONLY on navy bands.
- Background `{colors.accent}`, text `{colors.on-accent}` (ink, ~8.3:1 — amber needs dark text), same typography + padding + shape as `button-primary`. Press `{colors.accent-deep}` with white text. Never used on white surfaces.

**`button-primary-sm`** — the smaller-scale primary used inside the nav, solution tiers and card footers.
- Background `{colors.primary}`, text `{colors.on-primary}`, label set in `{typography.button-md}` (14 px / 500), padding `0px {spacing.md}`, shape `{rounded.md}`, 36 px tall.

**`button-secondary-sm`** — the smaller-scale outlined button paired with `button-primary-sm`.
- Background `{colors.canvas}`, text `{colors.primary}`, 1 px `{colors.primary}` border, same typography + shape as `button-primary-sm`.

**`industry-tab`** — the industry filter row ("Manufacturing / Healthcare / Financial services / Public sector / Energy").
- Background `{colors.canvas-soft}`, text `{colors.body}`, label set in `{typography.body-sm-strong}`, padding `0px {spacing.md}`, shape `{rounded.pill-sm}` 64 px, 36 px tall. Active tab: `{colors.primary}` fill with `{colors.on-primary}` text.

**`icon-button-round`** — the round icon container (carousel arrows, "back to top", social icons in the footer).
- Background `{colors.canvas}`, blue icon, 1 px solid `{colors.hairline}` border, shape `{rounded.full}`, 40 × 40 px.

**Nav CTAs:**

**`nav-cta-contact-sales`** — the small blue "Contact sales" button in the nav row.
- Background `{colors.primary}`, text `{colors.on-primary}`, label `{typography.body-sm-strong}`, padding `0px {spacing.md}`, height 36 px, shape `{rounded.md}` 8 px.

**`nav-cta-portal`** — the plain "Client portal" / "Investor login" text button in the nav.
- Background `{colors.canvas}`, text `{colors.primary}`, same typography / height / shape as `nav-cta-contact-sales`, no border.

**`nav-cta-careers`** — the "Careers" button with a faint border.
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, same typography / height / shape.

### Cards & Containers

**`service-card`** — the canonical iconographic service card (3-up or 4-up grid).
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.lg}` 24 px, shape `{rounded.md}` 8 px. Carries Level 2 soft-lift shadow. Inside: an `icon-tile`, title in `{typography.display-md}`, description in `{typography.body-md}`, "Learn more →" as `link-inline`.

**`service-card-large`** — the larger card used for flagship solutions or the "Why us" callouts.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.xl}`, shape `{rounded.lg}` 12 px. Carries Level 3 medium-lift shadow; may host a 16:9 image cap.

**`card-soft`** — the soft-tinted card used inside cluster groups (values, certifications, FAQ answers).
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.lg}`, shape `{rounded.md}`, no shadow.

**`news-card`** — the news / press-release card in the "Latest news" grid and the news index.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.md}` 16 px, shape `{rounded.md}` 8 px, Level 2 shadow. Hosts a 16:9 thumbnail at the top, a `badge-secondary` category ("Press release", "Insight", "Event"), the date in `{typography.caption}` `{colors.mute}`, and the headline in `{typography.display-sm}`.

**`leadership-card`** — the executive / board member card (4-up grid).
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.md}`, shape `{rounded.md}`, Level 2 shadow. 1:1 portrait on top, name in `{typography.display-sm}`, role in `{typography.body-sm}` `{colors.body}`, optional profile link. Names and roles are placeholders until supplied.

**`icon-tile`** — the 48 px square behind each service icon.
- Background `{colors.primary-tint}`, icon in `{colors.primary}` at 24 px, shape `{rounded.md}`. Alternate tiles may use `{colors.support-teal-soft}` + `{colors.support-teal}`.

**`solution-card`** — the default solution / engagement tier card (Advisory / Implementation / Managed services).
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.xl}` 32 px, shape `{rounded.lg}` 12 px, Level 2 shadow. Inside: tier name in `{typography.display-md}`, a one-line "best for" in `{typography.body-md}`, a checklist in `{typography.body-md}` rows, CTA at the bottom. No prices unless the company publishes them.

**`solution-card-featured`** — the polarity-flipped recommended tier.
- Background `{colors.primary}`, text `{colors.on-primary}`, same shape + padding as `solution-card`. CTA becomes `button-accent-on-dark` (amber with ink label on the blue card).

### Inputs & Forms

**`form-input`** — the canonical text input (contact-sales form, newsletter).
- Background `{colors.canvas}`, text `{colors.ink}`, 1 px solid `{colors.hairline}` border, body in `{typography.body-sm}` (14 px), padding `0px {spacing.sm}`, height 44 px, shape `{rounded.md}` 8 px. Focus: border `{colors.primary}` plus a 3 px `{colors.primary-soft}` ring.

**`form-input-sm`** — small-height variant (36 px tall) for the footer newsletter field and table filters.
- Same as `form-input` but height 36 px.

**`form-input-lg`** — large-height variant (52 px tall) for the contact-sales form's main fields.
- Same as `form-input` but height 52 px; body in `{typography.body-md}` 16 px. Selects (company size, country, topic) share the same chrome with a chevron at the right.

### Navigation

**`nav-bar`** — the sticky top nav with a 1 px `{colors.hairline}` rule beneath.
- Background `{colors.canvas}`, text `{colors.ink}`, height 72 px, padding `{spacing.sm} {spacing.lg}`. Layout: logo left, link row centre (Services / Industries / About / News / Careers / Investors), "Client portal / Careers / Contact sales" cluster right. Services and Industries open a two-column mega-menu on `{colors.canvas}` with a Level 4 shadow.

**`nav-link`** — the centred link row inside `nav-bar`.
- Text `{colors.body}`, set in `{typography.body-sm-strong}`, padding `{spacing.xs} {spacing.sm}`, shape `{rounded.sm}` (ghost fill `{colors.canvas-soft}` on the current page).

**`footer`** — the dark navy 5-column footer.
- Background `{colors.navy-footer-start}` → `{colors.navy-footer-end}`, text `{colors.on-dark-soft}`, padding `{spacing.4xl} {spacing.lg}`. Column labels (Services / Company / Resources / Investors / Legal) in `{typography.eyebrow}` `{colors.on-dark}`; link rows in `{typography.body-sm}`; a bottom bar with registered office placeholder, company registration number placeholder, privacy / cookies / terms links and copyright in `{typography.caption}`.

### Signature Components

**`hero-band`** — the white hero with a 7/5 split.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.lg}`. Left: a `{typography.eyebrow}` ("Operations consulting · Est. [year]"), the headline in `{typography.display-xl}` (sentence-case), a lead in `{typography.body-lg}`, then a CTA row with `button-primary` + `button-secondary`. Right: a 4:3 image in `{rounded.lg}` chrome with a Level 3 shadow.

**`hero-band-dark`** — the navy hero variant for the careers landing page and investor pages.
- Background `{colors.navy-band-start}` → `{colors.navy-band-end}` at 160°, text `{colors.on-dark}`, padding `{spacing.5xl} {spacing.lg}`. Headline in `{typography.display-xl}`; lead in `{colors.on-dark-soft}`; CTA `button-accent-on-dark`.

**`industries-band-light`** — the soft-canvas section listing the industries served, with the `industry-tab` row and a 3-up card grid beneath.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.5xl} {spacing.lg}`.

**`stats-band-dark`** — the royal-blue band carrying four headline figures.
- Background `{colors.primary}`, padding `{spacing.4xl} {spacing.lg}`. Figures in `{typography.stat-figure}` `{colors.accent}`; labels beneath in `{typography.body-sm}` `{colors.on-dark-soft}` ("Employees", "Countries", "Years in operation", "Client retention"). Figures are placeholders until audited numbers are supplied.

**`careers-cta-band`** — the near-black navy band before the footer ("Build your career with us").
- Background `{colors.navy-band-start}` → `{colors.navy-band-end}`, text `{colors.on-dark}`, padding `{spacing.5xl} {spacing.lg}`. Headline in `{typography.display-lg}`; lead in `{colors.on-dark-soft}`; `button-accent-on-dark` "See open roles" + `button-secondary` (white outline variant on dark).

**`logo-strip`** — the partner / certification logo row under the hero.
- Background `{colors.canvas-soft}`, text `{colors.body}`, padding `{spacing.lg} {spacing.xl}`. An `{typography.eyebrow}` ("Trusted by" / "Certified to") then greyscale logos at 28 px height; placeholders until the company supplies permission-cleared logos.

**`badge-secondary`** — the small inline metadata pill ("Press release", "Open", "New office").
- Background `{colors.primary-tint}`, text `{colors.primary}`, body in `{typography.caption}`, padding `0px {spacing.xs}`, shape `{rounded.full}`, 20 px tall.

**`announcement-bar`** — the slim full-width bar above the nav for a time-limited notice (placeholder copy: "[Company] publishes [year] annual report").
- Background `{colors.primary-tint}`, text `{colors.primary}`, body in `{typography.body-sm-strong}`, padding `{spacing.xs} {spacing.sm}`, square corners, with a "Read more →" link and a dismiss icon.

**`link-inline`** — body-copy inline links.
- Text `{colors.link}` (`#1E3A8A`), body in `{typography.body-md}`, underlined; press `{colors.link-deep}`.

### Examples (illustrative)

> Auto-derived kit-mirror demonstration surfaces (`scripts/derive-examples-block.mjs`). Each `ex-*` entry references system-native primitives so downstream consumers (`/preview-design`, `/generate-kit`) re-skin the same 10 surfaces consistently. `TO_FILL` markers indicate missing primitives — resolve in the judgment pass.

**`ex-solution-tier`** — Default solution tier card. Re-uses `solution-card` chrome with a hairline ring and Level 2 shadow.
- Properties: `backgroundColor`, `textColor`, `borderColor`, `rounded`, `padding`

**`ex-solution-tier-featured`** — Recommended tier — polarity-flipped surface (royal blue fill + white text + amber CTA).
- Properties: `backgroundColor`, `textColor`, `rounded`, `padding`

**`ex-services-summary`** — What's Included summary card — scope lines for a services engagement, not a product gallery.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-rfp-summary`** — Request-for-proposal summary — line items per selected service before submission (not a cart).
- Properties: `backgroundColor`, `rounded`, `padding`, `item-divider`

**`ex-portal-nav-row`** — Sidebar nav row for the client / investor portal. Active state uses the primary as a left-edge bar.
- Properties: `backgroundColor`, `activeIndicator`, `rounded`, `padding`

**`ex-data-table-cell`** — Locations / financial-results table th + td chrome. Header uses the eyebrow; body uses body-sm with tabular figures.
- Properties: `headerBackground`, `headerTypography`, `bodyTypography`, `cellPadding`, `rowBorder`

**`ex-contact-form-card`** — Contact-sales form card. Re-uses `service-card-large` chrome with `form-input` primitives inside.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-modal-card`** — Modal dialog surface — same chrome as `service-card-large` with the Level 5 shadow.
- Properties: `backgroundColor`, `rounded`, `padding`

**`ex-empty-state-card`** — Empty-state frame (no open roles in this location / no news in this category).
- Properties: `backgroundColor`, `rounded`, `padding`, `captionTypography`

**`ex-toast`** — Toast notification surface — `service-card` shape + Level 4 shadow.
- Properties: `backgroundColor`, `rounded`, `padding`, `typography`


## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (`#1E3A8A`) for primary CTAs, eyebrows, links and the stats band. Royal blue IS the conversion target.
- Use `{rounded.md}` 8 px for every button, input and standard card, and `{rounded.lg}` 12 px for large cards and modals. Buttons are never pills.
- Set hero and section headlines in Plus Jakarta Sans 700 and card titles in 600, sentence-case, with the documented negative tracking.
- Open every section with a blue `{typography.eyebrow}`; it is what makes a dense corporate page scannable.
- Layer the two-offset slate-tinted shadow plus a hairline ring on every card. Elevation is part of the polish.
- Cycle page surfaces in `{colors.canvas}` → `{colors.canvas-soft}` → navy bands; the dark band IS the depth cue, used at most twice per page plus the footer.
- Use amber `{colors.accent}` only on navy or blue surfaces, always with ink text on buttons.
- Set every figure (stats, tables) with tabular numerals so columns align.

### Don't
- Don't introduce a fourth brand colour. The system operates with royal blue + slate greys + amber-on-dark + a supporting teal for charts; new accents flatten the voice.
- Don't render headlines in all-caps. Caps belong to the 12 px eyebrow and table headers only.
- Don't drop a single heavy black shadow on cards. Elevation is two slate-tinted layers plus a ring.
- Don't place amber text or amber buttons on white. It fails contrast and breaks the "highlight on dark" rule.
- Don't promote the display face to weight 800. The ceiling is 700.
- Don't use pill-shaped buttons; pills are for industry tabs and badges only.
- Don't fabricate statistics, client logos, leadership names, press quotes or awards; placeholders must be labelled until the company supplies them.
- Don't stack more than two navy bands between the hero and the footer; the dark surface is a scarce signal.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.service-card}`, `{component.stats-band-dark}`).
2. Variants of an existing component (`-sm`, `-large`, `-featured`, `-on-dark`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover beyond the primary's `{colors.primary-hover}`. Default and Active/Pressed states only.
5. Display stays Plus Jakarta Sans 700/600 with negative tracking. Body stays Figtree 400/500. Eyebrows stay uppercase blue. The trinity does not blur.
6. Navy bands are scarce — the stats band, one careers / dark hero band, and the footer.
7. When in doubt about emphasis: add an eyebrow or a card before adding weight or colour.

## Known Gaps

- Statistics in `stats-band-dark`, partner logos, leadership portraits and news items are placeholders; nothing may be invented.
- Chart styling (annual report / investor pages) is only sketched via `{colors.primary}` + `{colors.support-teal}`; a full chart palette is out of scope.
- The client / investor portal (`ex-portal-nav-row`) is specified at the chrome level only; its screens are a separate product surface.
- Mega-menu layout for Services and Industries is described, not fully tokenised.
- Form validation states beyond the error tone (`{colors.error}` border + `{colors.error-soft}` field fill) and the success toast are not fully specified.
- Cookie-consent banner and legal-page typography (privacy, terms, modern-slavery statement) reuse body tokens; no dedicated components are defined.

### Revision 2026-10-07 (b): reference-led direction, Lumio (lumio-astro.pages.dev)
- The owner asked for the corporate homepage to follow the Lumio Astro theme exactly. Captured at 1440 and 390 with its stylesheet and scripts; its language is: Outfit for everything, electric blue `#2563FF`, near-black `#222` text, a warm `#F5F3EF` band and `#141414` panels, flat surfaces (no shadows), 6px buttons with a ↗ glyph, diamond eyebrows, vertical ghost watermarks on most sections, numbered lists with hairline rules, word-by-word blur reveals on every headline and uppercase display in the hero.
- Token changes in the frontmatter above: primary, link and hover/press blues; ink and greys; canvas-soft and canvas-soft-2 warmed; the navy band and footer darkened to graphite and black; every typography family set to Outfit. The Plus Jakarta Sans / Figtree pairing, the Level 2 and 3 shadows and the royal-blue stats band from the earlier revision are retired for this template.
- Section order as built: split-cell header with mega-menu; uppercase three-line hero with the client avatar badge over an image slider and the blue three-column feature card; About with "Since, [year]" watermark; blue ✳ marquee; numbered services with a small photograph; full-bleed portrait beside three oversized figures; blue testimonial slider; numbered features with a bleeding portrait; three split case-study cards; logo strip; video band with a PLAY dialog; insight rows; dark contact panel beside a portrait; black footer with the "Let's talk" marquee.
