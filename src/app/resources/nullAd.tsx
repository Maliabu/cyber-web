'use client';
// render on client
import React, { useState} from "react";
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
import Link from "next/link";

export default function NullAd(){
    return(
        <div>
      <Card className="sm:w-[350px] md:w-[350px] lg:w-[400px] w-[330px] border-none">
      <CardHeader>
        <CardTitle>Join our Cyber Security Classes</CardTitle>
        <CardDescription>Diving into the ethics of cyber security with our experts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mt-12">
        <div className="rounded-full bg-darker grid justify-center items-center w-32 h-32 float-right -mt-16">
          <div className="text-2xl font-bold"><p className="font-bold">Training </p>Courses</div></div>
      <div className="border rounded-lg sm:p-10 p-4 w-5/6">
        <div className="text-4xl tracking-tight font-bold leading-8">Cyber Security Training, Workshops and Courses</div>
        <p className="mt-4 py-4 border-t">All our courses, classes and workshops both online and in-person to get you comfortable with your online security</p>
        <Link href="/offers#courses"><Button className="text-white">See our Training/Courses</Button></Link>
      </div>
      </div>
      </CardContent>
    </Card>
        </div>
    )
}