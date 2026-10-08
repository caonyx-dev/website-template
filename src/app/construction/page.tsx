import { content as c } from "@/templates/construction/content";
import TopNav from "@/templates/construction/components/TopNav";
import HeroBand from "@/templates/construction/components/HeroBand";
import TrustRow from "@/templates/construction/components/TrustRow";
import ServicesGrid from "@/templates/construction/components/ServicesGrid";
import Gallery from "@/templates/construction/components/Gallery";
import BeforeAfter from "@/templates/construction/components/BeforeAfter";
import Timeline from "@/templates/construction/components/Timeline";
import Packages from "@/templates/construction/components/Packages";
import Reviews from "@/templates/construction/components/Reviews";
import QuoteBand from "@/templates/construction/components/QuoteBand";
import SiteFooter from "@/templates/construction/components/SiteFooter";

export default function ConstructionHome() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:border-2 focus:border-ink focus:bg-accent focus:px-4 focus:py-2.5 focus:text-on-primary">Skip to content</a>
      <TopNav brand={c.brand} utility={c.utility} nav={c.nav} />
      <main id="main">
        <HeroBand h={c.hero} />
        <TrustRow items={c.trust} />
        <ServicesGrid s={c.services} />
        <Gallery g={c.gallery} />
        <BeforeAfter b={c.beforeAfter} />
        <Timeline t={c.timeline} />
        <Packages p={c.packages} />
        <Reviews r={c.reviews} />
        <QuoteBand q={c.quoteBand} />
      </main>
      <SiteFooter brand={c.brand} f={c.footer} />
    </>
  );
}
