import Navigation from "./components/Navigation";
import BookingForm from "./sections/BookingForm";
import Deals from "./sections/Deals";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import SloganDivider from "./sections/SloganDivider";
import Testimonials from "./sections/Testimonials";
import VehiclesInformation from "./sections/VehiclesInformation";

export default function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Services />
      <VehiclesInformation />
      <SloganDivider />
      <Deals />
      <Faq />
      <Testimonials />
      <Footer />
    </div>
  )
}


