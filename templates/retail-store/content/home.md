# Retail store — Homepage

**Status:** built. Live at `/retail-store`. Built after the Vogal Shopify demo (vogal-demo.myshopify.com), following its composition, devices and motion in this template's white-and-mulberry palette. Geometry was measured from the live page rather than estimated. The dated revision at the end of `DESIGN.md` lists the three rules the rebuild overrides, the band that is this template's own, and the three devices deliberately not copied.

## Sections, in order

1. **Promo strip** — the yellow band: phone, a rotating message, dismiss.
2. **Header** — sticky: wordmark, six tabs with a mega-menu under "Shop", search / account / saved / bag with a count bubble. A modal sheet on phones.
3. **Hero** — two slides, the copy sitting in whichever half of the photograph is empty, with arrows and dots.
4. **Shop by category** — five circular medallions.
5. **New in this week** — the four-up product grid, a button, and the placeholder note.
6. **There's more to explore** — the four-tile mosaic.
7. **Brands we stock** — six bracketed wordmarks.
8. **This month's picks** — a four-up rail.
9. **Come and try it on** — the shop photograph, address, hours, phone, email and stock caveat.
10. **From the shop floor** — three journal cards.
11. **Reassurance band** — the ink strip: delivery, collection, returns, payment.
12. **Footer** — wordmark, blurb, three link columns, the newsletter, payments and the legal row.
13. **Tab bar** — Home, Shop, Saved, Bag, below `lg` only.
14. **Bag drawer** — opens from the header, the tab bar or any quick-add.

## Placeholders to replace

Everything in [square brackets], plus:

- **Identity** — `brand` (`[Store name]`) sets the header wordmark, the footer and the page title in `src/app/retail-store/layout.tsx`.
- **Contact** — the phone appears in the promo strip and the Visit band; the email in the Visit band and nowhere else. Every `tel:` and `mailto:` link is built from those strings by stripping the brackets. Replace them all.
- **The address and the opening hours** in the Visit band, and the promo strip's delivery and collection terms. These are the things a shopper acts on before getting in the car.
- **Prices** — stored as plain numbers and formatted by `Intl.NumberFormat`; change `CURRENCY` and `LOCALE` at the top of `content.tsx` rather than editing each string. Check whether you must state that VAT or sales tax is included.
- **Dates** — journal dates are ISO strings formatted with an explicit UTC time zone, so they are the same on the server and in every reader's browser. `footer.copyrightYear` is a plain number; update it once a year.
- **Photographs** — the files in `templates/retail-store/assets/` are AI-generated placeholders. Replace them at the same aspect ratios: `hero-1.jpg` and `hero-2.jpg` 16:9 **with one half of the frame left empty** (the slide's `side` field says which, and the copy sits there — a photograph with a subject across the whole frame will put text over a face); `explore-women.jpg` and `explore-men.jpg` 3:4; `explore-shoes.jpg` and `explore-accessories.jpg` 16:9; `store.jpg` and the three `journal-*.jpg` 3:2; the five `cat-*.jpg` and the twelve `p-*.jpg` 1:1. Rewrite each `alt` in `content.tsx` to describe the real photograph.
- **Links** — the legal and help links (`/privacy`, `/terms`, `/returns`, `/delivery`, `/sizing`, `/accessibility`, `/careers`) have no pages behind them yet, and every product and category link currently points back at an anchor on this page.

## Claims you must not ship unchanged

This template's DESIGN.md forbids inventing reviews, ratings, bestseller counts, brand marks and payment-provider logos, and the page is written to that rule.

- **The whole catalogue is template data.** Product names, prices, "was" prices, colourways, stock labels and the two sale percentages are placeholders, and a visible note under the grid says so. Replace them with your own catalogue — or wire the grid to your platform — and delete the note.
- **"Brands we stock"** holds six bracketed names with a visible note. List only labels you actually stock and are permitted to name, or delete the strip.
- **The payment methods** in the footer are bracketed text, not marks. Replace them with the methods your checkout actually accepts, using each provider's own licensed artwork.
- **The reassurance band** promises free local delivery, same-day collection, a returns window and secure payment. Every figure in it is bracketed because each one is a commitment. Only state what you will actually hold yourself to.
- **"This month's picks"** is deliberately framed as a human selection rather than a bestseller list, because a bestseller claim needs sales data behind it. If you rename it, be able to back it up.
- **The stock labels** ("Low stock", "In store only") and the Visit band's note that online stock is not a live figure must match how your stock actually works. Of everything on this page, a wrong stock label is the one that makes someone drive over for nothing.

## Notes

- **The bag is real but goes nowhere.** Quick-add puts the selected colourway into a drawer you can open, change the quantity in and empty; the header, the tab bar and the drawer all read the same state. It is held in memory for the life of the page — nothing is persisted and nothing is posted. The checkout button is **disabled** and carries a note saying so; wire it to your e-commerce platform before launch, and remove the note. Persisting the bag across page loads needs storage, which the template deliberately does not reach for.
- **The colour swatches on a card are a radio group**, so the colour you choose is the one quick-add adds, and each add is announced through a live region — you hear what went in without opening the drawer.
- **Quick-add appears on hover only where a fine pointer exists.** On touch it is simply always visible, so it is never unreachable.
- **The hero** advances on a 7-second timer that stops on hover, on focus and under reduced motion. Both slides are in the DOM, so the page is complete with JavaScript off.
- **The promo strip** rotates on a 6-second timer, stops under reduced motion, and keeps every message in a visually hidden list. Dismissing it hides it for the page, not for the session — wire it to storage if you want it to stay dismissed.
- **Yellow appears exactly twice** on the page: the promo strip and the New badge. The DESIGN.md caps it at three places at once; if you add a third, remove one.
- **Mulberry is 2.2:1 on the ink band**, so that band carries `.rst-on-dark`, which swaps the focus ring to white. If you add another dark section, add that class to it.
- **The newsletter field** validates in the browser and posts nowhere. It keeps what was typed on success. When a handler is wired, set `aria-busy` on the button while the request is in flight.

## Known gaps

- **There is no product page, collection page, or search.** Every product and category link is an anchor back to this page. This template ships the homepage only.
- **`/privacy`, `/terms`, `/returns`, `/delivery`, `/sizing`, `/accessibility` and `/careers` have no pages behind them** and currently 404. Write them or remove the links before launch — a shop in particular cannot ship without a returns policy and a privacy policy.

- **There is no search and no account area**, so the reference's search and account icons are not in the header. Add them back when there are pages behind them — an icon labelled "Search" that lands on the category grid is worse than no icon.
- **The saved list has no page.** The heart on a product card toggles real state, the header and tab bar show a dot and a count, but there is nowhere to go and see the list. Build that page, or remove the heart.
