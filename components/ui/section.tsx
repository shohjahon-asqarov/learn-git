"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: ReactNode
  className?: string
  background?: "default" | "muted" | "gradient"
}

const backgroundVariants = {
  default: "",
  muted: "bg-slate-50 dark:bg-slate-900",
  gradient: "bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
}

export function Section({ 
  children, 
  className, 
  background = "default" 
}: SectionProps) {
  return (
    <section className={cn(
      "py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 relative overflow-hidden", // Mobile uchun kichikroq padding
      backgroundVariants[background],
      className
    )}>
      {/* Professional Git-themed background pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, #3b82f6 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, #10b981 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, #6366f1 0%, transparent 50%)
          `,
          backgroundSize: '400px 400px, 600px 600px, 500px 500px',
          animation: 'git-pulse 20s ease-in-out infinite'
        }} />
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-drift 30s linear infinite'
        }} />
      </div>
      
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
  "7xl": "max-w-7xl"
}

export function Container({ 
  children, 
  className, 
  maxWidth = "7xl" 
}: ContainerProps) {
  return (
    <div className={cn(
      "container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10", // Mobile uchun kichikroq padding
      maxWidthVariants[maxWidth],
      className
    )}>
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

export function SectionHeader({ 
  title, 
  subtitle, 
  description, 
  className,
  badge 
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20", className)}> {/* Mobile uchun kichikroq margin */}
      {badge && (
        <div className="mb-3 sm:mb-4 md:mb-6 lg:mb-8"> {/* Mobile uchun kichikroq margin */}
          <span className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 animate-fade-in-up"> {/* Mobile uchun kichikroq padding va text */}
            {badge}
          </span>
        </div>
      )}
      {subtitle && (
        <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 mb-3 sm:mb-4 md:mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}> {/* Mobile uchun kichikroq text va margin */}
          {subtitle}
        </p>
      )}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 md:mb-6 lg:mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}> {/* Mobile uchun kichikroq text va margin */}
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto animate-fade-in-up px-4 sm:px-0" style={{ animationDelay: '0.3s' }}>
          {description}
        </p>
      )}
    </div>
  )
}

// Professional Git-themed animations
export const gitAnimations = {
  fadeInUp: "animate-fade-in-up",
  slideInLeft: "animate-slide-in-left", 
  slideInRight: "animate-slide-in-right",
  scaleIn: "animate-scale-in",
  gitPulse: "animate-git-pulse",
  commitFlow: "animate-commit-flow"
}