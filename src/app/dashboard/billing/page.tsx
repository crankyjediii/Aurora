"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Download, ExternalLink } from "lucide-react"

export default function DashboardBilling() {
  return (
    <div className="flex flex-col gap-10 max-w-4xl mx-auto pb-16">
      
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-white tracking-tight">Billing & Plan</h1>
        <p className="text-graphite-400">Manage your subscription and payment details.</p>
      </div>

      <Card className="bg-charcoal-950 border-aurora-500/30 overflow-hidden relative shadow-[0_0_30px_rgba(139,92,246,0.05)]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-aurora-500/10 blur-[80px] pointer-events-none" />
        <CardContent className="p-8 relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Badge className="bg-aurora-500/10 text-aurora-400 border-0 pointer-events-none uppercase tracking-wider font-semibold text-xs">Current Plan</Badge>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Solo Plan</h2>
              <p className="text-graphite-400">Next billing date is April 4, 2026. <span className="text-white font-medium">$19.00</span></p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
             <Button variant="outline" className="border-graphite-700 bg-graphite-900 text-white hover:bg-graphite-800">
               Cancel plan
             </Button>
             <Button className="bg-aurora-500 hover:bg-aurora-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)] border-0">
               Update payment method
             </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h3 className="text-xl font-semibold text-white mb-4">Plan Benefits</h3>
          <div className="flex flex-col gap-4 p-6 rounded-2xl bg-charcoal-950 border border-graphite-800">
             {[
               "All Premium Tool Guides",
               "Full Prompt System Library",
               "Cost & Token Calculators",
               "2 Workflow Kits per month",
               "Dashboard resource management"
             ].map((item, i) => (
               <div key={i} className="flex items-center gap-3">
                 <CheckCircle2 className="w-5 h-5 text-aurora-500 shrink-0" />
                 <span className="text-graphite-300 text-sm">{item}</span>
               </div>
             ))}
             <div className="border-t border-graphite-800 pt-4 mt-2">
               <Button variant="link" className="text-aurora-400 h-auto p-0 hover:text-aurora-300">Compare all plans <ExternalLink className="w-3 h-3 ml-1" /></Button>
             </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-white mb-4">Invoice History</h3>
          <div className="flex flex-col rounded-2xl bg-charcoal-950 border border-graphite-800 overflow-hidden">
             {[
               { id: "INV-2026-03", date: "Mar 4, 2026", amount: "$19.00", status: "Paid" },
               { id: "INV-2026-02", date: "Feb 4, 2026", amount: "$19.00", status: "Paid" },
             ].map((inv, i) => (
               <div key={i} className="flex items-center justify-between p-4 border-b border-graphite-800 last:border-0 hover:bg-graphite-900/50 transition-colors">
                 <div>
                   <div className="text-sm font-medium text-white">{inv.date}</div>
                   <div className="text-xs text-graphite-500">{inv.amount} • {inv.id}</div>
                 </div>
                 <div className="flex items-center gap-3">
                   <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-0">{inv.status}</Badge>
                   <Button variant="ghost" size="icon" className="text-graphite-400 hover:text-white">
                     <Download className="w-4 h-4" />
                   </Button>
                 </div>
               </div>
             ))}
          </div>
        </section>
      </div>

    </div>
  )
}
