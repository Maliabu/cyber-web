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
import { Bell, BookCheckIcon, BugPlay, CalendarCheck2, GraduationCapIcon, LayoutDashboardIcon, Moon, Paperclip, Sun, User, Users, Users2Icon, UsersIcon } from "lucide-react"
import AddUser from "../users/page"
import Logo from '@/app/images/logo2.png'
import Image from "next/image";
import AddPage from "../addPage"
import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar"
import {Chart} from "../chart"
import { eq } from "drizzle-orm"
import { usersTable } from "@/drizzle/schema"
import LogoutAdmin from "../auth/logoutAdmin"
import Admin from "../auth/admin"
import AddEvents from "../events/page"
import { EventCard } from "../events/eventCard"
import AddCourse from "../courses/page"
import { CourseCard } from "../courses/courseCard"
import { ArticlesCard } from "../articles/articlesCard"
import AddArticle from "../articles/page"
import { EnrollCard } from "../enrollment/enrollCard"
import Enroll from "../enrollment/page"
import { SubscriptionCard } from "../subscription/SubscriptionCard"
import Subscribe from "../subscription/page"
import NextCourse from "../courses/nextCourse"
import DeletePage from "../courses/deletePage"
import { auth } from "@clerk/nextjs/server"
import Logged from "../auth/loggedIn"

export default async function AdminPage() {
  
  const users  =  await db.query.usersTable.findMany()
  const mentors  =  await db.query.usersTable.findMany({
    where: eq(usersTable.userType, "mentor")
  })
  const events = await db.query.EventsTable.findMany()
  const articles = await db.query.articlesTable.findMany()
  const enrollments = await db.query.enrollmentsTable.findMany()
  const courses = await db.query.courseTable.findMany()
  const subscriptions = await db.query.subscriptionsTable.findMany()
  const currency = await db.query.currencyTable.findMany()
  const messages = await db.query.messagesTable.findMany()


  return (
    <div className="justify-stretch dark bg-darker max-h-full">
    <div className="">
      <main className="sm:flex sm:flex-row">
      <div className="grid grid-cols-1 justify-between p-8 w-[250px] transparent-dark">
        <div className="self-center">
        <a href="/">
            <Image
                aria-hidden
                src={Logo}
                alt="File icon"
                width={100}
                height={100}/></a>
        </div>
        <div className="my-10 p-3 border rounded-full w-full">
        <Logged/>
        </div>
        <div className="flex flex-row hidden justify-between border-b py-3 mt-2 rounded-sm">
          <Sun className="mr-2"/> Light Mode</div>
          <div className="flex flex-row justify-between border-b py-3 rounded-sm">
          <Moon className="mr-2" size={16}/> <p className="desc">Dark Mode</p></div>
        <div className="self-center mt-72">
          <LogoutAdmin/>
        </div>
        <footer className="py-4 mt-4">
          <div className="">
          <p className="desc">&copy;copyright.cybersecurity<br/>@{new Date().getFullYear()}</p>
          </div>
          <div className="my-4">
          <p className="desc">Privacy Policy | T&Cs</p>
        </div></footer>
      </div>
        <div className="w-full h-full ml-2 rounded-lg">
    <Tabs defaultValue="dashboard" className="">
      <TabsList>
      <TabsTrigger value="dashboard"><LayoutDashboardIcon className="mx-2 w-4 h-4"/> Dashboard</TabsTrigger>
        <TabsTrigger value="user"><Users className="mx-2 w-4 h-4"/> Users</TabsTrigger>
        <TabsTrigger value="events"><CalendarCheck2 className="mx-2 w-4 h-4"/> Events</TabsTrigger>
        <TabsTrigger value="articles"><Paperclip className="mx-2 w-4 h-4"/> Articles</TabsTrigger>
        <TabsTrigger value="courses"><BugPlay className="mx-2 w-4 h-4"/> Courses</TabsTrigger>
        <TabsTrigger value="account"><User className="mx-2 w-4 h-4"/>Admin Account</TabsTrigger>
        <TabsTrigger value="account"><Bell className="mx-3 w-4 h-4"/>{messages.length}</TabsTrigger>
      </TabsList>
      <TabsContent value="dashboard" className="tabs bg-darker px-2 rounded-lg">
        <div className="pt-4 w-full grid grid-cols-4 gap-4">
            <div className="p-8 transparent-dark rounded-2xl">
              <div className="flex flex-row justify-between">
                <div>
              <h1 className="display-1">
              { users.length}</h1><p className="desc mt-4">Users</p></div>
              <UsersIcon className="w-10 h-10 text-primary"/>
              </div></div>
            <div className="p-8 transparent-dark rounded-2xl">
            <div className="flex flex-row justify-between">
                <div>
              <h1 className="display-1">
              { mentors.length}</h1><p className="desc mt-4">Mentors</p></div>
              <Users2Icon className="w-10 h-10 text-primary"/>
              </div>
            </div>
            <div className="p-8 transparent-dark rounded-2xl ">
            <div className="flex flex-row justify-between">
                <div>
              <h1 className="display-1">
              { subscriptions.length}</h1><p className="desc mt-4">Subscriptions</p></div>
              <BookCheckIcon className="w-10 h-10 text-primary"/>
              </div>
            </div>
            <div className="p-8 transparent-dark rounded-2xl ">
            <div className="flex flex-row justify-between">
                <div>
              <h1 className="display-1">
              { enrollments.length}</h1><p className="desc mt-4">Enrollment requests</p></div>
              <GraduationCapIcon className="w-10 h-10 text-primary"/>
              </div>
            </div>
        </div>
        <div className="py-4 w-full grid grid-cols-3 gap-2">
            <div className="p-8 transparent-dark rounded-2xl">
            <div className="flex flex-row justify-between">
                <div>
              <h1 className="display-1">
              { courses.length}</h1><p className="desc mt-4">Courses</p></div>
              <BugPlay className="w-10 h-10 text-primary"/>
              </div>
            </div>
            <div className="p-8 transparent-dark rounded-2xl">
            <div className="flex flex-row justify-between">
                <div>
              <h1 className="display-1">
              { events.length}</h1><p className="desc mt-4">Events</p></div>
              <CalendarCheck2 className="w-10 h-10 text-primary"/>
              </div>
            </div>
            <div className="p-8 transparent-dark rounded-2xl">
            <div className="flex flex-row justify-between">
                <div>
              <h1 className="display-1">
              { articles.length}</h1><p className="desc mt-4">Articles</p></div>
              <Paperclip className="w-10 h-10 text-primary"/>
              </div></div>
        </div>
        <div>
            <div className=" rounded-2xl p-6">
            <h5>Statistics Analysis</h5>
              <Chart/>
            </div>
        </div>
      </TabsContent>
      <TabsContent value="account" className="tabs">
        <div>
          <Admin {...messages}/>
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
                <div className="p-4 mt-1 flex flex-row justify-between">
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
                <div className="p-4 mt-1 flex flex-row justify-between">
                  <div className="flex flex-row gap-2">
                  <AddCourse currency={currency} mentors={mentors}/>
                  <NextCourse courses={courses} /></div>
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
                <div className="p-4 mt-1 flex flex-row justify-between">
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
                    <TabsTrigger value="enrollments"><p>Enrollment Requests</p></TabsTrigger>
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
                <div className="p-4 mt-1 flex flex-row justify-between">
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
                        {subscriptions.map(subscription => (
                          <SubscriptionCard key={subscription.id} {...subscription}/>
                        ))}
                      </div>
                    ) : (
                      <AddPage page={"Subscription"} />
                    )
                  }
                <div className="p-4 mt-1 flex flex-row justify-between">
                <Subscribe/>
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
                <div className="p-4 mt-1 flex flex-row justify-between">
                <Enroll courses={courses}/>
                <p>{enrollments.length} Total Enrollments</p>
                </div>
                </TabsContent>
            </Tabs>
        </div>
      </TabsContent>
    </Tabs>
        </div>
        </main>
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
    <div className="flex flex-row justify-between">
    <Card className="w-3/4 flex flex-row justify-between items-start p-3 mt-1 ">
      <div className="w-10 h-10 mt-2">
      <Avatar>
        <AvatarImage src={path} className="rounded-full w-10 h-10"/>
        <AvatarFallback className="rounded-full transparent-dark border">{name[0].toUpperCase()}</AvatarFallback>
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
    <DeletePage id={id} submitId={username}/>
    </div>
  )
}
