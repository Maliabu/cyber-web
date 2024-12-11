"use client"

import { useForm } from "react-hook-form"
import { loginUserSchema } from "@/schema/addUserForm"
import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { loginUser } from "@/server/fetch.actions"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { z } from "zod"

export default function LoginAdmin(){

    const form = useForm<z.infer<typeof loginUserSchema>>({
        resolver: zodResolver(loginUserSchema),
          defaultValues: {
            email: "",
            password: "",
        },
      })
       
      async function onSubmit(values: z.infer<typeof loginUserSchema>) {
          //create obj
          console.log(values)
          const data = await loginUser(values)
          if(data?.error){
            form.setError("root", {
              "message": "user not added"
            })
          }
          form.reset(values)
          location.reload()
      }
    return(
            <div className="my-12">
                <div>
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid w-full items-center gap-4">
                        <div>
                            <div className="">
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
                        <div>
                            <div className="">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div>
                        </div>
                    </div>
                    <Button className="my-4 text-white" type="submit">Login</Button>
                    {form.formState.errors.root && (
                        <div className="bg-light p-2 rounded-me">{form.formState.errors.root.message}</div>
                    )}
                    </form>
                    </Form>
                </div>
            </div>
    )
}