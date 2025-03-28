import Image from "next/image"
import type { TestimonialType } from "../types"
import type React from "react"

interface TestimonialCardProps {
  testimonial: TestimonialType
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps): React.ReactElement {
  const { content, author, position, avatar } = testimonial

  return (
    <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100">
      <p className="text-gray-700 mb-6 italic">{content}</p>
      <div className="flex items-center">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image src={avatar || "/placeholder.svg"} alt={author} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
    </div>
  )
}

