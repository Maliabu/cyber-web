import Image from "next/image"
import Logo from '@/app/images/logo1.png'
import LoginAdmin from "./loginAdmin"

export default async function Login(){
    return(
    <div className="">
            <div className="grid justify-center mt-16 bg-muted p-6">
                <div className="grid justify-items-center">
                    <Image
                    alt="logo"
                    src={Logo}
                    width={100}
                    height={100}
                    />
                    <div className="p-4 text-3xl tracking-tight font-bold">Admin Login Panel</div>
                </div>
                <LoginAdmin/>
            </div>
            <footer className="fixed bottom-0 p-8 border-t w-full flex flex-row justify-between">
            <div className="row-start-4">
          <p>&copy;copyright.cybersecurity@{new Date().getFullYear()}</p>
          </div>
          <div className="row-start-4">
          <p>Privacy Policy | T&Cs</p>
        </div>
            </footer>
    </div>
    )
}