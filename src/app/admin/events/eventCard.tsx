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
    return (
      <Card className="w-3/4 flex flex-row justify-between items-start p-3 mt-1 dark ">
        <div className="w-10 h-10 mt-2">
            <Image src={image} width={80} height={80} alt="event image"/>
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