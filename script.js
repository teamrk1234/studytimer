let seconds = 0;
let timerInterval = null;

function startTimer() {
    if (timerInterval !== null) return;

    timerInterval = setInterval(() => {
        seconds++;
        updateDisplay();
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    seconds = 0;
    updateDisplay();
}

function updateDisplay() {
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;

    document.getElementById("timer").textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(secs).padStart(2, "0");
}
