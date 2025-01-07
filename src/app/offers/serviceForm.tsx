"use client"

import { Button } from "@/components/ui/button";
import { sendHtmlEmail } from "@/server/fetch.actions";

export default function ServiceForm(props: {email:string, title: string}){
    async function onSubmit(){
        const app = document.getElementById('submit');
        const text = 'Sending Email';
        if(app !== null){
            app.innerHTML = text;
        }
        const data = await sendHtmlEmail(props.email, props.title)
        if(data !== true){
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
            <div><Button className="text-white" id="submit" type="submit">Request Service</Button>
            </div>
          </form>
      </div>
    
    )
}