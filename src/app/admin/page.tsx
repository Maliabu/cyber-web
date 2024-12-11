import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { db } from "@/drizzle/db"
import { BookCheck, GraduationCap, LayoutDashboardIcon, Lock, Play, User, Users } from "lucide-react"
import AddUser from "./addUser"
import Logo from '../images/logo.png'
import Image from "next/image";
import AddPage from "./addPage"
import { redirect } from "next/navigation"

export default async function AdminPage() {
  let token
  if(typeof window !== 'undefined'){
    // now access your localStorage
  token = localStorage.getItem("token")
  }
  if(token === "" || token === undefined || token === null ){
    redirect("/admin/auth")
  }
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
                        {events.map(user => (
                          <UserCard id={""} isActive={false} name={""} username={""} {...event}></UserCard>
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
                        {courses.map(user => (
                          <UserCard id={""} isActive={false} name={""} username={""} {...users}></UserCard>
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
                        {articles.map(user => (
                          <UserCard id={""} isActive={false} name={""} username={""} {...users}></UserCard>
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
                      <div className="flex flex-row admin">
                        {users.map(user => (
                          <UserCard id={""} isActive={false} name={""} username={""} {...users}></UserCard>
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
                      <div className="flex flex-row admin">
                        {users.map(user => (
                          <UserCard id={""} isActive={false} name={""} username={""} {...users}></UserCard>
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
                        {subscriptions.map(user => (
                          <UserCard id={""} isActive={false} name={""} username={""} {...users}></UserCard>
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
                        {enrollments.map(user => (
                          <UserCard id={""} isActive={false} name={""} username={""} {...enrollments}></UserCard>
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
                          <UserCard id={""} isActive={false} name={""} username={""} {...users}></UserCard>
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
  id: string
  isActive: boolean
  name: string
  username: string
}

// one time usercard component with custom prop type
function UserCard({
  id, 
  isActive,
  name,
  username
}: UsercardProps){
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {username}
      </CardContent>
      <CardFooter>{id}</CardFooter>
    </Card>
  )
}