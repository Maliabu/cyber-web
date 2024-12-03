import * as React from "react"
import Image from "next/image";
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
      <footer className="grid justify-center">
      <div className="px-8 py-6 gap-20 flex flex-row border justify-between">
                  <span className="w-fulh">
                  <h5>Subscribe</h5>
                      Subscribe and we shall keep you up to date with new classes and whats going on in the cyber space</span>
                  <Button className="float-right"><Heart width={16} height={16}/> Subscribe</Button>
              </div>
        <div className="grid flex flex-row gap-10 px-12 justify-center">
        <div className="row-start-3">
          Could be Helpful: Links
          <NavigationMenu>
            <ul>
          <ListItem href="/blog" title="Blog">
                Cyber Security Best Practices
              </ListItem>
              <ListItem href="/docs/blog" title="Blog">
                News and Trending
              </ListItem>
              <ListItem href="/blog" title="Blog">
                Event Recaps
              </ListItem> </ul>
            </NavigationMenu>
            <h6 className="pt-6">
            Try these here:</h6>
          <NavigationMenu>
            <ul>
          <ListItem href="/offers" title="Class">
                Cyber Security Training
              </ListItem>
              <ListItem href="/offers" title="Service">
                Vulnerability Assessment
              </ListItem>
              <ListItem href="/offers" title="Offer">
                Hacking Services
              </ListItem> </ul>
            </NavigationMenu>
        </div>
        <div className="row-start-3">
          Recommended
          <NavigationMenu>
            <ul>
          <ListItem href="/offers" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/offers" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/offers" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem> </ul>
            </NavigationMenu>
        </div>
        <div className="row-start-3">
          Articles
          <NavigationMenu>
          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
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
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
            </ul>
            </NavigationMenu>
            <NavigationMenu>
          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
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
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
            </ul>
            </NavigationMenu>
        </div>
        </div>
        <div className=" p-16">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 row-start-2"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/instagram.svg"
            alt="instagram icon"
            width={16}
            height={16}
          />
          Instagram
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 row-start-2"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/facebook.svg"
            alt="facebook icon"
            width={16}
            height={16}
          />
          facebook
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 row-start-2"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/x.svg"
            alt="twitter icon"
            width={16}
            height={16}
          />
          twitter
        </a></div>
        <div className="p-8 grid flex flex-row justify-between border border-top">
          <div className="row-start-4">
          <p>&copy;copyright.cybersecurity@{new Date().getFullYear()}</p>
          </div>
          <div className="row-start-4">
          <div className="flex d-flex">
          <p>News</p>
          <p className="mx-6">Events</p>
          <p>Blog</p>
          <p className="mx-6">Contact Us</p>
          <p>Privacy Policy | T&Cs</p>
          </div>
        </div></div>
      </footer>
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
