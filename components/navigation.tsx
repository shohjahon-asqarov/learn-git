"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"

const navigationItems = [
  {
    name: "Bosh sahifa",
    href: "/",
    description: "Git Ustasi platformasiga xush kelibsiz",
  },
  {
    name: "Darslar",
    href: "/lessons",
    description: "5 ta bosqichda Git'ni o'rganing",
  },
  {
    name: "Amaliyot",
    href: "/practice",
    description: "Interaktiv terminal bilan mashq qiling",
  },
  {
    name: "Resurslar",
    href: "/resources",
    description: "Foydali havolalar va qo'llanma",
  },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="border-b border-border glassmorphism-nav dark:glassmorphism-nav-dark sticky top-0 z-50 animate-fade-in-up">
      <div className="container mx-auto px-6 py-5 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity hover-lift">
            <Logo size="md" variant="gradient" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-5 py-3 font-medium transition-all duration-300 animate-fade-in-up group",
                  "hover:text-slate-900 dark:hover:text-slate-100",
                  pathname === item.href 
                    ? "text-blue-600 dark:text-blue-400" 
                    : "text-slate-600 dark:text-slate-400"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Smooth underline */}
                <div className="relative">
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Active underline with animations */}
                  <div className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 transition-all duration-300",
                    "animate-underline-glow",
                    pathname === item.href 
                      ? "w-full opacity-100 animate-underline-pulse" 
                      : "w-0 opacity-0"
                  )}></div>
                  
                  {/* Sliding underline effect */}
                  <div className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent",
                    "animate-underline-slide",
                    pathname === item.href ? "opacity-100" : "opacity-0"
                  )}></div>
                  
                  {/* Hover underline */}
                  <div className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 dark:from-slate-500 dark:to-slate-400 transition-all duration-300",
                    "group-hover:w-full group-hover:opacity-100",
                    pathname === item.href ? "opacity-0" : "opacity-0"
                  )}></div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-border pt-6 animate-fade-in-up">
            <div className="space-y-3">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block py-4 px-5 transition-all duration-300 group relative",
                    "hover:text-slate-900 dark:hover:text-slate-100",
                    pathname === item.href
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-600 dark:text-slate-400",
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Smooth underline for mobile */}
                  <div className="relative">
                    <div className="font-medium flex items-center justify-between">
                      <span className="relative z-10">{item.name}</span>
                      {pathname === item.href && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-git-pulse"></div>
                      )}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 mt-1 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                      {item.description}
                    </div>
                    
                    {/* Active underline with animations */}
                    <div className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 transition-all duration-300",
                      "animate-underline-glow",
                      pathname === item.href 
                        ? "w-full opacity-100 animate-underline-pulse" 
                        : "w-0 opacity-0"
                    )}></div>
                    
                    {/* Sliding underline effect */}
                    <div className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent",
                      "animate-underline-slide",
                      pathname === item.href ? "opacity-100" : "opacity-0"
                    )}></div>
                    
                    {/* Hover underline */}
                    <div className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 dark:from-slate-500 dark:to-slate-400 transition-all duration-300",
                      "group-hover:w-full group-hover:opacity-100",
                      pathname === item.href ? "opacity-0" : "opacity-0"
                    )}></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
