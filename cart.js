let cartdata=JSON.parse(localStorage.getItem("cart"))||[];
let maindiv=document.getElementById("cartdiv1");

showdata(cartdata)
function showdata(data){
    maindiv.innerHTML=null;
data.forEach((item,index)=>{
let childdiv=document.createElement("div");
childdiv.setAttribute("id","childdiv")
let childdiv1=document.createElement("div");
childdiv1.setAttribute("id","childdiv1")
let img=document.createElement("img");
img.setAttribute("src",item.image)
img.setAttribute("id","productimage")
childdiv1.append(img)



let childdiv2=document.createElement("div");
childdiv2.setAttribute("id","childdiv2")
let description=document.createElement("p");
description.innerText=item.description
let description1=document.createElement("p");
description1.innerText=item.description1
let increase=document.createElement("button");
increase.innerText="+"
let Quantity=document.createElement("span");
Quantity.setAttribute("id","Quantity")
Quantity.innerText=item.quantity
let decrease=document.createElement("button");
decrease.innerHTML="-";
let ratings=document.createElement("img");
ratings.setAttribute("src","https://static.thenounproject.com/png/766721-200.png")
ratings.setAttribute("id","ratings")
let price=document.createElement("p");
price.innerHTML=`${item.price}$`
// decreasing and increasing part
let i=Quantity.innerText;
increase.addEventListener("click",()=>{
   i++
 Quantity.innerText=i
 item.quantity=Quantity.innerText;
 Quantity.innerText=item.quantity
  
    console.log(item.quantity)
   
    localStorage.setItem("cart",JSON.stringify(cartdata))
  showdata(cartdata)

  sum()

  location.reload();
})
decrease.addEventListener("click",()=>{
    if(item.quantity>1){
    item.quantity--
    i--
    Quantity.innerText=item.quantity
    localStorage.setItem("cart",JSON.stringify(cartdata))
    showdata(cartdata)

    sum()}
    location.reload();

}

})
// increasedecreasingpartend


childdiv2.append(description,ratings,increase,Quantity,decrease)
let childdiv3=document.createElement("div");
childdiv3.setAttribute("id","childdiv3")
let deletebtn=document.createElement("button");
deletebtn.innerText="Remove Item"
deletebtn.setAttribute("id","deletebtn")
// deletepart
deletebtn.addEventListener("click",()=>{
    data.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(cartdata))
    showdata(cartdata)
    location.reload();
})
// deletepartend
childdiv3.append(deletebtn)

childdiv.append(childdiv1,childdiv2,childdiv3)

maindiv.append(childdiv)
})

}

// sumpart

// function sum(){
// let total=document.getElementById("subtotal")
// let estimated1=document.getElementById("estimated")
// let sum=0;
// for(let i=0;i<cartdata.length;i++){
//  sum=sum+(cartdata[i].quantity*cartdata[i].price)
 
// }
// total.innerText=sum;
// estimated1.innerText=`${sum+5}$`
// console.log(sum)}
// sum()


///////////////////// cart js //////////////////////////

// / updated sumpart
let alertsum=localStorage.getItem("totalsum")

let totalsum=0;
function sum(){
let total=document.getElementById("subtotal")
let estimated1=document.getElementById("estimated")

for(let i=0;i<cartdata.length;i++){
 totalsum=totalsum+(cartdata[i].quantity*cartdata[i].price)

}
total.innerText=totalsum;
estimated1.innerText=`${totalsum+5}$`
console.log(totalsum)
}
sum()
let checkoutbtn=document.getElementById("Checkout");
checkoutbtn.addEventListener("click",()=>{
  localStorage.setItem("totalsum",totalsum+5)
})


///////////////////// cart js //////////////////////////




//////////////////////////// Search ////////////////////////////

document.addEventListener("click", (evt) => {
    const flyoutEl = document.getElementById("search");
    let targetEl = evt.target; // clicked element      
    do {
        if (targetEl == flyoutEl) {
            // This is a click inside, does nothing, just return.
            toggleSearchDivs();
            return;
        }
        // Go up the DOM
        targetEl = targetEl.parentNode;
    } while (targetEl);
    // This is a click outside.      
    collapseSearchDivs();
});
function toggleSearchDivs() {
    let search = document.getElementById("search");
    let search_bar = document.getElementById("search-bar");
    let right_div = document.getElementById("right");
    let middle_div = document.getElementById("middle");

    search.style.width = "100%";
    search_bar.style.width = "100%";
    right_div.style.width = "100%";
    middle_div.style.width = "0%";


}

function collapseSearchDivs() {

    let search = document.getElementById("search");
    let search_bar = document.getElementById("search-bar");
    let right_div = document.getElementById("right");
    let middle_div = document.getElementById("middle");

    search.style.width = "";
    search_bar.style.width = "";
    right_div.style.width = "";
    middle_div.style.width = "";


}
let signupDatafromLs=JSON.parse(localStorage.getItem("signup-data"))||[]
let nameforshow = JSON.parse(localStorage.getItem("name"))||""

let signintext=document.querySelector("#show-login")
if(nameforshow.length>0){
signintext.innerHTML= `Welcome, ${nameforshow}`
}
else {
signintext.innerHTML= `Welcome, Sign In`
}



// let login = document.getElementById("show-login");
// login.addEventListener("click",(e)=>{
//     e.preventDefault()
// })
let login = document.getElementById("show-login");
login.addEventListener("click",(e)=>{
e.preventDefault()
})
document.querySelector("#show-login").addEventListener("click",function(){
document.querySelector(".popup").classList.add("active");

})

document.querySelector(".popup .close-btn").addEventListener("click",function(){
document.querySelector(".popup").classList.remove("active")
})



let email  = document.querySelector("#email")

let password = document.querySelector("#password")

let submit = document.querySelector("#signin")
submit.addEventListener("click",submitfunc)
function submitfunc(){
let obj = {
  email:email.value,
  password:password.value
  
}
loginfunc(obj)

}


function loginfunc(obj){
let emailflag =false;
let passwordflag = false;  

for(let data of signupDatafromLs){

if(obj.email == data.email){
emailflag =true;
   if(obj.password == data.password){
         alert("Login Successful")
        let name = data.full_name
        localStorage.setItem("name",JSON.stringify(name))
        window.location.reload()
        passwordflag= true;

}

}




}// loop


if(obj.email =="" || obj.password ==""){
alert("All Field must be filled out")
}

else if(emailflag == false){
alert("Invalid Credential")
}

if(emailflag == true && passwordflag == false){
alert("Wrong Password")
}


}//function 


function gotocreateaccount(){
window.location.href="./createaccount.html"

}