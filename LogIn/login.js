


// Set enter_key to press enter_button
let input = document.querySelector('input');
input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        document.getElementById('enter_button').click();
    }
})


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
            // TODO
        }
        else {
            alert('Wrong password. Try again!');
        }
    }
    else {
        alert('Wrong username. Try again!');
    }
}




