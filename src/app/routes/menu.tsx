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
import { Calendar, ChevronDown, MenuIcon, NotebookPen, Search } from "lucide-react";
import Blog from '../images/link.jpeg'
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@radix-ui/react-select";
 
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/offers",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/offers",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/offers",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/offers",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/offers",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/offers",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default async function Menu() {

  const userId = await auth()

  function display(){
    if(userId.userId !== null){
      return <div className="sm:size-10 size-10"><UserButton appearance={{elements: { userButtonAvatarBox: "size-full"}}} /></div>
    } else {
      return <a href="/sign-in"><Button className="text-white">Sign In</Button></a>
    }
  }

  return (
    <div className=" font-[family-name:var(--font-futura)]">
      <main className="hidden sm:flex sm:flex-row justify-between px-8 py-2 items-center text-dark">
        <a href="/">
          <Image
            className="w-[130px]"
            src={Logo}
            alt="logo"
          /></a>
      <NavigationMenu className="rounded-sm">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="">Get Started with our Blog</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] z-40">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                    <Image
            aria-hidden
            src={Blog}
            alt="File icon"
            width={300}
            height={300}
          />
                </NavigationMenuLink>
              </li>
              <ListItem href="/blog" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/blog" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/blog" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="">What we offer</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/events" className="nav-a mx-6">News & Events</a>
          </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className="nav-a">
            <p>Contact Us</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    {display()}
      </main>
    <div className="sm:hidden flex flex-row p-4 justify-between">
      <a href="/">
          <Image
            className="w-[120px]"
            src={Logo}
            alt="logo"
          /></a>
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
          <a href="/" className="text-dark hover:text-blue">
          <p>Home</p></a>
          <a href="/blog" className="text-dark my-2 hover:text-blue">
          <p>Blog</p></a>
          <a href="/offers" className="text-dark hover:text-blue">
          <p>Services</p></a>
          <a href="/contact" className="text-dark my-2 hover:text-blue">
          <p>Community</p></a>
          <a href="/events" className="text-dark hover:text-blue">
          <p>News & Events</p></a>
        </div>
        <SheetFooter>
          <SheetClose asChild>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    {display()}</div></div>
      <div>
        <div className="sm:px-8 sm:py-4 flex flex-col sm:flex-row p-6 sm:justify-between border-b border-t">
          <div className="grid grid-cols-1 sm:grid-cols-3">
          <h5 className="text-2xl font-bold leading-5">Schedule an interview with our mentors!</h5>
            <Button size="lg" className="bg-primary text-white mt-4 sm:mt-0"><Calendar className="size-6"/> Schedule an Interview Asap</Button>
            </div>
                <div className="relative mt-6 sm:mt-0">
                  <div className="absolute left-3 right-2 top-2.5 h-3 w-3 text-card-foreground">
                  <Search className="h-3 w-3 mt-1 size-6" />
                  </div>
                  <Input id="search" type="search" placeholder="searching for...?" className="w-full rounded-lg pl-8" />
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
        <a
          ref={ref}
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
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
