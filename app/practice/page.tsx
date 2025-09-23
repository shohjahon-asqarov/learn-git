import { Terminal, BookOpen, Users, Lightbulb } from "lucide-react"
import Link from "next/link"
import { InteractiveTerminal } from "@/components/interactive-terminal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const practiceProjects = [
  {
    title: "Kichik veb-sayt loyihasi",
    description: "HTML va CSS fayllar bilan oddiy veb-sayt yarating va Git bilan boshqaring",
    steps: [
      "Yangi papka yarating va git init qiling",
      "index.html va style.css fayllarini yarating",
      "Fayllarni git add va commit qiling",
      "Yangi xususiyat uchun branch yarating",
      "O'zgarishlarni merge qiling",
    ],
    difficulty: "Boshlang'ich",
    duration: "30 daqiqa",
  },
  {
    title: "Jamoaviy loyiha simulyatsiyasi",
    description: "Bir nechta branch bilan ishlash va conflict'larni hal qilishni o'rganing",
    steps: [
      "Asosiy loyihani yarating",
      "Feature branch'lar yarating",
      "Har bir branch'da turli o'zgarishlar qiling",
      "Conflict yarating va hal qiling",
      "Barcha branch'larni merge qiling",
    ],
    difficulty: "O'rta",
    duration: "45 daqiqa",
  },
  {
    title: "Xatolarni tuzatish mashqi",
    description: "Turli xil xatolar yarating va ularni Git yordamida tuzating",
    steps: [
      "Bir nechta commit yarating",
      "Xato commit qiling",
      "git reset bilan tuzating",
      "git revert bilan boshqa usulda tuzating",
      "Tarixni git log bilan tekshiring",
    ],
    difficulty: "Ilg'or",
    duration: "25 daqiqa",
  },
]

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Git Sandbox: Buyruqlarni Sinab Ko'ring</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Real terminal muhitida Git buyruqlarini xavfsiz sinab ko'ring. Hech qanday o'rnatish talab qilinmaydi!
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                <span>Interaktiv terminal</span>
              </div>
              <div className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                <span>Real vaqt javoblar</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Xavfsiz muhit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Terminal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <InteractiveTerminal />
          </div>
        </div>
      </section>

      {/* Practice Projects */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Amaliy loyihalar</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Terminal bilan tanishganingizdan so'ng, quyidagi loyihalarni bajarib ko'ring
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practiceProjects.map((project, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {project.difficulty}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {project.duration}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm">Qadamlar:</h4>
                      <ol className="space-y-2">
                        {project.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                              {stepIndex + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Card className="border-border bg-card/50 backdrop-blur max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl">Qo'shimcha yordam kerakmi?</CardTitle>
                  <CardDescription className="text-base">
                    Amaliyot davomida qiynalayotgan bo'lsangiz, darslarni qayta ko'rib chiqing yoki resurslar bo'limiga
                    murojaat qiling.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                      <Link href="/lessons">
                        Darslarni ko'rish
                        <BookOpen className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/resources">
                        Yordam olish
                        <Users className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
