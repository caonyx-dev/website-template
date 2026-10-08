// Hotel homepage content in the language of the Almaris reference with the Carmelina welcome section (see the
// DESIGN.md revision): crossfading hero with an arched panel, reservation bar, pinned welcome statement with
// photographs scrolling over it, facilities, a testimonial over a photograph, the accommodation carousel, two
// figure tiles, a video band, the Instagram strip and a navy footer. [Square brackets] are placeholders.
import type { Img, LinkItem } from "@/lib/content";
import hero1 from "../../../templates/hotel/assets/hero-1.jpg";
import hero2 from "../../../templates/hotel/assets/hero-2.jpg";
import welcome1 from "../../../templates/hotel/assets/welcome-1.jpg";
import welcome2 from "../../../templates/hotel/assets/welcome-2.jpg";
import welcome3 from "../../../templates/hotel/assets/welcome-3.jpg";
import welcome4 from "../../../templates/hotel/assets/welcome-4.jpg";
import welcome5 from "../../../templates/hotel/assets/welcome-5.jpg";
import quoteBg from "../../../templates/hotel/assets/quote-bg.jpg";
import room1 from "../../../templates/hotel/assets/room-1.jpg";
import room2 from "../../../templates/hotel/assets/room-2.jpg";
import room3 from "../../../templates/hotel/assets/room-3.jpg";
import room4 from "../../../templates/hotel/assets/room-4.jpg";
import facility1 from "../../../templates/hotel/assets/facility-1.jpg";
import facility2 from "../../../templates/hotel/assets/facility-2.jpg";
import videoBg from "../../../templates/hotel/assets/video-bg.jpg";

export type FacilityIcon = "restaurant" | "pool" | "gym" | "spa" | "meeting" | "laundry";
export type HotelContent = {
  brand: string;
  nav: { links: LinkItem[]; phone: string; cta: LinkItem };
  hero: { slides: { image: Img; title: string; text: string }[]; cta: LinkItem; stars: number };
  booking: { title: string; checkIn: string; checkOut: string; adults: string; children: string; submit: string; note: string };
  welcome: { eyebrow: string; statement: string; text: string; cta: LinkItem; images: Img[] };
  facilities: { eyebrow: string; title: string; items: { icon: FacilityIcon; title: string; text: string }[] };
  testimonials: { image: Img; items: { text: string; name: string }[] };
  rooms: { eyebrow: string; title: string; from: string; perNight: string; view: string; items: { name: string; guests: string; size: string; rate: string; image: Img; href: string }[] };
  figures: { eyebrow: string; title: string; items: { value: string; label: string; text: string; image: Img }[] };
  video: { image: Img; label: string; title: string; note: string };
  instagram: { eyebrow: string; handle: string; href: string; posts: { image: Img; href: string }[] };
  footer: { address: { title: string; lines: string[] }; contact: { title: string; phone: string; email: string }; socials: LinkItem[]; links: LinkItem[]; copyright: string };
};

const PHONE = "[+00 000 000 000]";

export const content: HotelContent = {
  brand: "[Hotel]",
  nav: {
    links: [{ href: "#top", label: "Home" }, { href: "#rooms", label: "Rooms" }, { href: "#reservation", label: "Reservation" }, { href: "#facilities", label: "Facilities" }, { href: "#contact", label: "Contact" }],
    phone: PHONE,
    cta: { href: "#reservation", label: "Reservation" },
  },
  hero: {
    stars: 5,
    slides: [
      { image: { src: hero1, alt: "A boutique hotel bedroom at dusk with a brass lamp and a velvet armchair" }, title: "Where every stay is extraordinary", text: "The perfect blend of comfort, quiet and convenience in the heart of [Town]: your gateway to an unforgettable stay." },
      { image: { src: hero2, alt: "A hotel suite living area at blue hour with a city beyond the windows" }, title: "Hospitality like never before", text: "Rooms and suites designed for rest, a kitchen worth staying in for, and a team that remembers your name." },
    ],
    cta: { href: "#rooms", label: "Discover rooms" },
  },
  booking: { title: "Reservation", checkIn: "Check in", checkOut: "Check out", adults: "Adults", children: "Children", submit: "Check availability", note: "Availability and rates come from the booking engine once it is connected; this bar passes your dates and guests to it." },
  welcome: {
    eyebrow: "Welcome to [Hotel]",
    statement: "Set in [neighbourhood] along the [river or shore], a boutique hotel that pairs considered design with unhurried, attentive service.",
    text: "[Hotel] is a [N]-room house that believes small gestures make the difference: a remembered preference, a quiet corner found for you, the right wine suggested without being asked. We do ordinary things with unusual care.",
    cta: { href: "about/", label: "Discover more" },
    images: [
      { src: welcome1, alt: "Deck chairs beside a green-tiled pool under a timber facade" },
      { src: welcome2, alt: "A garden terrace with cream umbrellas and white rattan sofas" },
      { src: welcome3, alt: "A bright suite living room with a round glass table" },
      { src: welcome4, alt: "A carved stone arch with an iron lantern at the entrance" },
      { src: welcome5, alt: "A marble lobby with a round brass reception desk" },
    ],
  },
  facilities: {
    eyebrow: "At your service", title: "Everything a stay needs",
    items: [
      { icon: "restaurant", title: "Restaurant", text: "Breakfast until late, a seasonal dinner menu and room service around the clock." },
      { icon: "pool", title: "Swimming pool", text: "A heated pool and sun terrace, open from [hours], with towels and loungers provided." },
      { icon: "gym", title: "Fitness centre", text: "Open 24 hours with cardio, free weights and a stretching studio." },
      { icon: "spa", title: "Spa and massage", text: "Treatment rooms, a steam room and a sauna; book at reception or in the app." },
      { icon: "meeting", title: "Meeting room", text: "A boardroom for [N] with screens, fast Wi-Fi and catering on request." },
      { icon: "laundry", title: "Laundry service", text: "Same-day laundry and pressing on items handed in before [time]." },
    ],
  },
  testimonials: {
    image: { src: quoteBg, alt: "" },
    items: [
      { text: "[Guest review placeholder. Replace with a real, attributed review used with permission.]", name: "[Guest name]" },
      { text: "[Guest review placeholder. Replace with a real, attributed review used with permission.]", name: "[Guest name]" },
      { text: "[Guest review placeholder. Replace with a real, attributed review used with permission.]", name: "[Guest name]" },
    ],
  },
  rooms: {
    eyebrow: "Elegant", title: "Accommodation", from: "From", perNight: "per night", view: "View details",
    items: [
      { name: "Standard room", guests: "2 guests", size: "[00] m²", rate: "[—]", image: { src: room1, alt: "A standard room with a king bed and mirrored wardrobe" }, href: "rooms/standard/" },
      { name: "Deluxe room", guests: "2 guests", size: "[00] m²", rate: "[—]", image: { src: room2, alt: "A deluxe room with a quilted cream headboard" }, href: "rooms/deluxe/" },
      { name: "Premier room", guests: "2 guests", size: "[00] m²", rate: "[—]", image: { src: room3, alt: "A premier room with a city view" }, href: "rooms/premier/" },
      { name: "Family suite", guests: "4 guests", size: "[00] m²", rate: "[—]", image: { src: room4, alt: "A family suite with two beds and a sofa" }, href: "rooms/family-suite/" },
    ],
  },
  figures: {
    eyebrow: "Rooms and suites", title: "Our facilities",
    items: [
      { value: "[00]+", label: "Rooms available", text: "From compact standard rooms to the family suite, every room has blackout blinds and a proper desk.", image: { src: facility1, alt: "A modern dark hotel bedroom with a sculptural white branch" } },
      { value: "[00]+", label: "Dishes on the menu", text: "A seasonal menu that changes with the market, plus a breakfast that runs until late.", image: { src: facility2, alt: "A generous dinner spread on a dark wooden table" } },
    ],
  },
  video: { image: { src: videoBg, alt: "A couple laughing together on a hotel bed" }, label: "Watch the film", title: "[Hotel] in two minutes", note: "Video placeholder. Add the hotel film here; it never autoplays." },
  instagram: { eyebrow: "Our Instagram", handle: "@[hotel]", href: "https://instagram.com/", posts: [
    { image: { src: welcome5, alt: "The lobby with its brass reception desk" }, href: "https://instagram.com/p/[post-1]/" },
    { image: { src: welcome2, alt: "The garden terrace with cream umbrellas" }, href: "https://instagram.com/p/[post-2]/" },
    { image: { src: facility2, alt: "A dinner spread laid out on the table" }, href: "https://instagram.com/p/[post-3]/" },
    { image: { src: facility1, alt: "A bedroom looking out over the trees" }, href: "https://instagram.com/p/[post-4]/" },
    { image: { src: room2, alt: "The deluxe room in morning light" }, href: "https://instagram.com/p/[post-5]/" },
    { image: { src: welcome3, alt: "A suite living room" }, href: "https://instagram.com/p/[post-6]/" },
    { image: { src: welcome1, alt: "Deck chairs beside the pool" }, href: "https://instagram.com/p/[post-7]/" },
    { image: { src: welcome4, alt: "The carved stone arch at the entrance" }, href: "https://instagram.com/p/[post-8]/" },
  ] },
  footer: {
    address: { title: "Address", lines: ["[Street address]", "[Town], [Postcode]"] },
    contact: { title: "Contact us", phone: PHONE, email: "[stay@hotel.example]" },
    socials: [{ href: "https://facebook.com/", label: "Facebook" }, { href: "https://instagram.com/", label: "Instagram" }, { href: "https://x.com/", label: "X" }, { href: "https://youtube.com/", label: "YouTube" }],
    links: [{ href: "privacy/", label: "Privacy" }, { href: "terms/", label: "Terms" }, { href: "accessibility/", label: "Accessibility" }],
    copyright: "© 2026 [Hotel]. All rights reserved.",
  },
};
