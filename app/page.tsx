"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { GitIntroductionSection } from "@/components/sections/git-introduction-section"
import { LearningPathSection } from "@/components/sections/learning-path-section"
import { StatsSection } from "@/components/sections/stats-section"
// import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { PlatformFeaturesSection } from "@/components/sections/platform-features-section"
import { FAQSection } from "@/components/sections/faq-section"
import { CreatorSection } from "@/components/sections/creator-section"

export default function HomePage() {
  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100">
      <Navigation />
      <HeroSection />
      <GitIntroductionSection />
      <LearningPathSection />
      <StatsSection />
      {/* <TestimonialsSection /> */}
      <PlatformFeaturesSection />
      <CreatorSection />
      <FAQSection />
      <Footer />
    </div>
  )
}