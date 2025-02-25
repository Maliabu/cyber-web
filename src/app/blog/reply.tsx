"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { toast, Toaster } from "sonner"
import { useForm } from "react-hook-form"
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { addComment, addSubscription, reply, upvote } from "@/server/fetch.actions"
import { addSubscriptionSchema, commentsSchema, replySchema, voteSchema } from '@/schema/formSchemas'
import { ThumbsUp } from "lucide-react"
import Vote, { UpVotes } from "./vote"
import { auth } from "@clerk/nextjs/server"
import { Input } from "@/components/ui/input"

export default function Reply(props: {id: number, email: string, comment: number}) {
    const form = useForm<z.infer<typeof replySchema>>({
      resolver: zodResolver(replySchema),
        defaultValues: {
            email: "email@gmail.com", // when empty/incorrect formatted, zod doesnot validate or submit,
            article: props.id,
            comment: props.comment,
            reply: ""
      },
    })

    async function onSubmit(values: z.infer<typeof replySchema>) {
      if(props.email == ''){
        toast("please signin to participate")
      } 
      else {
        const app = document.getElementById('reply');
        const text = 'processing...';
        if(app !== null){
          app.innerHTML = text;
        }
        //create obj
        values.email = props.email

        const data = await reply(values)
        if(data?.error){
          form.setError("root", {
            "message": "reply not sent"
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
    }
  return (<div className="mt-8 bg-muted p-6 rounded-lg">
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}>
    <div className="flex flex-row gap-1">
              <FormField
                  control={form.control}
                  name="reply"
                  render={({ field }) => (
                      <FormItem>
                      <FormControl>
                          <Input 
                          size={40}
                          type="text" 
                          placeholder="Reply to above comment" {...field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />
                  <Toaster/>
                    <Button size="sm" id="reply" type="submit">reply</Button>
              </div>
      {form.formState.errors.root && (
        <div className="bg-light p-2 mt-1 rounded-md">{form.formState.errors.root.message}</div>
      )}
    </form>
    </Form>
      </div>
  )
}
