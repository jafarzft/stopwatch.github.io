
// initializing the variables  
var sec = 0;
var mins = 0;
var hrs = 0;
var interval;

// fetching elements from the document
const hrsEle = document.querySelector('.hrs');
const minsEle = document.querySelector('.mins');
const secEle = document.querySelector('.sec');

// fetching div that contains differnet button
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');


// assigning event to each button
startButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(updatestopWatch, 1000);
});

stopButton.addEventListener('click', () => {
    clearInterval(interval);
});

resetButton.addEventListener('click', () => {
    clearInterval(interval);
    sec = 0;
    mins = 0;
    hrs = 0;
    resetStopWatch();
});

// a function to update the timer in sec mins and hours format
function updatestopWatch() {    
    sec++;
    if (sec >= 60) {
    sec = 0;
    mins++;
    if (mins >= 60) {
        mins = 0;
        hrs++;
    }
}
    secEle.textContent = String(sec).padStart(2, '0');
    minsEle.textContent = String(mins).padStart(2, '0');
    hrsEle.textContent = String(hrs).padStart(2, '0');
}


// a function to update the timer to 00:00:00 when reset button is pressed
function resetStopWatch() {    
    if (sec >= 60) {
    sec = 0;
    mins++;
    if (mins >= 60) {
        mins = 0;
        hrs++;
    }
}
    secEle.textContent = String(sec).padStart(2, '0');
    minsEle.textContent = String(mins).padStart(2, '0');
    hrsEle.textContent = String(hrs).padStart(2, '0');
}