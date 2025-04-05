import Courses from "../components/Courses";
import Hero from "../components/Hero";
import PartnerLogos from "../components/PartnerLogos";
import Testimonials from "../components/Testimonials";

const page = () => {
  return (
    <>
      <div className="w-full h-[412px] bg-gray-200 flex flex-col justify-center items-center text-3xl">
        About
      </div>
      <div>
        <Hero
          variant="about"
          title="Welcome to the online 
Learning Center"
          subtitle=""
          description="Meet my startup design agency Shape Rex Currently I am working
at CodeNext as Product Designer.<br/>
10+ Years ExperienceIn this game, Means Product
Designing <br/>
I love to work in User Experience & User Interface designing.
Because I love to solve the design problem and find easy and
better solutions to solve it. I always try my best to make good user
interface with the best user experience. I have been working as a
UX Designer"
          imageSrc="/home2.png"
          topButton={{
            text: "About Us",
          }}
        />
      </div>
      <Courses/>
      <Testimonials/>
      <PartnerLogos/>
    </>
  );
};

export default page;
