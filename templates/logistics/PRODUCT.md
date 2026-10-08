# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS (inferred template default; undecided - confirm per project)

## Users

(inferred) Two groups with very different moods:

- **Shippers and operations managers** who need a rate for a load or a shipment picked up — often today — or who need to know where a shipment is right now. They arrive from search or a bookmark, frequently on a phone from a warehouse floor or a vehicle, and want a quote form or a tracking box within one screen. They judge the company on whether the site feels operationally competent: clear services, coverage, cut-off times, and a phone number.
- **Carriers, drivers, and warehouse staff** looking at careers and open positions, usually on mobile, outside office hours.
- A smaller group of **procurement and compliance staff** checking licensing, insurance, and certifications before onboarding the company as a vendor.

The job on the site: get a quote, track a shipment, confirm the company covers the lane and industry, or apply for a job — fast.

## Product Purpose

(inferred) The site is the company's front desk: it generates quote requests, deflects tracking calls to self-service, qualifies the company for new accounts, and recruits drivers. Success looks like quote requests submitted, tracking lookups completed without a phone call, inbound calls from the site, and job applications.

## Positioning

Placeholder, to be written by the owner: "[Company] is the [regional / specialist] carrier that [the specific capability — e.g. a lane, a cut-off time, a handling specialism, a fleet type] that general freight brokers cannot truthfully claim." The claim must be a real operational fact, not a slogan.

## Operating Context

- **Arrival**: local and category search ("freight company [city]", "same-day courier"), referrals from existing customers, carrier directories, maps listings, and a bookmarked tracking page. Drivers arrive via job boards.
- **Devices**: heavily mobile for tracking and careers; desktop for quote requests and vendor checks. Tracking lookups happen in poor network conditions.
- **Moments**: urgent (a shipment is late, a load needs moving today) alongside researched (vendor onboarding). The urgent path must be one tap: phone number and tracking box visible immediately.
- **Offline touchpoints**: dispatch phone line, email for quotes and documents, depots and facilities visitors may need directions to, driver recruitment by phone. The site must surface phone, email, and addresses on every page.

## Capabilities and Constraints

- **Required pages/sections**: home, services (per service type), tracking, quote request, coverage / service area, industries served, fleet and certifications placeholder, careers (with open positions and an application form), about, contact (depots, hours, directions), legal (terms of carriage, privacy).
- **Primary CTA**: "Get a quote". **Secondary**: "Track shipment". Tertiary: "Call" (tap-to-call everywhere).
- **Forms/flows**: quote request (origin, destination, weight, dimensions, pallet or parcel count, pickup date, service level, contact details); tracking lookup by tracking number, reference, or PRO number (integration with a carrier API or internal system undecided); careers application (name, licence class, experience, contact, CV upload); contact form.
- **Must-have information**: service list with what each covers, coverage map or region list with transit-day estimates, cut-off times and depot hours (timetables), industries served, phone number and dispatch hours, depot addresses, fleet description, licensing and insurance summary.
- **Integrations typically needed**: tracking system or carrier API, quote routing to a CRM or email, map provider for coverage and depot locations, job board or ATS, analytics. All undecided.
- **Legal/compliance**: carrier authority or operating licence numbers (placeholders), cargo and liability insurance statements (placeholders), terms and conditions of carriage, hazardous goods handling statements only if certified, privacy policy for tracking and quote data, accessibility statement.
- **Explicitly undecided**: company name, service names, coverage regions, tracking integration, quote routing, which certifications are held, fleet counts.

## Brand Commitments

Business name, logo, fleet livery, and voice are placeholders to be supplied. Inferred voice for the industry: plain, direct, dependable; concrete nouns (lanes, pallets, cut-offs) over adjectives; short sentences; no hype. Numbers appear only when measured. The tone should read like a competent dispatcher, not an advertising agency.

## Evidence on Hand

None. No real on-time percentages, fleet counts, customer names or logos, testimonials, certifications, licence numbers, insurance figures, photographs, or coverage data exist in this template, and none may be fabricated. The owner must supply: service definitions, coverage regions and transit times, depot addresses and hours, licence and insurance details, certification badges, fleet photography, measured performance figures, and any customer quotes with consent.

## Product Principles

1. **The urgent path is one tap.** Phone number, tracking box, and quote button are visible in the first viewport on every device.
2. **Operational facts over marketing claims.** Cut-off times, coverage, and service definitions are the content; adjectives are not.
3. **Numbers are exact or absent.** No rounded-up stats, no "99%" without a source.
4. **Trust is documented.** Licensing, insurance, and certifications are shown with their real identifiers or shown as placeholders — never implied.
5. **Works on a bad connection.** Pages are light, forms are short, and tracking degrades gracefully.

## Accessibility & Inclusion

- Target WCAG 2.2 AA. Orange primary buttons carry dark slate labels to hold 4.5:1; body text is deep slate on white.
- Tracking numbers and codes in a monospace face with distinguishable zeros and O's; inputs accept pasted values with spaces.
- Large tap targets (44–48px) for quote, track, and call — users are often wearing gloves or walking.
- Tables and timetables must be real HTML tables with headers, scrollable on mobile with a sticky first column.
- Forms with clear labels, inline errors, and no time-outs; CV upload accepts common formats.
- Multilingual readiness for driver recruitment and shipper regions (undecided which languages); addresses and phone numbers formatted for the operating country.
- Keyboard-operable nav and accordion; visible focus on both white and slate surfaces.
