"use client"

import { Button } from "@/components/ui/button";
import { addEnrollment, addEnrollmentRequest, sendHtmlEmail } from "@/server/fetch.actions";

export default function ClassForm(
    props: {
        email: string, 
        title: string, 
        name: string, 
        id: string, 
        id2: string,
        courseid: number
    }){
    async function onSubmit(){
        const app = document.getElementById(props.id);
        const mess = document.getElementById(props.id2);
        const text = 'Sending Email...';
        if(app !== null){
            app.innerHTML = text;
        }
        const enroll = await addEnrollmentRequest(props.courseid, props.email)
        if(enroll?.error){
            if(app !== null){
                app.innerHTML = "You already enrolled for this course";
            }
        } else {
            const data = await sendHtmlEmail(props.email, props.title, props.name)
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
    }
    return(
        <div>
        <form action={onSubmit} className="">
          <div className="sm:flex sm:flex-row justify-between gap-4 rounded-lg p-8 bg-muted">
            <div className="">
            <div className="text-3xl font-bold tracking-tight">User</div>
            <p>Request to be sent by: {props.email}</p>
            <p className="p-2 bg-darker text-white text-sm rounded-md mt-2">To edit your user email address, signin with a different email. Thank you</p>
            </div>
            <div><Button className="text-white sm:mt-0 mt-5" id={props.id} type="submit">Request to Enroll</Button>
            <div style={{"display": "none"}} className="border border-primary text-primary p-2 mt-1 rounded-md" id={props.id2}>Request status</div>
            </div>
          </div>
          </form>
      </div>
    
    )
}