 document.getElementsByClassName("start")[0].addEventListener("click", function() {
   let minutes = 25;
   var seconds = 59;

   var countdown = setInterval(function() {
     document.getElementById("seconds").textContent = seconds;
     seconds--;
     if (seconds < 0) {
       seconds = 59;
       minutes = minutes - 1
       document.getElementById("minutes").textContent = minutes;
     }
     console.log(seconds);
     console.log(minutes);
     if (minutes == 0) {
       clearInterval(countdown)
     };
   }, 1000);



 });
 document.getElementsByClassName("refresh")[0].addEventListener("click", function() {
   //reset timer



 });

 /*
 25:00

 on start press, sec = 59, sec--
 if sec = 00, minutes = minutes - 1, sec = 59, sec--
 ^do until minutes = 0

 */
