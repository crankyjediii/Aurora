export default function ProductPage({ params }: { params: { id: string } }) {
  // In a real app we'd fetch the product based on params.id. 
  // We'll hardcode a premium layout for the mock data here.

  return (
    <div className="flex flex-col items-center w-full min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-5xl">
         {/* Breadcrumb would go here */}
         <div className="mb-8 text-sm text-graphite-400">
            Library / Tool Guides / <span className="text-white">The Claude 3 Pro Guide</span>
         </div>

         <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Product Image / Preview */}
            <div className="w-full aspect-square rounded-2xl bg-charcoal-900 border border-graphite-800 shadow-2xl overflow-hidden relative group">
               <div className="absolute inset-0 bg-linear-to-tr from-aurora-900/20 to-transparent opacity-50" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-graphite-600 font-mono text-xs tracking-widest uppercase">Preview Unavailable</span>
               </div>
            </div>

            {/* Right: Product Details */}
            <div className="flex flex-col gap-6">
               <div className="inline-flex items-center px-3 py-1 rounded-full border border-aurora-500/30 bg-aurora-500/10 text-aurora-300 text-xs font-semibold w-fit tracking-wide uppercase">
                 Tool Guide
               </div>
               
               <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                 The Claude 3 Pro Guide
               </h1>
               
               <p className="text-xl text-graphite-300 leading-relaxed">
                 Everything you need to master Anthropic&apos;s flagship model for long-form writing and coding.
               </p>

               <div className="h-px bg-graphite-800/50 w-full my-4" />

               <div className="flex items-end gap-4">
                 <span className="text-4xl font-extrabold text-white">Included</span>
                 <span className="text-lg text-graphite-400 mb-1">in Solo plan</span>
               </div>

               <div className="flex flex-col gap-3 mt-4">
                 <button className="w-full h-14 bg-aurora-500 hover:bg-aurora-600 text-white font-medium rounded-xl text-lg transition-colors shadow-lg shadow-aurora-500/20">
                   Unlock with Solo
                 </button>
                 <button className="w-full h-14 bg-charcoal-900 hover:bg-graphite-800 border border-graphite-700 text-white font-medium rounded-xl text-lg transition-colors">
                   Buy for $29 one-time
                 </button>
               </div>

               <p className="text-sm text-graphite-500 text-center mt-2">
                 Includes lifetime updates and a 14-day money-back guarantee.
               </p>
            </div>
         </div>

         {/* Product Details Tabs (Fake) */}
         <div className="mt-24 pt-12 border-t border-graphite-800/50 flex flex-col gap-12">
           <div className="flex gap-8 border-b border-graphite-800">
             <div className="px-4 py-3 border-b-2 border-aurora-500 text-white font-medium">Overview</div>
             <div className="px-4 py-3 text-graphite-400 font-medium hover:text-graphite-300 cursor-pointer">What&apos;s Included</div>
             <div className="px-4 py-3 text-graphite-400 font-medium hover:text-graphite-300 cursor-pointer">Reviews</div>
           </div>
           
           <div className="max-w-3xl prose prose-invert prose-p:text-graphite-300 prose-headings:text-white">
             <h3>Master Context Windows</h3>
             <p>Learn exactly how to structure large document uploads so Claude doesn&apos;t hallucinate or miss key details in the middle of your text.</p>
             
             <h3>The Artifact System</h3>
             <p>Stop copy-pasting code and text. Discover how to trigger Claude&apos;s UI artifacts for side-by-side editing and iterative creation.</p>
             
             <h3>Advanced Coding Prompts</h3>
             <p>A library of 50+ tested prompts specifically designed for the Opus model to handle full-stack React and Next.js applications.</p>
           </div>
         </div>
      </div>
    </div>
  )
}
