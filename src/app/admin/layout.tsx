"use client"

import { redirect, useRouter } from "next/navigation";
import { tokenise } from "../services/services";
import { useEffect, useState } from "react";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const router = useRouter()

    useEffect(() => {
        const token = window.localStorage.getItem("token")        

        if(!token) return router.push("/admin/auth")
    }, [])
    
    return (
      <>
        <main>
          {children}
        </main>
      </>
    );
  }