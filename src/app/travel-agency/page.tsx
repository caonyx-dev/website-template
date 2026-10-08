import { content as c } from "@/templates/travel-agency/content";
import Nav from "@/templates/travel-agency/components/Nav";
import Hero from "@/templates/travel-agency/components/Hero";
import Enquiry from "@/templates/travel-agency/components/Enquiry";
import Trust from "@/templates/travel-agency/components/Trust";
import WorldBand from "@/templates/travel-agency/components/WorldBand";
import Reasons from "@/templates/travel-agency/components/Reasons";
import WordBand from "@/templates/travel-agency/components/WordBand";
import Destinations from "@/templates/travel-agency/components/Destinations";
import Journal from "@/templates/travel-agency/components/Journal";
import Gallery from "@/templates/travel-agency/components/Gallery";
import Quote from "@/templates/travel-agency/components/Quote";
import Stats from "@/templates/travel-agency/components/Stats";
import Cta from "@/templates/travel-agency/components/Cta";
import Footer from "@/templates/travel-agency/components/Footer";

export default function TravelAgencyHome() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-(--t-primary-deep) focus:px-6 focus:py-3 focus:text-(--t-on-primary)">Skip to content</a>
      <Nav brand={c.brand} nav={c.nav} />
      <main id="main" tabIndex={-1}>
        <Hero h={c.hero} />
        <Enquiry e={c.enquiry} />
        <Trust t={c.trust} />
        <WorldBand w={c.world} />
        <Reasons r={c.reasons} />
        <WordBand b={c.band} />
        <Destinations d={c.destinations} />
        <Journal j={c.journal} />
        <Gallery g={c.gallery} />
        <Quote q={c.quote} />
        <Stats s={c.stats} />
        <Cta c={c.cta} />
      </main>
      <Footer brand={c.brand} f={c.footer} />
    </>
  );
}
