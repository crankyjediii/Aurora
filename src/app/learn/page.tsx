"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, TerminalSquare, Calculator, Workflow, PlayCircle, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

const CATEGORIES = [
  {
    title: "Tool Guides",
    icon: BookOpen,
    desc: "Plain-English explanations of what popular AI tools actually do, minus the marketing hype.",
    topics: ["Claude 3 vs GPT-4", "Image Generation Basics", "When to use Perplexity"]
  },
  {
    title: "Prompt Systems",
    icon: TerminalSquare,
    desc: "Engineered, tested prompts that consistently generate high-quality results for specific tasks.",
    topics: ["The PERFECT Framework", "Context Window Best Practices", "Tone Formatting"]
  },
  {
    title: "Cost & Token Basics",
    icon: Calculator,
    desc: "Understand exactly what you're paying for and how to avoid unexpected AI subscription bloat.",
    topics: ["What is a token?", "API vs Subscriptions", "Calculating ROI"]
  },
  {
    title: "Workflow Kits",
    icon: Workflow,
    desc: "Start-to-finish guides for connecting multiple AI tools into a single, seamless process.",
    topics: ["Automating Weekly Reports", "Content Drafting Engine", "Research Synthesis"]
  }
]

export default function LearnPage() {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      
      {/* HEADER SECTION */}
      <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden bg-graphite-950">
        <div className="absolute top-0 left-0 -ml-32 -mt-32 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <Badge variant="outline" className="w-fit border-indigo-500/30 text-indigo-300 backdrop-blur-sm mb-6">
            <BookOpen className="w-3 h-3 mr-2" />
            Learning Center
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight max-w-4xl mb-6">
            Master practical AI, <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-aurora-400">one step at a time.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-graphite-300 max-w-2xl leading-relaxed mb-10">
            Skip the endless Twitter threads and confusing courses. Get curated, beginner-friendly guides that focus entirely on getting real work done.
          </p>
          
          <Button size="lg" className="rounded-full shadow-[0_0_20px_rgba(99,102,241,0.4)] bg-indigo-600 hover:bg-indigo-500 text-base">
            <PlayCircle className="w-5 h-5 mr-2" /> Start the Quickstart Course
          </Button>
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="w-full py-20 bg-charcoal-950 relative border-t border-graphite-800/30">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
             <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Browse by Category</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {CATEGORIES.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card className="h-full bg-graphite-950 border-graphite-800/50 hover:border-indigo-500/30 transition-all duration-300 group cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-xl text-white group-hover:text-indigo-300 transition-colors">
                          {cat.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-sm text-graphite-400 mb-6 border-b border-graphite-800/50 pb-6">
                        {cat.desc}
                      </CardDescription>
                      
                      <div className="pt-2">
                         <p className="text-xs font-semibold text-graphite-500 uppercase tracking-wider mb-3">Popular Topics</p>
                         <ul className="space-y-2">
                           {cat.topics.map((topic, idx) => (
                             <li key={idx} className="flex items-center text-sm text-graphite-300 group-hover:text-graphite-200 transition-colors">
                               <Sparkles className="w-3.5 h-3.5 mr-2 text-graphite-600 group-hover:text-indigo-400 transition-colors" /> {topic}
                             </li>
                           ))}
                         </ul>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="w-full py-24 relative overflow-hidden flex items-center justify-center bg-graphite-950 border-t border-graphite-800/30">
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          <h2 className="text-3xl font-bold text-white mb-6">Put your learning into practice.</h2>
          <p className="text-graphite-400 mb-8 max-w-lg">
            Every guide in our Learning Center connects directly to tools and workflows available in the Aurora Library.
          </p>
          <Button variant="outline" asChild className="rounded-full border-graphite-700 hover:bg-charcoal-900 group">
            <Link href="/library" className="flex items-center">
              Go to Library <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

    </div>
  )
}
