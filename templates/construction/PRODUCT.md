# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js route `/construction` in the root app (shared components, tokens from this folder's DESIGN.md)

## Users

(inferred)

- **Homeowners** — planning a new build, extension, renovation or repair; comparing two or three contractors; wanting proof of past work, licensing and insurance, and a fast quote. Often on mobile, sometimes with urgency (storm damage, failed inspection).
- **Commercial developers and facility managers** — scoping fit-outs, small commercial builds or maintenance contracts; evaluating capability, safety record, capacity and process before issuing a tender or requesting a proposal. Desktop-heavy.
- **Secondary**: architects and designers looking for a build partner; trade subcontractors and job seekers checking the company out.

## Product Purpose

(inferred) The site exists to turn interest into quote requests and phone calls. It shows what the company builds, proves it is licensed, insured and safe, explains how a project runs from first call to handover, and makes requesting a quote or calling effortless. Success looks like qualified quote requests through the form, inbound calls from the site, and commercial proposal requests.

## Positioning

Placeholder, to be written by the business: "[Company] is the [region] contractor that [the claim a generic competitor could not truthfully copy — e.g. a fixed-price guarantee, a specific specialism, an in-house trades team, or a documented safety record]." The template ships with this line marked as a placeholder.

## Operating Context

- Visitors arrive via local search ("builder near me", "[service] contractor [town]"), map listings, referrals, signage on sites and vehicles, trade directories, and social posts of finished work.
- Mobile dominates for homeowners; desktop for commercial clients. A phone call is often preferred over typing, so the number must be tappable everywhere.
- Moments of use range from urgent (repair after damage) to researched (a planned extension); both need the phone number and quote form within reach.
- Offline touchpoints the site must support: phone calls, site visits for quotes, email with plans attached, and a downloadable capability statement for commercial clients.

## Capabilities and Constraints

- **Required pages / sections**: home, services (per service detail: new builds, renovations and extensions, commercial fit-out, roofing, groundworks — final list undecided), projects gallery (filterable; before/after for renovations), process / timeline (consult → quote → design & permits → build → inspect → handover), about (team, crew, values), licensing & insurance (placeholders), safety, service area, reviews placeholder, quote request, contact.
- **Primary CTA**: "Request a quote" (form) and "Call" (tel: link). **Secondary**: "View projects", "Download capability statement".
- **Quote form fields** (undecided, suggested): name, phone, email, project type, property type, location / postcode, budget band, preferred start, description, file upload for plans or photos; consent checkbox.
- **Must-have information**: licence numbers and insurance placeholders, service area, hours, phone, email, office address, company registration placeholder, safety accreditation placeholders.
- **Integrations typically needed**: form handling with file uploads and spam protection, map embed for service area, review-platform feed (optional), analytics with consent, click-to-call tracking.
- **Legal / compliance**: contractor licensing display rules per jurisdiction, insurance disclosure, building-code or permit statements, privacy policy, photo permissions for client properties.
- **Explicitly undecided**: service list, whether "from" prices are published, response-time promise, CMS vs. static, review source.

## Brand Commitments

- Business name, logo, photography, crew names, licence and insurance figures and voice are placeholders to be supplied by the business.
- Inferred voice for the industry: direct, plain, confident; short uppercase headlines; concrete nouns and numbers; no hype; promises only where the business can keep them.

## Evidence on Hand

No real projects, photographs, client names, reviews, ratings, licence or insurance numbers, safety statistics, completion counts, prices or crew members exist in this template, and none may be fabricated. The owner must supply: site and finished-work photographs with permission, project details, licence and insurance details, safety accreditations, service list and area, hours and contacts, crew bios, and any verified reviews.

## Product Principles

1. **Make the call easy.** The phone number and quote form are always within one tap; nothing on the page competes with them.
2. **Show the work, prove the credentials.** Photographs of real sites and visible licensing/insurance placeholders carry more weight than copy.
3. **Explain the process.** A clear timeline reduces fear of the unknown for first-time clients and sets expectations for commercial ones.
4. **Honest numbers only.** Counts, durations and prices appear only when the business can stand behind them.
5. **Built to be maintained.** Adding a project or a service must be simple so the gallery stays current.

## Accessibility & Inclusion

- Target WCAG 2.2 AA. Amber is never used as text on light surfaces; buttons use dark text on amber.
- Large tap targets (48 px) for gloved or outdoor use; sticky mobile call/quote bar.
- Forms work with autofill and native inputs (tel, file); errors are described in text, not colour alone.
- Alt text on every project photo describing the work; before/after pairs described in words.
- Readable at 200 % zoom; timeline reflows vertically.
- Plain-language explanations of permits and process stages; consider a second language common in the service area.
