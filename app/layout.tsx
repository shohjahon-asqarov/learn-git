import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Git O'zbek - Git'ni o'zbek tilida o'rganing",
  description:
    "Git version control tizimini o'zbek tilida o'rganish uchun eng yaxshi platforma. Bepul darslar, amaliyot va resurslar.",
  keywords: ["git", "uzbek", "o'zbek", "dasturlash", "version control", "github", "shohjahon"],
  authors: [{ name: "Shohjahon" }],
  creator: "Shohjahon",
  publisher: "Git O'zbek by Shohjahon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gitouzbek.uz"),
  openGraph: {
    title: "Git O'zbek - Git'ni o'zbek tilida o'rganing",
    description: "Git version control tizimini o'zbek tilida o'rganish uchun eng yaxshi platforma. Shohjahon tomonidan yaratilgan.",
    url: "https://gitouzbek.uz",
    siteName: "Git O'zbek by Shohjahon",
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Git O'zbek - Git'ni o'zbek tilida o'rganing",
    description: "Git version control tizimini o'zbek tilida o'rganish uchun eng yaxshi platforma. Shohjahon tomonidan yaratilgan.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
