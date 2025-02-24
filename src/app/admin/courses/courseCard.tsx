"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"
import DeletePage from "./deletePage"
import EditCourse from "./editPage"
import { UserType, courseType, currencyType } from "../dashboard/types"
import useSWR from "swr"
import { fetcher } from "@/app/services/services"

  export function CourseCard({
    id,
    title,
    description,
    courseOutline,
    image,
    mentor,
    startDate,
    endDate,
    currency,
    amount,
    createdAt,
    updatedAt
  }: courseType){
    let curr: currencyType[] = []
    const { data: currencies, error: currencyError } = useSWR("/api/currency", fetcher)
    if(currencies){
        curr = currencies
    }

    let mentors: UserType[] = []
    const { data: data1, error: error1 } = useSWR("/api/mentors", fetcher)
    if(data1){
        mentors = data1
    }


    let courseId = id
    let course: courseType[] = []
    const { data: courses, error: courseError } = useSWR(
      courseId ? `/api/courses/${courseId}` : null, fetcher)
    if(!courses){
      return <div>Loading courses...</div>
    }
    if(course){
        course = courses
        // return <div>Loading courses...</div>
      }
    let courseSelect = course[0]

    // const path = '/courses/'+image
    return (
      <div className="flex flex-row justify-between h-20">
      <Card className="grid grid-cols-3 gap-2 p-2 mt-1 w-3/4 border-none bg-muted">
        <div className="w-10 h-10">
            <Image src={image} width={200} height={100} alt="course image" unoptimized/>
        </div>
        <div className="items-start text-sm">
          <p className="desc">Title</p>
        <p className="">{title}</p></div>
        <div className="text-sm">
        <p className="desc">Description</p>
        <p className="">{description}</p></div>
        <div></div>
      </Card>
      <div className="flex flex-row gap-1">
        <DeletePage id={id} submitId={title}/>
        <EditCourse currency={curr} mentors={mentors} course={courseSelect}/>        
        </div>
      </div>
    )
  }