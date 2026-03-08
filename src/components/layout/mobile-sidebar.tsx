"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as Dialog from "@radix-ui/react-dialog"
import { Menu, X, Sparkles, Home, Library, Compass, Search, MessageSquare, CreditCard, Settings } from "lucide-react"
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

export function MobileSidebar() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="text-graphite-400 hover:text-white transition-colors md:hidden">
          <Menu className="w-5 h-5" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed inset-y-0 left-0 z-50 w-3/4 max-w-xs bg-charcoal-950 border-r border-graphite-800 p-4 shadow-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left duration-300 md:hidden flex flex-col">
          
          <div className="flex items-center justify-between mb-6 px-2">
            <Link href="/dashboard" className="flex items-center gap-2" onClick={() => setOpen(false)}>
              <Sparkles className="h-5 w-5 text-aurora-500" />
              <span className="text-xl font-bold text-white tracking-tight">Aurora</span>
            </Link>
            <Dialog.Close asChild>
              <button className="text-graphite-400 hover:text-white p-2 rounded-full hover:bg-graphite-900 transition-colors">
                <X className="w-5 h-5" />
                <span className="sr-only">Close</span>
              </button>
            </Dialog.Close>
          </div>

          <nav className="flex flex-col gap-1 flex-1 overflow-y-auto hide-scrollbar">
            <div className="text-xs font-semibold text-graphite-500 px-2 mb-2 uppercase tracking-wider mt-2">Workspace</div>
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group",
                    isActive 
                      ? "bg-aurora-500/10 text-aurora-400" 
                      : "text-graphite-400 hover:text-graphite-200 hover:bg-graphite-900/50"
                  )}
                >
                  <Icon className={cn("w-4 h-4", isActive ? "text-aurora-400" : "text-graphite-500")} />
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
                   onClick={() => setOpen(false)}
                   className={cn(
                     "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group",
                     isActive 
                       ? "bg-aurora-500/10 text-aurora-400" 
                       : "text-graphite-400 hover:text-graphite-200 hover:bg-graphite-900/50"
                   )}
                 >
                   <Icon className={cn("w-4 h-4", isActive ? "text-aurora-400" : "text-graphite-500")} />
                   {item.name}
                 </Link>
               )
            })}
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
