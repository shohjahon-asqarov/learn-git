"use client"

import { GitBranch, Code } from "lucide-react"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  showText?: boolean
  variant?: "default" | "minimal" | "professional"
}

export function Logo({ className, size = "md", showText = true, variant = "default" }: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8",
    md: "h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10",
    lg: "h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14",
  }

  const textSizeClasses = {
    sm: "text-sm sm:text-base md:text-lg",
    md: "text-base sm:text-lg md:text-xl",
    lg: "text-lg sm:text-xl md:text-2xl",
  }

  const iconSize = sizeClasses[size]
  const textSize = textSizeClasses[size]

  if (variant === "minimal") {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <div
          className={cn(
            "relative rounded-lg bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-md hover:shadow-lg",
            iconSize,
          )}
        >
          <Code className={cn("text-white", size === "sm" ? "h-3 w-3" : size === "md" ? "h-4 w-4" : "h-6 w-6")} />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
        </div>
        {showText && (
          <span
            className={cn("font-bold text-foreground hidden xs:block hover:text-blue-600 transition-colors", textSize)}
          >
            Git Ustasi
          </span>
        )}
      </div>
    )
  }

  if (variant === "professional") {
    return (
      <div className={cn("flex items-center gap-3 group", className)}>
        <div
          className={cn(
            "relative rounded-xl bg-blue-600 hover:bg-blue-700 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110",
            iconSize,
          )}
        >
          <GitBranch
            className={cn(
              "text-white group-hover:rotate-12 transition-transform duration-300",
              size === "sm" ? "h-3 w-3" : size === "md" ? "h-4 w-4" : "h-6 w-6",
            )}
          />
          <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white animate-pulse group-hover:animate-bounce" />
        </div>
        {showText && (
          <div className="flex flex-col">
            <span
              className={cn(
                "font-bold text-foreground group-hover:text-blue-600 transition-colors duration-200",
                textSize,
              )}
            >
              Git Ustasi
            </span>
            <span className="text-xs text-muted-foreground -mt-1 group-hover:text-blue-500 transition-colors duration-200">
              by Shohjahon
            </span>
          </div>
        )}
      </div>
    )
  }

  // Default variant
  return (
    <div className={cn("flex items-center gap-3 group", className)}>
      <div
        className={cn(
          "relative rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-all duration-200 hover:scale-110 hover:shadow-md",
          iconSize,
        )}
      >
        <GitBranch
          className={cn(
            "text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300",
            size === "sm" ? "h-3 w-3" : size === "md" ? "h-4 w-4" : "h-6 w-6",
          )}
        />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full animate-pulse group-hover:animate-bounce" />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span
            className={cn(
              "font-bold text-foreground group-hover:text-blue-600 transition-colors duration-200",
              textSize,
            )}
          >
            Git Ustasi
          </span>
          <span className="text-xs text-muted-foreground -mt-1 group-hover:text-blue-500 transition-colors duration-200">
            by Shohjahon
          </span>
        </div>
      )}
    </div>
  )
}

// Enhanced Animated Logo with professional animations
export function AnimatedLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3 group", className)}>
      <div className="relative">
        <div className="h-10 w-10 rounded-xl bg-blue-600 hover:bg-blue-700 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
          <GitBranch className="h-5 w-5 text-white animate-pulse hover:animate-bounce transition-all duration-300" />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-ping" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-foreground group-hover:text-blue-600 transition-colors duration-300">
          Git Ustasi
        </span>
        <span className="text-sm text-muted-foreground -mt-1 group-hover:text-blue-500 transition-colors duration-200">
          by Shohjahon
        </span>
      </div>
    </div>
  )
}
