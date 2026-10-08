# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js App Router page inside this repo (`src/app/tech-startup`), static export friendly; no backend.

## Users

(inferred)

- **Operators with a problem, not a spec** — a COO, a head of support, a logistics manager who knows something in their business is slow or manual and suspects AI might help. They cannot evaluate a model card and do not want to. They want evidence that this team has shipped something like their problem before, and a way to start a conversation without committing.
- **Technical decision-makers** — a CTO or lead engineer who will be asked whether this is real. They look for how the work is actually done, where the data goes, what runs on their own infrastructure, and whether they will be left with something maintainable.
- **Procurement and finance** — arriving late, checking the company is a real entity with real clients before a contract.
- **Secondary**: candidates, and partners looking for an integration contact.

## Product Purpose

The site sells **capability**, not a product. Its job is to make an abstract offering feel concrete and worth paying for: show the kinds of problems the team takes on, show that real organisations have bought it, answer the objections that stop a first call, and get one specific action — a conversation booked. Success is qualified enquiries from organisations with a real problem and a budget, not sign-ups.

## Positioning

Placeholder, to be written by the founders: "[Startup] is the only AI team in [market] that [a specific, verifiable claim: e.g. deploys entirely inside the client's own infrastructure / publishes evaluation results for every model it ships / takes fixed-price delivery risk]." A competitor must not be able to copy the claim truthfully. Do not publish the placeholder.

## Operating Context

- **Arrival**: referrals, founder networks, conference and podcast mentions, search for the specific problem rather than for "AI", and links shared inside a prospect's team chat. Many visitors arrive sceptical and in a hurry.
- **Devices**: desktop-heavy during work hours; a meaningful share of first visits are phone-sized from a shared link, so the hero and the enquiry route must work one-handed.
- **Moments**: researched and repeated. A prospect may visit three times across weeks and show the site to two colleagues before making contact.
- **Offline touchpoints**: an intro call, a scoping workshop, a proposal. Everything on the site points at the first of those.
- **Content cadence**: services change rarely; clients and news occasionally. Nothing here is a live feed.

## Capabilities and Constraints

- **Required sections (homepage)**: hero with a single claim and social proof; what the company does; capabilities; how the work is done; featured services; a demonstration moment (video); clients; objection-handling FAQ; news; footer with newsletter.
- **Primary call to action**: "Get in touch" — one route, reachable from the nav, the hero, the dark panel and the footer.
- **Secondary calls to action**: watch the explainer, read a service page, read the news, subscribe.
- **Forms and flows**: a newsletter email field and a contact route. Both validate in the browser, show a visible success state, and post nowhere until a handler is wired.
- **Must-have information**: what the team actually builds; where it runs and who holds the data; named clients with permission; company entity and location.
- **Integrations typically needed (undecided)**: form delivery to email or CRM; analytics; a video host for the explainer. No auth, no billing, no docs site — this is not a self-serve product.
- **Legal and compliance**: company registration and location; data-processing and model-usage statements, which matter more here than in most industries; privacy and cookie notices; accurate claims about model capability and about what is automated versus human-reviewed; client logos used only with written permission.
- **Explicit constraints**: no fabricated clients, customer counts, case studies or performance claims. **No invented accuracy, uptime or model-benchmark figures** — in this industry an unevidenced number is both the easiest thing to write and the most damaging.

## Brand Commitments

The company name, logo, wordmark and voice are placeholders to be supplied by the founders. Inferred voice guidance: concrete about problems and vague about nothing; willing to say what the team does not do; plain about where the model runs and what happens to client data; free of "revolutionise", "unlock the power of" and every other phrase that could be pasted onto any AI company. The reference site's own copy is exactly the generic register to avoid.

## Evidence on Hand

No real clients, case studies, figures, people, testimonials or client logos exist in this template, and none may be fabricated. The founders must supply: client names with written permission to display them; the real customer or deployment count, if they want one shown; what the team self-performs versus subcontracts; data handling and residency specifics; company registration and address; the explainer video.

Imagery in `templates/tech-startup/assets/` is abstract render work standing in for the company's own art direction, plus open-licence photography for the news cards; see `CREDITS.json` in that folder for source per file.

## Product Principles

1. **Sell the problem, not the technology.** Every section should describe something a business recognises, not a capability a model has.
2. **No unevidenced numbers.** A figure is either something the company can prove or it is not on the site. Placeholders stay visibly placeholders.
3. **Say where it runs.** The single most common blocker on an AI deal is data. The site should answer it before being asked.
4. **One action.** Everything points at starting a conversation. There is no sign-up, no trial, no pricing table to get lost in.
5. **Scepticism is the default.** Assume the reader has seen ten AI landing pages this month and believed none of them.

## Accessibility & Inclusion

- Target WCAG 2.2 AA. The burnt orange (#E85C30) is ~3.4:1 against white, so it is restricted to **large text and 44px+ controls** — buttons, the play button, icons. It must never carry body copy or appear as text on white.
- The mute grey (#8A8A8A, ~3.5:1) is for index numerals, dates and meta only.
- Display type runs to 100px with 0.95 leading; that leading must not be applied below ~40px, where it would collide ascenders and descenders.
- Touch targets 44px minimum; buttons are 56px tall at every size.
- The capability section's asymmetric placement is visual only — the DOM order must match the reading order, and it collapses to one ordered column below `lg`.
- The FAQ is built on native `<details>`, so it opens and closes without JavaScript.
- No autoplaying video; the explainer opens from a button into a dialog that traps focus and closes on Escape.
- The newsletter field needs a real visible label, not a placeholder alone.
