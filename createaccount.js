let signupDatafromLs=JSON.parse(localStorage.getItem("signup-data"))||[]
let form=document.querySelector("#form")
let user_alert=document.querySelector('#message')
form.addEventListener("submit",getUserData)

function getUserData(event){
  event.preventDefault()

  let userData={
            email:form.email.value,
            password:form.password.value
            }  
       if(checkFrom(userData)==true)
       {
        if(chekSpicalsymbol(userData.password)==true)
        {
           
            if(checkEmail(userData.email)==true)
            {
              signupDatafromLs.push(userData)
        
              localStorage.setItem("signup-data",JSON.stringify(signupDatafromLs))

               alert("Signup Successful")
               window.location.href="index.html"
            }
            else
            {
              alert("This Account Already Exist")
            }
           
        }
        else{
            let massage=document.createElement('p')
            massage.innerText="Weak Password"   
            massage.style.color="red"
                user_alert.append(massage)
                setTimeout(()=>{
                  location.reload()
                },1000)
        }
       }else{
        alert("All Field must be filled out")

        setTimeout(()=>{
          location.reload()
        },1)
       }

          
            
}

function checkFrom(userData){
    let check=0
  for(let key in userData)
  {
      if(userData[key]=="")
      {
          check=1
      }
  }
  if(check==0)
  {
    return true
}
else{
   return false

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