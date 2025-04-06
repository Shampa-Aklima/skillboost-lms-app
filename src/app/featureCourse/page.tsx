import CourseGridWithSidebar from "../components/CourseGridWithSidebar";
import courses from "../types/courses";

const page = () => {
    return (
        <div>
            <CourseGridWithSidebar courses={courses} />
        </div>
    );
};

export default page;