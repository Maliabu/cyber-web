import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import Logo from '@/app/images/logo1.png'
import Logo2 from '@/app/images/logo2.png'
import Logged from "../auth/loggedIn"
import { ModeToggle } from "@/app/theme"
import LogoutAdmin from "../auth/logoutAdmin"
import ThemeLogo from "@/app/themeLogo"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#dashboard",
    icon: Home,
  }
]

export function AppSidebar(_props: any) {
    console.log(_props)
  return (
    <Sidebar className="">
      <SidebarContent className="">
        <SidebarGroup>
          <SidebarGroupLabel><div className="self-center">
            <ThemeLogo/>
        </div></SidebarGroupLabel>
          <SidebarGroupContent>
                <div className="bg-muted p-2 mt-8 rounded-lg">
                <Logged/>
                </div>
                <div className="flex flex-row mt-2 justify-between items-center bg-muted p-2 rounded-md">
                <ModeToggle/> Switch Mode</div>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="mt-6">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
        <SidebarFooter>
        <LogoutAdmin/>
        <footer className="py-4 mt-4">
          <div className="">
          <p className="desc">&copy;copyright.cybersecurity<br/>@{new Date().getFullYear()}</p>
          </div>
          <div className="my-4">
          <p className="desc">Privacy Policy | T&Cs</p>
        </div></footer>
        </SidebarFooter>
    </Sidebar>
  )
}
