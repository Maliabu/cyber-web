import Menu from "../routes/menu"
import Footer from "../routes/footer"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
import { BookHeart, ChevronRight } from "lucide-react";
import Link from "next/link"

export default function About(){
    return(
        <>
        <Menu/>
        <div className=" p-20 items-center">
      <div className="pb-16">
      <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
      <Link href="/" legacyBehavior passHref className="page-link">
            <NavigationMenuLink>
              Home
            </NavigationMenuLink>
          </Link>
            <NavigationMenuLink className=" page-link">
                <div className="flex flex-row">
                <ChevronRight width={15} height={15} className="pt-1"/> Community</div>
            </NavigationMenuLink>
    </NavigationMenuItem>
    </NavigationMenuList></NavigationMenu>
      <h1 className="display-1">Our Community</h1>
      <p className="py-6">The easy way!</p>
      <h6 className="text-wrap lh-1">Cyber security's core function is to protect the devices we all use (smartphones, <br/>laptops, tablets and computers), and the services we access - <br/>both online and at work - from theft or damage.</h6>
      <h6>It's also about preventing unauthorised access <br/>to the vast amounts of personal information <br/>we store on these devices, and online.</h6>
      </div>
      <Button><BookHeart width={16} height={16}/> Take a look at our courses</Button>
    </div>
        <Footer/>
        </>
    )
}