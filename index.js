let timer;
let isRunning = false;
let timeLeft = 1500;

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById("timer-display").textContent = `${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(timer);
        isRunning = false;
      }
    }, 1000);
  }
}


function stopTimer() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = 0; // Stop the timer
  updateDisplay();
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 1500; // Reset to 25 minutes
    updateDisplay();
}

function setShortBreak() {
  timeLeft = 300; // 5 minutes
  updateDisplay();
}

function setLongBreak() {
  timeLeft = 900; // 15 minutes
  updateDisplay();
}

document.getElementById("start-btn").addEventListener("click", startTimer);
document.getElementById("reset-btn").addEventListener("click", resetTimer);
document.getElementById("stop-btn").addEventListener("click", stopTimer);
document.getElementById("short-break-btn").addEventListener("click", setShortBreak);
document.getElementById("long-break-btn").addEventListener("click", setLongBreak);

updateDisplay();
