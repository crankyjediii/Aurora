import { Sidebar } from "@/components/layout/sidebar"
import { Topbar } from "@/components/layout/topbar"
import { EnsureUser } from "@/components/auth/ensure-user"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-graphite-950 w-full text-graphite-200 selection:bg-aurora-500/30 selection:text-white overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full md:pl-64 h-screen">
        <Topbar />
        <main className="flex-1 w-full p-4 md:p-8 overflow-y-auto overflow-x-hidden pb-32">
          <EnsureUser>
            {children}
          </EnsureUser>
        </main>
      </div>
    </div>
  )
}
