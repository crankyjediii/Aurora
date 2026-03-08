"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PRICING_PLANS, PRODUCT_CATEGORIES, PAIN_POINTS } from "@/lib/mock-data"
import { CheckCircle2, Star, Sparkles, BookOpen, Calculator, Workflow, Users, TerminalSquare, BoxSelect, MessageSquareDashed, CreditCard } from "lucide-react"
import React from "react"

// Icon Map for dynamic rendering
const IconMap: Record<string, React.ElementType> = {
  BookOpen, TerminalSquare, Calculator, Workflow, Users, BoxSelect, MessageSquareDashed, CreditCard
};

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      
      {/* 2. HERO SECTION */}
      <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Glow Background Element */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] rounded-full bg-aurora-glow blur-[100px] animate-aurora-drift opacity-60 pointer-events-none" />
        
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <Badge variant="outline" className="w-fit border-aurora-500/30 text-aurora-300 backdrop-blur-sm">
              <Sparkles className="w-3 h-3 mr-2" />
              The AI Operating System
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Make AI practical for <span className="text-transparent bg-clip-text bg-linear-to-r from-aurora-400 to-aurora-600">work and life.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-graphite-300 max-w-lg leading-relaxed">
              Stop guessing. Aurora helps you choose the right tools, learn what they do, and build better workflows without the confusion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-full shadow-[0_0_20px_rgba(139,92,246,0.4)] text-base">
                Start Free
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base backdrop-blur-sm border-graphite-700/50">
                Explore the Library
              </Button>
            </div>
            
            <div className="flex items-center gap-4 mt-4 text-sm text-graphite-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-charcoal-900 bg-graphite-800 flex items-center justify-center opacity-${100 - (i*10)}`}>
                     <Star className="w-3 h-3 text-aurora-400" />
                  </div>
                ))}
              </div>
              <p>Trusted by 10,000+ professionals</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-2xl border border-graphite-800/50 bg-charcoal-950/40 backdrop-blur-3xl shadow-2xl flex items-center justify-center overflow-hidden"
          >
            {/* Abstract UI composition */}
            <div className="absolute inset-0 bg-glass-gradient" />
            <motion.div className="animate-float">
               <div className="w-64 h-32 rounded-xl border border-aurora-500/20 bg-charcoal-900/80 shadow-[0_0_30px_rgba(139,92,246,0.15)] flex flex-col p-4 gap-3 relative z-20 backdrop-blur-md">
                 <div className="w-1/2 h-4 bg-graphite-800 rounded-md" />
                 <div className="w-full h-12 bg-graphite-800/50 rounded-md flex items-center px-3 gap-3">
                   <div className="w-6 h-6 rounded-full bg-aurora-500/50" />
                   <div className="w-2/3 h-2 bg-graphite-700 rounded-full" />
                 </div>
               </div>
            </motion.div>
            <motion.div 
              className="absolute animate-float"
              style={{ animationDelay: '-3s' }}
            >
               <div className="w-48 h-48 rounded-2xl border border-graphite-800/50 bg-charcoal-950/90 shadow-xl absolute -right-32 -bottom-24 backdrop-blur-xl p-4 flex flex-col gap-2">
                 <div className="w-full h-8 bg-graphite-900 rounded-md" />
                 <div className="w-full h-full bg-graphite-900/50 rounded-md" />
               </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 3. TRUST STRIP */}
      <section className="w-full border-y border-graphite-800/30 bg-charcoal-950/30 py-6 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-6 text-sm font-medium text-graphite-400">
          {["Tool Guides", "Prompt Systems", "Cost Optimization", "Workflow Kits", "Team Resources"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-aurora-500/70" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* 4. PROBLEM / PAIN SECTION */}
      <section className="w-full py-24 md:py-32">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <Badge variant="secondary" className="mb-6 font-normal tracking-wide">The Status Quo</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 max-w-2xl">
            AI adoption is still too fragmented.
          </h2>
          <p className="text-lg text-graphite-400 max-w-2xl mb-16">
            Most people don&apos;t need more tools. They need clarity. Between constant model updates and generic interfaces, building real habits is exhausting.
          </p>

          <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
            {PAIN_POINTS.map((pain, i) => {
              const Icon = IconMap[pain.icon] || BoxSelect;
              return (
                <motion.div
                  key={pain.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full bg-charcoal-950 border-graphite-800/40 text-left">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-graphite-900 border border-graphite-800 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-graphite-400" />
                      </div>
                      <CardTitle className="text-lg">{pain.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed text-graphite-400 mb-0">
                        {pain.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5 & 6. SOLUTION & CATEGORIES SECTION */}
      <section className="w-full py-24 md:py-32 bg-charcoal-950/50 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -ml-64 -mt-64 w-[500px] h-[500px] rounded-full bg-aurora-900/10 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            One system for practical AI adoption.
          </h2>
          <p className="text-lg text-graphite-400 max-w-2xl mb-16">
            Explore the tools, systems, and resources inside Aurora designed to move you from confusion to clarity.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {PRODUCT_CATEGORIES.map((cat, i) => {
              const Icon = IconMap[cat.icon] || BookOpen;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full group cursor-pointer border-graphite-800/50 hover:border-aurora-500/30 transition-all duration-300 relative overflow-hidden bg-charcoal-950">
                    <div className="absolute inset-0 bg-linear-to-br from-aurora-500/0 via-transparent to-aurora-500/0 group-hover:to-aurora-500/5 transition-colors duration-500" />
                    <CardHeader className="text-left relative z-10">
                      <Icon className="w-8 h-8 text-aurora-400 mb-4" />
                      <CardTitle className="text-xl group-hover:text-aurora-50 transition-colors">{cat.title}</CardTitle>
                      <CardDescription className="mt-2 text-graphite-400 group-hover:text-graphite-300 transition-colors">
                        {cat.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 7. DASHBOARD PREVIEW */}
      <section className="w-full py-24 md:py-32">
        <div className="container mx-auto px-4 flex flex-col items-center">
           <div className="text-center mb-16 max-w-2xl">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
               A calmer way to work.
             </h2>
             <p className="text-lg text-graphite-400">
               Everything you need, in one guided workspace. The dashboard brings owned products, recommendations, and support into an organized environment.
             </p>
           </div>

           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
             className="w-full max-w-5xl rounded-xl border border-graphite-800 bg-graphite-950 shadow-2xl overflow-hidden shadow-aurora-900/10"
           >
             {/* Fake App Header */}
             <div className="h-12 border-b border-graphite-800 flex items-center px-4 bg-[#161618]">
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-graphite-700" />
                 <div className="w-3 h-3 rounded-full bg-graphite-700" />
                 <div className="w-3 h-3 rounded-full bg-graphite-700" />
               </div>
             </div>
             {/* Fake App Content */}
             <div className="p-8 grid md:grid-cols-4 gap-6 min-h-[400px]">
                <div className="hidden md:flex flex-col gap-4 border-r border-graphite-800 pr-4">
                  <div className="h-8 bg-graphite-800/50 rounded w-full mb-4" />
                  <div className="h-6 bg-graphite-900 rounded w-3/4" />
                  <div className="h-6 bg-graphite-900 rounded w-5/6" />
                  <div className="h-6 bg-graphite-900 rounded w-2/3" />
                </div>
                <div className="col-span-3 flex flex-col gap-6">
                  <div className="h-10 bg-graphite-800/50 rounded-lg w-1/3" />
                  <div className="grid grid-cols-2 gap-4">
                     <div className="h-32 bg-graphite-900 rounded-xl border border-graphite-800" />
                     <div className="h-32 bg-graphite-900 rounded-xl border border-graphite-800" />
                  </div>
                  <div className="h-64 bg-graphite-900 rounded-xl border border-graphite-800 mt-4" />
                </div>
             </div>
           </motion.div>
        </div>
      </section>

      {/* 8. HOW IT WORKS */}
      <section className="w-full py-24 bg-charcoal-950 border-t border-graphite-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">A simple path to better AI.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {["Find your fit", "Unlock practical resources", "Build smarter workflows"].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-aurora-500/10 border border-aurora-500/20 text-aurora-400 flex items-center justify-center text-xl font-bold">
                  {i + 1}
                </div>
                <h3 className="text-xl font-medium text-white">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PRICING TEASER */}
      <section className="w-full py-24 md:py-32" id="pricing">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Start free. Upgrade when ready.
            </h2>
            <p className="text-lg text-graphite-400">Pricing designed for individuals and teams.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
            {PRICING_PLANS.map((plan) => (
              <Card 
                key={plan.id} 
                className={`flex flex-col ${plan.recommended ? 'border-aurora-500 shadow-[0_0_30px_rgba(139,92,246,0.1)] relative' : 'border-graphite-800 bg-charcoal-950'}`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-aurora-500 text-white border-0 hover:bg-aurora-600">Recommended</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-medium">{plan.name}</CardTitle>
                  <div className="mt-4 flex items-baseline text-white">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    {plan.period && <span className="ml-1 text-xl font-medium text-graphite-500">{plan.period}</span>}
                  </div>
                  <CardDescription className="mt-4 text-graphite-400">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-aurora-400 mr-2 shrink-0" />
                        <span className="text-sm text-graphite-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.recommended ? "default" : "outline"}>
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="w-full py-24 md:py-40 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-aurora-900/20 border-t border-aurora-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-aurora-600/20 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Build your AI stack the smarter way.</h2>
          <p className="text-xl text-graphite-300 mb-10 max-w-2xl">
            Use AI with more confidence and less guesswork. Join thousands of professionals finding clarity inside Aurora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full shadow-[0_0_30px_rgba(139,92,246,0.5)] px-10 text-lg h-14">
              Start Free
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 text-lg h-14 bg-charcoal-900/50 backdrop-blur-sm border-graphite-700">
              Explore Pricing
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
