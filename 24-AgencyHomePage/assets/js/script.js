const bar=document.querySelector(".bar")
const resp=document.querySelector(".resp")
const header=document.querySelector("header")
bar.addEventListener("click",function () {
    resp.classList.toggle("responsive")
    header.classList.toggle("header_bg")
})

function dateCard(data,i) {
    const cards=document.querySelector(".cards")
    cards.className="cards"
    const date_card=document.createElement("div")
    date_card.classList="date_card"
    cards.append(date_card)
    const top=document.createElement("div")
    const textFisrt=document.createElement("p")
    textFisrt.innerText=i+1
    const textSecond=document.createElement("p")
    textSecond.innerText=data[i].name.common+" "+data[i].capital
    top.append(textFisrt,textSecond)
    const date=document.createElement("div")
    date.className="date"
    const hours_img=document.createElement("img")
    hours_img.src="./assets/img/Shape2.png"
    const time=document.createElement("p")
    time.innerText=data[i].timezones[0]
    date.append(hours_img,time)
    const card_bottom=document.createElement("div")
    card_bottom.className="card_bottom"
    const h4 =document.createElement("h4")
    h4.innerText=data[i].subregion
    const text=document.createElement("p")
    text.innerText=data[i].flags.alt
    const explore=document.createElement("p")
    explore.innerText=`Explore Now`
    card_bottom.append(h4,text,explore)
    date_card.append(top,date,card_bottom)
    
}
fetch("https://restcountries.com/v3.1/all")
    .then(a=> a.json())
    .then(data=>{
        for (let i = 78; i < 81; i++) {
            dateCard(data,i)
            
        }
    })
    
