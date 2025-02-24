"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { addEnrollment } from "@/server/fetch.actions"
import { addEnrollmentSchema } from '@/schema/formSchemas'
import { ReusableDrawer } from "../reusableDrawer"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export default function Enroll(props: { courses: {id: number, title: string}[]}) {

    const form = useForm<z.infer<typeof addEnrollmentSchema>>({
      resolver: zodResolver(addEnrollmentSchema),
        defaultValues: {
          courseId: 0,
          email: '',
          course1: '',
      },
    })

    async function onSubmit(values: z.infer<typeof addEnrollmentSchema>) {
        //create obj
        const app = document.getElementById('submit');
        const text = 'processing';
        if(app !== null){
          app.innerHTML = text;
        }

        const data = await addEnrollment(values)
        if(data?.error){
          form.setError("root", {
            "message": "Enrollment not added"
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
                      <FormLabel>Course</FormLabel>
                      <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
                              <SelectTrigger id="course1">
                              <SelectValue placeholder="Course"/>
                              </SelectTrigger>
                              <SelectContent position="popper" className=" font-[family-name:var(--font-futura)]">
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
              <div className="flex flex-col w-1/2 ml-2 space-y-1.5">
              <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>User</FormLabel>
                      <FormControl>
                          <Input type="email" placeholder="Email address" {...field}/>
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />
          </div>
        </div>
        <Button id="submit" className="my-4 text-white" type="submit">Enroll</Button>
        {form.formState.errors.root && (
          <div className="border-1 border-destructive text-destructive p-2 rounded-md">{form.formState.errors.root.message}</div>
        )}
        {form.formState.isSubmitSuccessful && (
          <div className="border-1 border-primary text-primary p-2 text-center rounded-md"> Enrolled successfully </div>
        )}
      </form>
      </Form>
        </div>)
    }

  return (
    <div className="font-[family-name:var(--font-futura)]">
      <ReusableDrawer page="Enrollment" form={formBuild()}/>
    </div>
  )
}
