"use client"
import { groupBy, tokenise } from "@/app/services/services";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { useEffect, useState } from "react";

export default function Logged(){
    const [token, setToken] = useState("")
    const [name, setName] = useState("")
    const [profile, setProfile] = useState("")

    useEffect(() => {
        setToken(tokenise()[0][0].toUpperCase())
        setName(tokenise()[0].split(" ")[0])
        setProfile(tokenise()[3])
    }, [])
    return(
          <div className="flex flex-row justify-between">
            <Avatar>
                <AvatarImage src={profile} className="rounded-full w-10 h-10"/>
                <AvatarFallback className="rounded-full bg-primary text-white"><User/></AvatarFallback>
            </Avatar>
            {/* <div className="h-10 w-10 bg-primary text-white grid font-bold rounded-full justify-center items-center">{token.toUpperCase()}</div> */}
            <div className=" leading-4 w-2/3">
            Hi, {name}. Welcome to the dashboard!</div>
        </div>
    )
}