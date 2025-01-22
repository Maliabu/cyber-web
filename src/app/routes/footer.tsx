import * as React from "react"
import Image from "next/image";
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { MailIcon } from "lucide-react";
import { auth, currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { db } from "@/drizzle/db";
import FooterSubscribe from "../admin/subscription/subscriptionFooter";
import AutoFooterSubscribe from "../admin/subscription/autoSubscribe";

export default async function Footer() {
  const userId = await auth()
  const user = await currentUser()
  let email = ''
  email = user?.primaryEmailAddress?.emailAddress || ''
  const articles = (await db.query.articlesTable.findMany()).slice(1, 3)
  return (
      <footer className="justify-center text-white bg-darker dark">
      <div className="px-8 py-6 sm:flex bg-muted sm:flex-row sm:justify-between">
        <div className="text-3xl tracking-tight font-bold">Subscribe</div>
                  <span className="">
                      <p className="my-2">Subscribe and we shall keep you up to date with new classes and whats going on in the cyber space</p></span>
                      <div>
                      {userId.userId === null?
                      <div>
                        <FooterSubscribe/>
                      </div>
                : 
          <AutoFooterSubscribe email={email}/>}
                  </div>
              </div>
        <div className=" flex sm:flex-row flex-col gap-10 sm:px-24 p-12 justify-center">
        <div className="sm:row-start-3">
          Could be Helpful: Links
          <NavigationMenu>
            <ul className="text-white">
          <ListItem href="/blog" title="Blog">
                Cyber Security Best Practices
              </ListItem>
              <ListItem href="/events" title="News | Events">
                News and Trending
              </ListItem>
              <ListItem href="/events" title="News | Events">
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
              {
                articles.map(article => (
                  <ListItem href="/blog" title="Introduction" key={article.id}>
                    {article.title}
                  </ListItem> 
                ))
              }
              </ul>
            </NavigationMenu>
        </div>
        <div className="sm:row-start-3">
          Articles
          {
            articles.map(article => (
              <NavigationMenu key={article.id}>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
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
                          {article.title}
                        </div>
                        <p className="text-sm leading-tight text-card-foreground">
                          {article.title}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/blog" title="Introduction">
                    {article.content}
                  </ListItem>
                </ul>
                </NavigationMenu>
            ))
          }
        </div>
        </div>
        <div className=" p-16">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 row-start-2"
          href="https://www.instagram.com/beera_safe256/profilecard/?igsh=cTB2b2FuNXM0NjRv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className=" py-1 px-2 rounded-sm font-bold">in</div>
          Instagram
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 row-start-2"
          href="https://x.com/beera_safe?t=_tgINtbfE8Ju0II3GGEtgw&s=09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="py-2 px-3 font-bold">x</div>
          twitter
        </Link> <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 row-start-2"
          href="mailto:info@beerasafe.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MailIcon className="size-4 mx-2"/>
          info@beerasafe
        </Link></div>
        <div className="sm:px-8 sm:py-4 p-6 flex dark sm:flex-row flex-col sm:justify-between">
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
