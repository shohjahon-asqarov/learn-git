"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, ArrowLeft, Search, Terminal, GitBranch, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* 404 Content */}
      <div className="flex items-center justify-center min-h-[80vh] px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Animated 404 */}
          <div className="mb-8 animate-fade-in-up">
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-emerald-500/20 to-purple-500/20 rounded-full blur-3xl scale-150 animate-git-pulse"></div>
              
              {/* Main 404 */}
              <div className="relative z-10">
                <h1 className="text-8xl lg:text-9xl font-bold mb-4">
                  <span className="professional-gradient">404</span>
                </h1>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <AlertCircle className="h-6 w-6 text-orange-500 animate-git-pulse" />
                  <span className="text-xl text-slate-600 dark:text-slate-400">
                    Sahifa topilmadi
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Oops! Bu sahifa mavjud emas
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Kechirasiz, qidirilayotgan sahifa topilmadi. Sahifa o'chirilgan, 
              ko'chirilgan yoki hech qachon mavjud bo'lmagan bo'lishi mumkin.
            </p>
          </div>

          {/* Git-themed Error Card */}
          <Card className="mb-8 git-card hover-glow animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Terminal className="h-8 w-8 text-blue-500 animate-git-pulse" />
                <GitBranch className="h-6 w-6 text-emerald-500 animate-git-pulse" style={{ animationDelay: '1s' }} />
                <Terminal className="h-8 w-8 text-purple-500 animate-git-pulse" style={{ animationDelay: '2s' }} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Git Buyrug'i: 404 Error
              </h3>
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-4">
                <code className="text-sm font-mono text-slate-700 dark:text-slate-300">
                  $ git checkout 404<br/>
                  error: pathspec '404' did not match any file(s) known to git.<br/>
                  <span className="text-orange-500">404: Page not found</span>
                </code>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Bu sahifa Git repository'da mavjud emas. Boshqa branch'ga o'ting yoki 
                mavjud sahifalardan birini tanlang.
              </p>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="hover-lift hover-glow" asChild>
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Bosh Sahifaga Qaytish
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="hover-lift git-card" asChild>
              <Link href="/lessons">
                <Terminal className="mr-2 h-5 w-5" />
                Darslarni Ko'rish
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="hover-lift git-card" asChild>
              <Link href="/practice">
                <GitBranch className="mr-2 h-5 w-5" />
                Terminal Demo
              </Link>
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Foydali Havolalar
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link 
                href="/lessons" 
                className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors hover-lift"
              >
                <div className="text-center">
                  <Terminal className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                  <div className="font-medium text-slate-900 dark:text-slate-100">Darslar</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Git'ni o'rganing</div>
                </div>
              </Link>
              
              <Link 
                href="/practice" 
                className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors hover-lift"
              >
                <div className="text-center">
                  <GitBranch className="h-6 w-6 text-emerald-500 mx-auto mb-2" />
                  <div className="font-medium text-slate-900 dark:text-slate-100">Amaliyot</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Terminal demo</div>
                </div>
              </Link>
              
              <Link 
                href="/resources" 
                className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors hover-lift"
              >
                <div className="text-center">
                  <Search className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                  <div className="font-medium text-slate-900 dark:text-slate-100">Resurslar</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Qo'shimcha ma'lumot</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
