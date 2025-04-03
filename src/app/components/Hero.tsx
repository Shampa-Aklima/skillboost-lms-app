import Image from "next/image"
import Container from "./Container"
import type React from "react"

export default function Hero(): React.ReactElement {
  return (
    <section className="bg-[#170F2F] text-white py-16 md:py-24 mt-10 ">
      <Container className="max-h-[760px]">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1 items-center">
          <div className=" space-y-6 pl-16">
            <p className="text-xl text-[#F2277E]">Education Solution</p>
            <h2 className="text-xl md:text-xl lg:text-6xl font-bold">
            Cloud-based LMS
            Trusted by 1000+
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
            Lorem Ipsum is simply dummy text of the printing typesetting
            industry. Lorem Ipsum has been
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 h-11  px-8 text-base bg-white text-purple-900 hover:bg-gray-100">
                View courses
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 h-11  px-8 text-base border border-white text-white hover:bg-white/10">
              Find out more 
              </button>
            </div>
          </div>
          <div className=" flex justify-center p-7 lg:justify-center">
            <div className="relative z-0  w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
              <Image
                src="/hero1.png"
                alt="SkillBoost"
                width={400}
                height={400}
                className="object-contain "
                priority
              />
              <div className="absolute top-1/8 z-[-13]"><Image
                src="/hero2.png"
                alt="SkillBoost"
                width={400}
                height={400}
                className="object-contain  w-[400px] h-[400px] md:w-[400px] md:h-[400px]"
                priority
              /></div>
               
            </div>
          </div>
        </div>
        
      </Container>
    </section>
  )
}

