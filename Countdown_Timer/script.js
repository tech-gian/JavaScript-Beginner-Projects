// JS Functions
///////////////


// Constant values
const div_days = 24 * 60 * 60 * 1000;
const div_hours = 60 * 60 * 1000;
const div_minutes = 60 * 1000;
const div_seconds = 1000;


// Main function running
setInterval(timer, 1000);

// Timer function to create the countdown
function timer() {
    var new_year = new Date(2022, 0, 1, 0, 0, 1);
    var current = Date.now();

    var diff = new_year - current;

    var days = Math.floor(diff / div_days);
    diff = diff % div_days;

    var hours = Math.floor(diff / div_hours);
    diff = diff % div_hours;

    var minutes = Math.floor(diff / div_minutes);
    diff = diff % div_minutes;

    var seconds = Math.floor(diff / div_seconds);

    document.getElementById('days').innerHTML = formatTime(days);
    document.getElementById('hours').innerHTML = formatTime(hours);
    document.getElementById('minutes').innerHTML = formatTime(minutes);
    document.getElementById('seconds').innerHTML = formatTime(seconds);
}

// Function to create 2-digit numbers
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
