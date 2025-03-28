import Image from "next/image"
import Container from "./Container"
import PartnerLogos from "./PartnerLogos"
import type React from "react"

export default function Hero(): React.ReactElement {
  return (
    <section className="bg-gradient-to-br from-purple-900 to-violet-800 text-white py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Cloud-based LMS
              <span className="block mt-2">Powered by Vision</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              Transform your learning experience with our cutting-edge platform designed for modern education.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 h-11 rounded-md px-8 text-base bg-white text-purple-900 hover:bg-gray-100">
                Get Started
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 h-11 rounded-md px-8 text-base border border-white text-white hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="SkillBoost Logo"
                width={400}
                height={400}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
        <div className="mt-16">
          <PartnerLogos />
        </div>
      </Container>
    </section>
  )
}

