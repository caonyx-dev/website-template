import { content as c } from "@/templates/logistics/content";
import Nav from "@/templates/logistics/components/Nav";
import Hero from "@/templates/logistics/components/Hero";
import Logos from "@/templates/logistics/components/Logos";
import Services from "@/templates/logistics/components/Services";
import Marquee from "@/templates/logistics/components/Marquee";
import About from "@/templates/logistics/components/About";
import Tonnage from "@/templates/logistics/components/Tonnage";
import TrackBand from "@/templates/logistics/components/TrackBand";
import Stats from "@/templates/logistics/components/Stats";
import ServiceTabs from "@/templates/logistics/components/ServiceTabs";
import Steps from "@/templates/logistics/components/Steps";
import GalleryCarousel from "@/templates/logistics/components/GalleryCarousel";
import Crew from "@/templates/logistics/components/Crew";
import Quote from "@/templates/logistics/components/Quote";
import Footer from "@/templates/logistics/components/Footer";
import ActionBar from "@/templates/logistics/components/ActionBar";

export default function LogisticsHome() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:bg-primary focus:px-4 focus:py-2.5 focus:text-(--t-on-primary)">Skip to content</a>
      <Nav brand={c.brand} utility={c.utility} nav={c.nav} />
      <main id="main" tabIndex={-1} className="scroll-mt-[112px]">
        <Hero h={c.hero} />
        <Logos l={c.logos} />
        <Services s={c.services} />
        <Marquee m={c.marquee} />
        <About a={c.about} />
        <Tonnage t={c.tonnage} />
        <TrackBand t={c.track} />
        <Stats s={c.stats} />
        <ServiceTabs t={c.tabs} />
        <Steps s={c.steps} />
        <GalleryCarousel g={c.gallery} />
        <Crew c={c.crew} />
        <Quote q={c.quote} />
      </main>
      <Footer brand={c.brand} f={c.footer} />
      <ActionBar cta={c.nav.cta} phone={c.utility.phone} />
    </>
  );
}
