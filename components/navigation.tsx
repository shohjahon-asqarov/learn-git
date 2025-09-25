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

const NavigationLink = memo(({ item, pathname }: { item: (typeof navigationItems)[0]; pathname: string }) => {
  const isActive = pathname === item.href

  return (
    <Link
      href={item.href}
      className={cn(
        "relative px-4 py-2 font-medium transition-all duration-300 rounded-lg hover-lift",
        "hover:bg-blue-50 hover:shadow-md hover:scale-105",
        isActive ? "text-blue-600 bg-blue-50 shadow-md scale-105" : "text-slate-700 hover:text-blue-600",
      )}
    >
      {item.name}
      {isActive && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-blue-600 rounded-full animate-scale-x"></div>
      )}
    </Link>
  )
})

NavigationLink.displayName = "NavigationLink"

export const Navigation = memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-xl shadow-sm animate-slide-down">
      <div className="container mx-auto px-4 py-3 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-all duration-300 hover:scale-105">
            <Logo size="md" variant="professional" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item, index) => (
              <div key={item.href} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <NavigationLink item={item} pathname={pathname} />
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-blue-50 hover:scale-105 transition-all duration-300"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-3 pt-3 border-t animate-fade-in-up">
            <div className="space-y-1">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    "block py-3 px-4 rounded-lg transition-all duration-300 hover-lift",
                    "hover:bg-blue-50 hover:shadow-md",
                    pathname === item.href
                      ? "text-blue-600 bg-blue-50 shadow-md"
                      : "text-slate-700 hover:text-blue-600",
                    "animate-slide-in-left",
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-slate-500">{item.description}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
})

Navigation.displayName = "Navigation"
