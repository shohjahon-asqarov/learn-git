import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GitBranch, Users, Shield, Clock, BookOpen, Terminal, FileText, Play, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const lessons = [
  {
    id: 1,
    title: "Git'ga kirish",
    description: "Git nima va nima uchun kerak? Asosiy tushunchalar bilan tanishish.",
    duration: "15 daqiqa",
    level: "Boshlang'ich",
    icon: BookOpen,
    topics: ["Git tarixi va maqsadi", "Version Control System nima?", "Git vs boshqa VCS tizimlar", "Git'ni o'rnatish"],
    commands: [
      { command: "git --version", description: "Git versiyasini tekshirish" },
      { command: 'git config --global user.name "Ismingiz"', description: "Foydalanuvchi nomini sozlash" },
      { command: 'git config --global user.email "email@example.com"', description: "Email manzilini sozlash" },
    ],
    example:
      "Tasavvur qiling, siz kitob yozyapsiz. Har safar yangi bob qo'shganingizda, eski versiyani saqlab qo'yasiz. Git xuddi shunday ishlaydi - kodingizning har bir o'zgarishini saqlab boradi.",
    practice: "Kompyuteringizda Git o'rnatilganligini tekshiring va o'zingizning ma'lumotlaringizni sozlang.",
  },
  {
    id: 2,
    title: "Eng kerakli buyruqlar",
    description: "Har kuni ishlatiladigan asosiy Git buyruqlari va ularning vazifasi.",
    duration: "25 daqiqa",
    level: "Boshlang'ich",
    icon: Terminal,
    topics: ["Repository yaratish", "Fayllarni kuzatishga qo'shish", "Commit qilish", "Holat tekshirish"],
    commands: [
      { command: "git init", description: "Yangi Git repository yaratish" },
      { command: "git status", description: "Loyihaning hozirgi holatini ko'rsatish" },
      { command: "git add .", description: "Barcha o'zgarishlarni sahnaga qo'shish" },
      { command: 'git commit -m "Izoh"', description: "O'zgarishlarni loyiha tarixiga saqlash" },
    ],
    example:
      "Git commit - bu rasmga olishga o'xshaydi. Har safar muhim o'zgarish qilganingizda, uni 'rasmga olib' saqlab qo'yasiz.",
    practice: "Yangi papka yarating, uni Git repository qiling va birinchi commit'ingizni bajaring.",
  },
  {
    id: 3,
    title: "Branch va birlashish (merge)",
    description: "Parallel ishlov berish va kodlarni xavfsiz birlashtirishni o'rganish.",
    duration: "30 daqiqa",
    level: "O'rta",
    icon: GitBranch,
    topics: ["Branch nima va nima uchun kerak?", "Yangi branch yaratish", "Branch'lar orasida o'tish", "Merge qilish"],
    commands: [
      { command: "git branch", description: "Mavjud branch'larni ko'rish" },
      { command: "git branch yangi-branch", description: "Yangi branch yaratish" },
      { command: "git checkout yangi-branch", description: "Boshqa branch'ga o'tish" },
      { command: "git merge yangi-branch", description: "Branch'ni asosiy branch bilan birlashtirish" },
    ],
    example:
      "Branch - bu yo'lning shoxchasi kabi. Asosiy yo'ldan ajralib, yangi xususiyat ustida ishlab, keyin yana asosiy yo'lga qo'shilasiz.",
    practice: "Loyihangizda yangi branch yarating, unda o'zgarish qiling va uni main branch bilan birlashtiring.",
  },
  {
    id: 4,
    title: "Git va GitHub'da jamoa bo'lib ishlash",
    description: "Boshqa dasturchilar bilan birgalikda loyiha ustida ishlash.",
    duration: "35 daqiqa",
    level: "O'rta",
    icon: Users,
    topics: ["Remote repository nima?", "GitHub bilan ishlash", "Push va Pull", "Conflict'larni hal qilish"],
    commands: [
      { command: "git remote add origin URL", description: "Remote repository qo'shish" },
      { command: "git push origin main", description: "O'zgarishlarni remote'ga yuborish" },
      { command: "git pull origin main", description: "Remote'dan o'zgarishlarni olish" },
      { command: "git clone URL", description: "Mavjud repository'ni nusxalash" },
    ],
    example:
      "GitHub - bu kodingiz uchun bulutli xotira. Siz o'z kompyuteringizda ishlaysiz, keyin natijani bulutga yuklaysiz.",
    practice: "GitHub'da repository yarating va o'z loyihangizni u yerga yuklang.",
  },
  {
    id: 5,
    title: "Xatolarni tuzatish va versiyalarni qaytarish",
    description: "Muammolar yuzaga kelganda ularni hal qilish yo'llari.",
    duration: "20 daqiqa",
    level: "Ilg'or",
    icon: Shield,
    topics: ["Commit'ni bekor qilish", "Fayllarni oldingi holatiga qaytarish", "Tarixni ko'rish", "Xatolarni tuzatish"],
    commands: [
      { command: "git log", description: "Commit tarixini ko'rish" },
      { command: "git reset --hard HEAD~1", description: "Oxirgi commit'ni bekor qilish" },
      { command: "git checkout -- fayl.txt", description: "Faylni oldingi holatiga qaytarish" },
      { command: "git revert commit-id", description: "Ma'lum commit'ni bekor qilish" },
    ],
    example:
      "Git'da xato qilish qo'rqinchli emas - har doim orqaga qaytish mumkin. Bu vaqt mashinasiga ega bo'lish kabi.",
    practice: "Loyihangizda xato commit qiling, keyin uni turli usullar bilan tuzating.",
  },
]

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Git'ni Noldan O'rganish</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              5 ta bosqichda Git'ni to'liq o'zlashtiring. Har bir dars nazariya, amaliyot va hayotiy misollar bilan
              boyitilgan.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Jami: 2 soat</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>5 ta dars</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>1000+ o'quvchi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              {lessons.map((lesson, index) => {
                const Icon = lesson.icon
                return (
                  <Card key={lesson.id} className="border-border bg-card/50 backdrop-blur overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline" className="text-xs font-mono">
                              {String(lesson.id).padStart(2, "0")}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {lesson.level}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {lesson.duration}
                            </Badge>
                          </div>
                          <CardTitle className="text-2xl mb-2">{lesson.title}</CardTitle>
                          <CardDescription className="text-base">{lesson.description}</CardDescription>
                        </div>
                        <Button size="sm" className="flex-shrink-0" asChild>
                          <Link href={`/lessons/${lesson.id}`}>
                            <Play className="h-4 w-4 mr-2" />
                            Boshlash
                          </Link>
                        </Button>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <Tabs defaultValue="overview" className="w-full">
                        <TabsList className="grid w-full grid-cols-4">
                          <TabsTrigger value="overview">Umumiy</TabsTrigger>
                          <TabsTrigger value="commands">Buyruqlar</TabsTrigger>
                          <TabsTrigger value="example">Misol</TabsTrigger>
                          <TabsTrigger value="practice">Amaliyot</TabsTrigger>
                        </TabsList>

                        <TabsContent value="overview" className="mt-6">
                          <div>
                            <h4 className="font-semibold mb-3">Dars mavzulari:</h4>
                            <ul className="space-y-2">
                              {lesson.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} className="flex items-center gap-2 text-sm">
                                  <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </TabsContent>

                        <TabsContent value="commands" className="mt-6">
                          <div className="space-y-4">
                            <h4 className="font-semibold mb-3">Asosiy buyruqlar:</h4>
                            {lesson.commands.map((cmd, cmdIndex) => (
                              <div key={cmdIndex} className="border border-border rounded-lg p-4 bg-muted/30">
                                <code className="text-sm font-mono bg-primary/10 px-2 py-1 rounded text-primary">
                                  {cmd.command}
                                </code>
                                <p className="text-sm text-muted-foreground mt-2">{cmd.description}</p>
                              </div>
                            ))}
                          </div>
                        </TabsContent>

                        <TabsContent value="example" className="mt-6">
                          <div className="border border-border rounded-lg p-6 bg-muted/30">
                            <h4 className="font-semibold mb-3">Hayotiy misol:</h4>
                            <p className="text-muted-foreground leading-relaxed">{lesson.example}</p>
                          </div>
                        </TabsContent>

                        <TabsContent value="practice" className="mt-6">
                          <div className="border border-border rounded-lg p-6 bg-primary/5 border-primary/20">
                            <h4 className="font-semibold mb-3 text-primary">Amaliy mashq:</h4>
                            <p className="text-muted-foreground leading-relaxed mb-4">{lesson.practice}</p>
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/lessons/${lesson.id}/practice`}>
                                <Terminal className="h-4 w-4 mr-2" />
                                Amaliyot maydonchasi
                              </Link>
                            </Button>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Progress Section */}
            <div className="mt-16 text-center">
              <Card className="border-border bg-card/50 backdrop-blur max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl">Tayyor Git ustasiga aylanishga?</CardTitle>
                  <CardDescription className="text-base">
                    Barcha darslarni tugatganingizdan so'ng, real loyihalarda Git'dan foydalanishni boshlang.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                      <Link href="/practice">
                        Amaliyot maydonchasi
                        <Terminal className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/resources">
                        Qo'shimcha resurslar
                        <FileText className="ml-2 h-5 w-5" />
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
