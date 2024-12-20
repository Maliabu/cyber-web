import Menu from "../routes/menu";
import Footer from "../routes/footer";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Logo from '../images/logo.png'
import { db } from "@/drizzle/db";
import { Badge } from "@/components/ui/badge";
import { getMyDay, getMyMonth } from "../services/success";
import BlogBottomAd from "../home/blogAd";

export default async function Events(){
    const events = await db.query.EventsTable.findMany()
    return <div>
        <Menu/>
        <div>
            <div id="events">
                <div className="sm:p-16 p-6 grid justify-items-center">
                <h1 className="text-5xl leading-10">Events</h1>
                <h5>Check out whats happening</h5></div>
                    <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 p-6 sm:p-8 sm:admin bg-muted">
                        {events.map(event => (
                            <div className="p-4 bg-white rounded-lg">
                        <Card className="w-full background-none" key={event.id}>
                        <CardContent>
                        <p className="p-2 my-4 desc border rounded-md"> {getMyDay(event.startDate.getDay())}, {getMyMonth(event.startDate.getMonth())} {event.startDate.getDate()}, {event.startDate.getFullYear()}</p>
                        <div className="relative h-28 w-64">
                    <Image
                    aria-hidden
                    src={"/events/"+event.image}
                    alt="File icon"
                    className="object-cover"
                    fill/></div>
                    <div className="mb-2 mt-4 text-3xl">
                      {event.title}
                    </div>
                    <p className="text-sm text-card-foreground">
                      {event.description}
                    </p>
                    <p className="p-2 my-4 desc"> Ends: {getMyDay(event.endDate.getDay())}, {getMyMonth(event.endDate.getMonth())} {event.endDate.getDate()}, {event.endDate.getFullYear()}</p>
                    <a href={event.link}>For more info</a>
                </CardContent>
              </Card>
              </div>
              ))}
                    </div>
            </div>
            <div id="news"></div>
        </div>
        <BlogBottomAd/>
        <Footer/>
    </div>
}