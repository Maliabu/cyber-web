"use server"

import { db } from "@/drizzle/db";
import { EventsTable, articlesTable, courseTable, currencyTable, enrollmentsTable, nextCourseTable, subscriptionsTable, usersTable } from "@/drizzle/schema";
import "use-server"
import { z } from "zod";
import { addArticleSchema, addCourseSchema, addEnrollmentSchema, addEventSchema, addNextCourseSchema, addSubscriptionSchema, addUserSchema, loginUserSchema } from '@/schema/formSchemas'
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

export async function uploadCourseFile(formData: FormData) {
    const file = formData.get("file") as unknown as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    try {
        await fs.writeFile(`./public/courses/${file.name}`, buffer);
    }
    catch{
        await fs.mkdir('./public/courses')
        await fs.writeFile(`./public/courses/${file.name}`, buffer);
    }
    revalidatePath("/");
}

export async function uploadArticleFile(formData: FormData) {
    const file = formData.get("file") as unknown as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    try {
        await fs.writeFile(`./public/articles/${file.name}`, buffer);
    }
    catch{
        await fs.mkdir('./public/articles')
        await fs.writeFile(`./public/articles/${file.name}`, buffer);
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

   const checkEmail = await db.query.usersTable.findFirst({
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

   uploadCourseFile(formData)
   //mostly spell check n no of arguments in payload
   // add currencies
   const currencyId = await db.query.currencyTable.findMany({
    where: eq(currencyTable.currency, data.currency1)
   })
   const mentorId = await db.query.usersTable.findMany({
    where: eq(usersTable.name, data.mentor1)
   })
   const currencyid = currencyId.map(currency=>currency.id)
   const mentorid = mentorId.map(mentor=>mentor.id)
   data.currency = currencyid[0]
   data.mentor = mentorid[0]

   await db.insert(courseTable).values({...data})

   return {error: false}
}

export async function addArticles(unsafeData: z.infer<typeof addArticleSchema>, formData: FormData) : 
Promise<{error: boolean | undefined}> {
   const {success, data} = addArticleSchema.safeParse(unsafeData)

   if (!success){
    return {error: true}
   }

   uploadEventFile(formData)

   await db.insert(articlesTable).values({...data})

   return {error: false}
}

export async function addEnrollment(unsafeData: z.infer<typeof addEnrollmentSchema>) : 
Promise<{error: boolean | undefined}> {
   const {success, data} = addEnrollmentSchema.safeParse(unsafeData)

   if (!success){
    return {error: true}
   }
   const courseId = await db.query.courseTable.findMany({
    where: eq(courseTable.title, data.course1)
   })
   const userId = await db.query.usersTable.findMany({
    where: eq(usersTable.name, data.user1)
   })
   const courseid = courseId.map(course=>course.id)
   const userid = userId.map(user=>user.id)
   data.courseId = courseid[0]
   data.userId = userid[0]

   await db.insert(enrollmentsTable).values({...data})

   return {error: false}
}

export async function addSubscription(unsafeData: z.infer<typeof addSubscriptionSchema>) : 
Promise<{error: boolean | undefined}> {
   const {success, data} = addSubscriptionSchema.safeParse(unsafeData)

   if (!success){
    return {error: true}
   }

   await db.insert(subscriptionsTable).values({...data})

   return {error: false}
}

export async function nextCourse(unsafeData: z.infer<typeof addNextCourseSchema>) : 
Promise<{error: boolean | undefined}> {
   const {success, data} = addNextCourseSchema.safeParse(unsafeData)

   if (!success){
    return {error: true}
   }
   const courseId = await db.query.courseTable.findMany({
    where: eq(courseTable.title, data.course1)
   })
   const courseid = courseId.map(course=>course.id)
   data.courseId = courseid[0]

   await db.insert(nextCourseTable).values({...data})

   return {error: false}
}
