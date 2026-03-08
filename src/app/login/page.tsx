"use client"
import { useState } from "react"
import Link from "next/link"
import { useSignIn } from "@clerk/nextjs/legacy"
import { useRouter } from "next/navigation"
import { Sparkles, Loader2 } from "lucide-react"

export default function LoginPage() {
  const { isLoaded, signIn, setActive } = useSignIn()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isLoaded) return
    
    setIsLoading(true)
    setError("")
    
    try {
      const result = await signIn.create({
        identifier: email,
        password,
      })

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId })
        router.push("/dashboard")
      } else {
        console.log("Requirement not met:", result)
        setError("Additional verification required. Please check your email.")
      }
    } catch (err: any) {
      console.error(err)
      setError(err.errors?.[0]?.longMessage || "Failed to sign in. Please check your credentials.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full flex overflow-hidden">
      {/* Left side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 relative z-10 bg-charcoal-950">
        <div className="w-full max-w-sm flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2 mb-8 group w-fit">
            <div className="w-8 h-8 rounded-lg bg-aurora-500 flex items-center justify-center shadow-lg shadow-aurora-500/20 group-hover:scale-105 transition-transform">
               <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-aurora-50 transition-colors">Aurora</span>
          </Link>

          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Welcome back</h1>
            <p className="text-graphite-400">Enter your credentials to access your dashboard.</p>
          </div>

          <form onSubmit={handleSignIn} className="flex flex-col gap-4 mt-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-graphite-300">Email Address</label>
              <input 
                id="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full h-12 px-4 rounded-xl bg-graphite-900 border border-graphite-800 text-white placeholder-graphite-600 focus:outline-none focus:border-aurora-500 focus:ring-1 focus:ring-aurora-500 transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-sm font-medium text-graphite-300">Password</label>
                <Link href="#" className="text-xs text-aurora-400 hover:text-aurora-300">Forgot password?</Link>
              </div>
              <input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full h-12 px-4 rounded-xl bg-graphite-900 border border-graphite-800 text-white placeholder-graphite-600 focus:outline-none focus:border-aurora-500 focus:ring-1 focus:ring-aurora-500 transition-all"
              />
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {error}
              </div>
            )}

            <div id="clerk-captcha" />

            <button 
              type="submit" 
              disabled={isLoading || !isLoaded}
              className="w-full h-12 bg-aurora-500 hover:bg-aurora-600 text-white font-medium rounded-xl mt-4 transition-colors shadow-[0_0_20px_rgba(139,92,246,0.2)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign In"}
            </button>
          </form>

          <p className="text-center text-sm text-graphite-400 mt-6">
            Don&apos;t have an account? <Link href="/signup" className="text-aurora-400 hover:text-aurora-300 font-medium">Sign up</Link>
          </p>
        </div>
      </div>

      {/* Right side: Abstract Art / Marketing */}
      <div className="hidden lg:flex w-1/2 bg-charcoal-900 relative items-center justify-center overflow-hidden border-l border-graphite-800">
        <div className="absolute inset-0 bg-aurora-900/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-linear-to-br from-aurora-600/20 to-transparent blur-[120px] rounded-full mix-blend-screen" />
        
        <div className="relative z-10 p-16 max-w-xl text-center">
          <div className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center p-6 shadow-2xl">
            <Sparkles className="w-full h-full text-aurora-300" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Your AI mastery starts here.</h2>
          <p className="text-xl text-graphite-300 leading-relaxed">
            Join thousands of professionals using Aurora to organize tools, discover real workflows, and build an AI habit that actually sticks.
          </p>
        </div>
      </div>
    </div>
  )
}
