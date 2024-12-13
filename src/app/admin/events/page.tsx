"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { addEventSchema } from '@/schema/formSchemas'
import { DatePicker } from "../datePicker"


export default function AddEvent() {

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
    }

  return (
    <div className="font-[family-name:var(--font-futura)]">
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="text-white">Add New Event</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm p-16 font-[family-name:var(--font-futura)]">
          <DrawerHeader>
            <DrawerTitle>Add New Event</DrawerTitle>
            <DrawerDescription>Add a New Event to the table</DrawerDescription>
          </DrawerHeader>
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
                            placeholder="Full name" {...field} />
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
                            <Input type="text" placeholder="Email" {...field} />
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
                            <Input type="text" placeholder="Email" {...field} />
                            <p>Any additional external links to this event</p>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="flex flex-col space-y-1.5 mt-6">
                <DatePicker/>
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
            </div>
          </div>
          <Button id="submit" className="my-4 text-white" type="submit">Submit Event</Button>
          {form.formState.errors.root && (
            <div className="bg-light p-2 rounded-md">{form.formState.errors.root.message}</div>
          )}
          {form.formState.isSubmitSuccessful && (
            <div className="bg-light p-2 text-center rounded-md"> Event added successfully </div>
          )}
        </form>
        </Form>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
    </div>
  )
}
