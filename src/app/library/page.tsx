"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FEATURED_RESOURCES, PRODUCT_CATEGORIES } from "@/lib/mock-data"
import { Search, Filter, BookOpen, TerminalSquare, Calculator, Workflow, Users } from "lucide-react"
import Link from "next/link"

const IconMap: Record<string, any> = {
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
                <Link href={`/products/${resource.id}`}>
                  <Card className="h-full group cursor-pointer border-graphite-800 hover:border-aurora-500/50 transition-all duration-300 bg-charcoal-950 overflow-hidden flex flex-col">
                    {/* Fake Image Container */}
                    <div className="w-full h-48 bg-graphite-900 border-b border-graphite-800 relative overflow-hidden flex items-center justify-center">
                       <CategoryIcon className="w-16 h-16 text-graphite-800 group-hover:text-aurora-900/40 transition-colors duration-500" />
                       <div className="absolute inset-0 bg-linear-to-t from-charcoal-950 to-transparent opacity-80" />
                       <div className="absolute bottom-4 left-4">
                         <Badge variant="secondary" className="bg-charcoal-900 border-graphite-700 text-xs">
                           {resource.category}
                         </Badge>
                       </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-aurora-50 transition-colors w-full truncate">{resource.title}</CardTitle>
                      <CardDescription className="line-clamp-2 text-graphite-400 mt-2">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto pt-4 flex justify-between items-center border-t border-graphite-800/50">
                      <span className="text-sm font-medium text-white">{resource.price}</span>
                      <span className="text-aurora-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                        View Details →
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
