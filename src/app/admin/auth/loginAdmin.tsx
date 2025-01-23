"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { loginUser } from "@/server/fetch.actions"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { redirect } from "next/navigation"
import { handleDecryption, togglePasswordVisibility } from "@/app/services/services"
import { Eye, EyeOff } from "lucide-react"
import { loginUserSchema } from "@/schema/formSchemas"

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
        const app = document.getElementById('submit');
        const text = 'processing';
        if(app !== null){
          app.innerHTML = text;
        }
          const data = await loginUser(values)
          const first = data[0]
          const second = data[1]
          const third = data[2]
          const forth = data[3]
          const name = data[6]
          const email = data[4]
          const username = data[5]

        // decrypt password n compare
        const dec = handleDecryption(second, third)
        dec.then((res) => {
            if(res === undefined){
                if(app !== null){
                    app.innerHTML = "Login";
                }
                form.setError("root", {
                    "message": "Invalid login credentails"
                })
            }
            else if(res.toString() === values.password && forth === 'admin'){
                if(app !== null){
                    app.innerHTML = "Successful";
                }
                form.setError("root", {
                "message": "Loggin you in..."
                })
                localStorage.setItem("token", first)
                localStorage.setItem("name", name)
                localStorage.setItem("username", username)
                localStorage.setItem("email", email)
                redirect("/admin/dashboard")
            } 
            else if(res.toString() !== values.password){
                form.setError("root", {
                "message": "invalid login credentials"
                })
            }else if(forth !== 'admin'){
                form.setError("root", {
                "message": "unauthorised user login"
                })
            }else{
                form.setError("root", {
                "message": "contact administration"
                })
            }
            
        })
        }
    return(
            <div className="sm:my-8 transparent-dark p-4 shadow-lg rounded-lg">
                <div>
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid w-full items-center">
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
                        <div className="">
                            <div className="">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" id="password" placeholder="Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <div className="flex justify-between">
                                <p className="desc mt-2" id="see" onClick={() => togglePasswordVisibility()}><EyeOff/> Toggle password</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button className="my-4 text-white w-full" id="submit" type="submit">Login</Button>
                    {form.formState.errors.root && (
                        <div className="bg-light p-2 text-center rounded-md">{form.formState.errors.root.message}</div>
                    )}
                    </form>
                    </Form>
                </div>
            </div>
    )
}