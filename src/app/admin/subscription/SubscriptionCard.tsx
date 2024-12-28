import { Card } from "@/components/ui/card"

// define custom props for userCard component
type SubscribeCardProps = {
    id: number
    email: string
  }
  // one time usercard component with custom prop type
  export function SubscriptionCard({
    email,
  }: SubscribeCardProps){
    return (
      <Card className="w-5/6 grid grid-cols-2 gap-4 p-6 mt-1 dark ">
        <div>
        <p className="desc">User</p>
        <p className="mt-2">{email}</p></div>
        <div></div>
      </Card>
    )
  }