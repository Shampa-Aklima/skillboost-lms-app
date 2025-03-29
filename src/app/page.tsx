import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Features from "./components/Features";
import Hero from "./components/Hero";
import PartnerLogos from "./components/PartnerLogos";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Welcome from "./components/Welcome";


export default function Home() {
  return (
    <div >
      <Hero/>
      <PartnerLogos/>
      <Welcome/>
      <Features/>
      <Courses/>
      <Contact/>
       <Pricing/>
     <Testimonials/>

    </div>
  );
}
