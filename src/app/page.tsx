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
    <div>
      <Hero 
        variant="home"
        title="Welcome to the online Learning Center"
        subtitle="Education Solution"
        description="Discover our comprehensive online learning platform designed to help you achieve your educational goals. Join thousands of students worldwide in their learning journey."
        imageSrc="/hero1.png"
      />
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
