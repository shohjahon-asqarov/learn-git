"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  GitBranch,
  Users,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  GitCommit,
  GitMerge,
  History,
  Globe,
  Lock,
  Workflow,
} from "lucide-react"
import { Section, Container, SectionHeader } from "@/components/ui/section"
import Link from "next/link"

const gitBenefits = [
  {
    icon: <GitBranch className="h-8 w-8 text-blue-500" />,
    title: "Distributed",
    description: "Har bir dasturchi to'liq tarixga ega. Markaziy server kerak emas.",
  },
  {
    icon: <Users className="h-8 w-8 text-emerald-500" />,
    title: "Jamoaviy ish",
    description: "Bir nechta dasturchi bir vaqtda ishlashi mumkin, konfliktlar hal qilinadi.",
  },
  {
    icon: <Shield className="h-8 w-8 text-purple-500" />,
    title: "Xavfsizlik",
    description: "SHA-1 hash orqali ma'lumotlar yaxlitligi kafolatlanadi.",
  },
  {
    icon: <Zap className="h-8 w-8 text-orange-500" />,
    title: "Tezlik",
    description: "Local operatsiyalar juda tez. Network kerak emas.",
  },
]

const gitWorkflow = [
  {
    step: "1",
    title: "Working Directory",
    description: "Fayllaringiz ustida ishlaysiz",
    icon: <GitCommit className="h-6 w-6 text-blue-500" />,
  },
  {
    step: "2",
    title: "Staging Area",
    description: "O'zgarishlarni commit uchun tayyorlaysiz",
    icon: <CheckCircle className="h-6 w-6 text-emerald-500" />,
  },
  {
    step: "3",
    title: "Repository",
    description: "O'zgarishlar doimiy saqlanadi",
    icon: <History className="h-6 w-6 text-purple-500" />,
  },
]

const gitFeatures = [
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: "Branching",
    description: "Parallel rivojlantirish",
  },
  {
    icon: <GitMerge className="h-5 w-5" />,
    title: "Merging",
    description: "O'zgarishlarni birlashtirish",
  },
  {
    icon: <History className="h-5 w-5" />,
    title: "History",
    description: "To'liq tarix va versiyalar",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Remote",
    description: "Masofaviy repository'lar",
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Security",
    description: "Kriptografik xavfsizlik",
  },
  {
    icon: <Workflow className="h-5 w-5" />,
    title: "Workflow",
    description: "Moslashuvchan ish jarayoni",
  },
]

export function GitIntroductionSection() {
  return (
    <Section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <Container maxWidth="6xl">
        {/* Header */}
        <SectionHeader
          title="Git nima va nima uchun muhim?"
          description="Version control tizimi sifatida Git'ning afzalliklari va imkoniyatlari"
          className="mb-12 sm:mb-16 animate-fade-in-up"
        />

        {/* Git Benefits */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12 animate-fade-in-up [animation-delay:0.2s]">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Git'ning Asosiy Afzalliklari
            </h3>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Nima uchun Git eng mashhur version control tizimi?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {gitBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 h-full hover-lift animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="w-20 h-20 rounded-full bg-blue-50 dark:bg-blue-950/30 hover:bg-blue-100 dark:hover:bg-blue-950/50 flex items-center justify-center mx-auto mb-6 transition-colors duration-300 hover:scale-110 transform">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">{benefit.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base flex-grow">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Git Workflow */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12 animate-fade-in-up [animation-delay:0.7s]">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">Git Ish Jarayoni</h3>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Git qanday ishlaydi va asosiy tushunchalar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gitWorkflow.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover-lift">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/30 flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110">
                      {step.icon}
                    </div>
                    <Badge
                      variant="outline"
                      className="mb-4 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors duration-200"
                    >
                      {step.step}-bosqich
                    </Badge>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">{step.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>

                {/* Arrow between steps */}
                {index < gitWorkflow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-slate-400 animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Git Features Grid */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12 animate-fade-in-up [animation-delay:1.1s]">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Git'ning Asosiy Imkoniyatlari
            </h3>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Professional dasturlashda kerak bo'ladigan barcha vositalar
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {gitFeatures.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover-lift hover:border-blue-300 dark:hover:border-blue-700 animate-fade-in-up"
                style={{ animationDelay: `${1.2 + index * 0.05}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/30 flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-110">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm">{feature.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up [animation-delay:1.5s]">
          <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300 hover-lift">
            <CardContent className="p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Git'ni o'rganishga tayyormisiz?
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                Interaktiv darslar va terminal orqali Git'ni professional darajada o'rganing. Hamma narsa bepul va
                o'zbek tilida!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="hover:scale-105 transition-transform duration-200" asChild>
                  <Link href="/lessons">
                    <GitBranch className="mr-2 h-5 w-5" />
                    Darslarni Boshlash
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:scale-105 transition-transform duration-200 hover:border-blue-300 dark:hover:border-blue-700 bg-transparent"
                  asChild
                >
                  <Link href="/practice">
                    <Zap className="mr-2 h-5 w-5" />
                    Terminal Demo
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  )
}
