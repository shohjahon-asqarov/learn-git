"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { User, Github, Linkedin, Mail, ExternalLink, Code, Terminal, BookOpen, Users } from "lucide-react"
import { Logo } from "@/components/logo"
import { Section, Container, SectionHeader } from "@/components/ui/section"
import Link from "next/link"

export function CreatorSection() {
  return (
    <Section background="gradient" className="py-24 relative overflow-hidden">
      {/* Professional floating elements */}
      <div className="absolute top-20 left-10 opacity-10 animate-git-pulse">
        <Code className="h-8 w-8 text-blue-500" />
      </div>
      <div className="absolute top-40 right-20 opacity-10 animate-git-pulse" style={{ animationDelay: '2s' }}>
        <Terminal className="h-6 w-6 text-emerald-500" />
      </div>
      <div className="absolute bottom-32 left-20 opacity-10 animate-git-pulse" style={{ animationDelay: '4s' }}>
        <BookOpen className="h-7 w-7 text-purple-500" />
      </div>

      <Container maxWidth="6xl">
        <SectionHeader
          title="Platform Muallifi"
          description="Git Ustasi platformasi kim tomonidan yaratilgan va nima uchun"
          className="mb-16 animate-fade-in-up"
        />

        {/* Modern Creator Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Creator Info */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Badge */}
           

            {/* Name and Title */}
            <div className="space-y-4">
              <h3 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="professional-gradient">Shohjahon</span>
              </h3>
              <p className="text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Frontend Developer
              </p>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Git Ustasi platformasi muallifi. O'zbek dasturchilar jamoasini rivojlantirish va
                professional ta'lim berish maqsadida bu platformani yaratdim.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Git'ni professional darajada o'rganish uchun interaktiv terminal va real loyihalar
                bilan ta'minladim. Har bir dasturchi Git'ni mukammal bilishi kerak.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Men bilan bog'laning
              </h4>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover-lift git-card"
                  asChild
                >
                  <Link href="https://t.me/shoxjahon_dev" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Telegram Blog
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover-lift git-card"
                  asChild
                >
                  <Link href="https://www.linkedin.com/in/shohjahon-asqarov/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    Linkedin
                  </Link>
                </Button>

              </div>
            </div>

            {/* Platform Logo */}
            <div className="pt-6">
              <Logo size="lg" variant="gradient" />
            </div>
          </div>

          {/* Right Side - Creator Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Modern Image Container with Multiple Layers */}
              <div className="relative">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-emerald-500/20 to-purple-500/20 rounded-3xl blur-3xl scale-110 animate-git-pulse"></div>

                {/* Main Image Container */}
                <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-2xl git-card hover-glow overflow-hidden">
                  {/* Image Wrapper with Modern Styling */}
                  <div className="relative">
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-full animate-git-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full animate-git-pulse" style={{ animationDelay: '2s' }}></div>

                    {/* Main Image */}
                    <div className="relative z-10">
                      <img
                        src="/shohjahon.png"
                        alt="Shohjahon - Platform Muallifi"
                        className="w-full h-auto max-h-[600px] object-contain object-center transition-all duration-500 hover:scale-105 hover:rotate-1 rounded-2xl shadow-lg"
                        onError={(e) => {
                          const img = e.currentTarget as HTMLImageElement;
                          const placeholder = img.parentElement?.querySelector('.placeholder') as HTMLElement;
                          img.style.display = 'none';
                          if (placeholder) {
                            placeholder.style.display = 'flex';
                          }
                        }}
                      />
                      <div className="w-full h-[400px] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center placeholder absolute inset-0 rounded-2xl" style={{ display: 'none' }}>
                        <User className="h-32 w-32 text-slate-600 dark:text-slate-400" />
                      </div>
                    </div>

                    {/* Floating Code Elements */}
                    <div className="absolute top-4 left-4 bg-blue-500/90 text-white px-3 py-1 rounded-full text-sm font-mono animate-code-float">
                      &lt;/&gt;
                    </div>
                    <div className="absolute top-16 right-8 bg-emerald-500/90 text-white px-3 py-1 rounded-full text-sm font-mono animate-code-float" style={{ animationDelay: '1s' }}>
                      git
                    </div>
                    <div className="absolute bottom-8 left-8 bg-purple-500/90 text-white px-3 py-1 rounded-full text-sm font-mono animate-code-float" style={{ animationDelay: '2s' }}>
                      dev
                    </div>
                  </div>
                </div>
              </div>

              {/* Modern Floating Stats Cards */}
              <div className="absolute -top-8 -left-8 animate-floating-elements" style={{ animationDelay: '0.6s' }}>
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-2xl hover-lift git-card">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">3+</div>
                    <div className="text-sm font-medium opacity-90">Yil Tajriba</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-300 rounded-full animate-git-pulse"></div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 animate-floating-elements" style={{ animationDelay: '0.8s' }}>
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-6 rounded-2xl shadow-2xl hover-lift git-card">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100+</div>
                    <div className="text-sm font-medium opacity-90">Loyiha</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-300 rounded-full animate-git-pulse"></div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-12 animate-floating-elements" style={{ animationDelay: '1s' }}>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-2xl hover-lift git-card">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">1K+</div>
                    <div className="text-sm font-medium opacity-90">Talaba</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-300 rounded-full animate-git-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </Section>
  )
}
