"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
import { addSubscription } from "@/server/fetch.actions"
import { addSubscriptionSchema } from '@/schema/formSchemas'

export default function AutoFooterSubscribe(props: {email: string}) {

    const form = useForm<z.infer<typeof addSubscriptionSchema>>({
      resolver: zodResolver(addSubscriptionSchema),
        defaultValues: {
          email: props.email
      },
    })

    async function onSubmit(values: z.infer<typeof addSubscriptionSchema>) {
        //create obj
        const app = document.getElementById('submit2');
        const text = 'processing';
        if(app !== null){
          app.innerHTML = text;
        }
        const data = await addSubscription(values)
        if(data?.error){
          form.setError("root", {
            "message": data.message
          })
          setTimeout(() => {
            window.location.reload()
          }, 2000)
        } else {
          if(app !== null){
            app.innerHTML = "Successful";
          }
          window.location.reload()
        }
    }
  return (<div className="px-4 pb-0 admin">
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Button id="submit2" className="text-white" type="submit">Subscribe</Button>
      {form.formState.errors.root && (
        <div className="bg-light p-2 mt-1 rounded-md">{form.formState.errors.root.message}</div>
      )}
      {form.formState.isSubmitSuccessful && (
        <div className="bg-light p-2 text-center rounded-md"> Subscribed successfully </div>
      )}
    </form>
    </Form>
      </div>
  )
}
