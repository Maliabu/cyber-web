"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { addEvents } from "@/server/fetch.actions"
import { addEventSchema } from '@/schema/formSchemas'
import { ReusableDrawer } from "../reusableDrawer"
import { DatePicker } from "../datePicker"

export default function AddEvents() {

    const form = useForm<z.infer<typeof addEventSchema>>({
      resolver: zodResolver(addEventSchema),
        defaultValues: {
          title: "",
          description: "",
          link: "",
          image: "",
          startDate: new Date(),
          duration: 0,
      },
    })

    async function onSubmit(values: z.infer<typeof addEventSchema>) {
        //create obj
        const app = document.getElementById('submit');
        const text = 'processing';
        if(app !== null){
          app.innerHTML = text;
        }
        const data = await addEvents(values)
        if(data?.error){
          form.setError("root", {
            "message": "event not added"
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
                      <FormLabel>Title</FormLabel>
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
                      <FormLabel>Description</FormLabel>
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
                  name="link"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>Link</FormLabel>
                      <FormControl>
                          <Input type="text" placeholder="Link" {...field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />
              </div>
          </div>
          <div>
              <div className="flex flex-col space-y-1.5 mt-6">
              <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>Image</FormLabel>
                      <FormControl
                      >
                          <Input type="file" {...field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />
              </div>
              <div className="flex flex-col mt-6 space-y-1.5">
              <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>StartDate</FormLabel>
                      <FormControl>
                          <DatePicker />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />
              </div>
          </div>
        </div>
        <Button id="submit" className="my-4 text-white" type="submit">Add Event</Button>
        {form.formState.errors.root && (
          <div className="bg-light p-2 rounded-md">{form.formState.errors.root.message}</div>
        )}
        {form.formState.isSubmitSuccessful && (
          <div className="bg-light p-2 text-center rounded-md"> Event added successfully </div>
        )}
      </form>
      </Form>
        </div>)
    }

  return (
    <div className="font-[family-name:var(--font-futura)]">
      <ReusableDrawer page="Event" form={formBuild()}/>
    </div>
  )
}
