"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { addSubscription } from "@/server/fetch.actions"
import { addSubscriptionSchema } from '@/schema/formSchemas'
import { ReusableDrawer } from "../reusableDrawer"
import { Input } from "@/components/ui/input"

export default function Subscribe() {

    const form = useForm<z.infer<typeof addSubscriptionSchema>>({
      resolver: zodResolver(addSubscriptionSchema),
        defaultValues: {
          email: "",
      },
    })

    async function onSubmit(values: z.infer<typeof addSubscriptionSchema>) {
        //create obj
        const app = document.getElementById('submit');
        const text = 'processing';
        if(app !== null){
          app.innerHTML = text;
        }

        const data = await addSubscription(values)
        if(data?.error){
          form.setError("root", {
            "message": "Subscription not added"
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
        <div className="flex flex-col mt-6 space-y-1.5">
              <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                          <Input type="email" placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />
              </div>
        </div>
        <Button id="submit" className="my-4 text-white" type="submit">Subscribe</Button>
        {form.formState.errors.root && (
          <div className="border-1 border-destructive text-destructive p-2 rounded-md">{form.formState.errors.root.message}</div>
        )}
        {form.formState.isSubmitSuccessful && (
          <div className="border-1 border-primary text-primary p-2 text-center rounded-md"> Subscribed successfully </div>
        )}
      </form>
      </Form>
        </div>)
    }

  return (
    <div>
      <ReusableDrawer page="Subscription" form={formBuild()}/>
    </div>
  )
}
