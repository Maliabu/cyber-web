"use client"

import { Button } from "@/components/ui/button";
import { sendHtmlEmail } from "@/server/fetch.actions";

export default function ClassForm(props: {email: string, title: string, id: string, id2: string}){
    async function onSubmit(){
        const app = document.getElementById(props.id);
        const mess = document.getElementById(props.id2);
        const text = 'Sending Email...';
        if(app !== null){
            app.innerHTML = text;
        }
        const data = await sendHtmlEmail(props.email, props.title)
        if(data === false){
            if(app !== null){
                app.innerHTML = "Send Failed";
            }
        } else {
            if(app !== null && mess !== null){
            app.innerHTML = "Email Sent";
            mess.style.display = "block";
            mess.innerHTML = "Thank you for your request to enroll, we will get back to you";
            }
            setTimeout(() => {
                window.location.reload()
            }, 3000);
            
        }
    }
    return(
        <div>
        <form action={onSubmit} className="w-full flex flex-col">
          <div className="flex sm:flex-row justify-between">
            <div className="mt-6">
            <div className="text-3xl font-bold tracking-tight">User</div>
            <p>Request to be sent by: {props.email}</p>
            <p className="desc p-2 bg-muted rounded-md mt-2">To edit your user email address, signin with a different email. Thank you</p>
            </div>
            <div><Button className="text-white" id={props.id} type="submit">Make Payment</Button>
            <div style={{"display": "none"}} className="border border-primary text-primary p-2 mt-1 rounded-md" id={props.id2}>Request status</div>
            </div>
          </div>
          </form>
      </div>
    
    )
}