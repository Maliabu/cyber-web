import { Button } from "@/components/ui/button"

export default function BlogBottomAd(){
    return(
    <div className="grid justify-items-center sm:p-20 p-6">
        <h5 className="text-5xl leading-10 text-center sm:w-[750px] sm:py-5 tracking-tight font-bold">For the best reads on cyber security, Blog with us!</h5>
        From the best of our authors. Visit our blog!
        <a href="/blog" className="mt-4">
          <Button className="text-white my-4 sm:m-0 sm:w-[700px]">
          More Articles</Button>
        </a>
    </div>)
}