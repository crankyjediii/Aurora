"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, CheckCircle2, Loader2,
  User, UserRound, GraduationCap, Building2, Users,
  PenTool, Zap, Settings, Cpu, Search, Lightbulb,
  Sparkles, Target, Rocket,
  Clock, DollarSign, Star, Gauge,
  MessageSquare, MessageSquareText, FileText, Workflow, MoreHorizontal
} from "lucide-react"
import { useMutation } from "convex/react"

const STEPS = [
  {
    title: "Who are you?",
    subtitle: "We'll customize your dashboard based on what you do.",
    options: [
      { id: "individual", label: "Individual", icon: User },
      { id: "freelancer", label: "Freelancer", icon: UserRound },
      { id: "educator", label: "Educator / Student", icon: GraduationCap },
      { id: "business", label: "Business owner", icon: Building2 },
      { id: "agency", label: "Agency / Team lead", icon: Users },
    ]
  },
  {
    title: "What do you want help with?",
    subtitle: "Select your primary focus area.",
    options: [
      { id: "content", label: "Content", icon: PenTool },
      { id: "productivity", label: "Productivity", icon: Zap },
      { id: "operations", label: "Operations", icon: Settings },
      { id: "automation", label: "Automation", icon: Cpu },
      { id: "research", label: "Research", icon: Search },
      { id: "learning", label: "Learning AI basics", icon: Lightbulb },
    ]
  },
  {
    title: "What is your experience level?",
    subtitle: "This helps us recommend the right tool guides and systems.",
    options: [
      { id: "beginner", label: "Beginner", icon: Sparkles },
      { id: "intermediate", label: "Intermediate", icon: Target },
      { id: "advanced", label: "Advanced", icon: Rocket },
    ]
  },
  {
    title: "What is your primary goal?",
    subtitle: "What is the main outcome you want from Aurora?",
    options: [
      { id: "time", label: "Save time", icon: Clock },
      { id: "cost", label: "Reduce costs", icon: DollarSign },
      { id: "quality", label: "Improve quality", icon: Star },
      { id: "automate", label: "Automate tasks", icon: Zap },
      { id: "learn", label: "Learn tools faster", icon: Gauge },
    ]
  },
  {
    title: "Current tools (Optional)",
    subtitle: "Which is your primary tool today?",
    options: [
      { id: "chatgpt", label: "ChatGPT", icon: MessageSquare },
      { id: "claude", label: "Claude", icon: MessageSquareText },
      { id: "gemini", label: "Gemini", icon: Sparkles },
      { id: "notion", label: "Notion", icon: FileText },
      { id: "zapier", label: "Zapier", icon: Workflow },
      { id: "other", label: "Other", icon: MoreHorizontal },
    ]
  }
]

export default function OnboardingFlow() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isFinishing, setIsFinishing] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateOnboarding = useMutation("users:updateOnboardingState" as any)

  const handleSelect = (optionId: string) => {
    setAnswers(prev => ({ ...prev, [currentStep]: optionId }))
  }

  const handleNext = async () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      setIsFinishing(true)
      try {
        await updateOnboarding({ status: "completed", data: answers })
        router.push("/dashboard")
      } catch (err) {
        console.error("Failed to save onboarding state", err)
        router.push("/dashboard") // Proceed anyway for resilience
      }
    }
  }

  const step = STEPS[currentStep]

  if (isFinishing) {
    return (
      <div className="min-h-screen bg-graphite-950 flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center text-center gap-6 animate-in fade-in zoom-in duration-1000">
           <div className="relative">
             <div className="absolute inset-0 bg-aurora-500/20 blur-2xl rounded-full" />
             <div className="w-20 h-20 rounded-2xl bg-charcoal-900 border border-graphite-800 shadow-[0_0_30px_rgba(139,92,246,0.2)] flex items-center justify-center relative z-10">
               <Loader2 className="w-10 h-10 text-aurora-500 animate-spin" />
             </div>
           </div>
           <div>
             <h2 className="text-2xl font-bold text-white tracking-tight">Personalizing your workspace...</h2>
             <p className="text-graphite-400 mt-2">Setting up your curated tools and resources.</p>
           </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-graphite-950 flex flex-col items-center justify-center p-4 selection:bg-aurora-500/30 selection:text-white">
      
      <div className="w-full max-w-2xl flex flex-col gap-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        {/* Progress */}
        <div className="flex items-center gap-2 mb-4 w-full justify-center">
           {STEPS.map((_, i) => (
             <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i <= currentStep ? 'w-12 bg-aurora-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]' : 'w-6 bg-graphite-800'}`} />
           ))}
        </div>

        {/* Content */}
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{step.title}</h1>
          <p className="text-lg text-graphite-400">{step.subtitle}</p>
        </div>

        {/* Options */}
        <div className="grid gap-4">
          {step.options.map((opt) => {
             const Icon = opt.icon
             const isSelected = answers[currentStep] === opt.id

             return (
               <Card 
                 key={opt.id} 
                 onClick={() => handleSelect(opt.id)}
                 className={`cursor-pointer transition-all duration-300 border-2 ${isSelected ? 'bg-aurora-500/10 border-aurora-500 shadow-[0_0_20px_rgba(139,92,246,0.15)]' : 'bg-charcoal-950 border-graphite-800 hover:border-graphite-700'}`}
               >
                 <CardContent className="p-5 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                     <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isSelected ? 'bg-aurora-500 text-white' : 'bg-graphite-900 border border-graphite-800 text-graphite-400'}`}>
                       <Icon className="w-6 h-6" />
                     </div>
                     <span className={`text-lg font-medium ${isSelected ? 'text-white' : 'text-graphite-300'}`}>{opt.label}</span>
                   </div>
                   <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected ? 'border-aurora-500 bg-aurora-500 text-white' : 'border-graphite-700 bg-transparent text-transparent'}`}>
                     <CheckCircle2 className="w-4 h-4" />
                   </div>
                 </CardContent>
               </Card>
             )
          })}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between mt-4">
           <Button variant="ghost" className="text-graphite-400 hover:text-white" onClick={handleNext}>
             Skip
           </Button>
           <Button 
             disabled={!answers[currentStep]}
             onClick={handleNext}
             className="bg-aurora-500 hover:bg-aurora-600 text-white px-8 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.3)] disabled:opacity-50 disabled:shadow-none transition-all"
           >
             {currentStep === STEPS.length - 1 ? "Complete Setup" : "Continue"} <ArrowRight className="w-4 h-4 ml-2" />
           </Button>
        </div>

      </div>

    </div>
  )
}
