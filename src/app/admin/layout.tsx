"use client"

import { useRouter, redirect } from "next/navigation";
import { useEffect } from "react";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const router = useRouter()

    useEffect(() => {

        const token = window.localStorage.getItem("token")
        console.log(token)        

        if(token == "") return router.push("/admin/auth")
    }, [])

    return (
      <>
        <main>
          {children}
        </main>
      </>
    );
  }