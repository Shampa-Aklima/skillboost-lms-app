import Image from "next/image"
import type { PartnerType } from "../types"

const partners: PartnerType[] = [
  { name: "Partner 1", logo: "/logo1.png" },
  { name: "Partner 2", logo: "/logo2.png" },
  { name: "Partner 3", logo: "/logo3.png" },
  { name: "Partner 4", logo: "/logo4.png" },
  { name: "Partner 5", logo: "/logo5.png" },
]

export default function PartnerLogos(): JSX.Element {
  return (
    <div className="w-[70%] mx-auto p-6 m-[-40px] bg-white drop-shadow-2xl shadow-gray-300 rounded-md">
      
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="w-24 md:w-32 h-12 relative px-8 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          >
            <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}

