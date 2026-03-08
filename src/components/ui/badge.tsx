import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-aurora-500 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-aurora-500/20 text-aurora-300 hover:bg-aurora-500/30",
        secondary:
          "border-transparent bg-graphite-800 text-graphite-100 hover:bg-graphite-700",
        destructive:
          "border-transparent bg-red-900/50 text-red-200 hover:bg-red-900/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
