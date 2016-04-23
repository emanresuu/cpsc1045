// Lab 5 Loops
// Written by Nathaniel Prussin

var surface = document.getElementById("drawingSurface");
var ctx1 = surface.getContext("2d");


// 1. Ask the user for two number between 1 and 10 inclusive. Don't give up.
var number1 = Number(window.prompt("Enter a number between 1 and 10."));
while (isNaN(number1) ||
       number1 > 10  ||
       number1 < 1) { number1 = Number(window.prompt("Enter a number between 1 and 10."));
    }

var number2 = Number(window.prompt("Enter a number between 1 and 10."));
while (isNaN(number2) ||
       number2 > 10  ||
       number2 < 1) { number2 = Number(window.prompt("Enter a number between 1 and 10."));
    }

// 2. Draw the number of squares specified by the first question.
ctx1.save();
ctx1.translate(surface.width / 4, 400 / 2 - (number1 * 2 - 1)  * 10 / 2);
for (var i = 0; i < number1; i = i + 1) {
         ctx1.fillRect(0, 20 * i, 10, 10); 
         }
ctx1.restore();       

// 3. Draw the number of squares specified by the second question.
ctx1.save();
ctx1.translate(surface.width / 2, 400 / 2 - (number2 * 2 - 1)  * 10 / 2);
for (var i = 0; i < number2; i = i + 1) {
         ctx1.fillRect(0, 20 * i, 10, 10); 
         }
ctx1.restore(); 

// 4. Draw the total number of squares specified by the user.
ctx1.save();
ctx1.translate(3 * surface.width / 4, 400 / 2 - ((number1 + number2) * 2 - 1)  * 10 / 2);
for (var i = 0; i < (number1 + number2); i = i + 1) {
         ctx1.fillRect(0, 20 * i, 10, 10); 
         }
ctx1.restore(); 

// 5. Draw an equals sign ('=').
ctx1.save();
ctx1.translate(5 * surface.width / 8 - 15, surface.height / 2 - 10);
ctx1.fillRect(0, 0, 40, 10);
ctx1.fillRect(0, 20, 40, 10);
ctx1.restore();

// 6. Draw an addition sign ('+').
ctx1.save();
ctx1.translate(3 * surface.width / 8 - 15, surface.height / 2 - 15);
ctx1.fillRect(0, 15, 40, 10)
ctx1.fillRect(15, 0, 10, 40)
ctx1.restore();
