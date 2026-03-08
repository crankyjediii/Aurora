"use client"

import { useParams } from "next/navigation"
import { FEATURED_RESOURCES } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, TerminalSquare, Calculator, Workflow, Users, Star, Lock, CheckCircle2, Download, PlayCircle, Sparkles, MessageSquare } from "lucide-react"
import Link from "next/link"

const IconMap: Record<string, React.ElementType> = {
  BookOpen, TerminalSquare, Calculator, Workflow, Users
};

export default function DashboardProductDetail() {
  const params = useParams()
  // Mock finding product
  const product = FEATURED_RESOURCES.find(p => p.id === params.id) || FEATURED_RESOURCES[0]
  
  const Icon = IconMap[product.icon] || BookOpen
  const isOwned = product.access !== 'premium'

  return (
    <div className="flex flex-col max-w-5xl mx-auto pb-16">
      
      {/* Back link */}
      <div className="mb-6">
        <Link href="/dashboard/explore" className="text-sm text-graphite-400 hover:text-white transition-colors flex items-center w-fit">
          ← Back to Explore
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        
        {/* Main Content Column */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-graphite-900 text-graphite-300 border border-graphite-800">
                {product.category}
              </Badge>
              <div className="flex items-center gap-1 text-aurora-400 text-sm font-medium">
                <Star className="w-4 h-4 fill-aurora-400" />
                {product.rating}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{product.title}</h1>
            <p className="text-lg text-graphite-400 leading-relaxed">{product.description}</p>
          </div>

          <div className="w-full h-64 md:h-80 rounded-2xl bg-charcoal-900 border border-graphite-800 flex items-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-aurora-500/5 group-hover:bg-aurora-500/10 transition-colors duration-500 blur-2xl" />
             <Icon className="w-24 h-24 text-graphite-700 relative z-10" />
          </div>

          <div className="flex flex-col gap-6 pt-4 border-t border-graphite-800">
             <h2 className="text-xl font-bold text-white">What&apos;s Included</h2>
             <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Step-by-step PDF framework",
                  "Video walkthrough (15 mins)",
                  "Notion template toolkit",
                  "10 tested prompt snippets"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-aurora-500 shrink-0 mt-0.5" />
                    <span className="text-graphite-300 text-sm">{item}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Right Sidebar Column */}
        <div className="flex flex-col gap-6">
          <Card className="bg-charcoal-950 border-graphite-800 sticky top-24 overflow-hidden">
             {/* Access status header */}
             <div className={`h-1.5 w-full ${isOwned ? 'bg-aurora-500' : 'bg-graphite-700'}`} />
             <CardContent className="p-6 flex flex-col gap-6">
               <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-2">
                   {isOwned ? (
                     <Badge className="bg-aurora-500/10 text-aurora-400 border-0 pointer-events-none hover:bg-aurora-500/10">
                       <Sparkles className="w-3 h-3 mr-1.5" /> Included in Plan
                     </Badge>
                   ) : (
                     <Badge className="bg-graphite-900 text-graphite-400 border-0 pointer-events-none">
                       Premium Resource
                     </Badge>
                   )}
                 </div>
                 {!isOwned && <div className="text-3xl font-bold text-white">{product.price}</div>}
               </div>

               {isOwned ? (
                 <div className="flex flex-col gap-3">
                   <Button className="w-full bg-aurora-500 hover:bg-aurora-600 text-white font-medium shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                     <PlayCircle className="w-4 h-4 mr-2" /> Start Module
                   </Button>
                   <Button variant="outline" className="w-full bg-graphite-900 border-graphite-700 text-white hover:bg-graphite-800">
                     <Download className="w-4 h-4 mr-2" /> Download Assets
                   </Button>
                 </div>
               ) : (
                 <Button className="w-full bg-white hover:bg-graphite-200 text-black font-semibold">
                   <Lock className="w-4 h-4 mr-2" /> Unlock Now
                 </Button>
               )}

               <div className="border-t border-graphite-800 pt-6 flex flex-col gap-4">
                 <div className="flex justify-between items-center text-sm">
                   <span className="text-graphite-400">Author</span>
                   <span className="text-white font-medium">{product.author}</span>
                 </div>
                 <div className="flex justify-between items-center text-sm">
                   <span className="text-graphite-400">Format</span>
                   <span className="text-white font-medium">Video/Text/Notion</span>
                 </div>
                 <div className="flex justify-between items-center text-sm">
                   <span className="text-graphite-400">Est. Time</span>
                   <span className="text-white font-medium">45 mins</span>
                 </div>
               </div>
             </CardContent>
          </Card>

          <Card className="bg-linear-to-b from-charcoal-900 to-charcoal-950 border-graphite-800 p-6 flex flex-col items-center text-center gap-3">
             <div className="w-10 h-10 rounded-full bg-graphite-900 border border-graphite-800 flex items-center justify-center text-graphite-400">
                <MessageSquare className="w-5 h-5" />
             </div>
             <div>
               <h3 className="text-sm font-semibold text-white">Have questions?</h3>
               <p className="text-xs text-graphite-400 mt-1">Ask the Aurora assistant about this resource.</p>
             </div>
             <Link href="/dashboard/chat">
               <Button variant="link" className="text-aurora-400 h-auto p-0 text-sm mt-1 hover:text-aurora-300">Ask Assistant</Button>
             </Link>
          </Card>
        </div>

      </div>
    </div>
  )
}
