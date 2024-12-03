
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

export default function HomePage(){
    return(
        <div>
      <div className=" p-16 items-center">
        <div className="float-right">
            <TimerCountDown/>
      <Card className="w-[350px]">
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
          <Button className="my-4">Sign Up My Account!</Button>
        </form>
        <a
            className="flex h-full mt-6 w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
            href="/">
            <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}/>
            <div className="mb-2 mt-4 text-lg font-medium">
                shadcn/ui
            </div>
            <p className="text-sm leading-tight text-muted-foreground">
                Beautifully designed components built with Radix UI and Tailwind CSS.
            </p>
        </a>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p>Or Sign Up with Google</p>
        <Button variant="outline"> Google</Button>
      </CardFooter>
    </Card>
    <Card className="border flex justify-between rounded-2 p-6 mt-2">
        <p>Articles by WarrenMu</p>
        <Button variant="outline"> Go to blog</Button>
    </Card>
    </div>
      <div className="pb-16">
      <NavigationMenu className="border-bottom">
    <NavigationMenuList>
      <NavigationMenuItem>
      <Link href="/" legacyBehavior passHref className="page-link">
            <NavigationMenuLink>
              Home
            </NavigationMenuLink>
          </Link>
            <NavigationMenuLink className=" page-link">
                <div className="flex flex-row">
                <ChevronRight width={15} height={15} className="pt-1"/> Get Started</div>
            </NavigationMenuLink>
    </NavigationMenuItem>
    </NavigationMenuList></NavigationMenu>
      <h1 className="display-1">Learn Cyber Security</h1>
      <p className="py-6">The easy way!</p>
      <h6 className="text-wrap lh-1">Cyber security's core function is to protect the devices we all use (smartphones, <br/>laptops, tablets and computers), and the services we access - <br/>both online and at work - from theft or damage.</h6>
      <h6>It's also about preventing unauthorised access <br/>to the vast amounts of personal information <br/>we store on these devices, and online.</h6>
      </div>
      <Button><BookHeart width={16} height={16}/> Take a look at our courses</Button>
      <Button variant="outline" className="mx-6">Why ours are the best <ArrowRight width={16} height={16}/> </Button>
    </div>
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
    <div className="px-16 pt-16">
    <h1 className="display-1">What's Next in Cyber Security</h1>
    <div className="flex flex-row mt-4">
        <p className="bg-secondary p-2 rounded">Hacking</p><p className="mx-6 bg-secondary p-2 rounded">Cyber Security</p>
        <p className="bg-secondary p-2 rounded">Training</p><p className="mx-6 bg-secondary p-2 rounded">assessment</p>
    </div>
    </div>
      <CarouselContent className="p-16">
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square p-4">
          <NavigationMenu>
          <ul className="">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/">
                    <Image
                    aria-hidden
                    src="/file.svg"
                    alt="File icon"
                    width={16}
                    height={16}/>
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
    )
}