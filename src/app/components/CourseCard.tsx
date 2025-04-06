import Image from "next/image";
import React from "react";
import type { CourseType } from "../types";

interface CourseCardProps {
  course: CourseType;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition duration-300">
      <Image src={course.image} alt={course.title} width={100} height={100} className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{course.title}</h3>
      <p className="text-sm text-gray-500">{course.instructor}</p>
      <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
        <span>⏱ {course.duration}</span>
        <span>📚 {course.lessons} lessons</span>
      </div>
      <div className="mt-2 font-semibold text-blue-600">Level: {course.level}</div>
      <div className="mt-1 text-yellow-500">⭐ {course.rating} ({course.students} students)</div>
    </div>
  );
};

export default CourseCard;