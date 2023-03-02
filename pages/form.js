const contactBtn = document.querySelectorAll(".contact-btn");
contactBtn.forEach(n => n.addEventListener("click", function() {
    sessionStorage.setItem("responseTxt", 'Thank you for your massage. I will reply you as soon as possible. Stay tuned with me. Thank you again!');
}));

const paymentBtn = document.querySelector(".payment-btn");
paymentBtn.addEventListener("click", function() {
    sessionStorage.setItem("responseTxt", 'Thank you so much for enroll on this course. I will check your information and confirm you in your email. Stay tuned with me.');
});