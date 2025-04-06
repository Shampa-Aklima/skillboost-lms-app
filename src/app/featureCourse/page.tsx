import Image from "next/image";
import CourseGridWithSidebar from "../components/CourseGridWithSidebar";
import courses from "../types/courses";

const page = () => {
    return (
        <div>
            <div className="w-full h-[412px] flex flex-col justify-center items-center text-3xl bg-[#F8F6FF] bg-cover bg-center text-black font-semibold relative">
        <div className="absolute inset-0 opacity-10">
          <Image src="/hero3.png" alt="pattern" fill className="object-cover" />
        </div>
        <span className="text-sm mb-2 block text-center opacity-80 relative z-10">
          Featured Courses
        </span>
      </div>
            <CourseGridWithSidebar courses={courses} />
        </div>
    );
};

export default page;