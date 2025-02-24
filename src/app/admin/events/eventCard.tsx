import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import DeletePage from "./deletePage"
import { EventType } from "../dashboard/types"

  export function EventCard({
    id,
    title,
    description,
    image,
    link
  }: EventType){
    // const path = '/events/'+image
    return (
      <div className="flex flex-row justify-between">
      <Card className="w-5/6 grid grid-cols-5 gap-4 p-6 mt-1 mr-4 border-none bg-muted">
        <div className="w-10 h-10">
            <Image src={image} width={80} height={80} alt="event image" unoptimized/>
        </div>
        <div className="items-start">
          <p className="text-sm">Title</p>
        <p className="mt-2">{title}</p>
        </div>
        <div>
        <p className="text-sm">Description</p>
        <p className="mt-2">{description}</p></div>
        <div>
        <p className="text-sm">Link</p>
        <p className="mt-2 text-sm">{link}</p></div>
      </Card>
      {/* <Button variant="outline" className="">Edit</Button> */}
      <DeletePage id={id} submitId={title}/>
      </div>
    )
  }