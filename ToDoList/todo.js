////////////////////////////////////////////////////////
// Javascript functions needed to work the site properly
////////////////////////////////////////////////////////


// Set enter_key to press input_button
let input = document.querySelector('input');
input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        document.getElementById('button_input').click();
    }
})


// Global variable
let item_counter = 0;

// Function to add an item
function add_item() {    
    // Get the input's text
    let text = document.getElementById("main_input").value;
    
    document.getElementById("list").innerHTML += '<li id="item' + item_counter.toString() + '" class="list-group-item">' + text +
    '<button type="button" class="btn btn-outline-danger" onclick="fail_btn(this.parentNode.id)"><i class="fa fa-times-circle"></i></button>' +
    '<button type="button" class="btn btn-outline-success" onclick="suc_btn(this.parentNode.id)"><i class="fa fa-check-circle"></i></button>' +
    '</li>';

    item_counter += 1;
}

// Function for success button
function suc_btn(clicked_id) {
    // Create new css rules
    let style = document.createElement('style');
    style.innerHTML = '#' + clicked_id + ' { text-decoration: line-through; background-color: rgb(124, 250, 124); }';
    document.getElementsByTagName('head')[0].appendChild(style);
}

// Function for fail button
function fail_btn(clicked_id) {
    // Delete the item entirely
    // (set the display property to none)
    let style = document.createElement('style');
    style.innerHTML = '#' + clicked_id + ' { display: none; }';
    document.getElementsByTagName('head')[0].appendChild(style);
}

// Function for clear_all button
function clear_all() {
    for (let i=0 ; i<item_counter ; ++i) {
        let style = document.createElement('style');
        style.innerHTML = '#item' + i.toString() + ' { display: none; }';
        document.getElementsByTagName('head')[0].appendChild(style);
    }
}
