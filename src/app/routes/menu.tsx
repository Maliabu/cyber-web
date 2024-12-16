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
import { Calendar, ChevronDown, NotebookPen, Search } from "lucide-react";
import Blog from '../images/link.jpeg'
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
 
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
      return <UserButton/>
    } else {
      return <a href="/sign-in"><Button className="text-white">Sign In</Button></a>
    }
  }

  return (
    <div className="grid font-[family-name:var(--font-futura)]">
      <main className="flex flex-row justify-between gap-4 px-8 py-4 items-center text-dark">
        <a href="/">
          <Image
            aria-hidden
            src={Logo}
            alt="logo"
            width={130}
            height={130}
          /></a>
      <NavigationMenu className=" rounded-sm">
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
      <div>
        <div className="px-8 py-4 flex flex-row justify-between border-b border-t">
          <div className="flex flex-row w-1/2">
          <h5 className="w-1/2">Schedule an interview with our mentors!</h5>
            <Button className="bg-primary text-white"><Calendar width={16} height={16}/> Schedule an Interview Asap</Button>
            </div>
                <div className="relative">
                  <div className="absolute left-4 top-2.5 h-2 w-2 text-card-foreground">
                  <Search className="h-3 w-3 mt-1" />
                  </div>
                  <Input id="search" type="search" placeholder="Search..." className="w-full rounded-lg pl-8" />
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
