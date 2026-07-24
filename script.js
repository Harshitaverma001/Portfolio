// ===============================
// HARSHITA VERMA PORTFOLIO
// script.js
// ===============================

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({

                behavior:'smooth'

            });

        }

    });

});


// ===============================
// Active Navbar
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});

// ==============================
// ===============================
// Scroll To Top
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ===============================
// Hero Typing Animation
// ===============================

const text="Web Developer | Python Learner | UI Designer";

const typing=document.querySelector(".hero-content h2");

let i=0;

typing.innerHTML="";

function type(){

    if(i<text.length){

        typing.innerHTML+=text.charAt(i);

        i++;

        setTimeout(type,70);

    }

}

type();


// ===============================
// Project Hover Effect
// ===============================

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const centerX=rect.width/2;

const centerY=rect.height/2;

const rotateX=-(y-centerY)/15;

const rotateY=(x-centerX)/15;

card.style.transform=
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0) scale(1)";

});

});



// ===============================
// Fade Animation
// ===============================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},

{

threshold:0.15

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(80px)";

sec.style.transition="1s";

observer.observe(sec);

});



// ===============================
// Floating Animation
// ===============================

const circle=document.querySelector(".circle");

window.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.pageX)/35;

let y=(window.innerHeight/2-e.pageY)/35;

circle.style.transform=`translate(${x}px,${y}px)`;

});



// ===============================
// Contact Form
// ===============================

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank You Harshita 😊\n\nYour message has been sent successfully!");

form.reset();

});



// ===============================
// Counter Animation
// ===============================

const counters=document.querySelectorAll(".counter-box h1");

counters.forEach(counter=>{

const update=()=>{

const target=parseInt(counter.innerText);

let count=parseInt(counter.getAttribute("data-count"))||0;

const inc=Math.ceil(target/40);

if(count<target){

count+=inc;

counter.setAttribute("data-count",count);

counter.innerText=count+"+";

setTimeout(update,40);

}

else{

counter.innerText=target+"+";

}

};

update();

});



// ===============================
// Button Ripple Effect
// ===============================

document.querySelectorAll("button,.btn,.btn2").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow="0 0 30px #bb86fc";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="none";

});

});



// ===============================
// Navbar Shadow
// ===============================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.boxShadow="0 0 25px rgba(123,47,247,.5)";

}

else{

header.style.boxShadow="none";

}

});



// ===============================
// Console Message
// ===============================

console.log("%cHarshita Verma Portfolio","color:#bb86fc;font-size:24px;font-weight:bold;");

console.log("Made with ❤️ using HTML CSS JavaScript");