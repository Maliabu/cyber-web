import { Card } from "@/components/ui/card"
import Image from "next/image"

// define custom props for userCard component
type CoursecardProps = {
    title: string | null
    description: string
    image: string | null
  }
  // one time usercard component with custom prop type
  export function CourseCard({
    title,
    description,
    image,
  }: CoursecardProps){
    const path = '/courses/'+image
    return (
      <Card className="grid grid-cols-3 gap-4 p-6 mt-1 dark ">
        <div className="w-10 h-10">
            <Image src={path} width={80} height={80} alt="course image"/>
        </div>
        <div className="items-start">
          <p className="desc">Title</p>
        <p className="mt-2">{title}</p></div>
        <div>
        <p className="desc">Description</p>
        <p className="mt-2">{description}</p></div>
        <div></div>
      </Card>
    )
  }