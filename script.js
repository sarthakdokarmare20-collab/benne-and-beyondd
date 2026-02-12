// ===== slideshow =====

const slides = document.querySelectorAll(".slide");
let index = 0;

function changeSlide(){
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

window.addEventListener("load", () => {
  setInterval(changeSlide, 7000);
});


// ===== mobile toggle =====

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});


// 🔥 AUTO CLOSE MENU ON CLICK

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
