import PartnerLogos from "../components/PartnerLogos";
import { Input } from "../components/ui/input";
import Image from "next/image";
import Courses from "../components/Courses";
import Contact from "../components/Contact";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/BlogSection";
import { blogPosts } from "../types/blogData";

const page = () => {
  return (
    <div className="min-h-screen w-full mx-auto">
      <div className="py-26 relative bg-[#170F2F] w-full h-150">
        <div className="container py-16">
          <div className="flex flex-col items-center justify-center relative">
            <p className="text-white text-xl">Welcome to our LMS</p>
            <h1 className="text-white text-5xl leading-relaxed font-bold">
              Massive Courses
              <br />
              Education Solution
            </h1>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <Image src="/heroimg.png" alt="logo" width={300} height={500} />
            </div>
            <div className="relative flex justify-center">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="AI-Powered Search: Discover the Perfect Course for You"
                  className="w-[876px] h-[58px] rounded-full pl-6 pr-32 bg-white"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#5F2DED] text-white px-8 py-3 rounded-full flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-10 text-white list-none">
            <li>More than 2k Courses </li>
            <li>1.1k Free Courses</li>
            <li>150+ Instructors</li>
          </div>
        </div>
        <div className="mt-10 w-[90%] mx-auto">
          <PartnerLogos />
        </div>
      </div>

      <Courses variant="simple" />
      <Contact/>
      <Pricing/>
      <Testimonials/>
      <BlogSection posts={blogPosts} />
    </div>
  );
};

export default page;
