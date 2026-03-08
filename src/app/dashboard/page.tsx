"use client"

import { MOCK_USER, USAGE_STATS, SAVED_ITEMS, FEATURED_RESOURCES } from "@/lib/mock-data"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Workflow, ArrowRight, Play, MoreVertical } from "lucide-react"
import Link from "next/link"

export default function DashboardHome() {
  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Welcome back, {MOCK_USER.name.split(" ")[0]}</h1>
          <p className="text-graphite-400 mt-1">Here&apos;s your active workspace overview.</p>
        </div>
        <Button className="bg-aurora-500 hover:bg-aurora-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]">
          <BookOpen className="w-4 h-4 mr-2" /> Browse Catalog
        </Button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-charcoal-950 border-graphite-800 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-aurora-500/5 blur-2xl rounded-full" />
          <CardContent className="p-5 flex flex-col gap-2">
            <span className="text-graphite-400 text-xs font-semibold uppercase tracking-wider">Active Tools</span>
            <span className="text-3xl font-bold text-white">{USAGE_STATS.activeTools}</span>
          </CardContent>
        </Card>
        <Card className="bg-charcoal-950 border-graphite-800 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500/5 blur-2xl rounded-full" />
          <CardContent className="p-5 flex flex-col gap-2">
            <span className="text-graphite-400 text-xs font-semibold uppercase tracking-wider">Running Workflows</span>
            <span className="text-3xl font-bold text-white">{USAGE_STATS.runningWorkflows}</span>
          </CardContent>
        </Card>
        <Card className="bg-charcoal-950 border-graphite-800 shadow-sm">
          <CardContent className="p-5 flex flex-col gap-2">
            <span className="text-graphite-400 text-xs font-semibold uppercase tracking-wider">Tokens Used</span>
            <span className="text-3xl font-bold text-white">{USAGE_STATS.tokensUsed}</span>
          </CardContent>
        </Card>
        <Card className="bg-charcoal-950 border-graphite-800 shadow-sm">
          <CardContent className="p-5 flex flex-col gap-2">
            <span className="text-graphite-400 text-xs font-semibold uppercase tracking-wider">Est. Monthly Cost</span>
            <span className="text-3xl font-bold text-white">${USAGE_STATS.monthlyCost.toFixed(2)}</span>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
         {/* Left Column: Recent & Saved */}
         <div className="flex flex-col gap-8">
            <section>
               <h2 className="text-lg font-semibold text-white mb-4">Continue Where You Left Off</h2>
               <div className="flex flex-col gap-3">
                 {/* Mock Recent Items */}
                 <div className="group flex items-center justify-between p-4 rounded-xl border border-graphite-800 bg-charcoal-950 hover:bg-graphite-900/50 hover:border-graphite-700 transition-all cursor-pointer">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-lg bg-aurora-500/10 flex items-center justify-center text-aurora-400">
                       <BookOpen className="w-5 h-5"/>
                     </div>
                     <div>
                       <div className="text-sm font-medium text-white group-hover:text-aurora-50 transition-colors">The Claude 3 Pro Guide</div>
                       <div className="text-xs text-graphite-400 mt-0.5">Tool Guide • Last opened 2h ago</div>
                     </div>
                   </div>
                   <Button variant="ghost" size="icon" className="text-graphite-400 opacity-0 group-hover:opacity-100 transition-opacity">
                     <Play className="w-4 h-4" />
                   </Button>
                 </div>

                 <div className="group flex items-center justify-between p-4 rounded-xl border border-graphite-800 bg-charcoal-950 hover:bg-graphite-900/50 hover:border-graphite-700 transition-all cursor-pointer">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                       <Workflow className="w-5 h-5"/>
                     </div>
                     <div>
                       <div className="text-sm font-medium text-white group-hover:text-indigo-50 transition-colors">Marketing Copy System</div>
                       <div className="text-xs text-graphite-400 mt-0.5">Prompt System • Last opened yesterday</div>
                     </div>
                   </div>
                   <Button variant="ghost" size="icon" className="text-graphite-400 opacity-0 group-hover:opacity-100 transition-opacity">
                     <Play className="w-4 h-4" />
                   </Button>
                 </div>
               </div>
            </section>

            <section>
               <div className="flex items-center justify-between mb-4">
                 <h2 className="text-lg font-semibold text-white">Saved Resources</h2>
                 <Link href="/dashboard/library">
                   <Button variant="link" className="text-aurora-400 h-auto p-0 text-sm hover:text-aurora-300">View all</Button>
                 </Link>
               </div>
               <div className="grid grid-cols-2 gap-4">
                 {SAVED_ITEMS.map((item, i) => {
                   const colorClass = item.color === 'aurora' ? 'bg-aurora-500/10 text-aurora-400' : 'bg-indigo-500/10 text-indigo-400';
                   return (
                     <div key={i} className="p-4 rounded-xl border border-graphite-800 bg-charcoal-950 hover:border-graphite-700 transition-colors cursor-pointer group hover:-translate-y-px">
                        <div className="flex justify-between items-start mb-3">
                          <div className={`w-10 h-10 rounded-lg ${colorClass} flex items-center justify-center`}>
                             {item.icon === "BookOpen" ? <BookOpen className="w-5 h-5" /> : <Workflow className="w-5 h-5" />}
                          </div>
                          <button className="text-graphite-500 hover:text-white transition-colors"><MoreVertical className="w-4 h-4"/></button>
                        </div>
                        <div className="text-sm font-medium text-white group-hover:text-aurora-50 transition-colors line-clamp-1">{item.title}</div>
                        <div className="text-xs text-graphite-400 mt-1">{item.type}</div>
                     </div>
                   )
                 })}
               </div>
            </section>
         </div>

         {/* Right Column: Recommended & Help */}
         <div className="flex flex-col gap-6">
           <section>
             <h2 className="text-lg font-semibold text-white mb-4">Recommended For You</h2>
             <Card className="bg-linear-to-b from-charcoal-900 to-charcoal-950 border-graphite-800 overflow-hidden relative group cursor-pointer hover:border-graphite-700 transition-colors">
               <div className="absolute top-0 right-0 w-48 h-48 bg-aurora-500/5 blur-[50px] pointer-events-none group-hover:bg-aurora-500/10 transition-colors duration-500" />
               <CardHeader className="relative z-10 pb-4">
                 <div className="w-12 h-12 rounded-xl bg-aurora-500/20 text-aurora-400 flex items-center justify-center mb-4">
                   <Workflow className="w-6 h-6" />
                 </div>
                 <CardTitle className="text-xl group-hover:text-white transition-colors">Agency Operation Flow</CardTitle>
                 <p className="text-sm text-graphite-400 mt-2 leading-relaxed">Based on your recent usage of the Marketing Copy System, this workflow can automate your client drafting.</p>
               </CardHeader>
               <CardContent className="relative z-10">
                 <div className="flex items-center gap-2 text-xs font-medium bg-graphite-900/50 w-fit px-2 py-1 rounded mb-4 border border-graphite-800">
                   <span className="text-graphite-300">Workflow Kit</span>
                   <span className="text-graphite-600">•</span>
                   <span className="text-aurora-400">Included in Plan</span>
                 </div>
                 <Button className="w-full bg-graphite-800 hover:bg-graphite-700 text-white border border-graphite-700 transition-colors">
                   Unlock Workflow
                 </Button>
               </CardContent>
             </Card>
           </section>

           <section>
             <Card className="bg-charcoal-950 border-graphite-800 p-6 flex items-center justify-between hover:border-graphite-700 transition-colors">
                <div>
                  <h3 className="text-base font-semibold text-white">Need help finding tools?</h3>
                  <p className="text-sm text-graphite-400 mt-1">Chat with the Aurora assistant.</p>
                </div>
                <Link href="/dashboard/chat">
                  <Button variant="outline" className="border-graphite-700 bg-graphite-900 text-white hover:bg-graphite-800">
                     Ask Aurora <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
             </Card>
           </section>
         </div>
      </div>

    </div>
  )
}
