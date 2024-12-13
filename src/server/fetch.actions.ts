"use server"

import { db } from "@/drizzle/db";
import { usersTable } from "@/drizzle/schema";
import "use-server"
import { z } from "zod";
import { addUserSchema, loginUserSchema } from '@/schema/formSchemas'
import { eq } from "drizzle-orm";


export async function addUsers(unsafeData: z.infer<typeof addUserSchema>) : 
Promise<{error: boolean | undefined}> {
   const {success, data} = addUserSchema.safeParse(unsafeData)

   if (!success){
    return {error: true}
   }

   await db.insert(usersTable).values({...data})

   return {error: false}
//    redirect("/admin/dashboard")
}

export async function loginUser(unsafeData: z.infer<typeof loginUserSchema>){
   const {success, data} = loginUserSchema.safeParse(unsafeData)

   if (!success){
    return ["error"]
   }

   //goal is to get token
   let token = ''
   let encrPass = ''
   let initVector = ''
   let usertype = ''
   let email = ''
   let username = ''
   let name = ''

   let checkEmail = await db.query.usersTable.findFirst({
    where: eq(usersTable.email, data.email)
   })
   if(checkEmail && checkEmail.isActive === true){
    encrPass = checkEmail.password
    initVector = checkEmail.decInit
    token = checkEmail.token
    usertype = checkEmail.userType
    email = checkEmail.email
    username = checkEmail.username
    name = checkEmail.name
   }
   return [token, encrPass, initVector, usertype, email, username, name]
}

export async function users():
Promise<any>{
    await db.query.usersTable.findMany()
    .then((res) => {
        return res
    })
    
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