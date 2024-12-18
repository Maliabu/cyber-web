import { Loader2 } from "lucide-react"
import Image from "next/image"
import Logo from '@/app/images/logo1.png'

export default function Loading() {
  return (
    <div className="grid justify-items-center p-60">
    <Image
    alt="logo"
    src={Logo}
    width={200}
    height={200}
    />
      <Loader2 className="animate-spin" />
    </div>
  )
}
