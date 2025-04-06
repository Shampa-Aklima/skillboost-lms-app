// components/CourseList.tsx
import CourseCard from "./CourseCard";
import courses from "../types/courses";

type Props = {
  variant?: "home" | "about" | "all"; // props type
};

const CourseList = ({ variant = "all" }: Props) => {
  const visibleCourses =
    variant === "home"
      ? courses.slice(0, 5)
      : variant === "about"
      ? courses.slice(6, 9)
      : courses;

  return (
    <div className="container w-[80%] mx-auto"> 
      <div className="grid grid-cols-3 gap-4">
        {visibleCourses.map((course, i) => (
          <CourseCard key={i} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
