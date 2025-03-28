import Container from "./Container"
import PricingCard from "./PricingCard"
import type { PricingPlanType } from "../types"

export default function Pricing(): React.ReactElement {
  const pricingPlans: PricingPlanType[] = [
    {
      name: "Basic",
      price: "$9.99",
      period: "per month",
      description: "Perfect for individual learners",
      features: ["Access to 100+ courses", "Basic certifications", "24/7 support", "Mobile access", "1 device"],
      highlighted: false,
      buttonText: "Get Started",
    },
    {
      name: "Pro",
      price: "$19.99",
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
      highlighted: true,
      buttonText: "Get Started",
    },
    {
      name: "Enterprise",
      price: "$49.99",
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
      highlighted: false,
      buttonText: "Contact Sales",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-900 to-violet-800 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose The Right Package</h2>
          <p className="text-lg opacity-90">Select the perfect plan that fits your learning needs and budget</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </Container>
    </section>
  )
}

