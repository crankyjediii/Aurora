"use client"

import { Search } from "lucide-react"
import { MobileSidebar } from "./mobile-sidebar"

export function Topbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-graphite-800 bg-charcoal-950/80 px-4 backdrop-blur-md md:px-8">
      
      {/* Mobile Menu Trigger & Branding (Visible on mobile only) */}
      <div className="flex md:hidden items-center gap-3">
        <MobileSidebar />
        <span className="text-base font-bold text-white tracking-tight">Aurora</span>
      </div>

      {/* Desktop Breadcrumb/Title placeholder */}
      <div className="hidden md:flex items-center">
        {/* Can be populated with breadcrumbs or page context dynamically in the future */}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4 ml-auto">
        <div className="hidden sm:flex relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-graphite-500" />
          <input 
            type="text" 
            placeholder="Search resources..." 
            className="h-9 w-64 rounded-full border border-graphite-800 bg-graphite-900/50 pl-9 pr-4 text-sm text-graphite-200 placeholder:text-graphite-500 focus:outline-none focus:ring-1 focus:ring-aurora-500 focus:border-aurora-500 transition-all"
          />
        </div>
      </div>
    </header>
  )
}
