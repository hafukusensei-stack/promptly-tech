// Typing effect for hero title
const text = "We Build Websites That Feel Alive.";
let index = 0;
const speed = 70;
const typewriter = document.getElementById("typewriter");

function typeEffect() {
  if (index < text.length) {
    typewriter.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}
window.onload = typeEffect;

// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Fade in on scroll
const fadeSections = document.querySelectorAll(".fade-section");
window.addEventListener("scroll", () => {
  fadeSections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});
