import Footer from "../routes/footer"
import Menu from "../routes/menu"
import { db } from "@/drizzle/db"
import {ArticlesTabs} from "./articlesTabs"
import { articlesTable } from "@/drizzle/schema"
import { auth, currentUser } from "@clerk/nextjs/server"

export default async function Blog(){
  const userId = await currentUser()
  const email = userId?.primaryEmailAddress?.emailAddress || ''

  const votes =  await db.select().from(articlesTable)

    return(
        <div>
        <Menu/>
        <div className="sm:p-6">
          <ArticlesTabs articles={votes} email={email}/>
        </div>
        <Footer/>
        </div>
    )
}