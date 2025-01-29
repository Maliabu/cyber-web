import Image from "next/image"
import Logo from "./images/logo1.png"
import Logo2 from "./images/logo2.png"


export default async function ThemeLogo() {

  return (
    <>
   <div>
        <Image
        src={Logo}
        width={100}
        height={100}
        alt="Icon"
        className="block dark:hidden"
        />
        <Image
        src={Logo2}
        width={100}
        height={100}
        alt="Icon"
        className="hidden dark:block"
        /> 
   </div>
   </>
)
}