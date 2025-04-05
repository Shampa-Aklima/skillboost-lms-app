import Image from "next/image";
import Courses from "../components/Courses";
import Hero from "../components/Hero";
import PartnerLogos from "../components/PartnerLogos";
import TestimonialSlider from "../components/TestimonialSlider";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/app/components/ui/tabs";

const page = () => {
    return (
    <>
      <div className="w-full h-[412px] flex flex-col justify-center items-center text-3xl bg-[#F8F6FF] bg-cover bg-center text-black font-semibold relative">
        <div className="absolute inset-0 opacity-10">
          <Image src="/hero3.png" alt="pattern" fill className="object-cover" />
        </div>
        <span className="text-sm mb-2 block text-center opacity-80 relative z-10">About Page</span>
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
          backgroundImageSrc="/hero2.png"
          topButton={{
            text: "About Us",
          }}
        />
      </div>
      <div>
        <Tabs defaultValue="about" className="w-[80%] mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="mission">Our Mission</TabsTrigger>
            <TabsTrigger value="vision">Our Vision</TabsTrigger>
          </TabsList>
          <TabsContent value="about" className="mt-6">
            <div className="text-lg w-full mx-auto">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words look even slightly
                believable. If you are going to use a passage of Lorem Ipsum,
                you need to be sure there isn&apos;t anything embarrassing hidden in
                the middle of text. Ipsum generators on the Internet tend to
                repeat predefined chunks as necessary, making this the first
                true generator on the Internet. It uses a dictionary of over 200
                combined with a handful of model sentence structures, to
                generate Lorem Ipsum which looks reasonable. The generated Lorem
                Ipsum is therefore always free from characteristic words etc.
              </p>

              <p className="mt-4">
                World best education site - (Computer engeenering)
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which dont look even
                slightly believable. If you are going to useery
              </p>
              <p className="mt-4">
                Web and user interface design - Development
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which dont look even
                slightly believable. If you are going to useery
              </p>
              <p className="mt-4">Interaction design - Animation</p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which dont look even
                slightly believable. If you are going to useery
              </p>
            </div>
          </TabsContent>
          <TabsContent value="mission" className="mt-6">
            <div className="text-lg"></div>
          </TabsContent>
          <TabsContent value="vision" className="mt-6">
            <div className="text-lg"></div>
          </TabsContent>
        </Tabs>
      </div>
      <Courses />
      <div className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
        <TestimonialSlider />
      </div>
      <div className="bg-transparent text-center text-3xl">
        Relied on marketers trusted by engineers and
        Beloved by
        <PartnerLogos />
      </div>
    </>
    );
};

export default page;
