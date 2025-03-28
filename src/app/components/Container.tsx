// Define a simple utility function for conditional class names
function cn(...classes: (string | boolean | undefined | null)[]) {
    return classes.filter(Boolean).join(" ")
  }
  import type { ContainerProps } from "../types"
  
  export default function Container({ children, className }: ContainerProps) {
    return <div className={cn("container mx-auto px-4 md:px-6", className)}>{children}</div>
  }
  
  