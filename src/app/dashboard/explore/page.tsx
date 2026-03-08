"use client"

import { PRODUCT_CATEGORIES, FEATURED_RESOURCES } from "@/lib/mock-data"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, BookOpen, TerminalSquare, Calculator, Workflow, Users, Star, Lock, Sparkles } from "lucide-react"
import React from "react"
import Link from "next/link"

const IconMap: Record<string, React.ElementType> = {
  BookOpen, TerminalSquare, Calculator, Workflow, Users
};

export default function DashboardExplore() {
  return (
    <div className="flex flex-col gap-12 max-w-6xl mx-auto pb-10">
      
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Explore</h1>
          <p className="text-graphite-400 mt-2">Discover new tools, curated workflows, and expert systems.</p>
        </div>
        
        <div className="relative w-full max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-graphite-500" />
          <input 
            type="text" 
            placeholder="Search the Aurora catalog..." 
            className="w-full h-12 rounded-xl border border-graphite-800 bg-charcoal-950 pl-11 pr-4 text-sm text-graphite-200 placeholder:text-graphite-500 focus:outline-none focus:ring-1 focus:ring-aurora-500 focus:border-aurora-500 transition-all font-medium shadow-sm"
          />
        </div>
      </div>

      {/* Featured Banner */}
      <div className="w-full rounded-2xl border border-aurora-500/20 bg-linear-to-r from-charcoal-950 to-aurora-950/20 p-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-aurora-500/10 blur-[80px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-xl">
          <Badge className="mb-4 bg-aurora-500/20 text-aurora-400 border-0">New Release</Badge>
          <h2 className="text-2xl font-bold text-white mb-2">Team Prompt Governance Pack</h2>
          <p className="text-graphite-300 text-sm leading-relaxed mb-6">Standardize how your team uses AI. Includes prompt templates, policy drafts, and a token cost tracking dashboard template.</p>
          <Button className="bg-aurora-500 hover:bg-aurora-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] border-0">
            View details
          </Button>
        </div>
        <div className="relative z-10 hidden md:flex w-48 h-48 rounded-xl bg-graphite-900 border border-graphite-800 shadow-2xl items-center justify-center">
           <Users className="w-16 h-16 text-aurora-500/50" />
        </div>
      </div>

      {/* Trending Resources Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Trending right now</h2>
          <Button variant="link" className="text-aurora-400 h-auto p-0 text-sm hover:text-aurora-300">View all</Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_RESOURCES.map((resource) => {
            const Icon = IconMap[resource.icon] || BookOpen;
            const isOwned = resource.access !== 'premium'

            return (
              <Card key={resource.id} className="group flex flex-col h-full bg-charcoal-950 border-graphite-800 hover:border-graphite-700 transition-all duration-300 overflow-hidden shadow-sm hover:translate-y-[-2px]">
                <CardHeader className="flex-1 pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-graphite-900 border border-graphite-800 flex items-center justify-center text-graphite-300 group-hover:text-aurora-400 group-hover:bg-aurora-500/10 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="bg-graphite-900 text-graphite-300 border-0 font-medium whitespace-nowrap">
                      {resource.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg md:text-xl mb-2 text-white group-hover:text-aurora-50 transition-colors line-clamp-2">
                    {resource.title}
                  </CardTitle>
                  <p className="text-sm text-graphite-400 line-clamp-2 leading-relaxed">
                    {resource.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0 flex flex-col gap-4">
                  <div className="flex items-center justify-between text-xs font-medium border-t border-graphite-800/50 pt-4">
                    <div className="flex items-center gap-1 text-aurora-400">
                      <Star className="w-3 h-3 fill-aurora-400" />
                      <span>{resource.rating}</span>
                    </div>
                    {isOwned ? (
                      <span className="text-aurora-500 font-semibold flex items-center"><Sparkles className="w-3 h-3 mr-1"/> Included</span>
                    ) : (
                      <span className="text-graphite-400">{resource.price}</span>
                    )}
                  </div>
                  
                  {isOwned ? (
                    <Link href={`/dashboard/products/${resource.id}`}>
                      <Button className="w-full bg-graphite-800 hover:bg-graphite-700 text-white border border-graphite-700 group-hover:border-graphite-600 transition-colors">
                        Open Resource
                      </Button>
                    </Link>
                  ) : (
                    <Link href={`/dashboard/products/${resource.id}`}>
                      <Button variant="outline" className="w-full bg-graphite-900 text-white border-graphite-700 hover:bg-graphite-800 group-hover:border-graphite-600 transition-colors">
                        <Lock className="w-4 h-4 mr-2 text-graphite-400" /> Unlock
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Browse by Category */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-6">Browse by Category</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {PRODUCT_CATEGORIES.map((cat) => {
             const Icon = IconMap[cat.icon] || BookOpen;
             return (
               <Card key={cat.id} className="bg-charcoal-950 border-graphite-800 hover:border-aurora-500/30 hover:bg-charcoal-900 transition-colors cursor-pointer group text-center py-6 px-4">
                 <div className="w-12 h-12 mx-auto rounded-full bg-graphite-900 border border-graphite-800 flex items-center justify-center text-graphite-400 group-hover:text-aurora-400 group-hover:bg-aurora-500/10 transition-colors mb-4">
                   <Icon className="w-5 h-5" />
                 </div>
                 <h3 className="text-sm font-semibold text-white group-hover:text-aurora-50 transition-colors">{cat.title}</h3>
               </Card>
             )
          })}
        </div>
      </section>

    </div>
  )
}
