import Image from "next/image"
import { Star, Clock, Users } from "lucide-react"
import type { CourseType } from "../types"

// Define a simple utility function for conditional class names
function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ")
}

interface CourseCardProps {
  course: CourseType
}

export default function CourseCard({ course }: CourseCardProps): JSX.Element {
  const { title, instructor, level, duration, rating, students, image } = course

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div className="inline-flex items-center rounded-full border border-purple-200 px-2.5 py-0.5 text-xs font-semibold text-purple-700 bg-purple-50">
            {level}
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4">Instructor: {instructor}</p>
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {duration}
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {students.toLocaleString()} students
          </div>
        </div>
        
      </div>
    </div>
  )
}

