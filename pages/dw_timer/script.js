var minutes = 25;
var seconds = 0;
var timer;
var isRunning = false;

function startTimer() {
    isRunning = true;
    timer = setInterval(function() {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timer);
                isRunning = false;
                alert("Time's up!");
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }

        document.getElementById("minutes").textContent = padTime(minutes);
        document.getElementById("seconds").textContent = padTime(seconds);
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    minutes = 25;
    seconds = 0;
    document.getElementById("minutes").textContent = "25";
    document.getElementById("seconds").textContent = "00";
    isRunning = false;
    clearInterval(timer);
}

function padTime(time) {
    return time < 10 ? "0" + time : time;
}

window.addEventListener('DOMContentLoaded', function() {
    document.getElementById("startBtn").addEventListener('click', function() {
        if (!isRunning) {
            startTimer();
        }
    });

    document.getElementById("pauseBtn").addEventListener('click', function() {
        if (isRunning) {
            pauseTimer();
        }
    });

    document.getElementById("resetBtn").addEventListener('click', function() {
        resetTimer();
    });
});