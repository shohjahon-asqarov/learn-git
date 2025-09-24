"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User } from "lucide-react"
import { Logo } from "@/components/logo"

export function CreatorSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-8">
            Platform Muallifi
          </h2>
          <p className="text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Git Ustasi platformasi kim tomonidan yaratilgan va nima uchun
          </p>
        </div>

        <Card className="border-0 shadow-2xl bg-white dark:bg-slate-800 overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row">
              {/* Creator Image - Kattaroq va dramatik */}
              <div className="lg:w-2/5 relative">
                <div className="relative h-96 lg:h-full min-h-[500px] overflow-hidden">
                  <img
                    src="/shohjahon.png"
                    alt="Shohjahon - Platform Muallifi"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      // Agar rasm topilmasa, placeholder ko'rsatish
                      const img = e.currentTarget as HTMLImageElement;
                      const placeholder = img.parentElement?.querySelector('.placeholder') as HTMLElement;
                      img.style.display = 'none';
                      if (placeholder) {
                        placeholder.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center placeholder absolute inset-0" style={{ display: 'none' }}>
                    <User className="h-32 w-32 text-slate-600 dark:text-slate-400" />
                  </div>

                </div>
              </div>

              {/* Creator Info - Kengroq va professional */}
              <div className="lg:w-3/5 p-12 lg:p-16 flex flex-col justify-center">
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-base px-4 py-2 border-2">
                      Platform Muallifi
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                      Shohjahon
                    </h3>
                    <p className="text-2xl text-slate-600 dark:text-slate-400 font-medium">
                      Full-Stack Developer
                    </p>
                  </div>

                  <div className="space-y-6">
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                      Git Ustasi platformasi muallifi. O'zbek dasturchilar jamoasini rivojlantirish va
                      professional ta'lim berish maqsadida bu platformani yaratdim.
                    </p>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                      Git'ni professional darajada o'rganish uchun interaktiv terminal va real loyihalar
                      bilan ta'minladim. Har bir dasturchi Git'ni mukammal bilishi kerak.
                    </p>
                  </div>

                  <div className="pt-6">
                    <Logo size="lg" variant="gradient" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
