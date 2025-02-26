import Footer from "../routes/footer"
import Menu from "../routes/menu"
import { db } from "@/drizzle/db"
import {ArticlesTabs} from "./articlesTabs"
import { articlesTable } from "@/drizzle/schema"
import { auth, currentUser } from "@clerk/nextjs/server"
import Image from "next/image"
import Blogger from '../images/blog.png'

export default async function Blog(){
  const userId = await currentUser()
  const email = userId?.primaryEmailAddress?.emailAddress || ''

  const votes =  await db.select().from(articlesTable)

  function blog(){
    if(votes.length == 0){
      return <div>
        <Image unoptimized src={Blogger} alt="blog image"/>
      </div>
    } else {
      return <ArticlesTabs articles={votes} email={email}/>
    }
  }

    return(
        <div>
        <Menu/>
        <div className="sm:p-6">
          {blog()}
        </div>
        <Footer/>
        </div>
    )
}