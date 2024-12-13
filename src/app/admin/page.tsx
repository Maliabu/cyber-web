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
import { Book, BookCheck, BugPlay, Calendar, CalendarCheck2, GraduationCap, LayoutDashboardIcon, Lock, Paperclip, Play, User, Users, Users2Icon, UsersIcon } from "lucide-react"
import AddUser from "./users/page"
import Logo from '@/app/images/logo.png'
import Image from "next/image";
import AddPage from "./addPage"
import { AvatarFallback, AvatarImage, Avatar } from "@radix-ui/react-avatar"
import { Chart } from "./chart"
import { eq } from "drizzle-orm"
import { usersTable } from "@/drizzle/schema"
import LogoutAdmin from "./auth/logoutAdmin"
import { tokenise } from "../services/services"
import Admin from "./auth/admin"
import AddEvent from "./events/page"
import Events from "./events/events"

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

  return (
    <div className="justify-stretch text-white bg-gradient-to-r from-slate-800 to-gray-900 font-[family-name:var(--font-futura)]">
    <div className="px-8 py-4">
      <main className="flex flex-row">
      <div className="flex flex-col justify-between rounded-lg">
        <div className="self-center">
        <a href="/">
            <Image
                aria-hidden
                src={Logo}
                alt="File icon"
                width={30}
                height={30}/></a>
        <p className="logo-text mt-2">WASCL</p>
        </div>
        <div className="self-center mt-96">
          <LogoutAdmin/>
        </div>
      </div>
        <div className="w-full h-full ml-4 rounded-lg bg-gradient-to-r from-gray-900 to-slate-800 shadow-lg">
    <Tabs defaultValue="dashboard" className="m-6 dark">
      <TabsList>
      <TabsTrigger value="dashboard"><LayoutDashboardIcon className="mx-2 w-4 h-4"/> Dashboard</TabsTrigger>
        <TabsTrigger value="user"><Users className="mx-2 w-4 h-4"/> Users</TabsTrigger>
        <TabsTrigger value="events"><Play className="mx-2 w-4 h-4"/> Events</TabsTrigger>
        <TabsTrigger value="articles"><BookCheck className="mx-2 w-4 h-4"/> Articles</TabsTrigger>
        <TabsTrigger value="courses"><GraduationCap className="mx-2 w-4 h-4"/> Courses</TabsTrigger>
        <TabsTrigger value="account"><User className="mx-2 w-4 h-4"/>Admin Account</TabsTrigger>
      </TabsList>
      <TabsContent value="dashboard" className="tabs">
        <div className="py-6 w-full grid grid-cols-4 gap-4">
            <div className="p-8 border rounded-2xl">
              <div className="flex flex-row justify-between">
                <div>
              <h1 className="display-1">
              { users.length}</h1><p className="desc mt-4">Users</p></div>
              <UsersIcon className="w-10 h-10 text-primary"/>
              </div></div>
            <div className="p-8 border rounded-2xl">
            <div className="flex flex-row justify-between">
                <div>
              <h1 className="display-1">
              { mentors.length}</h1><p className="desc mt-4">Mentors</p></div>
              <Users2Icon className="w-10 h-10 text-primary"/>
              </div>
            </div>
            <div className="p-8 border rounded-2xl shadow-lg">
            <div className="flex flex-row justify-between">
                <div>
              <h1 className="display-1">
              { schedules.length}</h1><p className="desc mt-4">Schedules</p></div>
              <Calendar className="w-10 h-10 text-primary"/>
              </div>
            </div>
            <div className="p-8 border rounded-2xl shadow-lg">
            <div className="flex flex-row justify-between">
                <div>
              <h1 className="display-1">
              { enrollments.length}</h1><p className="desc mt-4">Enrollments</p></div>
              <Book className="w-10 h-10 text-primary"/>
              </div>
            </div>
        </div>
        <div>
            <div className=" rounded-2xl p-6">
            <h5>Statistics Analysis</h5>
              <Chart/>
            </div>
        </div>
        <div className="py-6 w-full grid grid-cols-3 gap-4">
            <div className="p-8 border rounded-2xl">
            <div className="flex flex-row justify-between">
                <div>
              <h1 className="display-1">
              { courses.length}</h1><p className="desc mt-4">Courses</p></div>
              <BugPlay className="w-10 h-10 text-primary"/>
              </div>
            </div>
            <div className="p-8 border rounded-2xl">
            <div className="flex flex-row justify-between">
                <div>
              <h1 className="display-1">
              { events.length}</h1><p className="desc mt-4">Events</p></div>
              <CalendarCheck2 className="w-10 h-10 text-primary"/>
              </div>
            </div>
            <div className="p-8 border rounded-2xl">
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
        <Events/>
      </TabsContent>
                <TabsContent value="courses">
                  {
                    courses.length > 0 ? (
                      <div className="flex flex-row admin">
                        {users.map(user => (
                          <UserCard key={user.id} {...user}/>
                        ))}
                      </div>
                    ) : (
                      <AddPage page={"Course"} />
                    )
                  }
                <div className="p-4 flex flex-row justify-between">
                <AddEvent/>
                <p>{courses.length} Total Courses</p>
                </div>
                </TabsContent>
                <TabsContent value="articles">
                  {
                    articles.length > 0 ? (
                      <div className="flex flex-row admin">
                        {users.map(user => (
                          <UserCard key={user.id} {...user}/>
                        ))}
                      </div>
                    ) : (
                      <AddPage page={"Article"} />
                    )
                  }
                <div className="p-4 flex flex-row justify-between">
                <AddUser/>
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
                <div className="p-4 flex flex-row justify-between">
                <AddUser/>
                <p>{mentors.length} Total Mentors</p>
                </div>
                </TabsContent>
                <TabsContent value="subscriptions">
                  {
                    subscriptions.length > 0 ? (
                      <div className="flex flex-row admin">
                        {users.map(user => (
                          <UserCard key={user.id} {...user}/>
                        ))}
                      </div>
                    ) : (
                      <AddPage page={"Subscription"} />
                    )
                  }
                <div className="p-4 flex flex-row justify-between">
                <AddUser/>
                <p>{subscriptions.length} Total Subscriptions</p>
                </div>
                </TabsContent>
                <TabsContent value="enrollments">
                  {
                    enrollments.length > 0 ? (
                      <div className="flex flex-row admin">
                        {users.map(user => (
                          <UserCard key={user.id} {...user}/>
                        ))}
                      </div>
                    ) : (
                      <AddPage page={"Enrollment"} />
                    )
                  }
                <div className="p-4 flex flex-row justify-between">
                <AddUser/>
                <p>{enrollments.length} Total Enrollments</p>
                </div>
                </TabsContent>
                <TabsContent value="schedules">
                  {
                    users.length > 0 ? (
                      <div className="flex flex-row admin">
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
                <p>{users.length} Total Schedules</p>
                </div>
                </TabsContent>
            </Tabs>
        </div>
      </TabsContent>
    </Tabs>
        </div>
        </main>
        <footer className="px-8 py-4 grid flex flex-row mt-4 justify-between border-t">
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
  isActive,
  name,
  username,
  profilePicture
}: UsercardProps){
  return (
    <Card className="w-3/4 flex flex-row justify-between items-start p-3 mt-1 dark shadow-lg">
      <div className="w-10 h-10 mt-2">
      <Avatar>
        <AvatarImage src='' className="rounded-full"/>
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