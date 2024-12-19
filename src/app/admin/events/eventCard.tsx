import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Delete } from "lucide-react"
import Image from "next/image"

// define custom props for userCard component
type EventcardProps = {
    id: number
    title: string | null
    description: string
    startDate: Date | null
    image: string
    link: string | null
  }
  // one time usercard component with custom prop type
  export function EventCard({
    id,
    title,
    description,
    startDate,
    image,
    link
  }: EventcardProps){
    const path = '/events/'+image
    return (
      <div className="flex flex-row justify-between">
      <Card className="w-5/6 grid grid-cols-4 gap-4 p-6 mt-1 mr-4 dark ">
        <div className="w-10 h-10">
            <Image src={path} width={80} height={80} alt="event image"/>
        </div>
        <div className="items-start">
          <p className="desc">Title</p>
        <p className="mt-2">{title}</p></div>
        <div>
        <p className="desc">Description</p>
        <p className="mt-2">{description}</p></div>
        <div>
        <p className="desc">Link</p>
        <p className="mt-2">{link}</p></div>
      </Card>
      <Button variant="outline" className="">Edit</Button>
        <Button variant="outline" className="">Delete</Button>
      </div>
    )
  }