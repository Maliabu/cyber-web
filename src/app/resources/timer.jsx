'use client';
// render on client
import React, { useState } from "react";

export default function TimerCountDown(){
    const [result, setResult] = useState("00d 00h 00m 00s")
    // Set the date we're counting down to
    var countDownDate = new Date("dec 3, 2024 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
        
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="demo"
    setResult(days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ")
        
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        setResult("EXPIRED")
    }
    }, 1000);
    return(
        <div className="flex d-flex pb-4 items-center">
        <h6>Next Class In: </h6>
        <h5 className="mx-4">{result}</h5>
        </div>
    )
}