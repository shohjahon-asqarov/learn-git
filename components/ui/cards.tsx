"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div className={cn(
      "git-card hover-lift group cursor-pointer glassmorphism-card dark:glassmorphism-card-dark",
      className
    )}>
      <div className="p-8">
        <div className="w-14 h-14 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
          <div className="group-hover:scale-110 transition-transform">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

interface TestimonialCardProps {
  text: string
  author: string
  role: string
  className?: string
}

export function TestimonialCard({ text, author, role, className }: TestimonialCardProps) {
  return (
    <div className={cn(
      "border-slate-200 dark:border-slate-800 shadow-sm glassmorphism-card dark:glassmorphism-card-dark",
      className
    )}>
      <div className="p-8">
        <div className="flex items-center gap-1 mb-6">
          {[1,2,3,4,5].map((i) => (
            <svg key={i} className="h-5 w-5 fill-slate-400 text-slate-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
          "{text}"
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
            <svg className="h-6 w-6 text-slate-600 dark:text-slate-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <div className="font-medium text-sm text-slate-900 dark:text-slate-100">{author}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">{role}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface FAQItemProps {
  question: string
  answer: string
  className?: string
}

export function FAQItem({ question, answer, className }: FAQItemProps) {
  return (
    <div className={cn(
      "border-slate-200 dark:border-slate-800 shadow-sm glassmorphism-card dark:glassmorphism-card-dark",
      className
    )}>
      <div className="p-8">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
          {question}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  )
}
