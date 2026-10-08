// Logistics homepage content in the composition of the Logico Rounded **home-3** reference (see the DESIGN.md
// revision): the dark utility bar, the hero carousel with its overlapping track and watch cards, the client
// logo strip, three service cards, the counting marquee, the "who we are" band over a dotted ground, the
// tracking band, the counting stats card, the tabbed service panel, the steps carousel, the gallery carousel,
// the crew row and the quote band. [Square brackets] are placeholders. No operational number is a claim.
import type { Img, LinkItem } from "@/lib/content";
import heroShip from "../../../templates/logistics/assets/hero-ship.jpg";
import heroBridge from "../../../templates/logistics/assets/hero-bridge.jpg";
import heroDock from "../../../templates/logistics/assets/hero.jpg";
import plane from "../../../templates/logistics/assets/plane.jpg";
import ocean from "../../../templates/logistics/assets/ocean.jpg";
import yard from "../../../templates/logistics/assets/yard.jpg";
import road from "../../../templates/logistics/assets/mode-road.jpg";
import sea from "../../../templates/logistics/assets/mode-sea.jpg";
import rail from "../../../templates/logistics/assets/mode-rail.jpg";
import team1 from "../../../templates/logistics/assets/team-1.jpg";
import team2 from "../../../templates/logistics/assets/team-2.jpg";
import team3 from "../../../templates/logistics/assets/team-3.jpg";

export type ModeIcon = "truck" | "ship" | "train" | "plane" | "warehouse" | "van";

export type LogisticsContent = {
  brand: string;
  utility: { location: string; phoneLabel: string; phone: string; emailLabel: string; email: string; socials: LinkItem[] };
  nav: { links: LinkItem[]; cta: LinkItem };
  hero: {
    slides: { titleLines: string[]; lead: string; cta: LinkItem; image: Img }[];
    track: { title: string; label: string; placeholder: string; submit: string; help: string; statuses: { code: string; label: string; stage: string }[] };
    video: { label: string; dialogTitle: string; dialogText: string };
  };
  logos: { title: string; items: string[] };
  services: { eyebrow: string; title: string; cta: LinkItem; items: { icon: ModeIcon; title: string; text: string; image: Img; tone: "light" | "dark" | "brand" }[] };
  marquee: { lead: string; figure: string; unit: string };
  about: { eyebrow: string; title: string; leadBold: string; paras: string[]; cta: LinkItem };
  tonnage: { eyebrow: string; value: number; label: string; note: string };
  track: { titleLines: string[]; lead: string; cta: LinkItem; image: Img; video: { label: string; dialogTitle: string; dialogText: string } };
  stats: { items: { value: number; decimals?: number; suffix?: string; label: string }[] };
  tabs: { items: { id: string; tab: string; title: string; leadBold: string; text: string; cta: LinkItem; image: Img }[] };
  steps: { eyebrow: string; title: string; items: { n: string; title: string; text: string }[] };
  gallery: { items: { caption: string; image: Img }[] };
  crew: { eyebrow: string; title: string; items: { name: string; role: string; image: Img }[] };
  quote: {
    eyebrow: string; title: string; text: string; background: Img;
    form: { heading: string; from: string; to: string; mode: string; incoterm: string; weight: string; volume: string; options: string; submit: string; confirm: string; modes: string[]; incoterms: string[]; toggles: string[] };
    call: { title: string; label: string; phone: string };
    disclaimer: string;
  };
  footer: { blurb: string; phone: string; email: string; address: string[]; columns: { title: string; links: LinkItem[] }[]; certifications: { title: string; note: string; items: string[] }; socials: LinkItem[]; legal: LinkItem[]; copyrightName: string; copyrightYear: number };
};

export const content: LogisticsContent = {
  brand: "[Company]",

  utility: {
    location: "Location: [Unit 4, Dock Road, City]",
    phoneLabel: "Call us:", phone: "[+1 800 529 10 37]",
    emailLabel: "Email:", email: "[ops@company.example]",
    socials: [{ href: "https://www.linkedin.com/", label: "LinkedIn" }, { href: "https://x.com/", label: "X" }, { href: "https://www.facebook.com/", label: "Facebook" }],
  },

  nav: {
    links: [
      { href: "#top", label: "Home" },
      { href: "#services", label: "Services" },
      { href: "#about", label: "About" },
      { href: "#steps", label: "How we work" },
      { href: "#crew", label: "Crew" },
      { href: "#quote", label: "Contacts" },
    ],
    cta: { href: "#quote", label: "Get a quote" },
  },

  hero: {
    slides: [
      {
        titleLines: ["Cargo services", "in our country"],
        lead: "Road, sea, rail and air across [the region] and beyond. Live tracking on every consignment and one named coordinator who answers the phone.",
        cta: { href: "#services", label: "Discover" },
        image: { src: heroShip, alt: "A bulk carrier under way on open sea, seen from high above" },
      },
      {
        titleLines: ["Freight that", "arrives on time"],
        lead: "A price before you book, a scan at every handover, and a call from us before a delivery window closes rather than after.",
        cta: { href: "#quote", label: "Get a quote" },
        image: { src: heroBridge, alt: "A container ship passing beneath a long cable-stayed road bridge, seen from above" },
      },
      {
        titleLines: ["Depots, bonded", "and ready"],
        lead: "Our own warehousing where the volume justifies it, vetted partners everywhere else, and customs entries filed in house.",
        cta: { href: "#about", label: "About us" },
        image: { src: heroDock, alt: "An articulated lorry reversed into a loading bay beside shipping containers" },
      },
    ],
    track: {
      title: "Track your order",
      label: "Consignment or booking reference",
      placeholder: "Enter your tracking number",
      submit: "Track",
      help: "Twelve characters, as printed on your booking confirmation. Try AB-123456-01.",
      statuses: [
        { code: "AB-123456-01", label: "In transit", stage: "Left [hub] 04:12 · due [tomorrow] 14:00" },
        { code: "AB-123456-02", label: "At customs", stage: "Entry lodged 09:30 · awaiting release" },
      ],
    },
    video: { label: "Play the film about the depot", dialogTitle: "A film about the depot", dialogText: "Drop your own film in here. Nothing autoplays on this page: the card is a poster, and the player only loads once a visitor asks for it." },
  },

  logos: {
    title: "Companies that move with us",
    items: ["[Client one]", "[Client two]", "[Client three]", "[Client four]", "[Client five]", "[Client six]"],
  },

  services: {
    eyebrow: "services",
    title: "Logistic services which we provide to our customers",
    cta: { href: "#quote", label: "All services" },
    items: [
      { icon: "truck", title: "Truck freight", text: "Full and part loads across [the region], with tail-lift and two-person delivery where the drop needs it.", image: { src: road, alt: "An empty motorway at dawn with lane markings receding to the horizon" }, tone: "light" },
      { icon: "ship", title: "Ship freight", text: "FCL and LCL through [the port], with customs entry handled in house and a cut-off you can plan around.", image: { src: sea, alt: "The bow of a container ship moored at a quayside" }, tone: "dark" },
      { icon: "train", title: "Train freight", text: "Intermodal containers on the [corridor] route, for loads where the lead time is less tight than the budget.", image: { src: rail, alt: "A freight train of flat wagons carrying shipping containers" }, tone: "brand" },
    ],
  },

  marquee: { lead: "Delivered", figure: "[345 679 345]", unit: "tons" },

  about: {
    eyebrow: "who we are",
    title: "Special things which we do for our clients",
    leadBold: "Anyone can move a pallet that behaves. We built the business around the ones that do not: the late booking, the missed slot, the pallet that has to be replaced before Friday.",
    paras: [
      "Every account has a named coordinator who knows your sites and picks up the direct line. The tracking shows the actual scan at each handover rather than an estimate, and the quote you are given is the invoice you receive.",
    ],
    cta: { href: "#about", label: "Explore more" },
  },

  tonnage: {
    eyebrow: "since [2000]",
    value: 223158482,
    label: "Delivered tonnes of products",
    note: "Counted across every mode since the first vehicle went out. Replace this figure with one you can evidence from your own system before launch.",
  },

  track: {
    titleLines: ["Provide quick", "tracking your cargo"],
    lead: "Every vehicle on the fleet reports its position and every handover is scanned, so the status you see is the status we see.",
    cta: { href: "#quote", label: "Explore more" },
    image: { src: heroBridge, alt: "A container ship passing beneath a long cable-stayed road bridge, seen from above" },
    video: { label: "Play the film about the fleet", dialogTitle: "A film about the fleet", dialogText: "Drop your own film in here. Nothing autoplays on this page: the card is a poster, and the player only loads once a visitor asks for it." },
  },

  stats: {
    items: [
      { value: 7472, label: "Consignments delivered" },
      { value: 2.5, decimals: 1, suffix: " bil", label: "Tonnes of goods" },
      { value: 94, suffix: "+", label: "Countries covered" },
      { value: 525, suffix: "+", label: "Warehouse bays" },
    ],
  },

  tabs: {
    items: [
      { id: "air", tab: "Air freight", title: "Air freight features on this service", leadBold: "Consolidated and express air for the consignments that genuinely cannot wait, priced before you commit.", text: "Same day within [the region] and [72] hours to most of our network. Dangerous goods by arrangement, with the paperwork filed by our own team rather than handed to a broker.", cta: { href: "#quote", label: "Explore more" }, image: { src: plane, alt: "An aircraft wing over a turquoise sea dotted with anchored cargo ships" } },
      { id: "rail", tab: "Rail freight", title: "Rail freight features on this service", leadBold: "Intermodal containers on the [corridor] route, for loads where the lead time is less tight than the budget.", text: "Three departures a week, with road collection and delivery at both ends so the container only stops where it has to.", cta: { href: "#quote", label: "Explore more" }, image: { src: rail, alt: "A freight train of flat wagons carrying shipping containers" } },
      { id: "sea", tab: "Ship freight", title: "Ship freight features on this service", leadBold: "FCL and LCL through [the port], with customs entry handled in house and a cut-off you can plan around.", text: "Weekly sailings, bonded storage at the quay, and a single reference that follows the box from the gate to the door.", cta: { href: "#quote", label: "Explore more" }, image: { src: sea, alt: "The bow of a container ship moored at a quayside" } },
      { id: "road", tab: "Road freight", title: "Road freight features on this service", leadBold: "Full and part loads across [the region], with tail-lift and two-person delivery where the drop needs it.", text: "Next day to [48] hours, on owned vehicles with telematics, maintained on a fixed schedule rather than on failure.", cta: { href: "#quote", label: "Explore more" }, image: { src: road, alt: "An empty motorway at dawn with lane markings receding to the horizon" } },
      { id: "warehousing", tab: "Warehousing", title: "Warehousing features on this service", leadBold: "Bonded and general storage at [6] depots, with stock visible on the same system as your consignments.", text: "Pick and pack, returns handling and cross-docking, charged by the pallet week rather than by a minimum you will not use.", cta: { href: "#quote", label: "Explore more" }, image: { src: yard, alt: "A container yard with stacked shipping containers beside a warehouse" } },
      { id: "customs", tab: "Customs", title: "Customs features on this service", leadBold: "Entries filed in house, with the paperwork kept somewhere you can find it afterwards.", text: "Import and export declarations, duty deferment against our account where it helps your cash flow, and a full audit trail on every job.", cta: { href: "#quote", label: "Explore more" }, image: { src: ocean, alt: "A bulk carrier sailing across deep blue ocean at golden hour" } },
    ],
  },

  steps: {
    eyebrow: "how we work",
    title: "Special steps which we provide for our clients",
    items: [
      { n: "01", title: "Project estimation", text: "You send the shape of the load. We come back with an itemised price and the realistic transit, not the best case." },
      { n: "02", title: "Prepare documentation", text: "We file the entries and the carriage paperwork, and tell you what we still need from you in one message rather than six." },
      { n: "03", title: "Collection booked", text: "A slot is agreed with your site and the driver's name and vehicle are confirmed the day before." },
      { n: "04", title: "In transit", text: "Every handover is scanned. If a leg slips, you hear it from your coordinator before the delivery window closes." },
      { n: "05", title: "Receiving cargo", text: "Proof of delivery is signed and on the system within the hour, with photographs where the consignment warrants it." },
      { n: "06", title: "Warranty period", text: "Claims are opened by us, not by you. We chase the carrier and keep you posted until it settles." },
    ],
  },

  gallery: {
    items: [
      { caption: "Ship freight in the [Pacific]", image: { src: ocean, alt: "A bulk carrier sailing across deep blue ocean at golden hour" } },
      { caption: "Road freight across [the region]", image: { src: road, alt: "An empty motorway at dawn with lane markings receding to the horizon" } },
      { caption: "Rail freight on the [corridor] route", image: { src: rail, alt: "A freight train of flat wagons carrying shipping containers" } },
      { caption: "Air freight out of [the hub]", image: { src: plane, alt: "An aircraft wing over a turquoise sea dotted with anchored cargo ships" } },
    ],
  },

  crew: {
    eyebrow: "team",
    title: "Meet our the best crew",
    items: [
      { name: "[Name]", role: "Operations manager", image: { src: team1, alt: "Monochrome portrait of an operations manager in front of warehouse racking" } },
      { name: "[Name]", role: "Warehouse supervisor", image: { src: team2, alt: "Monochrome portrait of a warehouse supervisor in a high-visibility vest" } },
      { name: "[Name]", role: "Fleet coordinator", image: { src: team3, alt: "Monochrome portrait of a fleet coordinator in front of parked lorries" } },
    ],
  },

  quote: {
    eyebrow: "quote",
    title: "Have any questions?",
    text: "Tell us what is moving, where from and where to. If it is urgent, call the operations desk instead; the number is at the top of this page and in the footer.",
    background: { src: yard, alt: "A container yard with stacked shipping containers beside a warehouse" },
    form: {
      heading: "Request a quote",
      from: "Collection city", to: "Delivery city", mode: "Freight type", incoterm: "Incoterm",
      weight: "Weight (kg)", volume: "Volume (m³)", options: "Options",
      submit: "Request a quote",
      confirm: "Thank you. A coordinator will send a written quote within one working day.",
      modes: ["Road freight", "Sea freight", "Rail freight", "Air freight"],
      incoterms: ["EXW", "FCA", "CPT", "CIP", "DAP", "DPU", "DDP"],
      toggles: ["Fragile", "Express", "Insurance", "Packaging"],
    },
    call: { title: "Do you have any questions?", label: "Call us today", phone: "[+1 800 529 10 37]" },
    disclaimer: "A quote request is not a booking and does not reserve capacity. Prices are confirmed in writing once we have the dimensions and the collection window.",
  },

  footer: {
    blurb: "Road, sea, rail and air freight with live tracking, itemised pricing and a named coordinator on every account.",
    phone: "[+1 800 529 10 37]",
    email: "[ops@company.example]",
    address: ["[Unit 4, Dock Road]", "[Industrial Estate, City]", "[AB1 2CD]"],
    columns: [
      { title: "Services", links: [{ href: "#services", label: "Road freight" }, { href: "#services", label: "Sea freight" }, { href: "#services", label: "Rail freight" }, { href: "#services", label: "Air freight" }, { href: "#services", label: "Warehousing" }, { href: "#services", label: "Customs" }] },
      { title: "Company", links: [{ href: "#about", label: "About us" }, { href: "#steps", label: "How we work" }, { href: "#crew", label: "Crew" }, { href: "#quote", label: "Request a quote" }, { href: "#quote", label: "Contacts" }] },
    ],
    certifications: {
      title: "Accreditations",
      note: "Placeholders. Replace each with an accreditation the company actually holds, and link to the register entry.",
      items: ["[Operator licence no.]", "[Quality standard]", "[Customs authorisation]", "[Trade association]"],
    },
    socials: [{ href: "https://www.linkedin.com/", label: "LinkedIn" }, { href: "https://x.com/", label: "X" }],
    legal: [{ href: "/privacy", label: "Privacy" }, { href: "/terms", label: "Terms and conditions of carriage" }, { href: "/accessibility", label: "Accessibility" }],
    copyrightName: "[Company] Ltd",
    copyrightYear: 2026,
  },
};
