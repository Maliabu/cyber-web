"use client"

import { useRouter, redirect } from "next/navigation";
import { useEffect } from "react";
import { ThemeProvider } from "../themeProvider";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const router = useRouter()

    useEffect(() => {

        const token = window.localStorage.getItem("token")

        if(token == "") return router.push("/admin/auth")
    }, [])

    return (
      <>
        <main
            suppressHydrationWarning={true}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
          </ThemeProvider>
        </main>
      </>
    );
  }