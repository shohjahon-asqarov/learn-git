"use client"

export function ProfessionalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Minimal animated background patterns */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[size:50px_50px] [background-image:linear-gradient(to_right,theme(colors.slate.300/.1)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.300/.1)_1px,transparent_1px)] dark:bg-[size:50px_50px] dark:[background-image:linear-gradient(to_right,theme(colors.slate.700/.1)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.700/.1)_1px,transparent_1px)] animate-grid-drift"></div>
        
        {/* Subtle radial gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent animate-git-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent animate-git-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent animate-git-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
    </div>
  )
}