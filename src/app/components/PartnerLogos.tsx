import Image from "next/image"
import type { PartnerType } from "../types"

const partners: PartnerType[] = [
  { name: "Partner 1", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Partner 2", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Partner 3", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Partner 4", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Partner 5", logo: "/placeholder.svg?height=40&width=120" },
]

export default function PartnerLogos(): JSX.Element {
  return (
    <div className="w-full">
      <p className="text-center text-sm mb-6 opacity-80">Trusted by leading companies worldwide</p>
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="w-24 md:w-32 h-12 relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          >
            <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}

