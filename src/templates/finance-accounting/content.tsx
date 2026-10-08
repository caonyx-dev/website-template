// Finance and accounting homepage content, in the language of the Consultor "Financial Advisor" reference
// (consultor.ancorathemes.com/financial-advisor): dark top bar and menu bar, full-bleed photographic hero,
// "the practice" split with overlapping photographs, icon service cards, photo tiles, process split, ghost
// statistics, dark testimonial band, badge strip, pricing, filing dates, article cards, contact block, social
// strip and a dark footer. [Square brackets] are placeholders; every figure is illustrative and labelled so.
import type { Img, LinkItem } from "@/lib/content";
import hero from "../../../templates/finance-accounting/assets/hero.jpg";
import desk from "../../../templates/finance-accounting/assets/desk.jpg";
import aboutTeam from "../../../templates/finance-accounting/assets/about-team.jpg";
import aboutPhone from "../../../templates/finance-accounting/assets/about-phone.jpg";
import tile1 from "../../../templates/finance-accounting/assets/tile-1.jpg";
import tile2 from "../../../templates/finance-accounting/assets/tile-2.jpg";
import tile3 from "../../../templates/finance-accounting/assets/tile-3.jpg";
import tile4 from "../../../templates/finance-accounting/assets/tile-4.jpg";
import quoteSide from "../../../templates/finance-accounting/assets/quote-side.jpg";
import team1 from "../../../templates/finance-accounting/assets/team-1.jpg";
import team2 from "../../../templates/finance-accounting/assets/team-2.jpg";
import team3 from "../../../templates/finance-accounting/assets/team-3.jpg";

export type Status = "positive" | "warning" | "error";
export type ServiceIcon = "tax" | "books" | "payroll" | "advisory";
export type FinanceContent = {
  brand: string;
  topbar: { hours: string; phone: string; address: string; socials: LinkItem[] };
  nav: { links: LinkItem[]; portal: LinkItem; cta: LinkItem; phone: string };
  hero: { image: Img; eyebrow: string; title: [string, string]; cta: LinkItem; alt: { text: string; link: LinkItem } };
  about: { eyebrow: string; title: string; text: string; cta: LinkItem; phone: string; large: Img; small: Img };
  services: { eyebrow: string; title: string; items: { icon: ServiceIcon; title: string; text: string; href: string }[]; more: string; cta: LinkItem };
  tiles: { title: string; text: string; image: Img; href: string }[];
  process: { image: Img; caption: string; eyebrow: string; title: string; text: string; steps: { title: string; when: string; href: string }[]; cta: LinkItem };
  stats: { note: string; items: { value: number; label: string }[] };
  testimonials: { image: Img; items: { text: string; name: string; role: string; avatar: Img }[] };
  badges: { label: string; items: string[] };
  pricing: { eyebrow: string; title: string; periods: [string, string]; tiers: { name: string; featured?: boolean; chip?: string; from: string; prices: [string, string]; per: [string, string]; text: string; includes: string[]; cta: LinkItem }[]; note: string };
  deadlines: { eyebrow: string; title: string; lead: string; columns: [string, string, string, string]; rows: { date: string; obligation: string; applies: string; status: Status; statusLabel: string }[]; note: string; next: { title: string; items: { date: string; label: string }[]; link: LinkItem } };
  guides: { eyebrow: string; title: string; items: { category: string; date: string; title: string; text: string; href: string }[]; cta: LinkItem };
  contact: { eyebrow: string; title: string; text: string; address: string; phone: string; email: string; portal: { text: string; link: LinkItem }; businessTypes: string[]; turnoverBands: string[]; submit: string; consent: string; note: string };
  socials: LinkItem[];
  footer: { office: { title: string; lines: string[]; email: string; phone: string }; links: { title: string; items: LinkItem[] }; newsletter: { title: string; placeholder: string; consent: string; privacy: LinkItem }; registration: string; disclaimer: string; copyright: string };
};

const PHONE = "[+00 000 000 000]";
const SOCIALS: LinkItem[] = [{ href: "https://facebook.com/", label: "Facebook" }, { href: "https://x.com/", label: "X" }, { href: "https://linkedin.com/", label: "LinkedIn" }, { href: "https://instagram.com/", label: "Instagram" }];

export const content: FinanceContent = {
  brand: "[Practice]",
  topbar: { hours: "Mon – Fri 09:00 – 17:30", phone: PHONE, address: "[Street address], [Town]", socials: SOCIALS },
  nav: {
    links: [{ href: "#top", label: "Home" }, { href: "#services", label: "Services" }, { href: "#process", label: "Process" }, { href: "#pricing", label: "Pricing" }, { href: "#resources", label: "Resources" }, { href: "#contact", label: "Contact" }],
    portal: { href: "https://portal.example/", label: "Client portal" },
    cta: { href: "#contact", label: "Request a quote" },
    phone: PHONE,
  },
  hero: {
    image: { src: hero, alt: "Two accountants standing with their arms crossed in front of a teal wall" },
    eyebrow: "Accounting, tax and advisory for small businesses",
    title: ["Professional accountants", "for your business"],
    cta: { href: "#contact", label: "Request a quote" },
    alt: { text: "or", link: { href: "#contact", label: "book a discovery call" } },
  },
  about: {
    eyebrow: "The practice",
    title: "Organised, qualified and reachable",
    text: "[Practice] is a [region] firm of [N] qualified accountants and advisers. Every client has a named accountant, a fixed fee agreed in writing before work starts, and a filing calendar we track on your behalf.",
    cta: { href: "team/", label: "Who we are" },
    phone: PHONE,
    large: { src: aboutPhone, alt: "A businessman in a camel coat on the phone outside an office" },
    small: { src: aboutTeam, alt: "Three colleagues reviewing printed financial documents at a desk" },
  },
  services: {
    eyebrow: "What we offer",
    title: "Accounting services",
    items: [
      { icon: "tax", title: "Tax", text: "Returns, planning and representation", href: "services/tax/" },
      { icon: "books", title: "Bookkeeping", text: "Monthly books and VAT returns", href: "services/bookkeeping/" },
      { icon: "payroll", title: "Payroll", text: "Payslips, submissions and pensions", href: "services/payroll/" },
      { icon: "advisory", title: "Advisory", text: "Forecasts, structure and growth", href: "services/advisory/" },
    ],
    more: "Read more",
    cta: { href: "services/", label: "More information" },
  },
  tiles: [
    { title: "Company formation", text: "Set up, registered and ready to trade", image: { src: tile1, alt: "" }, href: "services/formation/" },
    { title: "VAT returns", text: "Registered, filed and reconciled quarterly", image: { src: tile2, alt: "" }, href: "services/vat/" },
    { title: "Self-assessment", text: "Personal returns for complicated income", image: { src: tile3, alt: "" }, href: "services/self-assessment/" },
    { title: "Management accounts", text: "Figures you can read, every quarter", image: { src: tile4, alt: "" }, href: "services/management-accounts/" },
  ],
  process: {
    image: { src: desk, alt: "A tidy desk with a laptop showing a spreadsheet and a stack of documents" },
    caption: "Fixed fees, agreed before any work starts",
    eyebrow: "How we work",
    title: "What happens, and when",
    text: "Four steps from first call to ongoing work. You always know which one you are on, and nothing is billed that was not agreed in writing.",
    steps: [
      { title: "Discovery call", when: "Day 1", href: "process/#discovery" },
      { title: "Proposal and onboarding", when: "Week 1 – 2", href: "process/#onboarding" },
      { title: "Monthly or annual work", when: "Ongoing", href: "process/#work" },
      { title: "Review and planning", when: "Quarterly", href: "process/#review" },
    ],
    cta: { href: "#contact", label: "Request a quote" },
  },
  stats: {
    note: "Illustrative figures until the practice supplies its own.",
    items: [{ value: 250, label: "Clients" }, { value: 12, label: "People" }, { value: 15, label: "Years" }, { value: 2, label: "Offices" }],
  },
  testimonials: {
    image: { src: quoteSide, alt: "Two people reviewing handwritten notes and charts at a table" },
    items: [
      { text: "[Testimonial placeholder. Replace with a verified client quote, used with their permission and allowed by the professional body.]", name: "[Client name]", role: "Business owner", avatar: { src: team1, alt: "" } },
      { text: "[Testimonial placeholder. Replace with a verified client quote, used with their permission and allowed by the professional body.]", name: "[Client name]", role: "Business owner", avatar: { src: team2, alt: "" } },
      { text: "[Testimonial placeholder. Replace with a verified client quote, used with their permission and allowed by the professional body.]", name: "[Client name]", role: "Director", avatar: { src: team3, alt: "" } },
    ],
  },
  badges: { label: "Registered and recognised by", items: ["[Professional body]", "[Tax authority agent]", "[Software] partner", "[Software] certified", "[Chamber of commerce]", "[Industry award]"] },
  pricing: {
    eyebrow: "Pricing approach",
    title: "How our fees work",
    periods: ["Monthly", "Annual"],
    tiers: [
      { name: "Individuals", from: "from", prices: ["[00]", "[000]"], per: ["/month", "/year"], text: "A personal return with rental, investment or self-employed income.", includes: ["Annual tax return prepared and filed", "Deadline reminders", "One planning call before year end", "Portal access"], cta: { href: "#contact", label: "Request a quote" } },
      { name: "Small business", featured: true, chip: "Most chosen", from: "from", prices: ["[000]", "[0,000]"], per: ["/month", "/year"], text: "Bookkeeping, payroll and year-end accounts for a company or sole trader with up to [N] staff.", includes: ["Monthly bookkeeping and VAT returns", "Payroll for up to [N] employees", "Year-end accounts and corporate tax return", "Quarterly management accounts", "Named accountant"], cta: { href: "#contact", label: "Request a quote" } },
      { name: "Growing business", from: "from", prices: ["[000]", "[0,000]"], per: ["/month", "/year"], text: "Everything in Small business plus advisory for a team of [N]+ or more than one entity.", includes: ["Everything in Small business", "Cash-flow forecast, updated quarterly", "Quarterly advisory review", "Group or multi-entity accounts"], cta: { href: "#contact", label: "Request a quote" } },
    ],
    note: "All fees are placeholders until the practice supplies them. Final fees depend on volume, software and complexity, and are confirmed in writing before any work starts.",
  },
  deadlines: {
    eyebrow: "Resources",
    title: "Upcoming filing dates",
    lead: "The calendar we track for clients. Dates below are placeholders; your jurisdiction and entity type decide the real ones.",
    columns: ["Date", "Obligation", "Applies to", "Status"],
    rows: [
      { date: "[DD Mon YYYY]", obligation: "VAT return, quarter [N]", applies: "VAT-registered businesses", status: "positive", statusLabel: "Filed" },
      { date: "[DD Mon YYYY]", obligation: "Payroll submission, month [N]", applies: "Employers", status: "positive", statusLabel: "On time" },
      { date: "[DD Mon YYYY]", obligation: "Corporate tax payment", applies: "Companies with year end [Mon]", status: "warning", statusLabel: "Due in 14 days" },
      { date: "[DD Mon YYYY]", obligation: "Personal tax return", applies: "Individuals", status: "warning", statusLabel: "Due in 30 days" },
      { date: "[DD Mon YYYY]", obligation: "Annual accounts filing", applies: "Companies", status: "error", statusLabel: "Overdue if unfiled" },
    ],
    note: "Dates vary by jurisdiction and entity type. Illustrative only; nothing here is personalised tax advice.",
    next: { title: "Next three deadlines", items: [{ date: "[DD Mon]", label: "VAT return, quarter [N]" }, { date: "[DD Mon]", label: "Payroll submission" }, { date: "[DD Mon]", label: "Corporate tax payment" }], link: { href: "resources/calendar/", label: "Full filing calendar" } },
  },
  guides: {
    eyebrow: "Advice to clients",
    title: "Guides and articles",
    items: [
      { category: "Guides", date: "[Date]", title: "Your first year as a limited company", text: "What to register, what to keep and when the first filings fall due.", href: "resources/first-year/" },
      { category: "Guides", date: "[Date]", title: "What records to keep, and for how long", text: "Receipts, invoices, bank statements and the retention periods that apply.", href: "resources/records/" },
      { category: "Articles", date: "[Date]", title: "Choosing accounting software", text: "How we compare the common packages for a small team.", href: "resources/software/" },
    ],
    cta: { href: "resources/", label: "View more guides" },
  },
  contact: {
    eyebrow: "Request a quote",
    title: "Get in touch!",
    text: "Tell us about the business and we reply with a fixed-fee proposal within [N] working days, or a call if it is quicker to ask.",
    address: "[Street address], [Town]",
    phone: PHONE,
    email: "[hello@practice.example]",
    portal: { text: "Existing client? Documents go through the", link: { href: "https://portal.example/", label: "client portal" } },
    businessTypes: ["Limited company", "Sole trader", "Partnership", "Individual with a tax return", "Not sure yet"],
    turnoverBands: ["Under [amount]", "[amount] to [amount]", "[amount] to [amount]", "Over [amount]", "Not trading yet"],
    submit: "Request a quote",
    consent: "I agree that my data is collected and stored.",
    note: "Please do not attach or describe documents here; clients exchange records through the secure portal. Nothing on this site is personalised financial, tax or investment advice.",
  },
  socials: SOCIALS,
  footer: {
    office: { title: "Office", lines: ["[Country] —", "[Street address], [Office]", "[Town], [Postcode]"], email: "[hello@practice.example]", phone: PHONE },
    links: { title: "Links", items: [{ href: "#top", label: "Home" }, { href: "#services", label: "Services" }, { href: "#pricing", label: "Pricing" }, { href: "#process", label: "Process" }, { href: "#contact", label: "Contact" }] },
    newsletter: { title: "Newsletter", placeholder: "Enter your email address", consent: "I agree to the", privacy: { href: "privacy/", label: "Privacy policy" } },
    registration: "[Practice] is registered with [Professional body], registration no. [000000]. Regulated for [scope] by [Regulator].",
    disclaimer: "Nothing on this website is personalised financial, tax or investment advice. Figures are illustrative placeholders. Filing deadlines vary by jurisdiction and entity type.",
    copyright: "© 2026 [Practice]. All rights reserved.",
  },
};
