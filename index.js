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

let search = document.getElementById("search-bar");

let obj={};
fetch("./men.json")
.then(res=>res.json())
.then(data=>{
console.log(data);
obj=data;

});

//selected value in search result--start
search.addEventListener("input", (e)=>{
let searchResult=obj.filter((item,index)=>{

  console.log((item.description).includes(e.target.value));
  if((item.description).toLowerCase().includes(e.target.value.toLowerCase())){
    return true
  }
})

searchResult=searchResult.map((data)=>{
  return "<li class='suggestion-list' data-style="+data.style+">"+data.description+"</li>";
})
document.getElementById("search-suggestion").innerHTML=null;
document.getElementById("search-suggestion").innerHTML=searchResult.join(" ");
document.querySelector(".suggestion-list").addEventListener("click",(e)=>{
  // console.log(e.target.dataset.style);
  let searchResult=obj.filter((item,index)=>{
    if(item.style==e.target.dataset.style){
      return true
    }
  })
  if(searchResult[0].category=="Men"){
    window.location.href="./men.html?style="+e.target.dataset.style;
  }
  if(searchResult[0].category=="Women"){
    window.location.href="./women.html?style="+e.target.dataset.style;
  }
});
})
//selected value in search result--end
// **********************Search****************************************