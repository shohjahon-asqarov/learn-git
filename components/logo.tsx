"use client"

import { GitBranch, Code, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  showText?: boolean
  variant?: "default" | "minimal" | "gradient"
}

export function Logo({ 
  className, 
  size = "md", 
  showText = true, 
  variant = "default" 
}: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8", 
    lg: "h-12 w-12"
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl"
  }

  const iconSize = sizeClasses[size]
  const textSize = textSizeClasses[size]

  if (variant === "minimal") {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <div className={cn(
          "relative rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center",
          iconSize
        )}>
          <Code className={cn("text-white", size === "sm" ? "h-3 w-3" : size === "md" ? "h-4 w-4" : "h-6 w-6")} />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
        </div>
        {showText && (
          <span className={cn("font-bold text-foreground", textSize)}>
            Git Ustasi
          </span>
        )}
      </div>
    )
  }

  if (variant === "gradient") {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <div className={cn(
          "relative rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 flex items-center justify-center shadow-lg",
          iconSize
        )}>
          <GitBranch className={cn("text-white", size === "sm" ? "h-3 w-3" : size === "md" ? "h-4 w-4" : "h-6 w-6")} />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
        </div>
        {showText && (
          <div className="flex flex-col">
            <span className={cn("font-bold text-foreground", textSize)}>
              Git Ustasi
            </span>
            <span className="text-xs text-muted-foreground -mt-1">
              by Shohjahon
            </span>
          </div>
        )}
      </div>
    )
  }

  // Default variant
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn(
        "relative rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 flex items-center justify-center group hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors",
        iconSize
      )}>
        <GitBranch className={cn("text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform", size === "sm" ? "h-3 w-3" : size === "md" ? "h-4 w-4" : "h-6 w-6")} />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={cn("font-bold text-foreground", textSize)}>
            Git Ustasi
          </span>
          <span className="text-xs text-muted-foreground -mt-1">
            by Shohjahon
          </span>
        </div>
      )}
    </div>
  )
}

// Animated Logo variant for special occasions
export function AnimatedLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 flex items-center justify-center shadow-lg animate-pulse">
          <GitBranch className="h-5 w-5 text-white animate-bounce" />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-ping" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-foreground animate-pulse">
          Git Ustasi
        </span>
        <span className="text-sm text-muted-foreground -mt-1">
          by Shohjahon
        </span>
      </div>
    </div>
  )
}
