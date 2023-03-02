if (sessionStorage.getItem("responseTxt") != null) {
    const responseTextSpan = document.querySelector(".response-text-span");
    responseTextSpan.innerHTML = sessionStorage.getItem("responseTxt");
};