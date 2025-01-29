import { Card } from "@/components/ui/card"
import Image from "next/image"
import DeletePage from "./deletePage"
import EditCourse from "./editPage"
import { db } from "@/drizzle/db"
import { eq } from "drizzle-orm"
import { courseTable, usersTable } from "@/drizzle/schema"

// define custom props for userCard component
type CoursecardProps = {
    id: number
    title: string
    description: string
    image: string | null
  }
  // one time usercard component with custom prop type
  export async function CourseCard({
    id,
    title,
    description,
    image,
  }: CoursecardProps){
    const currency = await db.query.currencyTable.findMany()
    const mentors  =  await db.query.usersTable.findMany({
      where: eq(usersTable.userType, "mentor")
    })
    async function selected(id: number){
      const course = await db.query.courseTable.findFirst(
        {
          where: eq(courseTable.id, id)
        }
      )
      let courseSelect = course || {title: '', id: 0, description: '', courseOutline: ''}
      return <EditCourse currency={currency} mentors={mentors} course={courseSelect}/>
    }

    const path = '/courses/'+image
    return (
      <div className="flex flex-row justify-between">
      <Card className="grid grid-cols-3 gap-2 p-2 mt-1 w-3/4 border-none bg-muted">
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
      <div className="flex flex-row gap-1">
        <DeletePage id={id} submitId={title}/>
        {selected(id)}
        </div>
      </div>
    )
  }