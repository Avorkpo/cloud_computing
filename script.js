// ================================
// Mobile Navigation
// ================================

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("active");

    if(menu.classList.contains("active")){
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }else{
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

});

// ================================
// Sticky Header
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 80){
        header.style.padding="12px 8%";
        header.style.boxShadow="0 10px 30px rgba(0,0,0,.15)";
    }else{
        header.style.padding="18px 8%";
        header.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";
    }

});

// ================================
// Smooth Close Mobile Menu
// ================================

document.querySelectorAll("#menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("active");
        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    });

});

// ================================
// Scroll Reveal Animation
// ================================

const reveals = document.querySelectorAll(
".feature,.car-card,.testimonial,.about,.hire,.buy,.contact"
);

function revealSection(){

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight-100){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealSection);

revealSection();


// ================================
// Active Navigation Highlight
// ================================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ================================
// Back To Top Button
// ================================

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ================================
// Car Booking Buttons
// ================================

const hireButtons=document.querySelectorAll(".car-card button");

hireButtons.forEach(button=>{

button.addEventListener("click",()=>{

alert("Thank you for choosing DriveHub!\n\nOur booking team will contact you shortly.");

});

});

// ================================
// Contact Form
// ================================

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you for contacting DriveHub!\n\nWe will reply to you soon.");

form.reset();

});

// ================================
// Typing Hero Effect
// ================================

const heroTitle=document.querySelector(".hero h1");

const text="Luxury Cars for Hire & Sale";

let i=0;

heroTitle.innerHTML="";

function typeEffect(){

if(i<text.length){

heroTitle.innerHTML+=text.charAt(i);

i++;

setTimeout(typeEffect,70);

}

}

typeEffect();


// ================================
// Counter Animation
// ================================

const numbers=[200,5000,120];

const cards=document.querySelectorAll(".feature h3");

cards.forEach((card,index)=>{

let count=0;

const target=numbers[index];

const timer=setInterval(()=>{

count++;

card.innerHTML=count+"+";

if(count>=target){

clearInterval(timer);

}

},10);

});

// ================================
// Footer Year
// ================================

const year=new Date().getFullYear();

document.querySelector("footer p").innerHTML=
`© ${year} DriveHub. All Rights Reserved.`;