const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(` June 19, 2024 12:55:00  
`);

// Update countdown time
function updateCountdown() {
	const currentTime = new Date();
	const diff = newYearTime - currentTime;


	if (diff <= 0) { window.location.href = "https://ibrahim20088.github.io/ibrahimfun/";  
	return;
}
	
	const d = Math.floor(diff / 1000 / 60 / 60 / 24);
	const h = Math.floor(diff / 1000 / 60 / 60) % 24;
	const m = Math.floor(diff / 1000 / 60) % 60;
	const s = Math.floor(diff / 1000) % 60;

	// days.innerHTML = d;
	// hours.innerHTML = h < 10 ? '0' + h : h;
	minutes.innerHTML = m < 10 ? '0' + m : m;
	seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);
