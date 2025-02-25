"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { toast, Toaster } from "sonner"
import { useForm } from "react-hook-form"
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
import { addSubscription, upvote } from "@/server/fetch.actions"
import { addSubscriptionSchema, voteSchema } from '@/schema/formSchemas'
import { ThumbsUp } from "lucide-react"
import Vote, { UpVotes } from "./vote"
import { auth } from "@clerk/nextjs/server"

export default function DownVote(props: {id: number, upvotes: number, email: string}) {
    async function voting(id: number){
        let votes = await UpVotes(id)
        return votes
    }

    const form = useForm<z.infer<typeof voteSchema>>({
      resolver: zodResolver(voteSchema),
        defaultValues: {
            email: "email@gmail.com", // when empty/incorrect formatted, zod doesnot validate or submit,
            article: props.id,
            vote: 0
      },
    })
    console.log(props.email)

    async function onSubmit(values: z.infer<typeof voteSchema>) {
      if(props.email == ''){
        toast("please signin to vote")
      } 
      else {
        const app = document.getElementById('submit3');
        const text = 'voting...';
        if(app !== null){
          app.innerHTML = text;
        }
        let email = await Vote()
        //create obj
        values.email = email
        values.vote = 2 // downvote

        const data = await upvote(values)
        console.log(data)
        if(data?.error){
          form.setError("root", {
            "message": "Already voted"
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
  return (<div className="px-4 pb-0">
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}>
    <Toaster/>
      <Button id="submit3" variant="outline" type="submit">
        {props.upvotes} | <ThumbsUp/>
      </Button>
      {form.formState.errors.root && (
        <div className="bg-light p-2 mt-1 rounded-md">{form.formState.errors.root.message}</div>
      )}
    </form>
    </Form>
      </div>
  )
}
