import React from "react";
import CourseCard from "./CourseCard";
import type { CourseType } from "../types";

interface CourseGridWithSidebarProps {
  courses: CourseType[];
}

const CourseGridWithSidebar = ({ courses }: CourseGridWithSidebarProps) => {
  return (
    <div className="flex gap-6 px-8 py-6">
      {/* Sidebar */}
      <aside className="w-1/4 space-y-6">
        <div>
          <h4 className="font-semibold mb-2">Search here</h4>
          <input type="text" placeholder="Search courses..." className="w-full p-2 border rounded" />
        </div>

        <div>
          <h4 className="font-semibold mb-2">Categories</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><input type="checkbox" /> Mobile Development</li>
            <li><input type="checkbox" /> Web Design</li>
            <li><input type="checkbox" /> UI/UX</li>
            <li><input type="checkbox" /> Photography</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Tag</h4>
          <ul className="flex gap-2 flex-wrap text-xs">
            <li className="bg-gray-200 px-2 py-1 rounded">Design</li>
            <li className="bg-gray-200 px-2 py-1 rounded">Development</li>
            <li className="bg-gray-200 px-2 py-1 rounded">Art</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Skill Level</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><input type="checkbox" /> Beginner</li>
            <li><input type="checkbox" /> Intermediate</li>
            <li><input type="checkbox" /> Expert</li>
          </ul>
        </div>
      </aside>

      {/* Course Grid */}
      <main className="w-3/4">
        <h2 className="text-xl font-bold mb-4">Featured Courses</h2>
        <div className="grid grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CourseGridWithSidebar;
