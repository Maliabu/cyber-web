import * as React from "react"
import Image from "next/image";
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Footer() {
  const userId = await auth()
  return (
      <footer className="justify-center dark bg-darker text-white">
      <div className="px-8 py-6 border-t sm:flex sm:flex-row sm:justify-between">
                  <span className="">
                      <p className="my-2">Subscribe and we shall keep you up to date with new classes and whats going on in the cyber space</p></span>
                      <div>
                      {userId.userId === null?
                      <div>
                      <form>
                      <div className="mb-2">
                      <Input id="email" placeholder="Email address" />
                      </div>
                      </form>
                <Button className="text-white"><Heart width={16} height={16}/> Subscribe</Button></div>
                : 
          <Button className="text-white"><Heart width={16} height={16}/> Subscribe</Button>}
                  </div>
              </div>
        <div className=" flex sm:flex-row flex-col gap-10 sm:px-24 p-12 justify-center">
        <div className="sm:row-start-3">
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
        <div className="sm:row-start-3">
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
        <div className="sm:row-start-3">
          Articles
          <NavigationMenu className="border-b">
          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
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
                    <p className="text-sm leading-tight text-card-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
            </ul>
            </NavigationMenu>
            <NavigationMenu className="border-b">
          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
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
                    <p className="text-sm leading-tight text-card-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </Link>
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
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 row-start-2"
          href="https://www.instagram.com/beera_safe256/profilecard/?igsh=cTB2b2FuNXM0NjRv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/instagram.svg"
            alt="instagram icon"
            className="text-white"
            width={16}
            height={16}
          />
          Instagram
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 row-start-2"
          href="https://x.com/beera_safe?t=_tgINtbfE8Ju0II3GGEtgw&s=09"
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
        </Link></div>
        <div className="sm:px-8 sm:py-4 p-6 flex sm:flex-row flex-col sm:justify-between border border-top">
          <div className="">
          <p>&copy;copyright.cybersecurity@{new Date().getFullYear()}</p>
          </div>
          <div className="">
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
        <Link
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
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
