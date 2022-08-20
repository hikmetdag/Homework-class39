'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/


const getTimeDiv=document.createElement('div')

function addCurrentTime() {
  let h=new Date().getHours();
  let m=new Date().getMinutes();
  let s=new Date().getSeconds();
 
  h=h<10 ? '0'+h:h;
  s=s<10 ? '0'+s:s;
  m=m<10 ? '0'+m:m;
  
  
  getTimeDiv.textContent=`${h}:${m}:${s}`
  document.body.appendChild(getTimeDiv)
  
  const style = `font-family:sans-serif;
  font-size: 10em;
  letter-spacing: 2px;
  width: fit-content;
  margin: auto;
  position: absolute;
  top:30%;
  left:30%;
  text-shadow: 2px 2px 4px black;
  border:5px solid red;
  padding: 1rem;
  `;

  getTimeDiv.style=style

  setInterval(addCurrentTime, 1000);
  
}
addCurrentTime()

