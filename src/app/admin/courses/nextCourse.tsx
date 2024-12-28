"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { addNextCourseSchema } from '@/schema/formSchemas'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { NextDrawer } from "../nextDrawer"
import { nextCourse } from "@/server/fetch.actions"

export default function NextCourse(props: {courses: {id:number, title:string}[]}) {

    const form = useForm<z.infer<typeof addNextCourseSchema>>({
      resolver: zodResolver(addNextCourseSchema),
        defaultValues: {
          courseId: 0,
          course1: '',
      },
    })

    async function onSubmit(values: z.infer<typeof addNextCourseSchema>) {
        const app = document.getElementById('submit');
        const text = 'processing';
        if(app !== null){
          app.innerHTML = text;
        }
        let data = await nextCourse(values)
        if(data?.error){
          form.setError("root", {
            "message": "Next Course not added"
          })
        } else {
          if(app !== null){
            app.innerHTML = "Successful";
          }
          window.location.reload()
        }
    }

    function formBuild(){
      return(
      <div className="p-4 pb-0 admin">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 w-full items-center gap-4">
              <div className="flex flex-col w-1/2 space-y-1.5">
              <FormField
                  control={form.control}
                  name="course1"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>Select a Course</FormLabel>
                      <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
                              <SelectTrigger id="course1">
                              <SelectValue placeholder="Course"/>
                              </SelectTrigger>
                              <SelectContent position="popper">
                                {
                                  props.courses.map((course) => (
                                    <SelectItem key={course.id} value={course.title}>{course.title}</SelectItem>
                                  ))
                                }
                              </SelectContent>
                          </Select>
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />
              </div>
        </div>
        <Button id="submit" className="my-4 text-white" type="submit">Add Course</Button>
        {form.formState.errors.root && (
          <div className="bg-light p-2 rounded-md">{form.formState.errors.root.message}</div>
        )}
        {form.formState.isSubmitSuccessful && (
          <div className="bg-light p-2 text-center rounded-md"> Course Added successfully </div>
        )}
      </form>
      </Form>
        </div>)
    }

  return (
    <div className="font-[family-name:var(--font-futura)]">
      <NextDrawer page="Course" form={formBuild()}/>
    </div>
  )
}
