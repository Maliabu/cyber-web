import * as React from "react"
import Image from "next/image";
import Link from "next/link"
import Logo from '../images/logo1.png'
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
import { MenuIcon, Search } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator"
 
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Cybersecurity Training",
    href: "/offers",
    description:
      "",
  },
  {
    title: "Penetration Testing Services",
    href: "/offers",
    description:
      "",
  },
  {
    title: "Consultancy and Managed Security Services",
    href: "/offers",
    description:
      "",
  },
  {
    title: "Revenue-Generating Activities",
    href: "/offers",
    description:
      "",
  },
]

export default async function Menu() {

  const userId = await auth()

  function display(){
    if(userId.userId !== null){
      return <div className="sm:size-10 size-10"><UserButton appearance={{elements: { userButtonAvatarBox: "size-full"}}} /></div>
    } else {
      return <div>
        <Link href="/sign-in"><Button className="text-white">Sign In</Button></Link>
        <Link href="/sign-up"><Button className="bg-light ml-2">Sign Up</Button></Link>
      </div>
    }
  }

  return (
    <div className="sm:p-0">
      <main className="hidden sm:flex sm:flex-row justify-between px-8 items-center text-dark">
        <Link href="/">
          <Image
            className="w-[120px]"
            src={Logo}
            alt="logo"
          /></Link>
      <NavigationMenu className="rounded-sm">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink className="nav-a">
        <div>Blog</div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger><div className="font-thin">Our Services</div> </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-2 p-6 md:w-[250px] md:grid-cols-1 lg:w-[200px] ">
              <p className="desc py-4 border-b">Services</p>
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="text-dark p-1"
                >
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/events" className="nav-a mx-6">
          <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Events</div>
        <Separator orientation="vertical" />
        <div>News</div>
      </div>
          </Link>
          </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className="nav-a">
            <div className="flex h-5 items-center space-x-4 text-sm ml-4">
        <div>Community</div>
        <Separator orientation="vertical" />
        <div>Contact</div>
      </div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    {display()}
      </main>
    <div className="sm:hidden flex flex-row px-6 py-4 justify-between">
      <Link href="/">
          <Image
            className="w-[120px]"
            src={Logo}
            alt="logo"
          /></Link>
          <div className="flex flex-row">
            <Sheet>
      <SheetTrigger asChild>
      <MenuIcon className="size-8 mt-1 mr-2"/>
      </SheetTrigger>
      <SheetContent className="h-[300px] rounded-lg">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-1 gap-4 py-4">
          <Link href="/" className="text-dark hover:text-blue">
          <p>Home</p></Link>
          <Link href="/blog" className="text-dark my-2 hover:text-blue">
          <p>Blog</p></Link>
          <Link href="/offers" className="text-dark hover:text-blue">
          <p>Services</p></Link>
          <Link href="/contact" className="text-dark my-2 hover:text-blue">
          <p>Community</p></Link>
          <Link href="/events" className="text-dark hover:text-blue">
          <p>News & Events</p></Link>
          {display()}
        </div>
        <SheetFooter>
          <SheetClose asChild>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet></div></div>
      <div>
        <div className=" sm:py-2 flex flex-col bg-muted sm:flex-row sm:gap-4 p-6 sm:justify-center">
                <div className="relative sm:mt-0">
                  <div className="absolute right-2 top-2.5 h-3 w-6 text-card-foreground">
                  <Search className="h-3 w-3 mt-1 size-8" />
                  </div>
                  <Input id="search" type="search" placeholder="searching for...?" className="w-full background-none rounded-lg" />
                </div>
          </div>
        </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href=""
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-card-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
