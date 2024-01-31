
   timeLeft = 59;
min=5;
min--;
function countdown() {
  
	timeLeft--;
	document.getElementById("seconds").innerHTML = String(min+":"+ timeLeft );
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	}
else	if(timeLeft<1&&min>0)
	{
	  timeLeft =59;
	  timeLeft--;
	  min--;
	  setTimeout(countdown, 1000);
	}
	if(timeLeft<1)
  {
   document.getElementById("answer_panel").style.display="block";
  // document.write(
     result();
  
  }
	
};

setTimeout(countdown, 1000);
