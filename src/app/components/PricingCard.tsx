import { Check } from "lucide-react"
// Define a simple utility function for conditional class names
function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ")
}
import type { PricingPlanType } from "../types"
import type { JSX } from "react/jsx-runtime"
import Image from "next/image"

interface PricingCardProps {
  plan: PricingPlanType
}

export default function PricingCard({ plan }: PricingCardProps): JSX.Element {
  const { name, price, period, description, features,image, highlighted, buttonText } = plan

  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden w-[370px] h-[600px]",
        highlighted ? "bg-[#F5F5FE] text-gray-900 shadow-xl scale-105 z-10" : "bg-[#F5F5FE] backdrop-blur-sm",
      )}
    >
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-center">
        <h3 className={cn("text-xl font-bold mb-2", highlighted ? "text-purple-700" : "text-white")}>{name}</h3>
        <Image src={image}
        alt="image"
        width={203}
        height={112}
        />
        </div>
        
        <div className="mb-4">
          <span className="text-3xl md:text-4xl font-bold">{price}</span>
          <span className={cn("text-sm ml-1", highlighted ? "text-gray-500" : "text-white/70")}>{period}</span>
        </div>
        <p className={cn("mb-6 text-sm", highlighted ? "text-gray-600" : "text-white/80")}>{description}</p>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div
                className={cn(
                  "w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5",
                  highlighted ? "bg-[#F2277E]" : "bg-[#6D6E75]",
                )}
              >
                <Check className={cn("w-3 h-3", highlighted ? "text-white" : "text-white")} />
              </div>
              <span className={cn("text-sm", highlighted ? "text-gray-700" : "text-white/90")}>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className={cn(
            "w-full inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 h-10 px-4 py-2",
            highlighted
              ? "bg-purple-700 hover:bg-purple-800 text-white"
              : "bg-white/20 hover:bg-white/30 text-white border border-white/30",
          )}
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
}

