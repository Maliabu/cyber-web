import Menu from "../routes/menu"
import Footer from "../routes/footer"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
import { BookHeart, ChevronRight, Group, PersonStanding } from "lucide-react";
import Link from "next/link"
import {
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardContent,
    Card
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import Image from "next/image";
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

export default function About(){
    return(
        <>
        <Menu/>
        <div className=" p-16 items-center">
        <div className="float-right">
      <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Hacking For You!</CardTitle>
        <CardDescription>Diving into the hack ethics of cyber security with WarrenMu</CardDescription>
      </CardHeader>
      <CardContent>
        <a
            className="flex h-full my-6 w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
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
    </Card>
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
            <NavigationMenuLink className=" page-link">
                <div className="flex flex-row">
                <ChevronRight width={15} height={15} className="pt-1"/> Community</div>
            </NavigationMenuLink>
    </NavigationMenuItem>
    </NavigationMenuList></NavigationMenu>
      <h1 className="display-1">Our Community</h1>
      <p className="py-6">The easy way!</p>
      <h6 className="text-wrap lh-1">Cyber security's core function is to protect the devices we all use (smartphones, <br/>laptops, tablets and computers), and the services we access - <br/>both online and at work - from theft or damage.</h6>
      </div>
      <Button><Group width={16} height={16}/> Join our Growing Community</Button>
      <h3 className="display-1 mt-12">What Our Mentees have to say</h3>
      <p className="pt-6">The easy way!</p>
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm">
    <div className="">
    </div>
      <CarouselContent className="p-8">
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
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
                    src="/file.svg"
                    alt="File icon"
                    width={16}
                    height={16}/>
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
      <p className="pt-4">The easy way!</p>
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm">
    <div className="">
    </div>
      <CarouselContent className="p-8">
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
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
                    src="/file.svg"
                    alt="File icon"
                    width={16}
                    height={16}/>
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
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      <Button><Group width={16} height={16}/> Go to the Blog</Button>
      <Button className="mx-4"><PersonStanding width={16} height={16}/> Become a Mentor</Button>
       </div>
        <Footer/>
        </>
    )
}