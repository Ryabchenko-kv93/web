function dis(val) {
    document.getElementById("result").value += val
}

function myFunction(event) {
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '/')
        document.getElementById("result").value += event.key;
}

var cal = document.getElementById("calcu");
cal.onkeyup = function (event) {
    if (event.keyCode === 13) {
        console.log("Enter");
        let x = document.getElementById("result").value
        console.log(x);
        solve();
    }
}

function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        console.log(
            `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
        );
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    document.getElementById("bin-result").value = bin;
    console.log(`Binary: ${bin}`);
}

function convertToHex(x) {
    let result = "0";
    result = x.toString(16);
    result = result.toUpperCase();
    document.getElementById("hex-result").value = result;
}

// Function that evaluates the digit and return result
function solve() {
    let x = document.getElementById("result").value;
    let y = math.evaluate(x);
    document.getElementById("result").value = y;
    convertToBinary(y);
    convertToHex(y);
}

// Function that clear the display
function clr() {
    document.getElementById("result").value = "0";
    document.getElementById("bin-result").value = "0";
    document.getElementById("hex-result").value = "0";
}