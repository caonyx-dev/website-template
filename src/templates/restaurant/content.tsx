// Restaurant homepage content in the language of the Soul Kitchen reference (see the DESIGN.md revision), told
// in this template's own voice: a dark contact strip, a split hero, three entry cards, the story, the chef band,
// a philosophy line, three tall tiles, the food menu with tabs and dotted price leaders, a gallery, the drink
// menu, the reservation band, private dining and a dark footer. [Square brackets] are placeholders to replace.
import type { Img, LinkItem } from "@/lib/content";
import hero from "../../../templates/restaurant/assets/hero.jpg";
import cardAbout from "../../../templates/restaurant/assets/card-about.jpg";
import cardSpecial from "../../../templates/restaurant/assets/card-special.jpg";
import cardNews from "../../../templates/restaurant/assets/card-news.jpg";
import chef from "../../../templates/restaurant/assets/chef.jpg";
import chefVeg from "../../../templates/restaurant/assets/chef-veg.jpg";
import chefPlating from "../../../templates/restaurant/assets/chef-plating.jpg";
import tileTea from "../../../templates/restaurant/assets/tile-tea.jpg";
import tileDessert from "../../../templates/restaurant/assets/tile-dessert.jpg";
import tileBar from "../../../templates/restaurant/assets/tile-bar.jpg";
import dishA from "../../../templates/restaurant/assets/dish-a.jpg";
import dishB from "../../../templates/restaurant/assets/dish-b.jpg";
import gallery1 from "../../../templates/restaurant/assets/gallery-1.jpg";
import gallery2 from "../../../templates/restaurant/assets/gallery-2.jpg";
import gallery3 from "../../../templates/restaurant/assets/gallery-3.jpg";
import room from "../../../templates/restaurant/assets/room.jpg";

export type Dish = { name: string; price: string; text?: string; tags?: string[]; badge?: string };
export type MenuPanel = { id: string; label: string; note: string; left: Dish[]; right: Dish[]; card: { title: string; text: string; items: Dish[] } };
export type DrinkPanel = { id: string; label: string; note: string; columns: { heading: string; unitA: string; unitB: string; rows: { name: string; detail: string; a: string; b: string }[] }[] };

export type RestaurantContent = {
  brand: string;
  topbar: { address: string; phone: string; email: string; socials: LinkItem[] };
  nav: { left: LinkItem[]; right: LinkItem[]; cta: LinkItem };
  hero: { label: string; eyebrow: string; title: string; lead: string; cta: LinkItem; secondary: LinkItem; image: Img };
  hoursStrip: { items: { day: string; service: string; time: string }[] };
  entryCards: { eyebrow: string; title: string; text: string; cta: string; href: string; image: Img }[];
  story: { eyebrow: string; title: string; paras: string[]; cta: LinkItem };
  chef: { label: string; eyebrow: string; title: string; paras: string[]; signature: string; role: string; cta: LinkItem; image: Img; detailA: Img; detailB: Img };
  philosophy: { quote: string; attribution: string };
  tiles: { title: string; text: string; image: Img }[];
  food: { eyebrow: string; title: string; lead: string; panels: MenuPanel[]; photos: Img[]; allergen: string; cta: LinkItem };
  gallery: { eyebrow: string; title: string; items: Img[] };
  drinks: { eyebrow: string; title: string; lead: string; panels: DrinkPanel[]; note: string };
  reserve: { eyebrow: string; title: string; lead: string; form: { date: string; time: string; guests: string; name: string; phone: string; notes: string; submit: string; confirm: string }; times: string[]; sizes: string[]; location: { title: string; lines: string[]; phone: string; email: string; transport: string; mapHref: string; mapLabel: string }; image: Img };
  privateDining: { eyebrow: string; title: string; lead: string; items: { title: string; seats: string; text: string; from: string }[]; cta: LinkItem };
  footer: { blurb: string; columns: { title: string; lines?: string[]; links?: LinkItem[] }[]; legal: LinkItem[]; copyright: string };
};

export const content: RestaurantContent = {
  brand: "[Restaurant]",

  topbar: {
    address: "[12 Harbour Lane, City]",
    phone: "[+1 (555) 014 0199]",
    email: "[hello@restaurant.example]",
    socials: [
      { href: "https://instagram.com/", label: "Instagram" },
      { href: "https://facebook.com/", label: "Facebook" },
      { href: "https://www.google.com/maps", label: "Maps" },
    ],
  },

  nav: {
    left: [
      { href: "#menu", label: "Menu" },
      { href: "#story", label: "Our story" },
      { href: "#gallery", label: "Gallery" },
    ],
    right: [
      { href: "#drinks", label: "Drinks" },
      { href: "#private", label: "Private dining" },
      { href: "#find-us", label: "Find us" },
    ],
    cta: { href: "#reserve", label: "Book a table" },
  },

  hero: {
    label: "Welcome",
    eyebrow: "Kitchen and bar, since [2014]",
    title: "A short menu, cooked the long way",
    lead: "We write the menu each morning around what the growers and the boats actually sent. Twenty-eight seats, an open pass, and a wine list you can read in a minute.",
    cta: { href: "#menu", label: "View the menu" },
    secondary: { href: "#reserve", label: "Book a table" },
    image: { src: hero, alt: "A cast-iron bowl of crisp golden flatbread shards on a weathered wood table, spice dust falling through the light" },
  },

  hoursStrip: {
    items: [
      { day: "Tuesday to Thursday", service: "Dinner", time: "5:30pm – 10:00pm" },
      { day: "Friday and Saturday", service: "Lunch and dinner", time: "12:00pm – 11:00pm" },
      { day: "Sunday", service: "Long lunch", time: "12:00pm – 5:00pm" },
    ],
  },

  entryCards: [
    { eyebrow: "The room", title: "Twenty-eight seats and an open pass", text: "A narrow room with a counter down one side. Book the counter if you like watching the cooking.", cta: "See the room", href: "#story", image: { src: cardAbout, alt: "A rustic crisp flatbread on a dark plate with black chopsticks resting across it" } },
    { eyebrow: "This week", title: "The chef’s table, Thursdays", text: "Six seats, one seating, seven courses decided on the day. Reserved a fortnight ahead.", cta: "Book the chef’s table", href: "#reserve", image: { src: cardSpecial, alt: "A row of fresh spring rolls lined up on a wooden board" } },
    { eyebrow: "In season", title: "Shellfish from [the north coast]", text: "Landed on Tuesday and Friday mornings, on the board by that evening’s service.", cta: "See this week’s board", href: "#menu", image: { src: cardNews, alt: "A pale ceramic bowl of glazed prawns topped with fine red chilli threads and sesame" } },
  ],

  story: {
    eyebrow: "Our story",
    title: "A neighbourhood kitchen that never grew up",
    paras: [
      "We opened in [2014] with one cook, a second-hand oven and a list of five growers. The list is longer now, the oven is the same, and the idea has not moved: buy well, cook simply, and charge what it costs.",
      "The menu changes most weeks. Some dishes have been on it since the first service because the room would not forgive us for taking them off. Everything else is a conversation between the kitchen and whoever delivered that morning.",
    ],
    cta: { href: "#menu", label: "See what we are cooking" },
  },

  chef: {
    label: "The kitchen",
    eyebrow: "Head chef",
    title: "Cooking that stays out of the ingredient’s way",
    paras: [
      "[Chef name] trained in [city] and spent eight years in kitchens where the produce list was decided by a buyer two floors up. Here the list is decided at the back door at seven in the morning.",
      "The kitchen runs on four stations and no shouting. Everything leaves the pass seasoned once, properly, and goes to the table hot.",
    ],
    signature: "[Chef name]",
    role: "Head chef and co-owner",
    cta: { href: "#private", label: "Cook with us" },
    image: { src: chef, alt: "A chef in a black apron working at a warmly lit restaurant pass, steam rising from bamboo steamers" },
    detailA: { src: chefVeg, alt: "A neat row of green courgettes on a dark textured stone surface" },
    detailB: { src: chefPlating, alt: "Hands plating small black bowls with a spoonful of saffron cream" },
  },

  philosophy: {
    quote: "Three good things on a plate, and the confidence to leave out the fourth.",
    attribution: "[Chef name], head chef",
  },

  tiles: [
    { title: "Tea and infusions", text: "A short list brewed to order, served from cast iron.", image: { src: tileTea, alt: "Golden tea poured from a black cast-iron teapot into a pale cup" } },
    { title: "Desserts", text: "Two on the menu, one on the board, all made that morning.", image: { src: tileDessert, alt: "A pink rose-petal tart on a speckled brown ceramic plate with a brass spoon" } },
    { title: "The bar", text: "Six cocktails, a sherry list and something cold on tap.", image: { src: tileBar, alt: "A tall highball cocktail with lime wheels and mint on a dark stone counter" } },
  ],

  food: {
    eyebrow: "Food menu",
    title: "What we are cooking",
    lead: "Printed fresh each week. If something has sold out by the time you sit down, we will tell you what replaced it and why it is better.",
    cta: { href: "#reserve", label: "Book a table" },
    photos: [
      { src: dishA, alt: "Six pieces of salmon nigiri on a black slate board with pickled ginger and wasabi" },
      { src: dishB, alt: "A dark bowl of grilled aubergine glazed with chilli and sprinkled with sesame and spring onion" },
    ],
    allergen: "Dishes are cooked in a kitchen that handles nuts, gluten, shellfish and dairy. Tell us about an allergy when you book and again when you sit down, and we will cook around it.",
    panels: [
      {
        id: "dinner", label: "Dinner", note: "Served from 5:30pm, Tuesday to Saturday",
        left: [
          { name: "Flatbread, cultured butter", price: "6", text: "Baked to order, five minutes.", tags: ["Vegetarian"] },
          { name: "Hand-dived scallop, brown butter", price: "18", text: "One scallop, seaweed, a spoon of its own juices.", badge: "Chef’s pick" },
          { name: "Grilled aubergine, chilli and sesame", price: "14", text: "Charred over coals, dressed warm.", tags: ["Vegan"] },
          { name: "Cured sea trout, fennel, buttermilk", price: "16", text: "Cured three days with juniper." },
        ],
        right: [
          { name: "Dry-aged sirloin, bone marrow", price: "38", text: "For two, carved at the table. Forty minutes." },
          { name: "Whole turbot, brown shrimp butter", price: "46", text: "Market price some weeks; we will say so.", badge: "To share" },
          { name: "Barley risotto, wild mushrooms", price: "22", text: "Finished with aged sheep’s cheese.", tags: ["Vegetarian"] },
          { name: "Roast chicken, bread sauce", price: "26", text: "Free range from [the valley farm]." },
        ],
        card: {
          title: "Tasting menu", text: "Seven courses, one seating, Thursday to Saturday. The whole table dines together.",
          items: [{ name: "Seven courses", price: "85" }, { name: "With wine pairing", price: "135" }, { name: "Without alcohol", price: "110" }],
        },
      },
      {
        id: "lunch", label: "Lunch", note: "Friday, Saturday and Sunday from midday",
        left: [
          { name: "Soup of the morning", price: "9", text: "Whatever came in; ask and we will tell you.", tags: ["Vegan"] },
          { name: "Steamed dumplings, chilli oil", price: "12", text: "Folded that morning, eight to a basket." },
          { name: "Hot smoked mackerel, beetroot", price: "15", text: "Smoked in-house over oak." },
        ],
        right: [
          { name: "Plate of the day", price: "19", text: "One dish, one price, changes daily.", badge: "Daily" },
          { name: "Flatbread, slow lamb shoulder", price: "21", text: "Pulled, pickled onion, yoghurt." },
          { name: "Garden salad, soft herbs", price: "11", text: "Grown twenty minutes away.", tags: ["Vegan", "Gluten free"] },
        ],
        card: {
          title: "Long lunch", text: "Three courses with a glass, served until 4pm on Sundays. The kitchen chooses.",
          items: [{ name: "Three courses", price: "35" }, { name: "With a glass", price: "44" }, { name: "Children under ten", price: "16" }],
        },
      },
      {
        id: "desserts", label: "Desserts", note: "Also available at the bar until close",
        left: [
          { name: "Rose and almond tart", price: "9", text: "Petals from [the market garden].", tags: ["Vegetarian"] },
          { name: "Burnt honey custard", price: "8", text: "Set that afternoon, served cold." },
        ],
        right: [
          { name: "Dark chocolate, olive oil, salt", price: "9", text: "Bitter, soft and very small.", tags: ["Vegan"] },
          { name: "Cheese, three pieces", price: "14", text: "From [the cheese room], with oat crackers.", badge: "Ask us" },
        ],
        card: {
          title: "After dinner", text: "Something small and strong while the plates are cleared.",
          items: [{ name: "Espresso", price: "3" }, { name: "Aged tawny, 50 ml", price: "9" }, { name: "Single malt, 25 ml", price: "11" }],
        },
      },
    ],
  },

  gallery: {
    eyebrow: "The room",
    title: "An evening here",
    items: [
      { src: gallery1, alt: "A set table with a cream ceramic teapot, a slate board of sushi, a bowl of rice and chopsticks" },
      { src: gallery2, alt: "A hand dusting flour over two stacked bamboo steamer baskets on a dark counter" },
      { src: gallery3, alt: "Fresh dumplings in a bamboo steamer basket with chopsticks lifting one" },
      { src: room, alt: "The dining room at night: dark timber tables set with candles, leather banquettes and warm pendant lights" },
    ],
  },

  drinks: {
    eyebrow: "Drink menu",
    title: "A list you can read in a minute",
    lead: "Thirty-odd bottles, chosen because they go with the food rather than because of the label. Everything by the glass is also sold by the bottle.",
    note: "Corkage is [25] per bottle, two bottles per table. Soft drinks, beer and the full list are on the printed menu.",
    panels: [
      {
        id: "wine", label: "Wine list", note: "Served 125 ml or by the bottle",
        columns: [
          {
            heading: "White and orange", unitA: "Glass", unitB: "Bottle",
            rows: [
              { name: "[Grape], [region]", detail: "Dry, citrus, a little salt", a: "9", b: "38" },
              { name: "[Grape], [region]", detail: "Skin contact, apricot, grippy", a: "12", b: "52" },
              { name: "[Grape], [region]", detail: "Oak, orchard fruit, long", a: "14", b: "62" },
            ],
          },
          {
            heading: "Red and sparkling", unitA: "Glass", unitB: "Bottle",
            rows: [
              { name: "[Grape], [region]", detail: "Light, chilled, red fruit", a: "10", b: "42" },
              { name: "[Grape], [region]", detail: "Structured, savoury, five years old", a: "15", b: "68" },
              { name: "[Producer], brut nature", detail: "Bone dry, bottle fermented", a: "13", b: "58" },
            ],
          },
        ],
      },
      {
        id: "cocktails", label: "Cocktails", note: "Mixed at the bar until thirty minutes before close",
        columns: [
          {
            heading: "With alcohol", unitA: "Single", unitB: "Carafe",
            rows: [
              { name: "House highball", detail: "Lime, mint, something bitter", a: "11", b: "30" },
              { name: "Smoked old fashioned", detail: "Oak, orange, stirred long", a: "13", b: "36" },
              { name: "Sherry spritz", detail: "Dry, salty, very cold", a: "10", b: "28" },
            ],
          },
          {
            heading: "Without alcohol", unitA: "Single", unitB: "Carafe",
            rows: [
              { name: "Seeded lemonade", detail: "Pressed that morning", a: "6", b: "16" },
              { name: "Cold-brewed tea", detail: "Twelve hours, no sugar", a: "6", b: "16" },
              { name: "Verjus and soda", detail: "Sharp, green, clean", a: "7", b: "18" },
            ],
          },
        ],
      },
    ],
  },

  reserve: {
    eyebrow: "Reservations",
    title: "Book a table",
    lead: "We hold a few seats at the counter for walk-ins every service. For anything else, this is the fastest way to reach the book.",
    form: { date: "Date", time: "Time", guests: "Guests", name: "Name", phone: "Phone", notes: "Allergies or anything we should know", submit: "Request a table", confirm: "Thank you. We will confirm by text within the hour." },
    times: ["12:00pm", "12:30pm", "1:00pm", "5:30pm", "6:00pm", "6:30pm", "7:00pm", "7:30pm", "8:00pm", "8:30pm", "9:00pm"],
    sizes: ["1 guest", "2 guests", "3 guests", "4 guests", "5 guests", "6 guests", "7 or more"],
    location: {
      title: "Find us",
      lines: ["[12 Harbour Lane]", "[Old Town, City]", "[AB1 2CD]"],
      phone: "[+1 (555) 014 0199]",
      email: "[hello@restaurant.example]",
      transport: "Five minutes from [Harbour] station. Street parking after 6pm; there is a car park on [Mill Street].",
      mapHref: "https://www.google.com/maps",
      mapLabel: "Open in maps",
    },
    image: { src: room, alt: "The dining room at night: dark timber tables set with candles and warm pendant lights" },
  },

  privateDining: {
    eyebrow: "Private dining",
    title: "The whole room, or part of it",
    lead: "Three ways to take over a corner. Every one is cooked from the same kitchen and priced per head before drinks.",
    items: [
      { title: "The counter", seats: "Up to 6 seated", text: "Six stools at the pass with the kitchen cooking in front of you. One seating, one menu.", from: "From [85] per head" },
      { title: "The back room", seats: "Up to 16 seated", text: "A separate room with its own door, for a long lunch or a dinner that runs late.", from: "From [60] per head" },
      { title: "Exclusive hire", seats: "Up to 40 seated", text: "The whole dining room and bar, with a menu written with you a fortnight ahead.", from: "From [2,400] minimum spend" },
    ],
    cta: { href: "#reserve", label: "Enquire about a date" },
  },

  footer: {
    blurb: "A neighbourhood kitchen on [Harbour Lane]. Short menu, open pass, twenty-eight seats. Walk in for the counter or book the room.",
    columns: [
      { title: "Visit", lines: ["[12 Harbour Lane]", "[Old Town, City]", "[AB1 2CD]"] },
      { title: "Talk", links: [{ href: "tel:+15550140199", label: "[+1 (555) 014 0199]" }, { href: "mailto:hello@restaurant.example", label: "[hello@restaurant.example]" }] },
      { title: "Hours", lines: ["Tue – Thu, 5:30pm – 10:00pm", "Fri – Sat, 12:00pm – 11:00pm", "Sun, 12:00pm – 5:00pm", "Closed Mondays"] },
      { title: "Follow", links: [{ href: "https://instagram.com/", label: "Instagram" }, { href: "https://facebook.com/", label: "Facebook" }, { href: "#private", label: "Private dining" }] },
    ],
    legal: [{ href: "/privacy", label: "Privacy" }, { href: "/terms", label: "Terms" }, { href: "/accessibility", label: "Accessibility" }],
    copyright: "© 2026 [Restaurant]. All rights reserved.",
  },
};
