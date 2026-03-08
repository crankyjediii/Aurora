"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, BookOpen, Workflow, Building2, ArrowRight } from "lucide-react"
import Link from "next/link"

const SOLUTIONS = [
  {
    id: "individuals",
    title: "For Individuals",
    icon: Users,
    description: "Professionals wanting to safely explore AI without getting overwhelmed by tech jargon or scattered subscriptions.",
    benefits: [
      "Access a curated library of beginner-friendly AI tools.",
      "Track your personal AI token spend in one place.",
      "Build real productivity habits without the noise."
    ],
    cta: "Start Free"
  },
  {
    id: "educators",
    title: "For Educators & Students",
    icon: BookOpen,
    description: "Those looking for structured learning paths and engineered prompts to dramatically improve academic workflows.",
    benefits: [
      "Find vetted prompts for grading, lesson planning, and research.",
      "Clear guidelines on academic AI integrity.",
      "Organized study tools and summary kits."
    ],
    cta: "Explore Library"
  },
  {
    id: "agencies",
    title: "For Agencies & Teams",
    icon: Workflow,
    description: "Managers needing a centralized hub to distribute standardized AI tools and cost controls across their staff.",
    benefits: [
      "Create shared workflow kits for your entire team.",
      "Standardize client deliverables using consistent prompt systems.",
      "Centralized billing and access management."
    ],
    cta: "View Team Pricing"
  },
  {
    id: "small-business",
    title: "For Small Businesses",
    icon: Building2,
    description: "Owners who want the benefits of enterprise AI automation without hiring a dedicated development team.",
    benefits: [
      "Ready-to-use workflows for marketing and operations.",
      "Cost calculators to ensure positive ROI.",
      "Plain-English guides for non-technical staff."
    ],
    cta: "Start Building"
  }
]

export default function SolutionsPage() {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      
      {/* HEADER SECTION */}
      <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden bg-charcoal-950">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] rounded-full bg-aurora-glow blur-[120px] opacity-40 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <Badge variant="outline" className="w-fit border-aurora-500/30 text-aurora-300 backdrop-blur-sm mb-6">
            Solutions
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight max-w-4xl mb-6">
            AI adoption tailored to <span className="text-transparent bg-clip-text bg-linear-to-r from-aurora-400 to-indigo-400">how you work.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-graphite-300 max-w-2xl leading-relaxed mb-10">
            Whether you are exploring AI for the first time or rolling it out to an entire agency, Aurora provides the structure and clarity you need to succeed.
          </p>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="w-full py-20 bg-graphite-950 relative">
        <div className="absolute inset-0 bg-linear-to-b from-charcoal-950 to-transparent pointer-events-none h-32" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {SOLUTIONS.map((solution, i) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full flex flex-col bg-charcoal-950 border-graphite-800/50 hover:border-aurora-500/30 transition-all duration-300 group overflow-hidden relative">
                    <div className="absolute top-0 w-full h-px bg-linear-to-r from-transparent via-aurora-500/0 group-hover:via-aurora-500/50 to-transparent transition-colors duration-500" />
                    
                    <CardHeader>
                      <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-graphite-800 to-graphite-900 border border-graphite-700 flex items-center justify-center mb-6 relative overflow-hidden">
                        <div className="absolute inset-0 bg-aurora-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Icon className="w-7 h-7 text-graphite-400 group-hover:text-aurora-400 transition-colors duration-500 relative z-10" />
                      </div>
                      <CardTitle className="text-2xl text-white mb-2">{solution.title}</CardTitle>
                      <CardDescription className="text-base text-graphite-300 leading-relaxed">
                        {solution.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="flex-1 flex flex-col">
                      <div className="space-y-3 mb-8 flex-1">
                        {solution.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-aurora-500 shrink-0" />
                            <span className="text-sm text-graphite-400">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button variant="ghost" className="w-fit text-aurora-400 hover:text-white hover:bg-aurora-500/20 group/btn">
                        {solution.cta} <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full py-24 relative overflow-hidden flex items-center justify-center bg-charcoal-950 border-t border-graphite-800/30">
        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to find your focus?</h2>
          <p className="text-lg text-graphite-400 mb-10 max-w-2xl">
            Join thousands of users who have traded AI overwhelm for organized, practical workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="rounded-full shadow-[0_0_20px_rgba(139,92,246,0.4)] px-8 text-base font-semibold">
              <Link href="/signup">Start your free trial</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full px-8 text-base border-graphite-700 hover:bg-graphite-800">
              <Link href="/library">Explore the Library</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
