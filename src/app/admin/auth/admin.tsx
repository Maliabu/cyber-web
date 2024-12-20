"use client"
import { tokenise } from "@/app/services/services";
import { UserCircle } from "lucide-react";

export default function Admin(){
    return(
        <div className="flex flex-row p-16">
        <div className="w-1/2 grid justify-items-center">
            <h5>Admin Account</h5>
            <div><UserCircle className="h-[100px] w-[100px] text-muted mt-6"/></div>
            </div>
            <div>
          <p className="desc">Name</p>
          <p>{tokenise()[0]}</p>
          <p className="desc mt-6">Username</p>
          <p>{tokenise()[1]}</p>
          <p className="desc mt-6">email</p>
          <p>{tokenise()[2]}</p>
        </div>
        </div>
    )
}