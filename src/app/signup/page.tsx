import Link from "next/link"
import { Sparkles } from "lucide-react"

export default function SignupPage() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Create an account</h1>
            <p className="text-graphite-400">Join thousands of professionals mastering AI.</p>
          </div>

          <form className="flex flex-col gap-4 mt-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-graphite-300">Full Name</label>
              <input 
                id="name" 
                type="text" 
                placeholder="Jane Doe"
                className="w-full h-12 px-4 rounded-xl bg-graphite-900 border border-graphite-800 text-white placeholder-graphite-600 focus:outline-none focus:border-aurora-500 focus:ring-1 focus:ring-aurora-500 transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-graphite-300">Email Address</label>
              <input 
                id="email" 
                type="email" 
                placeholder="you@example.com"
                className="w-full h-12 px-4 rounded-xl bg-graphite-900 border border-graphite-800 text-white placeholder-graphite-600 focus:outline-none focus:border-aurora-500 focus:ring-1 focus:ring-aurora-500 transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm font-medium text-graphite-300">Password</label>
              <input 
                id="password" 
                type="password" 
                placeholder="••••••••"
                className="w-full h-12 px-4 rounded-xl bg-graphite-900 border border-graphite-800 text-white placeholder-graphite-600 focus:outline-none focus:border-aurora-500 focus:ring-1 focus:ring-aurora-500 transition-all"
              />
              <p className="text-xs text-graphite-500 mt-1">Must be at least 8 characters long.</p>
            </div>

            <button type="button" className="w-full h-12 bg-aurora-500 hover:bg-aurora-600 text-white font-medium rounded-xl mt-4 transition-colors shadow-[0_0_20px_rgba(139,92,246,0.2)]">
              Create Account
            </button>
          </form>

          <p className="text-xs text-graphite-500 text-center mt-4">
            By signing up, you agree to our <Link href="#" className="underline hover:text-graphite-400">Terms of Service</Link> and <Link href="#" className="underline hover:text-graphite-400">Privacy Policy</Link>.
          </p>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-graphite-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-charcoal-950 text-graphite-500">Or continue with</span>
            </div>
          </div>

          <button type="button" className="w-full h-12 bg-graphite-900 hover:bg-graphite-800 border border-graphite-800 hover:border-graphite-700 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-3">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
            Google
          </button>

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
