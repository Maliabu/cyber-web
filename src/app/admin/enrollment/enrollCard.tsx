import { Card } from "@/components/ui/card"
import { EnrollmentType } from "../dashboard/types"

  export function EnrollCard({
    courseId,
    email,
  }: EnrollmentType){
    return (
      <Card className="w-5/6 grid grid-cols-2 gap-4 p-6 mt-1  border-none bg-muted">
        <div className="items-start">
          <p className="text-sm">Course</p>
        <p className="mt-2">{courseId}</p></div>
        <div>
        <p className="text-sm">User</p>
        <p className="mt-2">{email}</p></div>
        <div></div>
      </Card>
    )
  }