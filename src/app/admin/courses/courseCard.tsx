"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { deleteSchema } from "@/schema/formSchemas"
import { deleteCourse } from "@/server/fetch.actions"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { z } from "zod"

// define custom props for userCard component
type CoursecardProps = {
    id: number
    title: string | null
    description: string
    image: string | null
  }
  // one time usercard component with custom prop type
  export function CourseCard({
    id,
    title,
    description,
    image,
  }: CoursecardProps){
    const form = useForm<z.infer<typeof deleteSchema>>({
      resolver: zodResolver(deleteSchema),
        defaultValues: {
          courseId: id
      },
    })
    async function onSubmit(values: z.infer<typeof deleteSchema>) {
      const app = document.getElementById('submit');
      const text = 'Deleting';
      if(app !== null){
        app.innerHTML = text;
      }
      const data = await deleteCourse(values)
      if(data?.error){
        form.setError("root", {
          "message": "Course not deleted"
        })
      } else {
        if(app !== null){
          app.innerHTML = "Deleted";
        }
        window.location.reload()
      }
    }
    const path = '/courses/'+image
    return (
      <div className="flex flex-row justify-between">
      <Card className="grid grid-cols-3 gap-4 p-6 mt-1 dark w-3/4">
        <div className="w-10 h-10">
            <Image src={path} width={80} height={80} alt="course image"/>
        </div>
        <div className="items-start">
          <p className="desc">Title</p>
        <p className="mt-2">{title}</p></div>
        <div>
        <p className="desc">Description</p>
        <p className="mt-2">{description}</p></div>
        <div></div>
      </Card>
      <Button className="text-white" id="submit" onClick={() => onSubmit({"courseId": id})}>Delete</Button>
        {form.formState.errors.root && (
          <div className="bg-light p-2 rounded-md">{form.formState.errors.root.message}</div>
        )}
        {form.formState.isSubmitSuccessful && (
          <div className="bg-light p-2 text-center rounded-md"> Course deleted </div>
        )}
      </div>
    )
  }