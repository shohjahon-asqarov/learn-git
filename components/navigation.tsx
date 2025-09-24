"use client"

import { useState, useCallback, memo } from "react"
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

const NavigationLink = memo(({ item, index, pathname }: { item: typeof navigationItems[0], index: number, pathname: string }) => (
  <Link
    key={item.href}
    href={item.href}
    className={cn(
      "relative px-5 py-3 md:px-6 md:py-4 font-medium transition-all duration-300 group",
      "hover:text-slate-900 dark:hover:text-slate-100",
      pathname === item.href 
        ? "text-blue-600 dark:text-blue-400" 
        : "text-slate-600 dark:text-slate-400"
    )}
  >
    <div className="relative">
      <span className="relative z-10 text-base md:text-lg">{item.name}</span>

      {/* Active underline with animations */}
      <div className={cn(
        "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 transition-all duration-300",
        pathname === item.href
          ? "w-full opacity-100"
          : "w-0 opacity-0"
      )}></div>

      {/* Hover underline */}
      <div className={cn(
        "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 dark:from-slate-500 dark:to-slate-400 transition-all duration-300",
        "group-hover:w-full group-hover:opacity-100",
        pathname === item.href ? "opacity-0" : "opacity-0"
      )}></div>
    </div>
  </Link>
))

NavigationLink.displayName = 'NavigationLink'

export const Navigation = memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <nav className="border-b border-border glassmorphism-nav dark:glassmorphism-nav-dark sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity hover-lift">
            <Logo size="sm" variant="gradient" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            {navigationItems.map((item, index) => (
              <NavigationLink 
                key={item.href}
                item={item} 
                index={index} 
                pathname={pathname} 
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu className={cn(
                "absolute inset-0 h-5 w-5 transition-all duration-300",
                isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
              )} />
              <X className={cn(
                "absolute inset-0 h-5 w-5 transition-all duration-300",
                isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              )} />
            </div>
          </Button>
        </div>

        {/* Mobile Navigation - Smooth Slide */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-80 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
        )}>
          <div className="border-t border-border pt-3 pb-2">
            <div className="space-y-2">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    "block py-3 px-4 transition-all duration-300 group relative rounded-lg",
                    "hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/50",
                    pathname === item.href
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500"
                      : "text-slate-600 dark:text-slate-400",
                  )}
                  style={{ 
                    animationDelay: `${index * 0.05}s`,
                    animation: isOpen ? 'slideInLeft 0.2s ease-out forwards' : 'none'
                  }}
                >
                  <div className="relative">
                    <div className="font-semibold text-base mb-1">{item.name}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 leading-tight">
                      {item.description}
                    </div>

                    {/* Active indicator */}
                    {pathname === item.href && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 via-emerald-500 to-purple-500 rounded-r-full"></div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
})

Navigation.displayName = 'Navigation'