import Menu from "../routes/menu"
import Footer from "../routes/footer"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
import { ChevronRight, Group } from "lucide-react";
import Link from "next/link"
import {
    CardDescription,
    CardHeader,
    CardTitle,
    CardContent,
    Card
  } from "@/components/ui/card"
  import Image from "next/image";
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Whatsapp from '../images/whatsapp.png'
import { auth } from "@clerk/nextjs/server";
import BlogBottomAd from "../home/blogAd";
import SendMessage from "../admin/messages/page";
import { db } from "@/drizzle/db";
import { messagesTable, usersTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function About(){

  const messages = await db.select().from(messagesTable).limit(5).leftJoin(usersTable, eq(usersTable.email, messagesTable.email))

    return(
        <>
        <Menu/>
        <div className=" sm:p-0 items-center">
        <div className="sm:float-right sm:p-8 p-6">
          <div className="grid justify-items-center py-8">
          <h1 className="display-1 hidden sm:block text-white">70+</h1>
          <h1 className="display-1 sm:hidden">70+</h1></div>
          <Link href="/">
      <Card className="sm:w-[350px] w-[320px]">
      <CardHeader>
        <CardTitle>Hacking For You!</CardTitle>
        <CardDescription>Diving into the hack ethics of cyber security with WarrenMu</CardDescription>
      </CardHeader>
    </Card></Link>
    <div className="bg-darker flex flex-row justify-between rounded-lg p-6 mt-2 w-[320px] sm:w-[350px]">
        <p className="w-1/4">You can Leave a Message</p>
        <SendMessage/>
    </div>
    <Link href="https://chat.whatsapp.com/JXO95zzynMN3Qlirewfzzk">
    <div className="bg-darker flex flex-row justify-between rounded-lg p-4 mt-2 w-[320px] sm:w-[350px]">
        <p className="w-1/4 sm:m-6 m-4">Join our whatsapp community</p>
        <Image
        src={Whatsapp}
        alt="whatsapp logo"
        height={70}
        width={90}
        />
    </div></Link>
    </div>
      <div className="sm:p-16 p-6 bg-gradient-to-r from-slate-800 to-sky-900 text-white">
      <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
      <Link href="/" legacyBehavior passHref className="page-link">
            <NavigationMenuLink>
              Home
            </NavigationMenuLink>
          </Link>
                <div className="flex flex-row">
                <ChevronRight width={15} height={15} className="pt-1"/> Community</div>
    </NavigationMenuItem>
    </NavigationMenuList></NavigationMenu>
      <h1 className="display-1">Our Community</h1>
      <p className="py-6">The easy way!</p>
      <h6 className="text-wrap lh-1 sm:w-[400px]">Cyber security&lsquo;s core function is to protect the devices we all use (smartphones, <br/>laptops, tablets and computers), and the services we access - <br/>both online and at work - from theft or damage.</h6>
      </div>
      <div className="sm:p-16 p-6">
        <Link href="#subscribe">
        <Button className="text-white"><Group width={16} height={16}/> Join our Growing Community</Button></Link>
      </div>
      <div className="sm:px-16 p-6">
      <h3 className="text-4xl font-bold tracking-tight leading-7 mt-12">A few of our reviews</h3>
      </div>
      <div className="sm:px-8 p-6">
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full sm:px-14 bg-muted">
      <CarouselContent className="sm:p-8 p-6">
                  {
                    messages.map(message => (
          <CarouselItem key={message.messages_table.id} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Card className="border-none rounded-lg">
                <CardContent className="flex p-4">
                      <div className="p-12 grid justify-center">
                        <div>
                        <Avatar>
                          <AvatarImage src="" className="rounded-full w-30 h-30"/>
                          <AvatarFallback className="rounded-full dark text-white">{message.messages_table.email[0].toUpperCase()}</AvatarFallback>
                        </Avatar>
                        </div>
                        <div className="text-lg tracking-tight leading-5 mt-4">"{message.messages_table.message}"
                        <p className="desc">{message.users_table?.username}</p>
                        </div>
                      </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
            ))
          }
      </CarouselContent>
      <CarouselPrevious className="ml-6"/>
      <CarouselNext className="mr-6"/>
    </Carousel>
    </div>
      <div className="sm:px-16 p-6 hidden">
      <h3 className="text-4xl font-bold tracking-tight leading-8 sm:mt-12">Now Meet Our Mentors</h3>
      </div>
      <div className="p-6 hidden">
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full sm:px-14 bg-muted">
      <CarouselContent className="sm:p-8 p-6">
          <CarouselItem key="mentor" className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="background-none">
                <CardContent className="flex aspect-square p-4 ">
                  {
                    messages.map(message => (
                      <div key={message.messages_table.id}>
                        <div>{message.messages_table.message}</div>
                      </div>
                    ))
                  }
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="ml-6"/>
      <CarouselNext className="mr-6"/>
    </Carousel>
    </div>
       </div>
       <BlogBottomAd/>
       <div id="subscribe">
       <Footer/></div>
        </>
    )
}