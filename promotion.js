const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll (".nav-link").forEach(n => n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    hamburger.classList.remove("active");
}))

var slideIndex = 1
showSlides (slideIndex);
function plusSlides (n)
{
    showSlides(slideIndex += n)
}
function showSlides (n)
{
    var i;
    var slides=document.getElementsByClassName("slide");
    if (n > slides.length)
    {
        slideIndex=1;
    }
    if (n<1)
    {
        slideIndex=slides.length
    }
    for (i  = 0; i<slides.length; i++)
    {
        slides[i].style.display="none";
    }
    slides[slideIndex-1].style.display="block";
}

