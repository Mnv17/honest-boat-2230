// imagepart
// let slideimage=document.getElementById("imagediv");
// let images=["https://t4.ftcdn.net/jpg/04/62/25/91/360_F_462259136_ieLHu3BL11q66HMrKFTtzleU8QPPmEOT.jpg",
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwKg5-zJ8NaEm6IzsRM5_ImmnlKOxQ0y-Vcw&usqp=CAU",
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-fvvtLLLrYYCQx2U6DldrOwyuxl90BfSrqw&usqp=CAU",
// "https://images.unsplash.com/photo-1577387196112-579d95312c6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2FsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsl4OlI293A3lQZSTZx79JdujQUyH3a6FgVw&usqp=CAU"]
// let image=document.createElement("img");
// let i=0;
// image.setAttribute("src",images[i]);
// image.setAttribute("id","slide")
// slideimage.append(image)
// setInterval(()=>{
// image.setAttribute("src",images[i])
// i++
// if(i==images.length){
//     i=0
// }
// },5000)






let favourite=JSON.parse(localStorage.getItem("favouritedata"))||[];
let maindiv=document.getElementById("cartdiv1");
let cartdata=JSON.parse(localStorage.getItem("cart"))||[];
showdata(favourite)
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

let ratings=document.createElement("img");
ratings.setAttribute("src","https://static.thenounproject.com/png/766721-200.png")
ratings.setAttribute("id","ratings")
let price=document.createElement("p");
price.innerText=`${item.price}$`

childdiv2.append(description,ratings,price)
let childdiv3=document.createElement("div");
childdiv3.setAttribute("id","childdiv3")
let deletebtn=document.createElement("button");
deletebtn.innerText="Remove Item"
deletebtn.setAttribute("id","deletebtn")
let addtocart=document.createElement("button");
addtocart.innerText="Add To Cart";
addtocart.setAttribute("id","addtocartbtn");
addtocart.addEventListener("click",()=>{
    cartdata.push({...item,quantity:1});
    localStorage.setItem("cart",JSON.stringify(cartdata))
    alert("This Product is Successfully Added To Cart")
    data.splice(index,1)
    localStorage.setItem("favouritedata",JSON.stringify(favourite))
    showdata(favourite)
})
// deletepart
deletebtn.addEventListener("click",()=>{
    data.splice(index,1)
    localStorage.setItem("favouritedata",JSON.stringify(favourite))
    showdata(favourite)
  
})
// deletepartend
childdiv3.append(deletebtn,addtocart)

childdiv.append(childdiv1,childdiv2,childdiv3)

maindiv.append(childdiv)
})

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

// **********************Search****************************************


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


// **********************Search****************************************

// let search = document.getElementById("search-bar");

// let obj={};
// fetch("./men.json")
// .then(res=>res.json())
// .then(data=>{
// console.log(data);
// obj=data;

// });

// search.addEventListener("input", (e)=>{
// console.log(e.target.value);


// let searchResult=obj.filter((item,index)=>{

//   console.log((item.description).includes(e.target.value));
//   if((item.description).toLowerCase().includes(e.target.value.toLowerCase())){
//     return true
//   }
// })

// searchResult=searchResult.map((data)=>{
//   return "<li class='suggestion-list' data-id="+data.id+">"+data.description+"</li>";
// })
// document.getElementById("search-suggestion").innerHTML=null;
// document.getElementById("search-suggestion").innerHTML=searchResult.join(" ");
// document.querySelector("suggestion-list").addEventListener("click",(e)=>{
//   e.data("style")
//   let searchResult=obj.filter((item,index)=>{
//     if(item.style==e.data("style")){
//       return true
//     }
//   })
//   if(searchResult.category){
//     window.location.href="./men.html"
//   }
// });
// })
// **********************Search****************************************