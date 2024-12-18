"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { addCourse } from "@/server/fetch.actions"
import { addCourseSchema } from '@/schema/formSchemas'
import { ReusableDrawer } from "../reusableDrawer"
import { DatePicker } from "../datePicker"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { mentors } from "./helpers"

export default function AddCourse() {
    const [mentor, setMentor] = React.useState([{}])

    React.useEffect(() => {
        mentors().then((res) => setMentor(res))
    })

    const form = useForm<z.infer<typeof addCourseSchema>>({
      resolver: zodResolver(addCourseSchema),
        defaultValues: {
          title: "",
          description: "",
          courseOutline: "",
          image: "",
          mentor: 0,
          startDate: new Date(),
          endDate: new Date(),
          currency: 0,
          amount: 0,
          image1: ''
      },
    })

    async function onSubmit(values: z.infer<typeof addCourseSchema>) {
        //create obj
        const app = document.getElementById('submit');
        const text = 'processing';
        if(app !== null){
          app.innerHTML = text;
        }
        values.image1?values.image=values.image1.name:null

        const formData = new FormData()
        formData.append("file", values.image1)

        const data = await addCourse(values, formData)
        if(data?.error){
          form.setError("root", {
            "message": "Course not added"
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
      <div className="p-4 pb-0">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 w-full items-center gap-4">
          <div>
              <div className="flex flex-col space-y-1.5">
              <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>Title *</FormLabel>
                      <FormControl>
                          <Input 
                          type="text" 
                          placeholder="Title" {...field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />
              </div>
              <div className="flex flex-col mt-6 space-y-1.5">
              <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>Description *</FormLabel>
                      <FormControl>
                          <Input type="text" placeholder="Description" {...field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />
              </div>
              <div className="flex flex-col mt-6 space-y-1.5">
              <FormField
                  control={form.control}
                  name="courseOutline"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>Course Outline</FormLabel>
                      <FormControl>
                          <Input type="text" placeholder="Link" {...field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />
              </div>
              <div className="flex flex-col mt-6 space-y-1.5">
              <FormField
                  control={form.control}
                  name="mentor"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>Mentor</FormLabel>
                      <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
                              <SelectTrigger id="mentor">
                              <SelectValue placeholder="Mentor"/>
                              </SelectTrigger>
                              <SelectContent position="popper" className=" font-[family-name:var(--font-futura)]">
                                {
                                    mentor.map(user => (
                                        <SelectItem value=""></SelectItem>
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
          <div>
              <div className="flex flex-col space-y-1.5 mt-6">
              <p className="desc">Start Date</p>
              <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                      <FormItem>
                      <FormControl
                      >
                          <DatePicker field={field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />
              </div>
              <div className="flex flex-col space-y-1.5 mt-6">
              <p className="desc">End Date</p>
              <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                      <FormItem>
                      <FormControl
                      >
                          <DatePicker field={field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />
              </div>
              <div className="flex flex-col mt-6 space-y-1.5">
              <FormField
                  control={form.control}
                  name="image1"
                  render={({ field: { value, onChange, ...fieldProps } }) => (
                      <FormItem>
                      <FormLabel>Image</FormLabel>
                      <FormControl
                      >
                          <Input type="file" {...fieldProps} onChange={(event) =>
                    onChange(event.target.files && event.target.files[0])
                  }/>
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />
              </div>
              <div className="flex flex-col mt-6 space-y-1.5">
              <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>Amount *</FormLabel>
                      <FormControl>
                          <Input type="number" placeholder="Link" {...field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />
              </div>
          </div>
        </div>
        <Button id="submit" className="my-4 text-white" type="submit">Add Course</Button>
        {form.formState.errors.root && (
          <div className="bg-light p-2 rounded-md">{form.formState.errors.root.message}</div>
        )}
        {form.formState.isSubmitSuccessful && (
          <div className="bg-light p-2 text-center rounded-md"> Course added successfully </div>
        )}
      </form>
      </Form>
        </div>)
    }

  return (
    <div className="font-[family-name:var(--font-futura)]">
      <ReusableDrawer page="Course" form={formBuild()}/>
    </div>
  )
}
