import Footer from "../routes/footer"
import Menu from "../routes/menu"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink
  } from "@/components/ui/navigation-menu"
import { ChevronDown, ChevronRight, ThumbsDown, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  CardContent,
  Card,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import Image from "next/image";

export default function Blog(){
    return(
        <div className="grid w-full">
        <Menu/>
        <div className="sm:px-16 p-6">
        <div className="sm:float-right sm:-mt-12 sm:-mx-6">
      <Card className="w-[300px] border-none">
      <CardHeader>
        <h3>Recommended Articles</h3>
      </CardHeader>
      <CardContent className="scroll-y-blog">
        <a className="flex h-auto w-full select-none flex-col justify-end rounded-md p-2 no-underline outline-none focus:shadow-md"
            href="/">
            <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}/>
            <div className="mb-2 mt-4 text-lg font-medium">
                shadcn/ui
            </div>
            <p className="text-sm leading-tight text-card-foreground">
                Beautifully designed components built with Radix UI and Tailwind CSS.
            </p>
        </a>
        <a className="flex h-auto mt-6 w-full select-none flex-col justify-end rounded-md p-2 no-underline outline-none focus:shadow-md"
            href="/">
            <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}/>
            <div className="mb-2 mt-4 text-lg font-medium">
                shadcn/ui
            </div>
            <p className="text-sm leading-tight text-card-foreground">
                Beautifully designed components built with Radix UI and Tailwind CSS.
            </p>
        </a>
        <a className="flex h-auto mt-6 w-full select-none flex-col justify-end rounded-md p-2 no-underline outline-none focus:shadow-md"
            href="/">
            <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}/>
            <div className="mb-2 mt-4 text-lg font-medium">
                shadcn/ui
            </div>
            <p className="text-sm leading-tight text-card-foreground">
                Beautifully designed components built with Radix UI and Tailwind CSS.
            </p>
        </a>
      </CardContent>
    </Card>
    <Card className="p-4 border-none mt-4">
      <h5>Comments</h5>
    </Card>
    </div>
      <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
      <Link href="/" legacyBehavior passHref className="page-link">
            <NavigationMenuLink>
              Home
            </NavigationMenuLink>
          </Link>
                <div className="flex flex-row">
                <ChevronRight width={15} height={15} className="pt-1"/> Blog</div>
    </NavigationMenuItem>
    </NavigationMenuList></NavigationMenu>
      <div className="sm:p-16 p-6 border rounded-xl mt-4 sm:w-3/4"><Image
                aria-hidden
                src="/next.svg"
                alt="File icon"
                width={500}
                height={500}/>
      <h1 className="display-1">The role of cyber security in the moder day</h1>
      <span className="mt-6 float-right mx-12"> WED 3 DEC, 2024 14:00:00 EAT</span>
      <p className="py-6">By WarrenMu</p>
      <h6 className="text-wrap lh-1 mt-16">Cyber security's core function is to protect the devices we all use (smartphones, <br/>laptops, tablets and computers), and the services we access - <br/>both online and at work - from theft or damage.</h6>
      <h6 className="text-wrap lh-1 mt-6">Cyber security's core function is to protect the devices we all use (smartphones, <br/>laptops, tablets and computers), and the services we access - <br/>both online and at work - from theft or damage.</h6>
      <h6 className="text-wrap lh-1 mt-6">Cyber security's core function is to protect the devices we all use (smartphones, <br/>laptops, tablets and computers), and the services we access - <br/>both online and at work - from theft or damage.</h6>
      <div className="flex flex-row mt-16">
      <Button variant="outline" className="">0 | <ThumbsUp width={14} height={14}/></Button><Button variant="outline" className="mx-2"><ThumbsDown width={14} height={14}/> | 0</Button>
      </div>
        <form>
          <div className="grid w-1/2 mt-4 items-center gap-4">
            <div className="flex flex-col-4 space-y-1.5">
              <Input id="comment" placeholder="comment" />
            </div>
          </div>
        </form>
      </div>
        </div>
        <Footer/>
        </div>
    )
}