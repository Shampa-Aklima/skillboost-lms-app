import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Features from "./components/Features";
import Hero from "./components/Hero";
import PartnerLogos from "./components/PartnerLogos";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Welcome from "./components/Welcome";
import BlogSection from "./components/BlogSection";
import { blogPosts } from "./types/blogData";

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Hero />
      <PartnerLogos />
      <Welcome />
      <Features />
      <Courses />
      <Contact />
      <Pricing />
      <Testimonials />
      <BlogSection posts={blogPosts} />
    </div>
  );
}
