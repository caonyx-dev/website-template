// Dental clinic homepage content, in the language of the SmilePure "Dentist Professors" reference
// (smilepure.thememove.com/dentist-professors): info top bar over a navy menu bar, full-bleed hero with a
// navy overlay and a rotating headline, welcome section with overlapping photographs, three service cards,
// the team beside a 2×2 grid, a teal quality band, smile gallery with a before/after slider, avatar-tabbed
// testimonials, clinic news, a booking form beside the phone number, an office strip and a navy footer.
// [Square brackets] are placeholders; nothing real is invented.
import type { Img, LinkItem } from "@/lib/content";
import hero from "../../../templates/dental-clinic/assets/hero.jpg";
import welcomeChair from "../../../templates/dental-clinic/assets/welcome-chair.jpg";
import welcomeTooth from "../../../templates/dental-clinic/assets/welcome-tooth.jpg";
import serviceCosmetic from "../../../templates/dental-clinic/assets/service-cosmetic.jpg";
import serviceKids from "../../../templates/dental-clinic/assets/service-kids.jpg";
import serviceImplants from "../../../templates/dental-clinic/assets/service-implants.jpg";
import team1 from "../../../templates/dental-clinic/assets/team-1.jpg";
import team2 from "../../../templates/dental-clinic/assets/team-2.jpg";
import team3 from "../../../templates/dental-clinic/assets/team-3.jpg";
import team4 from "../../../templates/dental-clinic/assets/team-4.jpg";
import band from "../../../templates/dental-clinic/assets/band.jpg";
import smile1 from "../../../templates/dental-clinic/assets/smile-1.jpg";
import smileWhitening from "../../../templates/dental-clinic/assets/smile-whitening.jpg";
import smile3 from "../../../templates/dental-clinic/assets/smile-3.jpg";
import smile4 from "../../../templates/dental-clinic/assets/smile-4.jpg";
import news1 from "../../../templates/dental-clinic/assets/news-1.jpg";
import news2 from "../../../templates/dental-clinic/assets/news-2.jpg";

export type InfoKind = "phone" | "brochure" | "clock";
export type DentalContent = {
  brand: string;
  topbar: { kind: InfoKind; label: string; value: string; href?: string }[];
  nav: { links: LinkItem[]; socials: LinkItem[]; searchLabel: string };
  hero: { image: Img; fixed: string; rotating: string[]; lead: string; primary: LinkItem; video: { label: string; title: string; note: string } };
  welcome: { title: string; lead: string; features: { icon: "kit" | "house"; title: string; text: string }[]; pricing: { text: string; link: LinkItem }; large: Img; small: Img };
  services: { title: string; lead: string; more: string; items: { title: string; text: string; image: Img; href: string }[]; note: { text: string; link: LinkItem } };
  team: { title: string; text: string; cta: LinkItem; meet: { text: string; link: LinkItem }; people: { name: string; role: string; image: Img }[] };
  band: { image: Img; title: string; find: LinkItem; book: LinkItem };
  gallery: { title: string; lead: string; before: string; after: string; slider: Img; items: Img[] };
  testimonials: { label: string; items: { text: string; name: string; role: string; avatar: Img }[] };
  news: { title: string; lead: string; cards: { title: string; date: string; image: Img; href: string }[]; list: { title: string; date: string; href: string }[] };
  appointment: { title: string; lead: string; services: string[]; times: string[]; submit: string; call: { label: string; phone: string; text: string; map: LinkItem } };
  office: LinkItem;
  footer: { address: string; email: string; phone: string; site: string; support: { title: string; links: LinkItem[] }; treatments: { title: string; links: LinkItem[] }; follow: string; socials: LinkItem[]; copyright: string };
};

const PHONE = "[+00 000 000 000]";
const tel = `tel:${PHONE.replace(/[^\d+]/g, "")}`;

export const content: DentalContent = {
  brand: "[Clinic]",
  topbar: [
    { kind: "phone", label: "Service available", value: PHONE, href: tel },
    { kind: "brochure", label: "Our brochure", value: "Download now", href: "brochure.pdf" },
    { kind: "clock", label: "08:00 – 18:00", value: "Monday – Friday" },
  ],
  nav: {
    links: [{ href: "#top", label: "Home" }, { href: "#about", label: "About" }, { href: "#services", label: "Services" }, { href: "#team", label: "Team" }, { href: "#gallery", label: "Gallery" }, { href: "#news", label: "News" }, { href: "#appointment", label: "Contact" }],
    socials: [{ href: "https://facebook.com/", label: "Facebook" }, { href: "https://x.com/", label: "X" }, { href: "https://instagram.com/", label: "Instagram" }],
    searchLabel: "Search the site",
  },
  hero: {
    image: { src: hero, alt: "A dentist in blue scrubs checking the smile of a patient in the chair" },
    fixed: "High standards.",
    rotating: ["Gentle dentists.", "Modern clinic.", "Honest prices."],
    lead: "Modern dentistry for the whole family in [Town]: gentle check-ups, clear prices and same-week appointments.",
    primary: { href: "#about", label: "More about us" },
    video: { label: "How we work", title: "[Clinic] in two minutes", note: "Video placeholder. Add the clinic’s tour film here; it never autoplays." },
  },
  welcome: {
    title: "Welcome to [Clinic] dental clinic",
    lead: "We check your current dental situation and agree the treatment with you before anything starts. Our specialists take care of your smile with patience and care.",
    features: [
      { icon: "kit", title: "Why we stand out", text: "Patients are at the centre of every decision, and we keep improving the experience with the aid of new technology." },
      { icon: "house", title: "Get your care right", text: "Pain, stress and worry are handled first. Relieving discomfort and protecting your mouth is always the priority, including on our [24/7] emergency line." },
    ],
    pricing: { text: "Curious about our service pricing?", link: { href: "pricing/", label: "Learn more" } },
    large: { src: welcomeChair, alt: "A smiling patient in the dental chair giving a thumbs up" },
    small: { src: welcomeTooth, alt: "A model tooth and a dental mirror on a teal background" },
  },
  services: {
    title: "Services at our clinic",
    lead: "We offer the full range of general and cosmetic dentistry and keep studying new techniques to add to the list.",
    more: "More details",
    items: [
      { title: "Cosmetic dentistry", text: "Improving the appearance of your teeth, including whitening, bonding, veneers and a professional clean.", image: { src: serviceCosmetic, alt: "A dentist examining a smiling patient" }, href: "services/cosmetic/" },
      { title: "Children’s dentistry", text: "Care tailored so infants, children and teens get the best start, with gentle first visits and fissure sealants.", image: { src: serviceKids, alt: "A laughing boy with a big grin" }, href: "services/children/" },
      { title: "Dental implants", text: "Replacing missing teeth with artificial roots placed in the jaw, restored with a crown that looks and feels natural.", image: { src: serviceImplants, alt: "A dental surgeon working under the operatory light" }, href: "services/implants/" },
    ],
    note: { text: "Don’t skip your regular check-up.", link: { href: "#appointment", label: "Book an appointment" } },
  },
  team: {
    title: "Our professors, doctors and specialists",
    text: "The specialists at [Clinic] work to make every visit gentle and stress-free, from a first check-up to complex surgery, with a [24/7] line for dental emergencies.",
    cta: { href: "timetable/", label: "Doctor’s timetable" },
    meet: { text: "Want to know more about the team?", link: { href: "team/", label: "Meet our team" } },
    people: [
      { name: "[Dr Name]", role: "Principal dentist", image: { src: team1, alt: "Portrait placeholder" } },
      { name: "[Dr Name]", role: "Oral surgeon", image: { src: team2, alt: "Portrait placeholder" } },
      { name: "[Dr Name]", role: "Orthodontist", image: { src: team3, alt: "Portrait placeholder" } },
      { name: "[Dr Name]", role: "Dental hygienist", image: { src: team4, alt: "Portrait placeholder" } },
    ],
  },
  band: { image: { src: band, alt: "" }, title: "Premium quality and advanced dental technology at flat prices", find: { href: "contact/", label: "Find an office" }, book: { href: "#appointment", label: "Get appointment" } },
  gallery: {
    title: "Smile gallery",
    lead: "Successful, happy smiles we have brought to our patients. Their joy is what keeps us going.",
    before: "Before", after: "After",
    slider: { src: smileWhitening, alt: "A close-up of a wide smile, shown before and after whitening" },
    items: [
      { src: smile1, alt: "A young man smiling in the clinic" },
      { src: smile3, alt: "A laughing boy holding a puppy with a bow tie" },
      { src: smile4, alt: "A woman laughing openly" },
    ],
  },
  testimonials: {
    label: "Happy clients say",
    items: [
      { text: "[Testimonial placeholder. Replace with a verified patient quote, used with their permission.]", name: "[Patient name]", role: "Happy client", avatar: { src: smile1, alt: "" } },
      { text: "[Testimonial placeholder. Replace with a verified patient quote, used with their permission.]", name: "[Patient name]", role: "Happy client", avatar: { src: smile4, alt: "" } },
      { text: "[Testimonial placeholder. Replace with a verified patient quote, used with their permission.]", name: "[Patient name]", role: "Happy client", avatar: { src: welcomeChair, alt: "" } },
    ],
  },
  news: {
    title: "Latest clinic news",
    lead: "Up-to-date news and events in dentistry, written by the specialists at [Clinic].",
    cards: [
      { title: "Five foods that can help keep your teeth white", date: "[Date]", image: { src: news1, alt: "A dentist treating a patient in a red chair" }, href: "news/one/" },
      { title: "The dangers of over-bleaching you should know about", date: "[Date]", image: { src: news2, alt: "Two dentists reviewing an x-ray with a patient" }, href: "news/two/" },
    ],
    list: [
      { title: "Five foods that can help keep your teeth white", date: "[Date]", href: "news/one/" },
      { title: "The dangers of over-bleaching you should know about", date: "[Date]", href: "news/two/" },
      { title: "What does it mean when your tongue turns white?", date: "[Date]", href: "news/three/" },
    ],
  },
  appointment: {
    title: "Book appointment",
    lead: "Tell us the problem, pick a time and get advice from a specialist in the field.",
    services: ["Check-up and clean", "Cosmetic dentistry", "Children’s dentistry", "Dental implants", "Emergency"],
    times: ["Morning (08:00 – 12:00)", "Afternoon (12:00 – 15:00)", "Late afternoon (15:00 – 18:00)"],
    submit: "Get appointment",
    call: { label: "Or call us now", phone: PHONE, text: "Give us a call for advice or to book a check-up at [Clinic].", map: { href: "https://maps.google.com/", label: "View on Google map" } },
  },
  office: { href: "contact/", label: "Let’s find an office near you" },
  footer: {
    address: "[Street address], [Town]", email: "[hello@clinic.example]", phone: PHONE, site: "[www.clinic.example]",
    support: { title: "Support", links: [{ href: "#about", label: "About us" }, { href: "contact/", label: "Contact us" }, { href: "#services", label: "Our services" }, { href: "#appointment", label: "Book appointment" }] },
    treatments: { title: "Treatments", links: [{ href: "services/preventive/", label: "Preventive dentistry" }, { href: "services/children/", label: "Children’s dentistry" }, { href: "services/dentures/", label: "Dentures" }, { href: "services/extraction/", label: "Tooth extraction" }] },
    follow: "Follow us",
    socials: [{ href: "https://facebook.com/", label: "Facebook" }, { href: "https://x.com/", label: "X" }, { href: "https://youtube.com/", label: "YouTube" }, { href: "https://instagram.com/", label: "Instagram" }],
    copyright: "© 2026 [Clinic]. All rights reserved.",
  },
};
