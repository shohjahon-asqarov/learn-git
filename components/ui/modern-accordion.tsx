"use client"

import { useState, memo, useCallback } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface ModernAccordionItemProps {
  question: string
  answer: string
  index: number
  isOpen: boolean
  onToggle: () => void
}

const ModernAccordionItem = memo(({ question, answer, isOpen, onToggle }: ModernAccordionItemProps) => {
  return (
    <div
      className={cn(
        "border rounded-lg bg-white dark:bg-slate-800 transition-all duration-200",
        "hover:shadow-md cursor-pointer",
        isOpen && "ring-2 ring-blue-500/20",
      )}
      onClick={onToggle}
    >
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200",
                isOpen ? "bg-blue-500 text-white" : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400",
              )}
            >
              <HelpCircle className="h-4 w-4" />
            </div>
            <h3
              className={cn(
                "font-semibold transition-colors duration-200",
                isOpen ? "text-blue-600 dark:text-blue-400" : "text-slate-900 dark:text-slate-100",
              )}
            >
              {question}
            </h3>
          </div>
          <ChevronDown
            className={cn(
              "h-5 w-5 transition-transform duration-200",
              isOpen && "rotate-180",
              isOpen ? "text-blue-500" : "text-slate-400",
            )}
          />
        </div>

        <div className={cn("overflow-hidden transition-all duration-200", isOpen ? "max-h-96 mt-3" : "max-h-0")}>
          <div className="pl-11">
            <div className="h-px bg-slate-200 dark:bg-slate-700 mb-3"></div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  )
})

ModernAccordionItem.displayName = "ModernAccordionItem"

interface ModernAccordionProps {
  items: Array<{
    question: string
    answer: string
  }>
}

export const ModernAccordion = memo(({ items }: ModernAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }, [])

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <ModernAccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          index={index}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  )
})

ModernAccordion.displayName = "ModernAccordion"
