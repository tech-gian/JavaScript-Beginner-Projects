


// Set enter_key to press enter_button
let input = document.getElementById("password");
let input1 = document.getElementById("username");

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("enter_button").click();
    }
});
input1.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();

        document.getElementById("enter_button").click();
    }
});


// Global credentials
let username = 'giannis';
let password = '1234';


function show_pass() {
    let x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    }
    else {
        x.type = "password";
    }
}


function enter() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user == username) {
        if (pass == password) {
            window.open("next_page.html");
        }
        else {
            alert('Wrong password. Try again!');
        }
    }
    else {
        alert('Wrong username. Try again!');
    }
}




