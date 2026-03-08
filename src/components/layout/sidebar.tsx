"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sparkles, Home, Library, Compass, Search, MessageSquare, CreditCard, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "My Library", href: "/dashboard/library", icon: Library },
  { name: "Explore", href: "/dashboard/explore", icon: Compass },
  { name: "Tool Finder", href: "/dashboard/tools", icon: Search },
  { name: "Chat Assistant", href: "/dashboard/chat", icon: MessageSquare },
]

const BOTTOM_NAV_ITEMS = [
  { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 hidden w-64 h-screen md:flex flex-col border-r border-graphite-800 bg-charcoal-950 p-4 z-40">
      <Link href="/dashboard" className="flex items-center gap-2 px-2 py-4 mb-6 hover:opacity-80 transition-opacity">
        <Sparkles className="h-5 w-5 text-aurora-500" />
        <span className="text-xl font-bold text-white tracking-tight">Aurora</span>
      </Link>

      <nav className="flex flex-col gap-1 flex-1">
        <div className="text-xs font-semibold text-graphite-500 px-2 mb-2 uppercase tracking-wider">Workspace</div>
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group",
                isActive 
                  ? "bg-aurora-500/10 text-aurora-400" 
                  : "text-graphite-400 hover:text-graphite-200 hover:bg-graphite-900/50"
              )}
            >
              <Icon className={cn("w-4 h-4", isActive ? "text-aurora-400" : "text-graphite-500 group-hover:text-graphite-400")} />
              {item.name}
            </Link>
          )
        })}
      </nav>

      <nav className="flex flex-col gap-1 mt-auto pt-6 border-t border-graphite-800">
        {BOTTOM_NAV_ITEMS.map((item) => {
           const isActive = pathname === item.href
           const Icon = item.icon
           return (
             <Link
               key={item.href}
               href={item.href}
               className={cn(
                 "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group",
                 isActive 
                   ? "bg-aurora-500/10 text-aurora-400" 
                   : "text-graphite-400 hover:text-graphite-200 hover:bg-graphite-900/50"
               )}
             >
               <Icon className={cn("w-4 h-4", isActive ? "text-aurora-400" : "text-graphite-500 group-hover:text-graphite-400")} />
               {item.name}
             </Link>
           )
        })}
      </nav>
    </aside>
  )
}
