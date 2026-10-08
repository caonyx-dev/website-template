import { content as c } from "@/templates/hotel/content";
import Nav from "@/templates/hotel/components/Nav";
import Hero from "@/templates/hotel/components/Hero";
import Booking from "@/templates/hotel/components/Booking";
import Welcome from "@/templates/hotel/components/Welcome";
import Facilities from "@/templates/hotel/components/Facilities";
import Testimonials from "@/templates/hotel/components/Testimonials";
import Rooms from "@/templates/hotel/components/Rooms";
import Figures from "@/templates/hotel/components/Figures";
import VideoBand from "@/templates/hotel/components/VideoBand";
import Instagram from "@/templates/hotel/components/Instagram";
import Footer from "@/templates/hotel/components/Footer";

export default function HotelHome() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:bg-primary focus:px-4 focus:py-2.5 focus:text-white">Skip to content</a>
      <Nav brand={c.brand} nav={c.nav} />
      <main id="main" className="scroll-mt-20">
        <Hero h={c.hero} />
        <Booking b={c.booking} />
        <Welcome w={c.welcome} />
        <Facilities f={c.facilities} />
        <Testimonials t={c.testimonials} />
        <Rooms r={c.rooms} />
        <Figures f={c.figures} />
        <VideoBand v={c.video} />
        <Instagram i={c.instagram} />
      </main>
      <Footer brand={c.brand} f={c.footer} />
    </>
  );
}
