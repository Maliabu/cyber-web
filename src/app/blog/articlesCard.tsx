
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import AutoUpVote from "./autoVote"
import { getMyDay, getMyMonth } from "../services/success"

// define custom props for userCard component
type ArticlecardProps = {
    id: number
    title: string
    content: string
    image: string | null
    link: string | null,
    writer: string,
    updatedAt: Date,
    votes: {}
  }
  // one time usercard component with custom prop type
  export function ArticlesCard({
    id,
    title,
    writer,
    image,
    link,
    updatedAt,
    content,
    votes
  }: ArticlecardProps){
    var upvotes
    votes!==null?upvotes=Object.values({votes}):upvotes=[]
    const path = '/articles/'+image
    console.log(votes)
    return (
      <div>
      <Card className="sm:p-6 mt-1 background-none">
      <div className="relative h-80 sm:w-92">
        <Image
            aria-hidden
            src={path}
            alt="article image"
            fill
            className="object-cover"/></div>
      <div className="">
      <div className="text-5xl tracking-tight font-bold leading-9 mt-6">{title}</div>
      <span className="mt-6 sm:float-right sm:mx-12"> {}</span>
      <p className="py-6 border-b">By {writer}</p>
      <p className="py-6 float-right"> {
      getMyDay(updatedAt.getDay())}, {getMyMonth(updatedAt.getMonth())} {updatedAt.getDate()}, {updatedAt.getFullYear()
      }</p>
      <h6 className="text-wrap lh-1 mt-20">{content}</h6>
      <div className="flex flex-row mt-16 hidden">
        <AutoUpVote id={id} upvotes={upvotes.length}/>
      </div>
        <form>
          <div className="grid w-1/2 mt-4 items-center gap-4 hidden">
            <div className="flex flex-col-4 space-y-1.5">
              <Input id="comment" placeholder="comment" />
            </div>
          </div>
        </form>
      </div>
      </Card>
      </div>
    )
  }