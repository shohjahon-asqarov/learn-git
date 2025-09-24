"use client"

import { Section, Container, SectionHeader } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  GitBranch, 
  Users, 
  History, 
  Shield, 
  Zap, 
  Globe, 
  Code, 
  FileText,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Terminal,
  GitCommit,
  GitMerge,
  GitPullRequest
} from "lucide-react"

const gitConcepts = [
  {
    icon: <GitBranch className="h-6 w-6 text-blue-500" />,
    title: "Version Control",
    description: "Git - bu kodning har bir o'zgarishini saqlab boruvchi tizim. Har bir o'zgarishni 'commit' deb ataladi.",
    example: "Kitob yozayotganingizda har bir bobni alohida saqlab qo'yganingiz kabi."
  },
  {
    icon: <History className="h-6 w-6 text-emerald-500" />,
    title: "Tarix Saqlash",
    description: "Git barcha o'zgarishlarni tarixda saqlaydi. Istalgan vaqtda eski versiyaga qaytish mumkin.",
    example: "Vaqt mashinasiga ega bo'lish kabi - istalgan vaqtda orqaga qaytish."
  },
  {
    icon: <Users className="h-6 w-6 text-purple-500" />,
    title: "Jamoaviy Ishlash",
    description: "Bir necha dasturchi bir loyihada ishlay oladi. Git ularning ishlarini birlashtiradi.",
    example: "Bir necha kishi bir kitob yozayotgani kabi, har biri o'z bobini yozadi."
  },
  {
    icon: <Shield className="h-6 w-6 text-orange-500" />,
    title: "Xavfsizlik",
    description: "Git kodni buzilishdan himoya qiladi. Agar xato bo'lsa, eski versiyaga qaytish mumkin.",
    example: "Kodning 'backup' nusxasi bo'lishi kabi - har doim xavfsiz."
  }
]

const gitVsWithoutGit = [
  {
    title: "Git Bilan",
    icon: <CheckCircle className="h-5 w-5 text-green-500" />,
    items: [
      "Har bir o'zgarish saqlanadi",
      "Istalgan vaqtda eski versiyaga qaytish",
      "Bir necha kishi bir loyihada ishlay oladi",
      "Xatolarni osongina tuzatish",
      "Kodning tarixini ko'rish",
      "Professional ishlash usuli"
    ]
  },
  {
    title: "Git Siz",
    icon: <FileText className="h-5 w-5 text-red-500" />,
    items: [
      "Fayllarni qo'lda saqlash",
      "Eski versiyalarni yo'qotish xavfi",
      "Bir kishi ishlay oladi",
      "Xatolarni tuzatish qiyin",
      "Tarixni bilmaslik",
      "Professional bo'lmagan usul"
    ]
  }
]

const gitWorkflow = [
  {
    step: 1,
    icon: <Code className="h-6 w-6 text-blue-500" />,
    title: "Kod Yozish",
    description: "Dasturchi kod yozadi va fayllarni o'zgartiradi"
  },
  {
    step: 2,
    icon: <GitBranch className="h-6 w-6 text-emerald-500" />,
    title: "Staging",
    description: "O'zgarishlarni Git'ga qo'shish uchun tayyorlash"
  },
  {
    step: 3,
    icon: <GitCommit className="h-6 w-6 text-purple-500" />,
    title: "Commit",
    description: "O'zgarishlarni Git tarixiga saqlash"
  },
  {
    step: 4,
    icon: <Globe className="h-6 w-6 text-orange-500" />,
    title: "Push",
    description: "O'zgarishlarni GitHub yoki boshqa serverga yuborish"
  }
]

const gitBenefits = [
  {
    icon: <Zap className="h-8 w-8 text-blue-500" />,
    title: "Tezlik",
    description: "Git juda tez ishlaydi va kichik joy egallaydi"
  },
  {
    icon: <Shield className="h-8 w-8 text-emerald-500" />,
    title: "Xavfsizlik",
    description: "Kodning buzilishidan himoya qiladi"
  },
  {
    icon: <Users className="h-8 w-8 text-purple-500" />,
    title: "Hamkorlik",
    description: "Jamoaviy ishlashni osonlashtiradi"
  },
  {
    icon: <History className="h-8 w-8 text-orange-500" />,
    title: "Tarix",
    description: "Barcha o'zgarishlarni saqlab boradi"
  }
]

export function GitIntroductionSection() {
  return (
    <Section background="muted" className="py-12 sm:py-16 md:py-20 lg:py-24">
      <Container maxWidth="6xl">
        <SectionHeader
          badge="Git Asoslari"
          title="Git Nima va Nima Uchun Kerak?"
          description="Git haqida to'liq ma'lumot va nima uchun har bir dasturchi Git'ni bilishi kerakligi"
          className="mb-12 sm:mb-16 md:mb-20"
        />

        {/* Git nima? */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6">
              Git Nima?
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Git - bu <strong className="text-blue-600 dark:text-blue-400">Version Control System</strong> (Versiya Boshqarish Tizimi). 
              Bu dasturchilar uchun kodning har bir o'zgarishini saqlab boruvchi maxsus dastur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {gitConcepts.map((concept, index) => (
              <Card key={index} className="git-card hover-lift glassmorphism-card dark:glassmorphism-card-dark animate-fade-in-up h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    {concept.icon}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 sm:mb-3">
                    {concept.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm flex-grow">
                    {concept.description}
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-2 sm:p-3 mt-auto">
                    <p className="text-xs text-blue-700 dark:text-blue-300 font-medium">
                      💡 {concept.example}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Git bilan vs Git siz */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6">
              Git Bilan vs Git Siz
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto px-4 sm:px-0">
              Git ishlatganingizda va ishlatmaganingizda qanday farq bor?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {gitVsWithoutGit.map((comparison, index) => (
              <Card key={index} className={`git-card hover-lift glassmorphism-card dark:glassmorphism-card-dark animate-fade-in-up h-full ${index === 0 ? 'ring-2 ring-green-500/20' : 'ring-2 ring-red-500/20'}`} style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    {comparison.icon}
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                      {comparison.title}
                    </h4>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 flex-grow">
                    {comparison.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 sm:gap-3">
                        <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${index === 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        <span className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Git ishlash jarayoni */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6">
              Git Qanday Ishlaydi?
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto px-4 sm:px-0">
              Git'da kod bilan ishlashning asosiy jarayoni
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {gitWorkflow.map((step, index) => (
              <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="git-card hover-lift glassmorphism-card dark:glassmorphism-card-dark h-full">
                  <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      {step.icon}
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto mb-2 sm:mb-3 text-xs sm:text-sm font-bold">
                      {step.step}
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 sm:mb-3">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xs sm:text-sm flex-grow">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Arrow connector */}
                {index < gitWorkflow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-5 w-5 text-slate-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Git afzalliklari */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6">
              Git Afzalliklari
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto px-4 sm:px-0">
              Nima uchun Git eng mashhur version control tizimi?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {gitBenefits.map((benefit, index) => (
              <Card key={index} className="git-card hover-lift glassmorphism-card dark:glassmorphism-card-dark animate-fade-in-up h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-4 sm:p-6 text-center h-full flex flex-col">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-blue-950/30 dark:to-emerald-950/30 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 sm:mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xs sm:text-sm flex-grow">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="git-card hover-glow glassmorphism-card dark:glassmorphism-card-dark max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Terminal className="h-10 w-10 text-blue-500 animate-git-pulse" />
                <GitBranch className="h-8 w-8 text-emerald-500 animate-git-pulse" style={{ animationDelay: '1s' }} />
                <GitCommit className="h-10 w-10 text-purple-500 animate-git-pulse" style={{ animationDelay: '2s' }} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Git'ni O'rganishga Tayyormisiz?
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
                Git'ni professional darajada o'rganish uchun bizning platformamizdan foydalaning. 
                Interaktiv darslar va real loyihalar bilan Git ustasiga aylaning!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Badge variant="outline" className="text-sm px-4 py-2 git-card">
                  <BookOpen className="mr-2 h-4 w-4" />
                  5 ta Professional Dars
                </Badge>
                <Badge variant="outline" className="text-sm px-4 py-2 git-card">
                  <Terminal className="mr-2 h-4 w-4" />
                  Interaktiv Terminal
                </Badge>
                <Badge variant="outline" className="text-sm px-4 py-2 git-card">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  100% Bepul
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  )
}
