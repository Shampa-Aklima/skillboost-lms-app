import type React from "react"
import { forwardRef } from "react"
import { cn } from "../../../lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-purple-700 text-white hover:bg-purple-800": variant === "default",
            "border border-purple-200 bg-transparent hover:bg-purple-100 text-purple-700": variant === "outline",
            "bg-transparent hover:bg-purple-100 text-purple-700": variant === "ghost",
            "bg-transparent underline-offset-4 hover:underline text-purple-700": variant === "link",
            "h-10 px-4 py-2 text-sm": size === "default",
            "h-9 rounded-md px-3 text-xs": size === "sm",
            "h-11 rounded-md px-8 text-base": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button }

