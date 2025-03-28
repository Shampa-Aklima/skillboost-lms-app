import Container from "./Container"
import CourseCard from "./CourseCard"
import type { CourseType } from "../types"


const courses: CourseType[] = [
  {
    id: 1,
    title: "Introduction to Web Development",
    instructor: "Sarah Johnson",
    level: "Beginner",
    duration: "8 weeks",
    rating: 4.8,
    students: 1245,
    image: "/course1.png",
  },
  {
    id: 2,
    title: "Advanced Data Science with Python",
    instructor: "Michael Chen",
    level: "Advanced",
    duration: "10 weeks",
    rating: 4.9,
    students: 876,
    image: "/course2.png",
  },
  {
    id: 3,
    title: "Digital Marketing Fundamentals",
    instructor: "Emma Rodriguez",
    level: "Intermediate",
    duration: "6 weeks",
    rating: 4.7,
    students: 1532,
    image: "/course3.png",
  },
  {
    id: 4,
    title: "UX/UI Design Principles",
    instructor: "David Kim",
    level: "Beginner",
    duration: "8 weeks",
    rating: 4.6,
    students: 987,
    image: "/course5.png",
  },
  {
    id: 5,
    title: "Business Leadership & Management",
    instructor: "Jennifer Taylor",
    level: "Intermediate",
    duration: "12 weeks",
    rating: 4.8,
    students: 1123,
    image: "/course5.png",
  },
  {
    id: 6,
    title: "Mobile App Development with React Native",
    instructor: "Alex Patel",
    level: "Advanced",
    duration: "10 weeks",
    rating: 4.9,
    students: 756,
    image: "/course6.png",
  },
]

export default function Courses(): React.ReactElement {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perfect Online
          Course Your Carrer</h2>
          <p className="text-lg text-gray-600">
            Explore our most sought-after courses and start your learning journey today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="mt-16 text-center">
          
        </div>
      </Container>
    </section>
  )
}

