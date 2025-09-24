"use client"

import { Section, Container, SectionHeader } from "@/components/ui/section"
import { TestimonialCard } from "@/components/ui/cards"

interface Testimonial {
  text: string
  author: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    text: "Git'ni boshqa platformalarda o'rganishga harakat qilgan edim, lekin o'zbek tilida bunday sifatli kurs yo'q edi. Bu platforma juda foydali!",
    author: "Azizbek",
    role: "Frontend Developer"
  },
  {
    text: "Interaktiv terminal juda qiziq! Real terminalda ishlagandek his qildim. Git buyruqlarini yaxshi o'zlashtirdim.",
    author: "Malika",
    role: "Backend Developer"
  },
  {
    text: "Dasturlashni yangi boshlagan edim. Bu kurs Git'ni tushunishimga katta yordam berdi. Tavsiya qilaman!",
    author: "Javohir",
    role: "Student"
  }
]

export function TestimonialsSection() {
  return (
    <Section background="muted">
      <Container maxWidth="6xl">
        <SectionHeader
          title="O'quvchilarimiz Nima Deydi"
          description="Platformamizdan foydalangan o'quvchilarning haqiqiy sharhlari va natijalari"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
