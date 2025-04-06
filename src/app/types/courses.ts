import type { CourseType } from "./index";

const courses: CourseType[] = [
  {
    id: 1,
    title: "React for Beginners",
    instructor: "John Doe",
    level: "Beginner",
    duration: "10h",
    rating: 4.5,
    students: 25,
    image: "/images/react-course.jpg",
    lessons: 25
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    instructor: "Jane Smith",
    level: "Advanced",
    duration: "12h",
    rating: 4.7,
    students: 30,
    image: "/images/js-course.jpg",
    lessons: 30
  },
  {
    id: 3,
    title: "UI/UX Design Basics",
    instructor: "Sara Lee",
    level: "Beginner",
    duration: "8h",
    rating: 4.3,
    students: 20,
    image: "/images/uiux.jpg",
    lessons: 20
  },
  {
    id: 4,
    title: "Fullstack Web Dev",
    instructor: "Tom Hardy",
    level: "Advanced",
    duration: "15h",
    rating: 4.8,
    students: 40,
    image: "/images/fullstack.jpg",
    lessons: 40
  },
  {
    id: 5,
    title: "Photography Masterclass",
    instructor: "Linda Chan",
    level: "Intermediate",
    duration: "9h",
    rating: 4.4,
    students: 22,
    image: "/images/photo.jpg",
    lessons: 22
  },
  {
    id: 6,
    title: "Data Science Bootcamp",
    instructor: "Mike Wang",
    level: "Advanced",
    duration: "18h",
    rating: 4.9,
    students: 50,
    image: "/images/datascience.jpg",
    lessons: 50
  },
  {
    id: 7,
    title: "Intro to Python",
    instructor: "Emily Rose",
    level: "Beginner",
    duration: "6h",
    rating: 4.2,
    students: 18,
    image: "/images/python.jpg",
    lessons: 18
  },
  {
    id: 8,
    title: "Next.js Crash Course",
    instructor: "Robert Paul",
    level: "Intermediate",
    duration: "7h",
    rating: 4.6,
    students: 21,
    image: "/images/nextjs.jpg",
    lessons: 21
  },
  {
    id: 9,
    title: "Figma for UI Design",
    instructor: "Anna Bell",
    level: "Beginner",
    duration: "5h",
    rating: 4.1,
    students: 16,
    image: "/images/figma.jpg",
    lessons: 16
  }
];

export default courses;
