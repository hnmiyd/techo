const hamburger = document.getElementById("hamburger")
const nav = document.querySelector(".menu")
const header = document.querySelector("header")
const links = document.querySelectorAll(".menu li")

hamburger.addEventListener("click",()=>{
    if(nav.classList.contains("nav-active")){
        nav.classList.remove("")
        header.classList.remove("")
        hamburger.classList.add("")
        hamburger.classList.remove("fa-x");
    }
    else{
        nav.classList.add("nav-active")
        header.classList.add("")
        hamburger.classList.remove("")
        hamburger.classList.add("fa-x");
    }
})

links.forEach((link, index)=>{
    link.addEventListener("click",()=>{
        links.forEach((menu_link)=>{
            menu_link.classList.remove("active-li")
        })
        links[index].classList.add("active-li");
        nav.classList.remove("nav-active")
        header.classList.remove("header-fixed")
        hamburger.classList.add("fa-menu")
        hamburger.classList.remove("fa-x");
    })
})

$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });
});

