/////////////////////////////////////////////////////
// Javascript functions needed for the implementation
/////////////////////////////////////////////////////


// Set enter_key to press input_button
let input = document.querySelector('input');
input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        document.getElementById('button_enter').click();
    }
})


// Global helping variable
let caps = -1;

// When key is pressed, add this character to input_form
function key(button_text) {
    // When backspace is pressed
    if (button_text == "bcksp") {
        let array = document.getElementById("input_text").value;

        for (let i=0 ; i<array.length ; ++i) {
            let output = array.slice(0, -1);
            document.getElementById("input_text").value = output;
        }
    }
    // When capslock is pressed
    else if (button_text == 'caps') {
        caps *= (-1);
    }
    // When everything else is pressed
    else if (caps > 0) {
        document.getElementById("input_text").value += button_text.toUpperCase();
    }
    else {
        document.getElementById("input_text").value += button_text;
    }
}

// Enter function to display the text
function enter() {
    let text = document.getElementById("input_text").value;
    alert("The text you wrote is: " + text);
}
