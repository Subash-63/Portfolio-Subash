// ==========================================
// PORTFOLIO JAVASCRIPT
// Created for Subash R
// ==========================================


// ===============================
// PRELOADER
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 600);

});


// ===============================
// STICKY HEADER
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    }

    else {

        header.classList.remove("sticky");

    }

});


// ===============================
// TYPING EFFECT
// ===============================

const words = [

    "Full Stack Developer",

    "Java Developer",

    "Python Developer",

    "Software Engineer"

];

let wordIndex = 0;

let charIndex = 0;

let typing = true;

const typingText = document.querySelector(".typing");

function typeEffect() {

    if (!typingText) return;

    let currentWord = words[wordIndex];

    if (typing) {

        typingText.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            typing = false;

            setTimeout(typeEffect, 1500);

            return;

        }

    }

    else {

        typingText.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            typing = true;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, typing ? 120 : 60);

}

typeEffect();


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        const height = section.offsetHeight;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// SMOOTH SCROLL
// ===============================

navLinks.forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ===============================
// SCROLL REVEAL
// ===============================

const reveals = document.querySelectorAll(

".skill-card,.project-card,.certificate-card,.timeline-item,.internship-card,.info-box"

);

function revealAnimation() {

    reveals.forEach(item => {

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealAnimation);

revealAnimation();


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log("Portfolio Loaded Successfully 🚀");
// ===============================
// SKILL BAR ANIMATION
// ===============================

const progressBars = document.querySelectorAll(".progress-bar");

function animateSkills() {

    progressBars.forEach(bar => {

        const width = bar.style.width || window.getComputedStyle(bar).width;

        bar.dataset.width = width;

        bar.style.width = "0";

    });

    const skillsSection = document.querySelector("#skills");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                progressBars.forEach(bar => {

                    bar.style.transition = "2s";

                    bar.style.width = bar.dataset.width;

                });

            }

        });

    });

    observer.observe(skillsSection);

}

animateSkills();


// ===============================
// CONTACT FORM VALIDATION
// ===============================

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const inputs = form.querySelectorAll("input, textarea");

let valid=true;

inputs.forEach(input=>{

if(input.value.trim()===""){

valid=false;

input.style.border="2px solid red";

}else{

input.style.border="2px solid #38bdf8";

}

});

if(valid){

alert("Thank you! Your message has been sent successfully.");

form.reset();

}

});

}


// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn=document.querySelector(".top-btn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.opacity="1";
topBtn.style.visibility="visible";

}else{

topBtn.style.opacity="0";
topBtn.style.visibility="hidden";

}

});


// ===============================
// HERO IMAGE FLOAT EFFECT
// ===============================

const heroImage=document.querySelector(".hero-image img");

if(heroImage){

setInterval(()=>{

heroImage.style.transform="translateY(-10px)";

setTimeout(()=>{

heroImage.style.transform="translateY(0px)";

},1000);

},2000);

}


// ===============================
// CARD HOVER EFFECT
// ===============================

const cards=document.querySelectorAll(

".skill-card,.certificate-card,.project-card,.internship-card,.info-box"

);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


// ===============================
// CURRENT YEAR
// ===============================

const year=document.querySelector(".copyright");

if(year){

const currentYear=new Date().getFullYear();

year.innerHTML="© "+currentYear+" Subash R. All Rights Reserved.";

}


// ===============================
// SIMPLE FADE-IN EFFECT
// ===============================

const fadeItems=document.querySelectorAll("section");

const fadeObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

fadeItems.forEach(item=>{

item.style.opacity="0";
item.style.transform="translateY(50px)";
item.style.transition="all 1s ease";

fadeObserver.observe(item);

});
// ===============================
// MOBILE MENU TOGGLE
// ===============================

const menuBtn = document.querySelector(".menu");
const nav = document.querySelector("nav");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("show");

    });

}

// Close menu after clicking a link

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("show");

    });

});

// ===============================
// CURSOR GLOW EFFECT
// ===============================

const cursor = document.createElement("div");

cursor.className = "cursor-glow";

document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

const buttons = document.querySelectorAll(".btn,.btn2");

buttons.forEach(btn => {

    btn.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = this.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

// ===============================
// SCROLL PROGRESS BAR
// ===============================

const progress = document.createElement("div");

progress.id = "scroll-progress";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

    const progressWidth = (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressWidth + "%";

});

// ===============================
// TEXT REVEAL EFFECT
// ===============================

const titles = document.querySelectorAll(".section-title h2");

titles.forEach(title => {

    title.style.opacity = "0";
    title.style.transform = "translateY(30px)";
    title.style.transition = ".8s";

});

const titleObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

titles.forEach(title => {

    titleObserver.observe(title);

});

// ===============================
// KEYBOARD SHORTCUT
// Press H -> Scroll Home
// ===============================

document.addEventListener("keydown", (e) => {

    if (e.key.toLowerCase() === "h") {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

});

// ===============================
// PERFORMANCE
// ===============================

window.addEventListener("resize", () => {

    console.log("Window resized");

});

// ===============================
// FINAL MESSAGE
// ===============================

console.log("%cWelcome to Subash Portfolio 🚀",
"color:#38bdf8;font-size:18px;font-weight:bold;");