"use client"

import { MOCK_USER } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DashboardSettings() {
  return (
    <div className="flex flex-col gap-10 max-w-4xl mx-auto pb-16">
      
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-white tracking-tight">Settings</h1>
        <p className="text-graphite-400">Manage your profile and account preferences.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Settings Nav */}
        <div className="w-full md:w-64 shrink-0 flex flex-col gap-1">
          <Button variant="secondary" className="w-full justify-start bg-graphite-900 text-white hover:bg-graphite-800">
             Profile
          </Button>
          <Button variant="ghost" className="w-full justify-start text-graphite-400 hover:text-white hover:bg-graphite-900/50">
             Preferences
          </Button>
          <Button variant="ghost" className="w-full justify-start text-graphite-400 hover:text-white hover:bg-graphite-900/50">
             Notifications
          </Button>
        </div>

        {/* Settings Content */}
        <div className="flex-1 flex flex-col gap-8">
           
           <Card className="bg-charcoal-950 border-graphite-800 pb-2">
             <CardContent className="p-6 flex flex-col gap-6">
               <div>
                 <h2 className="text-xl font-bold text-white mb-1">Profile Information</h2>
                 <p className="text-sm text-graphite-400">Update your personal details and avatar.</p>
               </div>
               
               <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-linear-to-br from-aurora-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {MOCK_USER.initials}
                  </div>
                  <Button variant="outline" className="border-graphite-700 bg-transparent text-white hover:bg-graphite-900">
                    Change Avatar
                  </Button>
               </div>

               <div className="grid gap-4 mt-2">
                 <div className="flex flex-col gap-2">
                   <label className="text-sm font-medium text-graphite-300">Name</label>
                   <Input defaultValue={MOCK_USER.name} className="bg-graphite-900/80 border-graphite-700 text-white focus-visible:ring-aurora-500 rounded-lg max-w-md" />
                 </div>
                 <div className="flex flex-col gap-2">
                   <label className="text-sm font-medium text-graphite-300">Email Address</label>
                   <Input defaultValue={MOCK_USER.email} readOnly className="bg-graphite-900/50 border-graphite-800 text-graphite-400 focus-visible:ring-0 rounded-lg max-w-md cursor-not-allowed" />
                   <p className="text-xs text-graphite-500">Contact support to change your email address.</p>
                 </div>
               </div>

               <div className="pt-4 mt-2 border-t border-graphite-800">
                 <Button className="bg-aurora-500 hover:bg-aurora-600 text-white">Save Changes</Button>
               </div>
             </CardContent>
           </Card>

           <Card className="bg-charcoal-950 border-graphite-800">
             <CardContent className="p-6 flex flex-col gap-6">
               <div>
                 <h2 className="text-xl font-bold text-white mb-1">Theme Preferences</h2>
               </div>
               <div className="flex items-center justify-between">
                 <div>
                   <div className="text-sm font-medium text-white">Color Theme</div>
                   <div className="text-xs text-graphite-400 mt-1">Aurora is currently a dark-first experience.</div>
                 </div>
                 <Badge variant="outline" className="border-graphite-700 bg-graphite-900 text-graphite-400 pointer-events-none">Dark System</Badge>
               </div>
             </CardContent>
           </Card>

        </div>
      </div>

    </div>
  )
}
