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
      "py-20 relative overflow-hidden",
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
      "container mx-auto px-4 relative z-10",
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
    <div className={cn("text-center mb-16", className)}>
      {badge && (
        <div className="mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 animate-fade-in-up">
            {badge}
          </span>
        </div>
      )}
      {subtitle && (
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        {title}
      </h2>
      {description && (
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
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