let div=document.getElementById("maindiv")
let obj={};
fetch("https://json-work.onrender.com/womens")
.then(res=>res.json())
.then(data=>{
obj=data;
afterPromise();
});
// navbarcode

   // navbarend
// filteringpart
// filter by style

function afterPromise(){

 //selected value in search result--start
 const params = new Proxy(new URLSearchParams(window.location.search), {
   get: (searchParams, prop) => searchParams.get(prop),
 });
 // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
 let value = params.style;
 //selected value in search result--end

 let style=document.getElementById("style1");
 

style.addEventListener("click",(e)=>{
 e.preventDefault()
 let newdata=obj.filter((item,index)=>{
   if(style.value==item.style){
     return true
   }
  else if(style.value==""){
   return obj
  }
 })
 appenddata(newdata)
})



// filterbycolor
let color=document.getElementById("color");
color.addEventListener("click",(e)=>{

 let newdata=obj.filter((item,index)=>{
   if(color.value==item.color){
     return true
   }
  else if(color.value==""){
   return obj
  }
 })
 appenddata(newdata)
})
// filterbyprice
let price=document.getElementById("price");
price.addEventListener("click",(e)=>{
 console.log(price.value)
 let newdata=obj.filter((item,index)=>{
   
   if( price.value=="25-50" && item.price>=25 && item.price<=50){
     console.log("YEs")
     return true
   }
   else if( price.value=="50-100" && item.price>50 && item.price<100){
     return true
   }
   else if( price.value=="Above" && item.price>100){
     return true
   }
  else if(price.value==""){
   return obj
  }
 })
 appenddata(newdata)
})
// filterbysize
let size=document.getElementById("size");
size.addEventListener("click",(e)=>{

 let newdata=obj.filter((item,index)=>{
   if(size.value==item.size){
     return true
   }
  else if(size.value==""){
   return obj
  }
 })
 appenddata(newdata)
})
// inputpartclothing

// sortpartA-Z
let sort1=document.getElementById("sort1");
sort1.addEventListener("change",()=>{
 let newdata;
 
 if(sort1.value=="A-Z"){
    newdata=obj.sort((a, b) => {
 const nameA = a.style.toUpperCase(); 
 const nameB = b.style.toUpperCase(); 
 if (nameA < nameB) {
   return -1;
 }
 if (nameA > nameB) {
   return 1;
 }

 // names must be equal
 return 0;
});
appenddata(newdata)
 }

 else if(sort1.value=="Z-A"){
  newdata=obj.sort((a, b) => {
 const nameA = a.style.toUpperCase(); 
 const nameB = b.style.toUpperCase(); 
 if (nameA > nameB) {
   return -1;
 }
 if (nameA < nameB) {
   return 1;
 }


 // names must be equal
 return 0;
});
appenddata(newdata)
 }
 else if(sort1.value=="x"){
 appenddata(obj) } 
})

// sortbypricelowtohigh
// let sort2=document.getElementById("sort2");
// sort2.addEventListener("change",()=>{
//  let newdata=obj.sort((a,b)=>{
//   if(sort2.value=="lowtohigh"){
//     return  +a.price-(+(b.price))
//   }
//   else if(sort2.value=="hightolow"){
  
//   return +b.price-(+(a.price))
//  }
//  else if(sort2.value==""){ obj}

// }
//  )
// appenddata(newdata) })
 
 
 
appenddata(obj);
//selected value in search result--start

if(null!==value && value!==undefined && value!==""){
 style.value = value;
 // style.dispatchEvent(new Event('click'));
 style.click();
}
//selected value in search result--end
// addtocartgetitem
let cartdata=JSON.parse(localStorage.getItem("cart"))||[];
// favouritesgetitem
favourite=JSON.parse(localStorage.getItem("favouritedata"))||[];

          function appenddata(data){
           maindiv.innerHTML=null;
           data.forEach(element => {
             let childdiv=document.createElement("div");
             childdiv.setAttribute("id","child")
             let img=document.createElement("img");
             img.setAttribute("src",element.image)
             let des=document.createElement("h4");
             des.setAttribute("id","des")
des.innerText=element.description
childdiv.setAttribute("class","description");
let category=document.createElement("p");
category.innerText=`category:-${element.category}`
let price=document.createElement("p");
price.innerText=`Price:-${element.price}$`
let style=document.createElement("p");
style.innerText=`style:-${element.style}`
let button=document.createElement("button");
button.innerText="Add To Cart"
button.setAttribute("id","cartbutton");
let favourites=document.createElement("button");
favourites.innerText="My favourates";
favourites.setAttribute("id","favourites")
// addtocartfunctionality
button.addEventListener("click",()=>{
 let isAlready=false;
 for(i=0;i<cartdata.length;i++){
   if(cartdata[i].id==element.id){
     console.log(element.id)
     isAlready=true;
     break;
   }
 }

 if(isAlready==true){alert("Sorry! You Can't Add Same Product Again.")
}
 else if(isAlready==false){
   cartdata.push({...element,quantity:1})
   localStorage.setItem("cart",JSON.stringify(cartdata))
   alert("Yeah! Your Product Added To Cart Successfully")}
})
// cartpartend
// addtofavouratepart
favourites.addEventListener("click",()=>{
 let isAlready=false;
 for(i=0;i<favourite.length;i++){
   if(favourite[i].id==element.id){
    
     isAlready=true;
     break;
   }
 }

 if(isAlready==true){alert("Sorry! You Already Added This Product To Favourates.")
}
 else if(isAlready==false){
   favourite.push(element)
   localStorage.setItem("favouritedata",JSON.stringify(favourite))
   alert("Yeah! Your Product Added To favourites section")}
})
// favouritesend





             childdiv.append(img,des,category,price,style,button,favourites);
            

             div.append(childdiv)
             
           });
          }

         }
// **********************Search****************************************
   
   
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
   // search_bar.style.position="absolute";
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
   search_bar.style.position="";
   document.getElementById("search-suggestion").innerHTML=null;

}



// **********************Signin****************************************

let signupDatafromLs=JSON.parse(localStorage.getItem("signup-data"))||[]
let nameforshow = JSON.parse(localStorage.getItem("name"))||""

let signintext=document.querySelector("#show-login")
if(nameforshow.length>0){
 signintext.innerHTML= `Welcome, ${nameforshow}`
}
else {
 signintext.innerHTML= `Welcome, Sign In`
}



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

   // **********************Signin****************************************
          