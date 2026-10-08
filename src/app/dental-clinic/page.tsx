import { content as c } from "@/templates/dental-clinic/content";
import Header from "@/templates/dental-clinic/components/Header";
import Hero from "@/templates/dental-clinic/components/Hero";
import Welcome from "@/templates/dental-clinic/components/Welcome";
import Services from "@/templates/dental-clinic/components/Services";
import Team from "@/templates/dental-clinic/components/Team";
import Band from "@/templates/dental-clinic/components/Band";
import Gallery from "@/templates/dental-clinic/components/Gallery";
import Testimonials from "@/templates/dental-clinic/components/Testimonials";
import News from "@/templates/dental-clinic/components/News";
import Appointment from "@/templates/dental-clinic/components/Appointment";
import OfficeStrip from "@/templates/dental-clinic/components/OfficeStrip";
import Footer from "@/templates/dental-clinic/components/Footer";

export default function DentalClinicHome() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:bg-primary focus:px-4 focus:py-2.5 focus:text-ink">Skip to content</a>
      <Header brand={c.brand} topbar={c.topbar} nav={c.nav} />
      <main id="main">
        <Hero h={c.hero} />
        <Welcome w={c.welcome} />
        <Services s={c.services} />
        <Team t={c.team} />
        <Band b={c.band} />
        <Gallery g={c.gallery} />
        <Testimonials t={c.testimonials} />
        <News n={c.news} />
        <Appointment a={c.appointment} />
        <OfficeStrip o={c.office} />
      </main>
      <Footer brand={c.brand} f={c.footer} />
    </>
  );
}
