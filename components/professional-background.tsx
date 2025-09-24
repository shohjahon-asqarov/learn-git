"use client"

import { useEffect, useState } from "react"

interface FloatingElement {
  id: string
  content: string
  x: number
  y: number
  delay: number
  duration: number
}

export function ProfessionalBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    // Git-themed floating elements
    const gitElements: FloatingElement[] = [
      // Git commands
      { id: 'git-init', content: 'git init', x: 10, y: 20, delay: 0, duration: 20 },
      { id: 'git-add', content: 'git add .', x: 80, y: 15, delay: 3, duration: 25 },
      { id: 'git-commit', content: 'git commit', x: 15, y: 70, delay: 6, duration: 22 },
      { id: 'git-push', content: 'git push', x: 85, y: 75, delay: 9, duration: 18 },
      
      // Git concepts
      { id: 'branch', content: 'branch', x: 25, y: 40, delay: 2, duration: 30 },
      { id: 'merge', content: 'merge', x: 75, y: 45, delay: 5, duration: 28 },
      { id: 'pull', content: 'pull', x: 50, y: 10, delay: 8, duration: 24 },
      { id: 'clone', content: 'clone', x: 40, y: 85, delay: 11, duration: 26 },
      
      // Tech symbols
      { id: 'terminal', content: '$', x: 5, y: 50, delay: 1, duration: 15 },
      { id: 'arrow', content: '→', x: 90, y: 30, delay: 4, duration: 20 },
      { id: 'star', content: '★', x: 60, y: 60, delay: 7, duration: 18 },
      { id: 'hash', content: '#', x: 30, y: 25, delay: 10, duration: 22 },
    ]

    setElements(gitElements)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        {/* Git flow lines */}
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-git-flow"></div>
        <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-git-flow" style={{ animationDelay: '10s' }}></div>
        
        {/* Branch flow */}
        <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-branch-flow"></div>
        <div className="absolute top-0 right-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-branch-flow" style={{ animationDelay: '15s' }}></div>
      </div>

      {/* Floating Git elements */}
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute text-xs font-mono text-slate-400 dark:text-slate-600 animate-code-rain"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
          }}
        >
          {element.content}
        </div>
      ))}

      {/* Commit dots */}
      <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-blue-500 rounded-full animate-commit-dots"></div>
      <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-emerald-500 rounded-full animate-commit-dots" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-500 rounded-full animate-commit-dots" style={{ animationDelay: '4s' }}></div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.01] dark:opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            animation: 'grid-drift 40s linear infinite'
          }}
        />
      </div>

      {/* Professional gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/5 via-transparent to-emerald-50/5 dark:from-blue-950/10 dark:via-transparent dark:to-emerald-950/10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-50/5 to-transparent dark:from-purple-950/10 dark:to-transparent"></div>
    </div>
  )
}
