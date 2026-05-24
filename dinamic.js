// MENU RESPONSIVE

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// EFECTO DESVANECER SCROLL

const fadeElements = document.querySelectorAll(".fade-scroll");

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }

  });

}, {
  threshold:0.2
});

fadeElements.forEach(el => {
  observer.observe(el);
});

// PAUSAR CARRUSEL AL PASAR MOUSE

const linearTrack = document.querySelector(".linear-track");

linearTrack.addEventListener("mouseenter", () => {
  linearTrack.style.animationPlayState = "paused";
});

linearTrack.addEventListener("mouseleave", () => {
  linearTrack.style.animationPlayState = "running";
});