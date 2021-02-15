//////////////////////////////////////
// JavaScript code for function needed
// to do actions with buttons
//////////////////////////////////////


// Calculator Functions
///////////////////////

// Initial values
let numbers = [0, 0];
let i = 0;
let operation = '.';


// Press ... functions

function p0() {
    document.getElementById("screen").innerHTML += '0';
    numbers[i] *= 10;
    numbers[i] += 0;
}
function p1() {
    document.getElementById("screen").innerHTML += '1';
    numbers[i] *= 10;
    numbers[i] += 1;
}
function p2() {
    document.getElementById("screen").innerHTML += '2';
    numbers[i] *= 10;
    numbers[i] += 2;
}
function p3() {
    document.getElementById("screen").innerHTML += '3';
    numbers[i] *= 10;
    numbers[i] += 3;
}
function p4() {
    document.getElementById("screen").innerHTML += '4';
    numbers[i] *= 10;
    numbers[i] += 4;
}
function p5() {
    document.getElementById("screen").innerHTML += '5';
    numbers[i] *= 10;
    numbers[i] += 5;
}
function p6() {
    document.getElementById("screen").innerHTML += '6';
    numbers[i] *= 10;
    numbers[i] += 6;
}
function p7() {
    document.getElementById("screen").innerHTML += '7';
    numbers[i] *= 10;
    numbers[i] += 7;
}
function p8() {
    document.getElementById("screen").innerHTML += '8';
    numbers[i] *= 10;
    numbers[i] += 8;
}
function p9() {
    document.getElementById("screen").innerHTML += '9';
    numbers[i] *= 10;
    numbers[i] += 9;
}


// Functions for operations

function padd() {
    document.getElementById("screen").innerHTML += '+';
    if (operation == '.') {
        i = 1;
        operation = '+';
    }
    else {
        numbers[0] += numbers[1];
        numbers[1] = 0;
        operation = '.';
        i = 0;
    }
}
function pmin() {
    document.getElementById("screen").innerHTML += '-';
    if (operation == '.') {
        i = 1;
        operation = '-';
    }
    else {
        numbers[0] -= numbers[1];
        numbers[1] = 0;
        operation = '.';
        i = 0;
    }
}
function pmul() {
    document.getElementById("screen").innerHTML += '*';
    if (operation == '.') {
        i = 1;
        operation = '*';
    }
    else {
        numbers[0] *= numbers[1];
        numbers[1] = 0;
        operation = '.';
        i = 0;
    }
}
function pdiv() {
    document.getElementById("screen").innerHTML += '/';
    if (operation == '.') {
        i = 1;
        operation = '/';
    }
    else {
        // If numbers[1] == 0, then infinity shows up
        numbers[0] /= numbers[1];
        numbers[1] = 0;
        operation = '.';
        i = 0;
    }
}


// Function to clean screen

function clean() {
    numbers[0] = 0;
    numbers[1] = 0;
    i = 0;
    operation = '.';
    document.getElementById("screen").innerHTML = '';
}


// Function for Enter_button

function get_result() {
    if (operation == '+') {
        numbers[0] += numbers[1];
    }
    else if (operation == '-') {
        numbers[0] -= numbers[1];
    }
    else if (operation == '*') {
        numbers[0] *= numbers[1];
    }
    else if (operation == '/') {
        numbers[0] /= numbers[1];
    }
    document.getElementById("screen").innerHTML = numbers[0];

    // Get the numbers back to initial values
    i = 0;
    operation = '.';
    numbers[1] = 0;
}


// Helping Function
function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}


// Clock functions
//////////////////

// Initial values
let date = new Date();
let hours = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let el = document.getElementById("clock");

// Initial time
el.innerHTML = pad(hours) + ' : ' + pad(min) + ' : ' + pad(sec);

function incrementSeconds() {
    sec += 1;
    if (sec == 60) {
        sec = 0;
        min += 1;
        if (min == 60) {
            min = 0;
            hours += 1;
            if (hours == 24) {
                hours = 0;
            }
        }
    }
    el.innerHTML = pad(hours) + ' : ' + pad(min) + ' : ' + pad(sec);
}

let cancel = setInterval(incrementSeconds, 1000);



// Stopwatch functions
//////////////////////

// Initial values
let hour = 0;
let mins = 0;
let secs = 0;
let dec_sec = 0;
let el1 = document.getElementById("time");
let can;
let pressed = false;

// Initial time
el1.innerHTML = pad(hour) + ' : ' + pad(mins) + ' : ' + pad(secs) + ' . ' + dec_sec.toString();

// Function for what is displayed in the watch
function watch() {
    dec_sec += 1;
    if (dec_sec == 10) {
        dec_sec = 0;
        secs += 1;
        if (secs == 60) {
            secs = 0;
            mins += 1;
            if (mins == 60) {
                mins = 0;
                hour += 1;
            }
        }
    }
    el1.innerHTML = pad(hour) + ' : ' + pad(mins) + ' : ' + pad(secs) + ' . ' + dec_sec.toString();
}


// Function for Start_button
function start() {
    if (pressed == true) {
        clearInterval(can);
    }
    pressed = true;
    can = setInterval(watch, 100);
}

// Function for Stop_button
function stop() {
    pressed = false;
    clearInterval(can);
}

// Function for reset_button
function reset() {
    clearInterval(can);
    hour = 0;
    mins = 0;
    secs = 0;
    dec_sec = 0;
    el1.innerHTML = pad(hour) + ' : ' + pad(mins) + ' : ' + pad(secs) + ' . ' + dec_sec.toString();
}
