function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    if (diff <= 0) {
        window.location.href = "https://ibrahim20088.github.io/ibrahimfun/";
        return; // Exit the function to stop further countdown updates
    }

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);
