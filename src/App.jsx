import Navigation from "./components/Navigation";
import BookingForm from "./sections/BookingForm";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import VehiclesInformation from "./sections/VehiclesInformation";

export default function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Services />
      <VehiclesInformation />
    </div>
  )
}


