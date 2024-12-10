"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForm } from "react-hook-form"
import z, { object } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { addUsers } from "@/lib/fetch.actions"

const formSchema = z.object({
    name: z.string({required_error: "Please enter your full name.",}).min(2, {
        message: "Please enter both names separated by a space bar"
    }).max(50),
    email: z.string({required_error: "Please enter your email.",}).min(5, {
        message: "email too short"
    }).max(75).regex(/^([a-z]|[0-9])+[\.]*[\@]{1}[a-z]+[\.]{1}[a-z]{2,3}$/, {message: "please enter a correct email"}),
    userType: z.string({required_error: "Please select the type of user.",}),
    profilePicture: z.string(),
    password: z.string({required_error: "Please enter a password.",}).min(2, {
        message: "Password must be atleast 8 characters"
    }).max(50),
    confirmPassword: z.string({required_error: "Please confirm your password.",}),
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ['confirmPassword']
      });
    }
  });

export default function AddUser() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email: "",
          userType: "",
          profilePicture: "",
          password: "",
          confirmPassword: ""
        },
      })
    // const fileChanged = (e: { target: { files: any[] } }) => {
    //     form.getValues("profilePicture")?e.target.files[0]:e.target.files[0]
    // }
     
    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        //create obj
        let formData = form.getValues()
        addUsers(formData)
    }

  return (
    <div className="font-[family-name:var(--font-futura)]">
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="text-white">Add New User</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm p-16 font-[family-name:var(--font-futura)]">
          <DrawerHeader>
            <DrawerTitle>Add New User</DrawerTitle>
            <DrawerDescription>Add a New User to the table</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 w-full items-center gap-4">
            <div>
                <div className="flex flex-col space-y-1.5">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input type="text" placeholder="Full name" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="flex flex-col mt-6 space-y-1.5">
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
                <div className="flex flex-col space-y-1.5 mt-6">
                <FormField
                    control={form.control}
                    name="userType"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>User Type</FormLabel>
                        <FormControl>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger id="userType">
                                <SelectValue placeholder="User"/>
                                </SelectTrigger>
                                <SelectContent position="popper" className=" font-[family-name:var(--font-futura)]">
                                <SelectItem value="user">Normal User</SelectItem>
                                <SelectItem value="admin">Admin User</SelectItem>
                                </SelectContent>
                            </Select>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
            </div>
            <div>
                <div className="flex flex-col space-y-1.5">
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
                </div><div className="flex flex-col mt-6 space-y-1.5">
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                            <Input type="password" placeholder="Confirm Password" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="flex flex-col space-y-1.5 mt-6">
                <FormField
                    control={form.control}
                    name="profilePicture"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Profile Picture</FormLabel>
                        <FormControl
                        >
                            <Input type="file" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
            </div>
          </div>
          <Button className="my-4 text-white" type="submit">Sign Up User</Button>
        </form>
        </Form>
            {/* <div className="mt-3 h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="goal"
                    style={
                      {
                        fill: "hsl(var(--foreground))",
                        opacity: 0.9,
                      } as React.CSSProperties
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </div> */}
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
    </div>
  )
}
