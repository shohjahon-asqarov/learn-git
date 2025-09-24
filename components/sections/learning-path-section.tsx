"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, GitBranch, Users, Shield, Clock, BookOpen, Terminal, Play, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Section, Container, SectionHeader } from "@/components/ui/section"

interface LearningStep {
  step: string
  title: string
  description: string
  icon: any
  status: "completed" | "current" | "locked"
}

const learningSteps: LearningStep[] = [
  {
    step: "01",
    title: "Git Asoslari",
    description: "Git tushunchalari va asosiy buyruqlar",
    icon: BookOpen,
    status: "completed"
  },
  {
    step: "02", 
    title: "Buyruqlar",
    description: "Asosiy Git buyruqlari va ularning ishlatilishi",
    icon: Terminal,
    status: "completed"
  },
  {
    step: "03",
    title: "Branch va Merge",
    description: "Parallel ishlash va kodlarni birlashtirish",
    icon: GitBranch,
    status: "current"
  },
  {
    step: "04",
    title: "Jamoaviy Ish",
    description: "Boshqa dasturchilar bilan birgalikda ishlash",
    icon: Users,
    status: "locked"
  },
  {
    step: "05",
    title: "Professional Daraja",
    description: "Git ustasi sifatida professional ishlash",
    icon: Shield,
    status: "locked"
  }
]

export function LearningPathSection() {
  return (
    <Section background="muted">
      <Container maxWidth="6xl">
        <SectionHeader
          badge="O'rganish Yo'li"
          title="Git Ustasi Bo'lish Yo'li"
          description="Har bir bosqichda real loyihalar bilan mashq qiling va professional darajaga yeting"
        />

        {/* Learning Steps */}
        <div className="space-y-8">
          {learningSteps.map((item, index) => {
            const Icon = item.icon
            const isCompleted = item.status === "completed"
            const isCurrent = item.status === "current"
            const isLocked = item.status === "locked"
            
            return (
              <div key={index} className="flex items-center gap-6 p-6 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  isCompleted ? 'bg-slate-900 dark:bg-slate-100' : 
                  isCurrent ? 'bg-slate-600 dark:bg-slate-400' : 
                  'bg-slate-200 dark:bg-slate-700'
                }`}>
                  {isLocked ? (
                    <div className="w-4 h-4 border-2 border-slate-400 rounded-full"></div>
                  ) : (
                    <Icon className={`h-6 w-6 ${
                      isCompleted ? 'text-white dark:text-slate-900' : 
                      isCurrent ? 'text-white' : 
                      'text-slate-400'
                    }`} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {item.step}
                    </Badge>
                    {isCompleted && <CheckCircle className="h-4 w-4 text-slate-500" />}
                    {isCurrent && <Play className="h-4 w-4 text-slate-500" />}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900 text-white font-medium px-8 h-12" 
            asChild
          >
            <Link href="/lessons">
              O'rganishni Boshlash
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
