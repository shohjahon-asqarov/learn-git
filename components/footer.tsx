import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Logo } from "@/components/logo"

const footerLinks = {
  darslar: [
    { name: "Barcha darslar", href: "/lessons" },
    { name: "Amaliyot", href: "/practice" },
    { name: "Resurslar", href: "/resources" },
  ],
  yordam: [
    { name: "Ko'p so'raladigan savollar", href: "/resources#faq" },
    { name: "Cheat Sheet", href: "/resources#cheatsheet" },
    { name: "Git qo'llanmasi", href: "https://git-scm.com/doc", external: true },
  ],
  jamoa: [
    { name: "Telegram kanal", href: "https://t.me/uzbekdevelopers", external: true },
    { name: "GitHub", href: "https://github.com", external: true },
    { name: "Aloqa", href: "mailto:info@gitouzbek.uz" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <Logo size="md" variant="gradient" className="mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                Git'ni o'zbek tilida o'rganish uchun eng yaxshi platforma. Bepul, ochiq manba va tushunarli.
              </p>
            </div>

            {/* Darslar */}
            <div>
              <h3 className="font-semibold mb-4">Darslar</h3>
              <ul className="space-y-2 text-sm">
                {footerLinks.darslar.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Yordam */}
            <div>
              <h3 className="font-semibold mb-4">Yordam</h3>
              <ul className="space-y-2 text-sm">
                {footerLinks.yordam.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                      >
                        {link.name}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Jamoa */}
            <div>
              <h3 className="font-semibold mb-4">Jamoa</h3>
              <ul className="space-y-2 text-sm">
                {footerLinks.jamoa.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                      >
                        {link.name}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
