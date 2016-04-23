// Lab 5 Loops (both while and if)
// Written by Nathaniel Prussin

var myDiv = document.getElementById("myDiv");

// 1. Prompt the user for the number of math questions to generate. Never give up.
var pages = Number(window.prompt("How many pages?"));
while (isNaN(pages) || pages < 1) {
   pages = Number(window.prompt("How many pages?"));
}

// 2. Produce the number of questions specified by the user.
var num1;
var num2;
var sum;
var content = "";
for (var i = 0; i < pages; i = i + 1) {
   num1 = Math.floor(Math.random() * 20);
   num2 = Math.floor(Math.random() * 20);
//   sum = randNum1 + randNum2;
   content = content + "<h2>Quesion " + (i + 1) + "</h2>" + num1 + " + " + num2 + " = ?</br>Answer: " + (num1 + num2);
}
myDiv.innerHTML = content;

