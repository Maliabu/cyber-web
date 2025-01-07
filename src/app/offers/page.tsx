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
import Link from "next/link"
import {
  CardContent,
  Card,
} from "@/components/ui/card"
import Image from "next/image";
import TimerCountDown from "../resources/timer";
import { Separator } from "@/components/ui/separator";
import Training from '../images/training.jpeg'
import Consultancy from '../images/consultancy.jpeg'
import Revenue from '../images/revenue.jpeg'
import Pentesting from '../images/pentesting.jpeg'
import BlogBottomAd from "../home/blogAd";
import { db } from "@/drizzle/db";
import { getMyDay, getMyMonth } from "../services/success";
import { SQLWrapper, eq } from "drizzle-orm";
import { courseTable, currencyTable, usersTable } from "@/drizzle/schema";
import { ReusableDialog } from "../routes/reusableDialog";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Form } from "@/components/ui/form";
import ServiceForm from "./serviceForm";

export default async function Services(){
  const userId = await auth()
  const user = await currentUser()
  let email = ''
  email = user?.primaryEmailAddress?.emailAddress || ''
  const courses = await db.select().from(courseTable).leftJoin(currencyTable, eq(courseTable.currency, currencyTable.id))
  const path = "/courses/"

    return(
        <>
        <Menu/>
        <div className="grid justify-items-center sm:p-16 p-6 bg-darker text-white">
        <div className="p-6 grid justify-items-center">
        <div className="hidden sm:flex h-5 items-center space-x-4 text-sm ml-4">
        <div>Cybersecurity Training</div>
        <Separator orientation="vertical" />
        <div>Penetration Testing Services</div>
        <Separator orientation="vertical" />
        <div>Consultancy and Managed Security Services</div>
        <Separator orientation="vertical" />
        <div>Revenue-Generating Activities</div>
      </div>
        </div>
        <div className="text-5xl leading-10 tracking-tight font-bold">Each of our services made for you!</div>
        <p className="my-2">Check our most affordable services</p>
        <Button className="bg-light hover:bg-primary hover:text-muted mt-4">Go to our Classes, Trainings and Courses</Button>
        </div>
    <div className="sm:px-16 bg-muted p-6">
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full sm:mt-8 rounded-lg"
    >
      <CarouselContent className="py-8">
          <CarouselItem key="training" className="md:basis-1/2 lg:basis-1/3">
            <div>
              <Card className="w-full p-0 rounded-2xl">
                <CardContent className="flex p-4">
          <NavigationMenu>
          <ul className="">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md no-underline outline-none focus:shadow-md"
                    href="/offers#courses">
                      <div className="grid justify-items-center">
                        <Image
                        src={Training}
                        alt="training"
                        className="object-cover h-48 rounded-t-lg"
                        />
                    </div>
                    <div className="p-6 sm:p-12 rounded-b-lg">
                      <div className=" text-3xl mt-4 text-dark font-semibold leading-7 tracking-tight">
                      Cyber Security Training</div>
                    <p className="text-sm text-card-foreground my-8">
                    For: Students, IT professionals, and organizations
                    </p>
                    <div>
                      <p className="desc py-4">Modules</p>
                      <div className="text-dark">
                        <ul className="w-[200px]">
                        <li className="leading-4">Basic Cybersecurity Awareness</li>
                        <li className="leading-4 mt-2">Intermediate Ethical Hacking Course</li>
                        <li className="leading-4 mt-2">Advanced Cybersecurity Certification</li>
                        <li className="leading-4 mt-2">Corporate Training Workshops</li>
                        </ul>
                      </div>
                    </div>
                    <Button className="text-white mt-4">See our Modules</Button>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
            </NavigationMenu>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem key="consultancy" className="md:basis-1/2 lg:basis-1/3">
            <div>
              <Card className="w-full p-0">
                <CardContent className="flex p-4">
          <NavigationMenu>
          <ul className="">
              <li className="row-span-3">
                    <div className="grid justify-items-center">
                      <Image
                      src={Consultancy}
                      alt="training"
                      className="object-cover h-48 rounded-t-lg"
                      />
                  </div>
                    <div className="p-6 sm:p-12 rounded-b-lg">
                      <div className=" text-3xl mt-4 text-dark font-bold leading-7 tracking-tight">
                      Consultancy and Managed Security Services</div>
                    <p className="text-sm text-card-foreground my-8">
                    For: Organizations without dedicated security teams.
                    </p>
                    <div>
                      <p className="desc py-4">Packages</p>
                      <div className="text-dark">
                        <ul className="w-[200px]">
                        <li className="leading-4">Security Policy Creation</li>
                        <li className="leading-4 mt-2">Incident Response Planning</li>
                        <li className="leading-4 mt-2">Managed Security Operations Center (SOC)</li>
                        </ul>
                      </div>
                      </div>
                      <ReusableDialog 
                      trigger={
                        <Button className="text-white mt-4">Request a package</Button>
                      }
                      title = "Consultancy and Managed Security Services"
                      description = "Organizations without dedicated security teams."
                      results={
                        <div className="p-6">
                          <p>Select a package</p>
                          <div className="grid sm:grid-cols-3 gap-2 p-6 mt-8 bg-muted rounded-lg">
                          <div className="p-6 sm:p-12 rounded-lg bg-white">
                            <div className="text-3xl font-bold tracking-tight leading-7">Security Policy Creation</div>
                            <div className="mb-2 my-8 py-4 border-t border-b">
                              <p className="desc">Pricing per Project:</p>
                              <div className="text-2xl font-bold">$500 - $2,000</div>
                            </div>
                          </div>
                          <div className="p-6 sm:p-12 rounded-lg bg-white">
                            <div className="text-3xl font-bold tracking-tight leading-7">Incident Response Planning</div>
                            <div className="mb-2 my-8 py-4 border-t border-b">
                              <p className="desc">Pricing per Scope:</p>
                              <div className="text-2xl font-bold">$2,500 - $10,000</div>
                            </div>
                          </div>
                          <div className="p-6 sm:p-12 rounded-lg bg-white">
                            <div className="text-3xl font-bold tracking-tight leading-7">Managed Security Operations Center (SOC)</div>
                            <div className="mb-2 my-8 py-4 border-t border-b">
                              <p className="desc">Pricing per Month:</p>
                              <div className="text-2xl font-bold">$500 - $2,000</div>
                            </div>
                          </div>
                          </div>
                        </div>
                      } 
                      form={<></>}/>
                    </div>
              </li>
            </ul>
            </NavigationMenu>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem key="pentesting" className="md:basis-1/2 lg:basis-1/3">
            <div>
              <Card className="w-full p-0">
                <CardContent className="flex p-4">
          <NavigationMenu>
          <ul className="">
              <li className="row-span-3">
                    <div className="grid justify-items-center">
                      <Image
                      src={Pentesting}
                      alt="training"
                      className="object-cover h-48 rounded-t-lg"
                      />
                  </div>
                    <div className="p-6 sm:p-12 rounded-b-xl">
                      <div className=" text-3xl mt-4 text-dark leading-7 tracking-tight font-semibold">
                      Penetration Testing Services</div>
                    <p className="text-sm text-card-foreground my-8">
                    For: SMBs, international tech startups, financial institutions, and e-commerce businesses.
                    </p>
                    <div>
                      <p className="desc py-4">Packages</p>
                      <div className="text-dark">
                        <ul className="w-[200px]">
                        <li className="leading-4">Web Application Pentesting</li>
                        <li className="leading-4 mt-2">Network Vulnerability Assessment</li>
                        <li className="leading-4 mt-2">Mobile Application Security Testing</li>
                        <li className="leading-4 mt-2">Red Team/Blue Team Exercises</li>
                        </ul>
                      </div>
                      </div>
                      <ReusableDialog 
                      trigger={
                        <Button className="text-white mt-4">Request a package</Button>
                      }
                      title = "Penetration Testing Services"
                      description = "SMBs, international tech startups, financial institutions, and e-commerce businesses."
                      results={
                        <div className="p-6">
                          <p>Packages</p>
                          <div className="grid sm:grid-cols-2 gap-4 p-6 bg-muted mt-6 rounded-lg admin">
                          <div className="p-6 sm:p-12 rounded-lg bg-white">
                            <div className="text-3xl font-bold tracking-tight leading-7">Web Application Pentesting</div>
                            <div className="mb-2 my-8 py-4 border-t border-b">
                              <p className="desc">Pricing per Project:</p>
                              <div className="text-2xl font-bold">$1,000 - $5,000</div>
                            </div>
                          </div>
                          <div className="p-6 sm:p-12 rounded-lg bg-white">
                            <div className="text-3xl font-bold tracking-tight leading-7">Network Vulnerability Assessment</div>
                            <div className="mb-2 my-8 py-4 border-t border-b">
                              <p className="desc">Pricing per Project:</p>
                              <div className="text-2xl font-bold">$2,000 - $7,000</div>
                            </div>
                          </div>
                          <div className="p-6 sm:p-12 rounded-lg bg-white">
                            <div className="text-3xl font-bold tracking-tight leading-7">Mobile Application Security Testing</div>
                            <div className="mb-2 my-8 py-4 border-t border-b">
                              <p className="desc">Pricing per Project:</p>
                              <div className="text-2xl font-bold">$2,500 - $8,000</div>
                            </div>
                          </div>
                          <div className="p-6 sm:p-12 rounded-lg bg-white">
                            <div className="text-3xl font-bold tracking-tight leading-7">Red Team/Blue Team Exercises</div>
                            <div className="mb-2 my-8 py-4 border-t border-b">
                              <p className="desc">Pricing per Engagement:</p>
                              <div className="text-2xl font-bold">$10,000+</div>
                            </div>
                          </div>
                          </div>
                        </div>
                      } 
                      form={<></>}/>
                    </div>
              </li>
            </ul>
            </NavigationMenu>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem key="revenue" className="md:basis-1/2 lg:basis-1/3">
            <div>
              <Card className="w-full p-0">
                <CardContent className="flex p-4">
          <NavigationMenu>
          <ul className="">
              <li className="row-span-3">
                    <div className="grid justify-items-center">
                      <Image
                      src={Revenue}
                      alt="training"
                      className="object-cover h-48 rounded-t-lg"
                      />
                  </div>
                    <div className="p-6 sm:p-12 rounded-b-xl">
                      <div className=" text-3xl mt-4 text-dark font-semibold leading-7 tracking-tight">
                      Revenue-Generating Activities</div>
                    <p className="text-sm text-card-foreground my-8">
                    Remote Partners: Freelancers for international projects (use platforms like Upwork).
                    </p>
                    <div>
                      <p className="desc py-4">Packages</p>
                      <div className="text-dark">
                        <ul className="w-[200px]">
                        <li className="leading-4">Bug Bounty Management</li>
                        <li className="leading-4 mt-2">Software Development</li>
                        <li className="leading-4 mt-2">Content Creation</li>
                        </ul>
                      </div>
                      </div>
                      <ReusableDialog 
                      trigger={
                        <Button className="text-white mt-4">Request a package</Button>
                      }
                      title = "Penetration Testing Services"
                      description = "SMBs, international tech startups, financial institutions, and e-commerce businesses."
                      results={
                        <div className="p-6">
                          <p>Packages</p>
                          <div className="grid sm:grid-cols-3 gap-2 p-6 mt-8 bg-muted rounded-lg">
                          <div className="p-6 sm:p-12 rounded-lg bg-white">
                            <div className="text-3xl font-bold tracking-tight leading-7 mb-4">Bug Bounty Management</div>
                            <p>Partner with local firms to manage bug bounty programs</p><div className="mb-2 my-8 py-4 border-t border-b">
                              <p className="desc">Pricing of Payouts:</p>
                              <div className="text-2xl font-bold">10% - 20%</div>
                            </div>
                          </div>
                          <div className="p-6 sm:p-12 rounded-lg bg-white">
                            <div className="text-3xl font-bold tracking-tight leading-7 mb-4">Software Development</div>
                            <p>Develop and sell cybersecurity tools (e.g., vulnerability scanners, password managers)</p>
                            <div className="mb-2 my-8 py-4 border-t border-b">
                              <p className="desc">Pricing per License:</p>
                              <div className="text-2xl font-bold">$20 - $100</div>
                            </div>
                          </div>
                          <div className="p-6 sm:p-12 rounded-lg bg-white">
                            <div className="text-3xl font-bold tracking-tight leading-7 mb-4">Content Creation</div>
                            <p>Launch a subscription-based blog, webinars, or YouTube channel offering cybersecurity tips</p><div className="mb-2 my-8 py-4 border-t border-b">
                              <p className="desc">Pricing:</p>
                              <div className="text-2xl font-bold">Negotiable</div>
                            </div>
                            <ServiceForm email={email} title="Content Creation"/>
                          </div>
                          </div>
                        </div>
                      } 
                      form={<></>}/>
                    </div>
              </li>
            </ul>
            </NavigationMenu>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="ml-6"/>
      <CarouselNext className="mr-6"/>
    </Carousel>
    </div>
        <div className="sm:p-16 p-10 items-center bg-darker text-white">
        <div className="sm:float-right">
            <TimerCountDown/>
    </div>
      <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
      <Link href="/" legacyBehavior passHref className="page-link">
            <NavigationMenuLink>
              <p className="sm:mt-0 mt-6">Back to HomePage</p>
            </NavigationMenuLink>
          </Link>
                <div className="flex flex-row">
                <ChevronRight width={15} height={15} className="pt-1"/> Classes</div>
    </NavigationMenuItem>
    </NavigationMenuList></NavigationMenu>
      <div className=" rounded-xl mt-4">
      <h1 className="display-1 tracking-tight font-bold">Our Cyber Classes</h1>
      <p className="py-6">The easy way!</p>
      <h6 className="text-wrap lh-1">Cyber security's core function is to protect the devices we all use (smartphones, <br/>laptops, tablets and computers), and the services we access - <br/>both online and at work - from theft or damage.</h6>
      <Link href="/offers#courses">
      <Button className="mt-8 text-white"><BookHeart width={16} height={16}/> Take a look at our courses</Button></Link>
      </div>
      </div>
      <div className="p-12 sm:p-12 bg-muted">
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
    <div className="sm:p-8" id="courses">
        <div className=" grid justify-items-center">
        <div className="hidden sm:flex h-5 items-center space-x-4 text-sm ml-4">
        <div>Basic Cybersecurity Awareness</div>
        <Separator orientation="vertical" />
        <div>Intermediate Ethical Hacking Course</div>
        <Separator orientation="vertical" />
        <div>Advanced Cybersecurity Certification</div>
        <Separator orientation="vertical" />
        <div>Corporate Training Workshops</div>
      </div>
        </div>
    </div>
      <CarouselContent className="sm:p-8 sm:mt-0 mt-8">
        {courses.map(async course => (
          <CarouselItem key={course.course_table.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="bg-white rounded-2xl">
            {/* <div className="p-8 rounded-t-lg">Starting {getMyDay(course.startDate.getDay())}, {getMyMonth(course.startDate.getMonth())} {course.startDate.getDate()}, {course.startDate.getFullYear()}</div> */}
          <NavigationMenu>
          <ul>
              <li>
                <div className="relative h-48 w-80 hidden">
                    <Image
                    aria-hidden
                    src={path+course.course_table.image}
                    alt="course image"
                    fill
                    className="object-cover"/></div>
              </li>
            </ul>
            </NavigationMenu>
            <div className="p-8">
                    <div className="py-4">
                        <h3 className="text-3xl leading-7 tracking-tight font-semibold">{course.course_table.title}</h3></div>
                    <p className="mt-4">
                      {course.course_table.description} | {course.course_table.courseOutline}
                    </p>
                    <div className="mb-2 my-8 py-4 border-t border-b">
                      <p className="desc">Pricing per person:</p>
                      <div className="text-2xl font-bold">{course.currency_table?.code} {course.course_table.amount}</div>
                      {/* Ends: {getMyDay(course.endDate.getDay())}, {getMyMonth(course.endDate.getMonth())} {course.endDate.getDate()}, {course.endDate.getFullYear()} */}
                    </div>
                    {userId.userId !== undefined?
                    <ReusableDialog
                    trigger={<Button className="text-white">Enroll</Button>}
                    title={course.course_table.title}
                    description={course.course_table.description}
                    results={
                    <div className="mb-2 my-8 py-4 border-t border-b">
                      <p className="desc">Pricing per person:</p>
                      <div className="text-2xl font-bold">{course.currency_table?.code} {course.course_table.amount}</div>
                    </div>}
                    form={<></>}
                    />
                    :<Link href="/sign-in"><Button className="text-white">Enroll</Button></Link>}
                    </div>
            {/* <p className="bg-darker text-white p-8 self-center rounded-b-lg">Mentor: {(await mentor(course.mentor)).map(mentors => mentors.name)}</p> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
    <BlogBottomAd/>
        <Footer/>
        </>
    )
}