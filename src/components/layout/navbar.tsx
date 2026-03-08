"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-graphite-800/50 bg-charcoal-950/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            {/* Aurora Wordmark/Logo placeholder */}
            <div className="h-6 w-6 rounded-full bg-aurora-500 shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
            <span className="text-xl font-bold tracking-tight text-graphite-50">Aurora</span>
          </Link>
          
          <div className="hidden md:flex gap-6">
            <Link href="/solutions" className="text-sm font-medium text-graphite-300 transition-colors hover:text-graphite-50">
              Solutions
            </Link>
            <Link href="/library" className="text-sm font-medium text-graphite-300 transition-colors hover:text-graphite-50">
              Library
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-graphite-300 transition-colors hover:text-graphite-50">
              Pricing
            </Link>
            <Link href="/learn" className="text-sm font-medium text-graphite-300 transition-colors hover:text-graphite-50">
              Learn
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="hidden text-sm font-medium text-graphite-300 transition-colors hover:text-graphite-50 md:block">
            Dashboard
          </Link>
          <div className="hidden h-4 w-px bg-graphite-800 md:block" />
          <Link href="/login" className="hidden text-sm font-medium text-graphite-300 transition-colors hover:text-graphite-50 md:block">
            Login
          </Link>
          <Button asChild className="rounded-full shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            <Link href="/signup">Start Free</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
