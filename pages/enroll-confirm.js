const page1area = document.querySelector(".page-1-area");
const page2area = document.querySelector(".page-2-area");
const paymentNextBtn = document.querySelector(".payment-next-btn");
const paymentNextBtn2 = document.querySelector(".payment-next-btn-2");
paymentNextBtn.addEventListener("click", function() {
    page1area.classList.remove("active");
    page2area.classList.add("active");
});
paymentNextBtn2.addEventListener("click", function() {
    page2area.classList.remove("active");
    page1area.classList.add("active");
});