let paymentbtn=document.getElementById("button");
let otp=document.getElementById("inputotp")
let timing=document.getElementById("clockdiv")

paymentbtn.addEventListener("click",()=>{
    let span3=document.createElement("span");
    span3.innerText=00;
    let i=60;
    let interval=setInterval(()=>{
i--
if(i==0){

alert("otp expired")
clearInterval(interval)


}
check(`00::00::${i}`)
span3.innerText=i;
    },1000)
  
    function check(x){
        timing.innerHTML=null;
    timing.append(x)
    }


let a;
function otpgeneration(){a = Math.floor(100000 + Math.random() * 900000);
return a}
otpgeneration()


alert(`Plese remember This OTP:- ${a} For Payment Process`)

setTimeout(()=>{
otp.addEventListener("input",(e)=>{
    console.log(e.target.value)
   
    if(e.target.value==a){
        
        clearInterval(interval)
       
        alert("Payment Successfully")
        otp.value="";
        otpgeneration();
        timing.innerHTML=""

    }
    else if(e.target.value.length>=6 && e.target.value!==a){
        alert("OTP INVALID")
        clearInterval(interval)
       
       
        otp.value="";
        timing.innerHTML=null

    }


})
},3000)
})