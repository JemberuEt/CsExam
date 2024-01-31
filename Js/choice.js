    
      var h4=document.getElementsByTagName("h4");
    var k, i,j,inp;
   inp=document.getElementsByTagName("input");
    var i=0,r=0;
   
   for(j=0; j<inp.length;j++)
   {
inp[i++].setAttribute("name","q"+j); 
 inp[i++].setAttribute("name","q"+j); 
inp[i++].setAttribute("name","q"+j); 
inp[i++].setAttribute("name","q"+j); 
   
   }
   

 function result()
 {
 var totalans=0, correctAns=0;
  var input=document.getElementsByTagName("input");
 var label=document.getElementsByTagName("label");
 for(i=0;i<input.length;i++)
 {
   
   if(input[i].checked)
   {
     totalans++;
     if(input[i].dataset.answer==1)
     {
      label[i].style.backgroundColor="#00cc99";
           label[i].style.color="white";  
        correctAns++;
     }
     else{
     label[i].style.backgroundColor="red";  
          label[i].style.color="white";  
   }}
 }
 if(totalans<=h4.length)
 {
   document.getElementById("answer_panel").style.display="block";
document.getElementById('answer_panel').innerHTML=correctAns+"/5"; 
document.getElementById('clock').style.display="none";
 }
 }
