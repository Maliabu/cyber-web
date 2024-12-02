import * as React from "react"
import Image from "next/image";
import Link from "next/link"
 
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
import { Calendar, ChevronDown, NotebookPen, Search } from "lucide-react";
 
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

export default function Menu() {
  return (
    <div className="grid font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-row gap-20 p-6 items-center">
      <Image
            aria-hidden
            src="/next.svg"
            alt="File icon"
            width={100}
            height={100}
          />
      <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
      <NavigationMenuTrigger className="border">
        Popular classes
      </NavigationMenuTrigger>
      <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[300px] lg:w-[300px]">
              <ListItem href="/offers" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/offers" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/offers" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
      </NavigationMenuItem>
      </NavigationMenuList></NavigationMenu>
      <NavigationMenu className=" rounded-sm">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Get Started with our Blog</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/blog"
                  >
                    <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
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
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
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
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Learn more about us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <Search height={16} width={16}>search</Search>
    <Button><ChevronDown width={16} height={16}/> Register</Button>
      </main>
      <div className="px-8 py-4 flex flex-row justify-between border">
                <h5>Shedule an <br/> Interview with our mentors</h5>
                <p className="p-2 rounded-md bg-secondary bg-gradient-to-b">Dont Know why you should take these classes? Let Us help you!</p>
                <Button className="float-right"><Calendar width={16} height={16}/> Schedule an Interview Asap</Button>
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
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
