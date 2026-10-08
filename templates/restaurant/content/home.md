# Restaurant — Homepage

**Status:** built. Live at `/restaurant`. Built after the Soul Kitchen dark demo (soulkitchen.redsun.design/dark) in this template's own tokens; see the dated revision at the end of `DESIGN.md`.

## Sections, in order

1. **Contact strip** — address, phone, email and three social links on near-black.
2. **Navigation** — Menu / Our story / Gallery, the centred wordmark, Drinks / Private dining / Find us, and the olive "Book a table". A full-height panel on phones.
3. **Hero** — split: the rotated "Welcome" label, the eyebrow, the headline, the lead and two buttons on near-black, beside a full-bleed plate photograph that settles out of a slow zoom.
4. **Hours strip** — three service windows in a ruled band.
5. **Entry cards** — The room, This week, In season: eyebrow and title over the photograph, a line of copy beneath.
6. **Story** — the centred two-paragraph history with an outlined button.
7. **Chef band** — the portrait with its rotated label, the text column, the signature block and two detail photographs.
8. **Philosophy** — one centred line under a vertical gold rule.
9. **Tiles** — tea, desserts and the bar as three tall photographs.
10. **Food menu** — tabs (Dinner / Lunch / Desserts), two ruled columns of dishes with dotted price leaders, a set-menu card, two dish photographs and the allergen note.
11. **Gallery** — a four-cell mosaic of the room and the pass.
12. **Drink menu** — tabs (Wine list / Cocktails) with glass and bottle price columns, and the corkage note.
13. **Reserve** — the request form, the room photograph and the "Find us" card.
14. **Private dining** — the counter, the back room and exclusive hire.
15. **Footer** — the welcome line, Visit, Talk, Hours, Follow, then the legal bar.
16. **Mobile bar** — Call and Book a table, phones only.

## Placeholders to replace

Everything in [square brackets], plus:

- **Name and identity** — `brand` (`[Restaurant]`) sets the wordmark, the footer and the page title in `src/app/restaurant/layout.tsx`.
- **Contact** — address, phone and email appear in four places: the contact strip, the phone menu, the Find us card and the footer. The `tel:` and `mailto:` hrefs in `Reserve`, `Nav`, `MobileBar` and the footer columns are built from those strings, so replace the real values everywhere.
- **The chef** — `[Chef name]`, `[city]`, the role line and the philosophy attribution.
- **The menus** — every dish, description, dietary tag, badge and price in `food.panels`, and every row in `drinks.panels`. **Prices are bare numbers with no currency symbol**, in the convention of a printed menu; add a symbol to each price string if you want one.
- **Dates and numbers** — the opening year, the seat counts, the private-dining minimums and the corkage figure.
- **Opening hours** — `hoursStrip.items` and the footer's Hours column are two separate lists; change both.
- **Links** — the social and maps URLs all point at bare domains, and the legal links (`/privacy`, `/terms`, `/accessibility`) have no pages behind them yet.
- **Photographs** — the sixteen files in `templates/restaurant/assets/` are AI-generated placeholders. Replace them at the same aspect ratios: `hero.jpg` 4:5, `chef.jpg` and the three `tile-*.jpg` 3:4, `dish-a/b.jpg` 1:1, everything else 3:2. Rewrite each `alt` in `content.tsx` to describe the real photograph.

## Notes

- The reservation form validates in the browser and posts nowhere. When a handler is wired, disable the submit button and set `aria-busy` while the request is in flight, or a double tap will book twice.
- Both menus mirror the open tab into a query parameter (`?menu=lunch`, `?drinks=cocktails`), so a section can be linked to directly.
- Two colour tokens are corrected in `src/app/restaurant/layout.tsx` for contrast rather than in the frontmatter: the eyebrow gold is darkened and form controls take their own border. The dated DESIGN.md revision explains why.
- No reviews, press quotes or awards appear anywhere, per the DESIGN.md "never fabricate" rule. If real ones exist, they belong in a new section rather than inside the story or chef copy.
