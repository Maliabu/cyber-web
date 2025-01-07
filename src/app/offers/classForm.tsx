"use client"

import { Button } from "@/components/ui/button";
import { sendHtmlEmail } from "@/server/fetch.actions";

export default function ClassForm(props: {email: string, title: string}){
    async function onSubmit(){
        const app = document.getElementById('submit');
        const text = 'Sending Email';
        if(app !== null){
            app.innerHTML = text;
        }
        const data = await sendHtmlEmail(props.email, props.title)
        if(data === true){
            if(app !== null){
                app.innerHTML = "Send Failed";
            }
        } else {
            if(app !== null){
            app.innerHTML = "Email Sent";
            }
            window.location.reload()
        }
    }
    return(
        <div>
        <form action={onSubmit} className="w-full flex flex-col">
          <div className="flex sm:flex-row justify-between">
            <div className="mt-6">
            <div className="text-3xl font-bold tracking-tight">User</div></div>
            <div><Button className="text-white" id="submit" type="submit">Make Payment</Button>
            </div>
          </div>
          </form>
      </div>
    
    )
}