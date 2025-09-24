"use client"

import { Section, Container, SectionHeader } from "@/components/ui/section"
import { ModernAccordion } from "@/components/ui/modern-accordion"

interface FAQItemData {
  question: string
  answer: string
}

const faqItems: FAQItemData[] = [
  {
    question: "Git Ustasi platformasi to'liq bepulmi?",
    answer: "Ha, platformamiz to'liq bepul. Hech qanday yashirin to'lovlar yo'q. Barcha darslar, interaktiv terminal va resurslar bepul taqdim etiladi."
  },
  {
    question: "Git bilmasam ham platformani ishlatay olamanmi?",
    answer: "Albatta! Platforma noldan boshlab professional darajagacha mo'ljallangan. Dasturlash asoslarini bilganingiz yetarli."
  },
  {
    question: "Platformani tugatgandan so'ng sertifikat olamanmi?",
    answer: "Ha, platformani muvaffaqiyatli tugatganingizdan so'ng professional sertifikat beriladi. Bu sertifikat sizning Git bilimingizni tasdiqlaydi. (Tez kunda)"
  },
  {
    question: "Interaktiv terminal qanday ishlaydi?",
    answer: "Interaktiv terminal real Git buyruqlarini sinab ko'rish imkonini beradi. Hech qanday o'rnatish talab qilinmaydi - brauzerda to'g'ridan-to'g'ri ishlaydi."
  },
  {
    question: "Platformani qancha vaqtda tugatish mumkin?",
    answer: "Platforma jami 2 soat kontentdan iborat. Lekin siz o'z tezligingizda o'rganishingiz mumkin. Interaktiv terminal bilan mashq qilish uchun qo'shimcha vaqt ajrating."
  },
  {
    question: "Video darslar mavjudmi?",
    answer: "Hozircha faqat matnli darslar mavjud. Video darslar tez kunda qo'shiladi va platforma yanada boyitiladi."
  }
]

export function FAQSection() {
  return (
    <Section background="muted">
      <Container maxWidth="6xl">
        <SectionHeader
          title="Tez-tez So'raladigan Savollar"
          description="Platformamiz haqida eng ko'p so'raladigan savollar va javoblar"
        />

        <ModernAccordion items={faqItems} />
      </Container>
    </Section>
  )
}
