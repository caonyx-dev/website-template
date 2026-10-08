// Real-estate homepage content, composed in the section rhythm of the Spaciaz reference (see the dated
// revision in templates/real-estate/DESIGN.md): floating pill nav, hero with three glass cards, who-we-are,
// impact bento, beige services grid, pinned black projects reel, commitment rows, rotating-badge testimonial,
// partner strip, staggered team, enquiry card over photography, insights, closing band and footer card.
//
// The business is a development and construction group, not a listings agency.
// [Square brackets] mark anything the group must supply. The figures in `impact` and `commitment` are
// ILLUSTRATIVE PLACEHOLDERS chosen to show the layout at realistic scale — they are not claims and must be
// replaced with evidenced numbers before launch (PRODUCT.md, "No unevidenced numbers").
import type { Img, LinkItem } from "@/lib/content";
import hero from "../../../templates/real-estate/assets/hero.jpg";
import impactMain from "../../../templates/real-estate/assets/impact-main.jpg";
import impactTile from "../../../templates/real-estate/assets/impact-tile.jpg";
import svcLand from "../../../templates/real-estate/assets/svc-land.jpg";
import svcDevelopment from "../../../templates/real-estate/assets/svc-development.jpg";
import svcConstruction from "../../../templates/real-estate/assets/svc-construction.jpg";
import svcArchitecture from "../../../templates/real-estate/assets/svc-architecture.jpg";
import svcAsset from "../../../templates/real-estate/assets/svc-asset.jpg";
import project1 from "../../../templates/real-estate/assets/project-1.jpg";
import project2 from "../../../templates/real-estate/assets/project-2.jpg";
import project3 from "../../../templates/real-estate/assets/project-3.jpg";
import commit1 from "../../../templates/real-estate/assets/commit-1.jpg";
import commit2 from "../../../templates/real-estate/assets/commit-2.jpg";
import testimonial from "../../../templates/real-estate/assets/testimonial.jpg";
import team1 from "../../../templates/real-estate/assets/team-1.jpg";
import team2 from "../../../templates/real-estate/assets/team-2.jpg";
import team3 from "../../../templates/real-estate/assets/team-3.jpg";
import enquiry from "../../../templates/real-estate/assets/enquiry.jpg";
import blog1 from "../../../templates/real-estate/assets/blog-1.jpg";
import blog2 from "../../../templates/real-estate/assets/blog-2.jpg";
import blog3 from "../../../templates/real-estate/assets/blog-3.jpg";

export type GlassIcon = "stack" | "crew" | "keys";
export type CommitIcon = "shield" | "team" | "clock";

export type RealEstateContent = {
  brand: string;
  nav: { links: LinkItem[]; phoneLabel: string; phone: string; cta: LinkItem };
  hero: {
    image: Img;
    lines: string[];
    lead: string;
    subStatement: string;
    cta: LinkItem;
    cards: { icon: GlassIcon; title: string; text: string }[];
  };
  about: {
    id: string;
    badge: string;
    lines: string[];
    pillars: { title: string; text: string }[];
  };
  impact: {
    image: Img;
    tile: Img;
    tileLabel: string;
    stats: { value: number; suffix: string; label: string }[];
    note: string;
  };
  services: {
    id: string;
    badge: string;
    lines: string[];
    /** Card shows title + photograph only, as in the reference; the summaries live on the services page. */
    items: { title: string; image: Img; href: string }[];
    footNote: string;
    footCta: LinkItem;
  };
  projects: {
    id: string;
    badge: string;
    lines: string[];
    items: { n: string; place: string; title: string; kind: string; image: Img; href: string }[];
    cta: LinkItem;
  };
  commitment: {
    badge: string;
    title: string;
    lead: string;
    rows: { icon: CommitIcon; title: string; text: string }[];
    images: [Img, Img];
    cards: { value: string; label: string }[];
  };
  testimonial: {
    badgeText: string;
    image: Img;
    items: { quote: string; name: string; role: string }[];
  };
  partners: { title: string; items: string[] };
  team: {
    id: string;
    badge: string;
    lines: string[];
    members: { name: string; role: string; image: Img }[];
  };
  enquiry: {
    id: string;
    badge: string;
    lines: string[];
    image: Img;
    fields: { name: string; email: string; phone: string; subject: string };
    subjects: string[];
    helper: string;
    submit: string;
    success: string;
  };
  insights: {
    id: string;
    badge: string;
    lines: string[];
    cta: LinkItem;
    posts: { category: string; date: string; title: string; image: Img; href: string }[];
  };
  closing: { lines: string[]; lead: string; cta: LinkItem };
  footer: {
    blurb: string;
    phone: string;
    email: string;
    columns: { links: LinkItem[] }[];
    socials: LinkItem[];
    legal: LinkItem[];
    copyrightYear: number;
  };
};

export const content: RealEstateContent = {
  brand: "[Group]",

  nav: {
    links: [
      { href: "#projects", label: "Projects" },
      { href: "#services", label: "Services" },
      { href: "#about", label: "About" },
      { href: "#insights", label: "Insights" },
      { href: "#enquiry", label: "Contact" },
    ],
    phoneLabel: "Call us:",
    phone: "[+00 0000 000000]",
    cta: { href: "#enquiry", label: "Get in touch" },
  },

  hero: {
    image: { src: hero, alt: "[Placeholder] A contemporary apartment building with stacked curved balconies.", position: "50% 55%" },
    lines: ["Building what", "the city keeps"],
    lead: "A development and construction group working with investors, councils and communities — from the first site visit to the final handover.",
    subStatement: "We originate, fund, build and manage residential and mixed-use schemes across [region].",
    cta: { href: "#services", label: "View services" },
    cards: [
      { icon: "stack", title: "Developed in-house", text: "We originate and fund our own schemes, so one team answers for the whole project rather than three." },
      { icon: "crew", title: "Built by our own crews", text: "Site teams are ours, not subcontracted away. That is the reason our programmes hold." },
      { icon: "keys", title: "Managed after handover", text: "We stay on as managing agent, so the building is looked after by the people who built it." },
    ],
  },

  about: {
    id: "about",
    badge: "Who we are",
    lines: ["One team from the first", "site visit to the final", "handover"],
    pillars: [
      { title: "Our vision", text: "To leave every site better than we found it — denser, greener, and genuinely usable by the people who already live around it." },
      { title: "Our mission", text: "To deliver schemes on programme and on budget by keeping development, construction and management under one roof." },
    ],
  },

  impact: {
    image: { src: impactMain, alt: "[Placeholder] An apartment building with planted balconies seen from below.", position: "50% 45%" },
    tile: { src: impactTile, alt: "[Placeholder] A ribbed white architectural facade." },
    tileLabel: "Our impact",
    // Illustrative placeholders — replace with evidenced figures. See PRODUCT.md.
    stats: [
      { value: 42, suffix: "+", label: "schemes delivered" },
      { value: 1850, suffix: "+", label: "homes completed" },
      { value: 4300, suffix: "+", label: "residents housed" },
    ],
    note: "Figures are illustrative placeholders until the group supplies numbers it can evidence.",
  },

  services: {
    id: "services",
    badge: "What we offer",
    lines: ["A brief look at", "what we take on"],
    items: [
      { title: "Land and acquisition", image: { src: svcLand, alt: "[Placeholder] A tower under construction behind site hoarding." }, href: "#enquiry" },
      { title: "Development management", image: { src: svcDevelopment, alt: "[Placeholder] Architectural drawings and a scale rule on a desk." }, href: "#enquiry" },
      { title: "Construction", image: { src: svcConstruction, alt: "[Placeholder] A tower crane above a building under construction." }, href: "#enquiry" },
      { title: "Architecture and design", image: { src: svcArchitecture, alt: "[Placeholder] A geometric white and grey facade pattern." }, href: "#enquiry" },
      { title: "Asset management", image: { src: svcAsset, alt: "[Placeholder] A modern living space with a city view through full-height windows." }, href: "#enquiry" },
    ],
    footNote: "See how a scheme travels from site to handover.",
    footCta: { href: "#enquiry", label: "View all services" },
  },

  projects: {
    id: "projects",
    badge: "Selected projects",
    lines: ["Schemes we put", "our name on"],
    items: [
      { n: "01", place: "[Location]", title: "[Project name]", kind: "Mixed-use", image: { src: project1, alt: "[Placeholder] A glass-clad building seen from street level.", position: "50% 40%" }, href: "#enquiry" },
      { n: "02", place: "[Location]", title: "[Project name]", kind: "Residential", image: { src: project2, alt: "[Placeholder] A modern apartment building against a clear sky.", position: "50% 45%" }, href: "#enquiry" },
      { n: "03", place: "[Location]", title: "[Project name]", kind: "Regeneration", image: { src: project3, alt: "[Placeholder] The brick facade and entrance of an older building.", position: "50% 50%" }, href: "#enquiry" },
    ],
    cta: { href: "#enquiry", label: "View all projects" },
  },

  commitment: {
    badge: "Our commitment",
    title: "What makes us different",
    lead: "It is not the drawings. It is who answers the phone when a programme slips, and whether the building still works in ten years.",
    rows: [
      { icon: "shield", title: "Safety we publish", text: "We publish our incident and lost-time figures in full, every quarter, whether or not they flatter us." },
      { icon: "team", title: "One team, start to finish", text: "The people who win the site are the people who hand over the keys." },
      { icon: "clock", title: "Built for the long term", text: "We hold and manage much of what we build, so a shortcut costs us before it ever costs you." },
    ],
    images: [
      { src: commit1, alt: "[Placeholder] Colleagues reviewing work together in a bright office." },
      { src: commit2, alt: "[Placeholder] A furnished living room in a completed apartment." },
    ],
    // Illustrative placeholders — replace or remove. See PRODUCT.md.
    cards: [
      { value: "[0.0]", label: "average client rating" },
      { value: "[0,000]+", label: "residents and tenants" },
    ],
  },

  testimonial: {
    badgeText: "What people say",
    image: { src: testimonial, alt: "[Placeholder] A curved contemporary building." },
    items: [
      { quote: "[Replace with a real, written, client-approved quote. Two or three lines is plenty — specific beats glowing.]", name: "[Client name]", role: "[Role, Organisation]" },
      { quote: "[A second approved quote. Ask for one that names a constraint the group worked around, not one that calls them professional.]", name: "[Client name]", role: "[Role, Organisation]" },
      { quote: "[A third approved quote. A planner, a funder and a buyer say usefully different things — try to get one of each.]", name: "[Client name]", role: "[Role, Organisation]" },
    ],
  },

  partners: {
    title: "We are proud to work with",
    items: ["[Partner one]", "[Partner two]", "[Partner three]", "[Partner four]", "[Partner five]", "[Partner six]"],
  },

  team: {
    id: "team",
    badge: "The team",
    lines: ["The people", "accountable for it"],
    members: [
      { name: "[Name]", role: "Founder and Chief Executive", image: { src: team1, alt: "[Placeholder] A portrait of a person standing in an office.", position: "50% 25%" } },
      { name: "[Name]", role: "Development Director", image: { src: team2, alt: "[Placeholder] A portrait of a person standing in an office.", position: "50% 25%" } },
      { name: "[Name]", role: "Construction Director", image: { src: team3, alt: "[Placeholder] A portrait of a person standing in an office.", position: "50% 25%" } },
    ],
  },

  enquiry: {
    id: "enquiry",
    badge: "Enquiry",
    lines: ["Talk to us about a site,", "a scheme or a space"],
    image: { src: enquiry, alt: "[Placeholder] A city street lined with buildings in low sun.", position: "50% 50%" },
    fields: { name: "Your name", email: "Email", phone: "Phone number", subject: "What is it about?" },
    subjects: [
      "A site we should look at",
      "A scheme already in planning",
      "A construction tender",
      "Leasing or managing space",
      "Something else",
    ],
    helper: "Tell us roughly what you have in mind and we will call you back. Required fields are marked *",
    submit: "Get a call back",
    success: "Thank you — your enquiry is noted. This demo form does not send anywhere until a handler is wired.",
  },

  insights: {
    id: "insights",
    badge: "News and insights",
    lines: ["What we are", "learning on site"],
    cta: { href: "#enquiry", label: "View all posts" },
    posts: [
      { category: "Practice", date: "[Date]", title: "Why we stopped subcontracting groundworks", image: { src: blog1, alt: "[Placeholder] Construction workers on a reinforced concrete deck." }, href: "#enquiry" },
      { category: "Design", date: "[Date]", title: "Designing for the second owner, not the first", image: { src: blog2, alt: "[Placeholder] A glass curtain wall reflecting the sky." }, href: "#enquiry" },
      { category: "Retrofit", date: "[Date]", title: "What a 1970s block taught us about retrofit", image: { src: blog3, alt: "[Placeholder] The stripped interior of a building part-way through renovation." }, href: "#enquiry" },
    ],
  },

  closing: {
    lines: ["Your next scheme", "starts here"],
    lead: "Whether you are holding a site, a consent or just a question, it costs nothing to put it in front of us.",
    cta: { href: "#enquiry", label: "Get a free appraisal" },
  },

  footer: {
    blurb: "We are a development and construction group creating places that are worth keeping.",
    phone: "[+00 0000 000000]",
    email: "[hello@example.com]",
    columns: [
      {
        links: [
          { href: "#about", label: "About us" },
          { href: "#commitment", label: "Why choose us" },
          { href: "#team", label: "Our team" },
          { href: "#services", label: "Services" },
          { href: "#partners", label: "Partners" },
          { href: "#about", label: "Core values" },
        ],
      },
      {
        links: [
          { href: "#projects", label: "Our projects" },
          { href: "#insights", label: "News and updates" },
          { href: "terms/", label: "Terms and conditions" },
          { href: "#enquiry", label: "Support centre" },
          { href: "#enquiry", label: "Contact" },
        ],
      },
    ],
    socials: [
      { href: "https://www.linkedin.com", label: "LinkedIn" },
      { href: "https://www.instagram.com", label: "Instagram" },
      { href: "https://www.youtube.com", label: "YouTube" },
      { href: "https://x.com", label: "X" },
    ],
    legal: [
      { href: "privacy/", label: "Privacy" },
      { href: "cookies/", label: "Cookies" },
      { href: "accessibility/", label: "Accessibility statement" },
      { href: "credits/", label: "Image credits" },
    ],
    copyrightYear: 2026,
  },
};
