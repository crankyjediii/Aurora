"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FEATURED_RESOURCES, PRODUCT_CATEGORIES } from "@/lib/mock-data"
import { Search, Filter, BookOpen, TerminalSquare, Calculator, Workflow, Users, Star, LucideIcon } from "lucide-react"
import Link from "next/link"

const IconMap: Record<string, LucideIcon> = {
  "Tool Guides": BookOpen,
  "Prompt Systems": TerminalSquare,
  "Cost & Token Resources": Calculator,
  "Workflow Kits": Workflow,
  "Team Packs": Users,
};

export default function LibraryPage() {
  return (
    <div className="flex flex-col items-center w-full pt-32 pb-24 min-h-screen">
      
      {/* HEADER & SEARCH */}
      <section className="container mx-auto px-4 mb-12 relative z-10">
        <div className="max-w-3xl mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            The Library
          </h1>
          <p className="text-xl text-graphite-400">
            Browse our collection of guides, systems, and workflows.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-graphite-500" />
            <input 
              type="text" 
              placeholder="Search resources..." 
              className="w-full h-12 pl-12 pr-4 rounded-xl bg-charcoal-950 border border-graphite-800 text-white focus:outline-none focus:border-aurora-500 transition-colors"
            />
          </div>
          <Button variant="outline" className="h-12 border-graphite-800 bg-charcoal-950">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>
      </section>

      {/* FILTER PILLS */}
      <section className="container mx-auto px-4 mb-16 relative z-10 w-full overflow-x-auto pb-4">
        <div className="flex gap-2 min-w-max">
          <Badge className="bg-aurora-500/20 text-aurora-300 border border-aurora-500/30 hover:bg-aurora-500/30 px-4 py-2 text-sm cursor-pointer">
            All Resources
          </Badge>
          {PRODUCT_CATEGORIES.map(cat => (
            <Badge key={cat.id} variant="secondary" className="px-4 py-2 text-sm cursor-pointer hover:bg-graphite-800 border border-graphite-800">
              {cat.title}
            </Badge>
          ))}
        </div>
      </section>

      {/* RESOURCE GRID */}
      <section className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_RESOURCES.map((resource, i) => {
             const CategoryIcon = IconMap[resource.category] || BookOpen;
             
             return (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/products/${resource.id}`} className="block h-full">
                  <Card className="h-full group cursor-pointer border-graphite-800 hover:border-aurora-500/50 hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)] hover:-translate-y-1 transition-all duration-300 bg-charcoal-950 overflow-hidden flex flex-col relative">
                     {/* Access Ribbon/Line */}
                     {resource.access === "premium" && (
                        <div className="absolute top-0 left-0 w-full h-[3px] bg-linear-to-r from-aurora-500 to-indigo-500 z-20" />
                     )}
                     {resource.access === "solo" && (
                        <div className="absolute top-0 left-0 w-full h-[3px] bg-graphite-600 z-20" />
                     )}

                    {/* Fake Image Container */}
                    <div className="w-full h-40 bg-graphite-900 border-b border-graphite-800 relative flex flex-col items-center justify-center p-6">
                       <CategoryIcon className="w-12 h-12 text-graphite-700 group-hover:text-aurora-500/50 transition-colors duration-500 mb-2" />
                       <div className="text-graphite-500 font-medium text-lg uppercase tracking-widest opacity-50">{resource.category}</div>
                       
                       <div className="absolute inset-0 bg-linear-to-t from-charcoal-950 via-charcoal-950/80 to-transparent opacity-90" />
                       
                       <div className="absolute top-4 right-4 z-10">
                          {resource.access === "premium" ? (
                             <Badge className="bg-aurora-500/20 text-aurora-300 border-aurora-500/30 font-medium backdrop-blur-md">Premium</Badge>
                          ) : resource.access === "solo" ? (
                             <Badge variant="secondary" className="bg-graphite-800/80 text-graphite-300 border-graphite-700 font-medium backdrop-blur-md">Included</Badge>
                          ) : (
                             <Badge variant="outline" className="text-graphite-400 border-graphite-700 font-medium backdrop-blur-md bg-charcoal-950/50">Free</Badge>
                          )}
                       </div>
                    </div>

                    <CardHeader className="pt-5 flex-1 relative z-10">
                      <div className="flex items-center justify-between mb-3 text-xs text-graphite-400">
                        <div className="flex items-center gap-2">
                           <span className="font-medium text-graphite-300">{resource.author}</span>
                        </div>
                        {resource.rating && (
                           <div className="flex items-center gap-1 text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded-full font-medium">
                              <Star className="w-3 h-3 fill-current" />
                              <span>{resource.rating}</span>
                           </div>
                        )}
                      </div>
                      <CardTitle className="text-xl group-hover:text-aurora-50 transition-colors line-clamp-1">{resource.title}</CardTitle>
                      <CardDescription className="line-clamp-2 text-graphite-400 mt-2 leading-relaxed">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardFooter className="mt-auto pt-4 pb-5 flex justify-between items-center border-t border-graphite-800/50 bg-charcoal-950/50">
                      <span className="text-sm font-semibold text-white">{resource.price}</span>
                      <span className="text-aurora-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 duration-300">
                        View details &rarr;
                      </span>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
             )
          })}
        </div>
      </section>

    </div>
  )
}
