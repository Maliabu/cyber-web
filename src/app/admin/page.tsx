import {
  Card,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { db } from "@/drizzle/db"
import { BugPlay, Calendar, CalendarCheck2, GraduationCapIcon, LayoutDashboardIcon, Paperclip, User, Users, Users2Icon, UsersIcon } from "lucide-react"
import AddUser from "./users/page"
import Logo from '@/app/images/logo1.png'
import Image from "next/image";
import AddPage from "./addPage"
import { AvatarFallback, AvatarImage, Avatar } from "@radix-ui/react-avatar"
import { Chart } from "./chart"
import { eq } from "drizzle-orm"
import { usersTable } from "@/drizzle/schema"
import LogoutAdmin from "./auth/logoutAdmin"
import Admin from "./auth/admin"
import AddEvents from "./events/page"
import { EventCard } from "./events/eventCard"
import AddCourse from "./courses/page"
import { CourseCard } from "./courses/courseCard"
import { ArticlesCard } from "./articles/articlesCard"
import AddArticle from "./articles/page"
import { EnrollCard } from "./enrollment/enrollCard"
import Enroll from "./enrollment/page"

export default async function AdminPage() {
  
  const users  =  await db.query.usersTable.findMany()
  const mentors  =  await db.query.usersTable.findMany({
    where: eq(usersTable.userType, "mentor")
  })
  const events = await db.query.EventsTable.findMany()
  const articles = await db.query.articlesTable.findMany()
  const schedules = await db.query.schedulesTable.findMany()
  const enrollments = await db.query.enrollmentsTable.findMany()
  const courses = await db.query.courseTable.findMany()
  const subscriptions = await db.query.subscriptionsTable.findMany()
  const currency = await db.query.currencyTable.findMany()

  return (
    <div className="justify-stretch font-[family-name:var(--font-futura)]">
    <div className="px-8 py-4">
      <main className="flex flex-row">
      <div className="flex flex-col justify-between rounded-lg bg-muted p-4">
        <div className="self-center">
        <a href="/">
            <Image
                aria-hidden
                src={Logo}
                alt="File icon"
                width={100}
                height={100}/></a>
        </div>
        <div className="self-center mt-96">
          <LogoutAdmin/>
        </div>
      </div>
        <div className="w-full h-full ml-2 rounded-lg ">
    <Tabs defaultValue="dashboard" className="">
      <TabsList>
      <TabsTrigger value="dashboard"><LayoutDashboardIcon className="mx-2 w-4 h-4"/> Dashboard</TabsTrigger>
        <TabsTrigger value="user"><Users className="mx-2 w-4 h-4"/> Users</TabsTrigger>
        <TabsTrigger value="events"><CalendarCheck2 className="mx-2 w-4 h-4"/> Events</TabsTrigger>
        <TabsTrigger value="articles"><Paperclip className="mx-2 w-4 h-4"/> Articles</TabsTrigger>
        <TabsTrigger value="courses"><BugPlay className="mx-2 w-4 h-4"/> Courses</TabsTrigger>
        <TabsTrigger value="account"><User className="mx-2 w-4 h-4"/>Admin Account</TabsTrigger>
      </TabsList>
      <TabsContent value="dashboard" className="tabs">
        <div className="py-6 w-full grid grid-cols-4 gap-4">
            <div className="p-8 bg-muted rounded-2xl">
              <div className="flex flex-row justify-between">
                <div>
              <h1 className="display-1">
              { users.length}</h1><p className="desc mt-4">Users</p></div>
              <UsersIcon className="w-10 h-10 text-primary"/>
              </div></div>
            <div className="p-8 bg-muted rounded-2xl">
            <div className="flex flex-row justify-between">
                <div>
              <h1 className="display-1">
              { mentors.length}</h1><p className="desc mt-4">Mentors</p></div>
              <Users2Icon className="w-10 h-10 text-primary"/>
              </div>
            </div>
            <div className="p-8 bg-muted rounded-2xl ">
            <div className="flex flex-row justify-between">
                <div>
              <h1 className="display-1">
              { schedules.length}</h1><p className="desc mt-4">Schedules</p></div>
              <Calendar className="w-10 h-10 text-primary"/>
              </div>
            </div>
            <div className="p-8 bg-muted rounded-2xl ">
            <div className="flex flex-row justify-between">
                <div>
              <h1 className="display-1">
              { enrollments.length}</h1><p className="desc mt-4">Enrollments</p></div>
              <GraduationCapIcon className="w-10 h-10 text-primary"/>
              </div>
            </div>
        </div>
        <div>
            <div className=" rounded-2xl p-6 bg-muted">
            <h5>Statistics Analysis</h5>
              <Chart/>
            </div>
        </div>
        <div className="py-6 w-full grid grid-cols-3 gap-4">
            <div className="p-8 bg-muted rounded-2xl">
            <div className="flex flex-row justify-between">
                <div>
              <h1 className="display-1">
              { courses.length}</h1><p className="desc mt-4">Courses</p></div>
              <BugPlay className="w-10 h-10 text-primary"/>
              </div>
            </div>
            <div className="p-8 bg-muted rounded-2xl">
            <div className="flex flex-row justify-between">
                <div>
              <h1 className="display-1">
              { events.length}</h1><p className="desc mt-4">Events</p></div>
              <CalendarCheck2 className="w-10 h-10 text-primary"/>
              </div>
            </div>
            <div className="p-8 bg-muted rounded-2xl">
            <div className="flex flex-row justify-between">
                <div>
              <h1 className="display-1">
              { articles.length}</h1><p className="desc mt-4">Articles</p></div>
              <Paperclip className="w-10 h-10 text-primary"/>
              </div></div>
        </div>
      </TabsContent>
      <TabsContent value="account" className="tabs">
        <div>
          <Admin/>
        </div>
      </TabsContent>
      <TabsContent value="events">
                  {
                    events.length > 0 ? (
                      <div className="flex flex-col admin">
                        {events.map(event => (
                          <EventCard key={event.id} {...event}/>
                        ))}
                      </div>
                    ) : (
                      <AddPage page={"Event"} />
                    )
                  }
                <div className="p-4 flex flex-row justify-between">
                <AddEvents/>
                <p>{articles.length} Total Events</p>
                </div>
      </TabsContent>
                <TabsContent value="courses">
                  {
                    courses.length > 0 ? (
                      <div className="flex flex-col admin">
                        {courses.map(course => (
                          <CourseCard key={course.id} {...course}/>
                        ))}
                      </div>
                    ) : (
                      <AddPage page={"Course"} />
                    )
                  }
                <div className="p-4 flex flex-row justify-between">
                  <AddCourse currency={currency} mentors={mentors}/>
                <p>{courses.length} Total Courses</p>
                </div>
                </TabsContent>
                <TabsContent value="articles">
                  {
                    articles.length > 0 ? (
                      <div className="flex flex-col admin">
                        {articles.map(article => (
                          <ArticlesCard key={article.id} {...article}/>
                        ))}
                      </div>
                    ) : (
                      <AddPage page={"Article"} />
                    )
                  }
                <div className="p-4 flex flex-row justify-between">
                <AddArticle/>
                <p>{articles.length} Total Articles</p>
                </div>
                </TabsContent>
      <TabsContent value="user">
        <div>
            <Tabs defaultValue="users">
                <TabsList className="flex flex-row justify-between">
                    <TabsTrigger value="users"><p>Users</p></TabsTrigger>
                    <TabsTrigger value="mentors"><p>Mentors</p></TabsTrigger>
                    <TabsTrigger value="subscriptions"><p>Subscriptions</p></TabsTrigger>
                    <TabsTrigger value="enrollments"><p>Enrollments</p></TabsTrigger>
                    <TabsTrigger value="schedules"><p>Schedules</p></TabsTrigger>
                </TabsList>
                <TabsContent value="users">
                  {
                    users.length > 0 ? (
                      <div className="flex flex-col admin">
                        {users.map(user => (
                          <UserCard key={user.id} {...user}/>
                        ))}
                      </div>
                    ) : (
                      <AddPage page={"User"} />
                    )
                  }
                <div className="p-4 flex flex-row justify-between">
                <AddUser/>
                <p>{users.length} Total users</p>
                </div>
                </TabsContent>
                <TabsContent value="mentors">
                  {
                    mentors.length > 0 ? (
                      <div className=" admin">
                        {mentors.map(user => (
                          <UserCard {...user} key={user.id} />
                        ))}
                      </div>
                    ) : (
                      <AddPage page={"Mentor"} />
                    )
                  }
                <div className="p-4 flex flex-row justify-end">
                <p>{mentors.length} Total Mentors</p>
                </div>
                </TabsContent>
                <TabsContent value="subscriptions">
                  {
                    subscriptions.length > 0 ? (
                      <div className="admin">
                        {users.map(user => (
                          <UserCard key={user.id} {...user}/>
                        ))}
                      </div>
                    ) : (
                      <AddPage page={"Subscription"} />
                    )
                  }
                <div className="p-4 flex flex-row justify-end">
                <p>{subscriptions.length} Total Subscriptions</p>
                </div>
                </TabsContent>
                <TabsContent value="enrollments">
                  {
                    enrollments.length > 0 ? (
                      <div className="admin">
                        {enrollments.map(enrollment => (
                          <EnrollCard key={enrollment.id} {...enrollment}/>
                        ))}
                      </div>
                    ) : (
                      <AddPage page={"Enrollment"} />
                    )
                  }
                <div className="p-4 flex flex-row justify-between">
                <Enroll courses={courses} users={users}/>
                <p>{enrollments.length} Total Enrollments</p>
                </div>
                </TabsContent>
                <TabsContent value="schedules">
                  {
                    schedules.length > 0 ? (
                      <div className="admin">
                        {users.map(user => (
                          <UserCard key={user.id} {...user}/>
                        ))}
                      </div>
                    ) : (
                      <AddPage page={"Schedule"} />
                    )
                  }
                <div className="p-4 flex flex-row justify-between">
                <AddUser/>
                <p>{schedules.length} Total Schedules</p>
                </div>
                </TabsContent>
            </Tabs>
        </div>
      </TabsContent>
    </Tabs>
        </div>
        </main>
        <footer className="px-8 py-4 grid flex flex-row mt-4 justify-between bg-muted-t">
          <div className="row-start-4">
          <p>&copy;copyright.cybersecurity@{new Date().getFullYear()}</p>
          </div>
          <div className="row-start-4">
          <p>Privacy Policy | T&Cs</p>
        </div></footer>
    </div></div>
  )
}

// define custom props for userCard component
type UsercardProps = {
  id: number
  isActive: boolean
  name: string
  username: string
  profilePicture: string | null
}
// one time usercard component with custom prop type
function UserCard({
  id, 
  name,
  username,
  profilePicture
}: UsercardProps){
  const path = "/profilePictures/"+profilePicture
  return (
    <Card className="w-3/4 flex flex-row justify-between items-start p-3 mt-1 dark ">
      <div className="w-10 h-10 mt-2">
      <Avatar>
        <AvatarImage src={path} className="rounded-full w-10 h-10"/>
        <AvatarFallback className="rounded-full bg-muted py-3 px-4">{name[0].toUpperCase()}</AvatarFallback>
      </Avatar>
      </div>
      <div className="items-start">
        <p className="desc">Name</p>
      <p className="mt-2">{name}</p></div>
      <div>
      <p className="desc">username</p>
      <p className="mt-2">{username}</p></div>
      <div>
      <p className="desc">id</p>
      <p className="mt-2">{id}</p></div>
    </Card>
  )
}
