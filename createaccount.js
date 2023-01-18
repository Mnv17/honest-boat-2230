// document.getElementById("form").addEventListener("submit", userData);

// function userData(event) {
//   event.preventDefault();

//   let userdata = {
//     first_name: form.f_name.value,
//     last_name: form.l_name.value,
//     Email: form.email.value,
//     phone: form.phone.value,
//     password: form.password.value,
//     Confirm: form.c_password.value,
//   };



//   if (obj.password === obj.Confirm) {
//     localStorage.setItem("UserDetail", JSON.stringify(obj));
//   window.location.href = "signinup.html";
//   } else {
//     alert("Password not match!");
//   }

// }


let signupDatafromLs=JSON.parse(localStorage.getItem("signup-data"))||[]
let form=document.querySelector("#form")

form.addEventListener("submit",getUserData)

function getUserData(event){
  event.preventDefault()

  let userData={
            userName:form.f_name.value,
            email:form.email.value,
            password:form.password.value
            }



          if(chekSpicalsymbol(userData.password)==true )
          {
             
              if(checkEmail(userData.email)==true)
              {
                signupDatafromLs.push(userData)
          
                localStorage.setItem("signup-data",JSON.stringify(signupDatafromLs))

                 alert("Signup Successful")
                 window.location.href="signinup.html"
              }
              else
              {
                alert("This Account Already Exist")
              }
             
          }
          else{

            alert("Password must contains special Character and length should be more than five.")
          }
            
}


function chekSpicalsymbol(password){
   let str="!@#$%^&*"
      let check=false;
     for(let i=0; i<str.length; i++)
     {
       for(let j=0; j<password.length; j++)
       {
          if(str[i]===password[j])
          {
             check=true
          }
       }
     }

     if(check===true && password.length>=6)
     {
         return true
     }
     else{
        return false
     }
}

function checkEmail(email){

  let filterData=signupDatafromLs.filter(function(el){
        return  el.email===email
    })

    if(filterData.length>0)
    {
      return false
    }
    else
    {
       return true
    }
      
}