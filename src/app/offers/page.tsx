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
      <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Hacking For You!</CardTitle>
        <CardDescription>Diving into the hack ethics of cyber security with WarrenMu</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Preferred Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="my-6 text-white">Sign Up My Account!</Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p>or continue with google</p>
        <Button className="bg-light">Sign up with Google</Button>
      </CardFooter>
    </Card>
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
      <Button className="mt-8 text-white"><BookHeart width={16} height={16}/> Take a look at our courses</Button>
      </div>
      </div>
      <div className=" p-16 back-classes">
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
    <div className="p-8">
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
                <Badge variant="outline" className="float-right p-2 -m-14">Starting Soon</Badge>
                    <Image
                    aria-hidden
                    src={Logo}
                    alt="File icon"
                    width={60}
                    height={60}/>
                    <div className="py-4">
                        <h3>Cyber Security in a Nutshell!</h3></div>
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