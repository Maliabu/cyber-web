
import * as React from "react"
import {
    NavigationMenu,
    NavigationMenuLink
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
import { ArrowRight, BookAIcon, Calendar, ChevronRight, HeartHandshakeIcon, ShieldCheckIcon, TrafficConeIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card"
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
import Link from "next/link";
import { db } from "@/drizzle/db";
import { courseTable, nextCourseTable } from "@/drizzle/schema";
import { desc, eq } from "drizzle-orm";

export default async function HomePage(){

  const userId = await auth()
  const nextCourse = await db.select().from(nextCourseTable).orderBy(desc(nextCourseTable.id)).limit(1).leftJoin(courseTable, eq(nextCourseTable.courseId, courseTable.id))
  
  function booking(){
    if(userId.userId !== null){
      return(
        <Link href="https://calendar.app.google/fvWn27cUmcaMvW9G7">
              <Button size="lg" className="bg-primary text-white mt-4 sm:w-[550px] self-center"><Calendar className="size-6"/> Schedule an Interview Asap</Button>
              </Link>
      )
    } else return(
      <Link href="/sign-in">
              <Button size="lg" className="bg-primary text-white mt-4 sm:w-[550px] self-center"><Calendar className="size-6"/> Schedule an Interview Asap</Button>
              </Link>
    )
  }

    return(
      <div className="sm:p-0">
            <div className="grid justify-items-center text-dark sm:p-20 sm:pt-8 p-8 back-classes">
              <h5 className="text-5xl leading-10 text-center sm:w-[750px] tracking-tight font-bold">Schedule an interview with our mentors!</h5>
              Get started with a course in cybersecurity
              {booking()}
            </div>
      <div className=" items-center">
        <div className=" sm:pb-16 sm:px-0">
        <div className="sm:float-right p-6">
            <TimerCountDown userid={userId.userId} nextCourse={nextCourse.map(course=>course.course_table)}/>
    <div className="flex flex-row justify-between bg-muted rounded-lg p-6 mt-2 w-[320px] sm:w-[350px] hidden sm:flex">
        <p className="text-dark">See Articles by many of our writers and authors onboard</p>
        <a href="/blog" className="bg-primary text-white p-2 rounded-md w-1/2 h-1/2">Our Blog</a>
    </div>
    </div>
      <div className="sm:p-16 p-6 bg-gradient-to-r from-gray-900 to-sky-900 text-white">
            <div className="mt-2">
              <p>Home</p>
            </div>
                <div className="flex flex-row">
                <ChevronRight width={15} height={15} className="pt-1"/> Get Started</div>
      <h1 className="display-1 py-8 tracking-tight font-bold">Learn Cyber Security</h1>
      <p className="py-6">The easy way!</p>
      <h6 className="text-wrap lh-1">Cyber security&lsquo;s core function is to protect the devices we all use (smartphones, <br/>laptops, tablets and computers), and the services we access - <br/>both online and at work - from theft or damage.</h6>
      </div>
      <div className="sm:px-16 sm:pt-16 p-6 bg-darker">
      <a href="/contact">
      <Button variant="outline" className=" bg-light">Why ours are the best <ArrowRight width={16} height={16}/> </Button></a>
    </div></div>
    </div>
    <div className="grid justify-items-center sm:p-20 sm:mt-8 text-dark p-4">
              <h5 className="text-5xl leading-10 text-center sm:w-[750px] tracking-tight font-bold">Get Certified in our courses today!</h5>
              <div className="text-center leading-4 py-4">Get started with a course in cybersecurity, our courses now offer certification.</div>
              <a href="/offers#courses">
              <Button size="lg" className="bg-primary text-white mt-4 sm:w-[550px] self-center"><BookAIcon className="size-6"/> Enroll for Certification</Button></a>
            </div>
    <div className="bg-muted">
      <div className="sm:p-16 p-6">
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
    <h1 className="text-5xl leading-10 tracking-tight font-bold">More to us and our offers for you!</h1>
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
                    className="flex h-full text-dark w-full select-none flex-col justify-end rounded-md no-underline outline-none focus:shadow-md"
                    href="/offers#courses">
                      <p className="desc bg-muted p-2 rounded-xl">For: Students, IT professionals, and organizations</p>
                      <div className="grid justify-items-center px-16 pt-16">
                        <TrafficConeIcon className="size-40 text-white bg-primary p-8 rounded-full"/>                      
                    </div>
                    <div className="p-6 sm:p-12 rounded-b-xl">
                      <div className=" text-3xl mt-4 font-semibold leading-7 tracking-tight">
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
              <CardContent className="flex p-6 ">
          <NavigationMenu>
          <ul className="">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full text-dark rounded-lg select-none flex-col justify-end no-underline outline-none"
                    href="/offers">
                    <p className="desc bg-muted p-2 rounded-xl">For: Organizations without dedicated security teams</p>
                      <div className="grid justify-items-center px-16 pt-16">
                        <HeartHandshakeIcon className="size-40 text-white bg-primary p-8 rounded-full"/>
                    </div>
                    <div className="p-6 sm:p-12  rounded-b-xl">
                      <div className=" text-3xl mt-4  font-bold tracking-tight leading-7">
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
                <CardContent className="flex p-6 ">
          <NavigationMenu>
          <ul className="">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full text-dark rounded-lg select-none flex-col justify-end no-underline outline-none"
                    href="/offers">
                      <p className="desc bg-muted p-2 rounded-xl">For: SMBs, international tech startups, financial institutions, and e-commerce businesses</p>
                      <div className="grid justify-items-center px-16 pt-16">
                        <ShieldCheckIcon className="size-40 text-white bg-primary p-8 rounded-full"/>
                    </div>
                    <div className="p-6 sm:p-12  rounded-b-xl">
                      <div className=" text-3xl mt-4  font-bold leading-7 tracking-tight">
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
    </div>
    <BlogBottomAd/>
    </div>
    )
}