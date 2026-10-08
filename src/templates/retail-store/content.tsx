// Retail-store homepage content in the composition of the Vogal reference (see the dated revision in
// templates/retail-store/DESIGN.md): the promo strip, the sticky header with its mega-menu, the hero slideshow,
// the circular category row, the new-arrivals grid, the explore mosaic, the stockist strip, the picks rail, the
// visit-the-shop band, the journal, the ink reassurance band and the blush footer.
// [Square brackets] are placeholders. Prices, stock and product names are template data, not a catalogue.
import type { Img, LinkItem } from "@/lib/content";
import type { Product } from "./components/shop";
import hero1 from "../../../templates/retail-store/assets/hero-1.jpg";
import hero2 from "../../../templates/retail-store/assets/hero-2.jpg";
import catKnitwear from "../../../templates/retail-store/assets/cat-knitwear.jpg";
import catDresses from "../../../templates/retail-store/assets/cat-dresses.jpg";
import catShoes from "../../../templates/retail-store/assets/cat-shoes.jpg";
import catBags from "../../../templates/retail-store/assets/cat-bags.jpg";
import catDenim from "../../../templates/retail-store/assets/cat-denim.jpg";
import exploreWomen from "../../../templates/retail-store/assets/explore-women.jpg";
import exploreMen from "../../../templates/retail-store/assets/explore-men.jpg";
import exploreShoes from "../../../templates/retail-store/assets/explore-shoes.jpg";
import exploreAccessories from "../../../templates/retail-store/assets/explore-accessories.jpg";
import store from "../../../templates/retail-store/assets/store.jpg";
import journal1 from "../../../templates/retail-store/assets/journal-1.jpg";
import journal2 from "../../../templates/retail-store/assets/journal-2.jpg";
import journal3 from "../../../templates/retail-store/assets/journal-3.jpg";
import pTube from "../../../templates/retail-store/assets/p-tube.jpg";
import pMaxi from "../../../templates/retail-store/assets/p-maxi.jpg";
import pCargo from "../../../templates/retail-store/assets/p-cargo.jpg";
import pSkirt from "../../../templates/retail-store/assets/p-skirt.jpg";
import pBag from "../../../templates/retail-store/assets/p-bag.jpg";
import pFlats from "../../../templates/retail-store/assets/p-flats.jpg";
import pPlaysuit from "../../../templates/retail-store/assets/p-playsuit.jpg";
import pSundress from "../../../templates/retail-store/assets/p-sundress.jpg";
import pWraptop from "../../../templates/retail-store/assets/p-wraptop.jpg";
import pHoodie from "../../../templates/retail-store/assets/p-hoodie.jpg";
import pLinen from "../../../templates/retail-store/assets/p-linen.jpg";
import pMules from "../../../templates/retail-store/assets/p-mules.jpg";

/** One place to re-denominate the whole catalogue. */
export const LOCALE = "en-GB";
export const CURRENCY = "GBP";

export type RetailContent = {
  brand: string;
  promo: { phone: string; messages: string[]; dismiss: string; label: string };
  nav: {
    links: { href: string; label: string; sale?: boolean }[];
    mega: { title: string; links: LinkItem[] }[];
    utilities: { saved: string; bag: string };
  };
  hero: {
    label: string;
    /** Which half of the photograph is empty, and therefore where the copy goes. */
    slides: { eyebrow?: string; lines: string[]; lead?: string; ctas: LinkItem[]; image: Img; side: "left" | "right" }[];
    prev: string;
    next: string;
    pause: string;
  };
  categories: { title: string; lead: string; items: { label: string; href: string; image: Img }[] };
  arrivals: { title: string; lead: string; cta: LinkItem; note: string; products: Product[] };
  explore: { title: string; tiles: { label: string; href: string; image: Img; tall: boolean }[] };
  stockists: { title: string; note: string; items: string[] };
  picks: { title: string; lead: string; cta: LinkItem; products: Product[] };
  store: {
    title: string; lead: string; image: Img;
    address: string[]; phone: string; email: string;
    hours: { day: string; open: string }[];
    note: string; directions: LinkItem; cta: LinkItem;
  };
  journal: { title: string; lead: string; cta: LinkItem; items: { date: string; title: string; excerpt: string; image: Img; href: string }[] };
  trust: { items: { icon: "van" | "bag" | "arrows" | "lock"; title: string; text: string }[] };
  newsletter: { title: string; text: string; label: string; placeholder: string; submit: string; confirm: string; error: string; consent: string; privacy: LinkItem };
  footer: {
    blurb: string;
    columns: { title: string; links: LinkItem[] }[];
    socialTitle: string;
    socials: LinkItem[];
    paymentsTitle: string;
    payments: string[];
    paymentsNote: string;
    legal: LinkItem[];
    copyrightName: string;
    copyrightYear: number;
  };
  bag: {
    title: string; empty: string; emptyCta: LinkItem; subtotal: string; delivery: string;
    checkout: string; checkoutNote: string; remove: string; qty: string; close: string; continue: string;
  };
};

const v = (label: string, swatch: string) => ({ label, swatch });

const ARRIVALS: Product[] = [
  {
    id: "ribbed-bandeau", name: "Ribbed bandeau top", price: 28, href: "#new-in",
    image: { src: pTube, alt: "A pale blue ribbed bandeau top worn under an open stone trench coat with white wide-leg trousers." },
    badge: "new", badgeLabel: "New",
    variants: [v("Powder blue", "#AFC8DE"), v("Sage", "#B7C4AE"), v("Lilac", "#C9BBD4")],
  },
  {
    id: "satin-slip-dress", name: "Satin slip maxi dress", price: 68, was: 85, href: "#new-in",
    image: { src: pMaxi, alt: "A long dusty-pink satin slip dress worn by a model standing with arms loosely crossed." },
    badge: "sale", badgeLabel: "−20%",
    variants: [v("Rose", "#DDA9AE"), v("Powder blue", "#AFC8DE")],
  },
  {
    id: "cargo-trousers", name: "Cotton cargo trousers", price: 52, href: "#new-in",
    image: { src: pCargo, alt: "Olive-green cotton cargo trousers photographed upright with the side pockets visible." },
    variants: [v("Olive", "#7E7F55"), v("Black", "#1C1C1C"), v("Rust", "#B4502F"), v("Stone", "#C8BBA6")],
    stock: "Low stock",
  },
  {
    id: "denim-mini-skirt", name: "Denim mini skirt", price: 38, href: "#new-in",
    image: { src: pSkirt, alt: "A bright orange denim knee-length skirt worn with a white ribbed vest top." },
    variants: [v("Orange", "#E2713C"), v("Ecru", "#E7E0D0"), v("Pink", "#E3A9B7")],
  },
  {
    id: "chain-crossbody", name: "Chain crossbody bag", price: 74, href: "#new-in",
    image: { src: pBag, alt: "A tan leather crossbody bag hanging from a silver chain strap." },
    badge: "new", badgeLabel: "New",
    variants: [v("Tan", "#9C7149"), v("Black", "#1C1C1C")],
  },
  {
    id: "wedge-ballet-flats", name: "Wedge ballet flats", price: 58, href: "#new-in",
    image: { src: pFlats, alt: "A black leather slip-on ballet flat with a white wedge sole, photographed in profile." },
    variants: [v("Black", "#1C1C1C"), v("Ecru", "#E7E0D0")],
    stock: "In store only",
  },
  {
    id: "linen-playsuit", name: "Belted linen playsuit", price: 62, href: "#new-in",
    image: { src: pPlaysuit, alt: "A coral-pink short-sleeved belted playsuit worn mid-movement with the belt tie swinging." },
    variants: [v("Coral", "#E4756B"), v("Sand", "#D6C3A5")],
  },
  {
    id: "floral-sundress", name: "Floral strappy sundress", price: 54, was: 72, href: "#new-in",
    image: { src: pSundress, alt: "A short cream sundress with a small blue floral print and crossed back straps." },
    badge: "sale", badgeLabel: "−25%",
    variants: [v("Cream", "#EFE8D8"), v("Navy", "#2B3A55")],
  },
];

const PICKS: Product[] = [
  {
    id: "cropped-wrap-top", name: "Cropped wrap top", price: 24, href: "#picks",
    image: { src: pWraptop, alt: "A black cropped long-sleeved wrap top worn with light blue straight jeans." },
    variants: [v("Black", "#1C1C1C"), v("Cream", "#EFE8D8")],
  },
  {
    id: "zip-hoodie", name: "Zip-through hoodie", price: 46, href: "#picks",
    image: { src: pHoodie, alt: "A bright red zip-through hooded sweatshirt worn over a white top with matching red trousers." },
    variants: [v("Red", "#CB3A2E"), v("Grey", "#A7A7A7"), v("Navy", "#2B3A55")],
  },
  {
    id: "oversized-linen-shirt", name: "Oversized linen shirt", price: 56, href: "#picks",
    image: { src: pLinen, alt: "A cream oversized linen shirt shown on an invisible mannequin with the sleeves rolled." },
    badge: "new", badgeLabel: "New",
    variants: [v("Cream", "#EFE8D8"), v("Sage", "#B7C4AE"), v("White", "#FFFFFF")],
  },
  {
    id: "heeled-mules", name: "Square-toe heeled mules", price: 64, href: "#picks",
    image: { src: pMules, alt: "A pair of black leather square-toe heeled mule sandals." },
    variants: [v("Black", "#1C1C1C"), v("Tan", "#9C7149")],
    stock: "Low stock",
  },
];

export const content: RetailContent = {
  brand: "[Store name]",

  promo: {
    label: "Store announcements",
    phone: "[+44 161 496 0000]",
    messages: [
      "Free local delivery on orders over [£50] — [postcode area]",
      "Collect in store the same day if you order before [3pm]",
      "[30]-day returns, in store or by post",
    ],
    dismiss: "Dismiss announcements",
  },

  nav: {
    links: [
      { href: "#new-in", label: "New in" },
      { href: "#shop", label: "Shop" },
      { href: "#explore", label: "Collections" },
      { href: "#picks", label: "Sale", sale: true },
      { href: "#visit", label: "Our store" },
      { href: "#journal", label: "Journal" },
    ],
    mega: [
      { title: "Womenswear", links: [{ href: "#new-in", label: "New in" }, { href: "#shop", label: "Dresses" }, { href: "#shop", label: "Knitwear" }, { href: "#shop", label: "Denim" }, { href: "#shop", label: "Trousers" }] },
      { title: "Menswear", links: [{ href: "#shop", label: "Shirts" }, { href: "#shop", label: "Knitwear" }, { href: "#shop", label: "Jeans" }, { href: "#shop", label: "Outerwear" }] },
      { title: "Shoes & bags", links: [{ href: "#shop", label: "Trainers" }, { href: "#shop", label: "Boots" }, { href: "#shop", label: "Flats" }, { href: "#shop", label: "Bags" }] },
      { title: "Shop by", links: [{ href: "#picks", label: "Under [£50]" }, { href: "#picks", label: "Sale" }, { href: "#new-in", label: "Back in stock" }, { href: "#visit", label: "In store only" }] },
    ],
    utilities: { saved: "Saved items", bag: "Bag" },
  },

  hero: {
    label: "Featured collections",
    prev: "Previous slide",
    next: "Next slide",
    pause: "Stop the slideshow changing by itself",
    slides: [
      {
        lines: ["Everything new,", "all in one place"],
        lead: "Fresh in this week — knitwear, denim and the trousers everyone asks us about.",
        ctas: [{ href: "#new-in", label: "Shop new in" }, { href: "#explore", label: "Shop men" }],
        side: "right",
        image: { src: hero1, alt: "A model in an oversized sage-green hoodie and black trousers against a pale studio backdrop." },
      },
      {
        eyebrow: "New collection",
        lines: ["Good clothes,", "fairly priced"],
        lead: "Pieces we buy in small runs from makers we have met, in sizes we actually keep in stock.",
        ctas: [{ href: "#explore", label: "Shop the collection" }],
        side: "left",
        image: { src: hero2, alt: "Two models in neutral tailoring — a cream oversized blazer and a camel knit — against a blush studio backdrop." },
      },
    ],
  },

  categories: {
    title: "Shop by category",
    lead: "Five rails, and everything on them is in the shop as well as online.",
    items: [
      { label: "Knitwear", href: "#shop", image: { src: catKnitwear, alt: "A model wearing an oversized mustard-yellow knitted jumper." } },
      { label: "Dresses", href: "#shop", image: { src: catDresses, alt: "A model wearing a crisp white cotton poplin shirt dress." } },
      { label: "Shoes", href: "#shop", image: { src: catShoes, alt: "A pair of white and black leather low-top trainers side by side." } },
      { label: "Bags", href: "#shop", image: { src: catBags, alt: "A tan leather shoulder bag with a simple flap and silver clasp." } },
      { label: "Denim", href: "#shop", image: { src: catDenim, alt: "A folded pair of mid-blue straight-leg jeans." } },
    ],
  },

  arrivals: {
    title: "New in this week",
    lead: "Eight pieces that landed in the last seven days.",
    cta: { href: "#shop", label: "View all new in" },
    note: "Product names, prices, stock labels and colourways in this template are placeholders. Replace every one with your own catalogue before launch.",
    products: ARRIVALS,
  },

  explore: {
    title: "There’s more to explore",
    tiles: [
      { label: "Women", href: "#shop", tall: true, image: { src: exploreWomen, alt: "A sage-green satin wrap dress with a tied waist belt." } },
      { label: "Men", href: "#shop", tall: true, image: { src: exploreMen, alt: "A man in a pale blue denim overshirt and black cap, seated against a plain wall." } },
      { label: "Shoes", href: "#shop", tall: false, image: { src: exploreShoes, alt: "Bright orange pointed-toe slingback heels on a pale concrete floor." } },
      { label: "Accessories", href: "#shop", tall: false, image: { src: exploreAccessories, alt: "A small black leather crossbody bag against tan canvas workwear trousers." } },
    ],
  },

  stockists: {
    title: "Brands we stock",
    note: "Every name here is a placeholder. List only labels you actually stock and are permitted to name, or delete the strip.",
    items: ["[Label one]", "[Label two]", "[Label three]", "[Label four]", "[Label five]", "[Label six]"],
  },

  picks: {
    title: "This month’s picks",
    lead: "Chosen by the people behind the counter.",
    cta: { href: "#shop", label: "View all" },
    products: PICKS,
  },

  store: {
    title: "Come and try it on",
    lead: "Everything online is on the rails in the shop. If you want something put aside to try, call or email and we will keep it behind the counter for 48 hours.",
    image: { src: store, alt: "The inside of the shop: a pine clothing rail, a wooden counter and daylight through the shopfront window." },
    address: ["[12 Example Street]", "[Northern Quarter]", "[Manchester M1 1AA]"],
    phone: "[+44 161 496 0000]",
    email: "[hello@store.example]",
    hours: [
      { day: "Monday to Friday", open: "[10:00 – 18:00]" },
      { day: "Saturday", open: "[09:30 – 18:00]" },
      { day: "Sunday", open: "[11:00 – 17:00]" },
      { day: "Bank holidays", open: "[11:00 – 16:00]" },
    ],
    note: "Stock shown online is updated [daily] and is not a live figure. Call before travelling for a particular size.",
    directions: { href: "https://www.openstreetmap.org/", label: "Get directions" },
    cta: { href: "#visit", label: "Call the shop" },
  },

  journal: {
    title: "From the shop floor",
    lead: "What we are wearing, what just landed, and how to look after it.",
    cta: { href: "#journal", label: "Read the journal" },
    items: [
      {
        date: "2026-03-04",
        title: "Five ways we are wearing the cargo trouser",
        excerpt: "The trouser that sold out twice, and what the team puts with it.",
        image: { src: journal1, alt: "Three friends laughing together on a seafront promenade in summer clothes." },
        href: "#journal",
      },
      {
        date: "2026-02-19",
        title: "Work clothes that are not a suit",
        excerpt: "A fortnight of outfits from the shop, none of which involve a blazer.",
        image: { src: journal2, alt: "Two women talking across a table in a bright modern cafe." },
        href: "#journal",
      },
      {
        date: "2026-02-02",
        title: "How to make linen last a decade",
        excerpt: "Washing, drying and storing — the short version we give over the counter.",
        image: { src: journal3, alt: "A woman seated on a pale rock in open grassland at golden hour." },
        href: "#journal",
      },
    ],
  },

  trust: {
    items: [
      { icon: "van", title: "Free local delivery", text: "On orders over [£50] within [postcode area]" },
      { icon: "bag", title: "Collect in store", text: "Order by [3pm], collect the same day" },
      { icon: "arrows", title: "[30]-day returns", text: "In store or by post, unworn with tags" },
      { icon: "lock", title: "Secure checkout", text: "Card and wallet payments, handled by [provider]" },
    ],
  },

  newsletter: {
    title: "First look at what lands",
    text: "One email a week: what arrived, what is left in your size, and when the sale starts. No more than that.",
    label: "Your email address",
    placeholder: "you@example.com",
    submit: "Sign up",
    confirm: "Thank you — check your inbox to confirm.",
    error: "Enter an email address so we can send it to the right place.",
    consent: "We use your address for the shop newsletter only, and you can unsubscribe from any email.",
    privacy: { href: "/privacy", label: "Privacy policy" },
  },

  footer: {
    blurb: "An independent clothing shop in [Manchester]. We buy in small runs, keep a full size range on the rails, and will happily order the size we have not got.",
    columns: [
      {
        title: "Shop",
        links: [
          { href: "#new-in", label: "New in" },
          { href: "#explore", label: "Collections" },
          { href: "#picks", label: "Sale" },
          { href: "#shop", label: "Gift cards" },
        ],
      },
      {
        title: "Help",
        links: [
          { href: "/delivery", label: "Delivery" },
          { href: "/returns", label: "Returns and exchanges" },
          { href: "/sizing", label: "Size guide" },
          { href: "#visit", label: "Contact us" },
        ],
      },
      {
        title: "Our store",
        links: [
          { href: "#visit", label: "Opening hours" },
          { href: "#visit", label: "Find us" },
          { href: "#journal", label: "Journal" },
          { href: "/careers", label: "Work with us" },
        ],
      },
    ],
    socialTitle: "Follow",
    socials: [
      { href: "https://www.instagram.com/", label: "Instagram" },
      { href: "https://www.facebook.com/", label: "Facebook" },
      { href: "https://www.tiktok.com/", label: "TikTok" },
    ],
    paymentsTitle: "We accept",
    payments: ["[Card]", "[Wallet]", "[Buy now, pay later]"],
    paymentsNote: "Replace these with the payment methods your checkout actually accepts, using each provider’s own licensed mark.",
    legal: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/returns", label: "Returns policy" },
      { href: "/accessibility", label: "Accessibility" },
    ],
    copyrightName: "[Store name] Ltd",
    copyrightYear: 2026,
  },

  bag: {
    title: "Your bag",
    empty: "Your bag is empty. Add something from the rails and it will show up here.",
    emptyCta: { href: "#new-in", label: "Shop new in" },
    subtotal: "Subtotal",
    delivery: "Delivery and any discount are worked out at checkout.",
    checkout: "Go to checkout",
    checkoutNote: "This template has no checkout behind it. Wire this button to your e-commerce platform before launch — nothing here takes a payment.",
    remove: "Remove",
    qty: "Quantity",
    close: "Close bag",
    continue: "Continue shopping",
  },
};
