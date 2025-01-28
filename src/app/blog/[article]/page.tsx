import Footer from "@/app/routes/footer"
import Menu from "@/app/routes/menu"

export default async function Page({
    params,
  }: {
    params: Promise<{ article: string }>
  }) {
    const slug = (await params).article
    return <div>
      <Menu/>
      <div className="sm:p-16 p-6">
        <div className="grid grid-cols-1">
          <div className="columns-1">hi</div>
          <div className="columns-8 bg-muted">
          My Post: {slug}</div>
          <div className="columns-3">recommended articles</div>
        </div></div>
      <Footer/>
      </div>
  }