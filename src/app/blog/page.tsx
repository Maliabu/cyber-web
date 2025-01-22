import Footer from "../routes/footer"
import Menu from "../routes/menu"
import { db } from "@/drizzle/db"
import ArticlesTabs from "./articlesTabs"
import { articlesTable, votesTable } from "@/drizzle/schema"
import { eq, isNotNull } from "drizzle-orm"

export default async function Blog(){
  // const articles = await db.select().from(articlesTable)
  const votes =  await db.select().from(articlesTable).leftJoin(votesTable, 
    eq(articlesTable.id, votesTable.article)
  )
  // lets reduce the votes
  // console.log(articles)
    return(
        <div>
        <Menu/>
        <div className="p-6">
          <ArticlesTabs {...votes}/>
        </div>
        <Footer/>
        </div>
    )
}