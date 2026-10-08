// Construction homepage content and its own content type. The builder's page is not the architect's:
// its sections come from templates/construction/DESIGN.md (quote card in the hero, trust row, bordered
// service grid, filterable gallery, before/after, timeline, packages, reviews, graphite quote band).
// Square brackets are placeholders the company supplies; nothing here is a real project, figure or licence.
import type { ReactNode } from "react";
import { HouseIcon, HammerIcon, RulerIcon, ClipboardTextIcon, ShovelIcon, ShieldCheckIcon, SealCheckIcon, HardHatIcon, FileTextIcon } from "@phosphor-icons/react/dist/ssr";
import type { Img, LinkItem } from "@/lib/content";
import heroSite from "../../../templates/construction/assets/hero-site.jpg";
import fitoutOffice from "../../../templates/construction/assets/fitout-office.jpg";
import extensionRoof from "../../../templates/construction/assets/extension-roof.jpg";
import crewSite from "../../../templates/construction/assets/crew-site.jpg";
import groundworks from "../../../templates/construction/assets/groundworks.jpg";
import beforeKitchen from "../../../templates/construction/assets/before-kitchen.jpg";
import afterKitchen from "../../../templates/construction/assets/after-kitchen.jpg";

export type ConstructionContent = {
  brand: string;
  utility: { hours: string; open: string };
  nav: { links: LinkItem[]; phone: string; cta: LinkItem; call: string };
  hero: {
    image: Img;
    lines: ReactNode[];
    lead: string;
    primary: LinkItem;
    secondary: LinkItem;
  };
  trust: { icon: ReactNode; label: string; value: string }[];
  services: { id: string; title: ReactNode; lead: string; all: LinkItem; items: { icon: ReactNode; title: string; text: string; href: string }[]; other: { title: string; text: string; href: string } };
  gallery: { id: string; title: ReactNode; lead: string; types: string[]; projects: { title: string; type: string; place: string; image: Img; href: string }[]; all: LinkItem };
  beforeAfter: { title: ReactNode; lead: string; before: Img; after: Img; caption: string };
  timeline: { id: string; title: ReactNode; lead: string; steps: { n: string; title: string; duration: string; text: string }[] };
  packages: { id: string; title: ReactNode; lead: string; items: { name: string; scope: string[]; price: string; note: string; cta: LinkItem; featured?: boolean }[] };
  reviews: { id: string; title: ReactNode; lead: string; items: { initials: string; name: string; project: string; text: string }[] };
  quoteBand: { title: ReactNode; text: string; phone: string; stats: { big: string; label: string }[]; form: { title: string; note: string; types: string[]; submit: string; reply: string } };
  footer: { blurb: string; columns: { label: string; items: LinkItem[] }[]; contact: { address: string; phone: string; email: string; hours: string }; area: string; registration: string; legal: string; links: LinkItem[] };
};

const icon = (I: typeof HouseIcon, size = 32) => <I size={size} weight="light" aria-hidden="true" />;
const Amber = ({ children }: { children: ReactNode }) => <span className="text-accent">{children}</span>;

export const content: ConstructionContent = {
  brand: "[Company name]",
  utility: { hours: "Mon to Fri, [07:00] to [17:00]", open: "Open now" },
  nav: {
    links: [
      { href: "#services", label: "Services" }, { href: "#projects", label: "Projects" }, { href: "#process", label: "Process" }, { href: "#packages", label: "Packages" }, { href: "#contact", label: "Contact" },
    ],
    phone: "[+00 000 000 000]",
    call: "Call",
    cta: { href: "#quote", label: "Request a quote" },
  },
  hero: {
    image: { src: heroSite, alt: "A three-storey steel frame on a concrete slab at golden hour, a tower crane behind it and two crew members reading drawings in the foreground", position: "50% 55%" },
    lines: ["Built to spec.", <Amber key="l2">On time.</Amber>],
    lead: "Residential builds, commercial fit-outs and renovations across [service area], delivered by one crew from quote to keys.",
    primary: { href: "#quote", label: "Request a quote" },
    secondary: { href: "#projects", label: "View projects" },
  },
  trust: [
    { icon: icon(ShieldCheckIcon, 24), label: "Licensed contractor", value: "Lic. no. [000000]" },
    { icon: icon(SealCheckIcon, 24), label: "Public liability insured", value: "To [amount]" },
    { icon: icon(HardHatIcon, 24), label: "Health and safety accredited", value: "[Accrediting body]" },
    { icon: icon(FileTextIcon, 24), label: "Company registered", value: "No. [00000000]" },
  ],
  services: {
    id: "services",
    title: <>From <Amber>groundworks</Amber> to the final coat</>,
    lead: "Groundworks, structure and finishes are all our own crews, so there is one programme and one person answerable for it.",
    all: { href: "services/", label: "See all services" },
    items: [
      { icon: icon(RulerIcon), title: "Design and build", text: "One contract from first sketch to keys. We bring the architect, the engineer and the crew.", href: "services/design-and-build/" },
      { icon: icon(HardHatIcon), title: "General contracting", text: "Your drawings, our site. Fixed price, one site manager, weekly progress notes.", href: "services/general-contracting/" },
      { icon: icon(ClipboardTextIcon), title: "Project management", text: "We run the programme, the trades and the inspections so you only make the decisions.", href: "services/project-management/" },
      { icon: icon(HammerIcon), title: "Renovation and extension", text: "Extensions, loft conversions and full refurbishments of houses that deserve another fifty years.", href: "services/renovation/" },
      { icon: icon(ShovelIcon), title: "Groundworks", text: "Excavation, foundations, drainage and slabs, with our own plant and operators.", href: "services/groundworks/" },
    ],
    other: { title: "Something else?", text: "Roofing, structural repairs, commercial maintenance contracts. Tell us the job and we will say honestly whether it is ours.", href: "#quote" },
  },
  gallery: {
    id: "projects",
    title: <>Recent <Amber>projects</Amber></>,
    lead: "Our own sites, photographed by us. Each tile says what was built, where and when.",
    types: ["Residential", "Commercial", "Renovation"],
    projects: [
      { title: "[Project name]", type: "Commercial", place: "[Town], [Year]", image: { src: heroSite, alt: "[Project name]: three-storey steel frame on a concrete slab with a tower crane" }, href: "projects/project-1/" },
      { title: "[Project name]", type: "Residential", place: "[Town], [Year]", image: { src: extensionRoof, alt: "[Project name]: timber roof trusses on a new blockwork extension to a brick house" }, href: "projects/project-2/" },
      { title: "[Project name]", type: "Renovation", place: "[Town], [Year]", image: { src: fitoutOffice, alt: "[Project name]: open-plan office fit-out with glass partitions and timber flooring" }, href: "projects/project-3/" },
      { title: "[Project name]", type: "Residential", place: "[Town], [Year]", image: { src: groundworks, alt: "[Project name]: excavator digging foundation trenches beside reinforcement cages" }, href: "projects/project-4/" },
      { title: "[Project name]", type: "Commercial", place: "[Town], [Year]", image: { src: crewSite, alt: "[Project name]: the crew in front of a concrete-frame building under construction" }, href: "projects/project-5/" },
    ],
    all: { href: "projects/", label: "All projects" },
  },
  beforeAfter: {
    title: <>Before and <Amber>after</Amber></>,
    lead: "Drag the handle. Renovations are judged on the finish, so we show the start too.",
    before: { src: beforeKitchen, alt: "The kitchen before: dark oak cabinets, laminate worktop and a small window" },
    after: { src: afterKitchen, alt: "The kitchen after: wide black-framed window, pale oak and white cabinets, oak floor" },
    caption: "[Project name], [Town]. Kitchen and rear wall, [0] weeks on site.",
  },
  timeline: {
    id: "process",
    title: <>Four steps, <Amber>no surprises</Amber></>,
    lead: "A clear programme is the difference between a build you enjoy and one you endure.",
    steps: [
      { n: "01", title: "Quote", duration: "Typically [0 to 0] days", text: "We visit the site, measure and ask the awkward questions. You receive a written quote with line items and a start date we can hold." },
      { n: "02", title: "Plan", duration: "Typically [0 to 0] weeks", text: "Drawings, permits and a programme you can hold us to. You receive the schedule, the permit decisions and one site manager's number." },
      { n: "03", title: "Build", duration: "Per the programme", text: "Weekly updates with photographs, one point of contact and a clean site at the end of every day. You receive a progress note every Friday." },
      { n: "04", title: "Handover", duration: "Typically [0] days", text: "Snag list cleared, warranties and certificates handed over, keys in your hand. You receive the full file for the building." },
    ],
  },
  packages: {
    id: "packages",
    title: <>Three ways to <Amber>work with us</Amber></>,
    lead: "Typical scopes. Every job is priced from a site visit; the figures here stay as placeholders until the company supplies them.",
    items: [
      { name: "Design and build", featured: true, scope: ["Architect and engineer included", "Planning and building permits", "Fixed price before we start", "One site manager, start to finish"], price: "Price on request", note: "From [amount] per m², supplied by the company", cta: { href: "#quote", label: "Request a quote" } },
      { name: "Renovation", scope: ["Survey and written scope", "Structural work and finishes", "Before and after record", "Snag list cleared before handover"], price: "Price on request", note: "Most jobs quoted within [0] days of the visit", cta: { href: "#quote", label: "Ask about renovation" } },
      { name: "Maintenance contract", scope: ["Scheduled inspections", "Reactive repairs within [0] hours", "One number for the whole estate", "Quarterly condition report"], price: "Price on request", note: "For landlords and facility managers", cta: { href: "#quote", label: "Ask about contracts" } },
    ],
  },
  reviews: {
    id: "reviews",
    title: <>What clients <Amber>say</Amber></>,
    lead: "Reviews appear here once the company supplies verified ones. These cards are placeholders.",
    items: [
      { initials: "[AB]", name: "[Client name]", project: "Extension, [Town]", text: "[Review placeholder. Replace with a verified review and the client's permission.]" },
      { initials: "[CD]", name: "[Client name]", project: "Office fit-out, [Town]", text: "[Review placeholder. Replace with a verified review and the client's permission.]" },
      { initials: "[EF]", name: "[Client name]", project: "New build, [Town]", text: "[Review placeholder. Replace with a verified review and the client's permission.]" },
      { initials: "[GH]", name: "[Client name]", project: "Loft conversion, [Town]", text: "[Review placeholder. Replace with a verified review and the client's permission.]" },
      { initials: "[IJ]", name: "[Client name]", project: "Maintenance contract, [Town]", text: "[Review placeholder. Replace with a verified review and the client's permission.]" },
    ],
  },
  quoteBand: {
    title: <>Ready to start? <Amber>Get your quote.</Amber></>,
    text: "Address, what you want done and a rough budget is enough. Or just call.",
    phone: "[+00 000 000 000]",
    stats: [{ big: "[00]+", label: "Projects completed" }, { big: "[00]", label: "Years trading" }, { big: "[0]", label: "Reportable incidents, [year]" }],
    form: {
      title: "Get a quote in [24] hours",
      note: "[Name] replies with a site-visit date. No obligation.",
      types: ["New build", "Extension or renovation", "Commercial fit-out", "Groundworks", "Repair or maintenance", "Not sure yet"],
      submit: "Request a quote",
      reply: "Thank you. [Name] will call within [24] hours to arrange a site visit. If it is urgent, call [+00 000 000 000].",
    },
  },
  footer: {
    blurb: "Residential builds, commercial fit-outs and renovations across [service area].",
    columns: [
      { label: "Services", items: [{ href: "services/design-and-build/", label: "Design and build" }, { href: "services/general-contracting/", label: "General contracting" }, { href: "services/project-management/", label: "Project management" }, { href: "services/renovation/", label: "Renovation and extension" }, { href: "services/groundworks/", label: "Groundworks" }] },
      { label: "Projects", items: [{ href: "projects/?type=Residential", label: "Residential" }, { href: "projects/?type=Commercial", label: "Commercial" }, { href: "projects/?type=Renovation", label: "Renovation" }, { href: "projects/", label: "All projects" }] },
      { label: "Company", items: [{ href: "about/", label: "About" }, { href: "safety/", label: "Safety" }, { href: "licence/", label: "Licence and insurance" }, { href: "careers/", label: "Careers" }] },
    ],
    contact: { address: "[Street address], [City, postcode]", phone: "[+00 000 000 000]", email: "[office@company.example]", hours: "Mon to Fri, [07:00] to [17:00]" },
    area: "Serving [region] and surrounding areas.",
    registration: "Licence [number] · Insured with [insurer], policy [number] · Company no. [number]",
    legal: "© [Year] [Company name].",
    links: [{ href: "privacy/", label: "Privacy" }, { href: "terms/", label: "Terms" }, { href: "accessibility/", label: "Accessibility" }],
  },
};
