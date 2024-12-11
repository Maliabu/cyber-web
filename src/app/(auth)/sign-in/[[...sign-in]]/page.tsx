import { ClerkProvider, SignIn as Signin } from "@clerk/nextjs"
import Image from "next/image"
import Logo from '@/app/images/logo.png'

export default function SignIn(){
    return(
        <ClerkProvider>
            <div className="flex flex-col justify-center items-center min-h-screen">
                <Image
                alt="logo"
                src={Logo}
                width={30}
                height={35}
                />
                <div>
                    <h5 className="p-4">Admin Login Panel</h5>
                </div>
                <Signin />
            </div>
        </ClerkProvider>
    )
}