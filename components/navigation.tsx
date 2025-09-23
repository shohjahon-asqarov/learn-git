"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { GitBranch, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navigationItems = [
  {
    name: "Bosh sahifa",
    href: "/",
    description: "Git O'zbek platformasiga xush kelibsiz",
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
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <GitBranch className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Git O'zbek</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-colors font-medium",
                  pathname === item.href && "text-foreground",
                )}
              >
                {item.name}
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
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block py-2 px-3 rounded-lg transition-colors",
                    pathname === item.href
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  )}
                >
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-muted-foreground mt-1">{item.description}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
