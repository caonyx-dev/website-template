# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS (inferred template default; undecided - confirm per project)

## Users

(inferred)

- **Shoppers browsing products.** On a phone from a social link or search, or on a desktop in the evening. They want to see what is new, what is on offer, and what a thing costs, and to save or buy it with as little friction as possible.
- **Shoppers checking stock, hours, and location before visiting.** Often urgent and mobile: "is this in stock, are you open now, where are you?" They may call or drive over based on the answer.
- **Shoppers buying online.** They expect a clear price, variant selection, delivery and returns terms, and a cart that hands off to a trustworthy checkout.
- **Secondary:** gift buyers, returning customers looking for a specific item, and newsletter subscribers waiting for a drop or a sale.

## Product Purpose

(inferred) The site exists to sell — online, in store, or both — and to make the shop findable and current. It is the catalogue, the shop window, the opening-hours sign, and the promotion board. Success looks like: online orders and add-to-cart actions, store visits and calls driven by stock and hours information, newsletter sign-ups, and promotions that reach customers without a printed flyer.

## Positioning

Placeholder, to be written by the owner: "[Store name] is the [neighbourhood / city]'s [kind of shop] for [the specific, truthful thing a generic store cannot claim — e.g. a curated range from named makers, a repair or fitting service, an own-brand line, or a local-delivery promise]." This is a placeholder and must not ship as written.

## Operating Context

- **Arrival paths:** product and brand searches, map listings and "near me" searches, social media posts and ads, the newsletter, marketplace listings, and printed material in the shop and bags. Many visits land on a product or collection page rather than the home page.
- **Devices:** mobile-first for browsing and stock / hours checks; desktop meaningful for larger purchases and comparison.
- **Moments of use:** quick and impulsive (a promotion, a social post) or urgent (is it in stock, are you open); occasionally researched for higher-value items.
- **Offline touchpoints the site must support:** a tap-to-call phone, directions to the shop, hours including holiday exceptions, click-and-collect or reserve-in-store if offered, returns in store, and consistency with in-store pricing and signage.

## Capabilities and Constraints

- **Required pages / sections:** home with promo strip and collection tiles; shop / product catalogue (collection listing with filters and sorting; product detail with gallery, variants, price, stock, delivery and returns); collections; sale / offers; our store (hours, address, map, photos, services); about; contact; newsletter sign-up; legal (returns policy, delivery, privacy, terms).
- **Primary calls to action:** "Shop now", "Add to cart", "Visit store". Cart is persistent in the header; a sticky cart / add-to-cart bar follows the shopper on mobile.
- **Secondary calls to action:** "Notify me" (out of stock), "Save to wishlist", "Get directions", "Subscribe", "Quick add".
- **Flows:** browse and filter a collection; select variants and add to cart; cart drawer with quantities and subtotal; hand-off to checkout (platform undecided); newsletter subscription with consent; stock-check and store-visit path.
- **Must-have information:** product catalogue structure (product, variants, options, price, compare-at price, stock status, images, description, specs); collections and tags (New, Sale); store hours by day with holiday exceptions; address, map, phone; delivery costs and times; returns policy (placeholder); accepted payment methods (placeholder).
- **Integrations typically needed:** e-commerce platform for catalogue, cart, and checkout (undecided); stock feed or point-of-sale sync for "in stock in store"; email / newsletter provider; map embed; analytics; optional reviews platform.
- **Legal / compliance notes:** consumer rights and distance-selling rules in the store's jurisdiction (clear pricing including tax, delivery costs before checkout, cancellation and returns rights); accurate stock and availability claims; promotion wording and "was" prices must be truthful and time-bound; privacy and marketing consent for the newsletter; cookie consent; accessibility statement; age restrictions where product categories require it.
- **Explicitly undecided:** e-commerce platform; online sales vs. in-store only; delivery radius and pricing; click-and-collect; returns window; payment providers; reviews integration.

## Brand Commitments

The store's name, logo, wordmark, and voice are placeholders to be supplied by the owner. Inferred voice guidance for the industry: upbeat, direct, and friendly; lead with the product and the offer; keep promotional copy specific (what, how much, until when) rather than loud; speak about the shop as a place with people in it; avoid fake scarcity and manipulative urgency.

## Evidence on Hand

None. This template contains no real products, prices, stock levels, photographs, reviews, ratings, bestseller counts, brand or maker logos, payment-provider logos, hours, address, or policy text, and none may be fabricated. The owner must supply: the product catalogue with prices, variants, and images; collection structure; stock data or a rule for showing availability; store hours and holiday exceptions; address, phone, and email; delivery and returns terms; privacy and marketing consent wording; accepted payment methods; and any reviews or press they have permission to use.

## Product Principles

1. **The shelf is the hero.** Products and prices are the content; headlines and decoration exist to frame the grid, not replace it.
2. **Never make a shopper guess.** Price, stock, variants, delivery, and returns are visible before the cart, not discovered at checkout.
3. **One promotion at a time, truthfully.** Offers are specific and time-bound; the badge system signals New and Sale and nothing else.
4. **The shop is a place.** Hours, location, and in-store availability are always one tap away, because many sales still end at the counter.
5. **Platform-ready, platform-agnostic.** The catalogue, cart, and sticky-bar patterns map onto any commerce platform; the checkout is a hand-off, not a rebuild.

## Accessibility & Inclusion

- Target **WCAG 2.2 AA**: body text at or above 4.5:1, white on mulberry and ink on yellow for all labels, visible focus states, minimum 44px touch targets (48px for the mobile add-to-cart bar).
- Dense grids need structure: product cards as list items with accessible names that include the product name and price; badges and stock pills as text, not colour alone.
- Variant selection (size, colour) must be keyboard operable with visible selected states and text names for colour swatches.
- Promo strip and cart drawer must be dismissible and announced to assistive technology; the drawer must trap focus and return it.
- Mobile-first for shoppers on the go: hours and stock readable without zooming, tap-to-call, and no hover-only interactions (quick-add is always visible on touch).
- Consider low-vision and colour-blind shoppers in sale presentation: the strikethrough "was" price and the Sale badge both carry the discount, never colour alone.
