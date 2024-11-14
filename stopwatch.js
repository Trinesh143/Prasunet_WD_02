// Grabbing the necessary elements
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const lapsList = document.getElementById('lapsList');

let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let isRunning = false;

// Start button functionality
startBtn.addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(runTimer, 10); // Update every 10ms
  }
});

// Pause button functionality
pauseBtn.addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
});

// Reset button functionality
resetBtn.addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  updateDisplay();
  lapsList.innerHTML = ''; // Clear laps
});

// Lap button functionality
lapBtn.addEventListener('click', () => {
  if (isRunning) {
    const lapTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap: ${lapTime}`;
    lapsList.appendChild(lapItem);
  }
});

// Timer function
function runTimer() {
  milliseconds++;
  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  updateDisplay();
}

// Update the display
function updateDisplay() {
  millisecondsDisplay.textContent = formatTime(milliseconds);
  secondsDisplay.textContent = formatTime(seconds);
  minutesDisplay.textContent = formatTime(minutes);
}

// Format the time to always have two digits
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
