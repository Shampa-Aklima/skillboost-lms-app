import Container from "./Container";
import { BookOpen, Users, Award, Clock } from "lucide-react";
import FeatureCard from "./FeaturedCard";
import type { FeatureType } from "../types";

const features: FeatureType[] = [
  {
    icon: BookOpen,
    title: "Extensive Course Library",
    description:
      "Access thousands of courses across various disciplines and skill levels.",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description:
      "Learn from industry professionals with real-world experience and expertise.",
  },
  {
    icon: Award,
    title: "Recognized Certifications",
    description:
      "Earn certificates that are valued and recognized by employers worldwide.",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description:
      "Study at your own pace with lifetime access to course materials.",
  },
];

export default function Features(): React.ReactElement {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-5 p-8 mt-10">
            <div className="w-1/3  bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium">
              Populer Subject
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Provide It & Technol Subject For You
            </h2>
            <p className="text-gray-600 text-lg">
              Construction is a general term meaning the art and science to form
              systems organizations, and comes from Latin Construction is
            </p>
            <p className="text-gray-600 text-lg border-l-4 border-[#F2277E]">
              Construction is a general term meaning the art and science to form
              systems organizations, and comes from Latin Construction is a
              organizations, and comes from Latin construction and Old
            </p>
            <button className="w-[165px] h-[49px] rounded-lg bg-[#F2277E] text-white">
              Explore More{" "}
            </button>
          </div>
          <div>
            <div className="p-8">
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-6">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
