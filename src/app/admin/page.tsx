import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { db } from "@/drizzle/db"
import { usersTable } from "@/drizzle/schema"
import { BookCheck, Delete, GraduationCap, LayoutDashboardIcon, Lock, Play, User, Users } from "lucide-react"
import AddUser from "./addUser"
import Logo from '../images/logo.png'
import Image from "next/image";

export default async function AdminPage() {
  console.log()
  const users  =  await db.query.usersTable.findMany()
  const events = await db.query.EventsTable.findMany()
  const articles = await db.query.articlesTable.findMany()
  const schedules = await db.query.schedulesTable.findMany()
  const enrollments = await db.query.enrollmentsTable.findMany()
  const courses = await db.query.courseTable.findMany()
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
      <TabsContent value="account">
        <div className="flex flex-row">
        <div className="flex flex-col p-8">
            <div>Account Details</div>
        </div>
        <div className="p-8">
        <h5>Welcome Admin</h5>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="text-white">Save changes</Button>
          </CardFooter>
        </Card>
        </div>
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
                    <div className="flex flex-row admin">
                <Table>
                <TableCaption>{users.length} Total users</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">Picture</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Username</TableHead>
                    <TableHead>Delete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user) => (
                    <TableRow key={user.username}>
                        <TableCell className="text-right">{user.profilePicture}</TableCell>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell><Delete/></TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
                </div>
                <div className="p-4">
                <AddUser/>
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
