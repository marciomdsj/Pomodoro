var cronometer = document.querySelector(".cronometer");
var restTimer = document.querySelector(".restTimer");
var helpText = document.querySelector(".helpText");
var startText = document.querySelector(".startText");
var counter = document.querySelector(".counter");
var timerRunning = false;
var intervalRunning = false;
var time = 0;
var restTime = 60 * 5;
var timeLimit = 25 * 60;
var timerInterval;  // Declare as variáveis no escopo global
var intervalInterval;
var count = 0;

function startTimer() {
    if (!intervalRunning) {
        if (!timerRunning) {
            // Inicia o cronômetro
            timerRunning = true;
            timerInterval = setInterval(() => {
                if (time <= timeLimit) {
                    cronometer.innerText = time;
                    time++;
                } else {
                    helpText.innerText = "The time is up, take a break!";
                    clearInterval(timerInterval);
                    intervalRunning = true;
                }
            }, 1); // Use 1000 ms para representar 1 segundo
        } else {
            // Pausa o cronômetro
            clearInterval(timerInterval);
            timerRunning = false;
        }
    }
}

function executeRestTime() {
    if (intervalRunning) {
        intervalInterval = setInterval(() => {
            if (time <= timeLimit + restTime) {
                restTimer.innerText = time - timeLimit;
                time++;
            } else {
                startText.innerText = "The break is over, let's get started!";
                clearInterval(intervalInterval);
                timerRunning = false;
                intervalRunning = false;
            }
        }, 1);
    }
}

function resetTimers() {
    time = 0;
    cronometer.innerText = "0";
    restTimer.innerText = "0";
    helpText.innerText = "Keep studying!";
    startText.innerText = "Keep focus!";
    clearInterval(timerInterval);
    clearInterval(intervalInterval);
    timerRunning = false;
    intervalRunning = false;
    countPomodoro();
}

function countPomodoro(){
    count++;
    counter.innerText = count;
}


document.getElementById("startButton").addEventListener("click", startTimer);
document.getElementById("pauseButton").addEventListener("click", executeRestTime);
document.getElementById("restartButton").addEventListener("click", resetTimers);
//document.getElementById("restartButton").addEventListener("click", countPomodoro);