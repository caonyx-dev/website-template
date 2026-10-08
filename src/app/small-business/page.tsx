import { content as c } from "@/templates/small-business/content";
import { LocalTimeProvider } from "@/templates/small-business/components/localtime";
import Nav from "@/templates/small-business/components/Nav";
import Hero from "@/templates/small-business/components/Hero";
import Services from "@/templates/small-business/components/Services";
import About from "@/templates/small-business/components/About";
import BandBlock from "@/templates/small-business/components/BandBlock";
import Stats from "@/templates/small-business/components/Stats";
import Steps from "@/templates/small-business/components/Steps";
import WhyUs from "@/templates/small-business/components/WhyUs";
import Reviews from "@/templates/small-business/components/Reviews";
import Faq from "@/templates/small-business/components/Faq";
import Visit from "@/templates/small-business/components/Visit";
import Booking from "@/templates/small-business/components/Booking";
import News from "@/templates/small-business/components/News";
import OfferBar from "@/templates/small-business/components/OfferBar";
import Footer from "@/templates/small-business/components/Footer";
import StickyBar from "@/templates/small-business/components/StickyBar";

export default function SmallBusinessHome() {
  return (
    // "Open now" and "today" depend on the reader's clock, so they are filled in after mount rather than
    // computed during render — a date read at prerender would bake one moment into the static page.
    <LocalTimeProvider rows={c.hours.rows} timeZone={c.hours.timeZone}>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-(--t-on-primary)">Skip to content</a>
      <Nav brand={c.brand} nav={c.nav} />
      <main id="main" tabIndex={-1}>
        <Hero h={c.hero} />
        <Services s={c.services} />
        <About a={c.about} />
        <BandBlock b={c.bandBlock} />
        <Stats s={c.stats} />
        <Steps s={c.steps} />
        <WhyUs w={c.why} />
        <Reviews r={c.reviews} />
        <Faq f={c.faq} />
        <Visit h={c.hours} />
        <Booking b={c.booking} />
        <News n={c.news} />
      </main>
      <OfferBar o={c.offer} />
      <Footer brand={c.brand} f={c.footer} />
      <StickyBar phone={c.nav.phone} cta={c.nav.cta} s={c.sticky} />
    </LocalTimeProvider>
  );
}
