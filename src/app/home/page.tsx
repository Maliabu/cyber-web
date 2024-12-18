
import * as React from "react"
import {
    NavigationMenu,
    NavigationMenuLink
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
import { ArrowRight, BookHeart, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import TimerCountDown from '../resources/timer'
import Logo from '../images/logo.png'
import { Badge } from "@/components/ui/badge";
import { auth } from "@clerk/nextjs/server";

export default async function HomePage(){

  const userId = await auth()

    return(
      <div className="font-[family-name:var(--font-futura)]">
      <div className=" items-center bg-gradient-to-r from-slate-800 to-sky-600 text-white">
        <div className="backdrop p-16">
        <div className="float-right">
            <TimerCountDown userid={userId.userId}/>
    <div className="flex flex-row justify-between bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg p-6 mt-2 w-[350px]">
        <p className="text-white">See more Articles by WarrenMu and other Mentors</p>
        <a href="/blog" className="bg-light p-2 rounded-md w-1/2 h-1/2"> Go to blog</a>
    </div>
    </div>
      <div className="pb-16">
            <div>
              <p>Home</p>
            </div>
                <div className="flex flex-row">
                <ChevronRight width={15} height={15} className="pt-1"/> Get Started</div>
      <h1 className="display-1 py-16">Learn Cyber Security</h1>
      <p className="py-6">The easy way!</p>
      <h6 className="text-wrap lh-1">Cyber security's core function is to protect the devices we all use (smartphones, <br/>laptops, tablets and computers), and the services we access - <br/>both online and at work - from theft or damage.</h6>
      </div>
      <a href="offers">
      <Button className="text-white"><BookHeart width={16} height={16}/> Take a look at our courses</Button>
      </a>
      <a href="/contact">
      <Button variant="outline" className="mx-6 bg-light">Why ours are the best <ArrowRight width={16} height={16}/> </Button></a>
    </div>
    </div>
    <div className="p-20">
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
    <h1 className="display-1">Our Services</h1>
    <div className="flex flex-row my-8">
    <Badge variant="outline">Hacking</Badge>
    <Badge variant="outline" className="mx-2">Cyber Security</Badge>
    <Badge variant="outline">Training</Badge>
    <Badge variant="outline" className="mx-2">Assessment</Badge>
    </div>
    <h3>From the best of our authors and Mentors, articles you can read!</h3>
    <a href="/blog">
    <Button className="text-white my-4">More Articles</Button></a>
    <p>Join our growing community of great hackers and readers, writers and coders!</p>
      <CarouselContent className="py-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card className="w-full">
                <CardContent className="flex p-4">
          <NavigationMenu>
          <ul className="">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="/">
                    <Image
                    aria-hidden
                    src={Logo}
                    alt="File icon"
                    width={100}
                    height={100}/>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm text-card-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
            </NavigationMenu>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
    </div>
    )
}