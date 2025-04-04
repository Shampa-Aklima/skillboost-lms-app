import type React from "react"
import type { LucideIcon } from "lucide-react"

export interface CourseType {
  id: number
  title: string
  instructor: string
  level: string
  duration: string
  rating: number
  students: number
  image: string
  lessons: number
}

export interface FeatureType {
  icon: LucideIcon
  title: string
  description: string
}

export interface PricingPlanType {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  highlighted: boolean
  image:string
  buttonText: string
}

export interface TestimonialType {
  id: number
  content: string
  author: string
  position: string
  avatar: string
}

export interface PartnerType {
  name: string
  logo: string
}

export interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export interface IconProps {
  className?: string
}

