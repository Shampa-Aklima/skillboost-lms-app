import type React from "react"
import { forwardRef } from "react"
import { cn } from "../../lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline"
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(({ className, variant = "default", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2",
        {
          "border-transparent bg-purple-700 text-white": variant === "default",
          "border-purple-200 text-purple-700": variant === "outline",
        },
        className,
      )}
      {...props}
    />
  )
})
Badge.displayName = "Badge"

export { Badge }

