var h1 =document.getElementById("hour");
var m1 =document.getElementById("minute");
var s1 =document.getElementById("second");
var ampm =document.getElementById("ampm");
function clock(){
    let d=new Date();
    var h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
   if(h<12){
    let h2=h;
    ampm.innerText="AM";
    h1.innerText=h;
   }else if(h==12){
    h1.innerText=h;
    ampm.innerText="PM";
   }else{
    
    ampm.innerText="PM";
    h1.innerText=`${h-12}`;
    console.log(h);
   }
   m1.innerText=m;
   s1.innerText=s;


}

setInterval(clock,1000);

