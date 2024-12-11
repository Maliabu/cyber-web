"use server"

import { db } from "@/drizzle/db";
import { usersTable } from "@/drizzle/schema";
import "use-server"
import { z } from "zod";
import { addUserSchema, loginUserSchema } from "@/schema/addUserForm";
import { redirect } from "next/navigation";


export async function addUsers(unsafeData: z.infer<typeof addUserSchema>) : 
Promise<{error: boolean | undefined}> {
   const {success, data} = addUserSchema.safeParse(unsafeData)

   if (!success){
    return {error: true}
   }

   await db.insert(usersTable).values({...data})

   redirect("/admin")
}

export async function loginUser(unsafeData: z.infer<typeof loginUserSchema>) : 
Promise<{error: boolean | undefined}> {
   const {success, data} = loginUserSchema.safeParse(unsafeData)

   if (!success){
    return {error: true}
   }

   await db.query.usersTable.findFirst({
    with: {
        email: data.email,
        password: data.password,
    }
   })

   redirect("/admin")
}

export async function users():
Promise<any>{
    await db.query.usersTable.findMany()
    
}

export async function events():
Promise<any>{
    await db.query.EventsTable.findMany()
}

export async function courses():
Promise<any>{
    await db.query.courseTable.findMany()
}

export async function articles():
Promise<any>{
    await db.query.articlesTable.findMany()
}

export async function enrollments():
Promise<any>{
    await db.query.enrollmentsTable.findMany()
}

export async function schedules():
Promise<any>{
    await db.query.schedulesTable.findMany()
}

export async function subscriptions():
Promise<any>{
    await db.query.subscriptionsTable.findMany()
}