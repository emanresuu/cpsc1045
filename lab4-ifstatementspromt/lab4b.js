var question1 = document.getElementById("q1");  // make references to the
var question2 = document.getElementById("q2");  // html document
var question3 = document.getElementById("q3");
var question4 = document.getElementById("q4");
var question5 = document.getElementById("q5");
var grandTotal = document.getElementById("total");

var rand1a = Math.floor(Math.random() * 10 + 1);  // randomly generate number
var rand1b = Math.floor(Math.random() * 10 + 1);  // for the test question
var rand2a = Math.floor(Math.random() * 10 + 1);
var rand2b = Math.floor(Math.random() * 10 + 1);
var rand3a = Math.floor(Math.random() * 10 + 1);
var rand3b = Math.floor(Math.random() * 10 + 1);
var rand4a = Math.floor(Math.random() * 10 + 1);
var rand4b = Math.floor(Math.random() * 10 + 1);
var rand5a = Math.floor(Math.random() * 10 + 1);
var rand5b = Math.floor(Math.random() * 10 + 1);

var answer1 = window.prompt(rand1a + "+" + rand1b + "=");  // ask the question
var answer2 = window.prompt(rand2a + "+" + rand2b + "=");
var answer3 = window.prompt(rand3a + "+" + rand3b + "=");
var answer4 = window.prompt(rand4a + "+" + rand4b + "=");
var answer5 = window.prompt(rand5a + "+" + rand5b + "=");

var solution1 = rand1a + rand1b;  // calculate the solution
var solution2 = rand2a + rand2b;
var solution3 = rand3a + rand3b;
var solution4 = rand4a + rand4b;
var solution5 = rand5a + rand5b;

if (isNaN(Number(answer1))) {  // find out if the input was a number,
   var conclusion1 = "Wrong";  // correct, or incorrect.
} else if (Number(answer1) === solution1) {
   var conclusion1 = "Correct";
} else {
   var conclusion1 = "Wrong";
}

if (isNaN(Number(answer2))) {
   var conclusion2 = "Wrong";
} else if (Number(answer2) === solution2) {
   var conclusion2 = "Correct";
} else {
   var conclusion2 = "Wrong";
}

if (isNaN(Number(answer3))) {
   var conclusion3 = "Wrong";
} else if (Number(answer3) === solution3) {
   var conclusion3 = "Correct";
} else {
   var conclusion3 = "Wrong";
}

if (isNaN(Number(answer4))) {
   var conclusion4 = "Wrong";
} else if (Number(answer4) === solution4) {
   var conclusion4 = "Correct";
} else {
   var conclusion4 = "Wrong";
}

if (isNaN(Number(answer5))) {
   var conclusion5 = "Wrong";
} else if (Number(answer5) === solution5) {
   var conclusion5 = "Correct";
} else {
   var conclusion5 = "Wrong";
}

question1.innerHTML = rand1a + "+" + rand1b + "=<br/>Answer = "  // send message
   + solution1 + "<br/>" + "Your answer " + answer1 + " is "     // to the 
   + conclusion1;                                                // referenced

question2.innerHTML = rand2a + "+" + rand2b + "=<br/>Answer = "  // html section
   + solution2 + "<br/>" + "Your answer " + answer2 + " is "
   + conclusion2;

question3.innerHTML = rand3a + "+" + rand3b + "=<br/>Answer = "
   + solution3 + "<br/>" + "Your answer " + answer3 + " is "
   + conclusion3;

question4.innerHTML = rand4a + "+" + rand4b + "=<br/>Answer = "
   + solution4 + "<br/>" + "Your answer " + answer4 + " is "
   + conclusion4;

question5.innerHTML = rand5a + "+" + rand5b + "=<br/>Answer = "
   + solution5 + "<br/>" + "Your answer " + answer5 + " is "
   + conclusion5;
   
// Calculate the grand total
if (conclusion1 === "Correct") {  // convert correct to 1 and false to 0
   var n1 = 1;
} else {
   var n1 = 0;
}

if (conclusion2 === "Correct") {
   var n2 = 1;
} else {
   var n2 = 0;
}

if (conclusion3 === "Correct") {
   var n3 = 1;
} else {
   var n3 = 0;
}

if (conclusion4 === "Correct") {
   var n4 = 1;
} else {
   var n4 = 0;
}

if (conclusion5 === "Correct") {
   var n5 = 1;
} else {
   var n5 = 0;
}

grandTotal.innerHTML = "You total is " + (n1 + n2 + n3 + n4 + n5);