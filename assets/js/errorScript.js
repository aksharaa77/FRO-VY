// Countdown redirect
let timeLeft = 10;
const countdownEl = document.getElementById("countdown");

const timer = setInterval(() => {
    timeLeft--;
    countdownEl.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timer);
        window.location.href = "index.html"; // Change to your home page
    }
}, 1000);

// Button redirect
document.getElementById("homeBtn").addEventListener("click", () => {
    window.location.href = "index.html"; // Change to your homepage
});
