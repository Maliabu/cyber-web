"use client"

import { Button } from "@/components/ui/button"
import { deleteEventSchema, deleteSchema, deleteUserSchema } from "@/schema/formSchemas"
import { deleteCourse, deleteEvent, deleteUser } from "@/server/fetch.actions"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


  export default function DeletePage(props: {id: number, submitId: string}){
    const form = useForm<z.infer<typeof deleteUserSchema>>({
      resolver: zodResolver(deleteUserSchema),
        defaultValues: {
          userId: props.id
      },
    })
    async function onSubmit(values: z.infer<typeof deleteUserSchema>) {
      const app = document.getElementById(props.submitId);
      const text = 'Deleting';
      if(app !== null){
        app.innerHTML = text;
      }
      const data = await deleteUser(values)
      if(data?.error){
        form.setError("root", {
          "message": "User not deleted"
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
        <Button className="text-white ml-1" id={props.submitId} onClick={() => onSubmit({"userId": props.id})}>Delete</Button>
        {form.formState.errors.root && (
          <div className="bg-light p-2 rounded-md">{form.formState.errors.root.message}</div>
        )}
        {form.formState.isSubmitSuccessful && (
          <div className="bg-light p-2 text-center rounded-md"> User deleted </div>
        )}
        </div>
    )
  }