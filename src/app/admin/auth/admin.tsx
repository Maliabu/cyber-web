"use client"
import { tokenise } from "@/app/services/services";
import { getMyDay, getMyMonth } from "@/app/services/success";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, UserCircle } from "lucide-react";

export default function Admin(messages:{id: number, email: string, message: string | null, updatedAt: Date}[]){
    let allMessages = Object.values(messages)
    return(
        <div className="flex flex-row p-16 transparent-dark rounded-lg">
        <div className="p-8 justify-center">
            <UserCircle className="h-[100px] w-[100px] text-muted my-6"/>
        </div>
        <div className="p-8 w-1/3">
        <div className="text-2xl tracking-tight font-bold leading-6 mb-8">Admin User</div>
          <p className="desc">Name</p>
          <p>{tokenise()[0]}</p>
          <p className="desc mt-6">Username</p>
          <p>{tokenise()[1]}</p>
          <p className="desc mt-6">email</p>
          <p>{tokenise()[2]}</p>
        </div>
        <div className="transparent-dark p-8 ml-4 rounded-lg">
            <div className="flex flex-row justify-between">
                <div className="flex text-2xl tracking-tight font-bold"><Bell className="mr-5 mt-1"/> Your Messages</div>
                <div className="h-10 w-10 grid justify-center items-center rounded-full bg-darker">{allMessages.length}</div>
            </div>
            <div className="p-4 bg-darker mt-6 rounded-lg w-3/4 admin">
            {
                allMessages.map((message:{id: number, email: string, message: string | null, updatedAt: Date}) => (
                    <div className="py-8 border-b flex flex-row" key={message.id}>
                        {/* <div className="h-10 w-10 transparent-dark grid rounded-full justify-center items-center mr-5">{message.email[0].toUpperCase()}</div> */}
                        <Avatar>
                          <AvatarImage src="" className="rounded-full w-30 h-30"/>
                          <AvatarFallback className="rounded-full dark text-white">{message.email[0].toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div className="mx-5">
                        <p className="desc">{message.email}</p>
                        <div className="py-2 leading-4">{message.message}</div>
                        <p className="desc float-right mt-2">{getMyDay(message.updatedAt.getDay())}, {getMyMonth(message.updatedAt.getMonth())} {message.updatedAt.getDate()}, {message.updatedAt.getFullYear()
                        }</p></div>
                    </div>
                ))
            }
            </div>
        </div>
        </div>
    )
}