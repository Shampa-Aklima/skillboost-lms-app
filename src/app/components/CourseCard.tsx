import Image from "next/image"
import { Star, Clock, Users } from "lucide-react"
import type { CourseType } from "../types"

interface CourseCardProps {
  course: CourseType
  variant?: 'default' | 'simple'
}

export default function CourseCard({ course, variant = 'default' }: CourseCardProps) {
  const { title, instructor, level, duration, rating, students, image, lessons } = course

  if (variant === 'simple') {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative">
          <span className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
            {level}
          </span>
          <Image 
            src={image} 
            alt={title} 
            width={400} 
            height={250} 
            className="w-full h-[200px] object-cover" 
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            <div className="flex items-center">
              <span>{lessons} Lessons</span>
              <span className="mx-2">•</span>
              <span>{duration}</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="flex items-center justify-between mt-4">
            <span className="text-purple-600 font-bold">${(lessons * 20).toFixed(2)}</span>
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">{rating}</span>
              <span className="text-gray-400">({students})</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

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

