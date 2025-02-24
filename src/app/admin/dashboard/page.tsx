"use client"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Bell, BookCheckIcon, BugPlay, CalendarCheck2, GraduationCapIcon, LayoutDashboardIcon, Moon, Paperclip, Sun, User, Users, Users2Icon, UsersIcon } from "lucide-react"
import AddUser from "../users/page"
import AddPage from "../addPage"
import {Chart} from "../chart"
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
import Messages from "../messages/messages"
import {UserCard} from "../users/userCard"
import useSWR from "swr"
import { ArticleType, EnrollmentType, EventType, UserType, courseType, currencyType, messagesType, subscriptionsType } from "./types"
import { fetcher } from "@/app/services/services"

export default function AdminPage() {
  let users: UserType[] = []
  const { data, error } = useSWR("/api/users", fetcher);
  if(data){
      users = data
  }

  let mentors: UserType[] = []
  const { data: data1, error: error1 } = useSWR("/api/mentors", fetcher);
  if(data1){
      mentors = data1
  }

  let event: EventType[] = []
  const { data: events, error: eventsError } = useSWR("/api/events", fetcher);
  if(events){
      event = events
  }

  let article: ArticleType[] = []
  const { data: articles, error: articleError } = useSWR("/api/articles", fetcher);
  if(articles){
      article = articles
  }

  let enroll: EnrollmentType[] = []
  const { data: enrollment, error: enrollError } = useSWR("/api/enrollments", fetcher);
  if(enrollment){
      enroll = enrollment
  }

  let course: courseType[] = []
  const { data: courses, error: courseError } = useSWR("/api/courses", fetcher);
  if(courses){
      course = courses
  }

  let subscription: subscriptionsType[] = []
  const { data: subscriptions, error: subError } = useSWR("/api/subscriptions", fetcher);
  if(subscriptions){
      subscription = subscriptions
  }

  let currency: currencyType[] = []
  const { data: currencies, error: currencyError } = useSWR("/api/currency", fetcher);
  if(currencies){
      currency = currencies
  }

  let message: messagesType[] = []
  const { data: messages, error: messageError } = useSWR("/api/messages", fetcher);
  if(messages){
      message = messages
  }

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
        <TabsTrigger value="messages"><Bell /><p className="border-l border">{message.length}</p></TabsTrigger>
      </TabsList>
      <TabsContent value="dashboard" className=" p-4 bg-muted rounded-lg sm:tabs">
        <div className=" text-xl font-bold hidden tracking-tight">User Related data</div>
        <div className="pt-2 grid grid-cols-4 gap-2">
            <div className="p-4  bg-background rounded-2xl">
              <div className="flex flex-row justify-between">
                <div className="rounded-md">
              <div className="text-4xl font-bold tracking-tight">
              { users.length}</div><p className="text-sm mt-2">Users</p></div>
              <UsersIcon className="w-10 h-10 text-primary"/>
              </div></div>
            <div className="p-4  bg-background rounded-2xl">
            <div className="flex flex-row justify-between">
            <div className="rounded-md">
              <div className="text-4xl font-bold tracking-tight">
              { mentors.length}</div><p className="mt-2 text-sm">Mentors</p></div>
              <Users2Icon className="w-10 h-10 text-primary"/>
              </div>
            </div>
            <div className="p-4  bg-background rounded-2xl ">
            <div className="flex flex-row justify-between">
            <div className="rounded-md">
              <div className="text-4xl font-bold tracking-tight">
              { subscription.length}</div><p className="mt-2 text-sm">Subscriptions</p></div>
              <BookCheckIcon className="w-10 h-10 text-primary"/>
              </div>
            </div>
            <div className="p-4  bg-background rounded-2xl ">
            <div className="flex flex-row justify-between">
            <div className="rounded-md">
              <div className="text-4xl font-bold tracking-tight">
              { enroll.length}</div><p className="mt-2 text-sm">Enrollment<br/> requests</p></div>
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
              { course.length}</div><p className="mt-2 text-sm">Courses</p></div>
              <BugPlay className="w-10 h-10 text-primary"/>
              </div>
            </div>
            <div className="p-8  bg-background rounded-2xl">
            <div className="flex flex-row justify-between">
            <div>
              <div className="text-4xl font-bold tracking-tight">
              { event.length}</div><p className="mt-2 text-sm">Events</p></div>
              <CalendarCheck2 className="w-10 h-10 text-primary"/>
              </div>
            </div>
            <div className="p-8  bg-background rounded-2xl">
            <div className="flex flex-row justify-between">
            <div>
              <div className="text-4xl font-bold tracking-tight">
              { article.length}</div><p className="mt-2 text-sm">Articles</p></div>
              <Paperclip className="w-10 h-10 text-primary"/>
              </div></div>
        </div>
        <div>
            <div className=" rounded-2xl p-8  bg-background">
            <div className="text-2xl leading-5 font-bold tracking-tight">Statistics Analysis</div>
              <Chart/>
            </div>
        </div>
      </TabsContent>
      <TabsContent value="account" className="tabs">
        <div>
          <Admin {...message}/>
        </div>
      </TabsContent>
      <TabsContent value="messages" className="tabs">
        <div>
          <Messages {...message}/>
        </div>
      </TabsContent>
      <TabsContent value="events">
        {
          event.length > 0 ? (
            <div className="flex flex-col admin p-6">
              {event.map(event => (
                <EventCard key={event.id} {...event}/>
              ))}
            </div>
          ) : (
            <AddPage page={"Event"} />
          )
        }
        <div className="p-6 mt-1 flex flex-row justify-between">
          <AddEvents/>
          <p>{event.length} Total Events</p>
        </div>
      </TabsContent>
      <TabsContent value="courses">
        {
          course.length > 0 ? (
            <div className="flex flex-col admin p-6">
              {course.map(course => (
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
            <NextCourse courses={course} />
          </div>
          <p>{course.length} Total Courses</p>
        </div>
      </TabsContent>
                <TabsContent value="articles">
                  {
                    article.length > 0 ? (
                      <div className="flex flex-col admin p-6">
                        {article.map(article => (
                          <ArticlesCard key={article.id} {...article}/>
                        ))}
                      </div>
                    ) : (
                      <AddPage page={"Article"} />
                    )
                  }
                <div className="p-6 mt-1 flex flex-row justify-between">
                <AddArticle/>
                <p>{article.length} Total Articles</p>
                </div>
      </TabsContent>
      <TabsContent value="user">
            <Tabs defaultValue="users">
                <TabsList className="flex flex-row justify-between">
                    <TabsTrigger value="users"><p>Users</p></TabsTrigger>
                    <TabsTrigger value="mentors"><p>Mentors</p></TabsTrigger>
                    <TabsTrigger value="subscriptions"><p>Subscriptions</p></TabsTrigger>
                    <TabsTrigger value="enrollments"><p>Enrollment Requests</p></TabsTrigger>
                </TabsList>
                <TabsContent value="users" className="admin">
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
                    subscription.length > 0 ? (
                      <div className="admin p-6">
                        {subscription.map(subscription => (
                          <SubscriptionCard key={subscription.id} {...subscription}/>
                        ))}
                      </div>
                    ) : (
                      <AddPage page={"Subscription"} />
                    )
                  }
                <div className="p-6 mt-1 flex flex-row justify-between">
                <Subscribe/>
                <p>{subscription.length} Total Subscriptions</p>
                </div>
                </TabsContent>
                <TabsContent value="enrollments">
                  {
                    enroll.length > 0 ? (
                      <div className="admin p-6">
                        {enroll.map(enrollment => (
                          <EnrollCard key={enrollment.id} {...enrollment}/>
                        ))}
                      </div>
                    ) : (
                      <AddPage page={"Enrollment"} />
                    )
                  }
                <div className="p-6 mt-1 flex flex-row justify-between">
                <Enroll courses={course}/>
                <p>{enroll.length} Total Enrollments</p>
                </div>
                </TabsContent>
            </Tabs>
      </TabsContent>
    </Tabs>
    </div>
  )
}

