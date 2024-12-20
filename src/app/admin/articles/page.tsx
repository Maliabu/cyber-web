"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from '@/components/ui/textarea'
import { addArticles } from "@/server/fetch.actions"
import { addArticleSchema } from '@/schema/formSchemas'
import { ReusableDrawer } from "../reusableDrawer"
import { tokenise } from "@/app/services/services"

export default function AddArticle() {

    const form = useForm<z.infer<typeof addArticleSchema>>({
      resolver: zodResolver(addArticleSchema),
        defaultValues: {
          title: "",
          content: "",
          link: "",
          writer: '',
          image: "",
          image1: ''
      },
    })

    async function onSubmit(values: z.infer<typeof addArticleSchema>) {
        //create obj
        const app = document.getElementById('submit');
        const text = 'processing';
        if(app !== null){
          app.innerHTML = text;
        }
        values.image1?values.image=values.image1.name:null
        values.writer = tokenise()[1]

        const formData = new FormData()
        formData.append("file", values.image1)

        const data = await addArticles(values, formData)
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
          <div>
            <div className="flex flex-row">
              <div className="flex flex-col w-1/2 space-y-1.5">
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
              <div className="flex flex-col w-1/2 ml-2 space-y-1.5">
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
              </div></div>
              <div className="flex flex-col mt-2 space-y-1.5">
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
              <div className="flex flex-col mt-2 space-y-1.5">
              <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                      <FormItem>
                      <FormLabel>Content</FormLabel>
                      <FormControl>
                      <Textarea
                  placeholder="Write your article, editing will happen automatically at submission..."
                  {...field}
                />
                      </FormControl>
                      <FormMessage />
                      </FormItem>
                  )}
                  />
                  <p className="desc">Your username will be attached to this article as <a>{tokenise()[1]}</a></p>
              </div>
          </div>
        </div>
        <Button id="submit" className="my-4 text-white" type="submit">Add Article</Button>
        {form.formState.errors.root && (
          <div className="bg-light p-2 rounded-md">{form.formState.errors.root.message}</div>
        )}
        {form.formState.isSubmitSuccessful && (
          <div className="bg-light p-2 text-center rounded-md"> Article added successfully </div>
        )}
      </form>
      </Form>
        </div>)
    }

  return (
    <div className="font-[family-name:var(--font-futura)]">
      <ReusableDrawer page="Article" form={formBuild()}/>
    </div>
  )
}
