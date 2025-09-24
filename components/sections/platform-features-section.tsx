"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Terminal, GitBranch, Users, FileText, Award } from "lucide-react"
import Link from "next/link"
import { Section, Container, SectionHeader } from "@/components/ui/section"
import { FeatureCard } from "@/components/ui/cards"

interface Feature {
  icon: any
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <BookOpen className="h-6 w-6 text-slate-600 dark:text-slate-400" />,
    title: "Interaktiv Darslar",
    description: "Git'ni boshlang'ichdan professional darajagacha o'rganish uchun tushunarli va interaktiv darslar. (Tez kunda video darslar qo'shiladi)"
  },
  {
    icon: <Terminal className="h-6 w-6 text-slate-600 dark:text-slate-400" />,
    title: "Virtual Terminal",
    description: "Real Git terminalini brauzerda sinab ko'ring. Hech qanday o'rnatish talab qilinmaydi."
  },
  {
    icon: <GitBranch className="h-6 w-6 text-slate-600 dark:text-slate-400" />,
    title: "Real Loyihalar",
    description: "Haqiqiy loyihalar bilan mashq qiling va Git'ni professional darajada o'zlashtiring."
  },
  {
    icon: <Users className="h-6 w-6 text-slate-600 dark:text-slate-400" />,
    title: "Jamoaviy Ish",
    description: "GitHub va boshqa platformalar bilan ishlashni o'rganing. Jamoaviy loyihalarda qatnashing."
  },
  {
    icon: <FileText className="h-6 w-6 text-slate-600 dark:text-slate-400" />,
    title: "Qo'shimcha Resurslar",
    description: "Cheat sheet, qo'llanmalar va foydali havolalar bilan bilimingizni mustahkamlang."
  },
  {
    icon: <Award className="h-6 w-6 text-slate-600 dark:text-slate-400" />,
    title: "Sertifikat",
    description: "Platformani tugatganingizdan so'ng professional sertifikat oling va bilimingizni tasdiqlang. (Tez kunda)"
  }
]

export function PlatformFeaturesSection() {
  return (
    <Section>
      <Container maxWidth="6xl">
        <SectionHeader
          title="Platform Xususiyatlari"
          description="Git'ni professional darajada o'rganish uchun barcha kerakli vositalar"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="animate-fade-in-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900 text-white font-medium px-6 sm:px-8 h-10 sm:h-12 hover-lift hover-glow text-sm sm:text-base" 
            asChild
          >
            <Link href="/lessons">
              Platformani Boshlash
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
