"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import DeletePage from "./deletePage"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UserType } from "../dashboard/types"

  export function UserCard({
    id, 
    name,
    username,
    profilePicture
  }: UserType){
    // const path = "/profilePictures/"+profilePicture
    return (
      <div className="flex flex-row justify-between">
      <Card className="w-3/4 flex flex-row justify-between border-none bg-muted items-start p-3 mt-1 ">
        <div className="w-10 h-10 mt-2">
        <Avatar>
          {/* <AvatarImage src={path} className="rounded-full w-10 h-10"/> */}
          <AvatarFallback className="rounded-full bg-primary text-white">{name[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        </div>
        <div className="items-start text-sm">
          <p>Name</p>
        <p>{name}</p></div>
        <div className="text-sm">
        <p>username</p>
        <p>{username}</p></div>
        <div className="text-sm items-start">
        <p>id</p>
        <p>{id}</p></div>
      </Card>
      <DeletePage id={id} submitId={username}/>
      </div>
    )
  }