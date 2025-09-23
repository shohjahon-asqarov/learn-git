import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, GitBranch, Users, Shield, Clock, BookOpen, Terminal, FileText } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 grid-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Bepul va ochiq manba
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
              <span className="gradient-text">Git O'zbek Tilida:</span>
              <br />
              Dasturchining Eng Zo'r Yordamchisi
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Git'ni noldan boshlab o'rganing! Amaliyotga yo'naltirilgan, tushunarli va qiziqarli darslar bilan kod
              yozishni yanada samarali qiling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/lessons">
                  O'rganishni boshlash
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                <Link href="/practice">
                  Amaliyot maydonchasi
                  <Terminal className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Git Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">Git nima uchun kerak?</h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Zamonaviy dasturlashda Git'siz ish qilish deyarli mumkin emas. Mana nima uchun:
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Vaqt mashinasi</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Har bir o'zgarishni saqlab boradi. Agar xato qilsangiz, bemalol oldingi versiyaga qayta olasiz.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-border bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Jamoaviy ish</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Bir nechta dasturchi bir loyiha ustida ishlaganda tartibsizlikni oldini oladi. Birlashishlar endi
                    oson va xavfsiz.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-border bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Xavfsizlik kafolati</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Loyiha kodingiz doim xavfsiz. Kompyuterda muammo chiqsa, kodingiz bulutda saqlangan bo'ladi.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">Darslarimiz ketma-ketligi</h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              5 ta bosqichda Git'ni to'liq o'zlashtiring
            </p>

            <div className="grid gap-6">
              {[
                {
                  number: "01",
                  title: "Git'ga kirish",
                  description: "Git nima va nima uchun kerak? Asosiy tushunchalar bilan tanishish.",
                  icon: BookOpen,
                },
                {
                  number: "02",
                  title: "Eng kerakli buyruqlar",
                  description: "Har kuni ishlatiladigan asosiy Git buyruqlari va ularning vazifasi.",
                  icon: Terminal,
                },
                {
                  number: "03",
                  title: "Branch va birlashish (merge)",
                  description: "Parallel ishlov berish va kodlarni xavfsiz birlashtirishni o'rganish.",
                  icon: GitBranch,
                },
                {
                  number: "04",
                  title: "Git va GitHub'da jamoa bo'lib ishlash",
                  description: "Boshqa dasturchilar bilan birgalikda loyiha ustida ishlash.",
                  icon: Users,
                },
                {
                  number: "05",
                  title: "Xatolarni tuzatish va versiyalarni qaytarish",
                  description: "Muammolar yuzaga kelganda ularni hal qilish yo'llari.",
                  icon: Shield,
                },
              ].map((lesson, index) => {
                const Icon = lesson.icon
                return (
                  <Card
                    key={index}
                    className="border-border bg-card/50 backdrop-blur hover:bg-card/70 transition-colors group cursor-pointer"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline" className="text-xs font-mono">
                              {lesson.number}
                            </Badge>
                            <CardTitle className="text-xl">{lesson.title}</CardTitle>
                          </div>
                          <CardDescription className="text-base">{lesson.description}</CardDescription>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link href="/lessons">
                  Barcha darslarni ko'rish
                  <BookOpen className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Bugun Git'ni o'rganishni boshlang</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Minglab dasturchilar Git'ni bizning platformamiz orqali o'rganishdi. Endi sizning navbatingiz!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/lessons">
                  Birinchi darsni boshlash
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                <Link href="/resources">
                  Qo'shimcha resurslar
                  <FileText className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
