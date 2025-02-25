import { ClerkProvider, SignIn as Signin } from "@clerk/nextjs"
import Image from "next/image"
import Logo from '@/app/images/logo1.png'

export default function SignIn(){
    return(
        <ClerkProvider>
            <div className="flex flex-col justify-center items-center min-h-screen">
                <Image
                alt="logo"
                src={Logo}
                width={100}
                className="mb-2"
                unoptimized
                height={100}
                />
                <Signin />
            </div>
        </ClerkProvider>
    )
}