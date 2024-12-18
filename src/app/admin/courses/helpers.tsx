import { db } from "@/drizzle/db";
import { usersTable, currencyTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function currencies(){
    await db.query.currencyTable.findMany()}

export async function mentors(){
    return await db.query.usersTable.findMany({
    where: eq(usersTable.userType, "mentor")
})}