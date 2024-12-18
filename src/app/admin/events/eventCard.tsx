import { Card } from "@/components/ui/card"
import Image from "next/image"

// define custom props for userCard component
type EventcardProps = {
    title: string | null
    description: string
    startDate: Date | null
    image: string
    link: string | null
  }
  // one time usercard component with custom prop type
  export function EventCard({
    title,
    description,
    startDate,
    image,
    link
  }: EventcardProps){
    const path = '/events/'+image
    return (
      <Card className=" grid grid-cols-4 gap-4 p-6 mt-1 dark ">
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
    )
  }