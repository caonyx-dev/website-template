import { content as c } from "@/templates/restaurant/content";
import Nav from "@/templates/restaurant/components/Nav";
import Hero, { HoursStrip } from "@/templates/restaurant/components/Hero";
import EntryCards from "@/templates/restaurant/components/EntryCards";
import Story from "@/templates/restaurant/components/Story";
import Chef from "@/templates/restaurant/components/Chef";
import Philosophy from "@/templates/restaurant/components/Philosophy";
import Tiles from "@/templates/restaurant/components/Tiles";
import FoodMenu from "@/templates/restaurant/components/FoodMenu";
import Gallery from "@/templates/restaurant/components/Gallery";
import DrinkMenu from "@/templates/restaurant/components/DrinkMenu";
import Reserve from "@/templates/restaurant/components/Reserve";
import PrivateDining from "@/templates/restaurant/components/PrivateDining";
import Footer from "@/templates/restaurant/components/Footer";
import MobileBar from "@/templates/restaurant/components/MobileBar";

export default function RestaurantHome() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:bg-primary focus:px-4 focus:py-2.5 focus:text-white">Skip to content</a>
      <Nav brand={c.brand} top={c.topbar} nav={c.nav} hours={c.hoursStrip} />
      <main id="main" className="scroll-mt-[124px]">
        <Hero h={c.hero} />
        <HoursStrip hours={c.hoursStrip} />
        <EntryCards cards={c.entryCards} />
        <Story s={c.story} />
        <Chef c={c.chef} />
        <Philosophy p={c.philosophy} />
        <Tiles tiles={c.tiles} />
        <FoodMenu m={c.food} />
        <Gallery g={c.gallery} />
        <DrinkMenu m={c.drinks} />
        <Reserve r={c.reserve} />
        <PrivateDining p={c.privateDining} />
      </main>
      <Footer brand={c.brand} f={c.footer} />
      <MobileBar cta={c.nav.cta} phone={c.topbar.phone} />
    </>
  );
}
