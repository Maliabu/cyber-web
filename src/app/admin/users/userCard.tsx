"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import DeletePage from "./deletePage"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// define custom props for userCard component

// define custom props for userCard component
type UsercardProps = {
    id: number
    isActive: boolean
    name: string
    username: string
    profilePicture: string | null
  }
  // one time usercard component with custom prop type
  export function UserCard({
    id, 
    name,
    username,
    profilePicture
  }: UsercardProps){
    const path = "/profilePictures/"+profilePicture
    return (
      <div className="flex flex-row justify-between">
      <Card className="w-3/4 flex flex-row justify-between border-none bg-muted items-start p-3 mt-1 ">
        <div className="w-10 h-10 mt-2">
        <Avatar>
          <AvatarImage src={path} className="rounded-full w-10 h-10"/>
          <AvatarFallback className="rounded-full bg-primary text-white">{name[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        </div>
        <div className="items-start">
          <p className="desc">Name</p>
        <p className="mt-2">{name}</p></div>
        <div>
        <p className="desc">username</p>
        <p className="mt-2">{username}</p></div>
        <div>
        <p className="desc">id</p>
        <p className="mt-2">{id}</p></div>
      </Card>
      <DeletePage id={id} submitId={username}/>
      </div>
    )
  }