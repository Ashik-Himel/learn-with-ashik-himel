function deadline() {
    const day = document.querySelector(".day");
    const hour = document.querySelector(".hour");
    const minute = document.querySelector(".minute");
    const second = document.querySelector(".second");
    const d = new Date();
    const lastD = new Date("February 26, 2023 23:59:59");
    let diffMili = lastD.getTime() - d.getTime();
    if (diffMili > 0) {
        day.innerHTML = Math.floor(diffMili / 86400000);
        diffMili %= 86400000;
        hour.innerHTML = Math.floor(diffMili / 3600000);
        diffMili %= 3600000;
        minute.innerHTML = Math.floor(diffMili / 60000);
        diffMili %= 60000;
        second.innerHTML = Math.floor(diffMili / 1000);
    }
    else {
        const enrollNowBtn = document.querySelector(".enroll-now-btn");
        const deadlinePopup = document.querySelector(".deadline-popup");
        const deadlinePopupClose = document.querySelector(".deadline-popup .close-btn");
        enrollNowBtn.href = "#/";
        enrollNowBtn.addEventListener("click", function() {
            deadlinePopup.classList.add("active");
        });
        deadlinePopupClose.addEventListener("click", function() {
            deadlinePopup.classList.remove("active");
        })
    }
};
setInterval(deadline, 1000);