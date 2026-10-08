// Creative studio homepage content, in the language of the Studiova reference (studiova.vercel.app):
// full-bleed hero with the studio name set huge, numbered sections with pill labels, lime pill buttons,
// tiles in lime, graphite and outline, pricing, FAQ, news, underline contact form, graphite footer.
import type { ReactNode } from "react";
import type { Img, LinkItem } from "@/lib/content";
import hero from "../../../templates/creative-studio/assets/hero.jpg";
import workAmber from "../../../templates/creative-studio/assets/work-amber.jpg";
import workTote from "../../../templates/creative-studio/assets/work-tote.jpg";
import workPerfume from "../../../templates/creative-studio/assets/work-perfume.jpg";
import workMagazine from "../../../templates/creative-studio/assets/work-magazine.jpg";
import workRocks from "../../../templates/creative-agency/assets/work-rocks.jpg";
import workOrange from "../../../templates/creative-agency/assets/work-orange.jpg";
import servicesTablet from "../../../templates/creative-studio/assets/services-tablet.jpg";
import aboutPhone from "../../../templates/creative-studio/assets/about-phone.jpg";
import team1 from "../../../templates/creative-studio/assets/team-1.jpg";
import team2 from "../../../templates/creative-studio/assets/team-2.jpg";
import team3 from "../../../templates/creative-studio/assets/team-3.jpg";
import team4 from "../../../templates/creative-studio/assets/team-4.jpg";
import news1 from "../../../templates/creative-studio/assets/news-1.jpg";
import news2 from "../../../templates/creative-studio/assets/news-2.jpg";
import news3 from "../../../templates/creative-studio/assets/news-3.jpg";
import avatar1 from "../../../templates/creative-studio/assets/avatar-1.jpg";
import avatar2 from "../../../templates/creative-studio/assets/avatar-2.jpg";
import avatar3 from "../../../templates/creative-studio/assets/avatar-3.jpg";

export type StudioContent = {
  brand: string;
  nav: { links: LinkItem[]; socials: LinkItem[]; email: string };
  hero: { image: Img; intro: ReactNode; name: string; href: string };
  stats: { n: string; label: string; title: string; text: string; items: { big: string; text: string }[]; cta: LinkItem };
  portfolio: { n: string; label: string; title: string; text: string; items: { title: string; tags: string[]; image: Img; href: string }[] };
  services: { n: string; label: string; title: string; text: string; image: Img; items: { title: string; text?: string; href: string }[]; cta: LinkItem };
  about: { n: string; label: string; title: string; text: string; quote: { stars: number; text: string; big: string; label: string; name: string; company: string; avatar: Img }; image: Img; dark: { big: string; label: string }; outline: { big: string; label: string; text: string } };
  testimonials: { n: string; label: string; title: string; text: string; items: { tone: "lime" | "dark" | "white"; text: string; rating?: string; name: string; company: string; avatar: Img }[] };
  team: { n: string; label: string; title: string; text: string; people: { name: string; role: string; image: Img; socials: LinkItem[] }[] };
  pricing: { n: string; label: string; title: string; text: string; plans: { name: string; popular?: boolean; price: string; was?: string; per: string; text: string; features: string[]; cta: LinkItem }[]; partners: string; logos: string[] };
  faq: { n: string; label: string; title: string; text: string; items: { q: string; a: string }[] };
  news: { n: string; label: string; title: string; text: string; items: { date: string; title: string; image: Img; href: string }[] };
  contact: { n: string; label: string; title: string; text: string; checks: string[]; person: { name: string; role: string; avatar: Img }; submit: string; reply: string };
  footer: { title: string; email: string; place: string; links: LinkItem[]; socials: LinkItem[]; copyright: string };
};

const Lime = ({ children }: { children: ReactNode }) => <span className="text-primary">{children}</span>;

export const content: StudioContent = {
  brand: "[Studio]",
  nav: { links: [{ href: "#top", label: "Home" }, { href: "#about", label: "About" }, { href: "#services", label: "Services" }, { href: "#work", label: "Work" }, { href: "#pricing", label: "Pricing" }, { href: "#contact", label: "Contact" }], socials: [{ href: "https://facebook.com/", label: "Facebook" }, { href: "https://instagram.com/", label: "Instagram" }, { href: "https://x.com/", label: "Twitter" }], email: "[hello@studio.example]" },
  hero: { image: { src: hero, alt: "A woman in a flight suit holding a space helmet, lit against black" }, intro: <>We create <Lime>high-performing</Lime> digital designs that elevate brands and enhance conversions.</>, name: "[Studio]", href: "#about" },
  stats: { n: "01", label: "Stats and facts", title: "High quality design solutions you can trust.", text: "When choosing a studio, look at its reputation, its experience and whether the people on the call are the people who do the work.", items: [{ big: "[00]K+", text: "People who have launched with us" }, { big: "[000]+", text: "Experienced professionals ready to assist" }, { big: "[0]M+", text: "Support through messages and live consultations" }], cta: { href: "about/", label: "Who we are" } },
  portfolio: { n: "02", label: "Portfolio", title: "Featured projects", text: "A glimpse into the work: identities, sites and campaigns that moved a number for someone.", items: [
    { title: "[Project name]", tags: ["Photography", "Studio"], image: { src: workAmber, alt: "An amber glass bottle holding two skeleton leaves" }, href: "work/one/" },
    { title: "[Project name]", tags: ["Brand identity", "Digital design"], image: { src: workTote, alt: "A cream canvas tote bag on grass" }, href: "work/two/" },
    { title: "[Project name]", tags: ["Digital design", "Web development"], image: { src: workMagazine, alt: "An open design magazine on concrete" }, href: "work/three/" },
    { title: "[Project name]", tags: ["UI/UX design", "Web development"], image: { src: workPerfume, alt: "Three glass perfume bottles with a daisy" }, href: "work/four/" },
    { title: "[Project name]", tags: ["UX strategy", "UI design"], image: { src: workRocks, alt: "Floating boulders with chrome shapes" }, href: "work/five/" },
    { title: "[Project name]", tags: ["Web development", "Digital design"], image: { src: workOrange, alt: "Glossy orange tubular shapes" }, href: "work/six/" },
  ] },
  services: { n: "03", label: "Services", title: "What we do", text: "Four things we do well, and one team that does all of them.", image: { src: servicesTablet, alt: "Hands holding a tablet showing an editorial layout" }, items: [
    { title: "Brand identity", text: "Names, marks and systems with the rules that keep them consistent for years.", href: "services/identity/" },
    { title: "Web development", href: "services/web/" }, { title: "Content creation", href: "services/content/" }, { title: "Motion and 3D modelling", href: "services/motion/" },
  ], cta: { href: "#work", label: "See our work" } },
  about: { n: "04", label: "About us", title: "Why choose us", text: "We blend creativity with strategy to craft digital experiences that make an impact, with a focus on detail from the first sketch.",
    quote: { stars: 4, text: "[Short client quote placeholder, one sentence.]", big: "[00.0]%", label: "Customer satisfaction", name: "[Client name]", company: "[Company]", avatar: { src: avatar1, alt: "Portrait placeholder" } },
    image: { src: aboutPhone, alt: "A black phone half buried in pale sand dunes" },
    dark: { big: "[000]+", label: "Successful projects completed" },
    outline: { big: "[000]+", label: "Brands served worldwide", text: "Our reach lets us create relevant designs for businesses across industries and regions." } },
  testimonials: { n: "05", label: "Testimonial", title: "Stories from clients", text: "Real experiences and genuine feedback on how the work changed a brand. Placeholders until the studio supplies verified quotes.", items: [
    { tone: "lime", text: "[Testimonial placeholder. Replace with a verified quote and the client's permission.]", name: "[Client name]", company: "[Company]", avatar: { src: avatar1, alt: "Portrait placeholder" } },
    { tone: "dark", text: "[Testimonial placeholder. Replace with a verified quote and the client's permission.]", rating: "[0.0]", name: "[Client name]", company: "[Company]", avatar: { src: avatar3, alt: "Portrait placeholder" } },
    { tone: "white", text: "[Testimonial placeholder. Replace with a verified quote and the client's permission.]", name: "[Client name]", company: "[Company]", avatar: { src: avatar2, alt: "Portrait placeholder" } },
  ] },
  team: { n: "06", label: "The team", title: "Meet our team", text: "Committed to redefining digital experiences while keeping the studio diverse and collaborative.", people: [
    { name: "[Name]", role: "Creative director", image: { src: team1, alt: "Portrait placeholder" }, socials: [] }, { name: "[Name]", role: "Marketing strategist", image: { src: team2, alt: "Portrait placeholder" }, socials: [] },
    { name: "[Name]", role: "Lead designer", image: { src: team3, alt: "Portrait placeholder" }, socials: [] }, { name: "[Name]", role: "UX/UI developer", image: { src: team4, alt: "Portrait placeholder" }, socials: [] },
  ] },
  pricing: { n: "07", label: "Pricing", title: "Affordable pricing", text: "Three ways to start. Prices stay as placeholders until the studio supplies them.", plans: [
    { name: "Launch", price: "[Price]", per: "/month", text: "Ideal for start-ups and small businesses taking their first steps online.", features: ["Competitive research and insights", "Wireframing and prototyping", "Basic tracking setup", "Standard contact form integration"], cta: { href: "#contact", label: "Subscribe now" } },
    { name: "Scale", popular: true, price: "[Price]", was: "[Price]", per: "/month", text: "For growing brands needing more customisation and flexibility.", features: ["Everything in Launch", "Custom design for up to 10 pages", "Social media integration", "SEO for key pages"], cta: { href: "#contact", label: "Subscribe now" } },
    { name: "Elevate", price: "[Price]", per: "/month", text: "For established businesses wanting a fully tailored experience.", features: ["Everything in Scale", "E-commerce if needed", "Branded email templates", "Priority support for six months"], cta: { href: "#contact", label: "Subscribe now" } },
  ], partners: "More than [000] trusted partners and clients", logos: ["[Logo]", "[Logo]", "[Logo]", "[Logo]", "[Logo]", "[Logo]"] },
  faq: { n: "08", label: "FAQs", title: "Frequently asked questions", text: "How we tailor the work to each brief: strategy, identity and the experience your customers get.", items: [
    { q: "What services does the studio offer?", a: "[Answer placeholder: identity, web, content and motion, in one team.]" }, { q: "How long does a typical project take?", a: "[Answer placeholder: an identity in [0] weeks, a site in [0] to [0] weeks.]" },
    { q: "Do you offer custom designs or templates?", a: "[Answer placeholder: custom, always; templates only when the brief says so.]" }, { q: "What does a project cost?", a: "[Answer placeholder: from [price]; every job is quoted from a call.]" },
    { q: "Do you provide support after launch?", a: "[Answer placeholder: yes, on a retainer or by the hour.]" },
  ] },
  news: { n: "09", label: "Resources", title: "Recent news", text: "The latest trends, projects and insights from the studio.", items: [
    { date: "[Day Month Year]", title: "[Headline placeholder: a campaign that connects]", image: { src: news1, alt: "An athlete leaping against a blue sky" }, href: "news/one/" },
    { date: "[Day Month Year]", title: "[Headline placeholder: a brand redesign]", image: { src: news2, alt: "A navy blazer printed with flowers" }, href: "news/two/" },
    { date: "[Day Month Year]", title: "[Headline placeholder: recognised for design]", image: { src: news3, alt: "An orange trench coat with a maroon scarf" }, href: "news/three/" },
  ] },
  contact: { n: "10", label: "Contact us", title: "Get in touch", text: "Let's collaborate and make something worth noticing. Tell us about the project.", checks: ["Always-on customer support", "Service across the globe"], person: { name: "[Name]", role: "Onboarding and success manager", avatar: { src: avatar3, alt: "Portrait placeholder" } }, submit: "Submit message", reply: "Thank you. [Name] will reply within [number] working days." },
  footer: { title: "Build something together?", email: "[hello@studio.example]", place: "[City], [Country]", links: [{ href: "#top", label: "Home" }, { href: "#about", label: "About" }, { href: "#services", label: "Services" }, { href: "#work", label: "Work" }, { href: "terms/", label: "Terms" }, { href: "privacy/", label: "Privacy policy" }], socials: [{ href: "https://facebook.com/", label: "Facebook" }, { href: "https://instagram.com/", label: "Instagram" }, { href: "https://x.com/", label: "Twitter" }], copyright: "© [Studio] copyright [Year]" },
};
