"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, ArrowRight, Lightbulb, Briefcase, Wand2, Target } from "lucide-react"
import { FEATURED_RESOURCES } from "@/lib/mock-data"
import Link from "next/link"

const QUESTIONS = [
  {
    title: "What is your primary goal?",
    options: [
      { id: "writing", label: "Better Copy/Writing", icon: Lightbulb },
      { id: "efficiency", label: "Automate Workflows", icon: Briefcase },
      { id: "creative", label: "Creative Generation", icon: Wand2 },
      { id: "business", label: "Business Operations", icon: Target },
    ]
  }
]

export default function DashboardToolFinder() {
  const [selected, setSelected] = useState<string | null>(null)
  const [showResults, setShowResults] = useState(false)

  return (
    <div className="flex flex-col gap-10 max-w-4xl mx-auto pb-16 items-center pt-8">
      
      <div className="text-center flex flex-col gap-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-aurora-500/10 flex items-center justify-center text-aurora-400 mb-2">
           <Search className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Find exactly what you need</h1>
        <p className="text-lg text-graphite-400 max-w-xl mx-auto">Tell us what you&apos;re trying to achieve, and we&apos;ll recommend the best tools and resources for the job.</p>
      </div>

      {!showResults ? (
        <div className="w-full mt-8">
          <h2 className="text-xl font-semibold text-white mb-6 text-center">{QUESTIONS[0].title}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {QUESTIONS[0].options.map((opt) => {
              const Icon = opt.icon
              const isSelected = selected === opt.id

              return (
                <Card 
                  key={opt.id} 
                  onClick={() => setSelected(opt.id)}
                  className={`cursor-pointer transition-all duration-300 border-2 ${isSelected ? 'bg-aurora-500/10 border-aurora-500' : 'bg-charcoal-950 border-graphite-800 hover:border-graphite-600'}`}
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isSelected ? 'bg-aurora-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]' : 'bg-graphite-900 border border-graphite-800 text-graphite-400'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-lg font-medium transition-colors ${isSelected ? 'text-white' : 'text-graphite-300'}`}>{opt.label}</span>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="flex justify-center mt-12">
            <Button 
               disabled={!selected}
               onClick={() => setShowResults(true)}
               className="bg-aurora-500 hover:bg-aurora-600 text-white px-8 py-6 rounded-xl text-lg shadow-[0_0_20px_rgba(139,92,246,0.3)] disabled:opacity-50 disabled:shadow-none transition-all"
            >
              Find my tools <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      ) : (
        <div className="w-full mt-4 flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
           <div className="text-center mb-4">
             <h2 className="text-2xl font-bold text-white mb-2">Here are your matches</h2>
             <Button variant="link" className="text-aurora-400 h-auto p-0" onClick={() => setShowResults(false)}>Start over</Button>
           </div>
           
           <div className="grid md:grid-cols-2 gap-6">
             {FEATURED_RESOURCES.slice(0, 2).map((item) => (
                <div key={item.id} className="p-6 rounded-2xl border border-aurora-500/30 bg-charcoal-950 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-aurora-500/5 blur-2xl pointer-events-none" />
                  <Badge className="bg-aurora-500/20 text-aurora-400 border-0 mb-4">Best Match</Badge>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-graphite-400 text-sm mb-6">{item.description}</p>
                  <Link href={`/dashboard/products/${item.id}`}>
                    <Button className="w-full bg-graphite-900 hover:bg-graphite-800 text-white border border-graphite-800 group-hover:border-aurora-500/50 transition-colors">
                      View Resource
                    </Button>
                  </Link>
                </div>
             ))}
           </div>
        </div>
      )}

    </div>
  )
}
