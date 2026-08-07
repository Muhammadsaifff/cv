const typingText = [
    "RTL Design Engineer",
    "FPGA Developer",
    "Digital IC Design Enthusiast",
    "Verilog & SystemVerilog Developer",
    "Computer Science Graduate"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (!typingElement) return;

    const current = typingText[textIndex];

    if (!deleting) {
        typingElement.textContent = current.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === current.length) {
            deleting = true;
            setTimeout(typeEffect, 1800);
            return;
        }
    } else {
        typingElement.textContent = current.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            textIndex++;

            if (textIndex >= typingText.length) {
                textIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 45 : 90);
}

typeEffect();

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

document.querySelectorAll(
    "section,.project-card,.stat-card,.glass-card,.timeline-item"
).forEach(item => {
    item.classList.add("hidden");
    observer.observe(item);
});

const nav = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        nav.style.background = "rgba(7,11,23,.96)";
        nav.style.boxShadow = "0 15px 35px rgba(0,0,0,.35)";

    } else {

        nav.style.background = "rgba(7,11,23,.85)";
        nav.style.boxShadow = "none";

    }

});

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

const profile = document.querySelector(".image-frame");

document.addEventListener("mousemove", e => {

    if (!profile) return;

    const x = (window.innerWidth / 2 - e.clientX) / 35;
    const y = (window.innerHeight / 2 - e.clientY) / 35;

    profile.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

document.addEventListener("mouseleave", () => {

    if (!profile) return;

    profile.style.transform =
        "rotateY(0deg) rotateX(0deg)";

});

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {
        document.title = "Come Back 👋";
    } else {
        document.title = "Muhammad Saif Shakil | Digital IC Design Engineer";
    }

});

const year = new Date().getFullYear();

const footer = document.querySelector("footer p:last-child");

if (footer) {
    footer.textContent = `© ${year} Muhammad Saif Shakil. All Rights Reserved.`;
}
