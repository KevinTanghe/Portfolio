let aNav = document.getElementsByClassName("nav-link")
let section = document.querySelectorAll("section")

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


let home = document.getElementById("home")
let chiffreHome = home.querySelectorAll("span")
let infoCV = document.getElementsByClassName("bouleVide")
let progress = document.getElementsByClassName("progress-bar")
// span 1 3 5

// progress[0].style.width = "10%"


window.addEventListener("load", function(){
    document.body.style.opacity = "1"
    document.body.style.transition = "opacity 2s"

    setTimeout(() => {
        chiffreHome[3].innerHTML = "2"
        chiffreHome[5].innerHTML = "1"
        infoCV[0].classList.toggle("boulePleine")
        infoCV[0].style.transition = "1s"
        infoCV[0].classList.toggle("bouleVide")
        infoCV[4].classList.toggle("boulePleine")
        infoCV[4].style.transition = "1s"
        infoCV[4].classList.toggle("bouleVide")
        progress[0].style.width = "85%"
        progress[0].style.transition = "2s"
        progress[1].style.width = "75%"
        progress[1].style.transition = "2s"
        progress[2].style.width = "70%"
        progress[2].style.transition = "2s"
    }, 500);

    setTimeout(() => {
       chiffreHome[3].innerHTML = "5"
    }, 700);
    setTimeout(() => {
        chiffreHome[3].innerHTML = "6"
        chiffreHome[5].innerHTML = "2"
    }, 900);

    setTimeout(() => {
        chiffreHome[3].innerHTML = "7"
        infoCV[0].classList.toggle("boulePleine")
        infoCV[0].style.transition = "1s"
        infoCV[0].classList.toggle("bouleVide")
        infoCV[3].classList.toggle("boulePleine")
        infoCV[3].style.transition = "1s"
        infoCV[3].classList.toggle("bouleVide")
    }, 1100);
    setTimeout(() => {
        chiffreHome[3].innerHTML = "8"
        chiffreHome[5].innerHTML = "3"
    }, 1300);

    setTimeout(() => {
        chiffreHome[3].innerHTML = "9"
        infoCV[0].classList.toggle("boulePleine")
        infoCV[0].style.transition = "1s"
        infoCV[0].classList.toggle("bouleVide")
        infoCV[2].classList.toggle("boulePleine")
        infoCV[2].style.transition = "1s"
        infoCV[2].classList.toggle("bouleVide")
    }, 1500);
    setTimeout(() => {
        chiffreHome[3].innerHTML = "11"
        chiffreHome[5].innerHTML = "4"
    }, 1700);

    setTimeout(() => {
       chiffreHome[3].innerHTML = "13"
       chiffreHome[5].innerHTML = "5"
       infoCV[0].classList.toggle("boulePleine")
       infoCV[0].style.transition = "1s"
       infoCV[0].classList.toggle("bouleVide")
    }, 1900);
})


let btnContact = document.getElementsByClassName("btnContact")

btnContact[0].addEventListener("mouseenter", function(){
    btnContact[0].style.backgroundColor = "#f7d482"
    btnContact[0].style.transition = "1s"
})

btnContact[0].addEventListener("mouseleave", function(){
    btnContact[0].style.backgroundColor = "#fec135"
    btnContact[0].style.transition = "1s"
})

let input = document.querySelectorAll("input")
let textarea = document.querySelector("textarea")

btnContact[0].addEventListener("click", function(){
    input[0].value = ""
    input[1].value = ""
    textarea.value = ""
    alert("Message envoyé")
})