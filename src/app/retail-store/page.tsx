import { content as c } from "@/templates/retail-store/content";
import { ShopProvider } from "@/templates/retail-store/components/shop";
import PromoStrip from "@/templates/retail-store/components/PromoStrip";
import Nav from "@/templates/retail-store/components/Nav";
import Bag from "@/templates/retail-store/components/Bag";
import Hero from "@/templates/retail-store/components/Hero";
import Categories from "@/templates/retail-store/components/Categories";
import Arrivals from "@/templates/retail-store/components/Arrivals";
import Explore from "@/templates/retail-store/components/Explore";
import Stockists from "@/templates/retail-store/components/Stockists";
import Picks from "@/templates/retail-store/components/Picks";
import Visit from "@/templates/retail-store/components/Visit";
import Journal from "@/templates/retail-store/components/Journal";
import Trust from "@/templates/retail-store/components/Trust";
import Footer from "@/templates/retail-store/components/Footer";
import TabBar from "@/templates/retail-store/components/TabBar";

export default function RetailStoreHome() {
  return (
    // The bag and the saved list are page state, so the whole page sits inside the shop provider. Every section
    // that does not touch that state is still a server component beneath it.
    <ShopProvider>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-5 focus:py-3 focus:text-(--t-on-primary)">Skip to content</a>
      <PromoStrip p={c.promo} />
      <Nav brand={c.brand} nav={c.nav} />
      <main id="main" tabIndex={-1}>
        <Hero h={c.hero} />
        <Categories c={c.categories} />
        <Arrivals a={c.arrivals} />
        <Explore e={c.explore} />
        <Stockists s={c.stockists} />
        <Picks p={c.picks} />
        <Visit s={c.store} />
        <Journal j={c.journal} />
        <Trust t={c.trust} />
      </main>
      <Footer brand={c.brand} f={c.footer} n={c.newsletter} />
      <TabBar nav={c.nav} />
      <Bag b={c.bag} />
    </ShopProvider>
  );
}
