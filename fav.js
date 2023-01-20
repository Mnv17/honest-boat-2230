// imagepart
let slideimage=document.getElementById("imagediv");
let images=["https://t4.ftcdn.net/jpg/04/62/25/91/360_F_462259136_ieLHu3BL11q66HMrKFTtzleU8QPPmEOT.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwKg5-zJ8NaEm6IzsRM5_ImmnlKOxQ0y-Vcw&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-fvvtLLLrYYCQx2U6DldrOwyuxl90BfSrqw&usqp=CAU",
"https://images.unsplash.com/photo-1577387196112-579d95312c6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2FsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsl4OlI293A3lQZSTZx79JdujQUyH3a6FgVw&usqp=CAU"]
let image=document.createElement("img");
let i=0;
image.setAttribute("src",images[i]);
image.setAttribute("id","slide")
slideimage.append(image)
setInterval(()=>{
image.setAttribute("src",images[i])
i++
if(i==images.length){
    i=0
}
},5000)






favourite=JSON.parse(localStorage.getItem("favouritedata"))||[];
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

childdiv2.append(description,description1,ratings,price)
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
    localStorage.setItem("cart",JSON.stringify(favourite))
    showdata(favourite)
  
})
// deletepartend
childdiv3.append(deletebtn,addtocart)

childdiv.append(childdiv1,childdiv2,childdiv3)

maindiv.append(childdiv)
})

}
