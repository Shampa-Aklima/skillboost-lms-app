import Image from "next/image"
import Container from "./Container"

export default function Welcome(): React.ReactElement {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="relative w-full h-[300px] md:h-[400px]">
              <Image src="/placeholder.svg?height=400&width=400" alt="Student" fill className="object-contain" />
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium">
              Welcome to the SkillBoost
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Elevate Your Learning Experience</h2>
            <p className="text-gray-600 text-lg">
              Our platform offers a comprehensive suite of tools and resources designed to help you master new skills,
              advance your career, and achieve your learning goals.
            </p>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 h-10 px-4 py-2 bg-purple-700 text-white hover:bg-purple-800">
              Explore Courses
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

