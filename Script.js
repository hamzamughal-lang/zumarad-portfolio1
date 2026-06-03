const menuToggle =
document.getElementById("menu-toggle");

const mobileMenu =
document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {

mobileMenu.classList.toggle("active");

});


const menuLinks =
document.querySelectorAll(".mobile-menu a");

menuLinks.forEach((link) => {

link.addEventListener("click", () => {

mobileMenu.classList.remove("active");

});

});

const reveals =
document.querySelectorAll(".reveal");

function revealSections(){

reveals.forEach((element)=>{

const windowHeight =
window.innerHeight;

const revealTop =
element.getBoundingClientRect().top;

const revealPoint = 100;

if(revealTop < windowHeight - revealPoint){

element.classList.add("active");

}

});

}

window.addEventListener(
"scroll",
revealSections
);

revealSections();
window.addEventListener("scroll", ()=>{

const navbar =
document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});