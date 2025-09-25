"use client"

export function ProfessionalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-emerald-50/30 animate-gradient-shift" />

      {/* Enhanced grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[size:60px_60px] bg-[linear-gradient(to_right,theme(colors.slate.400/.3)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.400/.3)_1px,transparent_1px)]"></div>
      </div>

      {/* Animated Git branch visualizations */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg className="absolute top-20 left-10 w-32 h-32 text-blue-400 animate-float-slow" viewBox="0 0 100 100">
          <path
            d="M20,20 Q50,10 80,20 Q70,50 80,80"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
            className="animate-draw-path"
          />
          <circle cx="20" cy="20" r="2.5" fill="currentColor" className="animate-pulse-soft" />
          <circle cx="80" cy="20" r="2.5" fill="currentColor" className="animate-pulse-soft [animation-delay:0.5s]" />
          <circle cx="80" cy="80" r="2.5" fill="currentColor" className="animate-pulse-soft [animation-delay:1s]" />
        </svg>

        <svg className="absolute top-40 right-20 w-24 h-24 text-emerald-400 animate-float-medium" viewBox="0 0 100 100">
          <path
            d="M10,50 L50,10 L90,50 L50,90 Z"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
            className="animate-draw-path [animation-delay:1s]"
          />
          <circle cx="50" cy="50" r="3" fill="currentColor" className="animate-glow-soft" />
        </svg>

        <svg className="absolute bottom-32 left-1/4 w-28 h-28 text-purple-400 animate-float-fast" viewBox="0 0 100 100">
          <path
            d="M30,70 Q50,30 70,70"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
            className="animate-draw-path [animation-delay:2s]"
          />
          <path
            d="M20,50 L80,50"
            stroke="currentColor"
            strokeWidth="0.8"
            className="animate-draw-path [animation-delay:2.5s]"
          />
          <circle cx="30" cy="70" r="2.5" fill="currentColor" className="animate-pulse-soft [animation-delay:3s]" />
          <circle cx="50" cy="50" r="2.5" fill="currentColor" className="animate-pulse-soft [animation-delay:3.5s]" />
          <circle cx="70" cy="70" r="2.5" fill="currentColor" className="animate-pulse-soft [animation-delay:4s]" />
        </svg>
      </div>

      {/* Enhanced floating particles with different sizes and speeds */}
      <div className="absolute inset-0 opacity-[0.03]">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float-particle ${
              i % 3 === 0 ? "w-2 h-2 bg-blue-400" : i % 3 === 1 ? "w-1.5 h-1.5 bg-emerald-400" : "w-1 h-1 bg-purple-400"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle moving waves */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent animate-wave-horizontal"></div>
          <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent animate-wave-horizontal [animation-delay:2s]"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent animate-wave-horizontal [animation-delay:4s]"></div>
        </div>
      </div>
    </div>
  )
}
