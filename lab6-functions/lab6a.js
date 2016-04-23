// Define function to check for valid user inputs.
function isValidNumber(inputNum, validMin, validMax) {
    "use strict";
    if (!isNaN(inputNum) && !isNaN(validMin) && !isNaN(validMax)) {
        if ((validMin === inputNum || validMin < inputNum) && (inputNum < validMax || inputNum === validMax)) {
            return true;
        }
    }
    return false;
}

// Ask the user for a valid number of objects to draw.
var N = Number(window.prompt("How many objects should I draw?"));
while (!isValidNumber((N), 1, Infinity)) {
    N = Number(window.prompt("I'm pretty stupid. I can only draw 1 to infinite pictures."));
}

// Ask the user for a valid radius at which to draw the objects.
var R = Number(window.prompt("Please enter a radius."));
while (!isValidNumber((R), 1, 250)) {
    R = Number(window.prompt("I'm pretty stupid. I can only draw at a radius of 1 to 250."));
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Define a function that draws N rectangles equally distributed around a circle of radius R.
function drawObject(N, R) {
    "use strict";
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    var i;
    for (i = 0; i < N; i = i + 1) {
        ctx.rotate(2 * Math.PI / N);
        ctx.fillRect(R, -5, 10, 10);
    }
    ctx.restore();
}
drawObject(N, R);








