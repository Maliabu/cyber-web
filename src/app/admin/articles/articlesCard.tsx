import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

// define custom props for userCard component
type ArticlecardProps = {
  id: number
    title: string | null
    content: string
    image: string | null
    link: string | null,
    writer: string
  }
  // one time usercard component with custom prop type
  export function ArticlesCard({
    title,
    writer,
    image,
    link
  }: ArticlecardProps){
    const path = '/events/'+image
    return (
      <div className="flex flex-row justify-between">
      <Card className="w-5/6 grid grid-cols-4 gap-4 p-6 mt-1 dark ">
        <div className="w-10 h-10">
            <Image src={path} width={80} height={80} alt="article image"/>
        </div>
        <div className="items-start">
          <p className="desc">Title</p>
        <p className="mt-2">{title}</p></div>
        <div>
          <p className="desc">Article By</p>
          <p className="mt-2 text-wrap">{writer}</p>
        </div>
        <div>
        <p className="desc">Link</p>
        <p className="mt-2">{link}</p></div>
      </Card>
      <Button variant="outline" className="">Delete</Button>
      </div>
    )
  }