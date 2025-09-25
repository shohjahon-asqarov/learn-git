"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Terminal, RotateCcw, CheckCircle, AlertCircle, Copy, Check, Play, BookOpen } from "lucide-react"

interface TerminalLine {
  type: "command" | "output" | "error" | "success" | "info"
  content: string
  timestamp: number
}

interface GitCommand {
  command: string
  output: string
  type: "success" | "error"
  description: string
}

const gitCommands: Record<string, GitCommand> = {
  "git init": {
    command: "git init",
    output: `Initialized empty Git repository in /current/directory/.git/
✅ Bo'sh Git omborxonasi muvaffaqiyatli yaratildi!
💡 Endi 'git status' bilan holatni tekshiring.`,
    type: "success",
    description: "Yangi Git repository yaratadi",
  },
  "git status": {
    command: "git status",
    output: `On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md
        index.html
        style.css

nothing added to commit but untracked files present (use "git add" to track)

📝 Izohlar:
- Hozirda 'main' branch'da turibsiz
- Hali hech qanday commit yo'q
- 3 ta kuzatilmagan fayl mavjud`,
    type: "success",
    description: "Repository holatini ko'rsatadi",
  },
  "git add .": {
    command: "git add .",
    output: `✅ Barcha fayllar staging area'ga qo'shildi:
   - README.md
   - index.html  
   - style.css
   
💡 Endi 'git commit -m "xabar"' bilan commit qiling.`,
    type: "success",
    description: "Barcha o'zgarishlarni staging area'ga qo'shadi",
  },
  "git add readme.md": {
    command: "git add README.md",
    output: `✅ README.md fayli staging area'ga qo'shildi
💡 'git status' bilan holatni tekshiring.`,
    type: "success",
    description: "Ma'lum faylni staging area'ga qo'shadi",
  },
  "git add index.html": {
    command: "git add index.html",
    output: `✅ index.html fayli staging area'ga qo'shildi
💡 'git status' bilan holatni tekshiring.`,
    type: "success",
    description: "HTML faylni staging area'ga qo'shadi",
  },
  'git commit -m "birinchi commit"': {
    command: 'git commit -m "birinchi commit"',
    output: `[main (root-commit) a1b2c3d] birinchi commit
 3 files changed, 45 insertions(+)
 create mode 100644 README.md
 create mode 100644 index.html
 create mode 100644 style.css

🎉 Birinchi commit muvaffaqiyatli yaratildi!
📊 3 ta fayl, 45 ta qator qo'shildi`,
    type: "success",
    description: "O'zgarishlarni repository tarixiga saqlaydi",
  },
  'git commit -m "test"': {
    command: 'git commit -m "test"',
    output: `[main b2c3d4e] test
 1 file changed, 3 insertions(+), 1 deletion(-)

✅ Test commit yaratildi
📈 1 fayl o'zgartirildi`,
    type: "success",
    description: "Test commit yaratadi",
  },
  'git commit -m "yangi xususiyat"': {
    command: 'git commit -m "yangi xususiyat"',
    output: `[main c3d4e5f] yangi xususiyat
 2 files changed, 12 insertions(+), 2 deletions(-)

✅ Yangi xususiyat commit qilindi
📊 2 ta fayl o'zgartirildi`,
    type: "success",
    description: "Yangi xususiyat commit qiladi",
  },
  "git log": {
    command: "git log",
    output: `commit c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0a1b2 (HEAD -> main)
Author: Foydalanuvchi <user@example.com>
Date:   ${new Date().toLocaleDateString("uz-UZ", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}

    yangi xususiyat

commit b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0a1 
Author: Foydalanuvchi <user@example.com>
Date:   ${new Date(Date.now() - 3600000).toLocaleDateString("uz-UZ", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}

    test

commit a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0 
Author: Foydalanuvchi <user@example.com>
Date:   ${new Date(Date.now() - 86400000).toLocaleDateString("uz-UZ", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}

    birinchi commit

📚 Jami 3 ta commit mavjud`,
    type: "success",
    description: "Commit tarixini ko'rsatadi",
  },
  "git log --oneline": {
    command: "git log --oneline",
    output: `c3d4e5f (HEAD -> main) yangi xususiyat
b2c3d4e test  
a1b2c3d birinchi commit

📝 Qisqacha tarix ko'rsatildi`,
    type: "success",
    description: "Qisqacha commit tarixini ko'rsatadi",
  },
  "git branch": {
    command: "git branch",
    output: `* main

🌿 Hozirda 'main' branch'da turibsiz`,
    type: "success",
    description: "Mavjud branch'larni ko'rsatadi",
  },
  "git branch yangi-branch": {
    command: "git branch yangi-branch",
    output: `✅ Yangi branch 'yangi-branch' muvaffaqiyatli yaratildi
💡 'git checkout yangi-branch' bilan o'ting`,
    type: "success",
    description: "Yangi branch yaratadi",
  },
  "git branch feature": {
    command: "git branch feature",
    output: `✅ Yangi branch 'feature' muvaffaqiyatli yaratildi
💡 'git checkout feature' bilan o'ting`,
    type: "success",
    description: "Feature branch yaratadi",
  },
  "git branch dev": {
    command: "git branch dev",
    output: `✅ Yangi branch 'dev' muvaffaqiyatli yaratildi
💡 'git checkout dev' bilan o'ting`,
    type: "success",
    description: "Development branch yaratadi",
  },
  "git checkout yangi-branch": {
    command: "git checkout yangi-branch",
    output: `Switched to branch 'yangi-branch'
🔄 'yangi-branch' ga muvaffaqiyatli o'tdingiz`,
    type: "success",
    description: "Boshqa branch'ga o'tadi",
  },
  "git checkout main": {
    command: "git checkout main",
    output: `Switched to branch 'main'
🔄 'main' branch'ga qaytdingiz`,
    type: "success",
    description: "Main branch'ga o'tadi",
  },
  "git checkout feature": {
    command: "git checkout feature",
    output: `Switched to branch 'feature'
🔄 'feature' branch'ga o'tdingiz`,
    type: "success",
    description: "Feature branch'ga o'tadi",
  },
  "git checkout dev": {
    command: "git checkout dev",
    output: `Switched to branch 'dev'
🔄 'dev' branch'ga o'tdingiz`,
    type: "success",
    description: "Development branch'ga o'tadi",
  },
  "git merge yangi-branch": {
    command: "git merge yangi-branch",
    output: `Updating a1b2c3d..c3d4e5f
Fast-forward
 feature.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 feature.txt

🎉 'yangi-branch' muvaffaqiyatli birlashtirildi!
📊 1 ta yangi fayl qo'shildi`,
    type: "success",
    description: "Branch'ni joriy branch bilan birlashtiradi",
  },
  "git merge feature": {
    command: "git merge feature",
    output: `Updating b2c3d4e..d4e5f6g
Fast-forward
 feature.js | 15 +++++++++++++++
 1 file changed, 15 insertions(+)
 create mode 100644 feature.js

🎉 'feature' branch muvaffaqiyatli birlashtirildi!
📊 15 ta yangi qator qo'shildi`,
    type: "success",
    description: "Feature branch'ni birlashtiradi",
  },
  "git diff": {
    command: "git diff",
    output: `diff --git a/README.md b/README.md
index 1234567..abcdefg 100644
--- a/README.md
+++ b/README.md
@@ -1,3 +1,4 @@
 # Git O'zbek Loyihasi
 
 Bu loyiha Git'ni o'rganish uchun yaratilgan.
+Yangi qator qo'shildi.

📝 1 ta fayl o'zgartirilgan, 1 ta qator qo'shilgan`,
    type: "success",
    description: "O'zgarishlarni ko'rsatadi",
  },
  "git remote -v": {
    command: "git remote -v",
    output: `origin  https://github.com/user/git-uzbek-repo.git (fetch)
origin  https://github.com/user/git-uzbek-repo.git (push)

🌐 Remote repository manzili ko'rsatildi`,
    type: "success",
    description: "Remote repository'larni ko'rsatadi",
  },
  "git stash": {
    command: "git stash",
    output: `Saved working directory and index state WIP on main: a1b2c3d birinchi commit

💾 O'zgarishlar vaqtincha saqlandi
💡 'git stash pop' bilan qaytaring`,
    type: "success",
    description: "O'zgarishlarni vaqtincha saqlaydi",
  },
  "git stash pop": {
    command: "git stash pop",
    output: `On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
        modified:   README.md

Dropped refs/stash@{0} (1234567)

📤 Saqlangan o'zgarishlar qaytarildi`,
    type: "success",
    description: "Saqlangan o'zgarishlarni qaytaradi",
  },
  "git reset --soft head~1": {
    command: "git reset --soft HEAD~1",
    output: `✅ Oxirgi commit bekor qilindi (fayllar saqlanib qoldi)
💡 O'zgarishlar staging area'da qoldi`,
    type: "success",
    description: "Oxirgi commit'ni yumshoq tarzda bekor qiladi",
  },
  "git reset --hard head~1": {
    command: "git reset --hard HEAD~1",
    output: `HEAD is now at a1b2c3d birinchi commit
⚠️  Oxirgi commit va barcha o'zgarishlar o'chirildi!`,
    type: "success",
    description: "Oxirgi commit'ni qattiq tarzda bekor qiladi",
  },
  pwd: {
    command: "pwd",
    output: `/home/user/git-loyiha
📁 Joriy papka manzili`,
    type: "success",
    description: "Joriy papka yo'lini ko'rsatadi",
  },
  ls: {
    command: "ls",
    output: `README.md
index.html
style.css
.git/

📂 4 ta element topildi`,
    type: "success",
    description: "Papkadagi fayllarni ko'rsatadi",
  },
  "ls -la": {
    command: "ls -la",
    output: `total 16
drwxr-xr-x  4 user user  128 Dec 15 10:30 .
drwxr-xr-x 15 user user  480 Dec 15 10:25 ..
drwxr-xr-x  8 user user  256 Dec 15 10:30 .git
-rw-r--r--  1 user user   45 Dec 15 10:28 README.md
-rw-r--r--  1 user user  234 Dec 15 10:29 index.html
-rw-r--r--  1 user user  156 Dec 15 10:29 style.css

📊 Batafsil ma'lumot ko'rsatildi`,
    type: "success",
    description: "Batafsil fayl ma'lumotlarini ko'rsatadi",
  },
  "mkdir yangi-papka": {
    command: "mkdir yangi-papka",
    output: `✅ 'yangi-papka' papkasi yaratildi
📁 Yangi papka muvaffaqiyatli qo'shildi`,
    type: "success",
    description: "Yangi papka yaratadi",
  },
  "touch yangi-fayl.txt": {
    command: "touch yangi-fayl.txt",
    output: `✅ 'yangi-fayl.txt' fayli yaratildi
📄 Bo'sh fayl muvaffaqiyatli qo'shildi`,
    type: "success",
    description: "Yangi fayl yaratadi",
  },
  help: {
    command: "help",
    output: `🎯 Git O'zbek Terminal - Mavjud buyruqlar:

📚 ASOSIY GIT BUYRUQLARI:
• git init                    - Repository yaratish
• git status                  - Holat tekshirish  
• git add .                   - Barcha fayllarni qo'shish
• git add <fayl>             - Ma'lum faylni qo'shish
• git commit -m "xabar"      - Commit yaratish
• git log                    - Tarixni ko'rish
• git log --oneline          - Qisqa tarix

🌿 BRANCH BILAN ISHLASH:
• git branch                 - Branch'larni ko'rish
• git branch <nom>           - Yangi branch yaratish
• git checkout <branch>      - Branch'ga o'tish
• git merge <branch>         - Branch'ni birlashtirish

🔍 TEKSHIRISH VA TAQQOSLASH:
• git diff                   - O'zgarishlarni ko'rish
• git remote -v              - Remote'larni ko'rish
• git stash                  - O'zgarishlarni saqlash
• git stash pop              - Saqlangan o'zgarishlarni qaytarish

⚡ ILGʻOR BUYRUQLAR:
• git reset --soft HEAD~1    - Yumshoq reset
• git reset --hard HEAD~1    - Qattiq reset

💻 TERMINAL BUYRUQLARI:
• pwd                        - Joriy papka
• ls                         - Fayllarni ko'rish
• ls -la                     - Batafsil ma'lumot
• mkdir <nom>                - Papka yaratish
• touch <fayl>               - Fayl yaratish
• clear                      - Terminalni tozalash

💡 Maslahat: Buyruqlarni yozishda katta-kichik harflar muhim emas!`,
    type: "success",
    description: "Yordam ma'lumotlarini ko'rsatadi",
  },
  clear: {
    command: "clear",
    output: "",
    type: "success",
    description: "Terminalni tozalaydi",
  },
}

export function InteractiveTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: "info",
      content: "🎯 Git O'zbek Terminal - Buyruqlarni sinab ko'ring!",
      timestamp: Date.now(),
    },
    {
      type: "output",
      content: "💡 Keling, 'git init' deb yozishdan boshlaymiz. Yordam uchun 'help' yozing.",
      timestamp: Date.now(),
    },
  ])
  const [currentCommand, setCurrentCommand] = useState("")
  const [isInitialized, setIsInitialized] = useState(false)
  const [currentBranch, setCurrentBranch] = useState("main")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [copied, setCopied] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      const scrollElement = terminalRef.current
      scrollElement.scrollTop = scrollElement.scrollHeight
    }
  }, [lines])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setCurrentCommand("")
      }
    } else if (e.key === "Tab") {
      e.preventDefault()
      // Auto-complete functionality
      const availableCommands = Object.keys(gitCommands)
      const matches = availableCommands.filter((cmd) =>
        cmd.toLowerCase().startsWith(currentCommand.toLowerCase().trim()),
      )
      if (matches.length === 1) {
        setCurrentCommand(matches[0])
      }
    }
  }

  const executeCommand = (command: string) => {
    const trimmedCommand = command.trim().toLowerCase()

    // Add command to history
    setCommandHistory((prev) => [command, ...prev.slice(0, 49)])
    setHistoryIndex(-1)

    // Add command to terminal display
    setLines((prev) => [
      ...prev,
      {
        type: "command",
        content: `${currentBranch}$ ${command}`,
        timestamp: Date.now(),
      },
    ])

    // Simulate typing delay for better UX
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      processCommand(trimmedCommand, command)
    }, 300)
  }

  const processCommand = (trimmedCommand: string, originalCommand: string) => {
    // Handle clear command
    if (trimmedCommand === "clear") {
      setLines([
        {
          type: "info",
          content: "🎯 Git O'zbek Terminal - Buyruqlarni sinab ko'ring!",
          timestamp: Date.now(),
        },
      ])
      return
    }

    // Enhanced flexible command matching
    const matchedCommand = Object.keys(gitCommands).find((cmd) => {
      const cmdLower = cmd.toLowerCase()
      return (
        cmdLower === trimmedCommand ||
        (trimmedCommand.startsWith("git commit -m") && cmdLower.startsWith("git commit -m")) ||
        (trimmedCommand.startsWith("git add ") && cmdLower.startsWith("git add ")) ||
        (trimmedCommand.startsWith("git branch ") && cmdLower.startsWith("git branch ")) ||
        (trimmedCommand.startsWith("git checkout ") && cmdLower.startsWith("git checkout ")) ||
        (trimmedCommand.startsWith("git reset ") && cmdLower.startsWith("git reset ")) ||
        (trimmedCommand.startsWith("mkdir ") && cmdLower.startsWith("mkdir ")) ||
        (trimmedCommand.startsWith("touch ") && cmdLower.startsWith("touch "))
      )
    })

    if (matchedCommand) {
      const gitCmd = gitCommands[matchedCommand]

      // Special state handling
      if (trimmedCommand === "git init") {
        setIsInitialized(true)
      }

      if (trimmedCommand.startsWith("git checkout ")) {
        const branchName = originalCommand.trim().split(" ")[2]
        if (branchName) {
          setCurrentBranch(branchName)
        }
      }

      setLines((prev) => [
        ...prev,
        {
          type: gitCmd.type === "success" ? "success" : "error",
          content: gitCmd.output,
          timestamp: Date.now(),
        },
      ])
    } else {
      // Enhanced error messages with smart suggestions
      let errorMessage = `❌ '${originalCommand}' buyrug'i topilmadi.`
      const suggestions: string[] = []

      if (trimmedCommand.includes("git")) {
        if (trimmedCommand.includes("stat") || trimmedCommand.includes("status")) {
          suggestions.push("git status")
        }
        if (trimmedCommand.includes("comm") || trimmedCommand.includes("commit")) {
          suggestions.push('git commit -m "xabar"')
        }
        if (trimmedCommand.includes("bran") || trimmedCommand.includes("branch")) {
          suggestions.push("git branch")
        }
        if (trimmedCommand.includes("add")) {
          suggestions.push("git add .")
        }
        if (trimmedCommand.includes("log")) {
          suggestions.push("git log")
        }
        if (trimmedCommand.includes("check") || trimmedCommand.includes("checkout")) {
          suggestions.push("git checkout main")
        }
      }

      if (suggestions.length > 0) {
        errorMessage += `\n\n💡 Ehtimol quyidagilardan birini nazarda tutgansiz:\n${suggestions.map((s) => `   • ${s}`).join("\n")}`
      }

      errorMessage += "\n\n❓ Barcha buyruqlar ro'yxati uchun 'help' yozing."

      setLines((prev) => [
        ...prev,
        {
          type: "error",
          content: errorMessage,
          timestamp: Date.now(),
        },
      ])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentCommand.trim()) {
      executeCommand(currentCommand)
      setCurrentCommand("")
    }
  }

  const resetTerminal = () => {
    setLines([
      {
        type: "info",
        content: "🎯 Git O'zbek Terminal - Buyruqlarni sinab ko'ring!",
        timestamp: Date.now(),
      },
      {
        type: "output",
        content: "💡 Keling, 'git init' deb yozishdan boshlaymiz. Yordam uchun 'help' yozing.",
        timestamp: Date.now(),
      },
    ])
    setIsInitialized(false)
    setCurrentBranch("main")
    setCurrentCommand("")
    setCommandHistory([])
    setHistoryIndex(-1)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const quickCommands = [
    { cmd: "git init", category: "Boshlash" },
    { cmd: "git status", category: "Tekshirish" },
    { cmd: "git add .", category: "Qo'shish" },
    { cmd: 'git commit -m "test"', category: "Saqlash" },
    { cmd: "git log --oneline", category: "Tarix" },
    { cmd: "git branch feature", category: "Branch" },
    { cmd: "git checkout feature", category: "O'tish" },
    { cmd: "git merge feature", category: "Birlashtirish" },
    { cmd: "help", category: "Yordam" },
    { cmd: "clear", category: "Tozalash" },
  ]

  const copyTerminalContent = async () => {
    const content = lines
      .map((line) => {
        if (line.type === "command") return line.content
        return line.content
      })
      .join("\n")

    try {
      await navigator.clipboard.writeText(content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className="space-y-6">
      {/* Enhanced Terminal */}
      <Card className="border-border bg-card/50 backdrop-blur git-card hover-glow animate-fade-in-up">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center animate-git-pulse">
                <Terminal className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg text-slate-900 dark:text-slate-100 font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                  Git Terminal
                </CardTitle>
                <CardDescription className="text-sm">
                  {isInitialized ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-success" />
                      Repository yaratilgan ({currentBranch})
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <AlertCircle className="h-3 w-3 text-warning" />
                      Repository yaratilmagan
                    </span>
                  )}
                </CardDescription>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={copyTerminalContent}>
                {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                {copied ? "Nusxalandi" : "Nusxalash"}
              </Button>
              <Button variant="outline" size="sm" onClick={resetTerminal}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Qayta boshlash
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div ref={terminalRef} className="terminal h-96 overflow-y-auto p-4 font-mono text-sm">
            {lines.map((line, index) => (
              <div key={index} className="mb-1">
                {line.type === "command" && <div className="text-success font-semibold">{line.content}</div>}
                {line.type === "output" && <div className="text-muted-foreground">{line.content}</div>}
                {line.type === "success" && <div className="text-info whitespace-pre-line">{line.content}</div>}
                {line.type === "error" && <div className="text-destructive whitespace-pre-line">{line.content}</div>}
                {line.type === "info" && <div className="text-primary font-semibold">{line.content}</div>}
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="text-muted-foreground animate-pulse">
                <span className="inline-block w-2 h-4 bg-primary/50 animate-pulse mr-1"></span>
                Buyruq bajarilmoqda...
              </div>
            )}

            {/* Enhanced input line */}
            <form onSubmit={handleSubmit} className="flex items-center mt-2">
              <span className="text-success mr-2 font-semibold terminal-cursor">{currentBranch}$</span>
              <input
                ref={inputRef}
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-foreground outline-none terminal-cursor"
                placeholder="Git buyrug'ini kiriting... (↑↓ tarix, Tab to'ldirish)"
                autoFocus
              />
            </form>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Quick Commands */}
      <Card className="border-border bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Play className="h-5 w-5" />
            Tez buyruqlar
          </CardTitle>
          <CardDescription>Quyidagi buyruqlarni bosish orqali tez sinab ko'ring</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {quickCommands.map((item, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => {
                  executeCommand(item.cmd)
                  if (inputRef.current) {
                    inputRef.current.focus()
                  }
                }}
                className="font-mono text-xs hover:bg-primary/10 flex flex-col items-center p-3 h-auto"
              >
                <span className="text-xs text-muted-foreground mb-1">{item.category}</span>
                <span className="font-semibold">{item.cmd}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Command Reference */}
      <Card className="border-border bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Buyruqlar ma'lumotnomasi
          </CardTitle>
          <CardDescription>Har bir buyruqning vazifasi va natijasi haqida ma'lumot</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {Object.entries(gitCommands)
              .filter(([cmd]) => cmd !== "help" && cmd !== "clear")
              .slice(0, 15) // Show first 15 commands
              .map(([cmd, info]) => (
                <div
                  key={cmd}
                  className="border border-border rounded-lg p-4 bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
                  onClick={() => {
                    executeCommand(cmd)
                    if (inputRef.current) {
                      inputRef.current.focus()
                    }
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-sm font-mono bg-primary/10 px-2 py-1 rounded text-primary">{cmd}</code>
                    <Badge variant={info.type === "success" ? "default" : "destructive"} className="text-xs">
                      {info.type === "success" ? "Muvaffaqiyatli" : "Xato"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
