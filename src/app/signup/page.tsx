"use client"
import { useState } from "react"
import Link from "next/link"
import { useSignUp } from "@clerk/nextjs/legacy"
import { useRouter } from "next/navigation"
import { Sparkles, Loader2, ArrowRight } from "lucide-react"

export default function SignupPage() {
  const { isLoaded, signUp, setActive } = useSignUp()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [code, setCode] = useState("")
  const [pendingVerification, setPendingVerification] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isLoaded) return
    
    setIsLoading(true)
    setError("")
    
    try {
      const firstName = name.split(" ")[0] || ""
      const lastName = name.split(" ").slice(1).join(" ") || ""

      await signUp.create({
        emailAddress: email,
        password,
        firstName,
        lastName,
      })

      // Send the verification email
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" })
      setPendingVerification(true)
    } catch (err: any) {
      console.error(err)
      setError(err.errors?.[0]?.longMessage || "Failed to create account. Please check your information.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isLoaded) return

    setIsLoading(true)
    setError("")

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      })
      
      if (completeSignUp.status !== "complete") {
        console.error(JSON.stringify(completeSignUp, null, 2))
        setError("Invalid verification code. Please try again.")
      }
      
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId })
        router.push("/onboarding")
      }
    } catch (err: any) {
      console.error(err)
      setError(err.errors?.[0]?.longMessage || "Verification failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full flex overflow-hidden">
      {/* Left side: Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 sm:p-12 relative z-10 bg-charcoal-950">
        <div className="w-full max-w-sm flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
            <div className="w-8 h-8 rounded-lg bg-aurora-500 flex items-center justify-center shadow-lg shadow-aurora-500/20 group-hover:scale-105 transition-transform">
               <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-aurora-50 transition-colors">Aurora</span>
          </Link>

          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
              {pendingVerification ? "Check your email" : "Create an account"}
            </h1>
            <p className="text-graphite-400">
              {pendingVerification 
                ? "We sent a verification code to " + email 
                : "Join thousands of professionals mastering AI."}
            </p>
          </div>

          {!pendingVerification ? (
            <form onSubmit={handleSignUp} className="flex flex-col gap-4 mt-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-graphite-300">Full Name</label>
                <input 
                  id="name" 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  required
                  className="w-full h-12 px-4 rounded-xl bg-graphite-900 border border-graphite-800 text-white placeholder-graphite-600 focus:outline-none focus:border-aurora-500 focus:ring-1 focus:ring-aurora-500 transition-all"
                />
              </div>
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
                <label htmlFor="password" className="text-sm font-medium text-graphite-300">Password</label>
                <input 
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  minLength={8}
                  className="w-full h-12 px-4 rounded-xl bg-graphite-900 border border-graphite-800 text-white placeholder-graphite-600 focus:outline-none focus:border-aurora-500 focus:ring-1 focus:ring-aurora-500 transition-all"
                />
                <p className="text-xs text-graphite-500 mt-1">Must be at least 8 characters long.</p>
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
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Create Account"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerify} className="flex flex-col gap-4 mt-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="code" className="text-sm font-medium text-graphite-300">Verification Code</label>
                <input 
                  id="code" 
                  type="text" 
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter 6-digit code"
                  required
                  className="w-full h-12 px-4 rounded-xl bg-graphite-900 border border-graphite-800 text-white placeholder-graphite-600 focus:outline-none focus:border-aurora-500 focus:ring-1 focus:ring-aurora-500 transition-all text-center tracking-widest text-lg"
                />
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isLoading || !isLoaded}
                className="w-full h-12 bg-aurora-500 hover:bg-aurora-600 text-white font-medium rounded-xl mt-4 transition-colors shadow-[0_0_20px_rgba(139,92,246,0.2)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Complete Signup <ArrowRight className="w-4 h-4" /></>}
              </button>
            </form>
          )}

          {!pendingVerification && (
            <p className="text-xs text-graphite-500 text-center mt-4">
              By signing up, you agree to our <Link href="#" className="underline hover:text-graphite-400">Terms of Service</Link> and <Link href="#" className="underline hover:text-graphite-400">Privacy Policy</Link>.
            </p>
          )}

          <p className="text-center text-sm text-graphite-400 mt-2">
            Already have an account? <Link href="/login" className="text-aurora-400 hover:text-aurora-300 font-medium">Log in</Link>
          </p>
        </div>
      </div>

       {/* Right side: Abstract Art / Marketing */}
       <div className="hidden lg:flex w-1/2 bg-charcoal-900 relative items-center justify-center overflow-hidden border-l border-graphite-800">
        <div className="absolute inset-0 bg-aurora-900/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-linear-to-tr from-aurora-600/30 to-indigo-600/10 blur-[130px] rounded-full mix-blend-screen" />
        
        <div className="relative z-10 p-16 max-w-xl text-center flex flex-col items-center">
           {/* Abstract floating UI representations */}
           <div className="flex gap-4 mb-12">
              <div className="w-24 h-32 rounded-xl bg-charcoal-950 border border-graphite-800 shadow-2xl -rotate-6 transform translate-y-4" />
              <div className="w-32 h-40 rounded-xl bg-charcoal-950 border border-aurora-500/30 shadow-2xl z-20" />
              <div className="w-24 h-32 rounded-xl bg-charcoal-950 border border-graphite-800 shadow-2xl rotate-6 transform translate-y-4" />
           </div>

          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Stop guessing. Start building.</h2>
          <p className="text-xl text-graphite-300 leading-relaxed">
            Get instant access to a curated library of guides, prompts, and workflows that actually work.
          </p>
        </div>
      </div>
    </div>
  )
}
