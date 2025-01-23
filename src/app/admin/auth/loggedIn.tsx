"use client"
import { groupBy, tokenise } from "@/app/services/services";
import { useEffect, useState } from "react";

export default function Logged(){
    const [token, setToken] = useState("")
    const [name, setName] = useState("")
    useEffect(() => {
        setToken(tokenise()[0][0].toUpperCase())
        setName(tokenise()[0].split(" ")[0])
    }, [])

  const datas = [
    {
      "name": "miami",
      "datas": "12",
      "date": "today"
    },
    {
      "name": "florida",
      "datas": "80",
      "date": "today"
    },
    {
      "name": "miami",
      "datas": "40",
      "date": "yesterday"
    }
  ]

  const data = groupBy('name', datas)
    return(
          <div className="flex flex-row justify-between items-center">
            <div className="h-10 w-10 bg-primary grid rounded-full justify-center items-center">{token.toUpperCase()}</div>
            Hi, {name}
        </div>
    )
}