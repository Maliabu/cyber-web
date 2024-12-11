import { Book, BookCheckIcon, Calendar, Edit, GraduationCap, Play, User2Icon, UserCircle, UserIcon } from "lucide-react";

type PageState = "User" | "Event" | "Mentor" | "Schedule" | "Enrollment" | "Subscription" | "Article" | "Course"
type AddPageProps = {
    page: PageState,
}

export default function AddPage({page}:
    AddPageProps
){

    const PageIcon = getPageicon(page)
    
    return <div className="grid p-20 justify-items-center">
    <PageIcon className="size-20 m-4 text-muted"/>
    <h5 className="p-2">Add {page}</h5>
    <p>You currently have no {page} in your database, use the button below to add users</p>
  </div>
}

function getPageicon(pageState: PageState){
    switch(pageState){
        case "User":
            return UserIcon
        case "Mentor":
            return UserCircle
        case "Schedule":
            return Calendar
        case "Enrollment":
            return GraduationCap
        case "Article":
            return Book
        case "Event":
            return BookCheckIcon
        case "Subscription":
            return Edit
        case "Course":
            return Play
    }
}