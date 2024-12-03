import Menu from "../routes/menu"
import Footer from "../routes/footer"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
import { BookHeart, ChevronRight } from "lucide-react";
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

export default function Services(){
    return(
        <>
        <Menu/>
        <div className=" p-16 items-center">
        <div className="float-right -mt-12">
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
          <Button className="my-4">Sign Up My Account!</Button>
        </form>
        <a
            className="flex h-full mt-6 w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
            href="/">
            <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}/>
            <div className="mb-2 mt-4 text-lg font-medium">
                shadcn/ui
            </div>
            <p className="text-sm leading-tight text-muted-foreground">
                Beautifully designed components built with Radix UI and Tailwind CSS.
            </p>
        </a>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p>Or Sign Up with Google</p>
        <Button variant="outline"> Google</Button>
      </CardFooter>
    </Card>
    </div>
      <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
      <Link href="/" legacyBehavior passHref className="page-link">
            <NavigationMenuLink>
              Home
            </NavigationMenuLink>
          </Link>
            <NavigationMenuLink className=" page-link">
                <div className="flex flex-row">
                <ChevronRight width={15} height={15} className="pt-1"/> Classes</div>
            </NavigationMenuLink>
    </NavigationMenuItem>
    </NavigationMenuList></NavigationMenu>
      <div className="p-16 bg-primary rounded-xl mt-4">
      <h1 className="display-1 text-secondary">Our Cyber Classes</h1>
      <p className="py-6 text-secondary">The easy way!</p>
      <h6 className="text-wrap lh-1 text-secondary">Cyber security's core function is to protect the devices we all use (smartphones, <br/>laptops, tablets and computers), and the services we access - <br/>both online and at work - from theft or damage.</h6>
      <Button variant="outline" className="mt-8"><BookHeart width={16} height={16}/> Take a look at our courses</Button>
      </div>
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
    <div className="p-8">
    <h3 className="display-1">Our Classes</h3>
    <div className="flex flex-row mt-4">
        <p className="bg-secondary p-2 rounded">Hacking</p><p className="mx-6 bg-secondary p-2 rounded">Cyber Security</p>
        <p className="bg-secondary p-2 rounded">Training</p><p className="mx-6 bg-secondary p-2 rounded">assessment</p>
    </div>
    </div>
      <CarouselContent className="p-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="aspect-square p-4">
          <NavigationMenu>
          <ul className="">
              <li className="row-span-3">
                <p className="float-right bg-secondary p-4 -mt-8 rounded-tl-lg rounded-br-lg">Starting Soon</p>
                    <Image
                    aria-hidden
                    src="/file.svg"
                    alt="File icon"
                    width={60}
                    height={60}/>
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md mt-4"
                    href="/">
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
            </NavigationMenu>
            <div className="py-4">
                <p> Outline 1
                </p>
                <p>Outline 2</p>
                <p>Outline 3</p>
                <p>Outline 4</p></div>
            <Button>Enroll</Button>
            <Button variant="secondary" className="mx-4">Mentor</Button>
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