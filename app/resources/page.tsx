import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLink, Download, MessageCircle, Github, BookOpen, HelpCircle, Globe, Terminal } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const usefulLinks = [
  {
    title: "Git'ning rasmiy qo'llanmasi",
    description: "Git'ning to'liq hujjatlari (ingliz tilida)",
    url: "https://git-scm.com/doc",
    icon: BookOpen,
    category: "Hujjatlar",
  },
  {
    title: "GitHub'ga kirish",
    description: "GitHub platformasi bilan ishlashni o'rganing",
    url: "https://github.com",
    icon: Github,
    category: "Platformalar",
  },
  {
    title: "Git Visualizer",
    description: "Git buyruqlarini vizual ko'rish uchun interaktiv vosita",
    url: "https://git-school.github.io/visualizing-git/",
    icon: Globe,
    category: "Vositalar",
  },
  {
    title: "O'zbek dasturchilar jamoasi",
    description: "Telegram kanalida yordam va maslahat oling",
    url: "https://t.me/uzbekdevelopers",
    icon: MessageCircle,
    category: "Jamoa",
  },
]

const faqData = [
  {
    question: "Git va GitHub orasidagi farq nima?",
    answer:
      "Git bu lokal kompyuterda ishlaydigan version control dasturi. GitHub esa Git omborxonalarini onlayn saqlaydigan va ulashish imkonini beruvchi veb-xizmat. Git - bu vosita, GitHub - bu xizmat.",
  },
  {
    question: "Nima uchun commit'larim push bo'lmayapti?",
    answer:
      "Bu muammo ko'pincha remote repository'da yangi o'zgarishlar bo'lganda yuzaga keladi. Avval 'git pull' qilib, boshqa dasturchilarning o'zgarishlarini oling, keyin 'git push' qiling.",
  },
  {
    question: "Kodni o'chirib yubordim, nima qilaman?",
    answer:
      "Agar kod commit qilingan bo'lsa, 'git log' bilan tarixni ko'ring va 'git reset --hard commit-id' yoki 'git revert commit-id' buyruqlaridan foydalaning. Agar commit qilinmagan bo'lsa, 'git checkout -- fayl-nomi' ishlatib ko'ring.",
  },
  {
    question: "Branch'larni nima uchun ishlatish kerak?",
    answer:
      "Branch'lar parallel ishlov berish imkonini beradi. Har bir yangi xususiyat yoki tuzatish uchun alohida branch yaratib, asosiy kodga ta'sir qilmasdan ishlashingiz mumkin. Tayyor bo'lgach, merge qilasiz.",
  },
  {
    question: "Conflict nima va qanday hal qilaman?",
    answer:
      "Conflict ikki yoki undan ortiq dasturchi bir xil faylning bir xil qismini o'zgartirganda yuzaga keladi. Git avtomatik birlashtira olmaydi va sizdan qo'lda hal qilishni so'raydi. Faylni ochib, kerakli o'zgarishlarni tanlab, commit qiling.",
  },
  {
    question: "Git'ni qanday o'rnataman?",
    answer:
      "Windows uchun git-scm.com saytidan yuklab oling. macOS'da Homebrew orqali 'brew install git' qiling. Linux'da 'sudo apt install git' (Ubuntu/Debian) yoki 'sudo yum install git' (CentOS/RHEL) ishlatiladi.",
  },
]

const cheatSheetCommands = [
  {
    category: "Boshlash",
    commands: [
      { command: "git init", description: "Yangi repository yaratish" },
      { command: "git clone <url>", description: "Mavjud repository'ni nusxalash" },
      { command: "git config --global user.name 'Ism'", description: "Foydalanuvchi nomini sozlash" },
      { command: "git config --global user.email 'email'", description: "Email manzilini sozlash" },
    ],
  },
  {
    category: "Asosiy buyruqlar",
    commands: [
      { command: "git status", description: "Repository holatini ko'rish" },
      { command: "git add <fayl>", description: "Faylni staging area'ga qo'shish" },
      { command: "git add .", description: "Barcha o'zgarishlarni qo'shish" },
      { command: "git commit -m 'xabar'", description: "O'zgarishlarni saqlash" },
      { command: "git log", description: "Commit tarixini ko'rish" },
    ],
  },
  {
    category: "Branch'lar",
    commands: [
      { command: "git branch", description: "Branch'larni ko'rish" },
      { command: "git branch <nom>", description: "Yangi branch yaratish" },
      { command: "git checkout <branch>", description: "Branch'ga o'tish" },
      { command: "git merge <branch>", description: "Branch'ni birlashtirish" },
      { command: "git branch -d <branch>", description: "Branch'ni o'chirish" },
    ],
  },
  {
    category: "Remote bilan ishlash",
    commands: [
      { command: "git remote add origin <url>", description: "Remote repository qo'shish" },
      { command: "git push origin <branch>", description: "O'zgarishlarni yuborish" },
      { command: "git pull origin <branch>", description: "O'zgarishlarni olish" },
      { command: "git fetch", description: "Remote ma'lumotlarini yangilash" },
    ],
  },
  {
    category: "Tuzatish va qaytarish",
    commands: [
      { command: "git reset --hard HEAD~1", description: "Oxirgi commit'ni bekor qilish" },
      { command: "git revert <commit-id>", description: "Commit'ni bekor qilish (xavfsiz)" },
      { command: "git checkout -- <fayl>", description: "Faylni oldingi holatiga qaytarish" },
      { command: "git stash", description: "O'zgarishlarni vaqtincha saqlash" },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Git haqida ko'proq ma'lumot</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Foydali havolalar, ko'p so'raladigan savollar va Git buyruqlari bo'yicha to'liq qo'llanma
            </p>
          </div>
        </div>
      </section>

      {/* Useful Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">Foydali havolalar</h2>
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Git o'rganish va amaliyot qilish uchun eng yaxshi resurslar
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {usefulLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <Card
                    key={index}
                    className="border-border bg-card/50 backdrop-blur hover:bg-card/70 transition-colors group"
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-lg">{link.title}</CardTitle>
                            <Badge variant="outline" className="text-xs">
                              {link.category}
                            </Badge>
                          </div>
                          <CardDescription className="text-base mb-4">{link.description}</CardDescription>
                          <Button variant="outline" size="sm" asChild>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                              Ochish
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ko'p so'raladigan savollar</h2>
              <p className="text-xl text-muted-foreground">
                Git bilan ishlashda tez-tez uchraydigan savollar va javoblar
              </p>
            </div>

            <Card className="border-border bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqData.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center gap-3">
                          <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pl-8">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Git Cheat Sheet */}
      <section id="cheatsheet" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Git Cheat Sheet</h2>
              <p className="text-xl text-muted-foreground mb-6">Eng muhim Git buyruqlari va ularning qisqa tavsifi</p>
              <Button variant="outline" className="mb-8 bg-transparent">
                <Download className="mr-2 h-4 w-4" />
                PDF sifatida yuklab olish
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {cheatSheetCommands.map((category, index) => (
                <Card key={index} className="border-border bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Terminal className="h-5 w-5 text-primary" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.commands.map((cmd, cmdIndex) => (
                        <div key={cmdIndex} className="border border-border rounded-lg p-4 bg-muted/30">
                          <code className="text-sm font-mono bg-primary/10 px-2 py-1 rounded text-primary block mb-2">
                            {cmd.command}
                          </code>
                          <p className="text-sm text-muted-foreground">{cmd.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Jamoa bilan bog'laning</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Savollaringiz bormi? Yordam kerakmi? O'zbek dasturchilar jamoasi bilan bog'laning!
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Telegram kanal</CardTitle>
                  <CardDescription className="text-base">
                    O'zbek dasturchilar jamoasi bilan muloqot qiling va yordam oling
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild>
                    <a href="https://t.me/uzbekdevelopers" target="_blank" rel="noopener noreferrer">
                      Kanalga qo'shilish
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">GitHub</CardTitle>
                  <CardDescription className="text-base">
                    Loyiha kodini ko'ring, xatolarni xabar qiling va hissa qo'shing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      GitHub'da ko'rish
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Hali ham savollaringiz bormi?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Darslarni qayta ko'rib chiqing yoki amaliyot maydonchasi orqali mashq qiling
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/lessons">
                  Darslarni ko'rish
                  <BookOpen className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/practice">
                  Amaliyot qilish
                  <Terminal className="ml-2 h-5 w-5" />
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
