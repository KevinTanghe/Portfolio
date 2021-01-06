let aNav = document.getElementsByClassName("nav-link")
let section = document.querySelectorAll("section")
console.log(section);
aNav[0].addEventListener("click", function(){
    section[2].style.display = "block"
    section[2].style.transition = "1s"
    section[2].style.opacity = "1"
})

aNav[1].addEventListener("click", function(){
    section[2].style.opacity = "0"
    section[2].style.transition = "opacity 1s"
    setTimeout(() => {
        section[2].style.display = "none"
    }, 1000);
})