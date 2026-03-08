"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send, Sparkles, MessageSquare, TerminalSquare, Calculator } from "lucide-react"
import { CHAT_HISTORY } from "@/lib/mock-data"

const SUGGESTIONS = [
  { text: "Help me calculate API token costs", icon: Calculator },
  { text: "Suggest a workflow for marketing", icon: TerminalSquare },
  { text: "What's the best tool for coding?", icon: Sparkles },
]

export default function DashboardChat() {
  return (
    <div className="flex h-[calc(100vh-8rem)] w-full max-w-6xl mx-auto gap-6 pb-4">
      
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-charcoal-950 border border-graphite-800 rounded-2xl overflow-hidden shadow-sm relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-aurora-500/5 blur-[60px] pointer-events-none" />

        {/* Empty State / Chat History placeholder */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center relative z-10">
           <div className="w-16 h-16 rounded-2xl bg-aurora-500/10 flex items-center justify-center text-aurora-400 mb-6 border border-aurora-500/20 shadow-[0_0_30px_rgba(139,92,246,0.1)]">
             <Sparkles className="w-8 h-8" />
           </div>
           <h1 className="text-2xl font-bold text-white tracking-tight mb-2">How can I help you today?</h1>
           <p className="text-graphite-400 max-w-md mx-auto mb-10">I can help you find tools, build prompts, calculate costs, or navigate the library.</p>

           <div className="flex flex-wrap justify-center gap-3 w-full max-w-2xl">
             {SUGGESTIONS.map((s, i) => {
                const Icon = s.icon
                return (
                  <button key={i} className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-graphite-800 bg-graphite-900/50 hover:bg-graphite-800 hover:border-graphite-700 text-sm text-graphite-300 transition-colors">
                    <Icon className="w-4 h-4 text-graphite-400" />
                    {s.text}
                  </button>
                )
             })}
           </div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-charcoal-950 border-t border-graphite-800 z-10">
          <div className="relative max-w-3xl mx-auto flex items-center w-full">
            <Input 
               placeholder="Message Aurora..." 
               className="h-14 bg-graphite-900/80 border-graphite-700 pr-14 text-base focus-visible:ring-aurora-500 placeholder:text-graphite-500 rounded-xl"
            />
            <Button size="icon" className="absolute right-2 top-2 bg-aurora-500 hover:bg-aurora-600 text-white rounded-lg h-10 w-10">
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <div className="text-center mt-3 text-xs text-graphite-500">
            Aurora can make mistakes. Verify important information.
          </div>
        </div>
      </div>

      {/* Right Sidebar - Chat History (hidden on smaller screens) */}
      <div className="hidden lg:flex w-72 flex-col bg-charcoal-950 border border-graphite-800 rounded-2xl p-4 shadow-sm">
        <h3 className="font-semibold text-white mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
          <MessageSquare className="w-4 h-4 text-graphite-400" /> Recent Chats
        </h3>
        <div className="flex flex-col gap-2">
          {CHAT_HISTORY.map(chat => (
            <div key={chat.id} className="p-3 rounded-lg hover:bg-graphite-900/50 cursor-pointer transition-colors group">
               <div className="text-sm font-medium text-graphite-300 group-hover:text-white truncate">{chat.title}</div>
               <div className="text-xs text-graphite-500 mt-1">{chat.date}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
