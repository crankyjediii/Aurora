"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PRICING_PLANS } from "@/lib/mock-data"
import { CheckCircle2, HelpCircle } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="flex flex-col items-center w-full pt-32 pb-24 overflow-hidden">
      
      {/* HEADER */}
      <section className="container mx-auto px-4 text-center max-w-3xl mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-32 w-[500px] h-[500px] rounded-full bg-aurora-glow blur-[120px] pointer-events-none opacity-50" />
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="relative z-10"
        >
          <Badge variant="outline" className="mb-6 border-aurora-500/30 text-aurora-300">Simple, transparent pricing</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Invest in clarity.
          </h1>
          <p className="text-xl text-graphite-400">
            Start for free to explore the platform. Upgrade to Solo or Team when you&apos;re ready to build real systems.
          </p>
        </motion.div>
      </section>

      {/* PRICING CARDS */}
      <section className="container mx-auto px-4 relative z-10 mb-32">
        <div className="grid lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card 
                className={`flex flex-col h-full ${plan.recommended ? 'border-aurora-500 shadow-[0_0_40px_rgba(139,92,246,0.15)] relative scale-100 lg:scale-105 z-10' : 'border-graphite-800 bg-charcoal-950'}`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-aurora-500 text-white border-0 hover:bg-aurora-600">Recommended</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-medium">{plan.name}</CardTitle>
                  <div className="mt-4 flex items-baseline text-white">
                    <span className="text-5xl font-extrabold">{plan.price}</span>
                    {plan.period && <span className="ml-1 text-xl font-medium text-graphite-500">{plan.period}</span>}
                  </div>
                  <CardDescription className="mt-4 text-graphite-400">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="h-px w-full bg-graphite-800/50 mb-6" />
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-aurora-400 mr-3 shrink-0 mt-0.5" />
                        <span className="text-sm text-graphite-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full h-12 text-base" variant={plan.recommended ? "default" : "outline"}>
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-graphite-400">Everything you need to know about the product and billing.</p>
        </div>

        <div className="grid gap-6">
          {[
            { q: "Is there a free trial?", a: "Yes, the Solo plan comes with a 14-day free trial. We don't charge your card until the trial ends, and you can cancel anytime." },
            { q: "What's included in the Free plan?", a: "The Free plan gives you access to beginner guides, a basic set of prompt templates, and the community forum. It's a great way to see how the platform works." },
            { q: "Can I upgrade or downgrade later?", a: "Absolutely. You can change your plan at any time from your account settings. Upgrades take effect immediately, while downgrades take effect at the end of your billing cycle." },
            { q: "Do I need to pay for API costs on top of this?", a: "Aurora is an educational and organizational platform. You will still need your own accounts (like ChatGPT Plus or Claude Pro) to use the underlying models, unless specified in a specific Workflow Kit." }
          ].map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-charcoal-950 border border-graphite-800/50"
            >
              <div className="flex gap-4">
                <HelpCircle className="w-6 h-6 text-aurora-500 shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">{faq.q}</h3>
                  <p className="text-graphite-400 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  )
}
