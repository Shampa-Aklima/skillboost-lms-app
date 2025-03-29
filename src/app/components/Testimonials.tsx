import type React from "react";
import Container from "./Container";
import TestimonialCard from "./TestimonialCard";
import { QuoteIcon } from "./Icon";
import type { TestimonialType } from "../types";

const testimonials: TestimonialType[] = [
  {
    id: 1,
    content:
      "SkillBoost transformed my career. The courses are comprehensive and the instructors are top-notch. I landed my dream job after completing just two courses!",
    author: "Emily Chen",
    position: "Software Developer",
    avatar: "/testimo1.png",
  },
  {
    id: 2,
    content:
      "As a business owner, I needed to upskill my team quickly. SkillBoost's enterprise plan was perfect for our needs, with custom learning paths and excellent tracking tools.",
    author: "Marcus Johnson",
    position: "CEO, TechStart Inc.",
    avatar: "/testimo1.png",
  },
];

export default function Testimonials(): React.ReactElement {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-5 mr-6 mt-10">
            <div className="w-1/3  bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium">
              Populer Subject
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What They Say About us
            </h2>
            <p className="text-gray-600 text-lg">
              Construction is a general term meaning the art and science to form
              systems organizations and comes from Latin Construction is
            </p>

            <button className="w-[165px] h-[49px] rounded-lg bg-[#F2277E] text-white">
              Explore More{" "}
            </button>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
