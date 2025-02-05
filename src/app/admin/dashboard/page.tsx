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
import { getMyDay, getMyMonth } from "@/app/services/success"
import { groupBy, grouping } from "@/app/services/services"
import Messages from "../messages/messages"
import {UserCard} from "../users/userCard"

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
    <div className="sm:px-8">
    <Tabs defaultValue="dashboard">
      <TabsList className="flex flex-row justify-between">
      <TabsTrigger value="dashboard"><LayoutDashboardIcon /> Dashboard</TabsTrigger>
        <TabsTrigger value="user" className="sm:px-14"><Users /> Users</TabsTrigger>
        <TabsTrigger value="events"><CalendarCheck2 /> Events</TabsTrigger>
        <TabsTrigger value="articles" className="sm:px-14"><Paperclip /> Articles</TabsTrigger>
        <TabsTrigger value="courses"><BugPlay /> Courses</TabsTrigger>
        <TabsTrigger value="account" className="sm:px-14"><User />Admin Account</TabsTrigger>
        <TabsTrigger value="messages"><Bell /><p className="border-l border">{messages.length}</p></TabsTrigger>
      </TabsList>
      <TabsContent value="dashboard" className=" p-4 bg-muted rounded-lg sm:tabs">
        <div className=" text-xl font-bold hidden tracking-tight">User Related data</div>
        <div className="pt-2 grid grid-cols-4 gap-2">
            <div className="p-4  bg-background rounded-2xl">
              <div className="flex flex-row justify-between">
                <div className="rounded-md">
              <div className="text-4xl font-bold tracking-tight">
              { users.length}</div><p className="desc mt-2">Users</p></div>
              <UsersIcon className="w-10 h-10 text-primary"/>
              </div></div>
            <div className="p-4  bg-background rounded-2xl">
            <div className="flex flex-row justify-between">
            <div className="rounded-md">
              <div className="text-4xl font-bold tracking-tight">
              { mentors.length}</div><p className="mt-2 desc">Mentors</p></div>
              <Users2Icon className="w-10 h-10 text-primary"/>
              </div>
            </div>
            <div className="p-4  bg-background rounded-2xl ">
            <div className="flex flex-row justify-between">
            <div className="rounded-md">
              <div className="text-4xl font-bold tracking-tight">
              { subscriptions.length}</div><p className="mt-2 desc">Subscriptions</p></div>
              <BookCheckIcon className="w-10 h-10 text-primary"/>
              </div>
            </div>
            <div className="p-4  bg-background rounded-2xl ">
            <div className="flex flex-row justify-between">
            <div className="rounded-md">
              <div className="text-4xl font-bold tracking-tight">
              { enrollments.length}</div><p className="mt-2 desc">Enrollment<br/> requests</p></div>
              <GraduationCapIcon className="w-10 h-10 text-primary"/>
              </div>
            </div>
        </div>
        <div className="pt-2 text-xl font-bold hidden tracking-tight">Service Data</div>
        <div className="py-2 w-full grid grid-cols-3 gap-2">
            <div className="p-8  bg-background rounded-2xl">
            <div className="flex flex-row justify-between">
            <div>
              <div className="text-4xl font-bold tracking-tight">
              { courses.length}</div><p className="mt-2 desc">Courses</p></div>
              <BugPlay className="w-10 h-10 text-primary"/>
              </div>
            </div>
            <div className="p-8  bg-background rounded-2xl">
            <div className="flex flex-row justify-between">
            <div>
              <div className="text-4xl font-bold tracking-tight">
              { events.length}</div><p className="mt-2 desc">Events</p></div>
              <CalendarCheck2 className="w-10 h-10 text-primary"/>
              </div>
            </div>
            <div className="p-8  bg-background rounded-2xl">
            <div className="flex flex-row justify-between">
            <div>
              <div className="text-4xl font-bold tracking-tight">
              { articles.length}</div><p className="mt-2 desc">Articles</p></div>
              <Paperclip className="w-10 h-10 text-primary"/>
              </div></div>
        </div>
        <div>
            <div className=" rounded-2xl p-8  bg-background">
            <div className="text-3xl leading-5 font-bold tracking-tight">Statistics Analysis</div>
              <Chart/>
            </div>
        </div>
      </TabsContent>
      <TabsContent value="account" className="tabs">
        <div>
          <Admin {...messages}/>
        </div>
      </TabsContent>
      <TabsContent value="messages" className="tabs">
        <div>
          <Messages {...messages}/>
        </div>
      </TabsContent>

      <TabsContent value="events">
                  {
                    events.length > 0 ? (
                      <div className="flex flex-col admin p-6">
                        {events.map(event => (
                          <EventCard key={event.id} {...event}/>
                        ))}
                      </div>
                    ) : (
                      <AddPage page={"Event"} />
                    )
                  }
                <div className="p-6 mt-1 flex flex-row justify-between">
                <AddEvents/>
                <p>{articles.length} Total Events</p>
                </div>
              </TabsContent>
                <TabsContent value="courses">
                  {
                    courses.length > 0 ? (
                      <div className="flex flex-col admin p-6">
                        {courses.map(course => (
                          <CourseCard key={course.id} {...course}/>
                        ))}
                      </div>
                    ) : (
                      <AddPage page={"Course"} />
                    )
                  }
                <div className="p-6 mt-1 flex flex-row justify-between">
                  <div className="flex flex-row gap-2">
                  <AddCourse currency={currency} mentors={mentors}/>
                  <NextCourse courses={courses} /></div>
                <p>{courses.length} Total Courses</p>
                </div>
                </TabsContent>
                <TabsContent value="articles">
                  {
                    articles.length > 0 ? (
                      <div className="flex flex-col admin p-6">
                        {articles.map(article => (
                          <ArticlesCard key={article.id} {...article}/>
                        ))}
                      </div>
                    ) : (
                      <AddPage page={"Article"} />
                    )
                  }
                <div className="p-6 mt-1 flex flex-row justify-between">
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
                      <div className="flex flex-col admin p-6">
                        {users.map(user => (
                          <UserCard key={user.id} {...user}/>
                        ))}
                      </div>
                    ) : (
                      <AddPage page={"User"} />
                    )
                  }
                <div className="p-6 mt-1 flex flex-row justify-between">
                <AddUser/>
                <p>{users.length} Total users</p>
                </div>
                </TabsContent>
                <TabsContent value="mentors">
                  {
                    mentors.length > 0 ? (
                      <div className=" admin p-6">
                        {mentors.map(user => (
                          <UserCard {...user} key={user.id} />
                        ))}
                      </div>
                    ) : (
                      <AddPage page={"Mentor"} />
                    )
                  }
                <div className="p-6 flex flex-row justify-end">
                <p>{mentors.length} Total Mentors</p>
                </div>
                </TabsContent>
                <TabsContent value="subscriptions">
                  {
                    subscriptions.length > 0 ? (
                      <div className="admin p-6">
                        {subscriptions.map(subscription => (
                          <SubscriptionCard key={subscription.id} {...subscription}/>
                        ))}
                      </div>
                    ) : (
                      <AddPage page={"Subscription"} />
                    )
                  }
                <div className="p-6 mt-1 flex flex-row justify-between">
                <Subscribe/>
                <p>{subscriptions.length} Total Subscriptions</p>
                </div>
                </TabsContent>
                <TabsContent value="enrollments">
                  {
                    enrollments.length > 0 ? (
                      <div className="admin p-6">
                        {enrollments.map(enrollment => (
                          <EnrollCard key={enrollment.id} {...enrollment}/>
                        ))}
                      </div>
                    ) : (
                      <AddPage page={"Enrollment"} />
                    )
                  }
                <div className="p-6 mt-1 flex flex-row justify-between">
                <Enroll courses={courses}/>
                <p>{enrollments.length} Total Enrollments</p>
                </div>
                </TabsContent>
            </Tabs>
        </div>
      </TabsContent>
    </Tabs>
    </div>
  )
}

