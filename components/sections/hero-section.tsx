"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal, Star, Globe, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Section, Container } from "@/components/ui/section"

export function HeroSection() {
  return (
    <Section>
      <Container maxWidth="4xl">
        <div className="text-center">
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100">
                Git Ustasi
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Git'ni professional darajada o'rganish uchun interaktiv platforma
              </p>
            </div>

            {/* Key Features */}
            <div className="flex flex-wrap justify-center gap-6 text-slate-600 dark:text-slate-400">
              {[
                "100% Bepul",
                "Interaktiv Terminal", 
                "O'zbek Tilida",
                "Real Loyihalar"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900 text-white font-medium px-8 h-12" 
                asChild
              >
                <Link href="/lessons">
                  Platformani Boshlash
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 font-medium px-8 h-12" 
                asChild
              >
                <Link href="/practice">
                  <Terminal className="mr-2 h-4 w-4" />
                  Terminal Demo
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 pt-8 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-slate-400 text-slate-400" />
                <span>4.9/5 (1000+ foydalanuvchi)</span>
              </div>
              <div className="flex items-center gap-2">
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
