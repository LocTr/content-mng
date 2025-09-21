import { AccountDataTable } from "@/components/common/accountTable"
import { ComposedSidebar } from "@/components/common/sidebar"
import {
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Sidebar } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <SidebarProvider>
        <ComposedSidebar />
        <main>
          <AccountDataTable />
        </main>
      </SidebarProvider>
    </>
  )
}
