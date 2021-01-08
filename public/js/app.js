let aNav = document.getElementsByClassName("nav-link")
let section = document.querySelectorAll("section")
console.log(section);
console.log(aNav);

            // Bouton Home

aNav[0].addEventListener("mouseenter", function(){
    aNav[0].style.color = "#fec135"
    aNav[0].style.transition = "1s"
})

aNav[0].addEventListener("mouseleave", function(){
    aNav[0].style.color = "white"
    aNav[0].style.transition = "1s"
})

aNav[0].addEventListener("click", function(){
    section[2].style.opacity = "0"
    section[2].style.transition = "opacity 1s"
    section[3].style.opacity = "0"
    section[3].style.transition = "opacity 1s"
    section[4].style.opacity = "0"
    section[4].style.transition = "opacity 1s"
    setTimeout(() => {
        section[3].style.display = "none"
        section[4].style.display = "none"
        section[2].style.display = "block"
    }, 1000);
    setTimeout(() => {
        section[2].style.opacity = "1"
        section[2].style.transition = "opacity 1s"
    }, 1500);
})

            // Bouton Portfolio

aNav[1].addEventListener("mouseenter", function(){
    aNav[1].style.color = "#fec135"
    aNav[1].style.transition = "1s"
})

aNav[1].addEventListener("mouseleave", function(){
    aNav[1].style.color = "white"
    aNav[1].style.transition = "1s"
})

aNav[1].addEventListener("click", function(){
    section[2].style.opacity = "0"
    section[2].style.transition = "opacity 1s"
    section[3].style.opacity = "0"
    section[3].style.transition = "opacity 1s"
    section[4].style.opacity = "0"
    section[4].style.transition = "opacity 1s"
    setTimeout(() => {
        section[2].style.display = "none"
        section[4].style.display = "none"
        section[3].style.display = "block"
    }, 1000);
    setTimeout(() => {
        section[3].style.opacity = "1"
        section[3].style.transition = "opacity 1s"
    }, 1500);
})

            // Bouton Contact

aNav[2].addEventListener("mouseenter", function(){
    aNav[2].style.color = "#fec135"
    aNav[2].style.transition = "1s"
})

aNav[2].addEventListener("mouseleave", function(){
    aNav[2].style.color = "white"
    aNav[2].style.transition = "1s"
})

aNav[2].addEventListener("click", function(){
    section[2].style.opacity = "0"
    section[2].style.transition = "opacity 1s"
    section[3].style.opacity = "0"
    section[3].style.transition = "opacity 1s"
    section[4].style.opacity = "0"
    section[4].style.transition = "opacity 1s"
    setTimeout(() => {
        section[2].style.display = "none"
        section[3].style.display = "none"
        section[4].style.display = "block"
    }, 1000);
    setTimeout(() => {
        section[4].style.opacity = "1"
        section[4].style.transition = "opacity 1s"
    }, 1500);
})

let btnExplore = section[2].getElementsByClassName("btnTitreHome")
console.log(btnExplore);

            // Bouton explore me 


btnExplore[0].addEventListener("mouseenter", function(){
    btnExplore[0].style.backgroundColor = "#f7d482"
    btnExplore[0].style.transition = "1s"
})

btnExplore[0].addEventListener("mouseleave", function(){
    btnExplore[0].style.backgroundColor = "#fec135"
    btnExplore[0].style.transition = "1s"
})

btnExplore[0].addEventListener("click", function(){
    section[2].style.opacity = "0"
    section[2].style.transition = "opacity 1s"
    section[3].style.opacity = "0"
    section[3].style.transition = "opacity 1s"
    section[4].style.opacity = "0"
    section[4].style.transition = "opacity 1s"
    setTimeout(() => {
        section[2].style.display = "none"
        section[4].style.display = "none"
        section[3].style.display = "block"
    }, 1000);
    setTimeout(() => {
        section[3].style.opacity = "1"
        section[3].style.transition = "opacity 1s"
    }, 1500);
})

            // Div reseaux scociaux
let reseau = document.getElementsByClassName("reseauCV")

let lienReseau = reseau[0].querySelectorAll("a")


lienReseau[0].addEventListener("mouseenter", function(){
    lienReseau[0].style.color = "#fec135"
    lienReseau[0].style.transition = "1s"
})

lienReseau[0].addEventListener("mouseleave", function(){
    lienReseau[0].style.color = "white"
    lienReseau[0].style.transition = "1s"
})

lienReseau[1].addEventListener("mouseenter", function(){
    lienReseau[1].style.color = "#fec135"
    lienReseau[1].style.transition = "1s"
})

lienReseau[1].addEventListener("mouseleave", function(){
    lienReseau[1].style.color = "white"
    lienReseau[1].style.transition = "1s"
})

lienReseau[2].addEventListener("mouseenter", function(){
    lienReseau[2].style.color = "#fec135"
    lienReseau[2].style.transition = "1s"
})

lienReseau[2].addEventListener("mouseleave", function(){
    lienReseau[2].style.color = "white"
    lienReseau[2].style.transition = "1s"
})

let body = document.body.querySelector("body").onload = function(){
    body.style.opacity = "0"
}


