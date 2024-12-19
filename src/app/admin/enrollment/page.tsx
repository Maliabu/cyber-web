"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from '@/components/ui/textarea'
import { addArticles, addEnrollment } from "@/server/fetch.actions"
import { addEnrollmentSchema } from '@/schema/formSchemas'
import { ReusableDrawer } from "../reusableDrawer"
import { tokenise } from "@/app/services/services"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Enroll(props: { courses: any[] , users: any[]}) {

    const form = useForm<z.infer<typeof addEnrollmentSchema>>({
      resolver: zodResolver(addEnrollmentSchema),
        defaultValues: {
          courseId: 0,
          userId: 0,
          course1: '',
          user1: '',
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
            "message": "Article not added"
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
                              <SelectTrigger id="mentor1">
                              <SelectValue placeholder="Mentor"/>
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
                  name="user1"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>User</FormLabel>
                      <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
                              <SelectTrigger id="user1">
                              <SelectValue placeholder="User"/>
                              </SelectTrigger>
                              <SelectContent position="popper" className=" font-[family-name:var(--font-futura)]">
                                {
                                  props.users.map((user) => (
                                    <SelectItem key={user.id} value={user.name}>{user.name}</SelectItem>
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
        <Button id="submit" className="my-4 text-white" type="submit">Enroll</Button>
        {form.formState.errors.root && (
          <div className="bg-light p-2 rounded-md">{form.formState.errors.root.message}</div>
        )}
        {form.formState.isSubmitSuccessful && (
          <div className="bg-light p-2 text-center rounded-md"> Enrolled successfully </div>
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
