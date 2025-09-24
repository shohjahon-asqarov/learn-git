"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface ModernAccordionItemProps {
  question: string
  answer: string
  index: number
  isOpen: boolean
  onToggle: () => void
}

function ModernAccordionItem({ question, answer, index, isOpen, onToggle }: ModernAccordionItemProps) {
  return (
    <div 
      className={cn(
        "git-card hover-lift cursor-pointer overflow-hidden transition-all duration-500 ease-in-out",
        isOpen && "ring-2 ring-blue-500/20 shadow-lg"
      )}
      onClick={onToggle}
    >
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className={cn(
              "w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out",
              isOpen 
                ? "bg-blue-500 text-white" 
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
            )}>
              <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <h3 className={cn(
              "text-base sm:text-lg font-semibold transition-colors duration-500 ease-in-out",
              isOpen 
                ? "text-blue-600 dark:text-blue-400" 
                : "text-slate-900 dark:text-slate-100"
            )}>
              {question}
            </h3>
          </div>
          <div className={cn(
            "transition-transform duration-500 ease-in-out",
            isOpen && "rotate-180"
          )}>
            {isOpen ? (
              <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
            ) : (
              <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />
            )}
          </div>
        </div>
        
        <div className={cn(
          "overflow-hidden transition-all duration-500 ease-in-out",
          isOpen ? "max-h-96 opacity-100 mt-3 sm:mt-4" : "max-h-0 opacity-0"
        )}>
          <div className="pl-11 sm:pl-14">
            <div className="h-px bg-gradient-to-r from-blue-500/20 to-transparent mb-3 sm:mb-4"></div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ModernAccordionProps {
  items: Array<{
    question: string
    answer: string
  }>
}

export function ModernAccordion({ items }: ModernAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {items.map((item, index) => (
        <div 
          key={index}
          className="animate-fade-in-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <ModernAccordionItem
            question={item.question}
            answer={item.answer}
            index={index}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        </div>
      ))}
    </div>
  )
}
