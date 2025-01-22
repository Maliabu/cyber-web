"use server"

import { currentUser } from "@clerk/nextjs/server"
import { db } from "@/drizzle/db"
import { eq } from "drizzle-orm"
import { votesTable } from "@/drizzle/schema"

export default async function Vote(){
    let user = await currentUser()
    let userEmail = user?.primaryEmailAddress?.emailAddress || ""
    return userEmail
}

export async function UpVotes(id: number){
    const upvotes = await db.query.votesTable.findMany({
        where: eq(votesTable.id, id) && eq(votesTable.vote, 1)
      })
    return upvotes.length
}