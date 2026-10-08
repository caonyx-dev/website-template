// Architect homepage content. Approved copy from templates/architect/content/home.md,
// adapted to the reference-led layout. Square brackets are placeholders the studio supplies.
import { HouseIcon, BuildingsIcon, BankIcon } from "@phosphor-icons/react/dist/ssr";
import { Fragment } from "react";
import { Accent } from "@/components/ui";
import type { SiteContent } from "@/lib/content";
import heroHouse from "../../../templates/architect/assets/hero-house.jpg";
import featuredLiving from "../../../templates/architect/assets/featured-living.jpg";
import workplaceWarehouse from "../../../templates/architect/assets/workplace-warehouse.jpg";
import publicLibrary from "../../../templates/architect/assets/public-library.jpg";
import planningModel from "../../../templates/architect/assets/planning-model.jpg";
import drawingSection from "../../../templates/architect/assets/drawing-section.jpg";

const icon = (I: typeof HouseIcon) => <I size={28} weight="light" aria-hidden="true" />;

export const content: SiteContent = {
  brand: "[Studio name]",
  nav: {
    links: [
      { href: "#work", label: "Work" }, { href: "#studio", label: "Studio" }, { href: "#services", label: "Services" }, { href: "#process", label: "Process" }, { href: "#contact", label: "Contact" },
    ],
    phone: "[+00 000 000 000]",
    phoneLabel: "Call the studio",
    cta: { href: "#contact", label: "Start a project" },
    menuExtra: [{ href: "journal/", label: "Journal" }, { href: "careers/", label: "Careers" }],
  },
  hero: {
    image: { src: heroHouse, alt: "[Project name]: a single-storey rendered house with timber-framed openings, seen across a meadow in evening light", position: "62% 60%" },
    lines: ["Buildings that", <Fragment key="l2"><Accent>belong</Accent> to their place.</Fragment>],
    primary: { href: "#contact", label: "Start a project" },
    secondary: { href: "#work", label: "View work" },
    caption: "[Project name], [Town], [Year]. Photograph: [Photographer name]",
    scrollTo: "#studio",
  },
  intro: {
    id: "studio",
    title: <>A studio for buildings that <Accent>belong</Accent> to their place</>,
    cards: [
      { icon: icon(HouseIcon), title: "Residential", text: "New houses, extensions and renovations for people who intend to stay." },
      { icon: icon(BuildingsIcon), title: "Commercial and workplace", text: "Offices, studios and shops designed around how the business actually works." },
      { icon: icon(BankIcon), title: "Public and cultural", text: "Schools, libraries, community buildings and galleries, delivered with public clients." },
    ],
  },
  band: {
    title: <>We draw by hand <Accent>before</Accent> we model.</>,
    checks: ["A partner on every project", "Site visits in every season", "Options, not a single answer", "Every collaborator credited"],
    cta: { href: "studio/", label: "About the studio" },
    image: { src: workplaceWarehouse, alt: "The studio: a converted brick warehouse with arched windows, cast-iron columns and long oak drawing tables" },
    watermark: "[Studio]",
  },
  services: {
    id: "services",
    title: <>Everything a building needs, from <Accent>brief</Accent> to handover</>,
    image: { src: publicLibrary, alt: "A small brick library with a colonnade of slender concrete columns and a paved forecourt" },
    note: "Public buildings are delivered with public clients: procurement, consultation and sign-off handled with the authority.",
    rows: [
      { n: "01", title: "Feasibility and brief", href: "services/feasibility/" },
      { n: "02", title: "Concept and planning design", href: "services/concept/" },
      { n: "03", title: "Technical design and permission", href: "services/technical/" },
      { n: "04", title: "Construction and handover", href: "services/construction/" },
      { n: "05", title: "Interiors and furniture", href: "services/interiors/" },
    ],
    stats: [
      { big: "[Year]", title: "Founded" },
      { big: "[00]+", title: "Projects completed" },
      { big: "[00]", title: "People"},
    ],
  },
  model: {
    url: "/models/architect/building.glb",
    materials: "own",
    watermark: "[Studio]",
    label: "Rotating model of [Project name], a three-storey house with a cantilevered black volume",
    title: <>One building, <Accent>four</Accent> decisions</>,
    steps: [
      { label: "Site", title: "Start from the ground", facts: [{ k: "Site", v: "[000] m²" }, { k: "Orientation", v: "South-west" }] },
      { label: "Structure", title: "A frame you can read", facts: [{ k: "Structure", v: "In-situ concrete" }, { k: "Storeys", v: "3" }] },
      { label: "Envelope", title: "Honest materials", facts: [{ k: "Facade", v: "Concrete plates" }, { k: "Openings", v: "Anodised aluminium" }] },
      { label: "Rooms", title: "Light from two sides", facts: [{ k: "Floor area", v: "[000] m²" }, { k: "Completion", v: "[Year]" }] },
    ],
  },
  process: {
    id: "process",
    title: <>Four stages, <Accent>explained</Accent> plainly</>,
    blueprint: drawingSection,
    steps: [
      { n: "01", title: "Brief", text: "We listen, measure the site and agree what the building must do and roughly what it can cost. You receive a written brief and a fee proposal.", image: { src: planningModel, alt: "Basswood and card model of a courtyard house on a white table" } },
      { n: "02", title: "Design", text: "Sketches first, then drawings and a model. We present options and refine the one you choose. You receive plans, sections and a model.", image: { src: drawingSection, alt: "Cross-section drawing of a two-storey house in white lines on charcoal" } },
      { n: "03", title: "Permission", text: "We prepare and submit the planning and building applications and handle the questions that come back. You receive the decisions.", image: { src: publicLibrary, alt: "Brick colonnade of a small public library" } },
      { n: "04", title: "Construction", text: "We produce the drawings builders price from, help you choose a contractor and visit the site until the keys are handed over.", image: { src: featuredLiving, alt: "Double-height timber living room with a glazed wall onto a garden" } },
    ],
    footNote: "Not sure which stage you are at?",
    footCta: { href: "#contact", label: "Tell us about your site" },
  },
  work: {
    id: "work",
    title: <>Recent and <Accent>in progress</Accent></>,
    lead: "Each project states what was built, where and when. The photographs do the persuading.",
    projects: [
      { tag: "Residential", image: { src: featuredLiving, alt: "[Project name]: double-height living room with exposed timber frame and a glazed wall onto a garden" }, title: "[Project name]", place: "[Town], [Country]", year: "[Year]", href: "work/project-1/" },
      { tag: "Workplace", image: { src: workplaceWarehouse, alt: "[Project name]: converted brick warehouse studio with arched windows and long oak tables" }, title: "[Project name]", place: "[Town], [Country]", year: "[Year]", href: "work/project-2/" },
      { tag: "Public", image: { src: publicLibrary, alt: "[Project name]: small brick library with a colonnade and a paved forecourt" }, title: "[Project name]", place: "[Town], [Country]", year: "[Year]", href: "work/project-3/" },
    ],
    all: { href: "work/", label: "All projects" },
  },
  quote: {
    title: <>What our <Accent>clients</Accent> say</>,
    image: { src: heroHouse, alt: "Rendered house with timber openings in a meadow at evening" },
    text: "[Client quote, supplied by the studio with the client's permission. Two or three sentences at most.]",
    name: "[Client name]",
    role: "[Project name], [Town]",
  },
  contact: {
    id: "contact",
    title: <>Tell us about <Accent>your site</Accent>.</>,
    include: ["The site address, or the area you are looking in", "What you hope to build, in a sentence", "A budget band, even if it is a guess"],
    email: "hello@studio.example",
    phone: "+00 000 000 000",
    partner: "[Partner name]",
    days: "[number]",
  },
  footer: {
    blurb: "Houses, workplaces and public buildings in [region], designed from the site outward.",
    address: "[Street address], [City, postcode], [Country]",
    columns: [
      { label: "Studio", items: [{ href: "#work", label: "Work" }, { href: "studio/", label: "About" }, { href: "#process", label: "Process" }, { href: "journal/", label: "Journal" }, { href: "careers/", label: "Careers" }] },
      { label: "Contact", items: [{ href: "mailto:hello@studio.example", label: "[hello@studio.example]" }, { href: "tel:+00000000000", label: "[+00 000 000 000]" }, { href: "mailto:press@studio.example", label: "Press: [press@studio.example]" }, { href: "https://instagram.com/", label: "[Instagram]" }, { href: "https://linkedin.com/", label: "[LinkedIn]" }] },
      { label: "Legal", items: [{ href: "privacy/", label: "Privacy" }, { href: "accessibility/", label: "Accessibility statement" }, { href: "credits/", label: "Image credits" }], extra: "[Registration body and number]" },
    ],
    legal: "© [Year] [Studio name]. Registered architects, [jurisdiction].",
    credits: "Photographs: [Photographer name]. Drawings: [Studio name].",
  },
};
