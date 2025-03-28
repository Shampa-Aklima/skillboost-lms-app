import Container from "./Container"
import { BookOpen, Users, Award, Clock, Globe, Shield } from "lucide-react"
import FeatureCard from "./FeaturedCard"
import type { FeatureType } from "../types"


const features: FeatureType[] = [
  {
    icon: BookOpen,
    title: "Extensive Course Library",
    description: "Access thousands of courses across various disciplines and skill levels.",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry professionals with real-world experience and expertise.",
  },
  {
    icon: Award,
    title: "Recognized Certifications",
    description: "Earn certificates that are valued and recognized by employers worldwide.",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Study at your own pace with lifetime access to course materials.",
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Connect with learners and instructors from around the world.",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Your data and learning progress are protected with enterprise-grade security.",
  },
]

export default function Features(): React.ReactElement {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful & Trusted</h2>
          <p className="text-lg text-gray-600">
            Discover why thousands of learners choose SkillBoost for their educational journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </Container>
    </section>
  )
}

