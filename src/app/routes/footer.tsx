import * as React from "react"
import Image from "next/image";
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export default function Footer() {
  return (
      <footer className="grid justify-center">
        <div className="grid flex flex-row gap-20 px-12 justify-center">
        <div className="row-start-3">
          Could be Helpful: Links
          <NavigationMenu>
            <ul>
          <ListItem href="/docs" title="Blog">
                Cyber Security Best Practices
              </ListItem>
              <ListItem href="/docs/installation" title="Blog">
                News and Trending
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Blog">
                Event Recaps
              </ListItem> </ul>
            </NavigationMenu>
            <h6 className="pt-6">
            Try these here:</h6>
          <NavigationMenu>
            <ul>
          <ListItem href="/docs" title="Class">
                Cyber Security Training
              </ListItem>
              <ListItem href="/docs/installation" title="Service">
                Vulnerability Assessment
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Offer">
                Hacking Services
              </ListItem> </ul>
            </NavigationMenu>
        </div>
        <div className="row-start-3">
          Recommended
          <NavigationMenu>
            <ul>
          <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
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
        <div className=" justify-items-center p-16">
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
        <div className="p-8 grid flex flex-row border border-top">
          <div className="row-start-4">
          <p>&copy;copyright.cybersecurity@{new Date().getFullYear()}</p>
          </div>
          <div className="row-start-4 justify-end">
          <p>Privacy Policy | T&Cs</p>
          </div>
        </div>
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
