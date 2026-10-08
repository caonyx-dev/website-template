# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS (inferred template default; undecided - confirm per project)

## Users

(inferred)

- **Diners deciding where to eat tonight.** Usually on a phone, often already out or about to leave, sometimes with a group waiting on them. They want four things fast: is it open, what is on the menu (and the rough price), where is it, and can they get a table. They abandon a site that buries hours or serves the menu as a slow PDF.
- **Event planners and hosts looking at private dining.** Typically on a desktop during the working day, comparing a few venues for a birthday, a team dinner, or a rehearsal dinner. They need room capacity, layout options, set-menu or minimum-spend information, and a way to ask a human.
- **Secondary:** regulars checking a seasonal menu change, gift-card buyers (if offered), and people with dietary requirements checking what they can safely eat.

## Product Purpose

(inferred) The site exists to turn intent into a visit: a confirmed reservation, a phone call, a walk-in who already knows the hours, or a private-dining enquiry. It is the restaurant's most-read menu and its most-checked opening-hours notice, and it must be accurate before it is beautiful. Success looks like: reservations and calls originating from the site, private-dining enquiries with enough detail to quote, and fewer phone calls that only ask "are you open?" or "do you have a vegetarian option?".

## Positioning

Placeholder, to be written by the owner: "[Restaurant name] is the only [style of cooking] in [neighbourhood] that [the specific, truthful thing a generic competitor cannot claim — e.g. the chef's background, a sourcing relationship, a room or garden, a format such as a changing set menu]." This is a placeholder and must not ship as written.

## Operating Context

- **Arrival paths:** map and local search results ("restaurants near me", the restaurant's name), social media links, review and listing sites, word of mouth, and QR codes on printed material. Many visits land directly on the menu or hours rather than the home page.
- **Devices:** mobile-first for diners (evenings and weekends peak); desktop for event planners (weekday daytime).
- **Moments of use:** urgent (tonight, in the next hour) for diners; researched and comparative for private dining.
- **Offline touchpoints the site must support:** a tap-to-call phone number, directions to the door (including parking or transit notes), an email for events, and consistency with the printed menu and the hours posted on the door and on map listings.

## Capabilities and Constraints

- **Required pages / sections:** home; menu (by service: lunch, dinner, drinks, dessert; seasonal or tasting menu optional); reservations; private dining and events; gallery; about / story; find us (address, map, hours, parking); contact; legal (privacy, allergen policy).
- **Primary calls to action:** "Reserve a table", "View menu", "Call". Reserve is present in the header on every page and in a sticky bar on mobile.
- **Secondary calls to action:** "Enquire about private dining", "Get directions", "Download PDF menu", "Buy a gift card" (undecided).
- **Flows:** reservation widget (integration placeholder for a third-party reservations provider; large-party note directing to phone); private-dining enquiry form (name, email, phone, date, guests, occasion, message); gallery lightbox.
- **Must-have information:** full menu with prices and an allergen / dietary note; opening hours by day including kitchen last-orders and holiday exceptions; address, map, and directions; phone number; private-dining capacities and formats; dress code or booking policies if any.
- **Integrations typically needed:** reservations provider embed, map embed, email delivery for the enquiry form, optional gift-card provider, optional online ordering (not included).
- **Legal / compliance notes:** menu accuracy (prices and availability must match what is served; mark "market price" items); allergen disclaimers consistent with local food-information law, with staff-consultation wording reviewed by the owner; alcohol-service and age-restriction notices where applicable; privacy notice for form data; accessibility statement.
- **Explicitly undecided:** reservations provider; gift cards; online ordering or delivery; whether menus are HTML, PDF, or both; number of menus and services; multilingual menus.

## Brand Commitments

The restaurant's name, logo, wordmark, and voice are placeholders to be supplied by the owner. Inferred voice guidance for the industry: warm, specific, and unhurried; speak about ingredients, the room, and the people plainly; avoid superlatives and borrowed culinary clichés; menu language should be descriptive and honest rather than florid; hours and policies should be stated without hedging.

## Evidence on Hand

None. This template contains no real menu, prices, photographs, reviews, press quotes, awards, chef biography, hours, address, licences, or reservation data, and none may be fabricated. The owner must supply: the current menus with prices and allergen information; opening hours and holiday exceptions; address, phone, and email; photography of dishes and the room; private-dining capacities and terms; the chef's or owner's note if one is wanted; legal wording for allergens and privacy; and any press or reviews they have permission to quote.

## Product Principles

1. **Hours, menu, location, reserve — in that order, within one scroll on a phone.** Everything else on the site is secondary to these four answers.
2. **The menu is a document of record.** It must be current, priced, and allergen-aware; an out-of-date menu costs more trust than no menu.
3. **One path to a table.** A single, consistent Reserve action everywhere, with the phone number as the fallback — never competing booking channels.
4. **Photography carries the mood; copy carries the facts.** Let the food and the room do the persuading; keep text short and precise.
5. **Private dining is a sales conversation, not a form.** The site qualifies the enquiry and hands it to a person quickly.

## Accessibility & Inclusion

- Target **WCAG 2.2 AA**: body text at or above 4.5:1 on the cream canvas, button labels at or above 4.5:1, visible focus states, and a minimum 44px touch target (48px for Reserve and Call).
- Mobile-first for people on the move: large tap targets, a tap-to-call number, hours readable without zooming, and menus as real HTML text (not image-only or PDF-only) so screen readers and translation tools can read them.
- Dietary and allergen information must be text, not icons alone; dietary tags need accessible names (e.g. "Vegan", not just "VG").
- Consider older diners and low-vision users: no light-grey text on cream, no italic for long passages (italic is limited to dish names).
- Multilingual visitors are likely in tourist areas; plan for a translated menu even if it is not built now.
- Provide an accessibility statement covering the physical venue (step-free access, accessible toilet) as well as the website.
