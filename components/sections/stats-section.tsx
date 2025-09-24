"use client"

import { Users, BookOpen, Clock, Award } from "lucide-react"
import { Section, Container, SectionHeader } from "@/components/ui/section"

interface StatItem {
  icon: any
  value: string
  label: string
}

const stats: StatItem[] = [
  {
    icon: Users,
    value: "1000+",
    label: "Faol O'quvchi"
  },
  {
    icon: BookOpen,
    value: "5",
    label: "Professional Dars"
  },
  {
    icon: Clock,
    value: "2",
    label: "Soat Kontent"
  },
  {
    icon: Award,
    value: "4.9",
    label: "O'rtacha Reyting"
  }
]

export function StatsSection() {
  return (
    <Section>
      <Container maxWidth="6xl">
        <SectionHeader
          title="Platformamiz Raqamlarda"
          description="Minglab o'quvchilar Git'ni bizning platformamiz orqali o'rganishdi"
        />

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-slate-600 dark:text-slate-400" />
                </div>
                <div className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
