'use client';
// render on client
import React, { useState } from "react";
import {
    Card,
  CardDescription,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from '../images/logo.png'

export default function TimerCountDown(userId){
    const [result, setResult] = useState("00d 00h 00m 00s")
    // Set the date we're counting down to
    var countDownDate = new Date("dec 16, 2024 17:43:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
        
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="demo"
    setResult(days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ")
        
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        setResult("EXPIRED")
    }
    }, 1000);

    function nextClass(){
        if(userId.userid === null && result !== "EXPIRED")
        { return <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Email address" />
            </div>
          </div>
          <Button className="my-4 text-white bg-primary">Sign Me Up</Button>
        </form>}
        if(userId.userid !== null && result !== "EXPIRED")
        { return <form>
          <Button className="my-4 text-white bg-primary">Sign Me Up</Button>
        </form>}
        else {return <p className="p-4 rounded-md border ">Next class coming soon. please keep updated</p>}
      
    }
    return(
        <div>
        <div className="flex pb-4 items-center sm:-mr-8">
        <h6>Next Class In: </h6>
        <h5 className="mx-4">{result}</h5>
        </div>
      <Card className="sm:w-[350px] w-[320px] dark ">
      <CardHeader>
        <CardTitle>Hacking For You!</CardTitle>
        <CardDescription>Diving into the hack ethics of cyber security with WarrenMu</CardDescription>
      </CardHeader>
      <CardContent>
      {nextClass()}
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
      <CardFooter>
        {userId.userid !== null?
        null
        :
        <div className="flex justify-between sm:w-[350px] w-[320px]">
        <p>Or Sign Up with Google</p>
        <a href="/sign-up">
        <Button variant="outline" className="bg-light"> Google</Button></a></div>
        }
      </CardFooter>
    </Card>
        </div>
    )
}