let menu = document.querySelector("i");
let navbar = document.querySelector("nav");

menu.onclick = () => {
  menu.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

const sr = ScrollReveal({
  distance: "60px",
  duration: 2000,
  delay: 200,
  reset: false,
});

sr.reveal(".text", {delay:100, origin:"top"})
sr.reveal(".form-container form", {delay: 800, origin: "left"})
sr.reveal(".heading", {delay: 400, origin: "top"})
sr.reveal(".ride-container .box", {delay: 600, origin: "top"})
sr.reveal(".services-container .box", {delay: 600, origin: "top"})
sr.reveal(".about-container", {delay: 600, origin: "top"})
sr.reveal(".reviews-container", {delay: 600, origin: "top"})
sr.reveal(".newsletter .box", {delay: 400, origin: "bottom"})
