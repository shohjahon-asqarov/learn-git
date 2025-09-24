"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal, Star, Globe, CheckCircle, Play, Code, GitBranch, Zap } from "lucide-react"
import Link from "next/link"
import { Section, Container } from "@/components/ui/section"

export function HeroSection() {
  return (
    <Section className="relative">
      <Container maxWidth="6xl">
        <div className="text-center relative z-10">
          <div className="space-y-8">
            {/* Professional Badge with animation */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 git-card hover-glow">
                <Terminal className="mr-2 h-4 w-4" />
                Git Ustasi Platformasi
              </div>
            </div>

            {/* Main Headline with professional gradient */}
            <div className="space-y-3 sm:space-y-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="professional-gradient">Git Ustasi</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Git'ni professional darajada o'rganish uchun interaktiv platforma. 
                Real loyihalar va terminal orqali ekspert bo'ling.
              </p>
            </div>

            {/* Key Features with staggered animation */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-slate-600 dark:text-slate-400 animate-fade-in-up px-4 sm:px-0" style={{ animationDelay: '0.2s' }}>
              {[
                "100% Bepul",
                "Interaktiv Terminal", 
                "O'zbek Tilida",
                "Real Loyihalar"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 animate-scale-in text-sm sm:text-base" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons with hover effects */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up px-4 sm:px-0" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900 text-white font-medium px-6 sm:px-8 h-10 sm:h-12 hover-lift hover-glow text-sm sm:text-base" 
                asChild
              >
                <Link href="/lessons">
                  <Play className="mr-2 h-4 w-4" />
                  Platformani Boshlash
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 font-medium px-6 sm:px-8 h-10 sm:h-12 hover-lift git-card text-sm sm:text-base" 
                asChild
              >
                <Link href="/practice">
                  <Terminal className="mr-2 h-4 w-4" />
                  Terminal Demo
                  <Code className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Professional Stats with staggered animation */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto animate-fade-in-up px-4 sm:px-0" style={{ animationDelay: '0.5s' }}>
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 professional-gradient">15+</div>
                <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Professional Dars</div>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.7s' }}>
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 professional-gradient">100%</div>
                <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Bepul Platforma</div>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.8s' }}>
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 professional-gradient">2h</div>
                <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400">O'rganish Vaqti</div>
              </div>
            </div>

            {/* Trust Indicators with subtle animation */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-6 sm:pt-8 text-xs sm:text-sm text-slate-500 dark:text-slate-400 animate-fade-in-up px-4 sm:px-0" style={{ animationDelay: '0.9s' }}>
              <div className="flex items-center gap-2">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-slate-400 text-slate-400" />
                <span>4.9/5 (1000+ foydalanuvchi)</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>O'zbekiston</span>
              </div>
            </div>
          </div>

          {/* Professional floating elements */}
          <div className="absolute top-20 left-10 opacity-10 animate-git-pulse">
            <Terminal className="h-8 w-8 text-blue-500" />
          </div>
          <div className="absolute top-32 right-16 opacity-10 animate-git-pulse" style={{ animationDelay: '1s' }}>
            <GitBranch className="h-6 w-6 text-emerald-500" />
          </div>
          <div className="absolute bottom-20 left-20 opacity-10 animate-git-pulse" style={{ animationDelay: '2s' }}>
            <Zap className="h-7 w-7 text-purple-500" />
          </div>
        </div>
      </Container>
    </Section>
  )
}
