"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: ReactNode
  className?: string
  background?: "default" | "muted" | "gradient"
}

const backgroundVariants = {
  default: "",
  muted: "bg-slate-50 dark:bg-slate-900",
  gradient:
    "bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900",
}

export function Section({ children, className, background = "default" }: SectionProps) {
  return (
    <section className={cn("py-8 md:py-16 lg:py-20 relative", backgroundVariants[background], className)}>
      {children}
    </section>
  )
}

interface ContainerProps {
  children: ReactNode
  className?: string
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "6xl" | "7xl"
}

const maxWidthVariants = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "4xl": "max-w-4xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
}

export function Container({ children, className, maxWidth = "7xl" }: ContainerProps) {
  return (
    <div className={cn("container mx-auto px-4 sm:px-6 md:px-8 relative", maxWidthVariants[maxWidth], className)}>
      {children}
    </div>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  className?: string
  badge?: string
}

export function SectionHeader({ title, subtitle, description, className, badge }: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      {badge && (
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            {badge}
          </span>
        </div>
      )}
      {subtitle && <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">{subtitle}</p>}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">{title}</h2>
      {description && <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">{description}</p>}
    </div>
  )
}
