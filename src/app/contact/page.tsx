import Menu from "../routes/menu"
import Footer from "../routes/footer"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
import { ChevronRight, Group, MessageCircle, PersonStanding } from "lucide-react";
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
  import Logo from '../images/logo.png'
  import Whatsapp from '../images/whatsapp.png'
import { auth } from "@clerk/nextjs/server";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default async function About(){

  const userId = await auth()

    return(
        <>
        <Menu/>
        <div className="p-8 sm:p-16 items-center bg-gradient-to-r from-slate-800 to-sky-600 text-white">
        <div className="sm:float-right">
          <div className="grid justify-items-center py-8">
          <h1 className="display-1">70+</h1></div>
          <a href="/">
      <Card className="sm:w-[350px] w-[320px]">
      <CardHeader>
        <CardTitle>Hacking For You!</CardTitle>
        <CardDescription>Diving into the hack ethics of cyber security with WarrenMu</CardDescription>
      </CardHeader>
    </Card></a>
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 flex flex-row justify-between rounded-lg p-6 mt-2 w-[320px] sm:w-[350px]">
        <p className="w-1/4">You can Leave a Message</p>
        {userId.userId !== null?<form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5 dark">
          <Input type="text" placeholder="Message" />
        </div>
      </div>
      <Button className="my-4 text-white bg-primary">Send</Button>
    </form>
      : <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5 dark">
          <Input id="email" type="email" placeholder="Email address" />
          <Input type="text" placeholder="Message" />
        </div>
      </div>
      <Button className="my-4 text-white bg-primary">Send</Button>
    </form>}
    </div>
    <a href="https://chat.whatsapp.com/JXO95zzynMN3Qlirewfzzk">
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 flex flex-row justify-between rounded-lg p-4 mt-2 w-[320px] sm:w-[350px]">
        <p className="w-1/4">Join our whatsapp community</p>
        <Image
        src={Whatsapp}
        alt="whatsapp logo"
        height={70}
        width={70}
        />
    </div></a>
    </div>
      <div className="pb-16">
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
      <h6 className="text-wrap lh-1 sm:w-[400px]">Cyber security's core function is to protect the devices we all use (smartphones, <br/>laptops, tablets and computers), and the services we access - <br/>both online and at work - from theft or damage.</h6>
      </div>
      <Button className="text-white"><Group width={16} height={16}/> Join our Growing Community</Button>
      <h3 className="display-1 mt-12">What Our Mentees have to say</h3>
      <p className="pt-6">The easy way!</p>
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm">
    <div className="">
    </div>
      <CarouselContent className="sm:p-8 p-6 background-none">
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="dark">
                <CardContent className="flex aspect-square p-4">
          <NavigationMenu>
          <ul className="background-none">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="/">
                    <Image
                    aria-hidden
                    src={Logo}
                    alt="File icon"
                    width={16}
                    height={16}/>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-card-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
            </NavigationMenu>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    <h3 className="display-1 mt-6">Now Meet Our Mentors</h3>
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm">
    <div className="">
    </div>
      <CarouselContent className="sm:p-8 p-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="dark">
                <CardContent className="flex aspect-square p-4">
          <NavigationMenu>
          <ul className="">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/">
                    <Image
                    aria-hidden
                    src={Logo}
                    alt="File icon"
                    width={16}
                    height={16}/>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-card-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
            </NavigationMenu>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    <a href="/blog">
      <Button className="text-white"><Group width={16} height={16}/> Go to the Blog</Button></a>
      <Button className="sm:mx-4 sm:mt-0 mt-3 text-white"><PersonStanding width={16} height={16}/> Become a Mentor</Button>
       </div>
        <Footer/>
        </>
    )
}