"use client"

import { Button } from "@/components/ui/button"
import { LoaderIcon, Lock, LockOpenIcon } from "lucide-react"
import { redirect } from "next/navigation"

export default function LogoutAdmin(){
    function logout(){
        setTimeout(() => {
            let message = document.getElementById("submit1")
            if(message !== null){
                message.innerHTML = '<LoaderIcon animate/>'
            }
        })
        window.localStorage.setItem("token", '')
        redirect("/admin/auth")
    }
    return(
        <Button id="submit1" onClick={() => logout()} className="text-white"><LockOpenIcon/> Logout</Button>
    )
}