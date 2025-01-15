"use client"

import { Button } from "@/components/ui/button"
import { deleteSchema } from "@/schema/formSchemas"
import { deleteCourse } from "@/server/fetch.actions"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


  export default function DeletePage(props: {id: number, submitId: string}){
    const form = useForm<z.infer<typeof deleteSchema>>({
      resolver: zodResolver(deleteSchema),
        defaultValues: {
          courseId: props.id
      },
    })
    async function onSubmit(values: z.infer<typeof deleteSchema>) {
      const app = document.getElementById(props.submitId);
      const text = 'Deleting';
      if(app !== null){
        app.innerHTML = text;
      }
      const data = await deleteCourse(values)
      if(data?.error){
        form.setError("root", {
          "message": "Course not deleted"
        })
      } else {
        if(app !== null){
          app.innerHTML = "Deleted";
        }
        window.location.reload()
      }
    }
    return (
      <div>
        <Button className="text-white ml-1" id={props.submitId} onClick={() => onSubmit({"courseId": props.id})}>Delete</Button>
        {form.formState.errors.root && (
          <div className="bg-light p-2 rounded-md">{form.formState.errors.root.message}</div>
        )}
        {form.formState.isSubmitSuccessful && (
          <div className="bg-light p-2 text-center rounded-md"> Course deleted </div>
        )}
        </div>
    )
  }