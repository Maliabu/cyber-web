import Image from "next/image"
import Logo from '@/app/images/logo.png'
import LoginAdmin from "./loginAdmin"

export default async function Login(){
    return(
    <div className=" font-[family-name:var(--font-futura)]">
            <div className="grid justify-center mt-16">
                <div className="grid justify-items-center">
                    <Image
                    alt="logo"
                    src={Logo}
                    width={30}
                    height={35}
                    />
                    <h5 className="p-4">Admin Login Panel</h5>
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