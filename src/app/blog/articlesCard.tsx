"use client"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import AutoUpVote from "./autoVote"
import { getMyDay, getMyMonth } from "../services/success"
import parse from 'html-react-parser'
import { ArticleVotesComments } from "../admin/dashboard/types"
import useSWR from "swr"
import { date, fetcher } from "../services/services"
import { Loader2, MessageCircle, MessageCircleDashed } from "lucide-react"
import Comment from "./comment"
import Reply from "./reply"

type ArticleCardProp = {
  id: number
  title: string
  writer: string
  image: string | null
  link: string | null
  updatedAt: Date
  createdAt: Date
  content: string
  email: string
}

  export function ArticlesCard({
    id,
    title,
    writer,
    image,
    link,
    updatedAt,
    createdAt,
    content,
    email
  }: ArticleCardProp){

    let articleId = id
    let article: ArticleVotesComments[] = []
    const { data: articles, error: articleError } = useSWR(
      articleId ? `/api/articles/${articleId}` : null, fetcher)
    if(!articles){
      return <div><Loader2 className="animate-spin"/></div>
    }
    if(article){
        article = articles
        // return <div>Loading courses...</div>
      }
    let articleSelect = article[0]


    const upvotes = article[0].votes
    const comments = article[0].comments

    const path = image!==null?image:''
    return (
      <div>
      <Card className="sm:p-6 mt-1 sm:mr-6 background-none" id={title}>
      <div className="relative h-80 sm:w-92">
        <Image
            src={path}
            alt="article image"
            fill
            unoptimized
            className="object-cover"/></div>
      <div className="p-6">
      <div className="text-5xl tracking-tight font-bold leading-10 mt-6 capitalize">{title}</div>
      <span className="mt-6 sm:float-right sm:mx-12"> {}</span>
      <p className="py-4 border-b text-sm">: {writer}</p>
      <p className="py-4 float-right text-sm"> {
      getMyDay(updatedAt.getDay())}, {getMyMonth(updatedAt.getMonth())} {updatedAt.getDate()}, {updatedAt.getFullYear()
      }</p>
      <div className="text-wrap lh-1 mt-20 prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none">{parse(content)}</div>
      <div className="flex flex-row mt-6">
        <AutoUpVote id={id} upvotes={upvotes.length} email={email}/>
        {/* <DownVote id={id} upvotes={upvotes.length} email={email}/> */}
      </div>
            <div className="my-2">
              <Comment id={id} email={email} />
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <div className="text-sm">{comments.length} comments</div>
            <div className="p-6 bg-white rounded-lg mt-2 admin">
              {
                comments.map(comment => (
                  <div key={comment.id} className="text-sm p-6 border-t mt-4 article">
                    <div className="flex flex-row gap-8 justify-between">
                      <div className="w-10 h-10 rounded-full bg-muted grid items-center justify-center">C</div>
                      <div>
                        <div>{comment.comment}</div>
                        <div className="text-xs text-muted-foreground float-right">{comment.email} | {date(comment.createdAt.toString())}</div>
                        </div>
                      </div>
                  <Reply id={id} email={email} comment={comment.id}/>
                  <div>
                    {comment.replies.map(reply => (
                      <div className="p-4 float-right w-3/4 border-l mt-2" key={reply.id}>
                      <div>{reply.reply}</div>
                      <div className="text-xs text-muted-foreground float-right">{reply.email} | {date(reply.createdAt.toString())}</div>
                      </div>
                    ))}
                  </div>
                  </div>
                ))
              }
            </div>
          </div>
      </div>
      </Card>
      </div>
    )
  }