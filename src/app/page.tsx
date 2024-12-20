import * as React from "react"
import HomePage from "./home/page";
import Menu from "./routes/menu";
import Footer from "./routes/footer";
import {
  ClerkProvider
} from '@clerk/nextjs'

export default function Home() {
  return (
    <ClerkProvider>
    <div className="container mx-auto">
      <Menu/>
      <HomePage/>
      <Footer/>
    </div>
    </ClerkProvider>
  )
}
