import { Loader2 } from "lucide-react"
import Image from "next/image"
import Logo from './images/logo1.png'

export default function Loading() {
  return (
    <div className="grid justify-items-center sm:p-60 p-40">
    <Image
    alt="logo"
    src={Logo}
    width={200}
    height={200}
    unoptimized
    />
      <Loader2 className="animate-spin" />
    </div>
  )
}
