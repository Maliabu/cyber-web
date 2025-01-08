"use client"

import { Button } from "@/components/ui/button";
import { sendHtmlEmail } from "@/server/fetch.actions";

export default function ServiceForm(props: {email:string, title: string, id: string, id2: string}){
    async function onSubmit(){
        const app = document.getElementById(props.id);
        const mess = document.getElementById(props.id2);
        const text = 'Sending Request...';
        if(app !== null){
            app.innerHTML = text;
        }
        const data = await sendHtmlEmail(props.email, props.title)
        if(data !== true){
            if(app !== null){
                app.innerHTML = "Send Failed";
            }
        } else {
            if(app !== null && mess !== null){
            app.innerHTML = "Request Sent.";
            mess.style.display = "block";
            mess.innerHTML = "Your request was successful. Our team will get back to you shortly";
            setTimeout(() => {
                window.location.reload()
            }, 3000)
            }
        }
    }
    return(
        <div>
        <form action={onSubmit} className="w-full flex flex-col">
            <div><Button className="text-white" id={props.id} type="submit">Request Service</Button>
            <div style={{"display": "none"}} className="border border-primary text-primary p-2 mt-1 rounded-md" id={props.id2}>Request status</div>
            </div>
          </form>
      </div>
    
    )
}