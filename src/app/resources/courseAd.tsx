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

export default function CourseAd(props: {nextCourse: {course_table: {title: string, amount: number, description: string}, currency_table: {currency:string}}}){
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
          <div className="text-2xl font-bold"><p className="font-bold">{props.nextCourse.currency_table.currency} </p>{props.nextCourse.course_table.amount}</div></div>
      <div className="border rounded-lg p-10 w-5/6">
        <div className="text-4xl tracking-tight font-bold leading-8">{props.nextCourse.course_table.title}</div>
        <p className="mt-4 py-4 border-t">{props.nextCourse.course_table.description}</p>
        <Link href="/offers#courses"><Button className="text-white">More Classes</Button></Link>
      </div>
      </div>
      </CardContent>
    </Card>
        </div>
    )
}