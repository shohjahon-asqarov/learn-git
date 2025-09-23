"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Users, CheckCircle, ExternalLink, Copy } from "lucide-react"

interface TelegramSubscriptionProps {
  className?: string
}

export function TelegramSubscription({ className }: TelegramSubscriptionProps) {
  const [copied, setCopied] = useState(false)
  const telegramChannel = "https://t.me/shoxjahon_dev"
  const channelName = "@shoxjahon_dev"

  const copyChannelLink = async () => {
    try {
      await navigator.clipboard.writeText(telegramChannel)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <Card className={`border-border bg-card/50 backdrop-blur ${className}`}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
            <MessageCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <CardTitle className="text-xl">Life of Shohjahon</CardTitle>
            <CardDescription className="text-base">
              Dasturlash va texnologiya haqida
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">
              <Users className="h-3 w-3 mr-1" />
              11+ a'zo
            </Badge>
            <Badge variant="outline" className="text-xs">
              Faol jamoaviy
            </Badge>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            "Kasb" deb emas, "qiziqish" deb qaraydigan yo'lim — dasturlash. 
            Git, dasturlash va texnologiya haqida yangi ma'lumotlar, maslahatlar va tajribalar.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Kanal afzalliklari:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span>Dasturlash tajribalari va maslahatlari</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span>Git va texnologiya yangiliklari</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span>Shaxsiy loyihalar va tajribalar</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span>Dasturlash qiziqishlari</span>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Kanal nomi:</span>
            <code className="text-sm bg-muted px-2 py-1 rounded font-mono">
              {channelName}
            </code>
            <Button
              variant="ghost"
              size="sm"
              onClick={copyChannelLink}
              className="h-6 w-6 p-0"
            >
              {copied ? (
                <CheckCircle className="h-3 w-3 text-green-500" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
            </Button>
          </div>
          
          <div className="flex gap-2">
            <Button asChild className="flex-1">
              <a href={telegramChannel} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                Kanalga qo'shilish
                <ExternalLink className="h-3 w-3 ml-2" />
              </a>
            </Button>
          </div>
        </div>

        <div className="text-xs text-muted-foreground text-center pt-2 border-t border-border">
          <p>Qo'shilish uchun Telegram ilovangizda kanal nomini qidiring yoki havolani bosing</p>
        </div>
      </CardContent>
    </Card>
  )
}
