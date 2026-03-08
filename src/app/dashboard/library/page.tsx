"use client"

import { FEATURED_RESOURCES } from "@/lib/mock-data"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, BookOpen, TerminalSquare, Calculator, Workflow, Users, Star, Lock } from "lucide-react"
import React from "react"

// Icon Map for dynamic rendering
const IconMap: Record<string, React.ElementType> = {
  BookOpen, TerminalSquare, Calculator, Workflow, Users
};

export default function DashboardLibrary() {
  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-white tracking-tight">My Library</h1>
        <p className="text-graphite-400">Resources, tools, and systems you own or have access to.</p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-charcoal-950 p-4 rounded-xl border border-graphite-800">
        <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 hide-scrollbar scroll-smooth">
          <Badge className="bg-white text-black hover:bg-graphite-200 px-4 py-1.5 cursor-pointer shrink-0">All Items</Badge>
          <Badge variant="outline" className="border-graphite-800 text-graphite-300 hover:bg-graphite-900 px-4 py-1.5 cursor-pointer shrink-0 transition-colors">Tool Guides</Badge>
          <Badge variant="outline" className="border-graphite-800 text-graphite-300 hover:bg-graphite-900 px-4 py-1.5 cursor-pointer shrink-0 transition-colors">Prompt Systems</Badge>
          <Badge variant="outline" className="border-graphite-800 text-graphite-300 hover:bg-graphite-900 px-4 py-1.5 cursor-pointer shrink-0 transition-colors">Workflows</Badge>
        </div>
        <div className="relative w-full sm:w-72 shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-graphite-500" />
          <input 
            type="text" 
            placeholder="Search library..." 
            className="w-full h-10 rounded-lg border border-graphite-800 bg-graphite-950 pl-9 pr-4 text-sm text-graphite-200 placeholder:text-graphite-500 focus:outline-none focus:ring-1 focus:ring-aurora-500 focus:border-aurora-500 transition-all font-medium"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURED_RESOURCES.map((resource) => {
          const Icon = IconMap[resource.icon] || BookOpen;
          
          return (
            <Card key={resource.id} className="group flex flex-col h-full bg-charcoal-950 border-graphite-800 hover:border-graphite-700 transition-all duration-300 overflow-hidden shadow-sm hover:translate-y-[-2px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              {/* Top border indicator based on access */}
              <div className={`h-1 w-full ${resource.access === 'premium' ? 'bg-indigo-500' : resource.access === 'solo' ? 'bg-aurora-500' : 'bg-graphite-700'}`} />
              
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
                   <div className="flex items-center gap-2 text-graphite-400">
                     <span className="w-5 h-5 rounded-full bg-graphite-800 flex items-center justify-center text-[10px] text-white">
                       {resource.author.charAt(0)}
                     </span>
                     <span>{resource.author}</span>
                   </div>
                   {resource.access !== 'premium' && (
                     <div className="flex items-center gap-1 text-aurora-400">
                       <Star className="w-3 h-3 fill-aurora-400" />
                       <span>{resource.rating}</span>
                     </div>
                   )}
                </div>
                
                {resource.access === 'premium' ? (
                  <Button variant="outline" className="w-full bg-graphite-900 text-white border-graphite-700 hover:bg-graphite-800 group-hover:border-graphite-600 transition-colors">
                    <Lock className="w-4 h-4 mr-2 text-graphite-400" /> Unlock for $49
                  </Button>
                ) : (
                  <Button className="w-full bg-graphite-800 hover:bg-graphite-700 text-white border border-graphite-700 group-hover:border-graphite-600 transition-colors">
                    Open Resource
                  </Button>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
      
    </div>
  )
}
