"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { User, Linkedin, ExternalLink, Code, Terminal, GitBranch, GitCommit } from "lucide-react"
import { Section, Container, SectionHeader } from "@/components/ui/section"
import Link from "next/link"

export function CreatorSection() {
  return (
    <Section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Professional floating elements */}
      <div className="absolute top-20 left-10 opacity-10 animate-float">
        <Code className="h-8 w-8 text-blue-500" />
      </div>
      <div className="absolute top-40 right-20 opacity-10 animate-float [animation-delay:1s]">
        <Terminal className="h-6 w-6 text-emerald-500" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-10 animate-float [animation-delay:2s]">
        <GitBranch className="h-7 w-7 text-purple-500" />
      </div>
      <div className="absolute bottom-40 right-10 opacity-10 animate-float [animation-delay:3s]">
        <GitCommit className="h-6 w-6 text-orange-500" />
      </div>

      <Container maxWidth="6xl">
        <SectionHeader
          title="Platform Muallifi"
          description="Git Ustasi platformasi kim tomonidan yaratilgan va nima uchun"
          className="mb-8 sm:mb-12 md:mb-16 animate-fade-in-up"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left Side - Creator Info */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {/* Name and Title */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate-900 dark:text-slate-100 relative inline-block hover:text-blue-600 transition-colors duration-300">
                  Shohjahon
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 rounded-full transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </span>
              </h3>
              <div className="flex items-center gap-2 sm:gap-3">
                <Badge
                  variant="outline"
                  className="text-xs sm:text-sm px-2 sm:px-3 py-1 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:border-blue-300 dark:hover:border-blue-700 transition-colors duration-200"
                >
                  Frontend Developer
                </Badge>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Git Ustasi platformasi muallifi. O'zbek dasturchilar jamoasini rivojlantirish va professional ta'lim
                berish maqsadida bu platformani yaratdim.
              </p>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Git'ni professional darajada o'rganish uchun interaktiv terminal va real loyihalar bilan ta'minladim.
                Har bir dasturchi Git'ni mukammal bilishi kerak.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100">
                Men bilan bog'laning
              </h4>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover-lift hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950/50 text-sm sm:text-base px-4 sm:px-6 h-10 sm:h-12 transition-all duration-300 bg-transparent"
                  asChild
                >
                  <Link href="https://t.me/shoxjahon_dev" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Telegram Blog
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover-lift hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950/50 text-sm sm:text-base px-4 sm:px-6 h-10 sm:h-12 transition-all duration-300 bg-transparent"
                  asChild
                >
                  <Link href="https://www.linkedin.com/in/shohjahon-asqarov/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Professional Image Display */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl hover-lift hover:shadow-3xl transition-all duration-500 overflow-hidden group">
                {/* Image Wrapper */}
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative z-10">
                    <img
                      src="/shohjahon.png"
                      alt="Shohjahon - Platform Muallifi"
                      className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] object-contain object-center transition-all duration-500 group-hover:scale-105 rounded-xl sm:rounded-2xl"
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement
                        const placeholder = img.parentElement?.querySelector(".placeholder") as HTMLElement
                        img.style.display = "none"
                        if (placeholder) {
                          placeholder.style.display = "flex"
                        }
                      }}
                    />
                    <div
                      className="w-full h-[250px] sm:h-[350px] md:h-[400px] bg-slate-100 dark:bg-slate-800 flex items-center justify-center placeholder absolute inset-0 rounded-xl sm:rounded-2xl"
                      style={{ display: "none" }}
                    >
                      <User className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 text-slate-600 dark:text-slate-400" />
                    </div>
                  </div>

                  {/* Enhanced Floating Code Elements */}
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-blue-500/90 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-mono animate-float hover:bg-blue-600 transition-colors duration-200">
                    &lt;/&gt;
                  </div>
                  <div className="absolute top-8 right-3 sm:top-16 sm:right-6 bg-emerald-500/90 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-mono animate-float [animation-delay:1s] hover:bg-emerald-600 transition-colors duration-200">
                    git
                  </div>
                  <div className="absolute bottom-4 left-3 sm:bottom-8 sm:left-6 bg-purple-500/90 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-mono animate-float [animation-delay:2s] hover:bg-purple-600 transition-colors duration-200">
                    dev
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
