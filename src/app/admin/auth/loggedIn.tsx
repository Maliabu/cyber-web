"use client"
import { tokenise } from "@/app/services/services";
import { useEffect, useState } from "react";

export default function Logged(){
    const [token, setToken] = useState("")
    const [name, setName] = useState("")
    useEffect(() => {
        setToken(tokenise()[0][0])
        setName(tokenise()[0].split(" ")[0])
    }, [])
    return(
          <div className="flex flex-row justify-between items-center">
            <div className="h-10 w-10 border grid rounded-full justify-center items-center">{token}</div>
            Hi, {name}
        </div>
    )
}