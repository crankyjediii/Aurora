"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PRICING_PLANS, PRODUCT_CATEGORIES, PAIN_POINTS } from "@/lib/mock-data"
import { CheckCircle2, Star, Sparkles, BookOpen, Calculator, Workflow, Users, TerminalSquare, BoxSelect, MessageSquareDashed, CreditCard, Search, Settings } from "lucide-react"
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
            className="relative h-[450px] md:h-[550px] w-full flex items-center justify-center overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-aurora-900/10 blur-[80px]" />
            
            {/* Layered Cards Composite */}
            <motion.div 
              className="absolute z-10 w-64 p-4 rounded-xl border border-graphite-800 bg-charcoal-900/90 shadow-2xl backdrop-blur-md left-0 top-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3 mb-3">
                 <div className="p-2 rounded-lg bg-aurora-500/10 text-aurora-400">
                    <BookOpen className="w-5 h-5" />
                 </div>
                 <div className="font-medium text-white text-sm">Claude 3 Pro Guide</div>
              </div>
              <div className="h-16 w-full rounded bg-graphite-800/50 mb-2" />
              <div className="h-2 w-3/4 rounded bg-graphite-800" />
            </motion.div>

            <motion.div 
              className="absolute z-20 w-72 p-5 rounded-xl border border-aurora-500/30 bg-charcoal-950/95 shadow-[0_0_50px_rgba(139,92,246,0.15)] backdrop-blur-xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 7, delay: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-between mb-4">
                 <div className="flex items-center gap-3">
                   <div className="p-2.5 rounded-lg bg-aurora-500 text-white shadow-lg shadow-aurora-500/20">
                      <Workflow className="w-5 h-5" />
                   </div>
                   <div>
                     <div className="font-semibold text-white">Agency Workflow</div>
                     <div className="text-xs text-graphite-400">Active Kit</div>
                   </div>
                 </div>
                 <Badge variant="secondary" className="bg-aurora-900/30 text-aurora-300 border-0">Running</Badge>
              </div>
              <div className="space-y-2">
                 <div className="flex items-center gap-2 text-sm text-graphite-300">
                    <CheckCircle2 className="w-4 h-4 text-aurora-500" /> Auto-drafting proposals
                 </div>
                 <div className="flex items-center gap-2 text-sm text-graphite-300">
                    <CheckCircle2 className="w-4 h-4 text-aurora-500" /> Weekly client reports
                 </div>
              </div>
            </motion.div>

            <motion.div 
              className="absolute z-0 w-60 p-4 rounded-xl border border-graphite-800 bg-charcoal-900/80 shadow-2xl backdrop-blur-md right-4 bottom-16"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, delay: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3 mb-3">
                 <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Calculator className="w-5 h-5" />
                 </div>
                 <div className="font-medium text-white text-sm">Token Cost</div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">$14.20</div>
              <div className="text-xs text-graphite-400">Estimated monthly usage</div>
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

      {/* 4.5 BUILT FOR SECTION */}
      <section className="w-full py-24 bg-charcoal-950/50 border-t border-graphite-800/30">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-sm font-semibold tracking-wider text-aurora-400 uppercase">Who is Aurora for?</h2>
           </div>
           <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
             <div className="flex flex-col items-center text-center">
               <div className="w-16 h-16 rounded-2xl bg-graphite-900 border border-graphite-800 flex items-center justify-center mb-6 shadow-xl">
                 <Users className="w-8 h-8 text-graphite-300" />
               </div>
               <h3 className="text-xl font-semibold text-white mb-3">Individuals</h3>
               <p className="text-graphite-400 text-base max-w-xs leading-relaxed">Professionals wanting to safely explore AI without getting overwhelmed by tech jargon or scattered subscriptions.</p>
             </div>
             <div className="flex flex-col items-center text-center">
               <div className="w-16 h-16 rounded-2xl bg-graphite-900 border border-graphite-800 flex items-center justify-center mb-6 shadow-xl">
                 <BookOpen className="w-8 h-8 text-graphite-300" />
               </div>
               <h3 className="text-xl font-semibold text-white mb-3">Educators & Students</h3>
               <p className="text-graphite-400 text-base max-w-xs leading-relaxed">Those looking for structured learning paths and engineered prompts to dramatically improve academic workflows.</p>
             </div>
             <div className="flex flex-col items-center text-center">
               <div className="w-16 h-16 rounded-2xl bg-graphite-900 border border-graphite-800 flex items-center justify-center mb-6 shadow-xl">
                 <Workflow className="w-8 h-8 text-graphite-300" />
               </div>
               <h3 className="text-xl font-semibold text-white mb-3">Agencies & Teams</h3>
               <p className="text-graphite-400 text-base max-w-xs leading-relaxed">Managers needing a centralized hub to distribute standardized AI tools and cost controls across their staff.</p>
             </div>
           </div>
        </div>
      </section>

      {/* 5 & 6. SOLUTION & CATEGORIES SECTION */}
      <section className="w-full py-24 md:py-32 relative overflow-hidden">
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
             className="w-full max-w-5xl rounded-xl border border-graphite-800 bg-graphite-950 shadow-2xl overflow-hidden shadow-aurora-900/10 flex flex-col"
           >
             {/* Fake App Header */}
             <div className="h-14 border-b border-graphite-800 flex items-center px-4 bg-charcoal-950 justify-between">
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-graphite-700" />
                 <div className="w-3 h-3 rounded-full bg-graphite-700" />
                 <div className="w-3 h-3 rounded-full bg-graphite-700" />
               </div>
               <div className="hidden sm:flex w-64 h-8 bg-graphite-900 rounded-md border border-graphite-800 items-center px-3 gap-2">
                 <Search className="w-3 h-3 text-graphite-500" />
                 <div className="w-24 h-2 bg-graphite-700 rounded-full" />
               </div>
               <div className="w-8 h-8 rounded-full bg-linear-to-tr from-aurora-500 to-indigo-500" />
             </div>
             {/* Fake App Content */}
             <div className="flex flex-1 min-h-[450px]">
                {/* Sidebar */}
                <div className="hidden md:flex flex-col w-56 border-r border-graphite-800 p-4 gap-2 bg-charcoal-950">
                  <div className="h-9 bg-aurora-500/10 text-aurora-400 rounded-md flex items-center px-3 mb-2 gap-3 transition-colors">
                    <BookOpen className="w-4 h-4" /> <span className="text-sm font-medium">My Library</span>
                  </div>
                  <div className="h-9 text-graphite-400 hover:text-white hover:bg-graphite-900 rounded-md flex items-center px-3 gap-3 transition-colors">
                    <Workflow className="w-4 h-4" /> <span className="text-sm font-medium">Workflows</span>
                  </div>
                  <div className="h-9 text-graphite-400 hover:text-white hover:bg-graphite-900 rounded-md flex items-center px-3 gap-3 transition-colors">
                    <Calculator className="w-4 h-4" /> <span className="text-sm font-medium">Costs</span>
                  </div>
                  <div className="mt-auto h-9 text-graphite-500 hover:text-white hover:bg-graphite-900 rounded-md flex items-center px-3 gap-3 transition-colors">
                    <Settings className="w-4 h-4" /> <span className="text-sm font-medium">Settings</span>
                  </div>
                </div>
                {/* Main Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col gap-6 bg-graphite-950 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-aurora-500/5 blur-[100px] rounded-full pointer-events-none" />
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">Welcome back, Jane</h3>
                    <p className="text-graphite-400 text-sm">Here&apos;s your active workspace overview.</p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                     {/* Stat Cards */}
                     <div className="p-5 rounded-xl border border-graphite-800 bg-charcoal-950 flex flex-col gap-2 shadow-sm">
                       <span className="text-graphite-400 text-xs font-semibold uppercase tracking-wider">Active Tools</span>
                       <span className="text-3xl font-bold text-white">4</span>
                     </div>
                     <div className="p-5 rounded-xl border border-graphite-800 bg-charcoal-950 flex flex-col gap-2 shadow-sm">
                       <span className="text-graphite-400 text-xs font-semibold uppercase tracking-wider">Running Workflows</span>
                       <span className="text-3xl font-bold text-white">2</span>
                     </div>
                     <div className="hidden md:flex p-5 rounded-xl border border-graphite-800 bg-charcoal-950 flex-col gap-2 shadow-sm">
                       <span className="text-graphite-400 text-xs font-semibold uppercase tracking-wider">Est. Monthly Cost</span>
                       <span className="text-3xl font-bold text-white">$24.00</span>
                     </div>
                  </div>

                  <div className="flex-1 rounded-xl border border-graphite-800 bg-charcoal-950 p-6 shadow-sm">
                     <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Recently Accessed</h4>
                     <div className="flex flex-col gap-3">
                       <div className="flex items-center justify-between p-3 rounded-lg border border-graphite-800/50 hover:bg-graphite-900/50 hover:border-graphite-700 transition-all cursor-pointer">
                         <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-md bg-aurora-500/10 flex items-center justify-center text-aurora-400"><BookOpen className="w-5 h-5"/></div>
                           <div>
                             <div className="text-sm font-medium text-graphite-200">The Claude 3 Pro Guide</div>
                             <div className="text-xs text-graphite-500">Tool Guide</div>
                           </div>
                         </div>
                         <Button variant="ghost" size="sm" className="hidden sm:flex h-8 text-xs text-graphite-400">Open</Button>
                       </div>
                       <div className="flex items-center justify-between p-3 rounded-lg border border-graphite-800/50 hover:bg-graphite-900/50 hover:border-graphite-700 transition-all cursor-pointer">
                         <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-md bg-indigo-500/10 flex items-center justify-center text-indigo-400"><Workflow className="w-5 h-5"/></div>
                           <div>
                             <div className="text-sm font-medium text-graphite-200">Marketing Copy System</div>
                             <div className="text-xs text-graphite-500">Prompt System</div>
                           </div>
                         </div>
                         <Button variant="ghost" size="sm" className="hidden sm:flex h-8 text-xs text-graphite-400">Open</Button>
                       </div>
                     </div>
                  </div>
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
