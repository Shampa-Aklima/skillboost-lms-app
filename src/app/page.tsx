import Contact from "./components/Contact";
import Hero from "./components/Hero";
import PartnerLogos from "./components/PartnerLogos";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Welcome from "./components/Welcome";
import BlogSection from "./components/BlogSection";
import { blogPosts } from "./types/blogData";
import CourseList from "./components/CourseList";

export default function Home() {
  return (
    <div>
      <Hero 
        variant="home"
        title="Welcome to the online Learning Center"
        subtitle="Education Solution"
        description="Discover our comprehensive online learning platform designed to help you achieve your educational goals. Join thousands of students worldwide in their learning journey."
        imageSrc="/hero1.png"
         backgroundImageSrc="/hero2.png"
      />
      <PartnerLogos limit={5} />
      <Welcome />
      <CourseList variant="home" />
      <Contact />
      <Pricing />
      <Testimonials />
      <BlogSection posts={blogPosts} />
    </div>
  );
}

