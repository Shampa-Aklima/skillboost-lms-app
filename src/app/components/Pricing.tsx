import Container from "./Container"
import PricingCard from "./PricingCard"
import type { PricingPlanType } from "../types"

export default function Pricing(): React.ReactElement {
  const pricingPlans: PricingPlanType[] = [
    {
      name: "Free",
      price: "$0",
      period: "per month",
      description: "Perfect for startup",
      features: ["Access to 100+ courses", "Basic certifications", "24/7 support", "Mobile access", "1 device"],
      image:"/price1.png",
      highlighted: true,
      buttonText: "Get Started",
    },
    {
      name: "Basic",
      price: "$29",
      period: "per month",
      description: "Ideal for serious learners",
      features: [
        "Access to all 1,000+ courses",
        "Premium certifications",
        "Priority support",
        "Offline downloads",
        "3 devices",
        "Exclusive webinars",
      ],
      image:"/price2.png",
      highlighted:true,
      buttonText: "Get Started",
    },
    {
      name: "Pro",
      price: "$69",
      period: "per month",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Team management",
        "Custom learning paths",
        "API access",
        "Unlimited devices",
        "Dedicated account manager",
        "Custom reporting",
      ],
      image:"/price3.png",
      highlighted: true,
      buttonText: "Contact Sales",
    },
  ]

  return (
    <section className="py-16 mt-16 md:py-24  text-white bg-white">
      <Container>
      <div className="w-1/3 mx-auto  text-center  bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium">
              Pricing Plans
            </div>
        <div className="text-center text-black font-bold max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl  md:text-4xl  mb-4">Choose The Best Package <br/>
          For your Learning</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </Container>
    </section>
  )
}

