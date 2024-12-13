import {
    Card,
  } from "@/components/ui/card"
  import { db } from "@/drizzle/db"
  import AddPage from "../addPage"
  import { AvatarFallback, AvatarImage, Avatar } from "@radix-ui/react-avatar"
  import AddEvent from "./page"
  
  export default async function Events() {
    const users  =  await db.query.usersTable.findMany()
    const events = await db.query.EventsTable.findMany()
  
    return (
      <div>
                    {
                      events.length > 0 ? (
                        <div className="flex flex-row admin">
                          {users.map(user => (
                            <EventCard key={user.id} {...user}/>
                          ))}
                        </div>
                      ) : (
                        <AddPage page={"Event"} />
                      )
                    }
                  <div className="p-4 flex flex-row justify-between">
                  <AddEvent/>
                  <p>{events.length} Total Events</p>
                  </div>
      </div>
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
  function EventCard({
    id, 
    isActive,
    name,
    username,
    profilePicture
  }: UsercardProps){
    return (
      <Card className="w-3/4 flex flex-row justify-between items-start p-3 mt-1 background-none">
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