import Image from "next/image";
import type { PartnerType } from "../types";

const partners: PartnerType[] = [
  { name: "Partner 1", logo: "/logo1.png" },
  { name: "Partner 2", logo: "/logo2.png" },
  { name: "Partner 3", logo: "/logo3.png" },
  { name: "Partner 4", logo: "/logo4.png" },
  { name: "Partner 5", logo: "/logo5.png" },
  { name: "Partner 6", logo: "/logo6.png" },
  { name: "Partner 7", logo: "/logo7.png" },
  { name: "Partner 8", logo: "/logo8.png" },
  { name: "Partner 9", logo: "/logo9.png" },
];

interface PartnerLogosProps {
  limit?: number;
}

export default function PartnerLogos({ limit }: PartnerLogosProps) {
  const displayPartners = limit ? partners.slice(0, limit) : partners;

  return (
    <div className="mx-auto p-6 m-[-40px] bg-white rounded-md mt-10 mb-8">
      <div className="w-[80%] mx-auto flex flex-wrap justify-center gap-8 md:gap-12">
        {displayPartners.map((partner, index) => (
          <div
            key={index}
            className="w-24 md:w-32 h-12 relative px-8 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          >
            <Image
              src={partner.logo || "/placeholder.svg"}
              alt={partner.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
