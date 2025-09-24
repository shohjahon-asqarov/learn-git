"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  User, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Code, 
  Terminal, 
  BookOpen, 
  Users,
  GitBranch,
  GitCommit,
  Zap,
  Star,
  Award,
  Mail
} from "lucide-react"
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
      <div className="absolute top-40 right-20 opacity-10 animate-git-pulse" style={{ animationDelay: '1s' }}>
        <Terminal className="h-6 w-6 text-emerald-500" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-10 animate-git-pulse" style={{ animationDelay: '2s' }}>
        <GitBranch className="h-7 w-7 text-purple-500" />
      </div>
      <div className="absolute bottom-40 right-10 opacity-10 animate-git-pulse" style={{ animationDelay: '3s' }}>
        <GitCommit className="h-6 w-6 text-orange-500" />
      </div>

      <Container maxWidth="6xl">
        <SectionHeader
          title="Platform Muallifi"
          description="Git Ustasi platformasi kim tomonidan yaratilgan va nima uchun"
          className="mb-16 animate-fade-in-up"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Creator Info */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Name and Title */}
            <div className="space-y-4">
              <h3 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="professional-gradient">Shohjahon</span>
              </h3>
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="text-sm px-3 py-1">
                  Frontend Developer
                </Badge>
              </div>
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
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Men bilan bog'laning
              </h4>
              <div className="flex flex-wrap gap-3">
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
                    LinkedIn
                  </Link>
                </Button>
               
              </div>
            </div>

         
          </div>

          {/* Right Side - Professional Image Display */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl git-card hover-glow overflow-hidden">
                {/* Image Wrapper */}
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative z-10">
                    <img
                      src="/shohjahon.png"
                      alt="Shohjahon - Platform Muallifi"
                      className="w-full h-auto max-h-[500px] object-contain object-center transition-all duration-500 hover:scale-105 rounded-2xl"
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
                  <div className="absolute top-16 right-6 bg-emerald-500/90 text-white px-3 py-1 rounded-full text-sm font-mono animate-code-float" style={{ animationDelay: '1s' }}>
                    git
                  </div>
                  <div className="absolute bottom-8 left-6 bg-purple-500/90 text-white px-3 py-1 rounded-full text-sm font-mono animate-code-float" style={{ animationDelay: '2s' }}>
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