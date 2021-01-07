let aNav = document.getElementsByClassName("nav-link")
let section = document.querySelectorAll("section")
console.log(section);
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