
import * as React from "react"
import {
    NavigationMenu,
    NavigationMenuLink
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, ChevronRight, HeartHandshakeIcon, ShieldCheckIcon, TrafficConeIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import TimerCountDown from '../resources/timer'
import { auth } from "@clerk/nextjs/server";
import BlogBottomAd from "./blogAd";

export default async function HomePage(){

  const userId = await auth()

    return(
      <div className="">
            <div className="grid back-schedule justify-items-center sm:px-20 sm:pt-8 p-4">
              <h5 className="text-5xl leading-10 text-center sm:w-[750px] ">Schedule an interview with our mentors!</h5>
              Get started with a course in cybersecurity
              <Button size="lg" className="bg-primary text-white mt-4 sm:w-[550px] self-center"><Calendar className="size-6"/> Schedule an Interview Asap</Button>
            </div>
      <div className=" items-center">
        <div className=" sm:py-16 sm:px-0">
        <div className="sm:float-right p-6">
            <TimerCountDown userid={userId.userId}/>
    <div className="flex flex-row justify-between bg-darker rounded-lg p-6 mt-2 w-[320px] sm:w-[350px] hidden sm:flex">
        <p className="text-white">See more Articles by WarrenMu and many of our experts onboard</p>
        <a href="/blog" className="bg-primary text-white p-2 rounded-md w-1/2 h-1/2">Our Blog</a>
    </div>
    </div>
      <div className="sm:p-16 p-6 bg-darker text-white">
            <div className="mt-2">
              <p>Home</p>
            </div>
                <div className="flex flex-row">
                <ChevronRight width={15} height={15} className="pt-1"/> Get Started</div>
      <h1 className="display-1 py-8">Learn Cyber Security</h1>
      <p className="py-6">The easy way!</p>
      <h6 className="text-wrap lh-1">Cyber security&lsquo;s core function is to protect the devices we all use (smartphones, <br/>laptops, tablets and computers), and the services we access - <br/>both online and at work - from theft or damage.</h6>
      </div>
      <div className="sm:px-16 sm:pt-16 p-6">
      <a href="/contact">
      <Button variant="outline" className=" bg-light">Why ours are the best <ArrowRight width={16} height={16}/> </Button></a>
    </div></div>
    </div>
    <div className="sm:p-16 bg-muted p-6">
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
    <h1 className="text-5xl leading-10">More to us and our offers for you!</h1>
    <p className="my-2">Check our most affordable services</p>
    <a href="/offers">
    <Button className="text-white mt-4">See all our services</Button></a>
    <a href="/offers#courses">
    <Button className="bg-light mt-4 mx-2">Our Classes, Trainings and Courses</Button>
    </a>
      <CarouselContent className="py-8">
          <CarouselItem key="training" className="md:basis-1/2 lg:basis-1/3">
            <div>
              <Card className="w-full p-0 rounded-2xl">
                <CardContent className="flex p-6">
          <NavigationMenu>
          <ul className="">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md no-underline outline-none focus:shadow-md"
                    href="/offers#courses">
                      <div className="grid justify-items-center px-16 pt-16">
                        <TrafficConeIcon className="size-20"/>
                    </div>
                    <div className="p-6 sm:p-12 bg-white rounded-b-xl">
                      <div className=" text-3xl mt-4 text-dark font-semibold leading-6 tracking-tight">
                      Cyber Security Training</div>
                    <p className="text-sm text-card-foreground my-8">
                    For: Students, IT professionals, and organizations
                    </p>
                    <Button className="text-white mt-4">Learn More</Button>
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
            </NavigationMenu>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem key="consultancy" className="md:basis-1/2 lg:basis-1/3">
            <div>
              <Card className="w-full p-0">
              <CardContent className="flex p-6">
          <NavigationMenu>
          <ul className="">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full rounded-lg select-none flex-col justify-end no-underline outline-none"
                    href="/offers">
                      <div className="grid justify-items-center px-16 pt-16">
                        <HeartHandshakeIcon className="size-20"/>
                    </div>
                    <div className="p-6 sm:p-12 bg-white rounded-b-xl">
                      <div className=" text-3xl mt-4 text-dark font-bold tracking-tight leading-6">
                      Consultancy and Managed Security Services</div>
                    <p className="text-sm text-card-foreground my-8">
                    Offering: Security Policy Creation, Incident Response Planning ...
                    </p>
                    <Button className="text-white mt-4">More Constultancy services</Button>
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
            </NavigationMenu>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem key="pentesting" className="md:basis-1/2 lg:basis-1/3">
            <div>
              <Card className="w-full p-0">
                <CardContent className="flex p-6">
          <NavigationMenu>
          <ul className="">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full rounded-lg select-none flex-col justify-end no-underline outline-none"
                    href="/offers">
                      <div className="grid justify-items-center px-16 pt-16">
                        <ShieldCheckIcon className="size-20"/>
                    </div>
                    <div className="p-6 sm:p-12 bg-white rounded-b-xl">
                      <div className=" text-3xl mt-4 text-dark font-bold leading-6 tracking-tight">
                      Penetration Testing Services</div>
                    <p className="text-sm text-card-foreground my-8">
                    Web Applications, Network Vulnerability Assessment, Mobile Applications...
                    </p>
                    <Button className="text-white mt-4">See More Tests</Button>
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
            </NavigationMenu>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="ml-6"/>
      <CarouselNext className="mr-6"/>
    </Carousel>
    </div>
    <BlogBottomAd/>
    </div>
    )
}