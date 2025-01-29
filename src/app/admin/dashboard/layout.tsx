"use client"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./app-sidebar"
import React, { useEffect } from "react"
import { useRouter, redirect } from "next/navigation";


export default function Layout({ children }: { children: React.ReactNode }) {
    const router = useRouter()

    useEffect(() => {

        const token = window.localStorage.getItem("token")
        console.log(token)        

        if(token == "") return router.push("/admin/auth")
    }, [])
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
