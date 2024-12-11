import { Button } from "@/components/ui/button"
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
import { BookCheck, GraduationCap, LayoutDashboardIcon, Lock, Play, User, Users } from "lucide-react"
import AddUser from "../users/page"
import Logo from '@/app/images/logo.png'
import Image from "next/image";
import AddPage from "../addPage"
import { AvatarFallback, AvatarImage, Avatar } from "@radix-ui/react-avatar"

export default async function AdminPage() {
  // let token
  // if(typeof window !== 'undefined'){
  //   // now access your localStorage
  // token = localStorage.getItem("token")
  // }
  // if(token === "" || token === undefined || token === null ){
  //   redirect("/admin")
  // }
  const users  =  await db.query.usersTable.findMany()
  const events = await db.query.EventsTable.findMany()
  const articles = await db.query.articlesTable.findMany()
  const schedules = await db.query.schedulesTable.findMany()
  const enrollments = await db.query.enrollmentsTable.findMany()
  const courses = await db.query.courseTable.findMany()
  const subscriptions = await db.query.subscriptionsTable.findMany()

  return (
    <div className="justify-stretch font-[family-name:var(--font-futura)]">
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
        <Button className="text-white"><Lock/></Button></div>
      </div>
        <div className="w-full h-full ml-4 rounded-lg border">
    <Tabs defaultValue="dashboard" className="m-6 tabs">
      <TabsList>
      <TabsTrigger value="dashboard"><LayoutDashboardIcon className="mx-2 w-4 h-4"/> Dashboard</TabsTrigger>
        <TabsTrigger value="user"><Users className="mx-2 w-4 h-4"/> Users</TabsTrigger>
        <TabsTrigger value="events"><Play className="mx-2 w-4 h-4"/> Events</TabsTrigger>
        <TabsTrigger value="articles"><BookCheck className="mx-2 w-4 h-4"/> Articles</TabsTrigger>
        <TabsTrigger value="courses"><GraduationCap className="mx-2 w-4 h-4"/> Courses</TabsTrigger>
        <TabsTrigger value="account"><User className="mx-2 w-4 h-4"/>Admin Account</TabsTrigger>
      </TabsList>
      <TabsContent value="dashboard">
        <div className="py-6 w-full grid grid-cols-4 gap-4">
            <div className="p-8 border rounded-2xl">
              <h3>
              { users.length}</h3><p>Users</p></div>
            <div className="p-8 border rounded-2xl"><h3>{0}</h3><p>Mentors</p></div>
            <div className="p-8 border rounded-2xl"><h3>{schedules.length}</h3><p>Schedules</p></div>
            <div className="p-8 border rounded-2xl"><h3>{enrollments.length}</h3><p>Enrollments</p></div>
        </div>
        <div className="py-">
            <div className=" border rounded-2xl p-6">
            <h5>Statistics Analysis</h5></div>
        </div>
        <div className="py-6 w-full grid grid-cols-3 gap-4">
            <div className="p-8 border rounded-2xl"><h3>{courses.length}</h3><p>Courses</p></div>
            <div className="p-8 border rounded-2xl"><h3>{events.length}</h3><p>Events</p></div>
            <div className="p-8 border rounded-2xl"><h3>{articles.length}</h3><p>Articles</p></div>
        </div>
      </TabsContent>
      <TabsContent value="events">
                  {
                    events.length > 0 ? (
                      <div className="flex flex-row admin">
                        {users.map(user => (
                          <UserCard key={user.id} {...user}/>
                        ))}
                      </div>
                    ) : (
                      <AddPage page={"Event"} />
                    )
                  }
                <div className="p-4 flex flex-row justify-between">
                <AddUser/>
                <p>{events.length} Total Events</p>
                </div>
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
                <AddUser/>
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
                    users.length > 0 ? (
                      <div className=" admin">
                        {users.map(user => (
                          <UserCard {...user} />
                        ))}
                      </div>
                    ) : (
                      <AddPage page={"Mentor"} />
                    )
                  }
                <div className="p-4 flex flex-row justify-between">
                <AddUser/>
                <p>{users.length} Total Mentors</p>
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
    <Card className="w-3/4 flex flex-row justify-between p-3 mt-1 background-none">
      <div className="w-10 h-10 mt-2">
      <Avatar>
        <AvatarImage src='' className="rounded-full"/>
        <AvatarFallback className="rounded-full bg-muted py-3 px-4">{name[0].toUpperCase()}</AvatarFallback>
      </Avatar>
      </div>
      <p className="mt-2">{name}</p>
      <p className="mt-2">{username}</p>
      <p className="mt-2">{id}</p>
    </Card>
  )
}