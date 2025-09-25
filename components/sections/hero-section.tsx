"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal, Star, Globe, CheckCircle, Play, Code } from "lucide-react"
import Link from "next/link"
import { Section, Container } from "@/components/ui/section"

export function HeroSection() {
  return (
    <Section className="relative">
      <Container maxWidth="6xl">
        <div className="text-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 animate-fade-in-up">
              <Terminal className="mr-2 h-4 w-4" />
              Git Ustasi Platformasi
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up">
                <span className="text-slate-900 dark:text-slate-100 relative inline-block">
                  Git Ustasi
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 rounded-full transform scale-x-0 animate-[scaleX_0.8s_ease-out_0.5s_forwards] origin-left"></div>
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.2s]">
                Git'ni professional darajada o'rganish uchun interaktiv platforma. Real loyihalar va terminal orqali
                ekspert bo'ling.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-slate-600 dark:text-slate-400 animate-fade-in-up [animation-delay:0.4s]">
              {[
                { text: "100% Bepul", delay: "0.6s" },
                { text: "Interaktiv Terminal", delay: "0.7s" },
                { text: "O'zbek Tilida", delay: "0.8s" },
                { text: "Real Loyihalar", delay: "0.9s" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 animate-slide-in-left [animation-delay:${feature.delay}] hover:scale-105 transition-transform duration-200`}
                >
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:1s]">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 h-12 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                asChild
              >
                <Link href="/lessons">
                  <Play className="mr-2 h-4 w-4" />
                  Platformani Boshlash
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium px-8 h-12 bg-transparent hover:scale-105 transition-all duration-200"
                asChild
              >
                <Link href="/practice">
                  <Terminal className="mr-2 h-4 w-4" />
                  Terminal Demo
                  <Code className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in-up [animation-delay:1.2s]">
              {[
                { number: "15+", text: "Professional Dars", color: "text-blue-600 dark:text-blue-400" },
                { number: "100%", text: "Bepul Platforma", color: "text-emerald-600 dark:text-emerald-400" },
                { number: "2h", text: "O'rganish Vaqti", color: "text-purple-600 dark:text-purple-400" },
              ].map((stat, index) => (
                <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className={`text-3xl font-bold mb-2 ${stat.color} group-hover:animate-pulse`}>{stat.number}</div>
                  <div className="text-slate-600 dark:text-slate-400">{stat.text}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 text-sm text-slate-500 dark:text-slate-400 animate-fade-in-up [animation-delay:1.4s]">
              <div className="flex items-center gap-2 hover:text-yellow-500 transition-colors duration-200">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>4.9/5 (1000+ foydalanuvchi)</span>
              </div>
              <div className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-200">
                <Globe className="h-4 w-4" />
                <span>O'zbekiston</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
