import Menu from "../routes/menu";
import Footer from "../routes/footer";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { db } from "@/drizzle/db";
import { getMyDay, getMyMonth } from "../services/success";
import BlogBottomAd from "../home/blogAd";
import Link from "next/link";

export default async function Events(){
    const events = await db.query.EventsTable.findMany()
    return <div>
        <Menu/>
        <div>
            <div id="events">
                <div className="sm:p-16 p-6 grid justify-items-center">
                <h1 className="text-5xl leading-10 tracking-tight font-bold">Events</h1>
                <h5>Check out whats happening</h5></div>
                    <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 p-6 sm:p-8 sm:admin bg-muted">
                        {events.map(event => (
                            <div key={event.id} className="p-4 bg-white rounded-lg">
                        <Card className="w-full background-none" key={event.id}>
                        <CardContent>
                        <p className="p-2 my-4 desc border rounded-md"> {event.startDate !== null?getMyDay(event.startDate.getDay()):null}, {event.startDate !== null?getMyMonth(event.startDate.getMonth()):null} {event.startDate !== null?event.startDate.getDate():null}, {event.startDate !== null?event.startDate.getFullYear():null}</p>
                        <div className="relative h-28 w-64">
                    <Image
                    aria-hidden
                    src={"/events/"+event.image}
                    alt="File icon"
                    className="object-cover"
                    fill/></div>
                    <div className="mb-2 mt-4 text-3xl tracking-tight font-bold">
                      {event.title}
                    </div>
                    <p className="text-sm text-card-foreground">
                      {event.description}
                    </p>
                    <p className="p-2 my-4 desc"> Ends: {event.endDate !== null?getMyDay(event.endDate.getDay()):null}, {event.endDate !== null?getMyMonth(event.endDate.getMonth()):null} {event.endDate !== null?event.endDate.getDate():null}, {event.endDate !== null?event.endDate.getFullYear():null}</p>
                    <Link href={event.link !== null?event.link:"/"}>For more info</Link>
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