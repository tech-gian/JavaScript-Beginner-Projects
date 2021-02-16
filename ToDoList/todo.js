
// Probably not needed function
function getCSSRule(ruleName) {
    ruleName = ruleName.toLowerCase();
    var result = null;
    var find = Array.prototype.find;

    find.call(document.styleSheets, styleSheet => {
        result = find.call(styleSheet.cssRules, cssRule => {
            return cssRule instanceof CSSStyleRule 
                && cssRule.selectorText.toLowerCase() == ruleName;
        });
        return result != null;
    });
    return result;
}


// Global variable
let item_counter = 0;

function add_item() {    
    // Get the input's text
    let text = document.getElementById("main_input").value;
    
    document.getElementById("list").innerHTML += "<li class='list-group-item'>" + text + "<i class='fa fa-times-circle'></i><i class='fa fa-check-circle'></i></i></li>";

    // Add real innerHTML code for the function above
}


function suc_btn(clicked_id) {
    // Use clicked_id to see which button is pressed
    // cross the text and make the background green

    // For already created rules
    // let header = getCSSRule('#' + clicked_id);
    // header.style.backgroundColor = 'green';

    
    // Create new rules
    let style = document.createElement('style');
    // style.type = 'text/css';
    style.innerHTML = '#' + clicked_id + ' { text-decoration: line-through; background-color: rgb(124, 250, 124); }';
    document.getElementsByTagName('head')[0].appendChild(style);
}

function fail_btn(clicked_id) {
    // Delete the item entirely
}




// LINKS
// https://jsbeginners.com/todo-list-javascript-project-v1/
// https://hackerthemes.com/bootstrap-cheatsheet/

