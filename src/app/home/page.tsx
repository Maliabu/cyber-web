
import * as React from "react"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
import { ArrowRight, BookHeart, Calendar, ChevronRight, Heart, HelpCircle } from "lucide-react";
import Link from "next/link"
import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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

export default function HomePage(){
    return(
      <div className="font-[family-name:var(--font-futura)]">
      <div className=" items-center">
        <div className="backdrop p-16">
        <div className="float-right">
            <TimerCountDown/>
      <Card className="w-[350px] dark bg-gradient-to-r from-slate-800 to-slate-900">
      <CardHeader>
        <CardTitle>Hacking For You!</CardTitle>
        <CardDescription>Diving into the hack ethics of cyber security with WarrenMu</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Preferred Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="my-4 text-white">Sign Up My Account!</Button>
        </form>
        <a
            className="flex h-full mt-6 w-full select-none flex-col justify-end rounded-md p-6 outline focus:shadow-md"
            href="/">
            <Image
                aria-hidden
                src={Logo}
                alt="File icon"
                width={16}
                height={16}/>
            <div className="mb-2 mt-4 text-lg font-medium">
                shadcn/ui
            </div>
            <p className="text-sm leading-tight text-card-foreground">
                Beautifully designed components built with Radix UI and Tailwind CSS.
            </p>
        </a>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p>Or Sign Up with Google</p>
        <Button variant="outline" className="bg-light"> Google</Button>
      </CardFooter>
    </Card>
    <div className="border flex flex-row justify-between bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg p-6 mt-2 w-[350px]">
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
      <Button className="text-white"><BookHeart width={16} height={16}/> Take a look at our courses</Button>
      <Button variant="outline" className="mx-6 bg-light">Why ours are the best <ArrowRight width={16} height={16}/> </Button>
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
    <Button className="text-white my-4">More Articles</Button>
    <h3>Join our growing community of great hackers and readers, writers and coders!</h3>
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