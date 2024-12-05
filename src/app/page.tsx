import * as React from "react"
import HomePage from "./home/page";
import Menu from "./routes/menu";
import Footer from "./routes/footer";

export default function Home() {
  return (
    <div className="">
    <div className="">
      <Menu/>
      <HomePage/>
      <Footer/>
    </div>
    </div>
  )
}
