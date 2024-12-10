"use server"

import { token, username } from "@/app/services/services";
import { db } from "@/drizzle/db";
import { usersTable } from "@/drizzle/schema";
import { redirect } from "next/dist/server/api-utils";
import { NextApiResponse } from "next";


export const addUsers = async(form: { name: string; email: string; password: string; profilePicture: string; userType: string; confirmPassword: string; }) => {
    try {
        let res: NextApiResponse
        await db.insert(usersTable).values({
            name: form.name,
            password: form.password,
            token: token(), 
            email: form.email, 
            username: username(form.name)[0]+username(form.name[1]),
            profilePicture: form.profilePicture,
            userType: form.userType
        })
        .then((response) => {
            response?.fields?redirect(res, "/admin"):null
        });
    } catch(error) {
        if(error){
            return {
                "message": "server error: user not added"
            }
        }
    }
}