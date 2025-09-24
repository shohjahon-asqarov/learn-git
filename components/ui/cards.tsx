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
      <div className="p-4 sm:p-6 md:p-8"> {/* Mobile uchun kichikroq padding */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors"> {/* Mobile uchun kichikroq icon va margin */}
          <div className="group-hover:scale-110 transition-transform">
            {icon}
          </div>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 sm:mb-3 md:mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"> {/* Mobile uchun kichikroq text va margin */}
          {title}
        </h3>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed"> {/* Mobile uchun kichikroq text */}
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
      <div className="p-4 sm:p-6 md:p-8"> {/* Mobile uchun kichikroq padding */}
        <div className="flex items-center gap-1 mb-3 sm:mb-4 md:mb-6"> {/* Mobile uchun kichikroq margin */}
          {[1,2,3,4,5].map((i) => (
            <svg key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-slate-400 text-slate-400" viewBox="0 0 20 20"> {/* Mobile uchun kichikroq star */}
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-3 sm:mb-4 md:mb-6 leading-relaxed"> {/* Mobile uchun kichikroq text va margin */}
          "{text}"
        </p>
        <div className="flex items-center gap-3 sm:gap-4"> {/* Mobile uchun kichikroq gap */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center"> {/* Mobile uchun kichikroq avatar */}
            <svg className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-slate-600 dark:text-slate-400" fill="currentColor" viewBox="0 0 20 20"> {/* Mobile uchun kichikroq icon */}
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <div className="font-medium text-xs sm:text-sm text-slate-900 dark:text-slate-100">{author}</div> {/* Mobile uchun kichikroq text */}
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
      <div className="p-4 sm:p-6 md:p-8"> {/* Mobile uchun kichikroq padding */}
        <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 sm:mb-3 md:mb-4"> {/* Mobile uchun kichikroq text va margin */}
          {question}
        </h3>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed"> {/* Mobile uchun kichikroq text */}
          {answer}
        </p>
      </div>
    </div>
  )
}
