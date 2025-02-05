"use server"

import { db } from "@/drizzle/db";
import { EventsTable, articlesTable, courseTable, currencyTable, editorImagesTable, enrollmentsTable, messagesTable, nextCourseTable, subscriptionsTable, usersTable, votesTable } from "@/drizzle/schema";
import "use-server"
import { z } from "zod";
import { addArticleSchema, addCourseSchema, addEnrollmentSchema, addEventSchema, addNextCourseSchema, addSubscriptionSchema, addUserSchema, deleteArticleSchema, deleteEventSchema, deleteSchema, deleteUserSchema, loginUserSchema, messagesSchema, updateCourseSchema, voteSchema } from '@/schema/formSchemas'
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { File } from "node:buffer";
import { promises as fs } from "node:fs";
import { sendEmail } from "@/nodemailer";

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

export async function sendHtmlEmail(email: string, title:string, name:string){
    sendEmail(email, title, name)
    return true
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

export async function  uploadEditorFile(formData: FormData) {
    const file = formData.get("file") as unknown as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const data = {
        "image": file.name
    }        

    try {
        await fs.writeFile(`./public/editor/${file.name}`, buffer);
        await db.insert(editorImagesTable).values(data)
        return {"image": data.image}
    }
    catch{
        await fs.mkdir('./public/editor')
        await fs.writeFile(`./public/editor/${file.name}`, buffer);
    }
}

export async function readEditorFiles(){
    try{
        const res = await db.query.editorImagesTable.findMany()
        const images = res.map((image) => image.image)
        const ids = res.map((ids) => ids.id)
        return images
    } catch{
        return []
    }
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

export async function updateCourse(unsafeData: z.infer<typeof updateCourseSchema>, formData: FormData, id:number) : 
Promise<{error: boolean | undefined}> {
   const {success, data} = updateCourseSchema.safeParse(unsafeData)

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

   await db.update(courseTable).set({...data}).where(eq(courseTable.id, id))

   return {error: false}
}

export async function deleteCourse(unsafeData: z.infer<typeof deleteSchema>): 
Promise<{error: boolean | undefined}>{
    const {success, data} = deleteSchema.safeParse(unsafeData)

    if (!success){
        return {error: true}
    }

    await db.delete(courseTable).where(eq(courseTable.id, data.courseId))

    return {error: false}
}

export async function deleteEvent(unsafeData: z.infer<typeof deleteEventSchema>): 
Promise<{error: boolean | undefined}>{
    const {success, data} = deleteEventSchema.safeParse(unsafeData)

    if (!success){
        return {error: true}
    }

    await db.delete(EventsTable).where(eq(EventsTable.id, data.eventId))

    return {error: false}
}
export async function deleteUser(unsafeData: z.infer<typeof deleteUserSchema>): 
Promise<{error: boolean | undefined}>{
    const {success, data} = deleteUserSchema.safeParse(unsafeData)

    if (!success){
        return {error: true}
    }

    await db.delete(usersTable).where(eq(usersTable.id, data.userId))

    return {error: false}
}
export async function deleteArticle(unsafeData: z.infer<typeof deleteArticleSchema>): 
Promise<{error: boolean | undefined}>{
    const {success, data} = deleteArticleSchema.safeParse(unsafeData)

    if (!success){
        return {error: true}
    }

    await db.delete(articlesTable).where(eq(articlesTable.id, data.articleId))

    return {error: false}
}

export async function deleteEditorFile(image: string): 
Promise<{error: boolean | undefined}>{
    const imageToDelete = await db.query.editorImagesTable.findFirst({
        where: eq(editorImagesTable.image, image)
    })
    if(imageToDelete !== undefined){
        const imageId = imageToDelete?.id
        await db.delete(editorImagesTable).where(eq(editorImagesTable.id, imageId))
        return {error: false}
    }

    return {error: true}
}

export async function addArticles(unsafeData: z.infer<typeof addArticleSchema>, formData: FormData) : 
Promise<{error: boolean | undefined}> {
   const {success, data} = addArticleSchema.safeParse(unsafeData)

   if (!success){
    return {error: true}
   }

   uploadArticleFile(formData)

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
   const courseid = courseId.map(course=>course.id)
   data.courseId = courseid[0]
   console.log({...data})

   await db.insert(enrollmentsTable).values({...data})

   return {error: false}
}

export async function addEnrollmentRequest(courseId: number, email: string) : 
Promise<{error: boolean}> {

   if (courseId === 0 && email === ""){
    return {error: true}
   }
   const data = {
    courseId: courseId,
    email: email
   }
   // user cannot enroll more than once for each course
   let checkEnrollment = await db.query.enrollmentsTable.findMany({
    where: eq(enrollmentsTable.email, data.email) && eq(enrollmentsTable.courseId, data.courseId)
   })
   if(checkEnrollment.length === 0){
        await db.insert(enrollmentsTable).values({...data})
        return {error: false}
    } else{
        return {error: true}
    }
}

export async function addSubscription(unsafeData: z.infer<typeof addSubscriptionSchema>) : 
Promise<{error: boolean | undefined, message: string}> {
   const {success, data} = addSubscriptionSchema.safeParse(unsafeData)

   if (!success){
    return {error: true, message: "successful"}
   }
   // check email isnt repeated
   let checkEmail = await db.query.subscriptionsTable.findMany(
    {
        where: eq(subscriptionsTable.email, data.email)
    }
   )
   if(checkEmail.length === 0){
    await db.insert(subscriptionsTable).values({...data})
    return {error: false, message: "Subscription successful"}
   } else {
    return {error: true, message: "User already subscribed"}
   }
}

export async function addMessages(unsafeData: z.infer<typeof messagesSchema>) : 
Promise<{error: boolean | undefined}> {
   const {success, data} = messagesSchema.safeParse(unsafeData)

   if (!success){
    return {error: true}
   }

   await db.insert(messagesTable).values({...data})

   return {error: false}
}

export async function upvote(unsafeData: z.infer<typeof voteSchema>) : 
Promise<{error: boolean | undefined}> {
   const {success, data} = voteSchema.safeParse(unsafeData)

   if (!success){
    return {error: true}
   }
   // no 2 same upvotes for same article and email
   let checkEmail = await db.query.votesTable.findMany({
    where: eq(votesTable.article, data.article) && eq(votesTable.email, data.email)
   })
   if(checkEmail.length === 0)
    {
    await db.insert(votesTable).values({...data})
    return {error: false}
    } else{
        return {error: true}
    }
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
