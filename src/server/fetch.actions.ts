"use server"

import { db } from "@/drizzle/db";
import { EventsTable, courseTable, usersTable } from "@/drizzle/schema";
import "use-server"
import { z } from "zod";
import { addCourseSchema, addEventSchema, addUserSchema, loginUserSchema } from '@/schema/formSchemas'
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { File } from "node:buffer";
import { promises as fs } from "node:fs";


export async function addUsers(unsafeData: z.infer<typeof addUserSchema>, formData: FormData) : 
Promise<{error: boolean | undefined}> {
   const {success, data} = addUserSchema.safeParse(unsafeData)

   if (!success){
    return {error: true}
   }

   uploadFile(formData)

   await db.insert(usersTable).values({...data})

   return {error: false}
//    redirect("/admin/dashboard")
}

export async function uploadFile(formData: FormData) {
    const file = formData.get("file") as unknown as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    try {
        await fs.writeFile(`./public/profilePictures/${file.name}`, buffer);
    }
    catch{
        await fs.mkdir('./public/profilePictures')
        await fs.writeFile(`./public/profilePictures/${file.name}`, buffer);
    }
    revalidatePath("/");
}

export async function uploadEventFile(formData: FormData) {
    const file = formData.get("file") as unknown as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    try {
        await fs.writeFile(`./public/events/${file.name}`, buffer);
    }
    catch{
        await fs.mkdir('./public/events')
        await fs.writeFile(`./public/events/${file.name}`, buffer);
    }
    revalidatePath("/");
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

export async function addEvents(unsafeData: z.infer<typeof addEventSchema>, formData: FormData) : 
Promise<{error: boolean | undefined}> {
   const {success, data} = addEventSchema.safeParse(unsafeData)

   if (!success){
    return {error: true}
   }

   uploadEventFile(formData)

   await db.insert(EventsTable).values({...data})

   return {error: false}
}

export async function addCourse(unsafeData: z.infer<typeof addCourseSchema>, formData: FormData) : 
Promise<{error: boolean | undefined}> {
   const {success, data} = addCourseSchema.safeParse(unsafeData)

   if (!success){
    return {error: true}
   }

   uploadEventFile(formData)
   //mostly spell check n no of arguments in payload
   // add currencies
   await db.insert(courseTable).values({...data})

   return {error: false}
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

function then(arg0: () => any) {
    throw new Error("Function not implemented.");
}
