//click on start button

let count=0;
let minute=0;
let second=0;
let millisecond=0;
let interval=0;
let timerstart=false;


let starttimer=()=>{

count++;

minute=Math.floor((count/100)/60);
second=Math.floor((count/100)-(minute*60));
millisecond=Math.floor(count-(second*100)-(minute*6000));

document.querySelector("#minutes").innerHTML=leadingZero(minute);
document.querySelector("#seconds").innerHTML=leadingZero(second);
document.querySelector("#milseconds").innerHTML=leadingZero(millisecond);

}


let startButton=document.querySelector("#start-btn")
startButton.addEventListener("click",function (){


    if(!timerstart){

        interval=setInterval(starttimer,10);
        timerstart=true
    }




})

//click on stop button

let stopButton=document.querySelector("#stop-btn")
stopButton.addEventListener("click",function () {

    clearInterval(interval)


})
//click on reset button

let resetButton=document.querySelector("#reset-btn")
resetButton.addEventListener("click",function () {

clearInterval(interval);

 count=0;
 minute=0;
 second=0;
 millisecond=0;
 interval=0;
 timerstart=false;

 
document.querySelector("#minutes").innerHTML=("00");
document.querySelector("#seconds").innerHTML=("00");
document.querySelector("#milseconds").innerHTML=("00");

})
//leading zero 

let leadingZero=(time)=>{


if(time<=9){

return "0" + time;

}
else{

    return time
}

}