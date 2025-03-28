import type React from "react"
import Container from "./Container"
import TestimonialCard from "./TestimonialCard"
import { QuoteIcon } from "./Icon"
import type { TestimonialType } from "../types"

const testimonials: TestimonialType[] = [
  {
    id: 1,
    content:
      "SkillBoost transformed my career. The courses are comprehensive and the instructors are top-notch. I landed my dream job after completing just two courses!",
    author: "Emily Chen",
    position: "Software Developer",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    content:
      "As a business owner, I needed to upskill my team quickly. SkillBoost's enterprise plan was perfect for our needs, with custom learning paths and excellent tracking tools.",
    author: "Marcus Johnson",
    position: "CEO, TechStart Inc.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function Testimonials(): React.ReactElement {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="text-center mb-12">
          <QuoteIcon className="w-16 h-16 text-purple-200 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What They Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our students and organizations who have transformed their learning journey with SkillBoost
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  )
}

