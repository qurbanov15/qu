const bar=document.querySelector(".bar")
const resp=document.querySelector(".resp")
const header=document.querySelector("header")
const resp_header=document.querySelector(".resp_header")
const faq_top_right=document.querySelector(".faq_top_right")
const up=document.querySelectorAll(".up")
const rating_card=document.querySelectorAll(".rating_card")

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
console.log(rating_card);
for (let d = 0; d < rating_card.length; d++) {
    rating_card[d].addEventListener("mousemove",function () {
        
    
    for (let a = 0; a < rating_card.length; a++) {
        rating_card[a].classList.remove("testimonials_resp")
        
     }
     rating_card[d].classList.toggle("testimonials_resp")
     console.log(rating_card[d].className);
    })
}
for (let y = 0; y < rating_card.length; y++) {
    fetch("")
    
}
    
    

   
