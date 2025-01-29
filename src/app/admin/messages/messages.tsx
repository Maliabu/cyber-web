import { getMyDay, getMyMonth } from "@/app/services/success";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";

export default function Messages(messages: {id: number, email: string, message: string | null, updatedAt: Date}[]){
    let allmessages = Object.values(messages)
    return (
    <div className="border p-8 rounded-lg">
        <div className="flex flex-row justify-between">
            <div className="flex text-2xl tracking-tight font-bold"><Bell className="mr-5 mt-1"/> Your Messages</div>
            <div className="h-10 w-10 grid justify-center items-center rounded-full bg-primary text-white">{allmessages.length}</div>
        </div>
        <div className="p-4  mt-6 rounded-lg admin">
        {
            allmessages.map((message:{id: number, email: string, message: string | null, updatedAt: Date}) => (
                <div className="py-8 border-b flex flex-row" key={message.id}>
                    {/* <div className="h-10 w-10 border grid rounded-full justify-center items-center mr-5">{message.email[0].toUpperCase()}</div> */}
                    <Avatar>
                      <AvatarImage src="" className="rounded-full w-30 h-30"/>
                      <AvatarFallback className="rounded-full bg-primary text-white">{message.email[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="mx-10">
                    <p className="desc">{message.email}</p>
                    <div className="py-2 leading-4">{message.message}</div>
                    <p className="desc float-right mt-2">{getMyDay(message.updatedAt.getDay())}, {getMyMonth(message.updatedAt.getMonth())} {message.updatedAt.getDate()}, {message.updatedAt.getFullYear()
                    }</p></div>
                </div>
            ))
        }
        </div>
    </div>)
}