let userData=JSON.parse(localStorage.getItem("UserDetail"));


let signupDatafromLs=JSON.parse(localStorage.getItem("signup-data"))||[]
document.getElementById("form").addEventListener("submit",loginUser);



function loginUser(event){
    event.preventDefault()

    let obj={
        email:form.email.value,
        password:form.password.value
    }
    if(obj.email===userData.Email && obj.password===userData.password){
        alert("Login Successfull")
         window.location.href="./index.html"
    }else{
        alert("Invalid Credential");
    
    }

   
}




function returntohome(){
  //here we have to add window.location.href to return to home page
}

function gotocreateaccount(){
  window.location.href="./createaccount.html"
  
}