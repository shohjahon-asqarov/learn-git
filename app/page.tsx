import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, GitBranch, Users, Shield, Clock, BookOpen, Terminal, FileText, Mail, Send, User, Star, Award, MessageCircle, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TelegramSubscription } from "@/components/telegram-subscription"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 grid-bg overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Creator Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    <User className="h-3 w-3 mr-1" />
                    Shohjahon tomonidan yaratilgan
                  </Badge>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">
                    <Star className="h-3 w-3 mr-1" />
                    Bepul va ochiq manba
                  </Badge>
                </div>

                {/* Main Headline */}
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                    <span className="gradient-text">Git O'zbek Tilida:</span>
                    <br />
                    <span className="text-foreground">Dasturchining Eng Zo'r Yordamchisi</span>
                  </h1>
                  <p className="text-xl text-muted-foreground text-pretty max-w-2xl leading-relaxed">
                    Git'ni noldan boshlab o'rganing! Amaliyotga yo'naltirilgan, tushunarli va qiziqarli darslar bilan kod
                    yozishni yanada samarali qiling.
                  </p>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>1000+ o'quvchi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>5 ta dars</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span>100% bepul</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 h-12" asChild>
                    <Link href="/lessons">
                      O'rganishni boshlash
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 h-12 bg-transparent" asChild>
                    <Link href="/practice">
                      Amaliyot maydonchasi
                      <Terminal className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>


                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">Ijtimoiy tarmoqlarda kuzating:</span>
                  <div className="flex gap-3">
                    <Button variant="ghost" size="sm" className="h-9 w-9 p-0" asChild>
                      <a href="https://t.me/shoxjahon_dev" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-9 w-9 p-0" asChild>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-9 w-9 p-0" asChild>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-9 w-9 p-0" asChild>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Content - Creator Image */}
              <div className="relative">
                <div className="relative z-10">
                  {/* Replace with your actual image */}
                  <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-info/20 border border-border/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-info/10"></div>
                    {/* Uncomment and replace 'your-image.png' with your actual image filename */}
                    {/* <Image
                      src="/your-image.png"
                      alt="Shohjahon - Git O'zbek muallifi"
                      fill
                      className="object-cover"
                      priority
                    /> */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                          <User className="h-16 w-16 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-foreground">Shohjahon</h3>
                          <p className="text-muted-foreground">Full-Stack Developer</p>
                          <p className="text-sm text-muted-foreground">Git O'zbek platformasi muallifi</p>
                        </div>
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-primary/10 animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-info/10 animate-pulse delay-1000"></div>
                  </div>
                </div>
                
                {/* Background decorative elements */}
                <div className="absolute -top-4 -right-4 w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-64 h-64 rounded-full bg-info/5 blur-3xl"></div>
              </div>
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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
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

            {/* Telegram Subscription */}
            <div className="max-w-2xl mx-auto">
              <TelegramSubscription />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
