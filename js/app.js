const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;
let rotateDegree = 0;

function update(cursorPosition){
    parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;

        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
    });
}

update(0);

window.addEventListener("mousemove", (e) => {
    if(timeline.isActive()) return;

    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    rotateDegree = xValue / (window.innerWidth / 2) * 20;
    update(e.clientX);
});

/* GSAP Animation */
let timeline = gsap.timeline();

Array.from(parallax_el)
    timeline.from(
    ".text h1", 
    {
    y: 
    window.innerHeight - 
    document.querySelector(".text h1").getBoundingClientRect().top + 200,
    duration: 1.5, 
    }, 
    "1"
)
.from(".text h2",
    {
    y: -150,
    opacity: 0,
    duration: 1,
    }, "1.5"
)
.from(".header",
    {
    opacity: 0,
    duration: 1,
    }, "1.5"
);

var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}

document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
});