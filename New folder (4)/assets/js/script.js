const bar=document.querySelector(".bar")
const resp=document.querySelector(".resp")
const header=document.querySelector("header")
const resp_header=document.querySelector(".resp_header")
const faq_top_right=document.querySelector(".faq_top_right")
const up=document.querySelectorAll(".up")
// const rating_card=document.querySelectorAll(".rating_card")

bar.addEventListener("click",function () {
 
    resp.classList.toggle("responsive")
    header.classList.toggle("header_bg")
})

for (let i = 0; i < up.length; i++) {
  
    up[i].addEventListener("click",function () {
       
        
         for (let k = 0; k < faq_top_right.children.length; k++) {
            faq_top_right.children[k].classList.remove("respon_faq")
            
         }
         faq_top_right.children[i].classList.add("respon_faq")
        console.log([i].className);
       })
 

}

// for (let d = 0; d < rating_card.length; d++) {
//     rating_card[d].addEventListener("mousemove",function () {
        
    
//     for (let a = 0; a < rating_card.length; a++) {
//         rating_card[a].classList.remove("testimonials_resp")
        
//      }
//      rating_card[d].classList.toggle("testimonials_resp")
//      console.log(rating_card[d].className);
//     })
// }
function ratingCard(data,i) {
    const testimonials_cards=document.querySelector(".testimonials_cards")
    testimonials_cards.className="testimonials_cards"
    const rating_card=document.createElement("div")
    rating_card.className="rating_card"
    testimonials_cards.append(rating_card)
    const  star=document.createElement("img")
    star.src="./assets/img/star.png"
    const text=document.createElement("p")
    text.innerText=data[i].flags.alt
    const meta=document.createElement("div")
    meta.className="meta"
    const flag = document.createElement("img")
    flag.src=data[i].flags.png
    const country=document.createElement("div")
    const h4=document.createElement("h4")
    h4.innerText=data[i].name.common
    const capital=document.createElement("p")
    capital.innerText=data[i].capital
    country.append(h4,capital)
    meta.append(flag,country)
    rating_card.append(star,text,meta)
   


}
    fetch("https://restcountries.com/v3.1/all")
    .then(a=> a.json())
    .then(data=>{
        for (let i = 0; i < 3; i++) {
            ratingCard(data,i)
            
        }
        const rating_cardd=document.querySelectorAll(".rating_card")
    console.log(rating_cardd);
    for (let d = 0; d < rating_cardd.length; d++) {
        rating_cardd[d].addEventListener("mousemove",function () {
            
        
        for (let a = 0; a < rating_cardd.length; a++) {
            rating_cardd[a].classList.remove("testimonials_resp")
            
         }
         rating_cardd[d].classList.toggle("testimonials_resp")
         console.log(rating_cardd[d].className);
        })
    }
    })
    const form_search=document.querySelector(".form_search")
    const submit=document.querySelector("#submit")
    const message=document.querySelector("#message")
    const select=document.querySelector("#select")
    const email=document.querySelector("#email")
let arr = [];

if (JSON.parse(localStorage.getItem("arr")) !== null) {
  arr = JSON.parse(localStorage.getItem("arr"));
}

   submit.addEventListener("click",function () {
    let obj={
        email:'',
        select:'',
        message:'',
        
       }
       arr.push(obj)
    obj.email=email.value
   obj.select=select.value
   obj.message=message.value
   localStorage.setItem("arr", JSON.stringify(arr));
   })
   
    