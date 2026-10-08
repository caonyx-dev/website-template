# Website templates

Seventeen starter design systems, one folder per business type. Each folder holds exactly two files:

- `DESIGN.md` — the visual world: colour tokens, typography scale, spacing, radii, elevation, components, do's and don'ts, responsive rules. Adapted from a source design in the awesome-design-md collection, with free Google Fonts and a palette chosen for the business.
- `PRODUCT.md` — the product truth in Impeccable's schema: who the site serves, what it must do, required pages and calls to action, compliance notes, and what evidence the owner still has to supply. All facts are inferred placeholders until the real business confirms them.

**Rule:** a template uses only the `DESIGN.md` and `PRODUCT.md` inside its own folder. Never borrow from another template or from the project root.

## Index

| Template | Business | Mood | Source | Primary | Accent | Display font | Body font | Mono |
|---|---|---|---|---|---|---|---|---|
| [law-firm](law-firm/) | Law firm, several practice areas | Traditional, authoritative, editorial. Warm ivory, serif headlines, hairline rules, no gradients. | stripe | `#6B1F2A` burgundy | `#B08D57` brass | Cormorant Garamond | Source Sans 3 | – |
| [finance-accounting](finance-accounting/) | Accounting and financial advisory | Precise, modern, trustworthy. Cool white, data-forward number callouts, tabular figures. | stripe | `#0F3D5C` petrol blue | `#2BB673` green | Manrope | IBM Plex Sans | IBM Plex Mono |
| [architect](architect/) | Architecture studio | Gallery-quiet, grid-driven. Warm off-white, sharp corners, no shadows, large project imagery. | vercel | `#1C1C1A` charcoal | `#B45A2E` rust | Space Grotesk | Inter | – |
| [corporate](corporate/) | Mid-size B2B company | Confident, structured, enterprise. Cool white, navy bands, soft two-layer card shadows. | vercel | `#1E3A8A` royal blue | `#F59E0B` amber | Plus Jakarta Sans | Figtree | – |
| [construction](construction/) | Construction and general contracting | Industrial, bold, robust. Light concrete, uppercase condensed type, 2px borders, hard offset shadows. | cal | `#F2A900` safety amber | `#141414` graphite | Barlow Condensed | Barlow | – |
| [small-business](small-business/) | Local service business (plumber, salon, cleaner) | Approachable, warm, simple. Pill buttons, rounded corners, sticky call/book bar. | cal | `#2F855A` green | `#F6AD55` orange | Outfit | Open Sans | – |
| [gym](gym/) | Gym or fitness studio | High-energy, dark, punchy. Near-black canvas, volt buttons with dark text, big numerals. | raycast | `#A3E635` volt | `#FF4D4D` red | Oswald | Work Sans | – |
| [restaurant](restaurant/) | Independent restaurant | Intimate, warm, editorial menu. Cream canvas, dotted menu leaders, dark hero and footer bands. | airbnb | `#4D5B2F` olive | `#C9A227` gold | Playfair Display | Karla | – |
| [travel-agency](travel-agency/) | Travel agency and tour operator | Airy, bright, aspirational. Soft 16–20px radii, image cards, itinerary timeline, "from" price badges. | airbnb | `#0284C7` azure | `#F97316` sunset orange | DM Serif Display | DM Sans | – |
| [retail-store](retail-store/) | Retail store or small shop | Playful, bold, promotional. Product grid, promo banner strip, New / Sale badges. | airbnb | `#9D174D` mulberry | `#FACC15` yellow | Poppins | Mulish | – |
| [marketing-agency](marketing-agency/) | Marketing agency | Bold, opinionated, punchy. Warm paper, chunky borders, highlighter underlines, hard shadows. | posthog | `#6D28D9` violet | `#FDE047` acid yellow | Syne | Instrument Sans | Space Mono |
| [creative-agency](creative-agency/) | Creative and branding studio | Experimental, oversized type. Zero radii, full-bleed cobalt and orange blocks, asymmetric layouts. | figma | `#2B3FE8` cobalt | `#FF6B35` orange | Unbounded | Albert Sans | – |
| [tech-startup](tech-startup/) | Software startup | Sleek, product-led, dark. Luminous 1px borders, glass cards, emerald buttons with dark text. | linear.app | `#10B981` emerald | `#38BDF8` sky cyan | Sora | Hanken Grotesk | JetBrains Mono |
| [logistics](logistics/) | Freight, courier, logistics | Operational, dense, dependable. Light canvas, slate bands, tracking-number hero, mono reference codes. | linear.app | `#EA580C` signal orange | `#0F172A` slate | Archivo | Public Sans | JetBrains Mono |
| [real-estate](real-estate/) | Residential estate agency | Calm, premium, photographic. Warm sand canvas, listing cards with facts rows, search-bar hero. | apple | `#1F4D3A` forest green | `#D4A373` sand | Fraunces | Nunito Sans | – |
| [hotel](hotel/) | Boutique hotel | Luxurious, quiet, spacious. Ivory and midnight navy, gold hairlines, letterspaced capitals, slow fades. | apple | `#1B2A49` midnight navy | `#C9A227` gold | Marcellus | Jost | – |
| [dental-clinic](dental-clinic/) | Dental clinic | Clean, friendly, reassuring. Rounded 14–16px corners, soft shadows, treatment tiles, sticky booking. | notion | `#14B8A6` mint teal | `#F9A8D4` soft pink | Quicksand | Nunito | – |

## Viewing a template in the browser

Run `npm run dev` at the repo root and open http://localhost:3000. The gallery lists every template; built pages open at `/<slug>`, and templates without a page yet open as a style sheet rendered from their DESIGN.md.

## Picking a template

1. Match the business type first, then the mood column. Templates that share a source (stripe, vercel, cal, airbnb, linear.app, apple) were deliberately pushed apart in palette, type, radii, and density, so they are not interchangeable.
2. Open the folder's `PRODUCT.md` and replace every item marked inferred with the real business facts before any page is designed.
3. Build pages from that folder's `DESIGN.md` only. Its Typography section includes the Google Fonts link tag and CSS custom properties to load.

## Contrast notes

Several accents (gold, brass, sand, the lighter oranges) fail text contrast on their canvas. Each `DESIGN.md` restricts them to fills and rules and names a text-safe deep variant. Light primaries (amber, volt, emerald, signal orange) use dark button text, and the travel-agency button uses a deeper azure fill than the brand colour. Follow the rule written in each file's Colors section.
