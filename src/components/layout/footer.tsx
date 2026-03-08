import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-graphite-800/50 bg-charcoal-950 py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-5 w-5 rounded-full bg-aurora-500" />
              <span className="text-lg font-bold tracking-tight text-graphite-50">Aurora</span>
            </Link>
            <p className="mb-4 text-sm text-graphite-400 max-w-xs">
              A smarter, calmer way to adopt AI. We help teams and individuals build practical workflows without the noise.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 text-sm font-semibold text-graphite-100">Product</h4>
            <ul className="space-y-3 text-sm text-graphite-400">
              <li><Link href="/library" className="hover:text-aurora-400 transition-colors">Library</Link></li>
              <li><Link href="/pricing" className="hover:text-aurora-400 transition-colors">Pricing</Link></li>
              <li><Link href="#solutions" className="hover:text-aurora-400 transition-colors">Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-sm font-semibold text-graphite-100">Learn</h4>
            <ul className="space-y-3 text-sm text-graphite-400">
              <li><Link href="#guides" className="hover:text-aurora-400 transition-colors">Tool Guides</Link></li>
              <li><Link href="#prompts" className="hover:text-aurora-400 transition-colors">Prompt Systems</Link></li>
              <li><Link href="#workflows" className="hover:text-aurora-400 transition-colors">Workflow Kits</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-graphite-100">Legal</h4>
            <ul className="space-y-3 text-sm text-graphite-400">
              <li><Link href="#privacy" className="hover:text-aurora-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#terms" className="hover:text-aurora-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-graphite-800/50 flex flex-col md:flex-row items-center justify-between text-xs text-graphite-500">
          <p>© {new Date().getFullYear()} Aurora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
