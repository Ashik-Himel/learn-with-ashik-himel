// Header
const hamburger = document.querySelector(".fa-bars");
const cross = document.querySelector(".fa-xmark");
const nav = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav a");
hamburger.addEventListener("click", function() {nav.classList.add("active")});
cross.addEventListener("click", function() {nav.classList.remove("active")});
navLink.forEach(n => n.addEventListener("click", function() {nav.classList.remove("active")}));

// Footer
const currentYear = document.querySelector(".current-year");
const d = new Date();
currentYear.innerHTML = d.getFullYear();

// Subscribe Form
const subscribeBtn = document.querySelectorAll(".subscribe-btn");
subscribeBtn.forEach(n =>n.addEventListener("click", function() {
    sessionStorage.setItem("responseTxt", 'Thank you so much for subscribe "Learn with Ashik-Himel". You will get updates about my courses and so on. Stay tuned with me. Thank you again!');
}));