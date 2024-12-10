export default function Success(){
    setTimeout(() => {
        document.getElementById("success")?.style?.display?'block':'none'
        document.getElementById("success")?.innerText?"successful":'operation successful'
    }, 2000);
    return<div style={
        { "display": "none"}
       } id="success"></div>
}