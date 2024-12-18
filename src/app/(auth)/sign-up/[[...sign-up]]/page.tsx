import { ClerkProvider, SignUp as Signup } from "@clerk/nextjs"
import Image from "next/image"
import React from "react"
import Logo from '@/app/images/logo1.png'

export default function SignIn(){
    return(
    <ClerkProvider>
        <div className="flex flex-col justify-center items-center min-h-screen">
            <Image
            alt="logo"
            src={Logo}
            width={150}
            height={150}
            className="mb-2"
            />
            <Signup />
        </div>
    </ClerkProvider>
    )
}