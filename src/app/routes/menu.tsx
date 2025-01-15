import * as React from "react"
import Image from "next/image";
import Link from "next/link"
import Logo from '../images/logo1.png'
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
import { CalendarArrowDownIcon, HandshakeIcon, HomeIcon, MenuIcon, PaperclipIcon, Search, Users2Icon } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator"
import { SearchBar } from "./search";
 
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
  const name = await currentUser()
  let user = name?.fullName || ""

  function display(){
    if(userId.userId !== null){
      return <div className="flex flex-row justify-between"><div className="sm:size-10 size-10"><UserButton appearance={{elements: { userButtonAvatarBox: "size-full"}}} /> </div><p className="sm:hidden"><p className="desc mb-1">you are signed in as: </p>{user}</p></div>
    } else {
      return <div className="flex flex-row">
        <Link href="/sign-in"><Button className="text-white">Sign In</Button></Link>
        <Link href="/sign-up"><Button className="bg-light ml-2">Sign Up</Button></Link>
      </div>
    }
  }

  return (
    <div className="sm:p-0">
      <main className="hidden sm:flex sm:flex-row justify-between px-8 sm:py-4 items-center text-dark">
        <Link href="/">
          <Image
            className="w-[120px]"
            src={Logo}
            alt="logo"
          /></Link>
      <NavigationMenu className="rounded-sm">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="nav-a">
        <div className="sm:mx-6 md:mx-6 lg:mx-12 text-md font-bold tracking-tight">Home</div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink className="nav-a">
        <div className="sm:mr-2 md:mr-2 lg:mr-6 text-md text-muted font-bold tracking-tight">Blog</div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="text-white">
          <NavigationMenuTrigger><div className=" text-md tracking-tight nav-a">Our Services</div> </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-2 p-6 md:w-[250px] md:grid-cols-1 lg:w-[200px] ">
              <p className="desc py-4 border-b">Services</p>
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="text-white hover:text-primary p-1"
                >
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/events" legacyBehavior passHref>
          <NavigationMenuLink className="nav-a">
          <div className="sm:mx-2 md:mx-2 lg:mx-6">
          <div className="flex h-5 items-center space-x-4 text-sm">
        <div className="text-md font-bold tracking-tight">Events</div>
        <Separator orientation="vertical" />
        <div className="text-md font-bold tracking-tight">News</div>
      </div></div>
      </NavigationMenuLink>
          </Link>
          </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className="nav-a">
            <div className="sm:mx-2 md:mx-2 lg:mx-6">
            <div className="flex h-5 items-center space-x-4 text-sm ml-4">
        <div className="text-md font-bold tracking-tight">Community</div>
        <Separator orientation="vertical" />
        <div className=" font-bold tracking-tight">Contact</div>
      </div></div>
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
      <SheetContent className=" rounded-lg">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-1 gap-4 py-4">
          <Link href="/" className="hover:text-muted text-white border-t">
          <div className="flex flex-row mt-5">
          <HomeIcon size="16"/> 
          <p className="mx-5">Home</p></div></Link>
          <Link href="/blog" className="my-3 hover:text-blue text-white">
          <div className="flex flex-row">
          <PaperclipIcon size="16"/> 
          <p className="mx-5">Blog<p className="desc mt-1">Best Reads from the best</p></p></div></Link>
          <Link href="/offers" className="hover:text-blue text-white">
          <div className="flex flex-row">
          <HandshakeIcon size="16"/> 
          <p className="mx-5">Services<p className="desc mt-1">Training, consultancy, pentesting & more...</p></p></div></Link>
          <Link href="/contact" className="my-3 hover:text-blue text-white">
          <div className="flex flex-row">
          <Users2Icon size="16"/> 
          <p className="mx-5"> Our Community<p className="desc mt-1">Contacts and socials</p></p></div></Link>
          <Link href="/events" className="hover:text-blue text-white border-b">
          <div className="flex flex-row mb-5">
          <CalendarArrowDownIcon size="16"/> 
          <p className="mx-5">News & Events<p className="desc mt-1">All our events and happenings</p></p></div></Link>
        </div>
        <SheetFooter>
          <SheetClose asChild>
          <div>
          {display()}<p className="border-t border-b mt-5 py-5">AllRightsReserved@BeeraSafe<p className="desc mt-1">Terms & Conditions Apply</p></p>
          <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 row-start-2"
          href="https://www.instagram.com/beera_safe256/profilecard/?igsh=cTB2b2FuNXM0NjRv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className=" py-1 px-2 text-white rounded-sm font-bold">in</div>
          Instagram
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 row-start-2"
          href="https://x.com/beera_safe?t=_tgINtbfE8Ju0II3GGEtgw&s=09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="py-2 px-3 font-bold text-white">x</div>
          twitter
        </Link>
          </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet></div></div>
      <div> 
        <div className=" flex flex-row bg-darker justify-center">
        <SearchBar/>
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
