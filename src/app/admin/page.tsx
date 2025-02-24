import Image from "next/image"
import Logo from '@/app/images/logo2.png'
import LoginAdmin from "./auth/loginAdmin"

export default function Login(){
    return(
        <div className="">
    <div className=" sm:py-20 pt-16 backdrop">
            <div className="grid justify-center py-8">
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
        <footer className=" bottom-0 p-8 py-12 sm:flex sm:flex-row sm:justify-between">
            <div className="row-start-4">
                <p>&copy;copyright.beerasafe@{new Date().getFullYear()}</p>
            </div>
            <div className="row-start-4 sm:py-0 py-2">
                <p>Privacy Policy | T&Cs</p>
            </div>
        </footer>
    </div>
    </div>
    )
}