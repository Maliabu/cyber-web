import Menu from "../routes/menu"
import Footer from "../routes/footer"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
import { BookHeart, ChevronRight, Home, HomeIcon, House, HouseIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import {
  CardContent,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card"
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import TimerCountDown from "../resources/timer";
import { Badge } from "@/components/ui/badge"
import Logo from '../images/logo.png'

export default function Services(){
    return(
        <>
        <Menu/>
        <div className=" p-16 items-center font-[family-name:var(--font-futura)]">
        <div className=" z-0 absolute -right-0">
            <TimerCountDown/>
    </div>
      <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
      <Link href="/" legacyBehavior passHref className="page-link">
            <NavigationMenuLink>
              <p>Back to HomePage</p>
            </NavigationMenuLink>
          </Link>
                <div className="flex flex-row">
                <ChevronRight width={15} height={15} className="pt-1"/> Classes</div>
    </NavigationMenuItem>
    </NavigationMenuList></NavigationMenu>
      <div className=" rounded-xl mt-4">
      <h1 className="display-1">Our Cyber Classes</h1>
      <p className="py-6">The easy way!</p>
      <h6 className="text-wrap lh-1">Cyber security's core function is to protect the devices we all use (smartphones, <br/>laptops, tablets and computers), and the services we access - <br/>both online and at work - from theft or damage.</h6>
      <a href="/offers#courses">
      <Button className="mt-8 text-white"><BookHeart width={16} height={16}/> Take a look at our courses</Button></a>
      </div>
      </div>
      <div className=" p-16 back-classes font-[family-name:var(--font-futura)]">
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
    <div className="p-8" id="courses">
    <h3 className="display-1">Our Classes</h3>
    <div className="flex flex-row mt-4">
    <Badge variant="outline">Hacking</Badge>
    <Badge variant="outline" className="mx-2">Cyber Security</Badge>
    <Badge variant="outline">Training</Badge>
    <Badge variant="outline" className="mx-2">Assessment</Badge>
    </div>
    </div>
      <CarouselContent className="p-8">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card className="background-none rounded-2xl backdrop">
                <CardContent className="aspect-square p-16">
          <NavigationMenu>
          <ul className="">
              <li className="row-span-3">
                <Badge variant="outline" className="float-right text-white p-2 -m-14">Starting Soon</Badge>
                    <Image
                    aria-hidden
                    src={Logo}
                    alt="File icon"
                    width={60}
                    height={60}/>
                    <div className="py-4">
                        <h3 className="text-white">Cyber Security in a Nutshell!</h3></div>
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 outline-none border focus:shadow-sm my-4"
                    href="/">
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-white">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
            </NavigationMenu>
            <Button className="text-white">Enroll for course</Button>
            <Button className="mx-4 bg-light">Mentor</Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
        <Footer/>
        </>
    )
}