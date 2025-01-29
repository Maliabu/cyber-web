import Menu from "../routes/menu";
import Footer from "../routes/footer";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { db } from "@/drizzle/db";
import { getMyDay, getMyMonth } from "../services/success";
import BlogBottomAd from "../home/blogAd";
import Link from "next/link";
import nullEvent from "../images/nullEvent.png"
import { LocateFixedIcon, MapPinCheckInside, MapPinHouseIcon, PinOff } from "lucide-react";

export default async function Events(){
    const events = await db.query.EventsTable.findMany()
    function event(){
        if(events.length > 0){
            return(
                <div>
                <div className="sm:px-16 p-6 grid justify-items-center">
                <h1 className="text-5xl leading-10 tracking-tight font-bold hidden">Events</h1>
                <h5 className="hidden">Check out whats happening</h5></div>
                    <div className="grid sm:grid-cols-3 grid-cols-1 bg-muted gap-4 p-6 sm:admin">
                        {events.map(event => (
                        <div key={event.id} className="">
                            <div className="bg-darker text-background float-right -mt-4 p-2 rounded-tr-3xl rounded-bl-3xl">
                        <p className="p-2"> {event.startDate !== null?getMyDay(event.startDate.getDay()):null}, {event.startDate !== null?getMyMonth(event.startDate.getMonth()):null} {event.startDate !== null?event.startDate.getDate():null}, {event.startDate !== null?event.startDate.getFullYear():null}</p>
                        </div>
                        <Card className="w-full background-none py-4 px-0" key={event.id}>
                        <CardContent>
                            <div className="bg-white py-6 rounded-lg">
                    <div className="mb-2 p-6 text-3xl tracking-tight font-bold">
                      {event.title}
                    </div>
                        <div className="relative h-64 w-92">
                    <Image
                    aria-hidden
                    src={"/events/"+event.image}
                    alt="File icon"
                    className="object-cover"
                    fill/></div>
                    <p className="text-sm text-card-foreground p-6">
                      {event.description}
                    </p>
                    <p className="p-6 my-4 border-b border-t desc"> Ends: {event.endDate !== null?getMyDay(event.endDate.getDay()):null}, {event.endDate !== null?getMyMonth(event.endDate.getMonth()):null} {event.endDate !== null?event.endDate.getDate():null}, {event.endDate !== null?event.endDate.getFullYear():null}</p>
                    <Link href={event.link !== null?event.link:"/"}><div className="px-6"><MapPinHouseIcon/> Ticket</div></Link>
                    </div>
                </CardContent>
              </Card>
              </div>
              ))}
            </div>
            </div>
            )
        } return (
            <div className="">
                    <Image
                    aria-hidden
                    src={nullEvent}
                    alt="File icon"/></div>
        )
    }
    return <div>
        <Menu/>
        <div>
            <div id="events" className="">
                {event()}
            </div>
            <div id="news"></div>
        </div>
        <BlogBottomAd/>
        <Footer/>
    </div>
}