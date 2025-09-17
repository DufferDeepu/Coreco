import { SidebarProvider } from "@/components/ui/sidebar"
import { getAllPlaygroundForUser } from "@/features/dashboard/actions"
import { DashboardSidebar } from "@/features/dashboard/dashboard-sidebar"
import type React from "react"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const playgroundData = await getAllPlaygroundForUser();

  const technologyIconMap:Record<string , string>={
    REACT:"Zap",
    NEXTJS:"Lightbulb",
    EXPRESS:"Database",
    VUE:"Compass",
    HONO:"FlameIcon",
    ANGULAR:"Terminal"
  }

  const formattedPlaygroundData =
    playgroundData?.map((playground) => ({
      id:playground.id,
      name:playground.title,
      starred:playground.Starmark?.[0]?.isMarked || false,
      // Pass the icon name as a string
      icon:technologyIconMap[playground.template] || "Code2", // Default to "Code2" if template not found
    })) || []

  return (
     <SidebarProvider>
      <div className="flex min-h-screen w-full overflow-x-hidden">
        {/* Pass the formatted data with string icon names */}
        <DashboardSidebar initialPlaygroundData={[]}/>
        <main className="flex-1">{children}</main>
      </div>
     </SidebarProvider>
  )
}