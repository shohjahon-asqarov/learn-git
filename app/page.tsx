"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { LearningPathSection } from "@/components/sections/learning-path-section"
import { StatsSection } from "@/components/sections/stats-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { PlatformFeaturesSection } from "@/components/sections/platform-features-section"
import { FAQSection } from "@/components/sections/faq-section"
import { CreatorSection } from "@/components/sections/creator-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navigation />
      <HeroSection />
      <LearningPathSection />
      <StatsSection />
      <TestimonialsSection />
      <PlatformFeaturesSection />
      <FAQSection />
      <CreatorSection />
      <Footer />
    </div>
  )
}