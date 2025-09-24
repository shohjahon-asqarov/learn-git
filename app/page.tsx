import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, GitBranch, Users, Shield, Clock, BookOpen, Terminal, FileText, User, Star, Award, MessageCircle, Play, CheckCircle, Globe, Zap } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TelegramSubscription } from "@/components/telegram-subscription"
import { Logo } from "@/components/logo"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section - Simple */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100">
                Git Ustasi
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Git'ni professional darajada o'rganish uchun interaktiv platforma
              </p>
            </div>

            {/* Key Features */}
            <div className="flex flex-wrap justify-center gap-6 text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>100% Bepul</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Interaktiv Terminal</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>O'zbek Tilida</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Real Loyihalar</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900 text-white font-medium px-8 h-12" asChild>
                <Link href="/lessons">
                  Platformani Boshlash
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 font-medium px-8 h-12" asChild>
                <Link href="/practice">
                  <Terminal className="mr-2 h-4 w-4" />
                  Terminal Demo
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 pt-8 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-slate-400 text-slate-400" />
                <span>4.9/5 (1000+ foydalanuvchi)</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>O'zbekiston</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path - Clean */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6">
              O'rganish Yo'li
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Git Ustasi Bo'lish Yo'li
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Har bir bosqichda real loyihalar bilan mashq qiling va professional darajaga yeting
            </p>
          </div>

          {/* Learning Steps */}
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Git Asoslari",
                description: "Git tushunchalari va asosiy buyruqlar",
                icon: BookOpen,
                status: "completed"
              },
              {
                step: "02", 
                title: "Buyruqlar",
                description: "Asosiy Git buyruqlari va ularning ishlatilishi",
                icon: Terminal,
                status: "completed"
              },
              {
                step: "03",
                title: "Branch va Merge",
                description: "Parallel ishlash va kodlarni birlashtirish",
                icon: GitBranch,
                status: "current"
              },
              {
                step: "04",
                title: "Jamoaviy Ish",
                description: "Boshqa dasturchilar bilan birgalikda ishlash",
                icon: Users,
                status: "locked"
              },
              {
                step: "05",
                title: "Professional Daraja",
                description: "Git ustasi sifatida professional ishlash",
                icon: Award,
                status: "locked"
              }
            ].map((item, index) => {
              const Icon = item.icon
              const isCompleted = item.status === "completed"
              const isCurrent = item.status === "current"
              const isLocked = item.status === "locked"
              
              return (
                <div key={index} className="flex items-center gap-6 p-6 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isCompleted ? 'bg-slate-900 dark:bg-slate-100' : 
                    isCurrent ? 'bg-slate-600 dark:bg-slate-400' : 
                    'bg-slate-200 dark:bg-slate-700'
                  }`}>
                    {isLocked ? (
                      <div className="w-4 h-4 border-2 border-slate-400 rounded-full"></div>
                    ) : (
                      <Icon className={`h-6 w-6 ${
                        isCompleted ? 'text-white dark:text-slate-900' : 
                        isCurrent ? 'text-white' : 
                        'text-slate-400'
                      }`} />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {item.step}
                      </Badge>
                      {isCompleted && <CheckCircle className="h-4 w-4 text-slate-500" />}
                      {isCurrent && <Play className="h-4 w-4 text-slate-500" />}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900 text-white font-medium px-8 h-12" asChild>
              <Link href="/lessons">
                O'rganishni Boshlash
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section - Minimalist */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Platformamiz Raqamlarda
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Minglab o'quvchilar Git'ni bizning platformamiz orqali o'rganishdi
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <Users className="h-8 w-8 text-slate-600 dark:text-slate-400" />
              </div>
              <div className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">1000+</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Faol O'quvchi</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-slate-600 dark:text-slate-400" />
              </div>
              <div className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">5</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Professional Dars</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <Clock className="h-8 w-8 text-slate-600 dark:text-slate-400" />
              </div>
              <div className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">2</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Soat Kontent</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <Award className="h-8 w-8 text-slate-600 dark:text-slate-400" />
              </div>
              <div className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">4.9</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">O'rtacha Reyting</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              O'quvchilarimiz Nima Deydi
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Platformamizdan foydalangan o'quvchilarning haqiqiy sharhlari va natijalari
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-slate-400 text-slate-400" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                  "Git'ni boshqa platformalarda o'rganishga harakat qilgan edim, lekin o'zbek tilida bunday sifatli kurs yo'q edi. Bu platforma juda foydali!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                    <User className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                  </div>
                  <div>
                    <div className="font-medium text-sm text-slate-900 dark:text-slate-100">Azizbek</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Frontend Developer</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-slate-400 text-slate-400" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                  "Interaktiv terminal juda qiziq! Real terminalda ishlagandek his qildim. Git buyruqlarini yaxshi o'zlashtirdim."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                    <User className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                  </div>
                  <div>
                    <div className="font-medium text-sm text-slate-900 dark:text-slate-100">Malika</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Backend Developer</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-slate-400 text-slate-400" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                  "Dasturlashni yangi boshlagan edim. Bu kurs Git'ni tushunishimga katta yordam berdi. Tavsiya qilaman!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                    <User className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                  </div>
                  <div>
                    <div className="font-medium text-sm text-slate-900 dark:text-slate-100">Javohir</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Student</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Platform Xususiyatlari
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Git'ni professional darajada o'rganish uchun barcha kerakli vositalar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Interaktiv Darslar
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Git'ni boshlang'ichdan professional darajagacha o'rganish uchun 
                  tushunarli va interaktiv darslar.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                  <Terminal className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Virtual Terminal
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Real Git terminalini brauzerda sinab ko'ring. Hech qanday 
                  o'rnatish talab qilinmaydi.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                  <GitBranch className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Real Loyihalar
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Haqiqiy loyihalar bilan mashq qiling va Git'ni professional 
                  darajada o'zlashtiring.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Jamoaviy Ish
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  GitHub va boshqa platformalar bilan ishlashni o'rganing. 
                  Jamoaviy loyihalarda qatnashing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Qo'shimcha Resurslar
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Cheat sheet, qo'llanmalar va foydali havolalar bilan 
                  bilimingizni mustahkamlang.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Sertifikat
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Platformani tugatganingizdan so'ng professional sertifikat 
                  oling va bilimingizni tasdiqlang.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900 text-white font-medium px-8 h-12" asChild>
              <Link href="/lessons">
                Platformani Boshlash
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Tez-tez So'raladigan Savollar
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Platformamiz haqida eng ko'p so'raladigan savollar va javoblar
            </p>
          </div>

          <div className="space-y-6">
            {[
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
                answer: "Ha, platformani muvaffaqiyatli tugatganingizdan so'ng professional sertifikat beriladi. Bu sertifikat sizning Git bilimingizni tasdiqlaydi."
              },
              {
                question: "Interaktiv terminal qanday ishlaydi?",
                answer: "Interaktiv terminal real Git buyruqlarini sinab ko'rish imkonini beradi. Hech qanday o'rnatish talab qilinmaydi - brauzerda to'g'ridan-to'g'ri ishlaydi."
              },
              {
                question: "Platformani qancha vaqtda tugatish mumkin?",
                answer: "Platforma jami 2 soat kontentdan iborat. Lekin siz o'z tezligingizda o'rganishingiz mumkin. Interaktiv terminal bilan mashq qilish uchun qo'shimcha vaqt ajrating."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-slate-200 dark:border-slate-800 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Platform Muallifi
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Git Ustasi platformasi kim tomonidan yaratilgan va nima uchun
            </p>
          </div>

          <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Creator Image */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <User className="h-16 w-16 text-slate-600 dark:text-slate-400" />
                  </div>
                </div>
                
                {/* Creator Info */}
                <div className="text-center lg:text-left flex-1">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                    <Badge variant="outline" className="text-sm">
                      Platform Muallifi
                    </Badge>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    Shohjahon
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 font-medium mb-4">
                    Full-Stack Developer
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Git Ustasi platformasi muallifi. O'zbek dasturchilar jamoasini rivojlantirish va 
                    professional ta'lim berish maqsadida bu platformani yaratdim. Git'ni professional 
                    darajada o'rganish uchun interaktiv terminal va real loyihalar bilan ta'minladim.
                  </p>
                  <div className="flex justify-center lg:justify-start">
                    <Logo size="md" variant="gradient" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Tez-tez So'raladigan Savollar
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Platformamiz haqida eng ko'p so'raladigan savollar va javoblar
            </p>
          </div>

          <div className="space-y-6">
            {[
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
                answer: "Ha, platformani muvaffaqiyatli tugatganingizdan so'ng professional sertifikat beriladi. Bu sertifikat sizning Git bilimingizni tasdiqlaydi."
              },
              {
                question: "Interaktiv terminal qanday ishlaydi?",
                answer: "Interaktiv terminal real Git buyruqlarini sinab ko'rish imkonini beradi. Hech qanday o'rnatish talab qilinmaydi - brauzerda to'g'ridan-to'g'ri ishlaydi."
              },
              {
                question: "Platformani qancha vaqtda tugatish mumkin?",
                answer: "Platforma jami 2 soat kontentdan iborat. Lekin siz o'z tezligingizda o'rganishingiz mumkin. Interaktiv terminal bilan mashq qilish uchun qo'shimcha vaqt ajrating."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-slate-200 dark:border-slate-800 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Platform Muallifi
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Git Ustasi platformasi kim tomonidan yaratilgan va nima uchun
            </p>
          </div>

          <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Creator Image */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <User className="h-16 w-16 text-slate-600 dark:text-slate-400" />
                  </div>
                </div>
                
                {/* Creator Info */}
                <div className="text-center lg:text-left flex-1">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                    <Badge variant="outline" className="text-sm">
                      Platform Muallifi
                    </Badge>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    Shohjahon
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 font-medium mb-4">
                    Full-Stack Developer
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Git Ustasi platformasi muallifi. O'zbek dasturchilar jamoasini rivojlantirish va 
                    professional ta'lim berish maqsadida bu platformani yaratdim. Git'ni professional 
                    darajada o'rganish uchun interaktiv terminal va real loyihalar bilan ta'minladim.
                  </p>
                  <div className="flex justify-center lg:justify-start">
                    <Logo size="md" variant="gradient" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}