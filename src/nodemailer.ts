const nodemailer = require("nodemailer");
const fs = require('fs')
const path = require('path')
import {template} from './htmlTemplate'

const transporter = nodemailer.createTransport({
  host: "wascl.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: "info@wascl.com",
    pass: "F1BhWQzi&)E{",
  },
});


// async..await is not allowed in global scope, must use a wrapper
export async function sendEmail(email: string, title: string) {
    // const filePath = path.resolve('./src', 'htmlTemplate.html')
    // let htmlData = fs.readFileSync(filePath, 'utf8');

    // let Obj = {
    //     email: email,
    //     title: title,
    // };
 
    // // htmlData = htmlData.replaceAll('[email]', email).replaceAll('[title]', title);
    // htmlData = htmlData.replace(/email|title/gi, function(matched: {key: string}[]){
    //     return Obj[matched]
    // })

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "info@wascl.com", // sender address
    to: email, // list of receivers
    subject: "Request For Service", // Subject line
    text: "Services",
    // html: htmlData, // html body
    html: template(email, title)
  });


  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}