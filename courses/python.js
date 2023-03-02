const ques1 = document.querySelector(".ques1-area");
const ques2 = document.querySelector(".ques2-area");
const ques3 = document.querySelector(".ques3-area");
ques1.addEventListener("click", function() {
    ques1.classList.toggle("active");
    ques2.classList.remove("active");
    ques3.classList.remove("active");
});
ques2.addEventListener("click", function() {
    ques2.classList.toggle("active");
    ques1.classList.remove("active");
    ques3.classList.remove("active");
});
ques3.addEventListener("click", function() {
    ques3.classList.toggle("active");
    ques1.classList.remove("active");
    ques2.classList.remove("active");
});