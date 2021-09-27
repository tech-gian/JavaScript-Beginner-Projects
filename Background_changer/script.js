
// TODO: Add enter button (associate with test it)
//       Add comments

const HEX_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function changeHex() {
    var val = document.querySelector('input').value;
    
    var flag = true;
    for (var i=0 ; i<val.length ; ++i) {
        if (val.length != 7) {
            flag = false;
            break;
        }

        if (i == 0) {
            if (val[i] != '#') {
                flag = false;
                break;
            }
        }
        else {
            var c = val[i];
            if (c != '0' && c != '1' && c != '2' && c != '3' && c != '4' && c != '5' && c != '6' && c != '7' && c != '8' && c != '9' && c != 'A' && c != 'B' && c != 'C' && c != 'D' && c != 'E' && c != 'F') {
                flag = false;
                break;
            }
        }
    }

    if (flag) {
        document.getElementById("hex-color").style.color = 'white';
        document.getElementById("body").style.backgroundColor = val;
    }
    else {
        document.getElementById("hex-color").style.color = 'red';
    }
}

function randomHex() {
    var hex_color = ['#'];

    for (var i=0 ; i<6 ; ++i) {
        hex_color.push(HEX_CHARS[Math.floor((Math.random()*100)) % 16]);
    }

    var final = hex_color.toString().replace(/,/g, '');
    
    document.querySelector('input').value = final;

    document.getElementById("hex-color").style.color = 'white';
    document.getElementById("body").style.backgroundColor = final;
}

