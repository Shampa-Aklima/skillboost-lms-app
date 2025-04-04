import Container from "./Container";
import CourseCard from "./CourseCard";
import type { CourseType } from "../types";

const courses: CourseType[] = [
  {
    id: 1,
    title: "Learn Essentials of User Interface Design in Figma",
    instructor: "Jhon Sina",
    level: "Fresh",
    duration: "2 hours 40 minutes",
    rating: 4.0,
    students: 2,
    image: "/course-1.jpg",
    lessons: 3
  },
  {
    id: 2,
    title: "Designer Essential Skills You Must Need To Know",
    instructor: "Jhon Sina",
    level: "Marketing",
    duration: "5 hours 35 minutes",
    rating: 4.0,
    students: 2,
    image: "/course-2.jpg",
    lessons: 5
  },
  {
    id: 3,
    title: "Python for Data Science & Machine Learning",
    instructor: "Jhon Sina",
    level: "Language",
    duration: "3 hours 35 minutes",
    rating: 4.0,
    students: 2,
    image: "/course-3.jpg",
    lessons: 6
  }
];

interface CoursesProps {
  variant?: 'default' | 'simple'
}

export default function Courses({ variant = 'default' }: CoursesProps) {
  if (variant === 'simple') {
    return (
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <span className="bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium">
              Course List
            </span>
            <h2 className="text-4xl font-bold mt-4 text-gray-800">
              Perfect Online Course
              <br />
              For Your Career
            </h2>
          </div>

          {/* Course Filter Tabs */}
          <div className="flex justify-center gap-8 mb-12">
            <button className="text-gray-600 hover:text-purple-600 font-medium">All</button>
            <button className="text-gray-600 hover:text-purple-600 font-medium">Artificial</button>
            <button className="text-gray-600 hover:text-purple-600 font-medium">Featured</button>
            <button className="text-gray-600 hover:text-purple-600 font-medium">Language</button>
            <button className="text-gray-600 hover:text-purple-600 font-medium">Marketing</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} variant="simple" />
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="flex justify-between">
          <div className="text-start max-w-3xl mb-16 p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect Online Course
              <br />
              For Your Career
            </h2>
            <p className="text-xm text-gray-600">
              Explore our most sought-after courses and start your learning
              journey today
            </p>
          </div>

          <div className="flex flex-wrap mb-10 mt-8">
            <div className="flex justify-between gap-8 overflow-x-auto space-x-2 pb-2 max-w-full">
              <button className="text-sm font-medium text-black">See All</button>
              <button className="text-sm font-medium text-black">Data Science</button>
              <button className="text-sm font-medium text-black">Engineering</button>
              <button className="text-sm font-medium text-black">Featured</button>
              <button className="text-sm font-medium text-black">Architecture</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} variant="default" />
          ))}
        </div>
      </Container>
    </section>
  );
}
