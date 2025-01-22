"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
import { addSubscription, upvote } from "@/server/fetch.actions"
import { addSubscriptionSchema, voteSchema } from '@/schema/formSchemas'
import { ThumbsUp } from "lucide-react"
import Vote, { UpVotes } from "./vote"

export default function AutoUpVote(props: {id: number, upvotes: number}) {
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

    async function onSubmit(values: z.infer<typeof voteSchema>) {
        
        const app = document.getElementById('submit3');
        const text = 'voting...';
        if(app !== null){
          app.innerHTML = text;
        }
        let email = await Vote()
        //create obj
        values.email = email
        values.vote = 1

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
  return (<div className="px-4 pb-0 admin">
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Button id="submit3" variant="outline" type="submit">
        {props.upvotes} | <ThumbsUp/>
      </Button>
      {form.formState.errors.root && (
        <div className="bg-light p-2 mt-1 rounded-md">{form.formState.errors.root.message}</div>
      )}
      {form.formState.isSubmitSuccessful && (
        <div className="bg-light p-2 text-center rounded-md"> upvote successful </div>
      )}
    </form>
    </Form>
      </div>
  )
}
