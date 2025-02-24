import { Card } from "@/components/ui/card"
import DeletePage from "../courses/deletePage"

// define custom props for userCard component
type SubscribeCardProps = {
    id: number
    email: string
  }
  // one time usercard component with custom prop type
  export function SubscriptionCard({
    id,
    email,
  }: SubscribeCardProps){
    return (
      <div className="flex flex-row justify-between">
      <Card className="w-5/6 grid grid-cols-2 gap-4 p-6 mt-1 border-none bg-muted ">
        <div>
        <p className="text-sm">User</p>
        <p className="text-sm">{email}</p></div>
        <div></div>
      </Card>
      <DeletePage id={id} submitId={email}/>
      </div>
    )
  }