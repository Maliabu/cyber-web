"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { toast, Toaster } from "sonner"
import { useForm } from "react-hook-form"
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { addComment, addSubscription, upvote } from "@/server/fetch.actions"
import { addSubscriptionSchema, commentsSchema, voteSchema } from '@/schema/formSchemas'
import { ThumbsUp } from "lucide-react"
import Vote, { UpVotes } from "./vote"
import { auth } from "@clerk/nextjs/server"
import { Input } from "@/components/ui/input"

export default function Comment(props: {id: number, email: string}) {
    const form = useForm<z.infer<typeof commentsSchema>>({
      resolver: zodResolver(commentsSchema),
        defaultValues: {
            email: "email@gmail.com", // when empty/incorrect formatted, zod doesnot validate or submit,
            article: props.id,
            comment: ""
      },
    })

    async function onSubmit(values: z.infer<typeof commentsSchema>) {
      if(props.email == ''){
        toast("please signin to comment")
      } 
      else {
        const app = document.getElementById('comment');
        const text = 'processing...';
        if(app !== null){
          app.innerHTML = text;
        }
        //create obj
        values.email = props.email

        const data = await addComment(values)
        if(data?.error){
          form.setError("root", {
            "message": "Comment not sent"
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
  return (<div className="">
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}>
    <div className="flex flex-row gap-2 justify-between">
              <FormField
                  control={form.control}
                  name="comment"
                  render={({ field }) => (
                      <FormItem>
                      <FormControl>
                          <Input 
                          type="text" 
                          placeholder="Type your comment" {...field} />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />
                  <Toaster/>
                    <Button id="comment" type="submit">comment</Button>
              </div>
      {form.formState.errors.root && (
        <div className="bg-light p-2 mt-1 rounded-md">{form.formState.errors.root.message}</div>
      )}
    </form>
    </Form>
      </div>
  )
}
