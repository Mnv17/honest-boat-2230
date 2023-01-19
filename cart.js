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
increase.innerText="Increase Quantity+"
let Quantity=document.createElement("span");
Quantity.setAttribute("id","Quantity")
Quantity.innerText=item.quantity
let decrease=document.createElement("button");
decrease.innerHTML="Decrease Quantity-";
let ratings=document.createElement("img");
ratings.setAttribute("src","https://static.thenounproject.com/png/766721-200.png")
ratings.setAttribute("id","ratings")
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
})
decrease.addEventListener("click",()=>{
    if(item.quantity>1){
    item.quantity--
    i--
    Quantity.innerText=item.quantity
    localStorage.setItem("cart",JSON.stringify(cartdata))
    showdata(cartdata)
    sum()}
})
// increasedecreasingpartend


childdiv2.append(description,description1,ratings,increase,Quantity,decrease)
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
    sum()
})
// deletepartend
childdiv3.append(deletebtn)

childdiv.append(childdiv1,childdiv2,childdiv3)

maindiv.append(childdiv)
})

}
// sumpart
function sum(){
let total=document.getElementById("subtotal")
let estimated1=document.getElementById("estimated")
let sum=0;
for(let i=0;i<cartdata.length;i++){
 sum=sum+(cartdata[i].quantity*cartdata[i].price)
 
}
total.innerText=sum;
estimated1.innerText=`${sum+5}$`
console.log(sum)}
sum()