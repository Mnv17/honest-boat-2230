let paymentbtn=document.getElementById("button");
let otp=document.getElementById("inputotp")
let timing=document.getElementById("clockdiv")
let username=document.getElementById("name")
let useremail=document.getElementById("email")
let useraddress=document.getElementById("address")
let usercity=document.getElementById("city")
let state=document.getElementById("select1");
let zip=document.getElementById("Zipcode");
let cardnumber=document.getElementById("card");
let monthname=document.getElementById("month");
let expiry=document.getElementById("select2");
let cvvcode=document.getElementById("cvv");
let alertsum=localStorage.getItem("totalsum")

// listner ongeneratebutton
let a;
let interval

paymentbtn.addEventListener("click",()=>{
if(username.value==""){
    alert("Please Enter UserName")
}
else if(useremail.value==""){
    alert("Please Enter your Email")
}
else if(useremail.value.includes("@gmail")==false){
    alert("Enter Gmail In Right Format")
}
else if(useremail.value.includes(".com")==false){
    alert("Please Enter Gmail In Right Format")
}
else if(useraddress.value==""){
    alert("Please Enter your address");

}
else if(usercity.value==""){
    alert("Please Enter your City Name");

}
else if(state.value==""){
    alert("Please Enter your State Name");

}
else if(zip.value==""){
    alert("Please Enter your zipcode");

}

else if(cardnumber.value==""){
    alert("Please Enter Your Cardnumber")
}
else if(cardnumber.value.length!==12){
    alert("Please Enter 12 digit cardnumber")
}
else if(isNaN(cardnumber.value)==true){
    alert("please Enter right card number")
}
else if(monthname.value==""){
    alert("Please Enter Expiry Month ")
}
else if(monthname.value>12){
    alert("Month can't be greater than 12 ")
}
else if(monthname.value<1){
    alert("Month can't be less than 1 ")
}
else if(isNaN(monthname.value)==true){
    alert("please Enter Month In Right Way")
}
else if(expiry.value==""){
    alert("Please Enter Expiry Year of your card ")
}
else if(cvvcode.value==""){
    alert("Please Enter Cvv ")
}
else if((cvvcode.value).length>3){
    console.log(cvvcode.value.length)
    alert("Please Enter 3 digit cvv number ")
}
else if((cvvcode.value).length<3){
    console.log(cvvcode.value.length)
    alert("Please Enter 3 digit cvv number ")
}


  
   else if(username.value!=="" &&useremail.value!=="" &&useraddress.value!=="" &&username.state!=="" &&zip.value!=="" &&
    cardnumber.value!=="" &&monthname.value!=="" &&expiry.value!=="" &&cvvcode.value!=="" &&
    (cvvcode.value).length==3){
        let span3=document.createElement("span");
        span3.innerText=00;
        let i=30;
        otpgeneration()
        function otpgeneration(){a = Math.floor(100000 + Math.random() * 900000);
            return a}

            alert(`Plese remember This OTP:- ${a} For Payment Process`)
     interval=setInterval(()=>{
i--
if(i==0){

alert("otp expired")
clearInterval(interval)
location.reload()

}
check(`00::00::${i}`)
span3.innerText=i;
    },1000)}
  
    function check(x){
        timing.innerHTML=null;
    timing.append(x)
    }







})

let submitbtn=document.getElementById("submit")
submitbtn.addEventListener("click",()=>{
    
    console.log(a)
    if(otp.value==a){
        alert(`payment successful of total amount:- ${alertsum}$`)
        clearInterval(interval)
        otp.value="";
     
        timing.innerHTML=""
        window.location.replace("./index.html")
    }
    else if(otp.value==""){
        alert("Please Enter otp")
    }
    else {
        alert("Otp Invalid")
        location.reload()
    }
})
