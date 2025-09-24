import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, GitBranch, Users, Shield, Clock, BookOpen, Terminal, FileText, Mail, Send, User, Star, Award, MessageCircle, Github, Linkedin, Twitter, Play, CheckCircle, TrendingUp, Globe, Zap, Target, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TelegramSubscription } from "@/components/telegram-subscription"
import { Logo } from "@/components/logo"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section - New Design */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-[length:24px_24px]"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Creator Badge */}
            <div className="flex justify-center mb-8">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800 px-4 py-2 text-sm">
                <User className="h-4 w-4 mr-2" />
                Shohjahon tomonidan yaratilgan
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-6 mb-12">
              <h1 className="text-5xl lg:text-7xl font-bold text-balance leading-tight">
                <span className="blog-gradient block mb-4">Git Ustasi</span>
                <span className="text-slate-800 dark:text-slate-200 blog-text text-4xl lg:text-5xl">
                  Dasturchining Eng Zo'r Yordamchisi
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 education-text max-w-3xl mx-auto leading-relaxed">
                Git'ni noldan boshlab o'rganing! Amaliyotga yo'naltirilgan, tushunarli va qiziqarli darslar bilan kod
                yozishni yanada samarali qiling.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                  <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-2xl font-bold text-slate-800 dark:text-slate-200 blog-text">1000+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 education-text">O'quvchi</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-slate-800 dark:text-slate-200 blog-text">5</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 education-text">Dars</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                  <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-slate-800 dark:text-slate-200 blog-text">100%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 education-text">Bepul</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 h-14 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <Link href="/lessons">
                  <BookOpen className="mr-2 h-5 w-5" />
                  <span className="blog-text">O'rganishni boshlash</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all duration-300" asChild>
                <Link href="/practice">
                  <Terminal className="mr-2 h-5 w-5" />
                  <span className="blog-text">Amaliyot maydonchasi</span>
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6">
              <span className="text-sm text-slate-600 dark:text-slate-400 education-text">Ijtimoiy tarmoqlarda kuzating:</span>
              <div className="flex gap-3">
                <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-blue-100 dark:hover:bg-blue-900/20" asChild>
                  <a href="https://t.me/shoxjahon_dev" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-gray-100 dark:hover:bg-gray-800" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-blue-100 dark:hover:bg-blue-900/20" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-sky-100 dark:hover:bg-sky-900/20" asChild>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Creator Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-slate-200 dark:border-slate-700 shadow-xl">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Creator Image Placeholder */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <User className="h-16 w-16 lg:h-20 lg:w-20 text-white" />
                  </div>
                </div>
                
                {/* Creator Info */}
                <div className="text-center lg:text-left flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-200 blog-text mb-2">
                    Shohjahon
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 blog-text mb-2">
                    Full-Stack Developer
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 education-text mb-4">
                    Git O'zbek platformasi muallifi
                  </p>
                  <div className="flex justify-center lg:justify-start">
                    <Logo size="md" variant="gradient" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Git Section */}
      <section className="py-20 git-bg">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 blog-text">Git nima uchun kerak?</h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto education-text">
              Zamonaviy dasturlashda Git'siz ish qilish deyarli mumkin emas. Mana nima uchun:
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border bg-card/50 backdrop-blur git-card branch-line">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 code-float">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl blog-text">Vaqt mashinasi</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base education-text">
                    Har bir o'zgarishni saqlab boradi. Agar xato qilsangiz, bemalol oldingi versiyaga qayta olasiz.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-border bg-card/50 backdrop-blur git-card branch-line">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 code-float">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl blog-text">Jamoaviy ish</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base education-text">
                    Bir nechta dasturchi bir loyiha ustida ishlaganda tartibsizlikni oldini oladi. Birlashishlar endi
                    oson va xavfsiz.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-border bg-card/50 backdrop-blur git-card branch-line">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 code-float">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl blog-text">Xavfsizlik kafolati</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base education-text">
                    Loyiha kodingiz doim xavfsiz. Kompyuterda muammo chiqsa, kodingiz bulutda saqlangan bo'ladi.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Overview */}
      <section className="py-20 bg-muted/30 git-bg">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 blog-text">Darslarimiz ketma-ketligi</h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto education-text">
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
                    className="border-border bg-card/50 backdrop-blur git-card hover:scale-105 transition-all duration-300 group cursor-pointer branch-line"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors code-float">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline" className="text-xs terminal-text git-status-added">
                              {lesson.number}
                            </Badge>
                            <CardTitle className="text-xl blog-text">{lesson.title}</CardTitle>
                          </div>
                          <CardDescription className="text-base education-text">{lesson.description}</CardDescription>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors code-float" />
                      </div>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="git-card hover:scale-105 transition-transform" asChild>
                <Link href="/lessons">
                  <span className="blog-text">Barcha darslarni ko'rish</span>
                  <BookOpen className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 git-bg">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 blog-text">Bugun Git'ni o'rganishni boshlang</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto education-text">
                Minglab dasturchilar Git'ni bizning platformamiz orqali o'rganishdi. Endi sizning navbatingiz!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 git-card hover:scale-105 transition-transform" asChild>
                  <Link href="/lessons">
                    <span className="blog-text">Birinchi darsni boshlash</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent git-card hover:scale-105 transition-transform" asChild>
                  <Link href="/resources">
                    <span className="blog-text">Qo'shimcha resurslar</span>
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
