import Menu from "../routes/menu";
import Footer from "../routes/footer";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Logo from '../images/logo.png'

export default function Events(){
    return <div>
        <Menu/>
        <div>
            <div id="events" className="sm:p-16 p-8 grid font-[family-name:var(--font-futura)]">
                <h1 className="display-1">Events</h1>
                <h5 className="py-6">Check out whats happening</h5>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:admin">
                    <div className="grid cols-3 gap-4">
                        <Card className="w-full">
                        <CardContent className="flex p-4">
                                <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="/">
                    <Image
                    aria-hidden
                    src={Logo}
                    alt="File icon"
                    width={30}
                    height={40}/>
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm text-card-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </CardContent>
              </Card>
                    </div>
                    <div>
                        <Card className="p-16">
                            <p>event 1</p>
                        </Card>
                    </div>
                </div>
            </div>
            <div id="news"></div>
        </div>
        <Footer/>
    </div>
}